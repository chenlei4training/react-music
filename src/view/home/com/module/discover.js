import React from 'react';
import '../../../../style/scss/module/discover.scss'
const Discover = (props) => {
    return (
        <div className="discover">
            <div className='wrap'>
                <div className="container">
                    <div className="head">
                        <a href="/#/discover/playlist/" className="tit">热门推荐</a>

                        <div className='tab'>
                            <a href='#'>华语</a>
                            <span className='v-line'></span>

                            <a href='#'>流行</a>
                            <span className='v-line'></span>

                            <a href='#'>摇滚</a>
                            <span className='v-line'></span>

                            <a href='#'>民谣</a>
                            <span className='v-line'></span>

                            <a href='#'>电子</a>
                            <span className='v-line'></span>
                        </div>

                        <div className='more'>
                            <a href="#" >更多</a>
                            <i>&nbsp;</i>
                        </div>
                    </div>
                    {/* TODO: Move the list to a single component */}
                    <div className="list">

                        <div className="item">
                            <div className="cover">
                                <img src="http://p1.music.126.net/vNDoe5ta_VkjvbM2jfgj2A==/109951164382521990.jpg?param=140y140"></img>

                                <div class="bottom">
                                    <a class="icon-play" title="播放" href="javascript:;" data-res-type="13" data-res-id="924680166" data-res-action="play"></a>
                                    <span class="icon-headset">&nbsp;</span>
                                    <span class="nb">59431万</span>
                                </div>
                            </div>
                            <p className="dec">
                                <a href="#">
                                    [华语速爆新歌] 最新华语音乐推荐11111
                                </a>
                            </p>
                        </div>

                        <div className="item">
                            <div className="cover">
                                <img src="http://p1.music.126.net/8MGWFnBC7NyhZ3pZ2eGPHQ==/109951164339238910.jpg?param=140y140"></img>
                                <div class="bottom">

                                    <span class="icon-headset">&nbsp;</span>
                                    <span class="nb">59431万</span>

                                    <a class="icon-play" title="播放" href="javascript:;" data-res-type="13" data-res-id="924680166" data-res-action="play"></a>
                                </div>
                            </div>
                            <p className="dec">
                                <a href="#">
                                    [华语速爆新歌] 2
                                </a>
                            </p>
                        </div>
                        <div className="item">
                            <div className="cover">
                                <img src="http://p2.music.126.net/2_Dd2SIXwYCtoWEAEy6TtQ==/6040716883447977.jpg?param=140y140"></img>
                            </div>
                            <p className="dec">
                                <a href="#">

                                    [华语速爆新歌] 3
                                </a>
                            </p>
                        </div>

                        <div className="item">
                            <div className="cover">
                                <img src="http://p2.music.126.net/jgtmWwlaK4etnI8CzB1liA==/109951164200282732.jpg?param=140y140"></img>
                            </div>
                            <p className="dec">
                                <a href="#">
                                    [华语速爆新歌] 4
                                </a>
                            </p>
                        </div>
                        <div className="item">
                            <div className="cover">
                                <img src="http://p2.music.126.net/A9l_0cFQvJgraGySAmCFgA==/3413983610176256.jpg?param=140y140"></img>
                            </div>
                            <p className="dec">
                                <a href="#">
                                    [华语速爆新歌] 5
                                </a>
                            </p>
                        </div>
                        <div className="item">
                            <div className="cover">
                                <img src="http://p1.music.126.net/8MGWFnBC7NyhZ3pZ2eGPHQ==/109951164339238910.jpg?param=140y140"></img>
                            </div>
                            <p className="dec">
                                <a href="#">
                                    [华语速爆新歌] 6
                                </a>
                            </p>
                        </div>

                        <div className="item">
                            <div className="cover">
                                <img src="http://p1.music.126.net/8MGWFnBC7NyhZ3pZ2eGPHQ==/109951164339238910.jpg?param=140y140"></img>
                            </div>
                            <p className="dec">
                                <a href="#">

                                    [华语速爆新歌] 7
                                </a>
                            </p>
                        </div>

                        <div className="item">
                            <div className="cover">
                                <img src="http://p1.music.126.net/8MGWFnBC7NyhZ3pZ2eGPHQ==/109951164339238910.jpg?param=140y140"></img>
                            </div>
                            <p className="dec">
                                <a href="#">

                                    [华语速爆新歌] 8
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/*TODO: Move this right panel to a single componnet  右边 */}
                <div className="right-panel">

                    <div class="my-info">
                        <p class="note">登录云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                        <button tabindex="1">用户登录</button>
                    </div>

                    <div className="singer">
                        <h3 className="head">
                            <span>入驻歌手</span>
                            <a href="/discover/artist/signed/">查看全部 &gt;</a>
                        </h3>
                    </div>

                    <ul>

                        <li>
                            <a href="/#/">
                                <div className="head"><img src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" /></div>
                                <div className="ifo">
                                    <h4><span className="">张惠妹aMEI</span></h4>
                                    <p className="">台湾歌手张惠妹</p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="/#/">
                                <div className="head"><img src="http://p2.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62" /></div>
                                <div className="ifo">
                                    <h4><span className="">Fine乐团</span></h4>
                                    <p className="">独立音乐人</p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="/#/">
                                <div className="head"><img src="http://p2.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62" /></div>
                                <div className="ifo">
                                    <h4><span className="">独立音乐人</span></h4>
                                    <p className="">民谣歌手、中国现代民谣的代表人物之一</p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="/#/">
                                <div className="head"><img src="http://p2.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62" /></div>
                                <div className="ifo">
                                    <h4><span className="">萬曉利</span></h4>
                                    <p className="">民谣歌手、中国现代民谣的代表人物之一</p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="/#/">
                                <div className="head"><img src="http://p2.music.126.net/6wPGl_ddgAbJTx5kOohcyw==/109951163892302996.jpg?param=62y62" /></div>
                                <div className="ifo">
                                    <h4><span className="">王三溥</span></h4>
                                    <p className="">音乐人</p>
                                </div>
                            </a>
                        </li>

                    </ul>

                    <button>成为音乐人</button>
                    {/* TODO Move dj list to a single component  */}
                    <div className='dj'>
                        <h3>热门主播</h3>
                        <ul>
                            <li>
                                <a href="#" className="cver">
                                    <img className="j-img" src="http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" />
                                </a>
                                <div class="info">
                                    <p>
                                        <a href="#" class="">陈立</a> <sup class=""></sup>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <div className="head">
                        <a href="/#/discover/playlist/" className="tit">新碟上架</a>    
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Discover