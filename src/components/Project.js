const Project = ({ project }) => {
  const { name, description, repo, link } = project;

return (
  <div 
  className="container-fluid" 
  key={name}
  style={{
    position: 'relative',
    width: '100%',
    maxWidth: '666px',
    height: '333px',
    margin: '33px',
    padding: '33px'
  }}
  >
    <img
      src={require(`../assets/${name}.png`)}
      alt={(name)}
      className="project-bg"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}
    />
    <div>
      <h3 className="d-flex flex-row">
        <a p-2 href={link}>{(name)}</a>{' '}
        <a p-2 href={repo}>
          <i className="fab fa-github"></i>
        </a>
      </h3>
      <p>{description}</p>
    </div>
  </div>
);
}
export default Project