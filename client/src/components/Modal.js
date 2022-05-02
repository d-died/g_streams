import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = props => {
    return ReactDOM.createPortal(
        // originally in the onClick, we had {() => history.push('/') 
        // that makes it such that when you click anywhere other than the buttons, the modal closes.
        // we then changed it to as it is to make it more reusable
        <div onClick={ props.onDismiss } className="ui dimmer modals visible active">
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