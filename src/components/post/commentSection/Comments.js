import { Comment } from "./Comment";

export const Comments = ({ data }) => {
  const comments = !data[0]._id ? (
    <p>loading</p>
  ) : (
    data.map((comment) => {
      return <Comment key={comment._id} commentData={comment} />;
    })
  );

  return <div className="comments">{comments}</div>;
};
