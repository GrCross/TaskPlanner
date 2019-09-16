import React from 'react'
import ToolBar from "./ToolBar";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import TodoAppModal from "./TodoAppModal";
import TodoApp from "./TodoApp";
import {MDBContainer} from "mdbreact";


export class Home extends React.Component{

    render() {
        return (
            <div>
                <MDBContainer>
                    <ToolBar/>
                </MDBContainer>
                <MDBContainer>
                    <TodoApp/>
                </MDBContainer>

            </div>



        );
    }
}