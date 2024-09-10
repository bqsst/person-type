import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import dataResult from '../datas/dataSuccess';

function SuccessPage() {

    const locationFromRouter = useLocation();
    const navigate = useNavigate();

    const {
        selectedCar,
        selectedHouse,
        selectedFood,
        selectedBedroom,
        selectedTourist,
        selectedColor
    } = locationFromRouter.state || {};

    const colorIndex = selectedColor !== undefined ? selectedColor : null;
    const touristIndex = selectedTourist !== undefined ? selectedTourist : null;
    const bedroomIndex = selectedBedroom !== undefined ? selectedBedroom : null;
    const foodIndex = selectedFood !== undefined ? selectedFood : null;
    const houseIndex = selectedHouse !== undefined ? selectedHouse : null;
    const carIndex = selectedCar !== undefined ? selectedCar : null;

    const getSelectedValue = (index, category) => {
        if (index !== null && dataResult[category] && index < dataResult[category].length) {
            const resultItem = Object.entries(dataResult[category][index])[0];
            return `${resultItem[0]}: ${resultItem[1]}`;
        }
        return 'No data';
    };

    const buttonClick = () => {
        navigate('/')
    }

    return (

        <div className='flex flex-col justify-normal items-start h-full w-full mt-16 space-y-8'>
            <div className='ml-[45px] lg:mx-10'>
                <h1 className='text-blue-950 text-2xl text-left sm:text-3xl md:text-4xl lg:text-7xl lg:mr-4 font-bold sm:ml-32 md:ml-4 lg:ml-[50px]'>Successfully!</h1>
                <p className="text-base lg:text-2xl text-gray-500 mt-4 lg:px-16">
                    This is the result of choosing your favorite. This page will display the results for each type you selected.
                </p>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='text-base lg:text-xl pl-[47px] lg:pl-[105px] space-y-4 lg:space-y-4'>
                    <p><span className='font-semibold text-blue-950'>Color</span> <br /> {getSelectedValue(colorIndex, 'colors')}.</p>
                    <p><span className='font-semibold text-blue-950'>Tourist</span> <br /> {getSelectedValue(touristIndex, 'tourists')}.</p>
                    <p><span className='font-semibold text-blue-950'>Bedroom</span> <br /> {getSelectedValue(bedroomIndex, 'bedrooms')}.</p>
                    <p><span className='font-semibold text-blue-950'>Food</span> <br /> {getSelectedValue(foodIndex, 'foods')}.</p>
                    <p><span className='font-semibold text-blue-950'>House</span> <br /> {getSelectedValue(houseIndex, 'houses')}.</p>
                    <p><span className='font-semibold text-blue-950'>Car</span> <br /> {getSelectedValue(carIndex, 'cars')}.</p>
                </div>
                <div className="flex justify-center md:justify-end mt-[80px] sm:mt-[50px] md:mt-8 pb-[50px] sm:mb-10 lg:mt-[360px] lg:ml-[500px] mr-[120px] md:mr-[30px] ml-[110px] sm:ml-[180px] md:ml-[260px] space-x-10">
                    <button onClick={buttonClick} className='bg-cyan-700 text-slate-100 font-medium py-[14px] px-[50px] mb-4 md:mr-[37px] lg:mr-[103px] w-[190px] lg:w-[190px] lg:h-[65px] rounded-md hover:bg-blue-950'>Play agian</button>
                </div> 
            </div>
        </div>

    );
}

export default SuccessPage;
