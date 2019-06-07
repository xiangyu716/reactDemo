import React from 'react';
import ReactDOM from 'react-dom';
import '@/css/index.css'
import ImgGame from '@/components/ImgGame.jsx'
import TodoList from '@/components/TodoList.jsx'
import BookSerchar from '@/components/BookSerchar.jsx'
ReactDOM.render(
    <div className={''}>
    <h1>React 练习</h1>
    <TodoList />
    <ImgGame />
    <BookSerchar />
    </div>
    ,  document.getElementById('app'));
