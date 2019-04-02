import React from "react";

const NameInput = props => {
  const { name , handleProductName} = props;
  return (
    <div className="input-field col s6">
      <input
        id="first_name2"
        type="text"
        className="validate"
        required
        value={name}
        onChange={e => handleProductName(e.target.value)}
      />
      <label className="active" htmlFor="first_name2">
        product name
      </label>
    </div>
  );
};

export default NameInput;
