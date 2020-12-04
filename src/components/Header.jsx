export default function Header(props) {
  return (
    <div className="header-img">
      <img src={`./assets/${props.text}`} />
      <h1>{props.text}</h1>
    </div>
  );
}
