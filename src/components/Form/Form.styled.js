import styled from 'styled-components';

export const FormDesign = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const LabelDesign = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: #8a8a8a;
    margin-bottom: 15px;
    font-family: 'Ubuntu', sans-serif;
`;

export const InputDesign = styled.input`
    margin-top: 2px;
    height: 22px;
    border: 1px solid #8a8a8a;
    border-radius: 5px;
    font-size: 10px;
    padding: 0 10px;
    font-family: 'Ubuntu', sans-serif;
`;

export const AddBtn = styled.button`
    cursor: pointer;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 12px;
    color: #8a0000;
    background-color: #ffa200;
`;