import Row from 'react-bootstrap/Row';

function PageHeader (props) {
return (
    <>
      <Row>
        <h1 className='d-block position-absolute top-0 start-0 my-5'>{props.header}</h1>
      </Row>
    </>
  );
}

export default PageHeader