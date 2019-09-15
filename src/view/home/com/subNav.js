import React from 'react';

const SubNav = (props) => {
    const hasSubNave = true
    if (hasSubNave) {
        return (
            <div className="m-subnav">
                <div className="wrap">
                    <ul className="ul-nav">
                        <li><a href="#">推荐</a></li>
                        <li><a href="#">排行榜</a></li>
                        <li><a href="#">歌单</a></li>
                        <li><a href="#">主播电台</a></li>
                        <li><a href="#">歌手</a></li>
                        <li><a href="#">新碟上架</a></li>
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

export default SubNav