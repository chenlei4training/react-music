import React, { Component } from 'react';

import { withRouter, NavLink, Link } from 'react-router-dom'
import ajax from '../../util/ajax'

import "../../style/scss/login.scss"

class Login extends Component {
    render() {
        return (
            <div className="login-box">
                <div>
                    <NavLink to="/login/login" activeClassName="selected">登陆</NavLink>
                    <NavLink to="/login/register" activeClassName="selected">注册</NavLink>

                    <Link to="/home" className="float-right">返回主页</Link>
                </div>

                {this.renderOption(this.props)}
            </div>
        )
    }

    login = () => {
        // this.props.history.push('/home')
        ajax.post('/user/check', {
            user: this.refs.user.value,
            password: this.refs.password.value
        }).then((result) => {
            if (result.data.code === 1 && result.data.token) {
                localStorage.setItem('token', result.data.token)
                this.props.history.push('/home')
            } else {
                alert(result.data.msg)
            }
        })
    }

    register = () => {
        ajax.post('/user/register', {
            user: this.refs.user.value,
            password: this.refs.password.value
        }).then((result) => {
            alert(JSON.stringify(result))
            alert(result.data.msg)
        })
    }

    renderOption = ({ match }) => {
        return match.params.id === 'login' ? this.renderLogin() : this.renderRegister()
    }
    //显示登陆
    renderLogin = () => {
        return (
            <div className="login-content">
                <div>登陆</div>

                <div>
                    <input type="text" ref="user" placeholder="ur name" />
                </div>
                <div>
                    <input type="password" ref="password" placeholder="ur password" />
                </div>
                <div>
                    <input type="button" onClick={this.login} defaultValue="登陆" />
                </div>
            </div>)
    }
    //显示注册
    renderRegister = () => {
        return (
            <div className="login-content">
                <div>注册</div>

                <div>
                    <input type="text" ref="user" placeholder="ur name" />
                </div>
                <div>
                    <input type="password" ref="password" placeholder="ur password" />
                </div>

                <div>
                    <input type="password" ref="re-password" placeholder="repeat ur password" />
                </div>

                <div>
                    <input type="button" onClick={this.register} defaultValue="注册" />
                </div>

            </div>)
    }
}
let highOrderCom = withRouter(Login)
export default highOrderCom
