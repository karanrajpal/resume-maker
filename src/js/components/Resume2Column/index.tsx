import * as React from 'react';
import { connect } from 'react-redux';

import { Section, SectionHeading } from '../Section';

import './styles.scss';
import { ContactProps, ResumeProps } from '../ResumeSwitch';
import { AppReducerState } from '../../state/AppReducer';

const Contact = ({ url, text }: ContactProps) => {
    return (
        <div className='resume__contact'>
            {url && <a href={url}>{text}</a>}
            {!url && <span>{text}</span>}
        </div>
    );
};

const Resume = ({ resumeJson, controls, previewMode }: ResumeProps) => {
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
        primaryColor = '',
        secondaryColor = '',
    } = controls;
    const styleProp = {
        "color": secondaryColor,
        "zoom": previewMode ? 0.77 : 1
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

const ConnectedResume2Column = connect(
    (state: AppReducerState) => ({
        resumeJson: state.resumeJson,
        controls: state.controls,
    })
)(Resume);

export default ConnectedResume2Column;
