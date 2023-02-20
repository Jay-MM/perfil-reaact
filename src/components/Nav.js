import Typewriter from 'typewriter-effect'
const Nav = ({ setCurrentPage }) => {

    return (
        <nav 
        className="navbar bg-dark-subtle sticky-top bg-body-tertiary" 
        data-bs-theme="dark"
        >
            <section className="text-success">
           
            <u>
            <Typewriter
            
        options={{
          strings: [
            '<',' Hello World', 'I am a FULL-STACK Web Developer', 'I love to code!' , '/>'
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 9,
        }}
      />
      </u>
      </section>
            <form 
            className="container-fluid justify-content-end">
                <button 
                className="btn btn-outline-success me-2" 
                type="button"
                onClick={() => setCurrentPage('About')}
                >
                <i className="bi bi-file-person-fill"></i> About Me
                </button>
                <button 
                className="btn btn-outline-success me-2" 
                type="button"
                onClick={() => setCurrentPage('Portfolio')}
                >
                <i className="bi bi-files"></i> My Portfolio
                </button>
                <button 
                className="btn btn-outline-success me-2" 
                type="button"
                onClick={() => setCurrentPage('Contact')}
                >
                <i className="bi bi-envelope-at-fill"></i> Contact Me</button>
                <button 
                className="btn btn-outline-success me-2" 
                type="button"
                onClick={() => setCurrentPage('Resume')}
                >
                <i className="bi bi-file-earmark"></i> Resume</button>
            </form>
        </nav>
    )
}
export default Nav




