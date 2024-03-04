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
      urlLinks: ['https://jordaneburton.github.io/recipe-finder/', 'https://github.com/jordaneburton/recipe-finder'],
      thumbnail: '/assets/recipe-finder.png',
      title: 'Online Cookbook'
    },
    {
      urlLinks: ['https://tinder-for-jobs-53eebacc42f4.herokuapp.com/', 'https://github.com/jordaneburton/tinder-for-jobs'],
      thumbnail: '/assets/tinder-for-jobs.png',
      title: 'Tinder for Jobs'
    },
    {
      urlLinks: ['https://jordaneburton.github.io/weather-dashboard/', 'https://github.com/jordaneburton/weather-dashboard'],
      thumbnail: '/assets/weather-dashboard.png',
      title: 'Weather Dashboard'
    },
    {
      urlLinks: ['https://jordaneburton.github.io/quiz-game/', 'https://github.com/jordaneburton/quiz-game'],
      thumbnail: '/assets/js-quiz-game.png',
      title: 'Javascript Quiz Game'
    },
    {
      urlLinks: ['https://github.com/jordaneburton/password-generator', 'https://jordaneburton.github.io/password-generator/'],
      thumbnail: '/assets/password-generator.png',
      title: 'Password Generator'
    },
  ];

  return (
    <>
      <PageHeader header={page.header}/>
      <Row className='justify-content-evenly align-self-center page-margin'>
          {projects.map((project, index) => 
            <ProjectCard key={index}
              urlLinks={project.urlLinks} thumbnail={project.thumbnail} title={project.title}>
            </ProjectCard>
          )}
      </Row>
    </>
  );
}

export default PortfolioPage