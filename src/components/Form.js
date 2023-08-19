import React, { useState } from "react";
import Addimg from "../images/Add.svg";
import Searchimg from "../images/Search.svg";
import Table from "../components/Table";
import "./Form.css";
import  "./FormView.css";
import FormView from "../components/FormView.js";
import Modal from '@mui/material/Modal';
import { Box } from "@mui/material";

const Form = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddButtonClick = () => {
    setShowPopup(true);
  };

  // const handleCloseModal = () => {
  //   setShowPopup(false);
  // };

  return (
    <div className="parent">
      <div className="navbar">
        <div className="left">
          <div>
            <label className="text1">User Assigning</label>
          </div>
          <div>
            <select id="dropdown1" name="dropdown" className="dropdown">
              <option value="option1">All</option>
              <option value="option2">Admin</option>
              <option value="option3">Physician</option>
            </select>
          </div>

          <div className="image-pop">
            <img
              src={Addimg}
              alt="Add"
              className="Add"
              onClick={handleAddButtonClick}
            />
          </div>

          <Modal
            open={showPopup}
            // onClose={handleCloseModal}
          >
           <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 544, height: 561, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 10,  }}>
              <FormView /> 
            </Box>
          </Modal>
        </div>
        <div className="center">
          <button type="text" id="search" className="search">
            <img src={Searchimg} alt="Search" className="search-button" />
          </button>
        </div>
        <div className="right">
          <button type="submit" className="save-button">
            <div className="text2">Save</div>
          </button>
        </div>
      </div>

      <Table />
    </div>
  );
};

export default Form;
