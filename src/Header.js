import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import logo from './youtube-logo.svg'

import './Header.css'


function Header() {
  
    return (
        <div className='header'>
            <div className="header-left">
                <MenuIcon />
                <img src={logo} alt="" className='header-logo' />
                
            </div>
            <div className="header-middle">
                <input  placeholder='Search' type="text" />
                
                    <SearchIcon className='header-input-button' />
               

            </div>
            <div className="header-right">
                <VideoCallIcon className='header-icon' />
                <AppsIcon className='header-icon' />
                <NotificationsIcon className='header-icon' />
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            

        </div>
    )
}

export default Header