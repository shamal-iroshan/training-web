import React from 'react';
import { useSelector } from 'react-redux';
import Card from './DiaryCard';
import '../utils/DiaryHomeStyle.css';

function CardList() {
    let todos = useSelector(state => state)
    return (
        <div className="card-container">
            {todos.map(todo => {
                return <Card key={todo.id} todo={todo} />
            })}
        </div>
    )
}

export default CardList;
