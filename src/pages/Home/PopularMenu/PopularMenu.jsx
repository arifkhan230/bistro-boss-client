
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu ]= useMenu();
    const popular = menu.filter(item=> item.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}>
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}>
                    </MenuItem>)
                }
            </div>
            <div className="flex justify-center" >
                <button className="btn btn-outline mt-4 border-0 border-b-2 text-black ">View Full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;