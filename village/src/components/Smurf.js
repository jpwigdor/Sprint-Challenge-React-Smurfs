import React from "react";
import PropTypes from "prop-types";

const Smurf = props => {
  const smurf = props.smurf
    ? props.smurf.find(smurf => `${smurf.id}` === props.match.params.id)
    : props.smurf;
  console.log(smurf);

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

Smurf.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired
};

export default Smurf;
