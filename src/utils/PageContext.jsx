import { createContext, useContext, useState } from 'react';

// Initialize new context for current page
const PageContext = createContext();

// We create a custom hook to provide immediate usage of the student context in other components
export const usePageContext = () => useContext(PageContext);

// PageProvider component that holds initial state, returns provider component
export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(
      {
        title: "Home"
      }
  );

  // Function to update page state
  const setPage = (pageTitle) => {
    // Check if pageTitle matches valid page titles
    const validPages = [
        "Home", 
        "About", 
        "Portfolio", 
        "Resume", 
        "Contact", 
        "Game"
    ];
    const pageCheck = validPages.findIndex((page) => {
        return pageTitle.trim() == page;
    });

    if (pageCheck == -1) { return }

    // Update state with the students array with the newStudent
    setCurrentPage({ title: pageTitle });
  };

  // Provider components expect a value prop to be passed
  return (
    <PageContext.Provider value={{ currentPage, setPage }}>
      {/* Render children passed from props */}
      {children}
    </PageContext.Provider>
  );
};