import React, { useState } from 'react'
import classes from "./Header.module.css"
import Hero from './Hero'
import MobileNav from './MobileNav'
const Header = () => {
    const [mobNav, setMobNav] = useState(false)

    const toggleHandler = () => {
        if (!mobNav) {
            setMobNav(true)
        } else {
            setMobNav(false)
        }
    }



    return (
        <React.Fragment>
            <div className={classes.nav}>
                <div className={classes.logo}>Argent Job</div>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li><button className={classes.btn}>Pay Fine</button></li>
                </ul>
                <div className={!mobNav ? classes.bar : classes.cross} onClick={toggleHandler} >
                    <div className={classes.top}> </div>
                    <div className={classes.middle}> </div>
                    <div className={classes.bottom}> </div>
                </div>

            </div>
            {mobNav && <MobileNav />}

            <Hero />
        </React.Fragment>
    )
}

export default Header
