import "./ReviewCard.css";

export default function ReviewCard(props) {
  const { review } = props;

  const flipDate = (date) => {
    //take the year off the front of the date string, and put it on the end with a hyphen
    let oldDate = date;
    let year = oldDate.slice(0, 4);
    let monthDay = oldDate.slice(5);
    let newDate = `${monthDay}-${year}`;
    return newDate;
  };

  return (
    <div className="review-card">
      <h4>{review.fields.name}</h4>
      <h5>{flipDate(review.fields.Created)}</h5>
      <p>{review.fields.content}</p>
    </div>
  );
}
