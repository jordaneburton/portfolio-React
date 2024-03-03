import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ContactPage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Contact")
  }, []);

  const page = {
    header: "CONTACT"
  }

  const emailUrl = "mailto:jordane.burton@gmail.com?body=Say Hi!";

  return (
    <>
      <PageHeader header={page.header}/>

      <Row className='justify-content-center align-self-start page-margin'>
        <Col xs={12} className='w-100 my-5'>
          <h2>Email Me:</h2>
          <Link
            to={emailUrl}
            target="_blank"
            rel="noreferrer"
            className='position-relative z-3 fs-3'>
              jordane.burton@gmail.com
          </Link>
        </Col>
        <Col xs={12} className='w-100 my-5'>
          <h2>Or Give Me A Call!</h2>
          <p className='position-relative z-3 fs-3'>
            (210)-749-5284
          </p>
        </Col>
      </Row>
    </>
  );
}

export default ContactPage