import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../utils/DiaryCardStyle.css';

const MAX_LENGTH = 100;

class DiaryCard extends Component {

    render() {
        // const { text } = this.props;
        const text  = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
        ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '+
        ' reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in '+
        ' culpa qui officia deserunt mollit anim id est laborum.';

        return (
            <div className="card">
                <h1 className="title">Title</h1>
                <h2 className="subtitle">Subtitle</h2>
                <div>
                    {text.length > MAX_LENGTH ?
                        (
                            <div>
                                {`${text.substring(0, MAX_LENGTH)} ...`} <br/> <Button id="btn-showmore" onClick={this.expandText}>Show more</Button>
                            </div>
                        ) :
                    <p>{text}</p>
                    }
                </div>
            </div>
        )
    }

    expandText() {
        
    }
}


export default DiaryCard;
