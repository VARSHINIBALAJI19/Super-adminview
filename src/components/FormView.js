import React from "react";
import Logoimg from "../images/Logo.png";

function FormView() {
  return (
    <div className="form-body">
      <img src={Logoimg} alt="Logo" className="logo" />

      <div className="form-container">
        <div className="form-group">
          <label for="username"></label>
          <input type="text" className="username" placeholder="Username" />
          <br></br>
        </div>

        <div className="form-group">
          <label for="email"></label>
          <input type="text" className="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <label for="password"></label>
          <input type="text" className="password" placeholder="Password" />
        </div>

        <div className="checkbox-role-left">
          <label className="box-admin">
            <input type="checkbox" name="role" value="Admin" />
            Admin
          </label>
          </div>

          <div className="checkbox-role-right">
        
          <label className="box-physician">
            <input type="checkbox" name="role" value="physican" />
            Physician
          </label>
        </div>


        <div className="facility-dropdown">
        <label>Facility: </label>

          <select name="facility" id="facility" className="input-field">
            <option value="bedford" className="input-field-option">
              Bedford Center for Nursing and Rehabilitation
            </option>
            <option value="king-david" className="input-field-option">
              King David Center for Nursing and Rehabilitation
            </option>
            <option value="linden" className="input-field-option">
              Linden Center for Nursing and Rehabilitation
            </option>
            <option value="crown-heights" className="input-field-option">
              Crown Heights Center for Nursing and Rehabilitation
            </option>
           
          </select>
        </div>

        <div className="button">
          <button className="add-button" >
            <span className="add-text">Add</span>
          </button>
        </div>

        <div className="cancel-link">
          <p>Cancel</p>

        </div>
      </div>
    </div>
  );
}

export default FormView;
