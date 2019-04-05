import React from "react";

const IdInput = props => {
  const { id, handleId } = props;
  console.log( "product id :" , id);
  return (
    <div className="col s2">
      <input
        id="store"
        type="number"
        min="1"
        max="999"
        value={id}
        onChange={e => handleId(e.target.value)}
      />
      <label className="active" htmlFor="store">
        id
      </label>
    </div>
  );
};

export default IdInput;
