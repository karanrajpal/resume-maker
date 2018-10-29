// Import actions

// Import saveState to save to browser's local storage
import { saveState } from './localStorage';

export const initialState = {
    resumeJson: {
        "controls": {
            "primaryColor": "#6666cc",
            "secondaryColor": "#333333"
        },
        "profile": {
            "firstName": "John",
            "lastName": "Lennon",
            "phoneNumber": "+1 607-607-607",
            "role": "Software Developer",
            "email": "hello@gmail.com",
            "linkedIn": "linkedin.com",
            "location": "New York"
        },
        "experience": [
        {
            "title": "Moat",
            "subtitle": "Full Stack Software Developer",
            "description": "Saving humanity from extinction. My role includes writing test-driven code.",
            "date": "Feb 2017-Oct 2018"
        },
        {
            "title": "Moat (Intern)",
            "subtitle": "Full Stack Software Developer",
            "description": "Thoughtful code that changes the fabric of space and time. Was applauded for my work on improving the efficiency of the process by 30%.",
            "date": "Jun 2016-Aug 2016"
        }
],
        "projects": [
        {
            "title": "Resume Maker",
            "subtitle": "React, Redux, SASS, ES6",
            "description": "Wrote the amazing tool that made this resume",
            "date": "Oct 2018"
        },
        {
            "title": "NLP Bot",
            "subtitle": "Really smart bot",
            "description": "The bot in question can answer all your questions. Tread with caution.",
            "date": "Feb 2018"
        }
],
        "education": [
        {
            "title": "New York University",
            "subtitle": "MS Computer Science, GPA 3.8",
            "description": "Mastered my ability to entertain crowds.",
            "date": "Jan 2016-Dec 2016"
        },
        {
            "title": "Another University",
            "subtitle": "BE Computer Science, GPA 3.9",
            "description": "Learnt most of my superpowers here. Gained a foundational insight into the ways of the world",
            "date": "Jan 2010-Aug 2010"
        }
],
        "skills": ["JavaScript", "Snoozing", "Eating"]
},
};

// Define and export reducer
