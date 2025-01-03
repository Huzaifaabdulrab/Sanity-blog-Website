"use client";
import { useState, useEffect } from "react";

interface CommentData {
  id: number;
  name: string;
  comment: string;
}

export default function Comment() {
  // Load comments from local storage or use default if not available
  const loadComments = () => {
    const storedComments = localStorage.getItem("comments");
    return storedComments
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
          {
            id: 3,
            name: "Usman Qureshi",
            comment:
              "The content is really helpful, but I think the speed could be improved.",
          },
          {
            id: 4,
            name: "Hina Shaikh",
            comment: "Fantastic service! I would highly recommend it.",
          },
          {
            id: 5,
            name: "Omar Farooq",
            comment: "Great features, but some links are broken.",
          },
          {
            id: 6,
            name: "Fatima Ali",
            comment: "User-friendly interface and smooth navigation.",
          },
          {
            id: 7,
            name: "Zainab Ahmed",
            comment:
              "I love the colors and layout, but the page load time can be faster.",
          },
          {
            id: 8,
            name: "Ahmad Bilal",
            comment: "Overall a good experience. Looking forward to updates.",
          },
          {
            id: 9,
            name: "Rehman Shah",
            comment: "Nice platform! Some more tutorials would be great.",
          },
          {
            id: 10,
            name: "Maira Tariq",
            comment:
              "Love the website, but I hope the search function is improved.",
          },
        ];
  };

  const [comments, setComments] = useState<CommentData[]>(loadComments);
  const [name, setName] = useState("");
  const [userComment, setUserComment] = useState("");

  // Update local storage whenever comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

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
    <>
      <div className="bg-gray-50 w-[30rem] ml-auto mr-auto mb-20 shadow-2xl mt-20 ">
      <div className="  w-[30rem] bg-white p-4  rounded-md shadow-lg">
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
          <div
            key={comment.id}
            className=" p-4 mt-4 rounded-md shadow-sm"
          >
            <h3 className="font-semibold">{comment.name}</h3>
            <p>{comment.comment}</p>

          </div>
        ))}

      </div>
    </>
  );
}
