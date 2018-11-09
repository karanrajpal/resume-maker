import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const SectionHeading = (props) => (
	<div className="resume__section-heading">
		{props.heading}
	</div>
);

SectionHeading.propTypes = {
	heading: PropTypes.string,
};

const SectionBody = ({ item, primaryColor }) => (
	<div className='resume-item'>
		<div className='resume-item__line1'>
			<div className='resume-item__titles'>
				<div className='resume-item__title' style={{ 'color': primaryColor }}>{item.title}</div>
			</div>
		</div>
		<div className='resume-item__line2'>
			<div className='resume-item__subtitle'>{item.subtitle}</div>
			<div className='resume-item__date'>{item.date}</div>
		</div>
		<div className='resume-item__description' dangerouslySetInnerHTML={{ __html: item.description }}></div>
	</div>
);

const SectionBodyCompact = ({ item, primaryColor }) => (
	<div className='resume-item .resume-item--compact'>
		<div className='resume-item__line1'>
			<div className='resume-item__titles'>
				<div className='resume-item__title' style={{ 'color': primaryColor }}>{item.title}</div>
				<div className='resume-item__subtitle'>{item.subtitle}</div>
			</div>
			<div className='resume-item__date'>{item.date}</div>
		</div>
		{/* <div className='resume-item__line2'>
		</div> */}
		<div className='resume-item__description' dangerouslySetInnerHTML={{ __html: item.description }}></div>
	</div>
);

export const Section = ({ sectionData, primaryColor, compact }) => {
	const {
		data,
		title,
	} = sectionData;
	return (
		<div className='resume-section'>
			<SectionHeading heading={title} />
			{
				data.map((item) => (
					<Fragment>
						{
							compact ?
								<SectionBodyCompact item={item} primaryColor={primaryColor} key={item.title} />
								: <SectionBody item={item} primaryColor={primaryColor} key={item.title} />
						}
					</Fragment>
				))
			}
		</div>
	);
};

Section.propTypes = {
	sectionData: PropTypes.shape({
		data: PropTypes.arrayOf(PropTypes.shape({
			title: PropTypes.string.isRequired,
			subtitle: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired,
			link: PropTypes.string,
		})).isRequired,
		title: PropTypes.string
	}),
};
