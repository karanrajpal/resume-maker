import * as React from 'react';
import { connect } from 'react-redux';

import { Section, SectionHeading } from '../Section';

import './styles.scss';

import { ContactProps, ResumeProps } from '../ResumeSwitch';
import { AppReducerState } from '../../state/AppReducer';

const Contact = ({ url, text, icon }: ContactProps) => (
    text ?
        (<div className='resume__contact'>
            {url && <a href={url}>{text}</a>}
            {!url && <span>{text}</span>}
        </div>)
        : null
);

const Resume1ColumnSimple = ({ resumeJson, controls, previewMode, compact = false }: ResumeProps) => {
    const {
        firstName,
        lastName,
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
                    <h2 style={{ 'color': primaryColor }}>{`${firstName} ${lastName}`}</h2>
                </div>
                <div className='resume-header__contacts'>
                    <Contact text={email} url={`mailto: ${email}`} />
                    <Contact text={phoneNumber} />
                    <Contact text={`linkedin.com/in/${linkedIn}`} url={`https://www.linkedin.com/in/${linkedIn}`} />
                    <Contact text={location} />
                    <Contact text={website} url={`http://${website}`} />
                    <Contact text={`github.com/${github}`} url={`https://github.com/${github}`} />
                    <Contact text={twitter} url={`https://twitter.com/${twitter}`} />
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

const ConnectedResume1ColumnSimple = connect(
    (state: AppReducerState) => ({
        resumeJson: state.resumeJson,
        controls: state.controls,
    })
)(Resume1ColumnSimple);

export default ConnectedResume1ColumnSimple;
