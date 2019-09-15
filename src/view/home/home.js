import React, { Component } from "react"

import { withRouter } from 'react-router-dom'

import "../../style/scss/home.scss"

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
                            <h1 className="logo">
                                {/* <a hidefocus="true" href="/#">云音乐</a> */}
                            </h1>

                            {/* <!-- float left --> */}
                            <ul className="m-nav">
                                <li>
                                    <a href="#" >发现音乐
                                    <sub>&nbsp;</sub>
                                </a>
                                </li>

                                <li><a href="#">我的音乐</a></li>

                                <li><a href="#">朋友</a></li>

                                <li><a href="#">商城</a></li>

                                <li><a href="#">音乐人</a></li>

                                <li><a href="#">下载客户端</a></li>
                                <li><sup className="hot">&nbsp;</sup></li>
                            </ul>

                            {/* <!-- float right --> */}
                            <div className="m-tophead">
                                <a hidefocus="true" href="#" class="link">登录</a>
                            </div>

                            <a target="_blank" className="m-topvd f-pr">创作者中心</a>

                            <div className="srchbg">
                                <i className="icon">&nbsp;</i>
                                <input type="text" placeholder="歌曲名称" />
                            </div>
                        </div>
                    </div>

                    <SubNav></SubNav>
                </div>

                <div className="content">
                   <a href="#">content</a>
                </div>
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
        this.props.history.push('/login/login')
    }

}

export default withRouter(Home)



