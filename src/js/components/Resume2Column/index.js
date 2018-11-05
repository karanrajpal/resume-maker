import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SectionHeading from '../SectionHeading';
import Section from '../Section';

import './styles.scss';

const Contact = ({ url, text }) => {
    return (
        <div className='resume__contact'>
            {url && <a href={url}>{text}</a>}
            {!url && <span>{text}</span>}
        </div>
    );
};

Contact.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string,
};

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
        "zoom": previewMode ? 0.70 : 1
    };

    return (
        <div className='resume' style={styleProp}>
            <div className='resume-header'>
                <h1 style={{ 'color': primaryColor }}>{`${firstName} ${lastName}`}</h1>
                <h5 className='resume-header__role' style={{ 'color': secondaryColor }}>{role}</h5>
            </div>
            <div className='resume-body'>
                <div className='resume-body__column-1'>
                    <SectionHeading heading='Contact' />
                    <Contact text={`/${linkedIn}`} url={`https://www.linkedin.com/in/${linkedIn}`} />
                    <Contact text={email} url={`mailto: ${email}`} />
                    <Contact text={location} />
                    <Contact text={phoneNumber} />
                    {/* <SectionHeading heading='Skills' /> */}
                    {/* <div className='resume__skills'>
                        {resumeJson['skills'].map((skill) => (
                            <span className='resume__skill'>{skill}</span>
                        ))}
                    </div> */}
                </div>
                <div className='resume-body__column-2'>
                    {resumeJson['sections'].map((section) => (
                        <Section sectionData={section} primaryColor={primaryColor} key={section.title} />
                    ))}
                </div>
            </div>
        </div>
    );
};

Resume.propTypes = {
    resumeJson: PropTypes.shape({
        profile: PropTypes.object.isRequired,
        controls: PropTypes.object.isRequired,
        sections: PropTypes.array.isRequired,
        skills: PropTypes.array.isRequired,
    }),
};

const ConnectedResume = connect(
    (state) => ({
        resumeJson: state.resumeJson,
    })
)(Resume);

export default ConnectedResume;
