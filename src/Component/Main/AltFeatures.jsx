import React from 'react'
import classes from "./Features.module.css"


const AltFeatures = (props) => {
    return (
        <React.Fragment>
            <div className={classes.featuresWrapper}>
                <div className={classes.richText}>
                    <h4>{props.subheading}</h4>
                    <h3>{props.heading}</h3>
                    <p>{props.para}</p>
                    <ul>
                        <li>{props.point1}</li>
                        <li>{props.point2}</li>
                        <li>{props.point3}</li>
                    </ul>
                </div>
                <div className={classes.appImg}>
                    <img src={props.image} alt="appImg" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default AltFeatures
