const myPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    console.log(JSON.stringify(state))
    // sessionStorage.setItem('state', state)
    console.log('初始化myPlungin插件')
  })
  store.watch((state, getter) => {
    console.log(JSON.stringify(state))
    // state = sessionStorage.getItem('state')
    console.log(getter)
    console.log('watch插件')
  })
}

export default myPlugin
