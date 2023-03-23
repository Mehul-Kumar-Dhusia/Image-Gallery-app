function Card(props) {

    let like = ""

    if(props.likes >= 1000){
        like = (Math.round((props.likes / 1000) * 10) / 10).toString() + "k"
    }

    else{
        like = props.likes
    }
    
  return (
    <>
      <div className="card">
        <div className="upper-part">
          <img src={props.imageURL} />
        </div>
        <div className={`below-part below-part-${props.mode}`}>
          <img src={props.profileImage} alt="Profile image" />
          <div>
            <p className="username">{props.userName}</p>
            <p className="userID">@{props.userID}</p>
          </div>
          <p className="like">👍{like}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
