import './comments.css';

const CommentMobile = (name, comment) => {
    return(
        <div className="comment-box">
            <div>{comment}</div>
            <br></br>
            <br></br>
            <div>—  {name}</div>
        </div>
    )
}

export default CommentMobile;