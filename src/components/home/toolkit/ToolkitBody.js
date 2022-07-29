import React from 'react';

import ToolkitCounter from './ToolkitCounter';
import ToolkitTodo from './ToolkitTodo';
import './ToolkitComponent.css';

const SampleBody = () => {
    return (
        <div className='toolkitSection'>
            <ToolkitCounter />
            <hr />
            <ToolkitTodo />
        </div>
    );
};

export default SampleBody;