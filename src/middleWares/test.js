const test = ({ getState, dispatch }) => {
  return (next) => {
    return (action) => {
      console.log("test begin");
      console.group();
      console.log("test: ", action.type);
      console.log("test: ", next);
      const res = next(action);
      console.groupEnd();
      return res;
    };
  };
};
export default test;
