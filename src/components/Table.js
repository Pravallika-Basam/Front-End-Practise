import RowItem from "./RowItem";

function Table(props) {
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
                    <RowItem rowNumber={row.rowNumber}
                        rowDescription={row.rowDescription}
                        rowAssignee={row.rowAssignee} />
                ))}
            </tbody>
        </table>
    );
}
export default Table