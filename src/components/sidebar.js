import React from 'react';
import {connect} from 'react-redux';
import './sidebar.css';
import {Link} from 'react-router-dom';

export function Sidebar(props) {
    const folders = props.folderList.map((folder, index) => {
        const id = `/${folder.id}`
        return <Link to={id}>
        <li key={index} className="folder-menu-list-item">
            {folder.name}
        </li>
        </Link>
    }
    );

    return (
        <div className="sidebar sidebar-left">
            <nav className="folder-menu">
                <ul className="folder-menu-list">
                    {folders}
                </ul>
            </nav>
        </div>
    );
}

const mapStateToProps = state => ({ 
    folderList: Object.keys(state).map(folderId => {
        return state[folderId];
    })
});

export default connect(mapStateToProps)(Sidebar);
