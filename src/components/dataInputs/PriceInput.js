import React from "react";

const PriceInput = props => {
  const { price, handleProductPrice } = props;
  return (
    <div className="col s2">
      <input
        id="store"
        type="number"
        min="1"
        max="999"
        value={price}
        onChange={handleProductPrice}
      />
      <label className="active" htmlFor="store">
        set price
      </label>
    </div>
  );
};

export default PriceInput;
