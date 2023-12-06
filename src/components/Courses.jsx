import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { courses } from "../data/Courses";
const Courses = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div className="w-full bg-[#E9F8F3B2] py-20">
      <div className=" md:max-w-[1480px] m-auto  px-4">
        <div className="py-4">
        <h1 className="py-3 text-3xl font-bold">Most Popular <span className="text-[#20B486]">Courses</span></h1>
      <p className="text-[#6D737A]">Various versions have evolved over the years, sometimes by accident.</p>
        </div>
  
    <div className="slick-slider px-5 slick-initialized">
    <Slider {...settings}>
          {
            courses.map((item,index)=>(
              <Card key={index} course={item}/>
            ))
          }
         

        </Slider>
    </div>
        
      </div>
    </div>
  );
};

export default Courses;
