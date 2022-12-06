import styled from '@emotion/styled';

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-bottom: 36px;
`;

export const Label = styled.label`
  display: block;
  margin-left: 25px;
  margin-right: auto;
  font-size: large;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 350px;
  height: 24px;
  border-radius: 4px;
  border: none;

  font-weight: bold;
  margin-bottom: 24px;
`;
export const ButtonForm = styled.button`
  padding: 8px 16px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: inherit;
  &:hover {
    background-color: greenyellow;
  }
`;
