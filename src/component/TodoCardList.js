import React from "react";
import {Todo} from "./Todo";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import {TableBody, TableRow} from "@material-ui/core";
import {MDBContainer} from "mdbreact";
import TodoCard from "./TodoCard";

export class TodoCardList extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const listItems = this.props.items.map((todo, i) => (
            <TodoCard key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
        ));

        return (
            <MDBContainer style={{marginTop:"20%"}}>
                <div >
                {listItems}
                </div>
            </MDBContainer>
        );
    }
}
