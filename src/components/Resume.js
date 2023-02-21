const Resume = (props) => {
    return (
        <section
        style={{
            paddingLeft: '111px'
        }}
        >
            <div>
            <h5 className="pb-5">
                {/* TODO: finish resume and link here */}
            Download my Resume <a href="#"><i class=" p-4 bi bi-cloud-download-fill text-white" ></i></a>
            </h5>
            <h4 className="pb-4">
            my skills :</h4>
            <h4>Front-end :</h4>
            <ul>
                <li>PWA</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Design Systems</li>
    
            </ul>
            <h4>Back-end :</h4>
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
        </section>
    )
}
export default Resume