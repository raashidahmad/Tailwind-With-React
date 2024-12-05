import { useState } from 'react';
import { styled } from 'styled-components';
import { Button } from './Button';
import { CustomInput } from './Input';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const AuthInputs = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier: string, value: string) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className="w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-900">
      <InputContainer>
      <div className="flex flex-col gap-2 mb-4">
        <CustomInput
          label="Email"
          type="email"
          invalid={emailNotValid}
          onChange={(event: any) => handleInputChange('email', event.target.value)}
        />
        <CustomInput
          type="password"
          label="Password"
          invalid={passwordNotValid}
          onChange={(event: any) =>
            handleInputChange('password', event.target.value)
          }
        />
      </div>
      </InputContainer>
      <div className="flex justify-end gap-2">
        <Button type="button">
          Create a new account
        </Button>
        <Button type="button" onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
