import { useState } from "react";
import AlertContext from "./alertContext";

const AlertState = (props) => {
    const [alert, setAlert] = useState("");
    const showAlert = (message) => {
        setAlert(message);
        setTimeout(() => {
            setAlert("")
        }, 1500);
    }
  return (
    <AlertContext.Provider value={{alert, showAlert}}>
        {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState
