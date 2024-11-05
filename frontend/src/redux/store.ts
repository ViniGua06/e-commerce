import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/slice";
import storage from "redux-persist/lib/storage";

import { persistReducer, persistStore } from "redux-persist";
import { storeReducer } from "./store/slice";
import { productReducer } from "./cart/slice";
import { sheetReducer } from "./sheet/slice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);
const persistedStoreReducer = persistReducer(persistConfig, storeReducer);
const persistedProductReducer = persistReducer(persistConfig, productReducer);
const persistedSheetReducer = persistReducer(persistConfig, sheetReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    store: persistedStoreReducer,
    product: persistedProductReducer,
    sheet: persistedSheetReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
