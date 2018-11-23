import React from 'react';

const modalFooter = () => {
    return(
        <Modal.Footer>
            <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Close</button>
            <button type="submit" className="btn btn-primary">Save changes</button>
        </Modal.Footer>
    );
}

export default modalFooter;