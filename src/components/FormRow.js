import React, { useState } from 'react';
function FormRow(props) {

    const [assignee, setAssignee] = useState('');
    const [desc, setDesc] = useState('');

    const submitTODO = () => {
        if (desc !== '' && assignee !== '') {
            props.addTODO(assignee, desc);
            setAssignee('');
            setDesc('');
        }
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="rowAssignee">Assignee</label>
                            <input type="text"
                                className="form-control"
                                id="rowAssignee"
                                placeholder="Enter Assignee"
                                onChange={(event) => {
                                    setAssignee(event.target.value);
                                }}
                                value={assignee}
                            >
                            </input>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="rowDescription">Description</label>
                            <textarea type="text"
                                onChange={(event) => {
                                    setDesc(event.target.value);
                                }}
                                className="form-control"
                                id="rowDescription"
                                rows={3}
                                value={desc}
                                placeholder="Enter description"
                            >
                            </textarea>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary" onClick={submitTODO}>Add TODO</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormRow
