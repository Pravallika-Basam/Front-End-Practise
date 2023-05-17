import RowItem from "./RowItem";

function TodoTable(props) {
    
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assignee</th>
                </tr>
            </thead>
            <tbody>
                {props.rows.map(row => (
                    <RowItem
                        key={row.rowNumber}
                        rowNumber={row.rowNumber}
                        rowDescription={row.rowDescription}
                        rowAssignee={row.rowAssignee}
                        handleDelete={props.handleDelete} />
                ))}
            </tbody>
        </table>
    );
}
export default TodoTable