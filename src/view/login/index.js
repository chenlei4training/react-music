import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import "../../style/scss/login.scss"
class Login extends Component {
    render() {
        return (
            <div className="login-box">
                <div className="login-content">
                    <div>登录</div>
                    <div>
                        <input type="text" placeholder="ur name" />
                    </div>
                    <div>
                        <input type="password" placeholder="ur password" />
                    </div>
                    <div>
                        <input type="button" onClick={this.jumpToHome} value="跳转到主页" />
                    </div>
                </div>
            </div>
        )
    }
    jumpToHome = () => {
        this.props.history.push('/home')
    }
}
let highOrderCom = withRouter(Login)
export default highOrderCom
