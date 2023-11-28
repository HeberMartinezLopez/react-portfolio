
import './gallery.css'; // Assuming this is your CSS file
import project1 from '../../images/project1.jpg';
import project2 from '../../images/project2.jpg';
import project3 from '../../images/project3.jpg';
import project4 from '../../images/project4.jpg';
import project5 from '../../images/project5.jpg';
import project6 from '../../images/project6.jpg';

const Gallery = () => {
  const projects = [
    {
      imageUrl: project1,
      title: 'Project 1',
      description: 'Description for Project 1',
      repoLink: 'https://github.com/username/project1'
    },
    {
      imageUrl: project2,
      title: 'Project 2',
      description: 'Description for Project 2',
      repoLink: 'https://github.com/username/project2'
    },
    {
      imageUrl: project3,
      title: 'Project 3',
      description: 'Description for Project 3',
      repoLink: 'https://github.com/username/project3'
    },
    {
      imageUrl: project4,
      title: 'Project 4',
      description: 'Description for Project 4',
      repoLink: 'https://github.com/username/project4'
    },
    {
      imageUrl: project5,
      title: 'Project 5',
      description: 'Description for Project 5',
      repoLink: 'https://github.com/username/project5'
    },
    {
      imageUrl: project6,
      title: 'Project 6',
      description: 'Description for Project 6',
      repoLink: 'https://github.com/username/project6'
    }
  ];

  return (
    <div className="gallery-container">
      <div className="gallery">
        {projects.map((project, index) => (
          <div className="gallery-item" key={index}>
            <img src={project.imageUrl} alt={``} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                View Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;