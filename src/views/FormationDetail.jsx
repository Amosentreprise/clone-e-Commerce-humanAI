import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import datas from "../datas/formation";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
const FormationDetail = () => {
    const formation = datas.find((data)=>data.id === parseInt(localStorage.getItem("formationID")))
     const [quantite, setQuantite ] = useState(0);
     const { updateCartCount } = useContext(CartContext);
    
     function AddToCart(id, titre,price, quantite) {
        setQuantite((prev)=> prev+1)
        
        const existantCart = JSON.parse(localStorage.getItem("cart")) || [];
        
        //verifier si l'element existe dejà
        const existantCartIndex = existantCart.findIndex((formation) => formation.id === id)
        
        if(existantCartIndex !== -1){
            existantCart[existantCartIndex].quantite = quantite;

        }else{
            const newFormation = {
                quantite,
                titre,
                id,
                price
            }
            existantCart.push(newFormation);
        }

         // Mettre à jour le panier dans localStorage
      localStorage.setItem("cart", JSON.stringify(existantCart));
   
    // pour Afficher le panier mis à jour
     console.log(existantCart);
     updateCartCount()
     }
    return ( 
        <div className="min-h-screen bg-slate-200">
           <Header/>

           <div>
                <Link to="/" className=" font-bold p-2">Retour au catalogue</Link>
           </div>
           <div className="w-[90%] mx-auto flex justify-between py-10">
               <div className="w-[50%] h-[400px]">
                   <img src={formation.image} alt=""  className="w-full h-full  object-cover "/>
                </div>
               <div className="w-[40%] flex flex-col space-y-4">
                   <h2 className="text-xl font-bold">{formation.titre}</h2>
                   <span className=" text-xl font-bold text-red-500">{formation.price} £</span>
                  {quantite !== 0 && <p className=" font-semibold">{quantite} {`${quantite > 1 ? "articles ajoutés" : "article ajouté"}`}  au panier</p>} 
                   <button className=" p-2 border border-slate-600 rounded font-bold" onClick={()=>AddToCart(formation.id, formation.titre, formation.price, quantite)}>Ajouter</button>
                <Link to="/formation/cart"><button className=" w-full p-2 bg-green-600 rounded text-white font-bold" >Passer la commande</button></Link>  

                   <div className=" flex flex-col space-y-2">
                      <h3 className=" font-bold">Détails du produit</h3>
                      <span>Presentiel et en ligne</span>
                      <span>Prérequis : <small className=" text-green-500 font-semibold">Aucun</small></span>
                      <span>Catégorie : <small className=" text-green-500 font-semibold">Human AI</small></span>
                      <span>Certification : <small className=" text-green-500 font-semibold">Human AI</small></span>
                   </div>
               </div>
           </div>

           <Footer/>
        </div>
     );
}
 
export default FormationDetail;