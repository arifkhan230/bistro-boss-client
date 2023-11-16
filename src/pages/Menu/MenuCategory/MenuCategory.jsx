/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}>
                    </MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={`/order/${title}`}>
                    <button
                        className="btn btn-outline mt-4 border-0 border-b-2  "
                    >Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;