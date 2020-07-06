import { mount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import { createWrapper } from '../../../../utils/utilTest'
import store from '../../../../store'
import axios from '../../__mocks__/axios.js'
beforeEach(()=>{
  jest.useFakeTimers()
  axios.success = true
})
it(`
    1. 输入内容
    2. 触发事件
    3. 列表项增加
`, async () => {
    const wrapper = mount(TodoList, {
        store
    })
    var inputEle = createWrapper(wrapper, 'test-input').at(0)
    const content = 'hello'
    inputEle.setValue(content)
    await inputEle.trigger('change')
    await inputEle.trigger('keyup.enter')
    const listItem = createWrapper(wrapper, 'test-item')
    expect(listItem.length).toBe(3)
    expect(listItem.at(0).text()).toContain(content)
})


it(`
    1. 首次进入从远程获取数据
    2. 将数据展示到列表中
`, (done) => {
  const wrapper = mount(TodoList, {
    store
  })
  // jest.runAllTimers()
  wrapper.vm.$nextTick().then(() => {
    const listItems = createWrapper(wrapper, 'test-item')
    expect(listItems.length).toBe(3)
    done()
  })
})

// it(`
//     1. 首次进入从远程获取数据失败时应该展示0条
//     2. 将数据展示到列表中
// `, (done) => {
//   axios.success = false
//   const wrapper = mount(TodoList, {
//     store
//   })
//   // jest.runAllTimers()
//   wrapper.vm.$nextTick().then(() => {
//     const listItems = createWrapper(wrapper, 'test-item')
//     expect(listItems.length).toBe(0)
//     done()
//   })
// })


