import { useState } from "react"

import { validateSummary,
      validateEducation,
      validatePersonalDetails,
      validateSkills,
      validateProjects,
      validateExperiences } from "../utils/validation"


export default function useResumeSteps(formData){ 
    
  const [preview,setPreview] = useState(false)
  const [renderHeaderBtns, setRenderHeaderBtns] = useState(false)
  const [isActive, setIsActive] = useState("personal")
  const [errors , setErrors] = useState({})
  const [currentStep, setCurrentStep] = useState(1)
  const [isDownloadResume, setIsDownloadResume] = useState(false)
  const [needLoadBtn, setNeedLoadBtn ] = useState(true)

  function goToEducation(){
    const personalDetailsError = validatePersonalDetails(formData.personalDetails)
    setErrors(personalDetailsError)
    if(Object.keys(personalDetailsError).length === 0){

      if(currentStep === 1){
        setCurrentStep(prevStep=> prevStep+1)
    }
    setIsActive('education')
    }
  }

  function goToSkills(){
    const educationError = validateEducation(formData.education)
    setErrors(educationError)

    if(Object.keys(educationError).length === 0){
      if(currentStep === 2){
          setCurrentStep(prevStep=> prevStep+1)
      }
      setIsActive('skills')  
    }    
  }  

  function goToProjects(){
    const skillsError = validateSkills(formData.skills)
    setErrors(skillsError)

    if(Object.keys(skillsError).length === 0){
      if(currentStep === 3){
        setCurrentStep(prevStep=> prevStep+1)
      }
      setIsActive('projects')
    }    
  }

  function goToExperience(){
    const projectsError = validateProjects(formData.projects)
    setErrors(projectsError)

    if(Object.keys(projectsError).length === 0){

      if(currentStep === 4){
        setCurrentStep(prevStep=> prevStep+1)
      }
      setIsActive('experience')
    }    
  }

  function goToSummary(){
    const experiencesError = validateExperiences(formData.experiences)
    setErrors(experiencesError)

    if(Object.keys(experiencesError).length === 0){

      if(currentStep === 5){
        setCurrentStep(prevStep=> prevStep+1)
      }
      setIsActive('summary')
    }    
  }

  function goToPreview(){
    const summaryError = validateSummary(formData.summary)
    setErrors(summaryError)
    if(Object.keys(summaryError).length === 0) {
      setPreview(true)
      setRenderHeaderBtns(true)
    }   
  }

  function checkTrue(){
    const check = [
      ()=> validatePersonalDetails(formData.personalDetails),
      ()=> validateEducation(formData.education),
      ()=> validateSkills(formData.skills),
      ()=> validateProjects(formData.projects),
      ()=> validateExperiences(formData.experiences),
      ()=> validateSummary(formData.summary)
    ]

    const allErrors = check.reduce((flattened, fn)=>({
      ...flattened,
      ...fn()
    }),{})
    const hasError = Object.values(allErrors).some(errObj => Object.keys(errObj).length > 0)

    if(!hasError){
      setPreview(true)
      setErrors({})
    }else{
      setPreview(false)
      setErrors(allErrors)
      console.log("Validation Failed. Current Errors:",allErrors)
    }

  }

  return{
    preview,
    renderHeaderBtns,
    setRenderHeaderBtns,
    setPreview,
    isActive,
    setIsActive,
    currentStep,
    setCurrentStep,
    isDownloadResume,
    setIsDownloadResume,
    needLoadBtn,
    setNeedLoadBtn,
    errors,
    goToEducation,
    goToSkills,
    goToProjects,
    goToExperience,
    goToSummary,
    goToPreview,
    checkTrue,
  }
    
}
