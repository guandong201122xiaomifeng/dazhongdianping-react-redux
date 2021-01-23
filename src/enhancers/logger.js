import { createStore } from "redux";

const logger = (createStore) => {
  return (...args) => {
    const store = createStore(...args);
    const dispatch = (action) => {
      console.group(action.type);
      console.log("logger enhancer dispatching: ", action);
      const result = store.dispatch(action);
      console.log("logger enhancer next state:", store.getState());
      console.groupEnd();
      return result;
    };
    return { ...store, dispatch };
  };
};
export default logger;
