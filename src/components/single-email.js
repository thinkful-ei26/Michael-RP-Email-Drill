import React from 'react';
import {connect} from 'react-redux';
import './single-email.css';
import Sidebar from './sidebar';

export function SingleEmail(props) {
    return (
    <div> 
        <div className="single-email">
            <div className="single-email-headers">
                <h2 className="single-email-title">{props.title}</h2>
                <div className="single-email-from"><strong>From: </strong>{props.from}</div>
                <div className="single-email-to"><strong>To: </strong>{props.to}</div>
            </div>
            <div className="single-email-content">
                {props.content}
            </div>
        </div>
    </div>
    );
}

const mapStateToProps = (state, props) => {
    const { id, file } = props.match.params;
    console.log(id);
    const singleEmail = state[file].emails[id]
    return {
        title: singleEmail.title,
        from: singleEmail.from,
        to: singleEmail.to,
        content: singleEmail.content
        // emailList: Object.keys(folder.emails).map(emailId =>
        //     folder.emails[emailId]
        // )
    }
}


export default connect(mapStateToProps)(SingleEmail);
