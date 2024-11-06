import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/Product";
import { RootState } from "../store";

interface ICart {
  products: IProduct[];
}

const initialState: ICart = {
  products: [],
};

const slice = createSlice({
  initialState: initialState,
  name: "Cart",
  reducers: {
    addProduct(state, { payload }: PayloadAction<{ product: IProduct }>) {
      if (state.products.find((p) => p._id == payload.product._id)) {
        return;
      }
      payload.product.demand = 1;

      state.products.push(payload.product);
    },

    increaseDemand(state, { payload }: PayloadAction<{ id: string }>) {
      const id = payload.id;

      const product = state.products.findIndex((p) => p._id == id);

      if (product == -1) {
        return;
      }

      if (
        state.products[product].quantity <
        state.products[product].demand! + 1
      ) {
        return;
      }

      state.products[product].demand! += 1;
    },

    decreaseDemand(state, { payload }: PayloadAction<{ id: string }>) {
      const product = state.products.find((p) => p._id == payload.id);

      if (!product) return;

      if (product.demand! - 1 == 0) {
        const filteredArray = state.products.filter((p) => p._id != payload.id);
        state.products = filteredArray;
        return;
      }

      const index = state.products.findIndex((p) => p._id == payload.id);

      state.products[index].demand! -= 1;
    },

    clearCart(state) {
      return initialState;
    },
  },
});

export const cartReducer = slice.reducer;
export const { addProduct, increaseDemand, clearCart, decreaseDemand } =
  slice.actions;
export const productSelector = (state: RootState) => state.cart;
