"use client";
import { useState, useEffect } from "react";

interface CommentData {
  id: number;
  name: string;
  comment: string;
}

export default function Comment() {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [name, setName] = useState("");
  const [userComment, setUserComment] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client side
    setIsClient(true);
    const storedComments = localStorage.getItem("comments");
    setComments(
      storedComments
        ? JSON.parse(storedComments)
        : [
            {
              id: 1,
              name: "Ali Ahmed",
              comment: "Great website! Really enjoyed the experience.",
            },
            {
              id: 2,
              name: "Sara Khan",
              comment: "Love the design and ease of use. Keep it up!",
            },
          ]
    );
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments, isClient]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && userComment) {
      const newComment: CommentData = {
        id: comments.length + 1,
        name,
        comment: userComment,
      };
      setComments([...comments, newComment]);
      setName("");
      setUserComment("");
    }
  };

  return (
    <div className="bg-gray-50 lg:w-[30rem]  w-auto ml-auto mr-auto mb-20 shadow-2xl mt-20">
      <div className="lg:w-[30rem] w-auto bg-white p-4 rounded-md shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Comment"
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Add Comment
          </button>
        </form>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className="p-4 mt-4 rounded-md shadow-sm">
          <h3 className="font-semibold">{comment.name}</h3>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}
