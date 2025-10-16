import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addToCart } from "./appSlices/PlantSlice"
import { useState } from "react"

const Products = () => {
  const plantData = useSelector((state) => state.plant.plants)
  const cart = useSelector((state) => state.plant.plantsCart)
  const dispatch = useDispatch()
  
  // style shadow 
  const shadowBackgroundEffect = `transition-all  hover:shadow-[14px_14px_green] hover:-translate-y-2 hover:-translate-x-2   duration-300 ease-out `
  // function to add product to the cart 
  const handelAddProduct = (product,catgeroyName)=>{
    dispatch(addToCart([product,catgeroyName] ))
    setShow(true)
  }

  return (
    <div className="text-black py-5">      

      {plantData.map((p,i)=> 
      <div key={i}>
        {/* category product  */}
        <h1 className="relative text-3xl m-auto text-center py-2 font-medium border-y-2 w-fit  md:w-full">
          {p.category}
          <div className="absolute inset-0 backdrop-blur-md bg-black/20 -z-50"></div>
        </h1>

        {/* list of prducts  */}
        <div className="relative flex flex-wrap justify-around text-center py-10 my-10  mx-10 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 backdrop-blur-md bg-black/10 -z-50"></div>

          {/* each prduct  */}
          {p.plants.map((item )=> {
            const isInCart = cart.some((c)=> c.products.some((prod)=> prod.name === item.name));

            return (
              <div key={item.name} className={`relative  mb-10 p-5 rounded-xl overflow-hidden w-sm ${shadowBackgroundEffect}`}>
                <span className="absolute right-0 top-0 bg-red-500 text-white py-1 px-2 rounded-bl-md">SALE</span>
                <div className={`absolute inset-0 backdrop-blur-md bg-black/10 -z-50 `}></div>
                <h2 className="text-2xl pb-5">{item.name}</h2>
                <img className="w-auto h-52 m-auto rounded-2xl shadow-[0px_5px_10px_black]/50" src={`${item.image}`}/>
                <span className="block pt-5 text-red-500 text-xl">{item.cost}</span>
                <p className="italic">{item.description}</p>

                <button 
                  onClick={() => handelAddProduct(item, p.category)}
                  className={` block mx-auto my-3 py-2 px-3 text-[16px] text-white transition delay-75 rounded-md border-2 cursor-pointer
                              ${isInCart ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
                  disabled={isInCart}
                >
                  {isInCart ? "Added" : "Add to Cart"}
                </button>
              </div>
            )
          })}
        </div>
      </div>
      )}
    </div>
  )
}

export default Products
