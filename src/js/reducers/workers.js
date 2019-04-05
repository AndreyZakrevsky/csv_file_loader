const initialState={
    workers:[],
    count:0
};

export default (state = initialState , action)=>{
  switch (action.type){
      case 'SET_WORKERS':
          return{
              ...state,
              workers: action.payload,
          };

        case 'ADD_COUNT':
            return{
                ...state,
                count: state.count + action.payload,
            };   
          break;
      default :
          return  state;
  }
}