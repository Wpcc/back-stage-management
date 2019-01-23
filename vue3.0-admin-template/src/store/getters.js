const getters = {
  sidebar: state => state.app.sidebar,// app侧边栏
  device: state => state.app.device,  // app设备
  token: state => state.user.token,  // 用户的token
  avatar: state => state.user.avatar,  // 用户头像
  name: state => state.user.name,  //  用户名字
  roles: state => state.user.roles  //  用户角色信息
}
export default getters
