import React from 'react'
import classes from "./Mobile.module.css"

const MobileNav = () => {
    return (
        <div className={classes.mob}>
            <ul>
                <li>Home</li>
                <hr/>
                <li>Features</li>
                <hr/>
                <li>Pay Fine</li>
            </ul>
        </div>
    )
}

export default MobileNav
