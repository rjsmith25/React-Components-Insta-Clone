// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comments, setComments] = useState(props.comments);
  const [comment, setComment] = useState("");
  function changeComment(e) {
    setComment(e.target.value);
  }

  function submitComment(e) {
    e.preventDefault();
    setComments([
      ...comments,
      {
        username: "rsmith",
        text: comment
      }
    ]);
    setComment("");
  }
  return (
    <div>
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
      <CommentInput
        comment={comment}
        changeComment={changeComment}
        submitComment={submitComment}
      />
    </div>
  );
};

export default CommentSection;
