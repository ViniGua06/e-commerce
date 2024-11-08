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
      if (state.products.find((p) => p._id === payload.product._id)) {
        return;
      }

      const newProduct: IProduct = {
        ...payload.product,
        priceAfterDemand: payload.product.price,
        demand: 1,
      };

      state.products.push(newProduct);
    },

    increaseDemand(state, { payload }: PayloadAction<{ id: string }>) {
      const productIndex = state.products.findIndex(
        (p) => p._id === payload.id
      );

      if (productIndex === -1) {
        return;
      }

      const product = state.products[productIndex];
      if (product.quantity && product.demand! < product.quantity) {
        product.demand! += 1;
        product.priceAfterDemand = product.price * product.demand!;
      }
    },

    decreaseDemand(state, { payload }: PayloadAction<{ id: string }>) {
      const productIndex = state.products.findIndex(
        (p) => p._id === payload.id
      );

      if (productIndex === -1) return;

      const product = state.products[productIndex];

      if (product.demand! > 1) {
        product.demand! -= 1;
        product.priceAfterDemand = product.price * product.demand!;
      } else {
        state.products.splice(productIndex, 1);
      }
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
