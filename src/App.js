import React, { useState } from 'react';
import './App.css';
import FormRow from './components/FormRow';
import Table from './components/Table';

function App() {

  const [rows, setRows] = useState([
    { rowNumber: 1, rowDescription: 'Feed the Dog', rowAssignee: 'John Doe' },
    { rowNumber: 2, rowDescription: 'Jogging', rowAssignee: 'Jane Smith' },
    { rowNumber: 3, rowDescription: 'Buy groceries', rowAssignee: 'Bob Johnson' },
    { rowNumber: 4, rowDescription: 'Do laundry', rowAssignee: 'Sarah Brown' },
    { rowNumber: 5, rowDescription: 'Finish project', rowAssignee: 'Mike Lee' },
    { rowNumber: 6, rowDescription: 'Call doctor', rowAssignee: 'Amy Chen' },
    { rowNumber: 7, rowDescription: 'Pay bills', rowAssignee: 'Tom Wilson' },
    { rowNumber: 8, rowDescription: 'Clean house', rowAssignee: 'Emily Davis' },
    { rowNumber: 9, rowDescription: 'Read book', rowAssignee: 'David Kim' },
    { rowNumber: 10, rowDescription: 'Go for a walk', rowAssignee: 'Linda Wong' }
  ]);

  const addTODO = (assignee, desc) => {
    if (rows.length > 0) {
      const newRow = { rowNumber: rows.length + 1, rowDescription: desc, rowAssignee: assignee };
      setRows(rows => [...rows, newRow]);
    }

  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">TODOs</h3>
        </div>
        <div className="card-body">
          <Table rows={rows} />
        </div>
      </div>
      <FormRow addTODO={addTODO} />
    </div>
  );
}

export default App;
