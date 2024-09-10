import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppMenu from './component/appMenu';
import dataMenu from './datas/dataMenu';
import AppSelect from './component/appSelect';

function App() {

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.includes(path);
    };

    const menuElement = dataMenu.map((menu, index) => {
        return <AppMenu key={index} menu={menu} isActive={isActive(menu.path)} />;
    });

    return (
        <AnimatePresence>
            <div className='flex flex-row h-screen'>
                <div className='hidden sm:flex flex-col justify-center items-center w-1/5 mt-[30px] mb-[px] pt-4 space-y-8'>
                    {menuElement}
                </div>
                <div className='flex flex-col justify-center items-center sm:border-l-2 w-4/5 sm:w-full'> 
                    <AppSelect />
                </div>
            </div>
        </AnimatePresence>
    );
}

export default App;