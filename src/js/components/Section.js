import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ items, primaryColor }) => {
	return (
	    <div className='resume-section'>
	        {
	        	items.map((item) => (
		        	<div className='resume-item' key={item.title}>
		        		<div className='resume-item__title' style={{ 'color': primaryColor }}>{item.title}</div>
		        		<div className='resume-item__line2'>
			        		<div className='resume-item__subtitle'>{item.subtitle}</div>
			        		<div className='resume-item__date'>{item.date}</div>
			        	</div>
		        		<div className='resume-item__description'>{item.description}</div>
		        	</div>
		        ))
	        }
	    </div>
    );
};

Section.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
    	title: PropTypes.string.isRequired,
    	subtitle: PropTypes.string.isRequired,
    	description: PropTypes.string.isRequired,
    	date: PropTypes.string.isRequired,
    	link: PropTypes.string,
    })).isRequired,
};

export default Section;
