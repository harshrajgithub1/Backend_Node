import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Simulate sending an email with OTP to the user
    // In a real implementation, this should be handled by a backend service
    // You can use libraries like Axios to make API requests.
    // Upon success, move to the OTP verification step
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Simulate OTP verification
    // In a real implementation, compare the entered OTP with the one stored in your database
    // If the OTP is valid, move to the password reset step (step 3)
    // Otherwise, show an error message
    if (otp === '123456') {
      setStep(3);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Simulate password reset
    // In a real implementation, update the user's password in your database
    alert('Password successfully reset!');
    // Redirect the user to the login page or another appropriate location
  };

  return (
    <div>
      {step === 1 && (
        <form onSubmit={handleEmailSubmit}>
          <label>
            Enter your registered email address:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOtpSubmit}>
          <label>
            Enter the OTP sent to your email:
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </label>
          <button type="submit">Verify OTP</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handlePasswordReset}>
          <label>
            Enter your new password:
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
