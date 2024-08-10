import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"
import Navbar from "../components/Navbar"


function Signin() {
  return (
    <div>
        <Navbar/>
        <div className="flex justify-center items-center">
            <div>
                <Auth type="signin"/>
            </div>
        </div>
    </div>
  )
}

export default Signin