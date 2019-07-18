import React, { Component } from 'react';

import {withRouter} from 'react-router-dom'
import ajax from '../../util/ajax'
class Login extends Component {
    render() {
        return ( 
            <div className="login-container">
                <div className="login-content">
                    <div>登录</div>
                    <div><input type="text" ref="user" placeholder="你的用户名"/></div>
                    <div><input type="password" ref="password" placeholder="你的密码"/></div>
                    
                    <div><input type="button" onClick={this.jumpToHome} value="登录" /></div>

                    <div><input type="button" onClick={this.isVIP} value="VIP？" /></div>
                </div>
            </div>
        )
    }
    jumpToHome =()=>{
        // this.props.history.push('/home')
        ajax.post('/user/check',{user:this.refs.user.value,
                                password:this.refs.password.value})
            .then((result)=>{
             
            console.log('server result', result)
            if (result.data.code ===1){
                localStorage.setItem('token',result.data.token)
            }else{
                alert('ur name or password is wrong')
            }
        })
    }
    isVIP = ()=>{
        ajax.post('/user/isVIP').then((result) =>{
            alert(result)
            console.log('is vip result',result)
        })
    }
}
let highOrderCom  = withRouter(Login)
export default highOrderCom
