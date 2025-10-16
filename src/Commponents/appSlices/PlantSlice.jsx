import { createSlice, configureStore } from '@reduxjs/toolkit'
import { plantsArray } from './PlantData'
const PlantSlice = createSlice({
  name : 'plant',
  initialState: {
  plants: plantsArray ,
  plantsCart :[] ,
  },
  reducers:{
    addToCart:(state, action)=> {
      // const myProducts = state.plants
      const myCart = state.plantsCart
      const [item , catgeroyName] = action.payload
      const newItem = {...item , quantity: 1}
      
      // check if the category name in my data  
      
      const myCategory = myCart.find((c)=> c.catgeroyName === catgeroyName)
      if (myCategory){
        // check if the item already in the cart 
        const founded = myCategory.products.some((p)=> p.name === newItem.name)
        // if not in , add to the cart
        if (!founded){
          myCategory.products.push(newItem)

        }
      } else {
        myCart.push({catgeroyName : catgeroyName, products:[newItem]})

      }

      // ?? how i disapled the button if found in the cart ??
    }, deletAll:(state) => {
      state.plantsCart = []
    },
    
    // remove item form the cart 
        removeFromCart:(state, action)=> {
          const myCart = state.plantsCart
          const myitemName = action.payload.itemName
          const myCategoryName = action.payload.catgeroyName

          const myCategory = myCart.find((c)=> c.catgeroyName === myCategoryName  )
          if (myCategory) (
            myCategory.products = myCategory.products.filter((p) => p.name !== myitemName)
          );

      },
    // increase the quatity 
        increaseQuantity:(state, action)=> {
          const myCart = state.plantsCart
          const myitemName = action.payload.itemName
          const myCategoryName = action.payload.catgeroyName

          const myCategory = myCart.find((c)=> c.catgeroyName === myCategoryName  )
          const myProduct = myCategory.products.find((p)=> p.name === myitemName  )
          if (myCategory && myProduct) (
            myProduct.quantity +=1

          );

      },
    // decrease the quantity 
        decreaseQuantity:(state, action)=> {
          const myCart = state.plantsCart
          const myitemName = action.payload.itemName
          const myCategoryName = action.payload.catgeroyName

          const myCategory = myCart.find((c)=> c.catgeroyName === myCategoryName  )
          const myProduct = myCategory.products.find((p)=> p.name === myitemName  )
          if (myCategory && myProduct && myProduct.quantity > 1) (
            myProduct.quantity -=1

          );

      },
  }
}
)

export const { addToCart, deletAll , removeFromCart , increaseQuantity , decreaseQuantity } = PlantSlice.actions
export default PlantSlice.reducer
