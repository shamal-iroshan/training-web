import React, { Component } from 'react';
import InputForm from '../components/InputForm';
import Card from '../components/DiaryCard';
import '../utils/DiaryHomeStyle.css';

class DiaryHome extends Component {

    render() {
        return (
            <div style={{paddingTop: 20}}>
                <h1 className="Home-title">Home</h1>
                <div className="form-container">
                        <InputForm />
                </div>

                <div className="card-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        )
    }
}

export default DiaryHome;
