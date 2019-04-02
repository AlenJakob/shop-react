import React from "react";
import NameInput from "../components/dataInputs/NameInput";
import DescriptionInput from "../components/dataInputs/DescriptionInput";
import StoreInput from "../components/dataInputs/StoreInput";
import PriceInput from "../components/dataInputs/PriceInput";
import "./EditForm.css";
function EditForm(props) {
  // console.log(props);
  // console.log(props.showFormEdit);
  console.log(props.hideForm);
  return (
    <div className="edit__form-fixed">
      <div className={props.hideForm ? "" : "hide"}>
        <form className="edit__form grey lighten-5 p2 m2v z-depth-2">
          <h5>Edit product:</h5>
          <div className="row">
            <NameInput />
          </div>
          <div className="row">
            <DescriptionInput />
          </div>
          <div className="row">
            <StoreInput />
          </div>
          <div className="row">
            <PriceInput />
          </div>
          <button className="waves-effect waves-light btn">Confirm</button>
        </form>
      </div>
    </div>
  );
}
export default EditForm;
