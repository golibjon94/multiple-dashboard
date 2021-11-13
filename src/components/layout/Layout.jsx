import React, {useEffect} from 'react'
import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../Routes';

import { BrowserRouter, Route } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

// import ThemeAction from '../../redux/actions/ThemeAction'
import {setMode,setColor} from "../../redux/themeSlice"

const Layout = () => {

    const {color,mode} = useSelector(state => state.themeSlice)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(setMode(themeClass))

        dispatch(setColor(colorClass))
    }, [dispatch])

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout ${mode} ${color}`}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                      
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
