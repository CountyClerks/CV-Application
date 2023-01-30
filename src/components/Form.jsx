import React from 'react'
export default function Form() {
    const [contactData, setContactInfo] = React.useState({
        firstName: "",
        lastName: "",
        position: "",
        phoneNumber: "",
        email: "",
        description: ""
    })
    return(
        <main>
            <div className="form-container">
                <form>
                    <input 
                        type="text" 
                        placeholder="First Name"
                        name="firstName"
                        className="form--input"
                        value={contactData.firstName}
                    />
                    <input 
                        type="text" 
                        placeholder="Last Name"
                        name="lastName"
                        className="form--input"
                        value={contactData.lastName}
                    />
                    <input 
                        type="text" 
                        placeholder="Position"
                        name="position"
                        className="form--input"
                        value={contactData.position}
                    />
                    <input 
                        type="email" 
                        placeholder="example@mail.com"
                        name="email"
                        className="form--input"
                        value={contactData.email}
                    />
                    <input 
                        type="tel" 
                        placeholder="Phone Number"
                        name="phoneNumber"
                        className="form--input"
                        value={contactData.phoneNumber}
                    />
                    <textarea 
                        type="text" 
                        placeholder="About me..."
                        name="description"
                        className="form--input"
                        value={contactData.description}
                    />
                </form>
            </div>
            <div className="resume">
                <h1>This is where the CV will be updated</h1>
            </div>
        </main>
    )
}