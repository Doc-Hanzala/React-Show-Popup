const Popup = ({ text, data, style,event,showPopup }) => {
  return  ( 
      <div className="container">
      <div className={`popup ${style} `}>
        <div className="content">
          <h3>{text}</h3>
          <p>{data}</p>
        </div>
        <button onClick={event} className="close-btn">x</button>
      </div>
    </div>
  );
};

export default Popup;
