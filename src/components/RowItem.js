function RowItem(props) {
    return (
        < tr >
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssignee}</td>
        </tr >
    );
}

export default RowItem