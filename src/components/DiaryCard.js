import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../utils/DiaryCardStyle.css';

const MAX_LENGTH = 100;

class DiaryCard extends Component {

    render() {
        return (
            <div className="card">
                <h1 className="title">{this.props.title}</h1>
                <h2 className="subtitle">{this.props.user}</h2>
                <div>
                    {this.props.description.length > MAX_LENGTH ?
                        (
                            <div>
                                {`${this.props.description.substring(0, MAX_LENGTH)} ...`} <br/> <Button id="btn-showmore" onClick={this.expandText}>Show more</Button>
                            </div>
                        ) :
                    <p>{this.props.description}</p>
                    }
                </div>
            </div>
        )
    }

    expandText() {
        // console.log(this.props.data);
    }
}


export default DiaryCard;
