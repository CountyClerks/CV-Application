import React from 'react'
import RenderCV from './Render-CV'
import Render from './Render-CV'
export default function Form() {
    const [contactData, setContactInfo] = React.useState({
        firstName: "",
        lastName: "",
        position: "",
        phoneNumber: "",
        email: "",
        description: "",
        jobTitle: "",
        company: "",
        jobLocation: "",
        startYear: "",
        endYear: "",
        university: "",
        universityLocation: "",
        degree: "",
        major: "",
        degreeStartYear: "",
        degreeEndYear: ""
    })


    function handleChange(event) {
        const {name, value} = event.target
        setContactInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form-container">
                <form>
                    <h2>Personal Information</h2>
                    <input 
                        type="text" 
                        placeholder="First Name"
                        name="firstName"
                        className="form--input"
                        value={contactData.firstName}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Last Name"
                        name="lastName"
                        className="form--input"
                        value={contactData.lastName}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Position"
                        name="position"
                        className="form--input"
                        value={contactData.position}
                        onChange={handleChange}
                    />
                    <input 
                        type="email" 
                        placeholder="example@mail.com"
                        name="email"
                        className="form--input"
                        value={contactData.email}
                        onChange={handleChange}
                    />
                    <input 
                        type="tel" 
                        placeholder="Phone Number"
                        name="phoneNumber"
                        className="form--input"
                        value={contactData.phoneNumber}
                        onChange={handleChange}
                    />
                    <textarea 
                        cols="30"
                        rows="15"
                        type="text" 
                        placeholder="About me..."
                        name="description"
                        className="form--input"
                        value={contactData.description}
                        onChange={handleChange}
                    />
                    <h2>Experience</h2>
                    <input 
                        type="text" 
                        placeholder="Title"
                        name="jobTitle"
                        className="form--input"
                        value={contactData.jobTitle}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Company Name"
                        name="company"
                        className="form--input"
                        value={contactData.company}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Location"
                        name="jobLocation"
                        className="form--input"
                        value={contactData.jobLocation}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Start Year"
                        name="startYear"
                        className="form--input"
                        value={contactData.startYear}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="End Year"
                        name="endYear"
                        className="form--input"
                        value={contactData.endYear}
                        onChange={handleChange}
                    />
                    <h2>Education</h2>
                    <input 
                        type="text" 
                        placeholder="University Name"
                        name="university"
                        className="form--input"
                        value={contactData.university}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Location"
                        name="universityLocation"
                        className="form--input"
                        value={contactData.universityLocation}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Degree"
                        name="degree"
                        className="form--input"
                        value={contactData.degree}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Major"
                        name="major"
                        className="form--input"
                        value={contactData.major}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Start Year"
                        name="degreeStartYear"
                        className="form--input"
                        value={contactData.degreeStartYear}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="End Year"
                        name="degreeEndYear"
                        className="form--input"
                        value={contactData.degreeEndYear}
                        onChange={handleChange}
                    />
                </form>
            </div>
            <Render contactData={contactData}/>
        </main>
    )
}