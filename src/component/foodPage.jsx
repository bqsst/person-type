import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import dataImage from '../datas/dataImage';
import ImageSet from './ImageSet';

function FoodPage() {

    const locationFromRouter = useLocation();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate();

    const buttonClick = () => {
        if (selectedIndex !== null) {
            navigate('/component/housePage', {
                state: {
                    selectedFood: selectedIndex,
                    selectedBedroom: locationFromRouter.state.selectedBedroom,
                    selectedTourist: locationFromRouter.state.selectedTourist,
                    selectedColor: locationFromRouter.state.selectedColor
                }
            });
        }
    }

    const handleImageClick = (index) => {
        setSelectedIndex(prevIndex => prevIndex === index ? null : index);
    };

    const thisPageData = dataImage.slice(18, 24);

    const foodElement = thisPageData.map((image, index) => {
        // อาจต้องมีการเพิ่ม key ให้เป็น unique
        const imageKey = Object.keys(image)[0]; // ใช้ key แรกเป็น unique key
        return (
            <ImageSet
                key={imageKey}
                image={image}
                index={index}
                isSelected={selectedIndex === index}
                onClick={() => handleImageClick(index)}
            />
        );
    });

    return (
        <div className="flex flex-col h-screen w-full">
            <div className='flex justify-normal items-center h-1/6 w-full pt-6'>
                <h1 className='text-blue-950 text-3xl md:text-5xl font-bold ml-[120px] sm:ml-[240px] md:ml-[80px] sm:mb-[20px] lg:ml-32 lg:mt-[20px]'>Food</h1>
            </div>
            <div className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 gap-y-[170px] sm:gap-4 h-5/6 w-full pt-4 pl-8 
                md:grid-cols-2 md:grid-rows-3 md:gap-6 md:px-16
                lg:grid-cols-3 lg:grid-rows-2 lg:gap-10 lg:px-32">
                {foodElement}
            </div>
            <div className="flex justify-center md:justify-end mt-[450px] sm:mt-[50px] md:mt-6 pb-[50px] sm:mb-10 lg:mb-24 mr-[120px] md:mr-[30px] ml-[180px] sm:ml-[110px] space-x-10">
                <button onClick={buttonClick} className='bg-cyan-700 text-slate-100 font-medium py-[14px] px-[38px] md:mr-[37px] lg:mr-[103px] rounded-md hover:bg-blue-950'>Next</button>
            </div>
        </div>
    )
}

export default FoodPage;
