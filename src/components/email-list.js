import React from 'react';
import {connect} from 'react-redux';
import './email-list.css';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

export function EmailList(props) {
    const emails = props.emailList.map((email, index) =>{
    const tempVar = `/${props.folderId}/${index}`;
    return <li key={index} className="email-list-email">
            <div className="email-list-email-from">
                {email.from}
            </div>
            <Link to={tempVar}>
                <div className="email-list-email-title">
                {email.title}
                </div>
            </Link>
        
        </li>
    });

    return (
            <div className="folder">
                <h2>{props.folderName}</h2>
                <ul className="email-list">
                    {emails}
                </ul>
            </div> 
    );
}

const mapStateToProps = (state, props) => {
    const {file} = props.match.params;
    const folder = state[file];
    console.log(folder);
    return {
        folderId: folder.id,
        folderName: folder.name,
        emailList: Object.keys(folder.emails).map(emailId =>
            folder.emails[emailId]
        )
    }
};

export default connect(mapStateToProps)(EmailList);
