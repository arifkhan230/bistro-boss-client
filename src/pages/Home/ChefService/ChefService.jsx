import chefService from '../../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div 
        style={{backgroundImage: `url(${chefService})`}}
        className='py-20 px-20'
        >
            <div className="flex flex-col justify-center items-center bg-white px-20 py-20">
                <h2 className="text-4xl mb-4">Bistro Boss</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default ChefService;