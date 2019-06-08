import React from 'react';
import ReactDOM from 'react-dom';
import '@/css/public.css'
import ImgGame from '@/components/ImgGame.jsx'
import TodoList from '@/components/TodoList.jsx'
import BookSearch from '@/components/BookSearch.jsx'
import BookDetail from '@/components/BookDetail.jsx'
ReactDOM.render(
    <div className={''}>
    <h1>React 练习</h1>
    <TodoList />
    <ImgGame />
    <BookSearch />
    </div>
    ,  document.getElementById('app'));
