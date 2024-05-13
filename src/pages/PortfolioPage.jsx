import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

import Row from 'react-bootstrap/Row';

function PortfolioPage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Portfolio");
    window.scrollTo(0, 0);
  }, []);

  const page = {
    header: "PORTFOLIO"
  }

  const projects = [
    {
      urlLinks: ['https://jburton-java-api-1cf73a69112b.herokuapp.com/', 'https://github.com/jordaneburton/tech-news-java-api'],
      thumbnail: '/assets/java-icon.png',
      title: 'Java API',
      thumbnailOpt: false,
      techStack: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL']
    },
    {
      urlLinks: ['https://jordaneburton.github.io/recipe-finder/', 'https://github.com/jordaneburton/recipe-finder'],
      thumbnail: '/assets/cooking-icon.png',
      title: 'Online Cookbook',
      thumbnailOpt: true,
      techStack: ['Javascript', 'TailwindCSS', 'RESTful API']
    },
    {
      urlLinks: ['https://tinder-for-jobs-53eebacc42f4.herokuapp.com/', 'https://github.com/jordaneburton/tinder-for-jobs'],
      thumbnail: '/assets/jobs-icon.png',
      title: 'Tinder for Jobs',
      thumbnailOpt: false,
      techStack: ['Javascript', 'Handlebars.js', 'MySQL', 'RESTful API']
    },
    {
      urlLinks: ['https://jordaneburton.github.io/weather-dashboard/', 'https://github.com/jordaneburton/weather-dashboard'],
      thumbnail: '/assets/weather-icon.png',
      title: 'Weather Dashboard',
      thumbnailOpt: false,
      techStack: ['Javascript', 'Bootstrap', 'RESTful API']
    },
    {
      urlLinks: ['https://jordaneburton.github.io/quiz-game/', 'https://github.com/jordaneburton/quiz-game'],
      thumbnail: '/assets/js-icon.png',
      title: 'Javascript Quiz Game',
      thumbnailOpt: false,
      techStack: ['Javascript', 'HTML', 'CSS']
    },
    {
      urlLinks: ['https://github.com/jordaneburton/password-generator', 'https://jordaneburton.github.io/password-generator/'],
      thumbnail: '/assets/password-icon.png',
      title: 'Password Generator',
      thumbnailOpt: false,
      techStack: ['Javascript', 'HTML', 'CSS']
    },
  ];

  return (
    <>
      <PageHeader header={page.header}/>
      <Row className='justify-content-evenly align-self-center page-margin'>
        <h2>This website portfolio itself is crafted using React and Bootstrap!</h2>
        <h3>Hover over the project icons to show the tech stacks used. Click on the links below the icons to open the project's website or github page.</h3>
          {projects.map((project, index) => 
            <ProjectCard key={index}
              urlLinks={project.urlLinks} thumbnail={project.thumbnail} title={project.title} thumbnailOpt={project.thumbnailOpt} techStack={project.techStack}>
            </ProjectCard>
          )}
      </Row>
    </>
  );
}

export default PortfolioPage