import logo from "./img/logo.png";
const profilePic = 'https://images.pexels.com/photos/8319937/pexels-photo-8319937.jpeg?auto=compress&cs=tinysrgb&w=600';
const coverPhoto = " https://images.pexels.com/photos/12585271/pexels-photo-12585271.png?auto=compress&cs=tinysrgb&w=600&lazy=load" ;



function Basic() {
  return (
         <div className="h-full w-full max-w-sm bg-basic bg-cover bg-center flex flex-col rounded-2xl relative scrollbar-hide ">
              <div className="absolute top-4 right-4 z-10">
                    <button className="p-1 rounded-full bg-gradient-to-tl from-cyan-700 to-cyan-400 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
                        <path fill="#ffffff" d="M19.59 12L15 7.41v2.46l-.86.13c-4.31.61-7.23 2.87-8.9 6.33c2.32-1.64 5.2-2.43 8.76-2.43h1v2.69m-2-1.69v.02c-4.47.21-7.67 1.82-10 5.08c1-5 4-10 11-11V5l7 7l-7 7v-4.1c-.33 0-.66.01-1 .02Z"/>
                      </svg>
                    </button>
                  </div>
                  {/* cover photo with share button */}
                <div className="bg-green-200 w-full max-w-md h-32 relative overflow-hidden rounded-tl-2xl rounded-tr-2xl">
                  
                  {/* cover photo */}
                  <div className="">
                    <img src={coverPhoto} className="w-full max-w-md bg-cover bg-center" alt="" />
                  </div>
                </div>
                {/* Profile Photo */}
                <div className="relative -mt-14 flex justify-center">
                  <img className="w-24 h-24 rounded-full object-cover" src={profilePic} alt="Profile Photo" />
                </div>
            
                {/* Profile Name */}
                <div className="text-center mt-2 mb-1">
                  <h2 className="text-xl font-semibold">David Tutera</h2>
                </div>
        
              {/*Scrollable section*/}
              <div className=" px-4 overflow-y-auto scrollbar-hide  h-full"> 
                <div>
                  <p className="text-black text-center leading-5 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus quasi 
                  </p>
                </div>
        
                {/* Social Media Links */}
                <div className="flex flex-wrap justify-center gap-2 my-3 ">
               
                  <a href="#" className=" max-w-7 w-full h-auto">
                    <img src="https://cdn1.iconfinder.com/data/icons/social-media-set-for-free/32/facebook-512.png" alt="" />
                  </a>
                  <a href="#" className=" max-w-7 w-full h-auto">
                    <img src="https://cdn1.iconfinder.com/data/icons/social-media-set-for-free/32/facebook-512.png" alt="" />
                  </a>
                  <a href="#" className=" max-w-7 w-full h-auto">
                    <img src="https://cdn1.iconfinder.com/data/icons/social-media-set-for-free/32/facebook-512.png" alt="" />
                  </a>
                  <a href="#" className=" max-w-7 w-full h-auto">
                    <img src="https://cdn1.iconfinder.com/data/icons/social-media-set-for-free/32/facebook-512.png" alt="" />
                  </a>
                  <a href="#" className=" max-w-7 w-full h-auto">
                    <img src="https://cdn1.iconfinder.com/data/icons/social-media-set-for-free/32/facebook-512.png" alt="" />
                  </a>
                  <a href="#" className=" max-w-7 w-full h-auto">
                    <img src="https://cdn1.iconfinder.com/data/icons/social-media-set-for-free/32/facebook-512.png" alt="" />
                  </a>
                
                </div>
          
            
                {/* Custom website Links */}
                <div className="mt-4 mb-2  ">
        
                  <div className="">
                      <h3 className="text-black text-center font-semibold"></h3>
                      <a href="#" className="block py-2 rounded-full mb-2 border border-black text-black text-center ">My article </a>
                  </div>
        
                  <div className="">
                      <h3 className="text-black text-center font-semibold mb-1">Read my latest blog</h3>
                      <a href="#" className="block py-2 rounded-full mb-2 border border-black text-black text-center">Blog link</a>
                  </div>
        
                  <div className="">
                      <h3 className="text-black text-center"></h3>
                      <a href="#" className="block py-2 rounded-full mb-2 border border-black text-black text-center">🌐🔗Visit my shop</a>
                  </div>
        
                  <div className="">
                      <h3 className="text-black text-center"></h3>
                      <a href="#" className="block py-2 rounded-full mb-2 border border-black text-black text-center">My facebook page</a>
                  </div>
                  <div className="">
                      <h3 className="text-black text-center"></h3>
                      <a href="#" className="block py-2 rounded-full mb-2 border border-black text-black text-center">My facebook page</a>
                  </div>
                  <div className="">
                      <h3 className="text-black text-center"></h3>
                      <a href="#" className="block py-2 rounded-full mb-2 border border-black text-black text-center">My facebook page</a>
                  </div>
                  <div className="">
                      <h3 className="text-black text-center"></h3>
                      <a href="#" className="block py-2 rounded-full mb-2 border border-black text-black text-center">My facebook page</a>
                  </div>
                  <div className="">
                      <h3 className="text-black text-center"></h3>
                      <a href="#" className="block py-2 rounded-full mb-2 border border-black text-black text-center">My facebook page</a>
                  </div>
                </div>
              </div>
            
              {/* footer */}
              <div className="py-2  bg-transparent rounded-bl-2xl rounded-br-2xl" >
                {/* divider */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-l from-gray-600 h-px w-20"></div>
                  <div className="bg-gradient-to-r from-gray-600 h-px w-20"></div>
                </div>
                {/* logo name */}
                <div className="flex justify-center gap-2 items-center mt-2">
                  <img src={logo} className="h-4 w-6" />
                  <p className="text-md font-semibold">Bio Link lite</p>
                </div>
              </div>
            </div>
  )
}

export default Basic