import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';

function HomePage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Home")
  }, []);

  return (
    <>
      
      <div className="container pt-4 text-light">
        HOME
      </div>
    </>
  );
}

export default HomePage