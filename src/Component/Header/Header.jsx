import React from 'react'
import classes from "./Header.module.css"
import Hero from './Hero'
const Header = () => {
    return (
        <React.Fragment>
            <div className={classes.nav}>
                <div className={classes.logo}>Argent Job</div>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li><button className={classes.btn}>Pay Fine</button></li>
                </ul>
                <div className={classes.bar}>
                    <div className={classes.top}> </div>
                    <div className={classes.middle}> </div>
                    <div className={classes.bottom}> </div> 
                </div>
            </div>
            <Hero/>
        </React.Fragment>
    )
}

export default Header
