import PersonalDetails from "../../components/Form/PersonalDetails"
import Summary from "../../components/Form/Summary"
import Education from "../../components/Form/Education"
import Projects from "../../components/Form/Projects"
import Experience from "../../components/Form/Experience"
import Skills from "../../components/Form/Skills"

export default function FormResume({resumeFormData, resumeSteps}){

    const {
      formData,
      handleChange,
      handleSubmit,
      addProject,
      addExperience,
      addSkills,
      deleteArrayItem,
      clearResumeData
    }= resumeFormData
    
    const {
    isActive,
    setIsActive,
    currentStep,
    errors,
    goToEducation,
    goToSkills,
    goToProjects,
    goToExperience,
    goToSummary,
    goToPreview
    }=resumeSteps

    return(
        <div className="progression-form-wrapper">
                <div className="progression-container">
                    <p>Steps {currentStep}/6</p>
                    <div className="progression-tab-btns">
                        {isActive === 'personal'&& <button type="button" className="nothing-style-btn"></button>}
                        {isActive === 'education'&& <button type="button" onClick={()=> setIsActive("personal")}>&#9664; Back to Personal</button>}
                        {isActive === 'skills' && <button type="button" onClick={()=> setIsActive("education")} >&#9664; Back to Education</button>}
                        {isActive=== 'projects' && <button type="button" onClick={()=> setIsActive("skills")} >&#9664; Back to Skills</button>}
                        {isActive=== 'experience' && <button type="button" onClick={()=> setIsActive("projects")} >&#9664; Back to Projects</button>}
                        {isActive === 'summary' && <button type="button" onClick={()=> setIsActive("experience")}>&#9664; Back to Experiences</button>}
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    {isActive=== "personal" && 
                    <>
                      <div className="form-content">
                        <PersonalDetails formData={formData} errors={errors} onChange={handleChange}/>
                      </div>
                      <div className="form-action personal-action-btn">
                        <button type="button" onClick={goToEducation}>Next</button>
                      </div>
                    </>
                    }
                    {isActive=== "education" && 
                      <>
                        <div className="form-content">
                          <Education formData={formData} errors={errors} onChange={handleChange}/>
                        </div>
                        <div className="form-action">
                          <button type="button" onClick={goToSkills}>Next</button>
                        </div>
                      </>
                    }
                    {isActive=== "skills" && 
                      <>
                        <div className="form-content">
                          <Skills formData={formData} errors={errors} onClick={addSkills} deleteArrayItem={deleteArrayItem} onChange={handleChange}/>
                        </div>
                        <div className="form-action">
                          <button type="button" onClick={goToProjects}>Next</button>
                        </div>
                      </>
                    }
                    {isActive=== "projects" && 
                      <>
                        <div className="form-content">
                          <Projects formData={formData} errors={errors} onClick={addProject} deleteArrayItem={deleteArrayItem} onChange={handleChange}/>
                        </div>
                        <div className="form-action">
                          <button type="button" onClick={goToExperience}>Next</button>
                        </div>
                      </>
                    }
                    {isActive=== "experience" && 
                      <>
                        <div className="form-content">
                          <Experience formData={formData} errors={errors} onClick={addExperience} deleteArrayItem={deleteArrayItem} onChange={handleChange}/>
                        </div>
                        <div className="form-action">
                          <button type="button" onClick={goToSummary}>Next</button>
                        </div>
                      </>
                    }
                    {isActive=== "summary" && 
                      <>
                        <div className="form-content">
                          <Summary formData={formData} errors={errors} onChange={handleChange}/>
                        </div>
                        <div className="form-action">
                          <button type="submit" onClick={goToPreview}>Preview Resume</button>
                        </div>
                      </>
                    }
                  </form>  
            </div>         
    )
}
