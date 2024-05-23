import { Link } from "react-router-dom";

const Formation = ({image, titre, price,detail, OnHandleClick}) => {
    return ( 
        <Link to={`formations/${detail}`} onClick={OnHandleClick}>
        <div className=" flex flex-col items-center gap-3 w-40 space-y-2 cursor-pointer">
            <img src={image} alt="" className="" />
            <h3 className=" text-sm text-center">{titre}</h3>
            <span className=" text-sm text-red-600 font-bold">{price} £</span>
        </div> 
        </Link>
     );
}
 
export default Formation;