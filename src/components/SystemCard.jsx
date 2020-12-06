export default function SystemCard(props) {
  const { system } = props;

  return (
    <div>
      <h1>{system.fields.Name}</h1>
    </div>
  );
}
