export default function SearchDropdown(props) {
  return (
    <div>
      <select
        className="dropdown"
        name={props.name}
        value={props.searched}
        onClick={(e) => props.setSearched(e.target.value)}
        onChange={(e) => props.setSearched(e.target.value)}
      >
        {props.array.map((item, index) => (
          <option key={`${props.name} ${index}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
