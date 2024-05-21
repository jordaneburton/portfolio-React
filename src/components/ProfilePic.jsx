import { useState, useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import { Row, Col, Image } from 'react-bootstrap';

function ProfilePic() {   
    const { currentPage, setPage } = usePageContext();
    
    return (
        <>
        { (currentPage.title === "About")
            ? <Image src="/assets/profile_picture.jpg" 
                className='d-none d-md-block position-fixed top-0 start-25 w-25 border border-4 border-light rounded-pill page-margin mx-5 mx-xl-0 z-2' 
                style={{ height: "auto"}}
                fluid role="img" 
                aria-label='Profile of Jordan Burton'/>
            : <div/>
        }
        </>
    ) 
}

export default ProfilePic