import React from 'react';

import Header from '../../components/common/header/Header';
import Sidebar from '../../components/common/sidebar/Sidebar';
import ToolkitBody from '../../components/home/toolkit/ToolkitBody';

const ToolkitPage = () => {
    return (
        <div>
            <Sidebar />
           
            <div className = "container">
                <Header />
                <ToolkitBody />
            </div>
        </div>
    )
}

export default ToolkitPage;
