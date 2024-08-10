import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Navbar() {

  const navigate = useNavigate();
  return (
    <div className='w-full h-16 border-black border-b-2 flex justify-between items-center'>
      <div >
        <div className="flex">
          <img src="../../images/placement.png" alt="logo" width={70} />
          <div className=" text-2xl font-bold flex justify-center items-center">
            <Link to={"/"}>Placement Hub</Link>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-content items-center pr-5">
        {['Home','Companies','Archives','About Us'].map((item)=>{
          return <div className="text-lg ">{item}</div>
        })}
        <button onClick={()=>{navigate("/signup")}} className="bg-black text-white px-3 py-2 rounded-xl">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar