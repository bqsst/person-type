import { useLocation } from 'react-router-dom';

function AppMenu(props) {

    const { menu } = props;
    const location = useLocation();
    const isActive = location.pathname === menu.path;

    return (
        <div className={`hidden sm:flex flex-col justify-center items-center ${isActive ? 'bg-blue-950 w-full bg-opacity-10 border-l-8 border-blue-950' : ''}`}>
            <div className="flex flex-row items-center space-x-6">
                    <img src={menu.iconUrl} alt="" className="h-[35px] w-[35px] flex-shrink-0 mt-2 mb-2" />
                    <h4 className={`text-blue-950 font-medium ${isActive ? 'font-bold' : ''}`}>
                        {menu.title}
                    </h4>
            </div>
        </div>
    )
}

export default AppMenu;
