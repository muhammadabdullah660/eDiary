import React from "react";
export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "4pc" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {capitalize(props.alert.message)}
        </div>
      )}
    </div>
  );
}
Alert.defaultProps = {
  message: "Put your message here",
};
