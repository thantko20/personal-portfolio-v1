import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../common';

const fieldInputStyles = css`
  appearance: none;
  background-color: rgba(255, 255, 255, 0.07);
  color: ${({ theme }) => theme.colors.neutral['400']};
  font-size: 0.875rem;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.25);
  outline: none;
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.25);

  padding: 0.7rem;
  width: 100%;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.primary['400']};
  }
`;

const Input = styled.input`
  ${fieldInputStyles}
`;

const Textarea = styled.textarea`
  ${fieldInputStyles}
  resize: vertical;
  min-height: 8em;
`;

const Label = styled.label`
  font-weight: 600;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 24rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ${Button} {
    align-self: flex-end;
  }
`;

const Form = () => {
  const [{ name, email, message }, setFieldValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleValuesOnChange = (e) => {
    const { name, value } = e.target;
    setFieldValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <FormControl>
        <Label htmlFor='name'>Name</Label>
        <Input
          id='name'
          name='name'
          value={name}
          onChange={handleValuesOnChange}
          required
        />
      </FormControl>
      <FormControl>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          name='email'
          value={email}
          onChange={handleValuesOnChange}
          required
        />
      </FormControl>
      <FormControl>
        <Label htmlFor='message'>Message</Label>
        <Textarea
          id='message'
          name='message'
          value={message}
          onChange={handleValuesOnChange}
          required
        ></Textarea>
      </FormControl>
      <Button type='submit'>Send</Button>
    </StyledForm>
  );
};

export default Form;
