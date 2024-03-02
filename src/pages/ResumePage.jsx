import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';

function ResumePage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Resume")
  }, []);
  
  return (
    <div className="container pt-4">
      RESUME
    </div>
  );
}

export default ResumePage