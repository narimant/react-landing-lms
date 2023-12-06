import { heroImg } from "../assets";
import {AiOutlineSearch} from 'react-icons/ai';
const Hero = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-2 px-4">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl text-[#20b486] font-medium">
            START TO SUCCESS
          </p>
          <h1 className=" py-4 md:leading-[72px]  md:text-6xl text-5xl font-semibold">
            Access To <span className="text-[#20B486]">5000+</span> Courses from{" "}
            <span className="text-[#20B486]">300</span> Instructors &amp;
            Institutions
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Various versions have evolved over the years, sometimes by accident.
          </p>
          <form className=" max-w-[700px]  border p-4 shadow-lg rounded-md flex justify-between">
            <input
              className="bg-white outline-none"
              type="text"
              placeholder="what do want to leanr"
            />
            <button>
                <AiOutlineSearch 
                size={20}
                className="icon"
                style={{color:'#000'}}
                />
            </button>
          </form>
        </div>
        <img src={heroImg} className="md:order-last order-first "/>
      </div>
    </div>
  );
};

export default Hero;
