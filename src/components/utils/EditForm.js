import React from "react";
import NameInput from "../dataInputs/NameInput";
import DescriptionInput from "../dataInputs/DescriptionInput";
import StoreInput from "../dataInputs/StoreInput";
import PriceInput from "../dataInputs/PriceInput";
import IdInput from "../dataInputs/IdInput";
import "./EditForm.css";

function EditForm(props) {
  return (
    <form
      onSubmit={props.handleEditProduct}
      className={!props.hide ? "" : "hide"}
    >
      <div className=" grey lighten-5 p2 z-depth-1 send__form">
        <h5> {props.add} : </h5>
        <NameInput
          name={props.name}
          handleProductName={props.handleProductName}
        />
        <DescriptionInput
          description={props.description}
          handleProductDescription={props.handleProductDescription}
        />
        <PriceInput
          price={props.price}
          handleProductPrice={props.handleProductPrice}
        />
        <StoreInput
          store={props.store}
          handleProductStore={props.handleProductStore}
        />
        <IdInput id={props.id} handleId={props.handleId} />

        <div className="row">
          <div className="col s6">
            <p>
              <label>
                <input type="checkbox" />
                <span>Available ( soon ) </span>
              </label>
            </p>
          </div>
        </div>
        <button className="waves-effect waves-light btn">Confirm</button>
      </div>
    </form>
  );
}
export default EditForm;
