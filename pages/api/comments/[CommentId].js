import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { CommentId } = req.query;

  if (req.method === "GET") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(CommentId)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const DeletedComment = comments.find(
      (comment) => comment.id === parseInt(CommentId)
    );
    const index = comments.findIndex((comment) => {
      comment.id === parseInt(CommentId);
    });
    comments.splice(index, 1);
    res.status(200).json(DeletedComment);
  }
}
