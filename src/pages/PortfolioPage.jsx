import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import PageHeader from '../components/PageHeader';

function PortfolioPage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Portfolio")
  }, []);
  const page = {
    header: "PORTFOLIO"
  }
  return (
    <>
      <PageHeader header={page.header}/>
    </>
  );
}

export default PortfolioPage