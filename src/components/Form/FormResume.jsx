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
      deleteArrayItem
    }= resumeFormData
    
    const {
    preview,  
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
                </div>
                <form onSubmit={handleSubmit} id="form-resume">
                    {isActive=== "personal" && 
                    <>
                      <div className="form-content">
                        <PersonalDetails formData={formData} errors={errors} onChange={handleChange}/>
                      </div>
                    </>
                    }
                    {isActive=== "education" && 
                      <>
                        <div className="form-content">
                          <Education formData={formData} errors={errors} onChange={handleChange}/>
                        </div>
                      </>
                    }
                    {isActive=== "skills" && 
                      <>
                        <div className="form-content">
                          <Skills formData={formData} errors={errors} onClick={addSkills} deleteArrayItem={deleteArrayItem} onChange={handleChange}/>
                        </div>
                      </>
                    }
                    {isActive=== "projects" && 
                      <>
                        <div className="form-content">
                          <Projects formData={formData} errors={errors} onClick={addProject} deleteArrayItem={deleteArrayItem} onChange={handleChange}/>
                        </div>
                      </>
                    }
                    {isActive=== "experience" && 
                      <>
                        <div className="form-content">
                          <Experience formData={formData} errors={errors} onClick={addExperience} deleteArrayItem={deleteArrayItem} onChange={handleChange}/>
                        </div>
                      </>
                    }
                    {isActive=== "summary" && 
                      <>
                        <div className="form-content">
                          <Summary formData={formData} errors={errors} onChange={handleChange}/>
                        </div>
                      </>
                    }
                  </form> 
                  <div className="form-actions-btns">
                    <div className="back-to-btns">
                      {isActive === 'education'&& <button type="button" onClick={()=> setIsActive("personal")}>&#9664; Back</button>}
                      {isActive === 'skills' && <button type="button" onClick={()=> setIsActive("education")} >&#9664; Back</button>}
                      {isActive=== 'projects' && <button type="button" onClick={()=> setIsActive("skills")} >&#9664; Back</button>}
                      {isActive=== 'experience' && <button type="button" onClick={()=> setIsActive("projects")} >&#9664; Back</button>}
                      {isActive === 'summary' && <button type="button" onClick={()=> setIsActive("experience")}>&#9664; Back</button>}
                    </div>
                    <div className="next-to-btns">
                      {isActive === 'personal' && <button type="button" onClick={goToEducation}>Next &#9654;</button>}
                      {isActive === 'education' && <button type="button" onClick={goToSkills}>Next &#9654;</button>}
                      {isActive === 'skills' && <button type="button" onClick={goToProjects}>Next &#9654;</button>}                  
                      {isActive === 'projects' && <button type="button" onClick={goToExperience}>Next &#9654;</button>}
                      {isActive === 'experience' && <button type="button" onClick={goToSummary}>Next &#9654;</button>}
                      {isActive === 'summary' && <button type="submit" className={preview ? "disable-btn" : ""} form="form-resume" onClick={goToPreview} disabled={preview}>Preview Resume</button>}
                    </div>
                  </div> 
            </div>         
    )
} 

