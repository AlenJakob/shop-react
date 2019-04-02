import React from "react";

const DescriptionInput = props => {
  const { description, handleProductDescritpion } = props;
  return (
    <div className="input-field col s12">
      <textarea
        required
        id="icon_prefix2"
        className="materialize-textarea"
        value={description}
        onChange={handleProductDescritpion}
      />
      <label htmlFor="icon_prefix2">product descritpion</label>
    </div>
  );
};

export default DescriptionInput;
