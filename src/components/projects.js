import React from 'react';
//import { NavLink } from 'react-router-dom';


const Projects = (props) => {
    const { heading, subHeading, intro, introTXTHeading,introTXT, hastag, projectLink, projectImg } = props;

    return(
      
        <div className="col-sm-12 projects">
            <div className="row col-sm-12 projects-txt">
                <h3>{heading}</h3> 
                <h3>{subHeading}</h3> 
                <h4>{intro}</h4>
                <p>{introTXTHeading}</p>
                <p>{introTXT}</p>
                <p className="hastag">{hastag}</p>
            </div>
            <div className="row col-sm-12 projects-img">
              <img alt="Project example" src={projectImg}/>
            </div>
        </div>
    
    )
}

export default Projects;
//<img className="signature" alt="mm-logo-b.svg" src="/./../images/mm-logo-b.svg"/>