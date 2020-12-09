import { useState } from "react";

export default function TypeAhead(props) {
  const [search, setSearch] = useState("");
  const { source } = props;

  const results = source.filter((item) =>
    item.toLowerCase.includes(search.toLowerCase)
  );

  return (
    <form>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button></button>
      <div>{search && results.map((result) => <p>{result}</p>)}</div>
    </form>
  );
}

TypeAhead.defaultProps = {
  source: [],
};