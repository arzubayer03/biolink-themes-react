// Code for the App component of the biolink-themes
import './App.css';

import Basic from './components/Basic';
import Colorful from './components/Colorful';
import Colorful2 from './components/Colorful2';
import Desert from './components/Desert';
import Minimal from './components/Minimal';
import Ocean from './components/Ocean';
import SkyBlue from './components/SkyBlue';
function App() {

  return (
        <div className="bg-white relative flex justify-center h-[520px] w-[250px] border-4 border-black rounded-2xl shadow-2xl">
          <span className=" z-10 absolute border border-black bg-black w-3 h-3 mt-2 rounded-full"></span>
            <Basic />
          <span className="absolute -right-2 top-20  border-4 border-black h-10 rounded-md"></span>
          <span className="absolute -right-2 top-44 border-4 border-black h-24 rounded-md"></span>
        </div>
  )
}

export default App
