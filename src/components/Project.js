const Project = ({ project }) => {
  const { name, description, repo, link } = project;

return (
  <div 
  className="container-fluid" 
  key={name}
  style={{
    display: "flex",
    alignItems: "center"
  }}
  >
    <a 
    href={link}
    target="_blank" rel="noreferrer" 
    >
      <img
        src={require(`../assets/${name}.png`)}
        alt={(name)}
        className="project-bg"
        style={{
          display: "flex",
          alignItems: "center",
          width: '100%',
          height: '75%',
          padding: '3rem',
        }}
      />
    </a>
    <div>
      <h3  
      style={{
      display: "flex",
      flexDirection: "column",
      position: "relative",
      padding: "12px"
    }}>
        <a  href={link}>{(name)}</a>{' '}
          <i className="fab fa-github"></i>
      </h3>
      <p 
      style={{
      display: "flex",
      flexDirection: "column",
      position: "relative",
      padding: "12px"
    }}>{description}</p>
        <a  href={repo}>{("Github repo")}
        </a>
    </div>
  </div>
);
}
export default Project