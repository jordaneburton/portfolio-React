import Card from 'react-bootstrap/Card';

function Nav() {
    return (
        <>
            <Card as='button' bg={'primary'} onClick={console.log('you did it!')}
                className="position-fixed top-0 end-0 my-4 rounded-end-0 rounded-start-pill z-2" style={{ width: '4rem', height: '3rem' }}>
                {/* <div className="position-absolute top-50" style={{ width: '4rem', height: '3rem' }}> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="white" className="bi bi-three-dots mb-4" viewBox="0 0 16 16" aria-label="Menu">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '3rem', height: '3rem', top: '0.5rem', left:'1rem' }} fill="white" className="bi bi-list position-absolute" viewBox="0 0 16 16" aria-label="Menu">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                {/* </div> */}
            </Card>
        </>
    )
}

export default Nav