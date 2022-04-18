import React from 'react'
import { useState } from 'react';
import styles from './searchCandidates.module.css';

function SearchCandidates() {
    const [resumeId, setResumeId] = useState('');
    const [candidateName, setCandidateName] = useState('');
    const [searchedCandidate, setSearchedCandidate] = useState(null);
    const [error, setError] = useState(false);

    const handleResumeIdChange = (e) => {
        setResumeId(e.target.value);
    };

    const handleCandidateNameChange = (e) => {
        setCandidateName(e.target.value);
    };

    const searchByResumeId = (e) => {
        e.preventDefault();
        setError(false);
        if (resumeId.trim() === '') {
            return;
        }

        let url = 'http://localhost:8080/api/getResumeById/' + resumeId;
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setSearchedCandidate(result.candidate);
                console.log(result);
            }).catch(err => {
                setError(true);
            });

    }

    const searchByCandidateName = (e) => {
        e.preventDefault();
        setError(false);
        if (candidateName.trim() === '') {
            return;
        }
        const encodedCandidateName = candidateName.trim().replace(" ", "+");
        let url = 'http://localhost:8080/api/getResumeByName/' + encodedCandidateName;
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setSearchedCandidate(result.candidate);
            }).catch(err => {
                setError(true);
            });
    }
    return (
        <div>
            <form>
                <div className={styles.title}>
                    Search Candidates
                </div>

                <div className={styles.container}>
                    <input type="text" placeholder="Search By Resume ID" value={resumeId} onChange={handleResumeIdChange} name="resumeId" />
                    <button type="submit" onClick={searchByResumeId}>Submit</button>
                </div>
                <div className={styles.container}>
                    <input type="text" placeholder="Search By Candidate Name" value={candidateName} onChange={handleCandidateNameChange} name="resumeId" />
                    <button type="submit" onClick={searchByCandidateName} >Submit</button>
                </div>
            </form>

            <div className={styles.searchResultDiv}>
                <div className={styles.title}>Search Result</div>
                {error ? (<div className={styles.error}>No Result Found</div>)
                    : searchedCandidate && (
                        searchedCandidate.map((candidate, index) => {
                            return (
                                <ul key={index} style={{ backgroundColor: '#fff' }}>
                                    <li>Name: {candidate.name}</li>
                                    <li>Job Title: {candidate.jobTitle}</li>
                                    <li>Current Company: {candidate.jobCompany}</li>
                                    <li>Job Description: {candidate.jobDescription}</li>
                                </ul>
                            )
                        })
                    )
                }
            </div>
        </div>

    )
}

export default SearchCandidates;