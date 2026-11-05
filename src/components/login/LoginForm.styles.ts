import styled from "styled-components";
import { Field } from 'formik';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 36px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const Logo = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 28px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 28px;
  line-height: 1.8;
  font-size: 14px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;

  input {
    padding-inline-end: 44px;
  }
`;

export const PasswordToggle = styled.button`
  position: absolute;
  inset-inline-end: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
`;

export const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin-top: 6px;
`;

export const ApiError = styled.div`
  background: ${({ theme }) => theme.colors.error}15;
  color: ${({ theme }) => theme.colors.error};
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 13px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
