import { useState } from "react"
import { TotalPage } from "./TotalPage"
import Products from "../Products"
import { useSelector } from "react-redux"
export const ProductPage = ({value , setValue}) => {
  // const plantData = useSelector((state)=> state.plant)
  const [totalPage , setTotalPage] = useState(false)
  const cart = useSelector((state)=> state.plant.plantsCart) 

  const handelSetTotalPage = ()=>{
    setTotalPage(!totalPage)
  }
  const counterProduct = () =>{
    let total = 0
    cart.map((p)=>p.products.map((item)=>total += item.quantity ))
    return total

  }
  return (
<div
  className={`fixed text-white inset-0 z-50 bg-white/70 overflow-y-auto transition-all duration-500`}
  style={{
    height: value ? "100%" : "0%",
    opacity: value ? 1 : 0,
  }}
>

      <header className="min-w-full flex fixed z-5 shadow-[0px_10px_14px_5px_green]/30  justify-between  bg-green-600 py-5 px-5">

        {/* close page button */}
        <button className=" cursor-pointer flex gap-8"
          onClick={() => setValue(!value)}>
          {/* logo  */}
          <div className="w-15 rounded-full  overflow-hidden">
              <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
          </div>
          {/* logo title  */}
          <div>
              <h1 className="text-2xl font-bold">Paradise Nursery</h1>
              <p className="text-sm italic ">Where Green Meets Serentiy</p>
          </div>

        </button>
        {/* cart button place  */}
        <button onClick={handelSetTotalPage} className="cursor-pointer">
          <span className=" border-2 border-white border-solid rounded-full w-10 h-10 flex justify-center items-center bg-transparent">
            {counterProduct()}
          </span>
        </button>

      </header>
      {/* end of header  */}
      <div>
        <Products/>
      </div>
      {/* total page  */}
      <TotalPage value={totalPage} setValue={setTotalPage} handelPage={handelSetTotalPage}/>
    </div>
  )
}
