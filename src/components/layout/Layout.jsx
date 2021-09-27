import React from 'react';

import './layout.css';

import Sidebar from '../sidebar/Sidebar';
import Routes from '../Routes';

import { BrowserRouter, Route } from 'react-router-dom';
const layout = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className='layout'>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default layout
