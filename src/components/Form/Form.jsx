import { useState } from "react";
import { FormDesign, LabelDesign, InputDesign, AddBtn } from "./Form.styled"
// const { Component } = require("react");



function Form({ onSubmit }) {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInput = event => {
    
        switch (event.target.name) {
            case 'name':
                setName(event.target.value);
                break;
            case 'number':
                setNumber(event.target.value);
                break;
            default:
                return;
        };
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(name, number);
        setName('');
        setNumber('');
    };
    
    return (
        <FormDesign onSubmit={handleSubmit}>
            <LabelDesign>
                Name
                <InputDesign
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInput}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </LabelDesign>
            <LabelDesign>
                Number
                <InputDesign
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleInput}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </LabelDesign>
            <AddBtn type="submit">Add contact</AddBtn>
        </FormDesign>
    )
};

export default Form;