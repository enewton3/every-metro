import "./SystemCard.css";

export default function SystemCard(props) {
  const { system } = props;
  // console.log(system);
  return (
    <div
      className="system-card"
      style={{ backgroundImage: `url(${system.fields.image})` }}
    >
      <h3 id="name">{system.fields.Name}</h3>
      <h4 id="location">
        {system.fields.City}, {system.fields.Country}
      </h4>
      <p id="operated-by">
        Operated By:
        <br />
        {system.fields.OperatedBy
          ? system.fields.OperatedBy
          : "Data Missing, click here to contribute!"}
      </p>
      <p id="num-of-lines">
        Number of Lines:
        <br />
        {system.fields.numOfLines
          ? system.fields.numOfLines
          : "Data Missing, click here to contribute!"}
      </p>
    </div>
  );
}
