import React, { Component } from "react"

import {withRouter} from 'react-router-dom'

import "../../looking/scss/home.scss"

import SubNav from './com/subNav'
//主页组件
class Home extends Component {
    //html onclick="fun(event)"
    render() {
        return (
            <div className="home">
                <div className="g-topbar">
                    <div className="m-top">
                        <div className="wrap f-cb">
                            <div className="logo"> xxxx </div>

                            {/* 菜单导航 */}
                            <ul className="m-nav">
                                <li> <a href="#">发现音乐 <sub>&nbsp;</sub></a></li>
                                <li> <a href="#">我的音乐</a></li>
                                <li> <a href="#">朋友</a></li>
                                <li> <a href="#">商城</a></li>
                                <li> <a href="#">音乐人</a></li>
                                <li> <a href="#">下载客户端</a></li>
                                <li> <sup className="hot">&nbsp;</sup></li>
                            </ul>
                            {/* 浮动到右边的类容 */}
                            {/* 登录 */}
                            <div className="m-tophead">
                                <a href="#">登录</a>
                            </div>

                            <a href="#" className="m-topvd">创作中心</a>

                            <div class="srchbg">
                                <i className="icon">&nbsp;</i> 
                                <input type="text" placeholder="歌曲名称"></input>

                            </div>

                        </div>
                    </div>
                    <SubNav></SubNav>
                </div>

                <div className="conetent"> 这里是主要内容</div>
            </div>
            
        )
        // return <div>
        //     这是我的主页
        //       <input type="button" onClick={this.jumpToLogin} value="跳到登录页面">
        //     </input>
        // </div>
    }

    jumpToLogin = () => {
        //alert('this='+ this)
        this.props.history.push('/login/signin')
        // window.history.push()
    }

}

export default withRouter(Home)



