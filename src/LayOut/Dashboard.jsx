import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    // TODO: get admin value from  the database
    const isAdmin = true;
    return (
        <div className="flex bg-[#F6F6F6]">
            {/* dashboard side var */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                             <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHome></FaHome>
                            Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems">
                            <FaUtensils></FaUtensils>
                            Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItems">
                            <FaList></FaList>
                            Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageBookings">
                            <FaBook></FaBook>
                            Manage Bookings </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users">
                            <FaUsers></FaUsers>
                            All users</NavLink>
                    </li>
                   
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar></FaCalendar>
                                        Reservation</NavLink>
                                </li>
                                {/* <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                    </li> */}
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList></FaList>
                                        My Bookings</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;