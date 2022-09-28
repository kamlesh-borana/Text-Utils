import React, { useContext } from "react";
import alertContext from "../context/alert/alertContext";

const Alert = (props) => {
  const { alert } = useContext(alertContext);
  return (
    <div style={{height: "30px"}}>
      {alert && (
        <div>
          <div className={`alert alert-${props.darkMode?"primary":"success"}`} role="alert">
            {alert}
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
