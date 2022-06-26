import pizza from "../apis/pizza";
import { ADD_TO_CART, DELETE_ITEM, ERROR, UPDATE_QTY } from "./types"

export const addToCart=(item)=>async (dispatch,getState)=>{
   
    
 try {

     dispatch({type:ADD_TO_CART,payload:{
         name:item.name,
         price:item.price,
         image:item.image,
         description:item.description,
         product:item._id,
         qty:1
        }
        })
    localStorage.setItem('cartItems',JSON.stringify( getState().cart.cartItems)) 
 } catch (error) {
     dispatch({type:ERROR,payload:'Failed to Add!'})
 }
}

export const upadteCart =(product,qty)=>async(dispatch,getState)=>{

    try {
        dispatch({type:UPDATE_QTY,payload:{...product,qty:qty}})
    localStorage.setItem('cartItems',JSON.stringify( getState().cart.cartItems)) 

    } catch (error) {
        dispatch({type:ERROR,payload:'Failed to Update!'})
    }
}


export const deleteItem = (id)=>async(dispatch,getState)=>{
  try {
      dispatch({type:DELETE_ITEM,payload:id})
    localStorage.setItem('cartItems',JSON.stringify( getState().cart.cartItems)) 

  } catch (error) {
    dispatch({type:ERROR,payload:'Failed to Delete!'})
      
  }
}