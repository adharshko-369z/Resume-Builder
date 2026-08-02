export default function PersonalDetails({formData,errors,onChange}){

    const commonAttributes = {
        onChange : onChange,
        "data-section" : "personalDetails"
    }

    return(
        <>
        <section className="personal-details-section">
            <h2>Personal Details</h2>
            <div className="form-section-wrapper">
                <div className="label-input-error-container">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" {...commonAttributes} value={formData.personalDetails.fullName} placeholder="Full Name"   required/>
                    <div>
                        <p  className="error-message">{errors?.fullName}</p>
                    </div>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="phoneNumber"> Phone Number</label>  
                    <input type="tel" id="phoneNumber" name="phoneNumber" {...commonAttributes} value={formData.personalDetails.phoneNumber} placeholder="Phone Number"  required/>
                    <p className="error-message" >{errors?.phoneNumber}</p>    
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email"  {...commonAttributes} value={formData.personalDetails.email} placeholder="Email " required/>
                    <p className="error-message" >{errors?.email}</p>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" {...commonAttributes} value={formData.personalDetails.city} placeholder="City"  required/>
                    <p className="error-message" >{errors?.city}</p>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="district">District</label>
                    <input type="text" id="district" name="district" {...commonAttributes} value={formData.personalDetails.district} placeholder="District"  required/>
                    <p className="error-message" >{errors?.district}</p>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" {...commonAttributes} value={formData.personalDetails.state} placeholder="State"  required/>
                    <p className="error-message" >{errors?.state}</p>
                </div>
             </div>
                <div className="label-input-error-container">
                    <label htmlFor="githubUrl">GitHub</label> 
                    <input type="url" id="githubUrl" name="github"{...commonAttributes} value={formData.personalDetails.github} placeholder="https://github.com/username"  />
                    <p className="error-message" >{errors?.github}</p>
                </div>
                <div className="label-input-error-container">
                    <label htmlFor="linkedinUrl">LinkedIn</label>
                    <input type="url" id="linkedinUrl" name="linkedin"{...commonAttributes} value={formData.personalDetails.linkedin} placeholder="https://linkedin.com/username" />
                    <p className="error-message" >{errors?.linkedin}</p>
                </div>    
           
        </section> 
        </>
    )
}