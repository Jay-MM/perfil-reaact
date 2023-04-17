const Resume = (props) => {
    return (
        <section
        style={{
            paddingLeft: '69px'
        }}
        >
            <div className="container"
            style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
                <h5>
                {/* TODO: finish resume and link here */}
                View my Resume <a href="https://docs.google.com/document/d/12HNUub47qqnPqJkb65Z9b9O36xmTvz9qQ4p7EBIoUWw/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><i className=" p-4 bi bi-folder-symlink-fill" ></i></a>
                </h5>
                <div 
                style={{
                    display:'flex',
                    flexDirection:'column',
                    paddingLeft: '77px'
                    }}>
                    <div>
                        <h1 style={{paddingLeft: '253px' }}><u>my skills :</u></h1>
                    </div>
                    <div style={{display:'flex', flexDirection: 'row'}}>
                        <div>
                            <h3 className="p-3">Front-end :</h3>
                            <ul>
                                <li>PWA</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Design Systems</li>
                            </ul>
                        </div>
                        <div style={{paddingLeft: '396px'}}>
                            <h3 className="p-3">Back-end :</h3>
                            <ul>
                                <li>MongoDB, Mongoose</li>
                                <li>Express.js</li>
                                <li>REST</li>
                                <li>Node.js</li>
                                <li>GraphQL</li>
                                <li>MySQL, Sequelize</li>
                                <li>APIs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Resume