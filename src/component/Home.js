import React from 'react'
import ToolBar from "./ToolBar";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import TodoAppModal from "./TodoAppModal";
import TodoApp from "./TodoApp";
import {MDBContainer} from "mdbreact";
import sakura from "../Fonts/sakura.PNG";
import './Login.css';

export class Home extends React.Component {

    render() {
        return (
            <div>
                <MDBContainer>

                        <ToolBar/>
                        <TodoApp/>

                </MDBContainer>
                <MDBContainer>

                </MDBContainer>

            </div>


        );
    }
}