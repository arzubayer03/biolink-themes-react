import logo from "./img/logo.png";
import pPic from "./img/profilePic4.png";

function Colorful2() {
  return (


<section className="max-w-xs mx-auto h-fit  bg-white shadow-lg rounded-lg overflow-hidden">
        {/*Cover Photo Area*/}

        <div className="bg-green-200 h-24">
            <img src=" https://www.pexels.com/photo/a-mountain-with-snow-on-it-at-sunset-17716977" 
            className="max-w-xs w-full h-full bg-cover bg-center "
            alt="cover-photo" />
        </div>
        {/*Profile Photo */}
        <div className="relative -mt-12 flex justify-center">
            <img className="w-24 h-24 rounded-full border-4 border-white object-cover" src={pPic} alt="Profile Photo" />
        </div>

        {/* Profile Name and Bio */}
        <div className="text-center mt-2">
            <h2 className="text-xl font-semibold">David Tutera</h2>
            <p className="text-gray-600">Businessman</p>
        </div>

        {/*custom website Links*/}
        <div className="mt-4 px-4">
            <a href="#" className="block bg-red-500 text-white text-center py-2 rounded mb-2">Website</a>
            <a href="#" className="block bg-green-500 text-white text-center py-2 rounded mb-2">Website</a>
            <a href="#" className="block bg-purple-500 text-white text-center py-2 rounded mb-2">Website</a>
            <a href="#" className="block bg-yellow-500 text-white text-center py-2 rounded mb-2">Website</a>
        </div>

        {/*Social Media Links*/}
        <div className="flex justify-around mt-4 px-4">
            <a href="#" className="text-gray-600"><i className="fas fa-phone"></i></a>
            <a href="#" className="text-green-500"><i className="fab fa-whatsapp"></i></a>
            <a href="#" className="text-gray-600"><i className="fas fa-envelope"></i></a>
            <a href="#" className="text-blue-600"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-blue-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-red-600"><i className="fab fa-youtube"></i></a>
        </div>
        {/* footer  */}
        <div className="space-y-1 py-2">
            {/* divider  */}
             <div className="flex justify-center">
                <div className="bg-gradient-to-l from-gray-600  h-px w-20"></div>
                <div className="bg-gradient-to-r from-gray-600  h-px w-20"></div>
            </div>
            {/* logo name */}
            <div className="flex justify-center items-center space-x-2">
                <img src={logo} className="h-4 w-6" />
                <p className="text-xs font-semibold">Bio Link lite</p>
             </div>
        </div>
    </section>


  )
}

export default Colorful2