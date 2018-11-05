export const SET_RESUME_JSON = 'SET_RESUME_JSON';
export const LOAD_INITIAL_STATE = 'LOAD_INITIAL_STATE';
export const SET_RESUME_FORMAT = 'SET_RESUME_FORMAT';

export const setResumeJson = (resumeJson) => ({
	type: SET_RESUME_JSON,
	resumeJson,
});

export const loadInitialState = () => ({
	type: LOAD_INITIAL_STATE,
});

export const setResumeFormat = (resumeFormatKey) => ({
	type: SET_RESUME_FORMAT,
	resumeFormatKey,
});
