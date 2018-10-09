export default (state = null, action) => {
  // console.log(action);
  // return null;  // cannot be undefined
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};