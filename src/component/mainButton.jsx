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
                เว็บไซต์ที่ใช้ประเมินลักษณะนิสัยส่วนบุคคลโดยอาศัยการเลือกสิ่งที่ชอบ
            </p>
            <p className="hidden sm:flex text-lg md:text-xl sm:text-base text-gray-700 sm:mt-10 md:mt-8 lg:mt-0 sm:ml-[80px] md:ml-20 mb-20 mx-10 sm:mx-0 md:mx-10 pr-[70px] indent-10">
            เว็บไซต์สำหรับประเมินลักษณะนิสัยส่วนบุคคลโดยอาศัยการเลือกความชอบโดยทั่วไป จะนำเสนอตัวเลือกต่างๆ ให้กับผู้ใช้ ไม่ว่าจะเป็นสิ่งของ สถานการณ์ หรือแนวคิด ผู้ใช้จะต้องเลือกจากตัวเลือกเหล่านั้น โดยมีวัตถุประสงค์เพื่อระบุรูปแบบความชอบของผู้ใช้ที่สอดคล้องกับลักษณะนิสัย คุณค่า หรือแนวโน้มเฉพาะบุคคล ต่อไปนี้คือภาพรวมของวิธีการทำงานโดยทั่วไป
            </p>
            <div className="flex flex-col md:justify-center md:items-center lg:justify-start md:flex-row ml-0 sm:ml-20 md:ml-10 lg:ml-20 mt-12 sm:mt-0 space-y-4 md:space-y-0 md:space-x-10 w-3/4 sm:w-3/4">
                <button
                    onClick={buttonClick}
                    className='bg-cyan-700 text-slate-100 font-medium py-[14px] px-[38px] rounded-md hover:bg-blue-950 text-center'>
                    เริ่มเลย!
                </button>
                <button
                    onClick={togglePopup}
                    className='bg-gray-300 text-blue-950 font-medium py-[14px] px-[38px] rounded-md hover:bg-gray-400 text-center'>
                    รายละเอียด
                </button>
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="flex flex-col bg-slate-100 p-6 rounded-lg shadow-lg w-[350px] sm:w-[600px] lg:w-[800px] h-[600px] sm:h-[450px] lg:h-[430px] pt-10">
                        <h2 className="sm:text-2xl font-bold mb-4 text-center text-blue-950">รายละเอียดและกฎการเล่น</h2>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-6 px-16">
                            -นี่คือเว็บไซต์ที่คุณสามารถตรวจสอบได้ว่าคุณเป็นคนประเภทใด โดยการเลือกสิ่งที่คุณชอบ และนี่เป็นเพียงการคาดการณ์ทางจิตวิทยาเท่านั้น
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-6 px-16">
                            -คุณจะมี 6 ประเภทที่แตกต่างกันให้เลือก โดยแต่ละประเภทจะมี 6 สิ่งให้เลือก คุณสามารถเลือกได้เพียง 1 สิ่งเท่านั้น
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-6 px-16">
                            -หลังจากที่คุณเลือกประเภทบุคลิกภาพทั้ง 6 ประเภทแล้ว เราจะแสดงผลลัพธ์ให้คุณเห็นว่าคุณมีบุคลิกภาพแบบใด โดยประเมินจากสิ่งที่คุณชอบ
                        </p>
                        <div className='flex justify-center sm:justify-end'>
                            <button onClick={togglePopup} className='mt-20 sm:mt-10 bg-red-500 text-white text-sm sm:text-base font-medium py-2 mx-16 rounded-md hover:bg-red-700 w-[100px]'>ปิด</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MainButton;