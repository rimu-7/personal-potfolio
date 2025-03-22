import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className="w-full min-h-screen flex flex-col  text-black bg-dot-light dark:bg-dot-dark dark:text-white">

            <Navbar />
            <div className="flex-grow w-full max-w-[1800px] mx-auto">
                <Outlet />
            </div>

        </div>
    );
};

export default Main;
