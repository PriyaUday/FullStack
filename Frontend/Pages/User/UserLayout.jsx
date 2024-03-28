import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
const UserLayout = ({ children }) => {
  return (
    <div className="user">
      
      <main>{children}</main>
      
    </div>
  );
};

UserLayout.prototype = {
  Children: PropTypes.node.isRequired,
};

export default UserLayout;