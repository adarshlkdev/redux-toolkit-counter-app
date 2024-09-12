import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";
import { privacyActions } from "../store";

const Controls = () => {
  const dispatch = useDispatch();
  const isprivacyOn = useSelector((state) => state.privacy);
  const inputElem = useRef();

  const handleIncrement = () => {
    if (!isprivacyOn) {
      dispatch(counterActions.increment());
    }
  };

  const handleDecrement = () => {
    if (!isprivacyOn) {
      dispatch(counterActions.decrement());
    }
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.privacyToggle());
  };

  const handleAdd = () => {
    if (!isprivacyOn) {
      dispatch(counterActions.incrementByValue(inputElem.current.value));
    }
    inputElem.current.value = "";
  };

  const handleSubtract = () => {
    if (!isprivacyOn) {
      dispatch(counterActions.decrementByValue(inputElem.current.value));
    }
    inputElem.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handlePrivacyToggle}
        >
          {isprivacyOn ? "Enable Counter" : "Disable Counter"}
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          ref={inputElem}
          type="text"
          placeholder="Enter a number"
          className="number-input"
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
