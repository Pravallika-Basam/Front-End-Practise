function RowItem(props) {
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

export default RowItem