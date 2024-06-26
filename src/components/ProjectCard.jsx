import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function ProjectCard({ urlLinks, thumbnail, title, thumbnailOpt, techStack }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredGit, setIsHoveredGit] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseEnterGit = () => {
        setIsHoveredGit(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const handleMouseLeaveGit = () => {
        setIsHoveredGit(false);
    };
    
    function openLink() {
        window.open(urlLinks[0], '_blank').focus();
    }

    function openRepo() {
        window.open(urlLinks[1], '_blank').focus();
    }

    const technologies = (
        <Popover id="popover-basic">
            <Popover.Header>
            <h4>
                <strong>Tech Stack</strong>
            </h4>
            </Popover.Header>
            <Popover.Body>
                <p className='fs-5'><strong>| </strong> 
                {techStack.map((tech, index) => 
                    <span> {tech} <strong>| </strong></span>
                )}
                </p>
            </Popover.Body>
        </Popover>
      );
    
    return (
        <>
            <Col xs={12} md={6} lg={4} className='project-card position-relative z-2 my-5'>
                <div className=''>
                    <OverlayTrigger placement="top" overlay={technologies}>
                        <Image src={thumbnail} thumbnail={thumbnailOpt} role='img' aria-label='Project thumbnail'/>
                    </OverlayTrigger>
                </div>
                <div className='p-2 z-3'>
                    <h3 onClick={() => { openLink() }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ textDecorationLine: isHovered ? 'underline' : 'none' }
                    }
                    >{title}</h3>
                    <h3 onClick={() => { openRepo() }}
                        onMouseEnter={handleMouseEnterGit}
                        onMouseLeave={handleMouseLeaveGit}
                        style={{ textDecorationLine: isHoveredGit ? 'underline' : 'none' }}
                    >Github 
                        <span>
                        <svg style={{ fill: 'white' }}
                            xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" className="m-1 mb-2" viewBox="0 0 16 16" role="link" aria-label="Github link">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                        </span>
                    </h3>
                </div>
            </Col>
        </>
    );
}

export default ProjectCard
