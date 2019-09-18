import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBCardFooter, MDBBtn, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBModal
} from 'mdbreact';

import "../css/Todo.scss"
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

export class TodoCard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            text:this.props.text,
            dueDate:this.props.dueDate,
            priority:this.props.priority,
            modal:false
        }

        this.handleDueDate = this.handleDueDate.bind(this);
        this.handlePriority = this.handlePriority.bind(this);
        this.handleText = this.handleText.bind(this);
    }

    handleText(e){
        this.setState({text:e.target.value})
    }

    handleDueDate(e){
        this.setState({dueDate:e.target.value})
    }

    handlePriority(e){
        this.setState({priority:e.target.value})
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render(){
        return (
            <MDBRow>
                <MDBCol md="4">
                    <MDBCard>
                        <MDBCardImage
                            className="img-responsive"
                            top
                            src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg'
                            overlay='white-slight'
                            hover
                            waves
                            alt='MDBCard image cap'
                            width= "100%"
                            height= "auto"
                        />
                        <MDBCardBody>
                            <MDBBtn floating size="sm" gradient="secondary" onClick={this.toggle(8)}><MDBIcon icon="edit" /></MDBBtn>
                            <MDBCardTitle>{this.state.dueDate}</MDBCardTitle>
                            <hr />
                            <MDBCardText>
                                {this.state.text}
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            {this.state.priority}
                        </MDBCardFooter>
                    </MDBCard>

                    <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="100%">
                        <MDBModalHeader toggle={this.toggle(8)}>Create your TODO</MDBModalHeader>
                        <MDBModalBody>
                            <form >
                                <FormControl margin="normal" fullWidth>
                                    <label htmlFor="new-todo-Text">
                                        Text:
                                    </label>
                                    <TextField
                                        id="new-todo-text"
                                        onChange={this.handleText}
                                        value={this.state.text}/>
                                </FormControl>
                                <FormControl margin="normal" fullWidth>
                                    <label htmlFor="new-todo-Priority">
                                        Priority:
                                    </label>
                                    <TextField
                                        id="new-todo-priority"
                                        onChange={this.handlePriority}
                                        value={this.state.priority}
                                        type="number"/>
                                </FormControl>
                                <FormControl margin="normal" fullWidth>
                                    <label htmlFor="new-todo-dueDate2">
                                        dueDate:
                                    </label>
                                    <TextField
                                        id="new-todo-dueDate"
                                        onChange={this.handleDueDate}
                                        value={this.state.dueDate}
                                        type="date"/>
                                </FormControl>
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>
                            <MDBBtn onClick={function(event){this.handleSubmit(); this.toggle(8)}} color="primary">Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBCol>
            </MDBRow>
        )
    }

}

export default TodoCard;