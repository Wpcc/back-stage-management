## 项目说明

### css样式引入

- src中的样式会自动打包在一起
- node_modules中的样式会自动打包在一起
- **如果给组件样式表设置scoped，那么该组件不管会不会引用样式都会打包**

比如normalize.css这个浏览器重置样式，如果在src/assets中引入，那么最终会和模板中的样式打包在一起。如果是通过`npm i normalize.css`安装，那么最终会和同样用`npm i element-ui`样式打包在一起。

### 路由

动态路由：

​	在vue中动态路由通常指两种情况，一种情况是指路由的路径可以动态配置，如`/user/:id`，那么访问user下的路由便可以动态生成。

```html
<div id='app'>
    <router-link to='/user/wpcc'>wpcc</router-link>
    <router-link to='ll'>ll</router-link>
    <router-view></router-view>
</div>
<script>
var user = {
    template:`<div>{{ $route.params.id }}</div>`
}
var router = new VueRouter({
    routes:[
        {path:'/user/:id',component:'user'}
    ]
})
// 如 /user/wpc或/user/ll 那么就会显示wpc或ll
</script>
```

另一种情况是指，在后台管理平台通过用户权限去动态的生成路由，相较于第一种情况复杂的多，在这之前你需要了解如下知识。

钩子函数（router.beforeEach）：

```javascript
/*
	在路由跳转之前会触发
	to => 即将跳转的路由
	from => 当前路由
	next => 继续下一步，通过next({path:'/'})可设置重定向路由路径
*/
router.beforeEach((to, from, next) => {
    // TODO
    console.log('hello')
})
// 当点击路由的时候会触发该函数，这也意味着虽然该钩子函数是在路由触发之前，但也必须需要触发路由
```

添加路由（router.addRoutes）：

```html
<div id='#app'>
    <button @click='addRoutes'>
        添加路由
    </button>
    <Router-link to='/wpc'>wpc</Router-link>
    <Router-link to='/ll'>ll</Router-link>
    <Router-view></Router-view>
</div>
<script>
    var user = {
        tempate:`<div>{{ $route.path }}</div>`
    }
    var routes = [
        {path:'/wpc',component:user},
        {path:'/ll',component:user},
    ]
    var router = new VueRouter({
        // 没有任何处理路由的参数
    })
    var vm = new Vue({
        router,
        methods:{
            addRoutes(){
                this.$router.addRoutes(routes)
            }
        }
    })
    // 通过点击button按钮：便可以获取让组件有路由功能
</script>
```

### 路由表

表单设计（数据结构，感觉不太合理）：

```javascript
{
    "path":"/",
    "component":"Layout",
    "redirect":"dashboard",
    "children":[
    	"path":"dashboard",
        "component":"dashboard/index",
        "meta":{ // vue路由中的meta可以保存一定的信息，通过判断meta来渲染侧边栏
            "title":"首页",
            "icon":"dashboard"
        }
    ]
},
{
    "path":"example",
    "component":"Layout",
    "redirect":"example/table",
    "name":"Example",
    "meta":{
        "title":"案例",
        "icon":"example"
    },
    "children":[
        {
            "path":"table",
            "name":"Table",
            "component":"table/index",
            "meta":{
                "title":"表格",
                "icon":"table"
            }
        },
        {
            "path":"tree",
            "name":"Tree",
            "component":"tree/index",
            "meta":{
                "title":"树形菜单",
                "icon":"tree"
            }
        }
    ]
}
```

表单设计（自己更改版）：

由于该路由表单高度依赖于layout组件，故将所有的路由调整到layout之中。

```javascript
{
    "path":"/",
    "component":"Layout",
    "redirect":"dashboard",
    "children":[
        {
            "path":"dashboard",
            "component":"dashboard/index",
            "meta":{ // vue路由中的meta可以保存一定的信息，通过判断meta来渲染侧边栏
                "title":"首页",
                "icon":"dashboard"
            }
        },
        {
            "path":"example",
            "component":"Layout",
            "redirect":"example/table",
            "name":"Example",
            "meta":{
                "title":"案例",
                "icon":"example"
            },
            "children":[
                {
                    "path":"table",
                    "name":"Table",
                    "component":"table/index",
                    "meta":{
                        "title":"表格",
                        "icon":"table"
                    }
                },
                {
                    "path":"tree",
                    "name":"Tree",
                    "component":"tree/index",
                    "meta":{
                        "title":"树形菜单",
                        "icon":"tree"
                    }
                }
            ]
        }
    ]
},
```



