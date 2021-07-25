import React, { useEffect, useState } from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrength = ({ password = '' }) => {
  const [strength, setStrength] = useState(zxcvbn(password).score);
  useEffect(() => {
    setStrength(zxcvbn(password).score);
  }, [password]);
  const strengthIndicators = [...Array(5).keys()]; // generate array of 0 - 4  because zxcvbn return strength between 0-4
  return (
    <div className="flex flex-col">
      <p className="text-xs uppercase text-coolGray-400"> Password Strength</p>
      <div
        className={`mt-2 flex gap-3 ${password.length < 1 ? 'opacity-0' : ''}`}
      >
        {strengthIndicators.map(indicator => (
          <div
            className={`flex-1 h-1 ${
              indicator <= strength ? 'bg-primary' : 'bg-teal-200'
            } rounded-full`}
            key={indicator}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PasswordStrength;
