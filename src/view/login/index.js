import React, { Component } from 'react';

import {withRouter} from 'react-router-dom'
class Login extends Component {
    render() {
        return ( 
            <div className="login-container">
                <div className="login-content">
                    <div>登录</div>
                    <div><input type="text" placeholder="你的用户名"/></div>
                    <div><input type="password" placeholder="你的密码"/></div>
                    
                    <div><input type="button" onClick={this.jumpToHome} value="跳转到主页" /></div>
                </div>
            </div>
        )
    }
    jumpToHome =()=>{
        this.props.history.push('/home')
    }
}
let highOrderCom  = withRouter(Login)
export default highOrderCom
