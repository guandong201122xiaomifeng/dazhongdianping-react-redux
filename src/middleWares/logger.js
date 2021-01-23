/**
 * 打印action, state
 */
const logger = ({ getState, dispatch }) => {
  return (next) => {
    return (action) => {
      console.group("logger ", action.type);
      console.log("logger ", "dispatching:", action);
      // next来把action传递给下一个中间件
      const result = next(action);
      console.log("logger next：", next);
      console.log("logger ", "next state: ", getState());
      console.log("logger result: ", result);
      console.groupEnd();
      return result;
    };
  };
};
export default logger;
