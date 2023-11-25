import React from 'react'
import './work.css'
const Work  = () => {

  const workExperiences = [
    {
      businessName: 'Business 1',
      address: '123 Address St, City, State, Zip',
      phoneNumber: '123-456-7890',
      datesWorked: 'Jan 2010 - Dec 2012',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      businessName: 'Business 1',
      address: '123 Address St, City, State, Zip',
      phoneNumber: '123-456-7890',
      datesWorked: 'Jan 2010 - Dec 2012',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      businessName: 'Business 1',
      address: '123 Address St, City, State, Zip',
      phoneNumber: '123-456-7890',
      datesWorked: 'Jan 2010 - Dec 2012',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      businessName: 'Business 1',
      address: '123 Address St, City, State, Zip',
      phoneNumber: '123-456-7890',
      datesWorked: 'Jan 2010 - Dec 2012',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      businessName: 'Business 1',
      address: '123 Address St, City, State, Zip',
      phoneNumber: '123-456-7890',
      datesWorked: 'Jan 2010 - Dec 2012',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      businessName: 'Business 1',
      address: '123 Address St, City, State, Zip',
      phoneNumber: '123-456-7890',
      datesWorked: 'Jan 2010 - Dec 2012',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Use same format to add more work experience
  ];


  return (
    <div className='work-container'>
        <div className='work-experience-grid'>
         {workExperiences.map((experience, index) => (
        <div className="work-experience" key={index}>
          <h3>{experience.businessName}</h3>
          <p><strong>Address:</strong> {experience.address}</p>
          <p><strong>Phone Number:</strong> {experience.phoneNumber}</p>
          <p><strong>Dates Worked:</strong> {experience.datesWorked}</p>
          <p><strong>Description of Duties:</strong> {experience.description}</p>
        </div>
      ))}
    </div>

    </div>

  )
}

export default Work 