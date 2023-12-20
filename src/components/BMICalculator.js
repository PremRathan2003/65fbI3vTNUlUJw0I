import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [weightError, setWeightError] = useState('');
  const [heightError, setHeightError] = useState('');

  const onChangeWeight = event => {
    const newWeight = event.target.value;
    setWeight(newWeight);
    setWeightError(validateWeight(newWeight));
  };

  const onChangeHeight = event => {
    const newHeight = event.target.value;
    setHeight(newHeight);
    setHeightError(validateHeight(newHeight));
  };

  const validateWeight = weightValue => {
    const parsedWeight = parseFloat(weightValue);
    if (
      Number.isNaN(parsedWeight) ||
      parsedWeight < 1.0 ||
      parsedWeight > 300.0
    ) {
      return 'Please enter a valid Weight (1.0 - 300.0 kg).';
    }
    return '';
  };

  const validateHeight = heightValue => {
    const parsedHeight = parseFloat(heightValue);
    if (
      Number.isNaN(parsedHeight) ||
      parsedHeight < 0.1 ||
      parsedHeight > 3.0
    ) {
      return 'Please enter a valid Height (0.1 - 3.0 meters).';
    }
    return '';
  };

  const calculateBMI = () => {
    const weightError = validateWeight(weight);
    const heightError = validateHeight(height);

    if (!weightError && !heightError) {
      const parsedWeight = parseFloat(weight);
      const parsedHeight = parseFloat(height);
      const calculatedBMI = parsedWeight / (parsedHeight ** 2);
      setBMI(calculatedBMI.toFixed(1));
      setWeightError('');
      setHeightError('');
    } else {
      setBMI(null);
      setWeightError(weightError);
      setHeightError(heightError);
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <label htmlFor="weight">Weight in kilograms: </label>
      <input
        type="number"
        id="weight"
        placeholder="Weight (kg)"
        value={weight}
        onChange={onChangeWeight}
      />
      {weightError && <p style={{ color: 'red' }}>{weightError}</p>}
      <br />
      <label htmlFor="height">Height in meters: </label>
      <input
        type="number"
        id="height"
        placeholder="Height (m)"
        value={height}
        onChange={onChangeHeight}
      />
      {heightError && <p style={{ color: 'red' }}>{heightError}</p>}
      <br />
      <button type="button" onClick={calculateBMI}>
        Calculate BMI
      </button>
      {bmi && <p>Your BMI is: {bmi}</p>}
      <br />
      <Link to="/">
        <button type="button">Go to LandingPage</button>
      </Link>
    </div>
  );
};

export default BMICalculator;
