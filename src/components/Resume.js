const Resume = (props) => {
    return (
        <section 
            style={{
             paddingLeft: '69px',
             marginBottom: '36px'
             }}>
            <div className="container">
                <h5>
                    View my Resume{' '}
                    <a
                        href="https://docs.google.com/document/d/12HNUub47qqnPqJkb65Z9b9O36xmTvz9qQ4p7EBIoUWw/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className=" p-4 bi bi-folder-symlink-fill text-success"></i>
                    </a>
                </h5>
                <div className="skills">
                    <h1>
                        <u>my skills :</u>
                    </h1>
                    <div className="skills-row">
                        <div className="skills-column">
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
                        <div className="skills-column">
                            <h3 className="p-3">Back-end :</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MySQL, Sequelize</li>
                                <li>MongoDB, Mongoose</li>
                                <li>REST</li>
                                <li>GraphQL</li>
                                <li>APIs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .skills {
                    display: flex;
                    flex-direction: column;
                    padding-top: 69px
                }

                .skills h1 {
                    padding-left: 253px;
                }

                .skills-row {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                }

                .skills-column {
                    padding-left: 77px;
                    padding-bottom: 33px;
                    margin-bottom: 33px;
                    flex: 1;
                    min-width: 250px;
                }

                @media only screen and (max-width: 768px) {
                    .skills h1 {
                        padding-left: 0;
                    }

                    .skills-column {
                        padding-left: 0;
                        margin-top: 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Resume;