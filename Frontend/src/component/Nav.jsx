import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className=" w-full h-12 bg-slate-300 flex items-center px-10">
        <Link to = '/addItem' className=" font-medium text-xl text-gray-900">Add Item</Link>
    </div>
  )
}

export default Nav