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

const SectionItem = ({ item, primaryColor }) => (
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

const stripHttp = (link) => {
	if (link) {
		const protocolIdx = link.indexOf('://');
		link = protocolIdx > 0 ? link.substr(protocolIdx + 3) : link;
		return link;	
	}
};

const SectionItemCompact = ({ item, primaryColor }) => (
	<div className='resume-item resume-item--compact'>
		{(item.title || item.subtitle) && <div className='resume-item__line1'>
			<div className='resume-item__titles'>
				<div className='resume-item__title' style={{ 'color': primaryColor }}>{item.title}</div>
				<div className='resume-item__subtitle'>{item.subtitle}</div>
				<div className='resume-item__link'><a href={item.link}>{stripHttp(item.link)}</a></div>
			</div>
			<div className='resume-item__date'>{item.date}</div>
		</div>
		}
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
					<Fragment key={`${item.title}${String(Math.random())}`}>
						{
							compact ?
								<SectionItemCompact item={item} primaryColor={primaryColor} />
								: <SectionItem item={item} primaryColor={primaryColor} />
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
			title: PropTypes.string,
			subtitle: PropTypes.string,
			description: PropTypes.string,
			date: PropTypes.string,
			link: PropTypes.string,
		})).isRequired,
		title: PropTypes.string
	}),
};
