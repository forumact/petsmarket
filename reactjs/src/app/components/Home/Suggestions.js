import React from "react";

const Suggestions = props => {
  const options = (props.results || []).map((r, index) => <li key={index}>{r}</li>);
  return <ul>{options}</ul>;
};

export default Suggestions;
