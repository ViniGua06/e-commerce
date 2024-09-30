import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/slice";
import storage from "redux-persist/lib/storage";

import { persistReducer, persistStore } from "redux-persist";
import { storeReducer } from "./store/slice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);
const persistedStoreReducer = persistReducer(persistConfig, storeReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    store: persistedStoreReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
