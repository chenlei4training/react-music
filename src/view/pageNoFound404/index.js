import React from 'react';

const style404 = {fontSize:100}
//TODO isLogin 需要改成组件的state
let isLogin = false
//css font-size
const noFound = function(){
    return <div style={{...style404, color:isLogin?'orange':'red'}}>你想访问的页面不在地球上 404</div>
}
export default noFound