import { useState, useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function NavCanvas() {   
    const [show, setShow] = useState(false);
    const { currentPage, setPage } = usePageContext();
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        setShow(false);
    }, [currentPage]);
    
    return (
        <>
            <Button variant="primary" onClick={handleShow} 
                className="position-fixed rounded-start-pill top-0 end-0 my-3 z-3"
                style={{ width:"7rem", height: "5rem"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="85%" height="85%" fillRule="inherit" className="bi bi-list ms-3" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </Button>
            <Navbar expand={'false'}>
                <Navbar.Offcanvas show={show} onHide={handleClose} 
                    className="bg-primary"
                    aria-labelledby={`offcanvasNavbarLabel-expand-${'false'}`}
                    placement="end">
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body bg={'primary'}>
                        <Nav className="justify-content-end text-center h2 flex-grow-1 pe-3"> 
                            { (currentPage.title === "Home")
                                ? <Link to="/" className="nav-link py-3 rounded-pill" 
                                    style={{ backgroundColor: "#EF626C" }}
                                    >HOME</Link>
                                : <Link to="/" className="nav-link py-3 rounded-pill" href="Home">HOME</Link>
                            }
                            
                            { (currentPage.title === "About") 
                                ? <Link to="About" className="nav-link py-3 rounded-pill" 
                                    style={{ backgroundColor: "#EF626C" }}
                                    >ABOUT ME</Link> 
                                : <Link to="About" className="nav-link py-3 rounded-pill" href="About">ABOUT ME</Link>
                            }  

                            { (currentPage.title === "Portfolio") 
                                ? <Link to="Portfolio" className="nav-link py-3 rounded-pill" 
                                    style={{ backgroundColor: "#EF626C" }}
                                    >PORTFOLIO</Link> 
                                : <Link to="Portfolio" className="nav-link py-3 rounded-pill" href="Portfolio">PORTFOLIO</Link> 
                            }        
                            
                            { (currentPage.title === "Resume") 
                                ? <Link to="Resume" className="nav-link py-3 rounded-pill" 
                                    style={{ backgroundColor: "#EF626C" }}
                                    >RESUME</Link>
                                : <Link to="Resume" className="nav-link py-3 rounded-pill" href="Resume">RESUME</Link> 
                            }
                            
                            { (currentPage.title === "Contact") 
                                ? <Link to="Contact" className="nav-link py-3 rounded-pill" 
                                    style={{ backgroundColor: "#EF626C" }}
                                    >CONTACT</Link>
                                : <Link to="Contact" className="nav-link py-3 rounded-pill" href="Contact">CONTACT</Link>
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </>
    ) 
}

export default NavCanvas