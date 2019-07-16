import React from 'react';
import {HashRouter,BrowserRouter,StaticRouter,MemoryRouter,Route,Switch} from 'react-router-dom'
//StaticRouter 服务器端渲染才使用
//MemoryRouter 一般为React Native项目里使用 



import Home from '../view/home'
import Login from '../view/login'

import NoPage404 from '../view/pageNoFound404'

function AppRouter(){
    return <BrowserRouter>
                    <Route path="/home" component={Home}/> 
                    <Route exact path="/login" component={Login}/>
            </BrowserRouter>
}

export default AppRouter
