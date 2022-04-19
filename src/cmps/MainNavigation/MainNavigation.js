import React from 'react'

import {FaPlusCircle, FaRegLightbulb, FaUserCircle, FaSearch} from "react-icons/fa"
import './MainNavigation.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Link, NavLink} from "react-router-dom";

const MainNavigation = () => {

    const activeLink ='navLinkItem navLinkItem_clear-style navLinkItem-active'
    const deactiveLink ='navLinkItem navLinkItem_clear-style'

    return (
        <div className='navigationContainer'>
            <div className="container-fluid navigationContainerUnwrapper">
                <div className="row">

                    <div className="col-xl-1 arion-fond-icon">
                        <div className="arion-fond-line-left"/>
                        <div className="arion-fond-lene-right"/>
                        <span className='arion-fond-title'>Arion Fond</span>
                    </div>


                    <div className='col-xl-5 col-lg-5 col-md-10 nav-links'>
                        <NavLink
                            className={({isActive}) => isActive ? `${activeLink}` : `${deactiveLink}`}
                            to='/dashboard'>Dashboard</NavLink>
                        <NavLink
                            className={({isActive}) => isActive ? `${activeLink}` : `${deactiveLink}`}
                            to='/requests'>Requests</NavLink>
                        <NavLink
                            className={({isActive}) => isActive ? `${activeLink}` : `${deactiveLink}`}
                            to='/activities'>Activities</NavLink>
                        <NavLink
                            className={({isActive}) => isActive ? `${activeLink}` : `${deactiveLink}`}
                            to='/statics'>Statics</NavLink>
                        <NavLink
                            className={({isActive}) => isActive ? `${activeLink}` : `${deactiveLink}`}
                            to='/leads'>Leads</NavLink>
                    </div>

                    <div className='col-xl-5 col-lg-5 col-md-12 rightNavSide'>
                        <div className='searchWrapper'>
                            <input className='searchInput' type="text"/>
                            <FaSearch className='searchIcon' size={20}/>
                        </div>
                        <span className='navDivider'>|</span>
                        <FaPlusCircle className='navIcon' size={20}/>
                        <span className='navDivider'>|</span>

                        <FaRegLightbulb className='navIcon' size={20}/>
                        <span className='navDivider'>|</span>

                        <FaUserCircle className='navIcon' size={20}/>

                        <span className='navUserName'>David Boranstein</span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MainNavigation