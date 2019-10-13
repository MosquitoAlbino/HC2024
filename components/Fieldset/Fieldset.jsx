import React from "react";
import PropTypes from "prop-types";

const Fieldset = ({ title, children }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset__title">{title}</legend>
      <div className="fieldset__children">{children}</div>

      <style jsx>{`
        .fieldset {
          border: none;
          margin: 0;
          padding: 0;
        }

        .fieldset__title {
          border-bottom: 4px solid #404040;
          color: #404040;
          font-size: 1.25rem;
          font-weight: bold;
          padding-bottom: 5px;
          width: 100%;
        }

        .fieldset__children {
        }
      `}</style>
    </fieldset>
  );
};

Fieldset.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default Fieldset;
