import { useState, useEffect } from "react";

const initialFormData = {
    personalDetails:{
      fullName : "",
      phoneNumber : "",
      email : "",
      city: "",
      district : "",
      state : "",
      github : "",
      linkedin : "",
      portfolio : ""
    },
    education : {
      degreeName : "",
      institution : "",
      educationStartDate : "",
      educationEndDate : ""
    },
    projects : [
      {
        id : crypto.randomUUID(),
        projectTitle : "",
        technologies : "",
        description : "",
        projectGithub : "",
        projectLiveLink : ""
      }
    ],
    experiences : [
      {
        id : crypto.randomUUID(),
        companyName : "",
        role : "",
        description : "",
        experienceStartDate : "",
        experienceEndDate : ""
      }
    ],
    skills : [
        {
          id : crypto.randomUUID(),
          category : "",
          skillsList : ""
        }
      ],
    summary : {
      professionalSummary : ""
    }
  }

export default function useResumeForm(){
    const [formData, setFormData] = useState(
        ()=> JSON.parse(localStorage.getItem("resumeData")) || initialFormData
    )

    useEffect(()=>{
        localStorage.setItem("resumeData", JSON.stringify(formData))
      },[formData])
    
      function clearResumeData(){
        localStorage.removeItem("resumeData")
        setFormData(initialFormData)
      }
    
      function handleSubmit(e){
        e.preventDefault()
      }
    
      function handleChange(e){
        const {name,value} = e.target
        const section = e.target.dataset.section
    
        const arraySections = ["projects", "experiences", "skills"]
    
        if(!section) return
    
        if(arraySections.includes(section)){
          const arrayId = e.target.dataset.id
          setFormData(prevFormData => {
            return{
              ...prevFormData,
              [section] : prevFormData[section].map(arrayItem=>{
                if( arrayId === arrayItem.id){
                  return {...arrayItem,[name] : value}
                }
                return arrayItem
              })      
            }
          })
        }
    
        if(!arraySections.includes(section)){
          setFormData(prevFormData=>{
            return{
              ...prevFormData,
              [section]:{
               ...prevFormData[section],
                [name] : value
              }
            }
          })
        }
        
      }
    
      function addProject(){
          setFormData(prevFormData=>{
            return{
              ...prevFormData,
              projects : [
                ...prevFormData.projects,
                {
                  id : crypto.randomUUID(),
                  projectTitle : "",
                  technologies : "",
                  description : "",
                  projectGithub : "",
                  projectLiveLink : ""
                }
              ]
            }
          })
      }
    
      function addExperience(){
        setFormData(prevFormData=>{
            return{
              ...prevFormData,
              experiences : [
                ...prevFormData.experiences,
                {
                  id : crypto.randomUUID(),
                  companyName : "",
                  role : "",
                  description : "",
                  experienceStartDate : "",
                  experienceEndDate : ""
                }
              ]
            }
          })
      }
    
      function addSkills(){
        setFormData(prevFormData=>{
            return{
              ...prevFormData,
              skills : [
                ...prevFormData.skills,
                {
                  id : crypto.randomUUID(),
                  category : "",
                  skillsList : ""
                }
              ]
            }
          })
      }
    
      function deleteArrayItem(id,section){
        setFormData(prevFormData => {
          return{
            ...prevFormData,
            [section] : prevFormData[section].filter(arrayItem => arrayItem.id !== id)
          }
        })
      }

    return{
        formData,
        handleChange,
        handleSubmit,
        addProject,
        addExperience,
        addSkills,
        deleteArrayItem,
        clearResumeData
    }  
}