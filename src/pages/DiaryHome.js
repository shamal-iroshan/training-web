import React, { Component } from 'react';
import Card from '../components/DiaryCard';
import Button from '@material-ui/core/Button';
import '../utils/InputFormStyle.css'
import '../utils/DiaryHomeStyle.css';

const card = []

class DiaryHome extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
            user: this.getCookie('user'),
            title: '',
            description: ''
        };
      };

    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    render() {
        return (
            <div style={{paddingTop: 20}}>
                <h1 className="Home-title">Home</h1>
                <div className="form-container">
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

                <div className="card-container">
                    {card}
                </div>
            </div>
        )
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
        // console.log(this.state.title);
        // console.log(this.state.description);

        if(this.state.title == ''){
            console.log('Missing title');
        }else if(this.state.description == ''){
            console.log('Missing description');
        }else{

            card.push(<Card user={this.state.user} title={this.state.title} description={this.state.description} />);

            this.setState({
                title: ''
            });
            this.setState({
                description: ''
            });
        }
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

export default DiaryHome;
