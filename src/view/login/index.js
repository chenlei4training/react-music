import React, { Component } from 'react';

import {withRouter} from 'react-router-dom'
class Login extends Component {
    render() {
        return ( 
            <div>
                登录
                <input type="button" onClick={this.jumpToLogin} value="跳转到主页" />
            </div>
        )
    }
    jumpToLogin =()=>{
        this.props.history.push('/home')
    }
}
let highOrderCom  = withRouter(Login)
export default highOrderCom
