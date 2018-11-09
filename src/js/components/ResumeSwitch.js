import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Resume1Column from './Resume1Column';
import Resume2Column from './Resume2Column';

const ResumeSwitch = (props) => {
    const { resumeLayoutKey } = props;
    switch(resumeLayoutKey) {
        case 'single': 
            return <div className='resume-1-column'><Resume1Column {...props} /></div>
        case 'single-compact': 
            return <div className='resume-1-column'><Resume1Column {...props} compact={true} /></div>
        case 'double': 
            return <div className='resume-2-column'><Resume2Column {...props} /></div>
        default:
            return <div className='resume-2-column'><Resume2Column {...props} /></div>
    };
};

ResumeSwitch.propTypes = {
    resumeJson: PropTypes.object,
};

const ConnectedResumeSwitch = connect(
    (state) => ({
        resumeLayoutKey: state.resumeLayoutKey,
    }),
)(ResumeSwitch);

export default ConnectedResumeSwitch;
