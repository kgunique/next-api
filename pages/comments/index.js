import { useState, useEffect } from "react";
const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadComments();
  }, []);

  // get req to load comments
  const loadComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };
  // post req to submit comments
  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment: comment }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    loadComments();
    setComment("");
    console.log(data);
  };

  const deleteComment = async (CommentId) => {
    const response = await fetch(`/api/comments/${CommentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    loadComments();
  };
  const enabled = comment.length > 0;
  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button disabled={!enabled} onClick={submitComment}>
        Submit Comments
      </button>
      <br />
      <hr />
      {/* <button onClick={loadComments}>Load Comments</button> */}
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>
              {comment.id}
              {comment.text}
              &nbsp;<button onClick={() => deleteComment(comment.id)}>X</button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
