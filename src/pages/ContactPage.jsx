import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';

function ContactPage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Contact")
  }, []);

  return (
    <div className="container pt-4">
      CONTACT
    </div>
  );
}

export default ContactPage