import React from 'react';

const SubNav= (props) => {
    const params = props.params
    return (
        <div className="m_subnav">
            <div className="wrap">
                <ul>
                    <li><a href="/#/discover/recommend/" className={isSleCls('recommend',params)}>推荐</a></li>
                    <li><a href="/#/discover/toplist/"   className={isSleCls('toplist',params)}>排行榜</a></li>
                    <li><a href="/#/discover/playlist/"  className={isSleCls('playlist',params)} >歌单</a></li>
                    <li><a href="/#/discover/djradio/"   className={isSleCls('djradio',params)} >主播电台</a></li>
                    <li><a href="/#/discover/artist/"    className={isSleCls('artist',params)}>歌手</a></li>
                    <li><a href="/#/discover/album/"     className={isSleCls('album',params)}>新碟上架</a></li>
      
                </ul>
            </div>
        </div>
    )
}

const isSleCls =(label, params) =>{
    if (isSelectedNav(label, params)){
        return 'selected'
    }else{
        return 'no-selected'
    }
}

 //返回是否是选中的main_nav 主导航
const isSelectedNav = (label, params) => {
    if(!params.sub_nav && label ==='recommend'){
        return true
    }

    if (label === params.sub_nav) {
        return true
    } else {
        return false
    }
}

export default SubNav