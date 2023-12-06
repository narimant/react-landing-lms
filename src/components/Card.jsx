
import StarRating from "./StarRating";

const Card = ({course}) => {
    const {linkImg,title,category,rating,price}=course;
    return (
        <div className="bg-white drop-shadow-md overflow-hidden rounded-2xl mx-1 my-4 cursor-pointer">
           <img src={linkImg}  className="h-40 w-full object-cover  " />
           <div className="p-5 border-b">
                <h1 className="py-2 truncate  " title={title}>{title}</h1>
                <StarRating  rating={rating}/>
               
           </div>
           <h3 className="p-5 text-xl">{price}</h3>
            <div className="absolute top-0 bg-white m-3 px-3 py-[2.5px] rounded font-bold ">
                {category}
            </div> 
        </div>
    );
};

export default Card;