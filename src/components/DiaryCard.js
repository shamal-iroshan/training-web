import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../utils/DiaryCardStyle.css';

const MAX_LENGTH = 100;

function DiaryCard({todo}) {

        return (
            <div className="card">
                <h1 className="title">{todo.title}</h1>
                <h2 className="subtitle">{todo.user}</h2>
                <div>
                    {todo.description.length > MAX_LENGTH ?
                        (
                            <div>
                                {`${todo.description.substring(0, MAX_LENGTH)} ...`} <br/> <Button id="btn-showmore" onClick={this.expandText}>Show more</Button>
                            </div>
                        ) :
                    <p>{todo.description}</p>
                    }
                </div>
            </div>
        )
}


export default DiaryCard;
