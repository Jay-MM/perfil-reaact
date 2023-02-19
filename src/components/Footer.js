const Footer = (props) => {
    return (
    <footer 
    className="container-fluid"
    style={{
        justifyContent: 'space-evenly',
        position: 'fixed',
         width: '100%',
        backgroundColor: 'transparent',
        diplay: 'flex',
        textAlign: 'center',
        left: '0',
        bottom: '0',

    }}>
        
        <p style={{ display: 'flex', justifyContent: 'space-between'}}>Created with 
        <a style={{ marginLeft: '-717px',}}href="https://reactjs.org/">React©️</a>
        <ul>
            <a href="https://github.com/Jay-MM"><i class="bi bi-github"></i></a>
            {/* TODO: create social profiles and link them here */}
            <a style={{ marginLeft: '24px',}}href="#"><i class="bi bi-linkedin"></i></a>
            <a style={{ marginLeft: '24px',}}href="#"><i class="bi bi-stack-overflow"></i></a>
        </ul>
        </p>
        
    
    </footer>
    )
}
export default Footer