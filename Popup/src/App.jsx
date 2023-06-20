import { useEffect, useState } from "react";
import Button from "./components/Button";
import Popup from "./components/Popup";
import Title from "./components/Title";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [timePopup, setTimePopup] = useState(false);
  const [delayedPopup, setdelayedPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleCloseShowPopup = () => {
    setShowPopup(false);
  };

  const handleCloseTimePopup = () => {
    setTimePopup(false);
  };

  const handleCloseDelayedPopup = () => {
    setdelayedPopup(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true);
    }, 2000);

    setTimeout(() => {
      setdelayedPopup(true);
    }, 5000);
  }, []);
  return (
    <section>
      <Title text={"Show Popup"} />
      <Button onclick={handleShowPopup} />

      {showPopup && (
        <Popup
          text={"triggered popup"}
          data={"this popup was triggered by you"}
          style={"info"}
          event={handleCloseShowPopup}
          showPopup={showPopup}
        />
      )}

      {timePopup && (
        <Popup
          text={"time popup"}
          data={"this popup was triggered itself"}
          style={"danger"}
          event={handleCloseTimePopup}
          showPopup={showPopup}
        />
      )}

      {delayedPopup && (
        <Popup
          text={"delayed popup"}
          data={"this popup is delayed"}
          style={"delayed"}
          event={handleCloseDelayedPopup}
          showPopup={showPopup}
        />
      )}
    </section>
  );
}

export default App;
