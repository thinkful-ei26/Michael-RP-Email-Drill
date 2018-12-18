import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './email.css';

export default function Email() {
    return (
        <Router>
        <div className='blockDis'>
        <Route path='/' component={Sidebar} />
        <div className="email">
            <main>
                <Switch>
                        <Redirect exact from='/' to='/inbox' />
                        <Route exact path="/:file" component={EmailList} />
                        <Route exact path="/:file/:id" component={SingleEmail} />
                    </Switch>
            </main>
        </div>
    </div>
    </Router>
       );
}
