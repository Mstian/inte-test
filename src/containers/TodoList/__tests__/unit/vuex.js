import store from '../../../../store'
it("测试提交commit inputValue跟着变化", () => {
  const content = '123'
  store.commit("changeInputValue",content)
  expect(store.state.inputValue).toBe(content)
})
