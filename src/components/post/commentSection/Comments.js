import { Comment } from "./Comment";

export const Comments = ({ data }) => {
  const comments = !data ? (
    <p>loading</p>
  ) : (
    data.map((comment) => {
      return <Comment key={comment._id} data={comment} />;
    })
  );

  return <div className="comments">{comments}</div>;
};
