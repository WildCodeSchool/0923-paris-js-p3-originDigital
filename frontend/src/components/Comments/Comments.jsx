import "./Comments.css";

function Comments({ data }) {
  return (
    <div className="comments_Component">
      <p>Comments</p>
      {data.map((comment) => (
        <span>
          {comment.comment}
          {comment.date_comment}
          {comment.username}
        </span>
      ))}
    </div>
  );
}
export default Comments;
