import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile"  id="skill">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
    
      <section id="skills"  >
        <div className="col-md-12 align-self-center justify-self-center "  >
          <div className="col-md-12" >
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div >
         <div className="w-100 h-100 d-flex justify-content-center align-items-center ">
         <div className="col-lg-7 text-center w-100 d-flex align-self-center justify-self-center" >
            <ul className="list-inline mx-auto skill-icon gap-3 " >{skills}</ul>
          </div>
         </div>
        </div>
      </section>
    
  
     
    )
  }
}

export default Skills;
