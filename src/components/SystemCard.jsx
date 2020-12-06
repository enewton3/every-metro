export default function SystemCard(props) {
  const { system } = props;

  return (
    <div>
      <h3>{system.fields.Name}</h3>
      <h4>
        {system.fields.City}, {system.fields.Country}
      </h4>
      <h4>
        Operated By:{" "}
        {system.fields.OperatedBy
          ? system.fields.OperatedBy
          : "Data Missing, click here to contribute!"}
      </h4>
    </div>
  );
}
