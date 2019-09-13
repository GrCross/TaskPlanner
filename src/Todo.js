import React from 'react';
import {TableRow} from "@material-ui/core";

export class Todo extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(

            <TableRow>
                <td>{this.props.text}</td>
                <td>{this.props.priority}</td>
                <td>{this.props.dueDate.toString()}</td>
            </TableRow>

        );

    }
}