import React from 'react';

const TreeIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="200" height="300">
    {/* <!-- Trunk --> */}
    <rect x="80" y="200" width="40" height="100" fill="#8B4513" />
    
    {/* <!-- Bottom Branch --> */}
    <ellipse cx="100" cy="190" rx="50" ry="30" fill="#228B22" />
    
    {/* <!-- Top Branch --> */}
    <ellipse cx="100" cy="140" rx="60" ry="40" fill="#32CD32" />
    
    {/* <!-- Eyes --> */}
    <circle cx="85" cy="130" r="5" fill="black" />
    <circle cx="115" cy="130" r="5" fill="black" />
    
    {/* <!-- Nose --> */}
    <circle cx="100" cy="150" r="4" fill="black" />
    
    {/* <!-- Snout --> */}
    <ellipse cx="70" cy="130" rx="10" ry="5" fill="#32CD32" />
    <circle cx="75" cy="130" r="4" fill="#32CD32" />
  </svg>
);

export default TreeIcon;
