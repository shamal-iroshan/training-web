import React, { Component } from 'react';
import Card from '../components/DiaryCard';
import Button from '@material-ui/core/Button';
import InputForm from '../components/InputForm';
import CardList from '../components/CardList';
import '../utils/InputFormStyle.css'
import '../utils/DiaryHomeStyle.css';

class DiaryHome extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
            user: this.getCookie('user'),
            title: '',
            description: ''
        };
      };

    render() {
        return (
            <div style={{paddingTop: 20}}>
                <h1 className="Home-title">Home</h1>
                <div className="form-container">
                    <InputForm user={this.state.user} />
                </div>

                <div>
                    <CardList />
                </div>
            </div>
        )
    }

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

}

export default DiaryHome;
