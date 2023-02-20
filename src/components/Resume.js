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
        <h4 className="pb-4">What I am profficient in :</h4>
        <h4>Front-end :</h4>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
            
        </ul>
        <h4>Back-end :</h4>
        <ul>
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL, Sequelize</li>
            <li>REST</li>
            <li>GraphQL</li>
            <li>MongoDB, Mongoose</li>
            
        </ul>
        </div>
    </section>
    );
}
export default Resume