import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'
import ajax from '../../util/ajax'

import "../../style/scss/login.scss"

class Login extends Component {
    render() {
        return (
            <div className="login-box">
                <div className="login-content">
                    <div>登录</div>
                    <div>
                        <input type="text" ref="user" placeholder="ur name" />
                    </div>
                    <div>
                        <input type="password" ref="password" placeholder="ur password" />
                    </div>
                    <div>
                        <input type="button" onClick={this.jumpToHome} value="跳转到主页" />
                    </div>
                </div>
            </div>
        )
    }
    jumpToHome = () => {
        // this.props.history.push('/home')
        ajax.post('/user/check', {user:this.refs.user.value,
                                  password:this.refs.password.value})
        .then((result)=>{
            alert(result)
        })
    }
}
let highOrderCom = withRouter(Login)
export default highOrderCom
