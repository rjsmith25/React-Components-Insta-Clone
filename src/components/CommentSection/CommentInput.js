// You do not need to do anything in this file
import React from "react";

const CommentInput = props => {
  return (
    <form
      style={{ position: "relative" }}
      className="comment-form"
      onSubmit={props.submitComment}
    >
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
      <i
        style={{ position: "absolute", right: "8px", top: "15px" }}
        className="fas fa-ellipsis-h"
      ></i>
    </form>
  );
};

export default CommentInput;
