import React from 'react'
import classes from "./Form.module.css"
import useInput from '../../Hooks/useInput'

const Form = () => {
    const notEmpty = (value) => value.trim() !== "";
    const mobNumber = (value) => value.length <= 10 && value.trim() !== "";
    const {
        value: firstNameEntered,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        hasError: firstNameHasError,
        valid: firstNameIsValid,
        reset: resetFirstName

    } = useInput(notEmpty)

    const {
        value: empIdEntered,
        valueChangeHandler: empIdChangeHandler,
        inputBlurHandler: empIdBlurHandler,
        hasError: empIdHasError,
        valid: empIdIsValid,
        reset: resetempId

    } = useInput(notEmpty)

    const {
        value: jobIdEntered,
        valueChangeHandler: jobIdChangeHandler,
        inputBlurHandler: jobIdBlurHandler,
        hasError: jobIdHasError,
        valid: jobIdIsValid,
        reset: resetjobId

    } = useInput(notEmpty)

    const {
        value: mobNumEntered,
        valueChangeHandler: mobNumChangeHandler,
        inputBlurHandler: mobNumBlurHandler,
        hasError: mobNumHasError,
        valid: mobNumIsValid,
        reset: resetmobNum

    } = useInput(mobNumber)

    const {
        value: fileEntered,
        valueChangeHandler: fileChangeHandler,
        hasError: fileHasError,
        valid: fileIsValid,
        reset: resetfile

    } = useInput(notEmpty)



    let formIsValid = false;

    if (firstNameIsValid && empIdIsValid && jobIdIsValid && mobNumIsValid && fileIsValid) {
        formIsValid = true;

    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (!formIsValid) {
            return;
        }

        if (formIsValid) {
            resetFirstName();
            resetempId();
            resetjobId();
            resetmobNum();
            resetfile();
        }
    }



    return (
        <form onSubmit={formSubmitHandler}>
            <div className={classes.controlGroup}>
                <div className={classes.name}>
                    <div className={classes.verticalForm}>
                        <label htmlFor="fname">Full Name</label>
                        <input type="text" id="fname" onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstNameEntered} />
                    </div>
                    {firstNameHasError && <p className={classes.error}>*Please fill the name</p>}
                </div>

                <div className={classes.verticalForm}>
                    <label htmlFor="eId">Employee ID</label>
                    <input type="text" id="eId" onChange={empIdChangeHandler} onBlur={empIdBlurHandler} value={empIdEntered} />
                </div>
                {empIdHasError && <p className={classes.error}>*Employee Id is important</p>}

                <div className={classes.verticalForm}>
                    <label htmlFor="jId">Job ID</label>
                    <input type="text" id="jId" onChange={jobIdChangeHandler} onBlur={jobIdBlurHandler} value={jobIdEntered} />
                </div>
                {jobIdHasError && <p className={classes.error}>*Job Id is important</p>}
                <div className={classes.verticalForm}>
                    <label htmlFor="mob" >Mobile Number</label>
                    <input type="number" id="mob" onChange={mobNumChangeHandler} onBlur={mobNumBlurHandler} value={mobNumEntered} />
                </div>
                {mobNumHasError && <p className={classes.error}>*Please write valid mobile number</p>}
                <div className={classes.verticalForm}>
                    <label htmlFor="file">Upload Application</label>
                    <input type="file" id="file" onChange={fileChangeHandler} value={fileEntered} />
                </div>
                {fileHasError && <p className={classes.error}>*Please upload a file</p>}
                <div className={classes.formAction}>
                    <button type="submit">Submit</button>
                </div>

            </div>

        </form>

    )
}

export default Form;
