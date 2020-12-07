import "./ReviewCard.css";

export default function ReviewCard(props) {
  const { review } = props;

  return (
    <div className="review-card">
      <h4>{review.fields.name}</h4>
      <h5>{review.fields.Created}</h5>
      <p>{review.fields.content}</p>
    </div>
  );
}
