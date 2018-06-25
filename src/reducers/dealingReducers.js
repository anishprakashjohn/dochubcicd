const dealingsReducerDefaultState = [];

export default (state=dealingsReducerDefaultState, action) => {

    switch (action.type){
        case 'ADD_DEALING':
          return [...state,action.dealing]
        
        case 'REMOVE_DEALING':
          return state.filter(element => action.id!=element.id)
        
          case 'EDIT_DEALING':
          return state.map((dealing) => {
            if (dealing.id === action.id) {
              return {
                ...dealing,
                ...action.updates
              };
            } else {
              return dealing;
            };
          });
        
        case 'SET_DEALINGS':
          return action.dealings;

        default:
          return state;
    }

    
}