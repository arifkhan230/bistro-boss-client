
import PropTypes from 'prop-types';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='w-4/12 mx-auto text-center my-8 '>
            <p className='text-[#D99904] mb-2'>--- {subHeading} ---</p>
            <h3 className='text-3xl uppercase border-y-4 py-5'>{heading}</h3>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.node,
    subHeading: PropTypes.node
};

export default SectionTitle;