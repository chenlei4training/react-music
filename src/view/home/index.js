import React, { Component } from "react"

import {withRouter} from 'react-router-dom'


//主页组件
class Home extends Component {
    //html onclick="fun(event)"
    render() {
        return <div>
            这是我的主页
              <input type="button" onClick={this.jumpToLogin} value="跳到登录页面">
            </input>
        </div>
    }

    jumpToLogin = () => {
        //alert('this='+ this)
        this.props.history.push('/login')
        // window.history.push()
    }

}

export default withRouter(Home)



