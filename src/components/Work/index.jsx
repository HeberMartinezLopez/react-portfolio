import React from 'react';
import './work.css';

const Work = () => {
    const workExp = [
        {
            businessName: 'Business 1',
            address: '123 Address St, City, State, Zip',
            phoneNumber: '(123)-456-7890',
            datesWorked: 'Jan 2010 - Dec 2012',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            businessName: 'Business 2',
            address: '123 Address St, City, State, Zip',
            phoneNumber: '(123)-456-7890',
            datesWorked: 'Jan 2010 - Dec 2012',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            businessName: 'Business 3',
            address: '123 Address St, City, State, Zip',
            phoneNumber: '(123)-456-7890',
            datesWorked: 'Jan 2010 - Dec 2012',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            businessName: 'Business 4',
            address: '123 Address St, City, State, Zip',
            phoneNumber: '(123)-456-7890',
            datesWorked: 'Jan 2010 - Dec 2012',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            businessName: 'Business 5',
            address: '123 Address St, City, State, Zip',
            phoneNumber: '(123)-456-7890',
            datesWorked: 'Jan 2010 - Dec 2012',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            businessName: 'Business 6',
            address: '123 Address St, City, State, Zip',
            phoneNumber: '(123)-456-7890',
            datesWorked: 'Jan 2010 - Dec 2012',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        // to add more work exp, use same format
    ];

    return (
        <div className='work-container'>
            <div className='work-experience-grid'>
                {workExp.map((exp, index) => {
                    <div className='work-experience' key={index}>
                        <h3>{exp.businessName}</h3>
                        <p><strong>Address:</strong>{exp.address}</p>
                        <p><strong>Phone Number:</strong>{exp.phoneNumber}</p>
                        <p><strong>Dates Worked:</strong>{exp.datesWorked}</p>
                        <p><strong>Job Description:</strong>{exp.description}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Work;