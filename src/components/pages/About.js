import React from 'react';
//ABOUT ME 
    // LANDING PAGE!
    //Photo or avatar of dev and short bio

function About() {
    return (
        <div className="container aboutMe">
            <div className="row">
                <div className="col m6 s12">
                    <img src="images/profile-pic.jpg" className="circle responsive-img"/>
                </div>
                <div className="col m6 s12">
                    <p className="flow-text">Welcome to my Portfolio! My name is Paola Gonzalez and I am currently a student of the Trilogy Coding Bootcamp through the University of Arizona (UArizona).</p>
                    <p className="flow-text">Before I took the step to delve into the exciting world of coding, I studied public health at UArizona earning both a Bachelor of Science and a Masters degree. </p>
                    <p className="flow-text"> Throughout my career, I have served my community through projects that utilized my skills in organization and creativity. When I worked as a Community Nutrition Educator, I designed educational materials to teach over Zoom and co-directed, filmed, and edited videos for our participants. I have also managed and maintained the social media and outreach materials of different organizations. </p>
                    <p className="flow-text">All roads have lead me here... The time spent researching, designing, and collaborating with people of many different backgrounds has inspired me to take on coding projects such as the ones you will see here.</p>
                    <p className="flow-text">I will keep this page updated with new projects. Do visit again soon!</p>
                </div>
            </div>
        </div>
    )
}

export default About;