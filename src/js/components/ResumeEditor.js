import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/json';
import 'brace/theme/monokai';

import ConnectedResume from './ResumeSwitch';
import { setResumeJson, loadInitialState, setResumeLayout } from '../state/actions';

const Toolbar = ({ loadInitialState, setResumeLayout }) => (
    <nav>
        <div className='nav-container resume-editor__toolbar'>
            <div className='nav-logo'>
                <a href="/">resumeMaker</a>
            </div>
            <ul className='nav-links'>
                <li className='dropdown'>
                    <a>Layout</a>
                    <ul className='menu'>
                        <li><a onClick={() => setResumeLayout('single')}>Single Column</a></li>
                        <li><a onClick={() => setResumeLayout('single-compact')}>Single Column Compact</a></li>
                        <li><a onClick={() => setResumeLayout('double')}>Double Column</a></li>
                    </ul>
                </li>
                <li><a onClick={() => {
                    const confirm = window.confirm('Reset back to original resume data?');
                    confirm && loadInitialState();
                }}>Reset</a></li>
                <li><Link className='btn btn-link btn-small' to='/resume'>View</Link></li>
            </ul>
        </div>
    </nav>
);

Toolbar.propTypes = {
    loadInitialState: PropTypes.func.isRequired,
    setResumeLayout: PropTypes.func.isRequired,
}

const ConnectedToolbar = connect(
    null,
    (dispatch) => ({
        loadInitialState: () => dispatch(loadInitialState()),
        setResumeLayout: (resumeLayoutKey) => dispatch(setResumeLayout(resumeLayoutKey))
    })
)(Toolbar);

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
        let { resumeJson } = this.props;
        resumeJson = JSON.stringify(resumeJson, null, 2);
        return (
            <div className='resume-editor'>
                <ConnectedToolbar />
                <div className='resume-split-screen'>
                    <div className='resume-editor__json'>
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
    }),
)(ResumeEditor);

export default ConnectedResumeEditor;
