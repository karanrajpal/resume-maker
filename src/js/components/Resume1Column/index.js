import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Section, SectionHeading } from '../Section';

import './styles.scss';

import linkedInIcon from '../../../../icons/linkedin.png';
import githubIcon from '../../../../icons/github7.png';
import phoneIcon from '../../../../icons/smartphone11.png';
import websiteIcon from '../../../../icons/website8.png';
import emailIcon from '../../../../icons/envelope32.png';
import twitterIcon from '../../../../icons/twitter42.png';
import locationIcon from '../../../../icons/location.png';

const Contact = ({ url, text, icon }) => (
    text ?
        (<div className='resume__contact'>
            {icon && <span className='resume__contact-icon'><img src={icon} /></span>}
            {url && <a href={url}>{text}</a>}
            {!url && <span>{text}</span>}
        </div>)
        : null
);

Contact.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string,
};

const Resume1Column = ({ resumeJson, controls = {}, previewMode, compact = false }) => {
    const {
        firstName,
        lastName,
        role = '',
        email = '',
        linkedIn = '',
        location = '',
        phoneNumber = '',
        twitter = '',
        github = '',
        website = '',
    } = resumeJson['profile'];
    const {
        primaryColor,
        secondaryColor,
    } = controls;
    const styleProp = {
        "color": secondaryColor,
        "zoom": previewMode ? 0.77 : 1
    };

    return (
        <div className='resume' style={styleProp}>
            <div className='resume-header'>
                <div className='resume-header__titles'>
                    <h1 style={{ 'color': primaryColor }}>{`${firstName} ${lastName}`}</h1>
                    <h5 className='resume-header__role' style={{ 'color': secondaryColor }}>{role}</h5>
                </div>
                <div className='resume-header__contacts'>
                    <Contact text={`/${linkedIn}`} url={`https://www.linkedin.com/in/${linkedIn}`} icon={linkedInIcon} />
                    <Contact text={email} url={`mailto: ${email}`} icon={emailIcon} />
                    <Contact text={location} icon={locationIcon} />
                    <Contact text={phoneNumber} icon={phoneIcon} />
                    <Contact text={website} url={`http://${website}`} icon={websiteIcon} />
                    <Contact text={github} url={`https://github.com/${github}`} icon={githubIcon} />
                    <Contact text={twitter} url={`https://twitter.com/${twitter}`} icon={twitterIcon} />
                </div>
            </div>
            <div className='resume-body'>
                <SectionHeading heading='Skills' />
                <div className='resume__skills'>
                    {resumeJson['skills'].map((skill) => (
                        <span className='resume__skill' key={skill} >• {skill}</span>
                    ))}
                </div>
                <div className='resume-body__sections'>
                    {resumeJson['sections'].map((section) => (
                        <Section sectionData={section} compact={compact} primaryColor={primaryColor} key={section.title} />
                    ))}
                </div>
            </div>
        </div>
    );
};

Resume1Column.propTypes = {
    resumeJson: PropTypes.shape({
        profile: PropTypes.object.isRequired,
        sections: PropTypes.array.isRequired,
        skills: PropTypes.array.isRequired,
    }),
    controls: PropTypes.shape({
        primaryColor: PropTypes.string.isRequired,
        secondaryColor: PropTypes.string.isRequired,
    }).isRequired,
    compact: PropTypes.bool,
    previewMode: PropTypes.bool,
};

const ConnectedResume1Column = connect(
    (state) => ({
        resumeJson: state.resumeJson,
        controls: state.controls,
    })
)(Resume1Column);

export default ConnectedResume1Column;
