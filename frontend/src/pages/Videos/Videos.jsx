import { useState } from "react";
import { Icon } from "@iconify/react";
import AddComment from "../../assets/AddComment.png";
import Description from "../../components/Description/Description";
import Header from "../../components/Header/Header";
import WatchingVideoCard from "../../components/Watch/Video/WatchingVideoCard";
import Comments from "../../components/Comments/Comments";
import "./Video.css";

function Videos() {
  const [comment, setComment] = useState("");
  const [inputComment, setInputComment] = useState(false);

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const toggleInputComment = () => {
    setInputComment(!inputComment);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComment("");
      setInputComment(false);
    }
  };
  return (
    <main>
      <Header />
      <div className="containeur_Body_Video">
        <WatchingVideoCard />
        <div>
          <Description />
          <Comments />
        </div>
        <div className="inputSection">
          {inputComment ? (
            <div className="container_Comment">
              <input
                className="input_Comment"
                type="text"
                placeholder="Add a comment"
                value={comment}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCommentSubmit();
                  }
                }}
              />
              <Icon
                id="icon_Search"
                type="button"
                onClick={handleCommentSubmit}
                icon="material-symbols:upload"
                color="#f3f3e6"
                width="50"
                height="50"
              />
            </div>
          ) : (
            <div
              role="button"
              onClick={toggleInputComment}
              onKeyDown={toggleInputComment}
              className="addCommentSection"
              tabIndex="-11"
            >
              <img
                src={AddComment}
                alt="Add Comment"
                className="addCommentButton"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Videos;
