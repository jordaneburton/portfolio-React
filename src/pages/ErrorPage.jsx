import { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Button from 'react-bootstrap/Button';

function ErrorPage () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const backClick = () => window.history.go(-1);

  const page = {
    header: "OOPS!"
  }
  return (
    <>
      <PageHeader header={page.header}/>
      <h2>
      Whoops. Looks like something went wrong! Try going back.
      </h2>
      <Button variant={'primary'} 
        onClick={backClick}
        className='position-relative border border-3 border-light rounded-5 fs-2 m-5 skills-btn z-3'>
        Go Back
      </Button>
    </>
  );
}

export default ErrorPage