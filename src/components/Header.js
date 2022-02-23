// importing react is n't really needed
import React from "react";
// importing propTypes (impt)
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, showForm, formIsOpen }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={formIsOpen ? 'red':'green'} text={formIsOpen ? 'Close':'Add'} onClick={showForm} />
    </header>
  );
};

// Using default props
Header.defaultProps = {
  title: "Tracker",
};
// implementing propTypes
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
