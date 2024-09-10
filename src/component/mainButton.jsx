import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainButton() {

    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const buttonClick = () => {
        navigate('/component/colorPage');
    }

    return (
        <div className="lg:h-1/2 w-full ml-0 sm:ml-10 mt-4 sm:mt-0">
            <p className='sm:hidden text-gray-700 ml-0 mb-6 mr-16 mt-4 indent-10'>
                A website for assessing personal traits through preference selection typically
            </p>
            <p className="hidden sm:flex text-lg md:text-xl sm:text-base text-gray-700 sm:mt-10 md:mt-8 lg:mt-0 sm:ml-[80px] md:ml-20 mb-20 mx-10 sm:mx-0 md:mx-10 pr-[70px] indent-10">
                A website for assessing personal traits through preference selection typically provides users with a series of choices between different items, scenarios, or concepts. The objective is to identify patterns in the user's preferences that align with specific personality traits, values, or inclinations. Here's a breakdown of how it generally works
            </p>
            <div className="flex flex-col md:justify-center md:items-center lg:justify-start md:flex-row ml-0 sm:ml-20 md:ml-10 lg:ml-20 mt-12 sm:mt-0 space-y-4 md:space-y-0 md:space-x-10 w-3/4 sm:w-3/4">
                <button
                    onClick={buttonClick}
                    className='bg-cyan-700 text-slate-100 font-medium py-[14px] px-[38px] rounded-md hover:bg-blue-950 text-center'>
                    Get start
                </button>
                <button
                    onClick={togglePopup}
                    className='bg-gray-300 text-blue-950 font-medium py-[14px] px-[38px] rounded-md hover:bg-gray-400 text-center'>
                    Detail
                </button>
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="flex flex-col bg-slate-100 p-6 rounded-lg shadow-lg w-[350px] sm:w-[600px] lg:w-[800px] h-[600px] sm:h-[450px] lg:h-[430px] pt-10">
                        <h2 className="sm:text-2xl font-bold mb-4 text-center text-blue-950">Details and rules of play</h2>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-6 px-16">
                            -This is a website where you can check what type of person you are. From choosing what you like And this is only a psychological prediction.
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-6 px-16">
                            -You will have 6 different types to choose from, each with 6 things to choose from. You can only choose 1 thing.
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-6 px-16">
                            -After you select all 6 personality types, we'll show you the results to show you what personality type you have. Evaluate from what you like
                        </p>
                        <div className='flex justify-center sm:justify-end'>
                            <button onClick={togglePopup} className='mt-20 sm:mt-10 bg-red-500 text-white text-sm sm:text-base font-medium py-2 mx-16 rounded-md hover:bg-red-700 w-[100px]'>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MainButton;