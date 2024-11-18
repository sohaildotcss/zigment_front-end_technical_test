import React from 'react';

const Spinner: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`loader ${className}`}>Loading...</div>
);

export default Spinner; 