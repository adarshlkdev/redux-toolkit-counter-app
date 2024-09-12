import { useSelector } from "react-redux";

const DisplayCounter = () => {

    const {counterVal} = useSelector((store => store.counter));
  return (
    <>
      <p className="lead mb-4">
        Counter current value: <span className="fw-bold">{counterVal}</span>
      </p>
    </>
  );
};

export default DisplayCounter;
