import React, { Component } from "react"

import { withRouter} from 'react-router-dom'

import "../../style/scss/home.scss"

import "../../style/scss/my-swiper.scss"

import SubNav from './com/subNav'

import FadeEffect from './com/swiper'

import Discover from './com/module/discover'

//主页组件
class Home extends Component {

    render() {
        let params = this.props.match.params
        console.log('params', params)

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
                                    <a href="/#/discover/"  className={this.isSltCls('discover', params)}>发现音乐
                                        <sub className={this.isShowCls('discover', params)}>&nbsp;</sub>
                                    </a>
                                </li>

                                <li><a  href="/#/myMusic/" className={this.isSltCls('myMusic', params)}>我的音乐
                                        <sub className={this.isShowCls('myMusic', params)}>&nbsp;</sub>
                                </a></li>

                                <li><a href="/#/friend/" className={this.isSltCls('friend', params)}>朋友
                                    <sub className={this.isShowCls('friend', params)}>&nbsp;</sub>
                                </a></li>

                                <li><a href="/#/store/" className={this.isSltCls('store', params)}>商城
                                <sub className={this.isShowCls('store', params)}>&nbsp;</sub>
                                </a></li>

                                <li><a href="/#/musician/" className={this.isSltCls('musician', params)}>音乐人
                                <sub className={this.isShowCls('musician', params)}>&nbsp;</sub>
                                </a></li>

                                <li><a href="/#/download/" className={this.isSltCls('download', params)}>下载客户端
                                <sub className={this.isShowCls('download', params)}>&nbsp;</sub>
                                </a></li>
                                <li><sup className="hot">&nbsp;</sup></li>
                            </ul>

                            {/* <!-- float right --> */}
                            <div className="m-tophead">
                                <a href="/#/login/login/">登录</a>
                            </div>

                            <a href="/#/creator/" className="m-topvd f-pr">创作者中心</a>

                            <div className="srchbg">
                                <i className="icon">&nbsp;</i>
                                <input type="text" placeholder="歌曲名称" />
                            </div>
                        </div>
                    </div>

                    <SubNav params={{...params}}></SubNav>
                </div>

                <div className="main-content">
                    <div className="banner">
                        <FadeEffect></FadeEffect>
                    </div>

                    <Discover></Discover>
                    
                    <p>{`main_nav = ${params.main_nav}`}</p>
                    <p>{`sub_nav = ${params.sub_nav}`}</p>
                </div>
            </div>
        )
    }

    navTo = (path,e)=>{
        // alert(e)
        console.log(e)
        let str="abc"
        let myStr = str;
        myStr =`str:${str}`
        console.log(str)

        this.props.history.push(path)

    }

    isSltCls = (current_main_nav, params) => {
        if (this.isSelectedNav(current_main_nav, params)) {
            return "selected"
        } else {
            return "no-selected"
        }
    }

    isShowCls = (current_main_nav, params) => {
        if (this.isSelectedNav(current_main_nav, params)) {
            return "show-arrow"
        } else {
            return "no-show-arrow"
        }
    }

    isSelectedNav = (current_main_nav, params) => {
        if ('discover' === current_main_nav && !params.main_nav) {
            return true
        }

        if (current_main_nav === params.main_nav) {
            return true
        } else {
            return false
        }
    }


}

export default withRouter(Home)



