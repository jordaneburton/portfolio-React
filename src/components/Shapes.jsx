function Shapes() {
    return (
        <>
            <div className="shapes-container fixed-top start-0 vw-100 vh-100 z-2">
                
                <svg id="header-circle" xmlns="http://www.w3.org/2000/svg" fill="url(#gradient-circle)"
                    className="bi bi-circle-fill position-absolute" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                    
                    <svg style={{width: 0, height: 0, position: "absolute"}}aria-hidden="true" focusable="false">
                        <linearGradient id="gradient-circle" x2="0" y2="1">
                            <stop offset="30%" stopColor="limegreen" />
                            <stop offset="60%" stopColor="violet" />
                            <stop offset="80%" stopColor="hotpink" />
                        </linearGradient>
                    </svg>
                </svg>
                <svg id="header-square" xmlns="http://www.w3.org/2000/svg" fill="url(#gradient-square)" 
                    className="bi bi-square-fill position-absolute" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/>
                    
                    <svg style={{width: 0, height: 0, position: "absolute"}}aria-hidden="true" focusable="false">
                        <linearGradient id="gradient-square" x2="0" y2="1">
                            <stop offset="20%" stopColor="blueviolet" />
                            <stop offset="50%" stopColor="indigo" />
                            <stop offset="70%" stopColor="blue" />
                        </linearGradient>
                    </svg>
                </svg>
                <svg id="header-triangle" xmlns="http://www.w3.org/2000/svg" fill="url(#gradient-triangle)" 
                    className="bi bi-triangle-fill position-absolute" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"/>
                    
                    <svg style={{width: 0, height: 0, position: "absolute"}} aria-hidden="true" focusable="false">
                        <linearGradient id="gradient-triangle" x2="1" y2="0">
                            <stop offset="20%" stopColor="red" />
                            <stop offset="40%" stopColor="orangered" />
                            <stop offset="70%" stopColor="orange" />
                        </linearGradient>
                    </svg>
                </svg>
            </div>
        </>
    )
}

export default Shapes