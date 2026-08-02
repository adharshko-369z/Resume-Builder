
// summary
export function validateSummary(summary){
  const error = {}
  
  if(!summary.professionalSummary.trim()){
      error.professionalSummary = "summary is required "
  }

    return error
  } 

// education
export  function validateEducation(education){
    const error = {}

    if(!education.degreeName.trim()){
      error.degreeName = "Degree name is required"
    }

    if(!education.institution.trim()){
      error.institution = "Institution name is required"
    }

    const educationStartDateTrimed  = education.educationStartDate.trim()
    const educationEndDateTrimed = education.educationEndDate.trim()

    if(!educationStartDateTrimed){
      error.educationStartDate = "Started date is required"
    }

    if(!educationEndDateTrimed){
      error.educationEndDate = "Ended date is required"
    }else 
    if(educationStartDateTrimed && educationEndDateTrimed){
      const start = new Date(educationStartDateTrimed)
      const end =   new Date(educationEndDateTrimed)
      if(end < start)
      error.educationEndDate = "End date cannot be earlier than the start date."
    }
    return error
  }

// PersonalDetails
export function validatePersonalDetails(personalDetails){
      const error = {}

      const cleanName = personalDetails.fullName.trim()
      if(!cleanName){
        error.fullName = "Full name is required"
      }

      const cleanedPhone = personalDetails.phoneNumber.trim()
      const isOnlyDigits = /^[0-9]+$/.test(cleanedPhone)

      if(!cleanedPhone){
          error.phoneNumber = "Mobile number is required"
      } else   
      if(!isOnlyDigits){
        error.phoneNumber = "Invalid number. Numbers only"
      } else if(cleanedPhone.length !== 10){
        error.phoneNumber = "Mobile number must be exactly 10 digits"
      }
      const cleanEmail = personalDetails.email.trim()  
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(cleanEmail)

      if(!cleanEmail){
        error.email = "Email is required"
      }else if(!emailRegex){
        error.email = "Invalid email"
      }

      if(!personalDetails.city.trim()){
        error.city = "City name is required"
      }

      if(!personalDetails.district.trim()){
        error.district = "District name is required"
      }

      if(!personalDetails.state.trim()){
        error.state = "State name is required"
      }

      const githubRegex = /^https:\/\//.test(personalDetails.github.trim())

      if(personalDetails.github.trim() && !githubRegex){
        error.github = "Invalid url"
      }

      const linkedinRegex = /^https:\/\//.test(personalDetails.linkedin.trim())

      if(personalDetails.linkedin && !linkedinRegex){
        error.linkedin = "Invalid url"
      }

      return error
  }

// skills
export function validateSkills(skills){
    const error = {}

    for(let skill of skills){
      if(!skill.category.trim()){
      error[`category_${skill.id}`] = "Category is required"
    }

    if(!skill.skillsList.trim()){
      error[`skillsList_${skill.id}`] = "skills is required"
    }
    }

    return error
  } 

// projects  
export function validateProjects(projects){
    const error = {}

    for(let project of projects){
      if(!project.projectTitle.trim()){
      error[`projectTitle_${project.id}`] = "Project title/name is required"
      }

      if(!project.technologies.trim()){
      error[`technologies_${project.id}`] = "Technologies used required"
      }

      if(!project.description.trim()){
      error[`description_${project.id}`] = "Description is required "
      }

      const projectGithubRegex = /^https:\/\//.test(project.projectGithub.trim())

      if(project.projectGithub.trim() && !projectGithubRegex){
        error[`projectGithub_${project.id}`] = "Invalid url"
      }

      const projectLiveLinkRegex = /^https:\/\//.test(project.projectLiveLink.trim())

      if(project.projectLiveLink.trim() && !projectLiveLinkRegex){
        error[`projectLiveLink_${project.id}`] = "Invalid url"
      }
    }

    return error
  }

// experiences
export function validateExperiences(experiences){
    const error = {}

    for(let experience of experiences){

      if(!experience.companyName.trim()){
        error[`companyName_${experience.id}`] = "company name is required"
      }

      if(!experience.role.trim()){
        error[`role_${experience.id}`] = "role is required"
      }

      if(!experience.description.trim()){
      error[`description_${experience.id}`] = "Description is required "
      }

    const experienceStartDateTrimed  = experience.experienceStartDate.trim()
    const experienceEndDateTrimed = experience.experienceEndDate.trim()

    if(!experienceStartDateTrimed){
      error[`experienceStartDate_${experience.id}`] = "Started date is required"
    }

    if(!experienceEndDateTrimed){
      error[`experienceEndDate_${experience.id}`] = "Ended date is required"
    }else 
    if(experienceStartDateTrimed && experienceEndDateTrimed){
      const start = new Date(experienceStartDateTrimed)
      const end =   new Date(experienceEndDateTrimed)
      if(end < start)
       error[`experienceEndDate_${experience.id}`] = "End date cannot be earlier than the start date."
    }
    }

    return error 
  }