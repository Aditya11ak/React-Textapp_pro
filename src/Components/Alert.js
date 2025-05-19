import React from "react";
import "./Alert.css";

export default function Alert(props) {
  return (
    <div style={{ height: "60px" }}>
      {props.alert &&
        <div className="alertbody">
          <div
            className={`alert alert-${props.alert
              .type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>
              {props.alert.type}
            </strong>
            {props.alert.message}
            {/* <button
        //   onClick={props.closealert}
          type="button"
          className="btn-close"
        /> */}
          </div>
        </div>}
    </div>
  );
}
