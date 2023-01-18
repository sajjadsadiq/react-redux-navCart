import { createStore } from "redux";
import ProductReducer from "./reducer/ProductReducer";

const store = createStore(ProductReducer);
export default store;
