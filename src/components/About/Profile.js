const Profile = (props) => {
    return (
    <>
    <strong 
    className="container-fluid card mb-3 bg-transparent">
    <div className="row g-3">
        <div className="col-md-6">
        <img src={props.userData.avatar_url} className="img-fluid rounded-start" alt={"Jesus Marquez's Avatar"} />
        </div>
        <div className="col-md-6">
        <div className="card-body">
            <h5 className="card-title text-danger">Jesus Marquez</h5>
            <p className="card-text">{props.userData.bio}</p>
            <blockquote>
                <p className="text-warning">"Intuitive design is how we give the user new superpowers.”</p>
                <p 
                className="card-text" style={{ textIndent: '269px'}}><small> - Jared Spool</small>
                </p>
            </blockquote>
        </div>
        </div>
    </div>
    </strong>
    <div className="container fluid p-3 bg-transparent border border-info rounded-3" style={{height: "500px", overflowY: "scroll"}}>
  <h2 className="bg-black m-0">
    <strong>Welcome to my website! My name is Jesus and I am a web developer who is passionate about creating beautiful and functional websites. I believe that websites are not just digital spaces, but also creative canvases that allow me to express myself artistically.</strong>
    <br/>
    <br/>
    <strong>When I am not coding, you can find me exploring the great outdoors, hiking, or drawing or painting. Drawing is a passion of mine that I have pursued since I was young and I enjoy using my creativity to bring my ideas to life.</strong>
    <br/>
    <strong style={{textIndent: "75px"}}>I believe that my love for the arts and nature influences my work as a web developer. Just as I strive to create visual art that brings out my creativity, I also aim to create websites that reflect the unique identity and goals of each of my clients.</strong>
    <br/>
    <br/>
    Thank you for visiting my website and I look forward to the opportunity to work with you! 
    <br/>
  </h2>
</div>
    </>
    ) 
}

export default Profile