const Notification = (props) => {
  //  Write your code here.
  const { className, logoUrl, textContent } = props;
  const containerClassName = `notification-container ${className}`;
  return (
    <div className={containerClassName}>
      <img src={logoUrl} className="logo" />
      <p className="description"> {textContent} </p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notifications-container">
    <div className="notifications-content-container">
      <h1 className="heading"> Notifications </h1>
      <div>
        <Notification
          className="primary-bg-color"
          logoUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          textContent="Information Message"
        />
        <Notification
          className="success-bg-color"
          logoUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          textContent="Success Message"
        />
        <Notification
          className="warning-bg-color"
          logoUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          textContent="Warning Message"
        />
        <Notification
          className="danger-bg-color"
          logoUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          textContent="Error Message"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
