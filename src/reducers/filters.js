const filterReducerDefaultState = {
    text: '',
    category:'All'
}

export default (state=filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
         return {
             ...state,
             text: action.text
         }
         case 'SET_CATEGORY_FILTER':
         return {
             ...state,
             category: action.category
         }
         default: 
        return state;
    }
}