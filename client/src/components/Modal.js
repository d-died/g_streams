import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = props => {
    return ReactDOM.createPortal(
        // history.push makes it such that when you click anywhere other than the buttons, the modal closes
        <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
            {/* stopPropagation prevents the modal from closing when you click anywhere except the modal */}
            <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{ props.title }</div>
                <div className="content">
                    { props.content }
                </div>
                <div className="actions">
                    { props.actions }
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}


export default Modal;