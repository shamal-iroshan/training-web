import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../utils/InputFormStyle.css'

class InputForm extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
           title: '',
           description: ''
        };
      };

    render() {
        return (
            <div>
                <form>
                    <div className="input-container">
                        <div className="top-input-container">
                            <input type="text" placeholder="Title" id="title" className="txt-title" value={this.state.title} onChange={ e => this.updateTitle(e)} onFocus={this.show}/>
                            <Button variant="contained" disableElevation id="btn-submit" onClick={ e => this.addCard(e) }> Submit </Button>
                        </div>
                        <textarea placeholder="Description" className="txt-description" id="text-area" value={this.state.description}  onChange={ e => this.updateDescription(e)} />
                    </div>
                </form>
            </div>
        );
    }


    updateTitle = (e) => {
        this.setState({
            title: e.currentTarget.value
        });
    }

    updateDescription = (e) => {
        this.setState({
            description: e.currentTarget.value
        });
    }

    addCard = (e) => {
        console.log(this.state.title);
        console.log(this.state.description);

        this.setState({
            title: ''
        });
        this.setState({
            description: ''
        });
    }

    show(){

        let textbox = document.getElementById("title");
        let button = document.getElementById("btn-submit");
        let textarea = document.getElementById("text-area");

        textbox.classList.add("show");
        button.classList.add("show");
        textarea.classList.add("show");
    }

    hide(){
        let textbox = document.getElementById("title");
        let button = document.getElementById("btn-submit");
        let textarea = document.getElementById("text-area");

        textbox.classList.remove("show");
        button.classList.remove("show");
        textarea.classList.remove("show");
    }
}

export default InputForm;
