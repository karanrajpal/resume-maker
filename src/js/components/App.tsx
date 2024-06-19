// Import styles
import '../../styles/styles.scss';

import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ConnectedResume from './ResumeSwitch';
import ConnectedResumeEditor, { ResumeEditor } from './ResumeEditor';

const App = () => (
    <Router>
        <Routes>
            <Route exact path='/' element={<ConnectedResumeEditor />} />
            <Route exact path='/resume' element={<ConnectedResume />} />
        </Routes>
    </Router>
);

export default App;
