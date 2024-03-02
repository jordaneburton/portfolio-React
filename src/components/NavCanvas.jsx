import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function NavCanvas() {   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <Button variant="primary" onClick={handleShow} 
                className="position-absolute rounded-start-pill top-0 end-0 my-3"
                style={{ width:"7rem", height: "5rem"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="85%" height="85%" fillRule="inherit" className="bi bi-list ms-3" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </Button>
            <Navbar expand={'false'}>
                <Navbar.Offcanvas show={show} onHide={handleClose} 
                    className="bg-primary"
                    // aria-labelledby={`offcanvasNavbarLabel-expand-${'false'}`}
                    placement="end">
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body bg={'primary'}>
                        <Nav className="justify-content-end text-center h2 flex-grow-1 pe-3">
                            <Nav.Link className="nav-link" href="#action2">ABOUT ME</Nav.Link>
                            <Nav.Link className="nav-link" href="#action2">PORTFOLIO</Nav.Link>
                            <Nav.Link className="nav-link" href="#action2">RESUME</Nav.Link>
                            <Nav.Link className="nav-link" href="#action2">CONTACT</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </>
    ) 
}

export default NavCanvas