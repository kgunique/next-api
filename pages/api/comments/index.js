import { comments } from "../../../data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    // Process a GET request
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    // Process a POST request
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
