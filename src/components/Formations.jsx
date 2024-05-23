import Formation from "./Formation";

import datas from "../datas/formation";


const Formations = () => {
    const formations = datas;
    function handleClick(id){
        localStorage.setItem("formationID", id)

    }
    return ( 
        <div className="w-[80%] mx-auto flex  flex-wrap gap-4 my-10">
            {
                formations.map((formation)=> (
                    <Formation key={formation.id} image={formation.image} price={formation.price} titre={formation.titre} detail={formation.titre.split(" ").join("-")} OnHandleClick={()=>handleClick(formation.id)}/>
                ))
            }

        </div>
     );
}
 
export default Formations;