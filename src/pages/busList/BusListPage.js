import React from 'react';

import Header from '../../components/common/header/Header';
import Sidebar from '../../components/common/sidebar/Sidebar';
import BusBody from '../../components/home/busList/BusBody';


const HomePage = () => {
    return (
        <div>
            <Sidebar />
            <div className = "container">
                <Header />
                <BusBody />
            </div>
        </div>
    )
}

export default HomePage;
