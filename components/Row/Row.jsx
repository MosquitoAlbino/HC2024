import React from "react";

const Row = ({ children = [], ...rest }) => {
  return (
    <>
      <div className="container" {...rest}>
        {children}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
        }

        .container:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};

export default Row;
