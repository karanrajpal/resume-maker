import * as React from 'react';
import { connect } from 'react-redux';
import ConnectedResume1Column from './Resume1Column';
import { AppReducerState, Controls, LayoutType, ResumeJson } from '../state/AppReducer';
import ConnectedResume2Column from './Resume2Column';
import ConnectedResume1ColumnSimple from './Resume1ColumnSimple';

type ResumeSwitchProps = {
    resumeLayoutKey: LayoutType;
    previewMode: boolean;
};
export type ResumeProps = ResumeSwitchProps & {
    resumeJson: ResumeJson;
    controls: Controls;
    compact?: boolean;
};
export type ContactProps = {
    text: string;
    icon?: string;
    url?: string;
};
const ResumeSwitch = (props: ResumeSwitchProps) => {
    const { resumeLayoutKey } = props;
    switch (resumeLayoutKey) {
        case 'single':
            return (<div className='resume-1-column'><ConnectedResume1Column {...props} /></div>);
        case 'single-simple':
            return (<div className='resume-1-column'><ConnectedResume1ColumnSimple {...props} /></div>);
        case 'single-compact':
            return (<div className='resume-1-column'><ConnectedResume1Column {...props} compact={true} /></div>)
        case 'double':
            return <div className='resume-2-column'><ConnectedResume2Column {...props} /></div>
        default:
            return <div className='resume-2-column'><ConnectedResume2Column {...props} /></div>
    }
};

const ConnectedResumeSwitch = connect(
    (state: AppReducerState) => ({
        resumeLayoutKey: state.resumeLayoutKey,
    }),
)(ResumeSwitch);

export default ConnectedResumeSwitch;
