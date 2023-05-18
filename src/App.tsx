import React, { useState } from 'react';
import './App.css';
import {FormRow} from './components/FormRow';
import {TodoTable} from './components/TodoTable';
import {TodoModel} from './models/TodoModel'

function App() {
  const [rows, setRows] = useState([
    new TodoModel(1,"Feed the Dog","John Doe"),
    new TodoModel(2, 'Jogging', 'Jane Smith'),
    new TodoModel(3, 'Cook Dinner', 'John Doe'),
    new TodoModel(4, 'Clean Room', 'Jane Smith')
  ]);

  const addTODO = (assignee : string, desc : string) => {
    let rowNumber : number = 0;
    if (rows.length > 0) {
      rowNumber = rows[rows.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    setRows([...rows, new TodoModel(rowNumber, desc, assignee)]);
  }

  const handleDelete = (index : number) => {
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
