const Resume = (props) => {
    return (
        <section
        style={{
            paddingLeft: '111px'
        }}
        >
            <div className="container-fluid"
            style={{display: 'flex'}}>
                <h5 className="pb-5">
                {/* TODO: finish resume and link here */}
                Download my Resume <a href="#"><i class=" p-4 bi bi-cloud-download-fill text-white" ></i></a>
                </h5>
                <div 
                style={{
                    display:'flex',
                    flexDirection:'column',
                    paddingLeft: '777px'
                    }}>
                    <div>
                        <h1>my skills :</h1>
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
                        <div style={{paddingLeft: '111px'}}>
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