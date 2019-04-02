import React from "react";

const StoreInput = props => {
  const { store, handleProductStore } = props;
  return (
  <div className="col s2">
                <input
                  id="store"
                  type="number"
                  min="1"
                  max="999"
                  value={store}
                  onChange={handleProductStore}
                />
                <label className="active" htmlFor="store">
                  set price
                </label>
              </div>
  );
};

export default StoreInput;
