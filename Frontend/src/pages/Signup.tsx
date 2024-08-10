import Navbar from "../components/Navbar"
import { Auth } from "../components/Auth"

function Signup() {
  return (
    <div>
        <Navbar/>
        <div className="flex justify-center items-center">
            <div>
                <Auth type="signup"/>
            </div>
        </div>
    </div>
  )
}

export default Signup