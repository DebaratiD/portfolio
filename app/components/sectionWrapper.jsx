import React from 'react';
import PropTypes from 'prop-types';
import '../globals.css';

const SectionWrapper = ({ id, children }) => {

  return (
    <div className="section-wrapper" id={id}>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionWrapper;
