const initialState={
    workers: "GGOGOOGGOGOGOOGOGOG"
};

export default (state = initialState , action)=>{
  switch (action.type){
      case 'SET_WORKERS':
          return{
              ...state,
              workers: action.payload,
          };
          break;
      default :
          return  state;
  }
}