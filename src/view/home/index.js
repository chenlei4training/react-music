import React from 'react'


//主页组件
// TODO 将修改为类组件
export default function Home(){ //目前是函数组件，功能很弱 
    //html onclick="fun(event)"
    return <div>
              这是我的主页  
              <input type="button" onClick={jumpToLogin} value="跳到登录页面">
              </input>
            </div>
}

function jumpToLogin(){
    alert('I wanna jump to login')

}

