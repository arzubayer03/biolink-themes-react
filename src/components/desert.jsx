
import logo from "./img/logo.png";
import data from "./data";


function Desert() {
  const { biolinkProfile, Links, socialMediaLinks } = data;
  return (
     <div className="h-full w-full max-w-sm bg-desert bg-cover bg-center flex flex-col rounded-xl relative scrollbar-hide ">
          <div className="absolute top-4 right-4 z-10">
                <button className="p-1 rounded-full bg-gradient-to-tl from-cyan-700 to-cyan-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
                    <path fill="#ffffff" d="M19.59 12L15 7.41v2.46l-.86.13c-4.31.61-7.23 2.87-8.9 6.33c2.32-1.64 5.2-2.43 8.76-2.43h1v2.69m-2-1.69v.02c-4.47.21-7.67 1.82-10 5.08c1-5 4-10 11-11V5l7 7l-7 7v-4.1c-.33 0-.66.01-1 .02Z"/>
                  </svg>
                </button>
              </div>

               {/* cover photo with share button */}
          <div className="bg-green-200 relative w-full max-w-md h-44 rounded-tl-xl rounded-tr-xl overflow-hidden">
                    {/* cover photo */}
                    {biolinkProfile.coverPhoto && (
                        <img 
                          src={biolinkProfile.coverPhoto} 
                          className="w-full max-w-md bg-cover bg-center" 
                          alt="" 
                        />
                      )}
              </div>

        {/* Profile Photo */}
          <div className="relative -mt-12 flex justify-center">
            <div className="w-24 h-24 bg-white rounded-full">
              {biolinkProfile.profilePhoto && (
                <img className="w-24 h-24 rounded-full object-cover" 
                src={biolinkProfile.profilePhoto} 
                alt="Profile Photo" />
                )}
                  
               </div>
            </div>
        
            {/* Profile Name */}
            <div className="text-center mt-2 mb-1">
              <h2 className="text-xl font-semibold">{biolinkProfile.name}</h2>
            </div>
    
          {/*Scrollable section*/}
          <div className=" px-4 overflow-y-auto scrollbar-hide  h-full"> 
            <div>
              <p className="text-black text-center ">
              {biolinkProfile.bio}
              </p>
            </div>
    
            {/* Social Media Links */}
            <div className="flex flex-wrap justify-center gap-2 my-3 ">
              {socialMediaLinks?.map((link, index) => (
                <a key={index} href={link.url} className="max-w-7 w-full h-auto">
                <img src={link.icon}  />
                </a>
              ))}
            </div>

               {/* Custom website Links */}
        <div className="mt-4 mb-2 ">
            {Links && Object.keys(Links).length > 0 ? (
              Object.keys(Links).map((key) => {
              const link = Links[key];
                return (
                    <div key={link.id} className="mb-2">
                      <h3 className="text-black text-center font-semibold mb-1">
                        {link.title}
                      </h3>
                      <a href={link.url} className="block bg-black/75 text-white text-center py-2 rounded">
                        {link.name}
                      </a>
                    </div>
                  );
                })
              ) : null} 
          </div>
         
          </div>
        
          {/* footer */}
          <div className="py-2  bg-transparent rounded-bl-2xl rounded-br-2xl" >
            {/* divider */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-l from-black h-px w-20"></div>
              <div className="bg-gradient-to-r from-black h-px w-20"></div>
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

export default Desert
