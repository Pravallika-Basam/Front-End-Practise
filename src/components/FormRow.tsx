import React, { useState } from 'react';

export const FormRow : React.FC<{ addTODO: Function, setshowAddTODO: Function }> = (props) => {

    const [assignee, setAssignee] = useState('');
    const [desc, setDesc] = useState('');

    const submitTODO = () => {
        if (desc !== '' && assignee !== '') {
            props.addTODO(assignee, desc);
            setAssignee('');
            setDesc('');
            props.setshowAddTODO(false);
        }
    }
    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input
                        type='text'
                        className='form-control'
                        required
                        onChange={e => setAssignee(e.target.value)}
                        value={assignee}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea
                        className='form-control'
                        rows={3}
                        required
                        onChange={e => setDesc(e.target.value)}
                        value={desc}
                    ></textarea>
                </div>
                <button
                    type='button'
                    className='btn btn-primary mt-3'
                    onClick={submitTODO}
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
}
