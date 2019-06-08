import React,{ Component } from 'react'
import axios from 'axios'
import style from '@/css/public.css'

class BookDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      BookInfo:'',
    };
    this.searchBook = this.searchBook.bind(this);
  }

  render(){
    return(
      <div>
        <p>{this.state.BookInfo}</p>
        <button onClick={this.searchBook}>搜索</button>
      </div>
    )
  }

  searchBook(){
    axios.get('https://www.apiopen.top/novelInfoApi?name=盗墓笔记')
    .then((res)=>{
      console.log(res.data.data)
    })
    .catch((error)=>{
      //console.log(error)
    })
  }
}
export default BookDetail;