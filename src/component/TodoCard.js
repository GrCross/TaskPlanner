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
    MDBCardFooter
} from 'mdbreact';

import "../css/Todo.scss"

export class TodoCard extends React.Component{

    constructor(props){
        super(props);
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
                            <a href='#!' className='activator waves-effect waves-light mr-4'>
                                <MDBIcon icon='share-alt' className='black-text' />
                            </a>
                            <MDBCardTitle>{this.props.dueDate}</MDBCardTitle>
                            <hr />
                            <MDBCardText>
                                {this.props.text}
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            {this.props.priority}
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        )
    }

}

export default TodoCard;