import React from 'react'
import Features from './Features'
import Register from "../../Assets/register.png"
import Profile from "../../Assets/profile.png"
import Jobs from "../../Assets/jobs.png"
import AltFeatures from './AltFeatures'




const Main = () => {
    return (
        <div>
            <Features image={Register} subheading="OTP Registeration" heading="Register Through Mobile Number"   para="Diam vestibulum tristique non purus velit dictum vel aliquam id egestas odio tortor volutpat nulla varius aliquam vulputate commodo mus volutpat pretium, quam hendrerit enim aliquam nisl imperdiet vivamus a, consectetur venenatis vivamus quam in vulputate lacus, lacus nec bibendum."/>

            <AltFeatures image={Profile} subheading="Online Portfolio" heading="Make Your Own Portfolio"   para="Diam vestibulum tristique non purus velit dictum vel aliquam id egestas odio tortor volutpat nulla varius aliquam vulputate commodo mus volutpat pretium, quam hendrerit enim aliquam nisl imperdiet vivamus a, consectetur venenatis vivamus quam in vulputate lacus, lacus nec bibendum."/>

            <Features image={Jobs} subheading="One Click Apply" heading="Easy To Apply For Job"   para="Diam vestibulum tristique non purus velit dictum vel aliquam id egestas odio tortor volutpat nulla varius aliquam vulputate commodo mus volutpat pretium, quam hendrerit enim aliquam nisl imperdiet vivamus a, consectetur venenatis vivamus quam in vulputate lacus, lacus nec bibendum."/>
        </div>
    )
}

export default Main
