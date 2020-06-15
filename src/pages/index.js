import React from "react";
import Button from '../components/Button';
import PrimaryButton from '../components/PrimaryButton';

export default () => (
  <div style={{ color: `purple` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <a href="/about">Click here</a>
    <Button/>
    <PrimaryButton/>
  </div>
);