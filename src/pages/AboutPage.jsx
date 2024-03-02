import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function AboutPage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("About")
  }, []);
  
  return (
    <>
      <Row>
        <h1 className='d-block position-absolute top-0 start-0 my-5'>ABOUT ME</h1>
      </Row>

      <Row className='justify-content-center align-self-start page-margin'>
        <Col xs={9} md={3}>
          <Image src="src/assets/profile_picture.jpg" className='border border-4 border-light rounded-pill mb-3 z-2' fluid />
        </Col>
        <Col xs={12} md={6}>
          <p className='fs-5 d-md-none'>
            Welcome to my portfolio! I'm Jordan Burton, a junior full stack web developer with a unique background in aerospace engineering. 
          </p><p className='fs-5 d-md-none'>
            I have a passion for frontend design over backend logic, but I still enjoy every aspect of the development process.
          </p><p className='fs-5 d-md-none'>
            When I'm not coding, you can find me playing Anime OST's on my electric guitar, indulging in gaming shenanigans, or watching various Anime titles. I believe in the power of interdisciplinary thinking and draw inspiration from diverse interests to fuel my creativity.
          </p>

          <p className='fs-4 d-none d-md-block align-bottom'>
            Welcome to my portfolio! I'm Jordan Burton, a junior full stack web developer with a unique background in aerospace engineering. My journey began at the University of Texas at Austin, where I immersed myself in the complexities of aerospace technology, honing my problem-solving skills and attention to detail.
          </p><p className='fs-4 d-none d-md-block mt-5 align-bottom'>
            While my passion for aerospace remains, my fascination with technology led me to explore the world of web development. I thrive on the creative challenges of crafting intuitive user experiences and turning ideas into functional, elegant solutions. From frontend design to backend logic, I enjoy every aspect of the development process.
          </p><p className='fs-4 d-none d-md-block mt-5 align-bottom'>
            Combining my technical expertise with a relentless curiosity, I continuously seek to expand my knowledge and stay abreast of the latest trends and technologies in the ever-evolving world of web development. Whether it's building responsive websites or optimizing backend functionality, I approach each project with enthusiasm and dedication.
          </p><p className='fs-4 d-none d-md-block mt-5 align-bottom'>
            When I'm not coding, you can find me playing my electric guitar and bass, indulging in gaming shenanigans, or watching various Anime titles. I believe in the power of interdisciplinary thinking and draw inspiration from diverse interests to fuel my creativity.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default AboutPage