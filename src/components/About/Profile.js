const Profile = (props) => {
    return (
    <>
    <strong 
    className="container-fluid card mb-3 bg-transparent">
    <div className="row g-3">
        <div className="col-md-6">
        <img src={props.userData.avatar_url} className="img-fluid rounded-start" alt={`${props.userData.login}'s Avatar`} />
        </div>
        <div className="col-md-6">
        <div className="card-body">
            <h5 className="card-title text-danger">Jesus Marquez</h5>
            <p className="card-text">{props.userData.bio}</p>
            <blockquote>
                <p>"I have not failed, I have just found 10,000 ways that won’t work."</p>
                <p 
                className="card-text" style={{ textIndent: '269px'}}><small>-Thomas Edison</small>
                </p>
            </blockquote>
        </div>
        </div>
    </div>
    </strong>
    <div className="container fluid p-3 bg-transparent border border-info rounded-3">
        <h2 className="bg-black m-0">
            <strong>Coding is my passion and I am always looking for more challanges to take on! 
            <br/>
            </strong>
        </h2>
        <h4 className="text-warning bg-black m-0 pt-4">
        Check out <u>My Portfolio</u> to view my Projects and make sure to view  the <u>Contact Me</u> page if you have any questions of just want to talk!
        </h4>
    </div>
    </>
    ) 
}

export default Profile