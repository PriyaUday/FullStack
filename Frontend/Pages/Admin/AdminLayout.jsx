import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const AdminLayout = ({ children }) => {
  return (
    <div className="admin">
      
      <main>{children}</main>
      
    </div>
  );
};

AdminLayout.prototype = {
  Children: PropTypes.node.isRequired,
};

export default AdminLayout;