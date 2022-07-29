import React from 'react';

import Header from '../../components/common/header/Header';
import Sidebar from '../../components/common/sidebar/Sidebar';
import SampleBody from '../../components/home/sample/SampleBody';

const SamplePage = () => {
    return (
        <div>
             <Sidebar />
            <div className='container'>
                 <Header />
                <SampleBody />
            </div>
        </div>
    )
}


export default SamplePage;