import React from 'react';

const modalBody = () => {
    return(
        <Modal.Body>
            <h2>Another div</h2>
            <form>
                <div className="form-group"> <input type="text" className="form-control-sm" /></div>
                <div className="form-group"> <input type="text" className="form-control-sm" /></div>
                <div className="form-group"> 
                <button type="submit" className="btn btn-primary">
                        Send
                </button>
                </div>
            </form>
        </Modal.Body>
    );
    
}

export default modalBody;