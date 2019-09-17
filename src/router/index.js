import React from 'react';
import {HashRouter,BrowserRouter,StaticRouter,MemoryRouter,Route,Switch,Redirect} from 'react-router-dom'
//StaticRouter 服务器端渲染才使用
//MemoryRouter 一般为React Native项目里使用 



import Home from '../view/home'
import Login from '../view/login'

import NoPage404 from '../view/pageNoFound404'

function AppRouter(){
    return <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/:main_nav" component={Home}/> 
                    <Route exact path="/:main_nav/:sub_nav" component={Home}/> 
                    <Route exact path="/login/:id" component={Login}/>
                    {/* 垫底的路由匹配 需要Switch配合 */}
                    <Route  component= {NoPage404}/> 
                </Switch>
            </HashRouter>
}

export default AppRouter
