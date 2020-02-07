import React from "react";
const Progress = () => {
  return (
    <div className="progress-container">
      <div className="card">
        <div className="box">
          <div className="avg-time">
            <svg className="progress-circle">
              <circle cx="70" cy="70" r="70" />
              <circle cx="70" cy="70" r="70" />
            </svg>
            <div className="number">
              <h2>
                45<span>min</span>
              </h2>
            </div>
          </div>
          <h2 className="text">Deposit</h2>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <div className="avg-time">
            <svg className="progress-circle">
              <circle cx="70" cy="70" r="70" />
              <circle cx="70" cy="70" r="70" />
            </svg>
            <div className="number">
              <h2>
                12<span>min</span>
              </h2>
            </div>
          </div>
          <h2 className="text">Deposit</h2>
        </div>
      </div>
    </div>
  );
};

export default Progress;
