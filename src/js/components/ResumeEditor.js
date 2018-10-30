import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/json';
import 'brace/theme/monokai';

import ConnectedResume from './Resume';
import { setResumeJson, loadInitialState } from '../state/actions';

class ResumeEditor extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(resumeJson) {
        try {
            resumeJson = JSON.parse(resumeJson);
            this.props.setResumeJson(resumeJson);
        } catch (e) {
            // do nothing
        }
    }

    render() {
        let { resumeJson, loadInitialState } = this.props;
        resumeJson = JSON.stringify(resumeJson, null, 2);
        return (
            <div className='resume-split-screen'>
                <div className='resume-editor'>
                    <div className='resume-editor__toolbar btn-group'>
                        <div className='resume-editor__logo'>RG</div>
                        <Link className='btn btn-link btn-small' to='/resume'>View</Link>
                        <button className='btn btn-link btn-small' onClick={loadInitialState}>Reset</button>
                    </div>
                    <AceEditor
                        mode="json"
                        theme="monokai"
                        name="code-editor"
                        onChange={this.onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={resumeJson}
                        height={'100%'}
                        width={'100%'}
                        setOptions={{
                          enableBasicAutocompletion: false,
                          enableLiveAutocompletion: false,
                          enableSnippets: false,
                          showLineNumbers: true,
                          tabSize: 2,
                        }}
                    />
                </div>
                <ConnectedResume
                    previewMode={true}
                />
          </div>
          );
    }
};

ResumeEditor.propTypes = {
    resumeJson: PropTypes.object,
    setResumeJson: PropTypes.func.isRequired,
};

const ConnectedResumeEditor = connect(
    (state) => ({
        resumeJson: state.resumeJson,
    }),
    (dispatch) => ({
        setResumeJson: (resumeJson) => dispatch(setResumeJson(resumeJson)),
        loadInitialState: () => dispatch(loadInitialState()),
    }),
)
(ResumeEditor);

export default ConnectedResumeEditor;
