import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';

function PortfolioPage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Portfolio")
  }, []);
  
  return (
    <div className="container pt-4">
      PORTFOLIO
    </div>
  );
}

export default PortfolioPage