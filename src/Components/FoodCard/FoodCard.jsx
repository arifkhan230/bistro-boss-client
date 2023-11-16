/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe ,_id} = item;
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate();
    const location = useLocation();
    const [,refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            // send cart item to the database
            const cartItem ={
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch cart to update the cart count
                    refetch()
                }
            })

        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please log in to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, LogIn"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   TODO: send cart item to the database
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="bg-[#F3F3F3]">
            <div className="relative">
                <img className="h-[300px] w-full object-cover" src={image} alt="" />
                <p className="absolute top-5 right-5 bg-black text-white text-center py-2  px-4">${price}</p>
            </div>
            <div className="text-center px-6 py-8">
                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                <p className="text-lg mb-4">{recipe}</p>
                <button
                    onClick={handleAddToCart}
                    className="btn text-[#BB8506] bg-[#E8E8E8] border-b-4 border-b-[#BB8506]"
                >Add To Cart
                </button>
            </div>
        </div>
    );
};

export default FoodCard;