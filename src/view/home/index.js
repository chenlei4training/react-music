import React, { Component } from "react"

import { withRouter } from 'react-router-dom'

import "../../looking/scss/home.scss"

import SubNav from './com/subNav'
//主页组件
class Home extends Component {
    //html onclick="fun(event)"
    render() {
        let params = this.props.match.params
        console.log('route params', params)

        return (
            <div className="home">
                <div className="g-topbar">
                    <div className="m-top">
                        <div className="wrap f-cb">
                            <div className="logo"> xxxx </div>

                            {/* 菜单导航 */}
                            <ul className="m-nav">
                                <li>
                                    <a href="/#/discover/" className={this.isSltCls('discover', params)}>发现音乐
                                        <sub className={this.isShowCls('discover', params)}>&nbsp;</sub>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#/my/" className={this.isSltCls('my', params)}>我的音乐
                                        <sub className={this.isShowCls('my', params)}>&nbsp;</sub>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#/friend/" className={this.isSltCls('friend', params)}>朋友
                                        <sub className={this.isShowCls('friend', params)}>&nbsp;</sub>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#/store/" className={this.isSltCls('store', params)}>商城
                                        <sub className={this.isShowCls('store', params)}>&nbsp;</sub>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#/musician" className={this.isSltCls('musician', params)}>音乐人
                                        <sub className={this.isShowCls('musician', params)}>&nbsp;</sub>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#/download/" className={this.isSltCls('download', params)}>下载客户端
                                        <sub className={this.isShowCls('download', params)}>&nbsp;</sub>
                                    </a>
                                </li>
                                <li> <sup className="hot">&nbsp;</sup></li>
                            </ul>
                            {/* 浮动到右边的类容 */}
                            {/* 登录 */}
                            <div className="m-tophead">
                                <a href="#">登录</a>
                            </div>

                            <a href="#" className="m-topvd">创作中心</a>

                            <div className="srchbg">
                                <i className="icon">&nbsp;</i>
                                <input type="text" placeholder="歌曲名称"></input>

                            </div>

                        </div>
                    </div>
                    <SubNav></SubNav>
                </div>

                <div className="conetent"> 这里是主要内容
                    <h2>{`main_nav = ${params.main_nav}`}</h2>
                    <h2>{`sub_nav = ${params.sub_nav}`}</h2>
                </div>
            </div>

        )
    }

    //返回选中的 css class
    isSltCls = (label, params) => {
        if (this.isSelectedNav(label, params)) {
            return 'selected'
        } else {
            return 'no-selected'
        }
    }

    isShowCls = (label, params) => {
        if (this.isSelectedNav(label, params)) {
            return 'show-arrow'
        } else {
            return 'no-show-arrow'
        }
    }

    //返回是否是选中的main_nav 主导航
    isSelectedNav = (label, params) => {
        if(!params.main_nav && label ==='discover'){
            return true
        }

        if (label === params.main_nav) {
            return true
        } else {
            return false
        }
    }

}

export default withRouter(Home)



