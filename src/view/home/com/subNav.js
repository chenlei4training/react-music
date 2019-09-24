import React from 'react';

const SubNav = (props) => {
    // let params = props.params
    // console.log('sub params',params)
    const { params } = props
    const showSubNav = !params.main_nav || params.main_nav === 'discover' ? true : false

    if (showSubNav) {
        return (
            <div className="m-subnav">
                <div className="wrap">
                    <ul className="ul-nav">
                        <li><a href="/#/discover/recommend" className={isSltClass('recommend', params)}>推荐</a></li>
                        <li><a href="/#/discover/toplist" className={isSltClass('toplist', params)}>排行榜</a></li>
                        <li><a href="/#/discover/playlist" className={isSltClass('playlist', params)}>歌单</a></li>
                        <li><a href="/#/discover/djradio" className={isSltClass('djradio', params)}>主播电台</a></li>
                        <li><a href="/#/discover/artist" className={isSltClass('artist', params)}>歌手</a></li>
                        <li><a href="/#/discover/album" className={isSltClass('album', params)}>新碟上架</a></li>
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
            <div className="one-red-line"></div>
        )
    }
}

const isSltClass = (label_sub_nav, params) => {
    if (isSelectedNav(label_sub_nav, params)) {
        return "selected"
    } else {
        return "no-selected"
    }
}

const isSelectedNav = (label_sub_nav, params) => {
    if ('recommend' === label_sub_nav && !params.sub_nav) {
        return true
    }

    if (label_sub_nav === params.sub_nav) {
        return true
    } else {
        return false
    }
}

export default SubNav