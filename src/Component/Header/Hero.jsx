import React from 'react'
import classes from "./Hero.module.css"
import heroImg from "../../Assets/hero.png"


const Hero = () => {
    return (
        <React.Fragment>
            <div className={classes.hero}>
                <div className={classes.info}>
                    <h2>Get Jobs Within 24 Hour Gauranteed.</h2>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolores porro asperiores eveniet itaque sint.Error dolores porro asperiores eveniet itaque sint.</p>

                    <button><a href="https://play.google.com/store/apps/details?id=com.argent.job">Download Now</a></button>
                    
                </div>
                <div className={classes.heroImg}>
                    <img src= {heroImg} alt="heroimg" />
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Hero
