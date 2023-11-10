
import PropTypes from 'prop-types';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className='flex gap-6'>
            <img
                style={{ borderRadius: '0 200px 200px 200px' }}
                className='w-[120px] h-[104px]'
                src={image} alt="" />
            <div>
                <h3
                    className='uppercase'>
                    {name}---------
                </h3>
                <p>
                    {recipe}
                </p>
            </div>
            <p
                className='text-yellow-500'>
                {price}
            </p>
        </div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.object
};

export default MenuItem;