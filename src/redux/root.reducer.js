import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// brings the actual localStorage on window browser
// as default storage
// alt.: sessionStorage

import userReducer from "./user/user.reducer.js";
import cartReducer from "./cart/cart.reducer.js";
import directoryReducer from "./directory/directory.reducer.js";
import shopReducer from "./shop/shop.reducer.js";

const persistConfig = {
  // at what point inside reducer
  // do we want to start storing everything
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
// returns a modified version of rootReducer
// with persistence capabilities
