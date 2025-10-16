import { useSelector , useDispatch } from "react-redux"
import { removeFromCart  , increaseQuantity , decreaseQuantity , deletAll } from "../appSlices/PlantSlice"
export const TotalPage = ({value , setValue  , handelPage}) => {
  const cart = useSelector((state)=> state.plant.plantsCart) 
  const totalPage = value
  const setTotalPage  = setValue
  const handelSetTotalPage = handelPage
  const dispatch = useDispatch()
  const totalPrices = () =>{
    let total = 0
    cart.map((p)=>p.products.map((item)=>total += Number(item.cost.slice(1))* item.quantity ))
    return total

  }
  const handelIncrease = ({catgeroyName  , itemName}) => {
    dispatch(increaseQuantity({catgeroyName , itemName}))
    
  }
  
  const handelDecrease = ({catgeroyName  , itemName}) => {
    dispatch(decreaseQuantity({catgeroyName , itemName}))
  }

  const handelDeleteProduct = ({catgeroyName  , itemName}) => {
    dispatch(removeFromCart({catgeroyName , itemName}))
  }

  return (
      <section
        className={`fixed left-0 top-25 w-full h-[calc(100vh-6rem)] py-10 bg-white/80 text-black overflow-y-auto transform transition-all duration-500 ease-in-out 
        ${totalPage ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
        >

        <h1 className=" text-center text-xl py-10 bg-green-600/50   ">Total Cart Amount : <span>${totalPrices()}</span></h1>
        {/* products cart  */}
        <div className="flex flex-col items-center  gap-3">
          {cart.map((c)=>c.products.map((p , i)=>
          <div key={i} className="flex items-center gap-5 w-[400px] h-[270px] py-5 px-5 shadow-xl  rounded-md bg-white" >
            {/* photo of product  */}
            <div className="w-[200px] h-[230px] overflow-hidden rounded-md">
              <img className="w-full h-full object-cover" src={p.image}/>
            </div>

            {/* details prduct  */}
            <div className="flex-1">
              <h1 className="text-xl">{p.name}</h1>
              <p className="text-[12px]">{`(${c.catgeroyName})`}</p>
              <span>{p.cost}</span>

              {/* increase and decrease product  */}
              <div className="flex justify-between pt-5 pb-2">
                <button onClick={()=> handelIncrease({catgeroyName: c.catgeroyName , itemName : p.name })} className="bg-white w-10 text-center rounded-lg border-2 cursor-pointer hover:bg-gray-200 active:bg-gray-300">+</button>
                <p>{p.quantity}</p>
                <button onClick={()=> handelDecrease({catgeroyName: c.catgeroyName , itemName : p.name })} className="bg-white w-10 text-center rounded-lg border-2 cursor-pointer hover:bg-gray-200 active:bg-gray-300">-</button>
              </div>
              <p className="font-bold">{`Total: $${Number(p.quantity) * Number(p.cost.slice(1))  } `}</p>

              {/* delete product form the Cart  */}
              <button onClick={() => handelDeleteProduct({catgeroyName: c.catgeroyName , itemName : p.name })} className="bg-red-500 hover:bg-red-700 active:bg-red-800 mt-3 cursor-pointer  text-whitebg-red-500 text-white py-1 px-2 rounded-md">
                Delete
              </button>
            </div>

            
          </div>
            ))}
        </div>
        {/* product cart end ^ */}

        <div className="">{}</div>
        <button onClick={handelSetTotalPage}  className=' block m-auto py-2 px-3 w-52 my-2 text-[16px] cursor-pointer  bg-green-400 hover:bg-green-600 transition delay-75 rounded-md shadow-sm '>
          Continue Shopping
        </button>
        <button  className=' block m-auto py-2 px-3 w-52 my-2 text-[16px] cursor-pointer  bg-green-400 hover:bg-green-600 transition delay-75 rounded-md shadow-sm '>
          Checkout
        </button>
        <button onClick={()=> dispatch(deletAll())}  className=' block m-auto py-2 px-3 w-52 my-2 text-[16px] cursor-pointer  bg-red-400 hover:bg-red-600 transition delay-75 rounded-md shadow-sm '>
          Delete The Cart
        </button>

    </section>
  )
}
