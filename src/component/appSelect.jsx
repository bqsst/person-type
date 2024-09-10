import { Routes, Route } from 'react-router-dom';
import MainButton from '../component/mainButton';
import MainText from '../component/mainText';
import ColorPage from '../component/colorPage';
import TouristPage from './touristPage';
import BedroomPage from '../component/bedroomPage';
import FoodPage from '../component/foodPage';
import HousePage from '../component/housePage';
import CarPage from '../component/carrPage';
import SuccessPage from '../component/successPage';

function AppSelect() {
    return (
        <Routes>
            <Route path='/' element={<> <MainText /> <MainButton /> </>} />
            <Route path='/component/colorPage' element={<ColorPage />} />
            <Route path='/component/TouristPage' element={<TouristPage />} />
            <Route path='/component/bedroomPage' element={<BedroomPage />} />
            <Route path='/component/foodPage' element={<FoodPage />} />
            <Route path='/component/housePage' element={<HousePage />} />
            <Route path='/component/carrPage' element={<CarPage />} />
            <Route path='/component/successPage' element={<SuccessPage />} />
        </Routes>
    );
}

export default AppSelect;