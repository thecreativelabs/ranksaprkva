// components/StickyHeader.js
import React from 'react';

const StickyHeader = ({ children, scrollY, defaultClass, activeClass }) => {
  // ... implement the StickyHeader logic

  return (
    <header className={`sticky top-0 border-b z-20 transition-all ${defaultClass}`}>
      <Container>
        {/* ... rest of the code */}
      </Container>
    </header>
  );
};

export default StickyHeader;
