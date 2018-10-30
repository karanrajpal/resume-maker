import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ConnectedResume from './Resume';
import ConnectedResumeEditor from './ResumeEditor';

const App = () => (
    <Router>
        <div>
            <Route exact path='/' component={ConnectedResumeEditor} />
            <Route exact path='/resume' component={ConnectedResume} />
        </div>
    </Router>
);

export default App;
