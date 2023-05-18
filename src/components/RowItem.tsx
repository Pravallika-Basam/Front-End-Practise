export const RowItem : React.FC< { handleDelete: Function, rowNumber: number, rowDescription: string, rowAssignee: string }> = (props) => {
    const handleDelete = () => {
        props.handleDelete(props.rowNumber);
    }
    return (
        <tr>    
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssignee}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>
                    X
                </button>
            </td>
        </tr>
    );
}
