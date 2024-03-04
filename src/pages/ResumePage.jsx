import { useEffect, useState } from 'react';
import { usePageContext } from '../utils/PageContext';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ListItem from '../components/ListItem';
import fileUrl from '/assets/Burton_Jordan_Resume.pdf';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ResumePage () {
  const { _, setPage } = usePageContext();
  const [variant, setVariant] = useState(true);

  const frontendClick = () => setVariant(true);
  const backendClick = () => setVariant(false);

  useEffect(() => {
    setPage("Resume");
    window.scrollTo(0, 0);
  }, []);
  
  const page = {
    header: "RESUME"
  }

  const frontendSkills = [
    'Javascript', 
    'Bootstrap', 
    'React-Bootstrap', 
    'HTML5', 
    'CSS', 
    'Tailwind', 
    'JQuery', 
    'AJAX'
  ]

  const backendSkills = [
    'MySQL', 
    'Node', 
    'MongoDB', 
    'Express', 
    'ReactJS', 
    'Github', 
    'GraphQL', 
    'MERN'
  ]

  const fileName = 'Burton_Jordan_Resume';

  return (
    <>
      <PageHeader header={page.header}/>
      <Row className='justify-content-evenly align-self-center page-margin'>
        <Col xs={6} md={4} className='d-flex flex-wrap justify-content-center'> 
            <Button variant={(variant) ? 'primary' : 'secondary'} onClick={frontendClick}
              className='position-relative border border-3 border-light rounded-5 fs-2 mx-5 skills-btn z-3'>
                Frontend
            </Button>
          </Col>
        <Col xs={6} md={4} className='d-flex flex-wrap justify-content-center'> 
            <Button variant={(variant) ? 'secondary' : 'primary'} onClick={backendClick}
              className='position-relative border border-3 border-light rounded-5 fs-2 mx-5 skills-btn z-3'>
                Backend
            </Button>
        </Col>
        <Col xs={12} className='d-flex flex-wrap justify-content-center mt-4'>
          { (variant)
          ? <ul className="">
              {frontendSkills.map((skill, index) => (
                <ListItem key={index} 
                  skill={skill}>
                </ListItem>
              ))}
            </ul>
          : <ul className="">
              {backendSkills.map((skill, index) => (
                <ListItem key={index}
                  skill={skill}>
                </ListItem>
              ))}
            </ul>
          }
        </Col>
        <Col>
          <Link
            to={fileUrl}
            download="Burton-Jordan-Resume"
            target="_blank"
            rel="noreferrer"
          >
            <Button className='position-relative rounded-pill z-3 my-4'>
            Download Resume
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default ResumePage