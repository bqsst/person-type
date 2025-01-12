import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

    const [randomImage, setRandomImage] = useState('');

    useEffect(() => {
        const imagePaths = [
            '/images/testImage.png',
            '/images/random1.png',
            '/images/random2.png',
            '/images/random3.png',
            '/images/random4.png',
            '/images/random5.png',
        ];

        // สุ่มเลือกภาพ
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        setRandomImage(imagePaths[randomIndex]);
    }, []); // ใช้ useEffect เพื่อให้สุ่มภาพแค่ครั้งเดียวตอนหน้าเว็บโหลด

    const buttonClick = () => {
        navigate('/');
    };

    return (
        <div className='flex flex-col justify-normal items-start h-full w-full mt-16 space-y-8'>
            <div className='ml-[45px] lg:mx-10'>
                <h1 className='text-blue-950 text-2xl text-left sm:text-3xl md:text-4xl lg:text-7xl lg:mr-4 font-bold sm:ml-32 md:ml-4 lg:ml-[50px]'>
                    แบบสอบถามเสร็จสิ้น!
                </h1>
                <p className="text-base lg:text-2xl text-gray-500 mt-4 lg:px-16">
                    นี่คือผลลัพธ์จากการเลือกสิ่งที่คุณชอบ นี่คือจะแสดงผลลัพธ์สำหรับแต่ละประเภทที่คุณเลือก
                </p>
            </div>
            <div className='flex flex-col lg:flex-row w-full justify-between pr-20'>
                <div className='flex flex-col lg:space-x-10'>
                    <div className='text-base lg:text-xl pl-[47px] lg:pl-[105px] space-y-4 lg:space-y-4'>
                        <p><span className='font-semibold text-blue-950'>สี</span> <br /> {getSelectedValue(colorIndex, 'colors')}.</p>
                        <p><span className='font-semibold text-blue-950'>สถานที่ท่องเที่ยว</span> <br /> {getSelectedValue(touristIndex, 'tourists')}.</p>
                        <p><span className='font-semibold text-blue-950'>ห้องนอน</span> <br /> {getSelectedValue(bedroomIndex, 'bedrooms')}.</p>
                        <p><span className='font-semibold text-blue-950'>อาหาร</span> <br /> {getSelectedValue(foodIndex, 'foods')}.</p>
                        <p><span className='font-semibold text-blue-950'>บ้าน</span> <br /> {getSelectedValue(houseIndex, 'houses')}.</p>
                        <p><span className='font-semibold text-blue-950'>รถยนต์</span> <br /> {getSelectedValue(carIndex, 'cars')}.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 lg:space-x-10'>
                    {/* แสดงภาพสุ่ม */}
                    <img src={randomImage} alt="Image" className='w-[200px] rounded-lg' />
                    <button onClick={buttonClick} 
                    className='bg-cyan-700 text-white p-4 rounded-lg hover:bg-blue-950'>
                        เล่นอีกครั้ง
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SuccessPage;
