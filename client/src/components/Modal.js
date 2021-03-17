import React from "react";
import ReactDOM from "react-dom";

// Portals let you create a component that is a child of body
//  or sister component with id=modal
// not the direct child of component that calls it

// Note: check Semantic UI for class names

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
