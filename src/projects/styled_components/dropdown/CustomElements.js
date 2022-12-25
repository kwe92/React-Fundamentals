import React from "react";

export const Container = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export const Link = ({ className, children, href }) => (
  <a href={href} className={className}>
    {children}
  </a>
);
