
const initialState = {
    connection: null,
  };
  
  const connectionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CONNECTION':
        return {
          ...state,
          connection: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default connectionReducer;
  