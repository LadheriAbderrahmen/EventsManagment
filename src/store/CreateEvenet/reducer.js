const initialState = {
  };
  
  const someReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ACTION_TYPE':
        // Handle the action
        return {
          ...state,
          // new state here
        };
      default:
        return state;
    }
  };
  
  export default someReducer;
  