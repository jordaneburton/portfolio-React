import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import PageHeader from '../components/PageHeader';

function HomePage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Home");
    window.scrollTo(0, 0);
  }, []);

  const page = {
    header: "WELCOME"
  }
  return (
    <>
      <PageHeader header={page.header}/>
      <h2>
      Thank you for visiting my portfolio. I look forward to connecting with fellow developers, designers, and potential collaborators. Let's build something extraordinary together!
      </h2>
    </>
  );
}

export default HomePage