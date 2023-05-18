export class TodoModel {
    rowNumber : number;
    rowDescription :string;
    rowAssignee : string;
    constructor (rowNumber : number,rowDesc:string,assignee:string){
        this.rowNumber = rowNumber;
        this.rowDescription = rowDesc;
        this.rowAssignee = assignee;
    }
}