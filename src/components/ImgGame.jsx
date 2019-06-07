import React from'react'
import styles from '@/css/imgGame.module.css'
import image1 from '@/img/game_01.jpg'
import image2 from '@/img/game_02.jpg'
import image3 from '@/img/game_03.jpg'
import image4 from '@/img/game_04.jpg'
import image5 from '@/img/game_05.jpg'
import image6 from '@/img/game_06.jpg'
import image7 from '@/img/game_07.jpg'
import image8 from '@/img/game_08.jpg'
import image9 from '@/img/game_09.jpg'


export default class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state={
            img:[null,image3,image8,image2,image9,image1,image6,image4,image7,image5]
        }
    }
    change(i){
        const a = this.state.img;
        const b = [...this.state.img];
        const c = [null,image1,image2,image3,image4,image5,image6,image7,image8,image9]
        for(let j=1;j<10;j++)
        {  
            if(this.state.img[j]===image9)             
                a.splice(j,1,b[i]);
            else;
                a.splice(i,1,image9);
        }
        setTimeout(()=>{
        this.setState({
            img:a
         })},0)
        const d = this.state.img
        if(d.toString()===c.toString())
        {
           alert('拼图成功！！！')
        }
    }
    rander(){
        const shuffle = (arr) => {
            for (let i = 0; i < arr.length; i++) {
              const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
              [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
            }
            return arr
        };
        const q = [image1,image2,image3,image4,image5,image6,image7,image8,image9]
        const w = shuffle(q)
        const ar=[null,...w]
        this.setState({
            img:ar
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
    render(){
        return<div className={styles.mainDiv}>
            <h2 onMouseMove={this.handleMouseMove.bind(this)}
                onMouseLeave={this.handleMouseLeave.bind(this)}>
                拼图游戏
            </h2>
            <p style={{display:(this.state.control)?"block":"none",textAlign:"center"}}>
                点击任一张图片，与空白图片交换位置；<br></br>
                拼图完成弹出提示框；<br/>
                点击再来一把会打乱图片顺序；
            </p>
            <img className={styles.imgStyle} onClick={this.change.bind(this,1)} src= {this.state.img[1]} alt='' height='100px'></img>
            <img className={styles.imgStyle} onClick={this.change.bind(this,2)} src= {this.state.img[2]} alt='' height='100px'></img>
            <img className={styles.imgStyle} onClick={this.change.bind(this,3)} src= {this.state.img[3]} alt='' height='100px'></img>
            <img className={styles.imgStyle} onClick={this.change.bind(this,4)} src= {this.state.img[4]} alt='' height='100px'></img>
            <img className={styles.imgStyle} onClick={this.change.bind(this,5)} src= {this.state.img[5]} alt='' height='100px'></img>
            <img className={styles.imgStyle} onClick={this.change.bind(this,6)} src= {this.state.img[6]} alt='' height='100px'></img>
            <img className={styles.imgStyle} onClick={this.change.bind(this,7)} src= {this.state.img[7]} alt='' height='100px'></img>
            <img className={styles.imgStyle} onClick={this.change.bind(this,8)} src= {this.state.img[8]} alt='' height='100px'></img>
            <img className={styles.imgStyle} onClick={this.change.bind(this,9)} src= {this.state.img[9]} alt='' height='100px'></img>
            <button className={styles.btn} onClick={this.rander.bind(this)}>再来一把</button>
        </div>
    }    
}
