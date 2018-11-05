import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Resume2Column from './Resume2Column';

const ResumeSwitch = (props) => {
    const { resumeFormatKey } = props;
    switch(resumeFormatKey) {
        default:
            return <Resume2Column {...props} />
    };
};

ResumeSwitch.propTypes = {
    resumeJson: PropTypes.object,
};

const ConnectedResumeSwitch = connect(
    // (state) => ({
    //     resumeJson: state.resumeJson,
    // }),
)(ResumeSwitch);

export default ConnectedResumeSwitch;
