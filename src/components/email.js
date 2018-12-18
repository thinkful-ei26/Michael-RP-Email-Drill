import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './email.css';

export default function Email() {
    return (
        <div className="email">
            <main>
                <Router>
                    <div>
                        <Route exact path="/" component={EmailList} />
                        <Route exact path="/:id" component={SingleEmail} />
                    </div>
                </Router>
            </main>
        </div>
    );
}
