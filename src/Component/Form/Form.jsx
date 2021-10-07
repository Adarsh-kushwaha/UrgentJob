import React from 'react'
import classes from "./Form.module.css"

const Form = () => {
    return (
        <form>
            <div className={classes.controlGroup}>
                <div className={classes.name}>
                    <div>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" />
                    </div>
                    <div>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" />
                    </div>
                </div>

            </div>

        </form>

    )
}

export default Form;
