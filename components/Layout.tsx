import React from "react";

const Layout: React.FC = ({ children }) => (
    <div className="bg-gradient-radial from-[#060636] via-[#201d4e] to-[#330a36] text-white text-xl selection:text-purple-600 selection:bg-gray-900">
        {children}
    </div>
);

export default Layout;
