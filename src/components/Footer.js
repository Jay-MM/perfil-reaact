const Footer = (props) => {
    return (
    <footer 
    className="container-fluid"
    style={{
        justifyContent: 'space-evenly',
        position: 'fixed',
         width: '100%',
        diplay: 'flex',
        textAlign: 'center',
        left: '0',
        bottom: '0',
        marginTop: '3rem'

    }}>
        
        <div id="footer" style={{ display: 'flex', justifyContent: 'space-evenly', backgroundColor: 'black'}}>
            <ul style={{display: 'flex', marginRight:'24px'}}>
                <a href="https://github.com/Jay-MM" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                {/* TODO: create social profiles and link them here */}
                <a style={{ marginLeft: '24px',}}href="https://www.linkedin.com/in/marquez-jesus/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                <a style={{ marginLeft: '24px',}}href="https://stackoverflow.com/users/21276423/jesus-marquez" target="_blank" rel="noopener noreferrer"><i className="bi bi-stack-overflow"></i></a>
            </ul>
        </div>
        
    
    </footer>
    )
}
export default Footer