import './comments.css';

const Comment = (name, comment) => {
    return(
        <div className="comment-box">
            <div>{comment}</div>
            <br></br>
            <br></br>
            <div>—  {name}</div>
        </div>
    )
}

export default Comment;