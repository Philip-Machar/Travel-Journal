import { BiWorld } from "react-icons/bi";

const Header = () => {
  return (
    <div className="bg-[#cd4e4f] text-white flex justify-center items-center gap-2 p-3 rounded-md mb-8">
     <BiWorld className="text-3xl" />
     <div>My Travel Journal</div>
    </div>
  )
}

export default Header
