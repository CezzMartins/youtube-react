import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../assets/images/logo.png';
import UserAvatar from '../../assets/images/avatar.jpg';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

import './Header.css';

function Header(){
    return(
        <div className="header">
            
            <div className="header__left">
                <MenuIcon/>
                <img className="header__logo" src={Logo} alt="Logo"/>
            </div>

            <div className="header__center">
                <input type="text" placeholder="Search..."/>
                <SearchIcon className="header__inputButton"/>   
            </div>

            <div className="header__right">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar alt="avatar" src={UserAvatar}/>
            </div>
            
            
            
        </div>  
    )
}

export default Header;