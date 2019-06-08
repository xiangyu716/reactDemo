import React,{Component} from 'react'
import style from '@/css/public.css'
import styles from '@/css/todoList.module.css'
export default class TodoList extends Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      list:['提交一下','点击自毁'],
      control:0
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.listMap = this.listMap.bind(this)
  }
  render(){
    return(
    <div className={styles.todoListMain}>
      <h2 onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}>
        TodoList
      </h2>
      <p className={style.introduction} style={{display:(this.state.control)?'block':'none'}}>
        输入文字点击提交，即时显示在下方List中；<br/>
        点击List中任意一条，删除该条；
      </p>
      <div className={style.scanner}>
        <input 
          className={style.inputStyle} 
          value={this.state.inputValue} 
          onChange={this.handleInputChange}>
        </input>
        <button className={style.btnStyle} 
                onClick={this.handleBtnClick}>提交</button>
      </div>
      <ul className={style.ulStyle}>
        { this.listMap() }       
      </ul>        
      </div>
    )
  }
  listMap(){
    return(
    this.state.list.map(
      (item,index)=>
      <li className={style.liStyle} 
          key={index} 
          onClick={this.handleListDelete.bind(this,index)}>
        {item}
      </li>)
    )
  }
  handleInputChange(e){
    const value = e.target.value;
    this.setState(()=>({
      inputValue:value
    }))
  }
  handleBtnClick(){
    const a = this.state.inputValue;
    if(a === "" || a === null || a === undefined) 
      alert('不能为空哦');
    else
      this.setState({
          list:[this.state.inputValue,...this.state.list],
          inputValue:''
      });
  }
  handleListDelete(index){
    const list =[...this.state.list];
    list.splice(index,1);
    this.setState({list:list});
  }
  handleMouseMove(){
    this.setState({
      control:1
    })
  }
  handleMouseLeave(){
    this.setState({
      control:0
    })
  }

}