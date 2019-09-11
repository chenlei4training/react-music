import React, { Component } from 'react';

import { withRouter, NavLink, Link } from 'react-router-dom'
import ajax from '../../util/ajax'
class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <NavLink to='/login/signin' activeClassName='selected'>登陆</NavLink>
                <NavLink to='/login/register' activeClassName='selected'>注册</NavLink>

                <Link to="/home" className="float-right">主页</Link>
                {this.renderOption(this.props)}


            </div>
        )
    }
    jumpToHome = () => {
        // this.props.history.push('/home')
        ajax.post('/user/check', {
            user: this.refs.user.value,
            password: this.refs.password.value
        })
            .then((result) => {
                console.log('server result', result)
                if (result.data.code ===1 && result.data.token) {
                    localStorage.setItem('token', result.data.token)
                    this.props.history.push('/home')
                }else{
                    alert(result.data.msg)
                }
            })
    }
    isVIP = () => {
        ajax.post('/user/isVIP').then((result) => {
            alert(result)
            console.log(result)
        })
    }

    register = () => {
        if(this.refs.password.value !== this.refs.re_password.value){
            alert('输入的两次密码不一致')
            return
        }

        ajax.post('/user/register', {
            user: this.refs.user.value,
            password: this.refs.password.value
        }).then((result) => {
            // alert(JSON.stringify(result))
            if(result.data.code ===1 && result.data.token){
                localStorage.setItem('token',result.data.token)
                this.props.history.push('/home')
            }else{
                alert(result.data.msg)
            }
        })
    }
    renderOption = (props) => {
        if (props.match.params.id === 'signin') { //signin
            return (<div className="login-content">
                <div>登录</div>
                <div><input type="text" ref="user" placeholder="你的用户名" /></div>
                <div><input type="password" ref="password" placeholder="你的密码" /></div>

                <div><input type="button" onClick={this.jumpToHome} defaultValue="登录" /></div>

            </div>
            )
        } else { //register
            return (<div className="login-content">
                <div>注册</div>
                <div><input type="text" ref="user" placeholder="你的用户名" /></div>
                <div><input type="password" ref="password" placeholder="你的密码" /></div>
                <div><input type="password" ref="re_password" placeholder="再次输入你的密码" /></div>

                <div><input type="button" onClick={this.register} defaultValue="注册" /></div>

            </div>
            )
        }
    }
}
let highOrderCom = withRouter(Login)
export default highOrderCom
