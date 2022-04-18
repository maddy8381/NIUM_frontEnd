import React, { useState } from 'react'
import styles from './addCandidates.module.css';

function AddCandidates() {
    const [userDetails, setUserDetails] = useState({
        uname: '',
        jobTitle: '',
        jobCompany: '',
        jobDescription: ''
    });

    const [flagSubmit, setFlagSubmit] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        let url = 'http://localhost:8080/api/uploadResumeDetails';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then((res) => {
                setUserDetails({
                    uname: '',
                    jobTitle: '',
                    jobCompany: '',
                    jobDescription: ''
                });
                setFlagSubmit(true);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <form>
            {
                flagSubmit && (
                    <div className={styles.success}>
                        Candidate Details Submitted Successfully.
                    </div>)
            }
            <div className={styles.title}>
                Add Candidate
            </div>

            <div className={styles.container}>
                <label htmlFor="Name"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" value={userDetails.uname} onChange={handleInputChange} name="uname" required />

                <label htmlFor="job title"><b>Current Job Title</b></label>
                <input type="text" placeholder="Enter Job Title" value={userDetails.jobTitle} onChange={handleInputChange} name="jobTitle" required />

                <label htmlFor="job company"><b>Current Job Company</b></label>
                <input type="text" placeholder="Enter Job Company" value={userDetails.jobCompany} onChange={handleInputChange} name="jobCompany" required />


                <label htmlFor="job description"><b>Current Job Description</b></label>
                <textarea rows="3" name="jobDescription" value={userDetails.jobDescription} onChange={handleInputChange} />


                <button type="submit" onClick={submitHandler}>Submit</button>
            </div>
        </form>
    )
}

export default AddCandidates;