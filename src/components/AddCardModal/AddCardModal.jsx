import React, { useState, forwardRef } from "react";
import DatePicker from "react-date-picker";

import "./AddCardModal.css";

import { CiWarning } from "react-icons/ci";

import { useCardContext } from "../../context/CardContext";

const AddCardModal = forwardRef((props, ref) => {
  const [card, setCard] = useState({
    title: "",
    desc: "",
  });
  const [warning, setWarning] = useState(false);
  const { closeCardModal } = useCardContext();

  const handleCardModalClose = () => {
    closeCardModal();
    setWarning(false);
    setWarning(false);
  };

  return (
    <div className="main-add-modal">
      <form action="dialog" className="sub-add-modal">
        <h1>Add new Card</h1>
        <div className="add-board-input">
          <p>Enter Card Title</p>
          <input
            type="text"
            placeholder="Enter card title"
            maxLength={20}
            onChange={(e) => {
              setCard.title(e.target.value);
              if (warning && e.target.value.trim()) {
                setWarning(false);
              }
            }}
            ref={ref}
          />
          <p>Enter Card Description</p>
          <textarea />
          <p>Choose Priority</p>
          <select>
            <option disabled>Choose one option</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>
          <p>Add a Label</p>
          <input type="text" placeholder="Enter a Label" />
          <p>Enter a Date</p>
          <input type="date" />
          {warning && (
            <p className="warning">
              <CiWarning /> Please add all the details
            </p>
          )}
        </div>
        <div className="add-board-btns">
          <button type="submit">Save</button>
          <button type="button" onClick={handleCardModalClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
});

export default AddCardModal;
