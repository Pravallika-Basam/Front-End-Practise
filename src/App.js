import React, { useState } from 'react';
import './App.css';
import FormRow from './components/FormRow';
import TodoTable from './components/TodoTable';

function App() {

  const [rows, setRows] = useState([
    { rowNumber: 1, rowDescription: 'Feed the Dog', rowAssignee: 'John Doe' },
    { rowNumber: 2, rowDescription: 'Jogging', rowAssignee: 'Jane Smith' }
  ]);

  const addTODO = (assignee, desc) => {
    let rowNumber = 0;
    if (rows.length > 0) {
      rowNumber = rows[rows.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newRow = { rowNumber: rowNumber, rowDescription: desc, rowAssignee: assignee };
    setRows(rows => [...rows, newRow]);

  }

  const handleDelete = (index) => {
    let filteredRows = rows.filter((row) => row.rowNumber !== index);
    setRows(filteredRows);
  }

  const [showAddTODO, setshowAddTODO] = useState(false);

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">TODOs</h3>
        </div>
        <div className="card-body">
          <TodoTable rows={rows} handleDelete={handleDelete} />
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={() => setshowAddTODO(!showAddTODO)}>
            Add New Todo
          </button>
        </div>
      </div>
      {showAddTODO &&
        <FormRow addTODO={addTODO} setshowAddTODO={setshowAddTODO}/>
      }

    </div>

  );
}

export default App;
