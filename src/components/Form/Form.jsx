import { FormDesign, LabelDesign, InputDesign, AddBtn } from "./Form.styled"
const { Component } = require("react");



class Form extends Component {

    state = {
        name: '',
        number: ''
    };

    handleInput = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }
    
    render() {
        return (
            <FormDesign onSubmit={this.handleSubmit}>
                <LabelDesign>
                    Name
                    <InputDesign
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInput}
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
                        value={this.state.number}
                        onChange={this.handleInput}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </LabelDesign>
                <AddBtn type="submit">Add contact</AddBtn>
            </FormDesign>
        )
    } 
};

export default Form;