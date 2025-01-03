
import React from 'react';

const Result = ({ countries }) => {
  return (
    <div className="text-center my-7 mx-5  ">
      <h1 className="text-lg">Showing {countries.length} {countries.length <= 1 ? "result" : "results"} out of 250</h1>
    </div>
  );
};

export default Result;

