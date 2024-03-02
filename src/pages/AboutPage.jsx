import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';

function AboutPage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("About")
  }, []);
  
  return (
    <div className="container pt-4">
      ABOUT
    </div>
  );
}

export default AboutPage