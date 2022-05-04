import { Comment } from "./Comment";

export const Comments = ({ data }) => {
  const comments = data.map((comment) => {
    return <Comment key={comment._id} data={comment} />;
  });

  return <div>{comments}</div>;
};
