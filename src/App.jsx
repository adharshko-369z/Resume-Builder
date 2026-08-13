
import { useMediaQuery } from "react-responsive"
import { PDFDownloadLink } from '@react-pdf/renderer'
import resumeIcon  from "./assets/resumeicon.svg"
import PreviewResume from "./components/PreviewResume"
import PdfResume from "./components/PdfResume"
import FormResume from "./components/Form/FormResume"

// import-custom-hook      
import useResumeForm from "./hooks/useResumeForm"
import useResumeSteps from "./hooks/useResumeSteps"

function App() {

  const resumeFormData = useResumeForm() 
  const resumeSteps = useResumeSteps(resumeFormData.formData) 

  const isDesktop = useMediaQuery({
    minWidth : "1024px"
  })


  function resetApp(){
    resumeSteps.setCurrentStep(1)
    resumeSteps.setRenderHeaderBtns(false)
    resumeSteps.setPreview(false)
    resumeSteps.setIsActive('personal')
    resumeFormData.clearResumeData()
    resumeSteps.setIsDownloadResume(false)
    resumeSteps.setNeedLoadBtn(true)
  }

  return (
    <div className="app">
      <header>
        <div className="logo">
          <img src={resumeIcon} alt="" width="30px" height="30px" />  
          <h1>Resume Builder</h1>
        </div>
        <div className="header-buttons">
          {(!resumeSteps.preview && resumeSteps.needLoadBtn) && <button className="header-button" onClick={resumeFormData.loadExampleData}>Load Example</button>}
          {(!isDesktop && resumeSteps.renderHeaderBtns) &&
          <div> 
          { resumeSteps.preview ? 
            <button className="header-button"type="button" onClick={()=>{resumeSteps.setPreview(false)
                                                                          resumeSteps.setNeedLoadBtn(false)}}>Edit</button> :
            <button className="header-button" type="submit" form="form-resume" onClick={resumeSteps.checkTrue}>Preview</button>
            }
          </div>
          }
        </div>
      </header>
      <main>
      { !isDesktop &&
      <>
        { !resumeSteps.preview? 
        <FormResume resumeFormData={resumeFormData} resumeSteps={resumeSteps} />
        : 
        <>
        <PreviewResume getData={resumeFormData.formData}/>
          <div className="download-clear-btn-wrapper">
            <button className={resumeSteps.isDownloadResume ? "enable-clear-btn" : ""} onClick={resetApp} disabled={!resumeSteps.isDownloadResume}>Clear</button>
            <PDFDownloadLink 
              className="download-btn"
              onClick={()=> resumeSteps.setIsDownloadResume(true)}
              document={<PdfResume getData={resumeFormData.formData} />} 
              fileName="resume.pdf"
            >
              Download 
            </PDFDownloadLink>
          </div>
        </>}
      </>} 


      {isDesktop && <>
      <FormResume resumeFormData={resumeFormData} resumeSteps={resumeSteps} dataToDisplay ={resumeFormData.formData} />
      { resumeSteps.preview ? 
        <div className="preview-download-wrapper">
          <PreviewResume getData={resumeFormData.formData}/>
          <div className="download-clear-btn-wrapper">

            <button className={resumeSteps.isDownloadResume ? "enable-clear-btn" : ""} onClick={resetApp} disabled={!resumeSteps.isDownloadResume}>Clear</button>
            <PDFDownloadLink 
              className="download-btn"
              onClick={()=> resumeSteps.setIsDownloadResume(true)}
              document={<PdfResume getData={resumeFormData.formData} />} 
              fileName="resume.pdf"
              >
                Download Resume
              </PDFDownloadLink>
          </div>
        </div>:(
          <div className="preview-placeholder-wrapper">
          <h3>Resume Preview</h3>
          <p>Your resume preview will appear here as you fill in the form.</p>
          <div className="download-clear-btn-wrapper">
            <button>Clear</button>
            <button className="download-btn" disabled>
              Download Resume
            </button>
            </div>
          </div>
        
        )
      }
      </>}
      </main>
    </div>
  )
}

export default App
