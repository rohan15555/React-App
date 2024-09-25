import react, {Children, createContext,useReducer} from 'react';

export const TodoAppCotext =createContext();

export const TodoProvider =({Children})=>{
  const [state, dispatch] =useReducer(todoReducer, initialstate);

}