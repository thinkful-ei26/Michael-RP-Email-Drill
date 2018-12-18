import React from 'react';
import {connect} from 'react-redux';
import './email-list.css';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

export function EmailList(props) {
    const emails = props.emailList.map((email, index) =>
        <li key={index} className="email-list-email">
            <div className="email-list-email-from">
                {email.from}
            </div>
            <Link to='/{props.id}'>
                <div className="email-list-email-title">
                {email.title}
                </div>
            </Link>
        
        </li>
    );

    return (
        <div>
            <Sidebar />
            <div className="folder">
                <h2>{props.folderName}</h2>
                <ul className="email-list">
                    {emails}
                </ul>
            </div>
        </div>
        
    );
}

const mapStateToProps = (state, props) => {
    const folder = state.inbox;
    return {
        folderName: folder.name,
        emailList: Object.keys(folder.emails).map(emailId =>
            folder.emails[emailId]
        )
    }
};

export default connect(mapStateToProps)(EmailList);
