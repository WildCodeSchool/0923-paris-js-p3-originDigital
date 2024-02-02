import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import BackgroundLetterAvatars from "../Avatar/Avatar";
import "./Comments.css";

function CommentItem({ comment }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="all_Comments">
      <div className="comment_Section">
        <div className="user_N_Date">
          <div className="all_User">
            <BackgroundLetterAvatars
              sx={{ width: 40, height: 40 }}
              username={comment.username}
              userId={comment.user_id}
            />
            <div className="user">
              <p>{comment.username}</p>
            </div>
          </div>
          <div className="date">
            <p>{comment.date_comment}</p>
          </div>
        </div>
        <div className="comment_Info">
          <div
            className={`moreVert_Icon_Container_Comment ${
              isOpen ? "active" : "inactive"
            }`}
            ref={menuRef}
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={() => setIsOpen(!isOpen)}
            tabIndex="0"
            role="button"
          >
            <Icon
              id="icon_More_Vertical"
              icon="pepicons-pop:dots-y"
              color="#f3f3e6"
              width="37"
              height="37"
            />
            {isOpen && (
              <div
                className={`dropdown_Menu ${isOpen ? "active" : "inactive"}`}
              >
                <button type="button" onClick={() => setIsOpen(false)}>
                  <ul>Edit Comment</ul>
                </button>
                <button type="button" onClick={() => setIsOpen(false)}>
                  <ul>Delete Comment</ul>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="comment_container">
          <p>{comment.comment}</p>
        </div>
      </div>
    </div>
  );
}

function Comments({ data }) {
  return (
    <div className="comments_Component">
      <p className="title">Comments</p>
      {data.map((comment) => (
        <CommentItem key={comment.comment_id} comment={comment} />
      ))}
    </div>
  );
}
export default Comments;
