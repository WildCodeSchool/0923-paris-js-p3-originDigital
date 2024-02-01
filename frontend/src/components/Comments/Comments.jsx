import "./Comments.css";

function Comments({ data }) {
  return (
    <div className="comments_Component">
      <p className="title">Comments</p>
      {data.map((comment) => (
        <div className="comment_Section">
          <div className="comment_Info">
            <div className="user">
              <p>{comment.username}:</p>
            </div>
            <div className="date">
              <p>{comment.date_comment} </p>
            </div>
          </div>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}
export default Comments;
