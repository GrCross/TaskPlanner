import React from "react";
import {Todo} from "./Todo";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import {TableBody, TableRow} from "@material-ui/core";

export class TodoList extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const listItems = this.props.items.map((todo, i) => (
            <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
        ));

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <th>Task</th>
                        <th>Priority</th>
                        <th>Due Date</th>
                    </TableRow>
                </TableHead>
                <TableBody>
                {listItems}
                </TableBody>
            </Table>
        );
    }
}
