
 
 export const globalReducer = (state,action)=>{
        if(action.type == "TEST"){
              return {...state,testText:"working working"}
        }

        return state
 }
