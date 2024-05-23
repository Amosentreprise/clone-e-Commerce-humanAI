 import Header from "../components/Header";
 import { IoMdClose } from "react-icons/io";
 import image1 from "../assets/image1.png"
import { useContext, useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
    const [cart, setCart] = useState(null)
    const [prixTotal, setPrixTotal] = useState(0)
    const { updateCartCount } = useContext(CartContext)
   useEffect(()=>{
    if (cart) {
        console.log(cart)
        const total = cart.reduce(
          (sum, formation) => sum + formation.price * formation.quantite,
          0
        );
        setPrixTotal(total);
      }
     // Recalculer chaque fois que le panier change
   }, [cart])
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("cart"));
        setCart(data)
    },[])

    function handleDelete(identifiant) {
        const existantCart = JSON.parse(localStorage.getItem("cart")) || [];
    
        const removeIndex = existantCart.findIndex(
          (formation) => formation.id === identifiant
        );
       
    
        if (removeIndex !== -1) {
          existantCart.splice(removeIndex, 1);
          //mise à jour du panier
          localStorage.setItem("cart", JSON.stringify(existantCart));
          setCart(existantCart);
        }
        updateCartCount()
      }
    return ( 
        <div className="min-h-screen">
            <Header/>
            <div className="w-[80%] mx-auto flex justify-between py-3 ">
                <div className="w-[40%] flex flex-col space-y-3">
                    <h2 className="text-xl font-bold">Panier d'achat</h2>
                    <span className=" text-sm text-black">Magasin / Panier</span>

                   {/* CART */}

                   <div className="flex flex-col gap-2">
                   { cart !== null && cart.length > 0 && (
                     cart.map((formation)=>{
                        return (
                            <div className="flex gap-3 items-start w-full" key={formation.id}>
                            <div>
                              <img src={image1} alt="" className=" w-24 h-24 object-cover" />
                            </div>
                            <div className=" flex flex-col space-y-2">
                               <h3>{formation.titre}</h3>
                               <span className=" flex gap-3 text-blue-500 font-semibold outline-none">Quantité : 
                                        <select name="" id="" className=" bg-transparent text-blue-500">
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                </span>
                            </div>
                            <div className="flex flex-col gap-1 items-end ">
                            <span className=" cursor-pointer" onClick={()=> handleDelete(formation.id)}> <IoMdClose/> </span> 
                             <span>{formation.price * formation.quantite} £ </span>
    
                           </div>
                        </div>
                        )
                    })

                   )
                   }
                    {(cart === null || cart.length === 0) && (
                            <div className=" pt-3 w-full flex justify-center items-center">
                            <div className="flex justify-center items-center flex-col">
                                <div className="w-32 h-32 bg-white rounded-full justify-center items-center">
                                <MdOutlineShoppingCart className="text-red-500 w-full h-full object-cover p-6" />
                                </div>
                                <p className="text-2xl font-bold my-2">Le panier est vide</p>
                                <Link
                                to="/"
                                className="p-3 bg-red-500 text-center block mt-3 text-white font-bold"
                                >
                                {" "}
                                Passer une commande
                                </Link>
                            </div>
                            </div>
                        )}
                   </div>
                  
                {/* tOTAL */}
                {
                  cart !==null && cart.length > 0 && (<>
                    <hr className="h-[2px] w-full bg-slate-500" />
                   <div className="w-full flex justify-between text-xl font-bold">
                      <small>Total</small>
                      <small>{prixTotal}, 00 £</small>
                   </div>
                   </>
                  )  
                }   

                </div>
                <div className="w-[40%]">

                </div>

            </div>
        </div>
     );
}
 
export default Cart;