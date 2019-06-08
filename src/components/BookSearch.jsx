import React from 'react'
import axios from 'axios'
import styles from '@/css/bookSearch.module.css'
import style from '@/css/public.css'
export default class Axios extends React.Component { 
  constructor(props){ 
    super(props); 
    this.state={ 
      list:[], 
      inputValue:'',
      control:0
    } 
  }   
  render(){ 
    return (
      <div className={styles.mainStyle}> 
        <h2 onMouseMove={this.handleMouseMove.bind(this)}
            onMouseLeave={this.handleMouseLeave.bind(this)}>
            小说搜索
        </h2>
        <p className={style.introduction} 
           style={{display:(this.state.control)?"block":"none",textAlign:"center"}}>
            连接开放API<br/>
            通过关键词搜索相关小说<br></br>
            尽可能地消除了bug，欢迎尝试
        </p>
        <div className={style.scanner}>
          <input 
            className={style.inputStyle}
            value={this.state.inputValue} 
            onChange={this.handleInputChange.bind(this)}>
          </input>
          <button className={style.btnStyle} 
                  onClick={this.getDataA.bind(this)}>
            搜索
          </button> 
      </div>
      <ul className={style.ulStyle}> 
        { this.state.list.map((value,key)=>{ 
        return (<li className={style.liStyle} key={key}>{value}</li>) }) } 
      </ul> 
    </div> 
    )
  } 
  getDataA=()=>{ 
    const a = this.state.inputValue
    // if(a === "" || a === null || a === undefined) 
    if(a.match(/^\s+$/)||a === null||a === ""||a === undefined)
    {
      alert('不能为空哦');
      this.setState({ list:[]})   
    }
    else{
      axios.get('https://www.apiopen.top/novelSearchApi',{
        params:{
          name:this.state.inputValue.replace(/\s*/g,"")
        }
      }) 
      .then((res)=>{ // 注意this指向 
        if(res.data.data===null)
        this.setState({ list:["查无此书"]})
        else
        this.setState({ list:res.data.data})
      })
      .catch((err)=>{ 
        console.log(err) 
        }) 
    }
  } 

  handleInputChange(e){
    const a = e.target.value
    this.setState({
      inputValue:a    
    })
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
