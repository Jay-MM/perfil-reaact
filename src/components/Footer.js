const Footer = (props) => {
    return (
    <footer 
    className="container-fluid"
    style={{
        justifyContent: 'space-evenly',
        position: 'fixed',
         width: '100%',
        backgroundColor: 'black',
        diplay: 'flex',
        textAlign: 'center',
        left: '0',
        bottom: '0',

    }}>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <p>Created with <a href="https://reactjs.org/"> React©️</a></p>
        <ul>
            <a href="https://github.com/Jay-MM"><i className="bi bi-github"></i></a>
            {/* TODO: create social profiles and link them here */}
            <a style={{ marginLeft: '24px',}}href="#"><i className="bi bi-linkedin"></i></a>
            <a style={{ marginLeft: '24px',}}href="#"><i className="bi bi-stack-overflow"></i></a>
        </ul>
        </div>
        
    
    </footer>
    )
}
export default Footer