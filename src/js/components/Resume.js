import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SectionHeading from './SectionHeading';
import Section from './Section';

const Resume = ({ resumeJson, previewMode }) => {
    const {
        firstName,
        lastName,
        role = '',
        email = '',
        linkedIn = '',
        location = '',
        phoneNumber = '',
    } = resumeJson['profile'];
    const {
        primaryColor,
        secondaryColor,
    } = resumeJson['controls'];
    const styleProp = {
        "color": secondaryColor,
        "zoom": previewMode ? 0.7 : 1
    };

    return (
        <div className='resume' style={styleProp}>
            <div className='resume-header'>
                <h1 style={{ 'color': primaryColor }}>{`${firstName} ${lastName}`}</h1>
                <h5 className='resume-header__role' style={{ 'color': secondaryColor }}>{role}</h5>
            </div>
            <div className='resume-body'>
                <div className='resume-body__column-1'>
                    <SectionHeading heading='Personal Details' />
                    <div>{linkedIn}</div>
                    <div>{email}</div>
                    <div>{location}</div>
                    <div>{phoneNumber}</div>
                </div>
                <div className='resume-body__column-2'>
                    <SectionHeading heading='Professional Experience' />
                    <Section items={resumeJson['experience']} primaryColor={primaryColor} />
                    <SectionHeading heading='Projects' />
                    <Section items={resumeJson['projects']} primaryColor={primaryColor} />
                    <SectionHeading heading='Education' />
                    <Section items={resumeJson['education']} primaryColor={primaryColor} />
                </div>
            </div>
        </div>
    );
};

Resume.propTypes = {
    resumeJson: PropTypes.shape({
        profile: PropTypes.object.isRequired,
        controls: PropTypes.object.isRequired,
        education: PropTypes.object.isRequired,
        experience: PropTypes.object.isRequired,
        projects: PropTypes.object.isRequired,
    }),
};

const ConnectedResume = connect(
    (state) => ({
        resumeJson: state.resumeJson,
    })
)(Resume);

export default ConnectedResume;
