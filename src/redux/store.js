import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initstate={
    counter:0,
    Todos:[],
    isLoading:false,
    isError:false,

}
export const store =legacy_createStore(reducer,initstate)