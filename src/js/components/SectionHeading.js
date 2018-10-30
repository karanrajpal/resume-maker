import React from "react";
import PropTypes from "prop-types";

const SectionHeading = (props) => (
    <div className="resume__section-heading">
        {props.heading}
    </div>
);

SectionHeading.propTypes = {
    heading: PropTypes.string,
};

export default SectionHeading;
