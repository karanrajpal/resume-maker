import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Resume1Column from './Resume1Column';
import Resume2Column from './Resume2Column';

const ResumeSwitch = (props) => {
    const { resumeFormatKey } = props;
    console.log(resumeFormatKey);
    switch(resumeFormatKey) {
        case 'resume-1-column': 
            return <Resume1Column {...props} />
        default:
            return <Resume2Column {...props} />
    };
};

ResumeSwitch.propTypes = {
    resumeJson: PropTypes.object,
};

const ConnectedResumeSwitch = connect(
    (state) => ({
        resumeFormatKey: state.resumeFormatKey,
    }),
)(ResumeSwitch);

export default ConnectedResumeSwitch;
