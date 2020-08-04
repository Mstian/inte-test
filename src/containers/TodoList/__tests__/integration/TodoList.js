import { mount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import { createWrapper } from '../../../../utils/utilTest'
import store from '../../../../store'
import axios from '../../__mocks__/axios.js'
beforeEach(() => {
    axios.success = false;
})
describe("TodoList组件集成测试", () => {
    it(`
        1. 输入内容
        2. 触发事件
        3. 列表项增加
    `, async () => {
        const wrapper = mount(TodoList, {
            store
        })
        let inputEle = createWrapper(wrapper, 'test-input').at(0);// [data-input=test-input]
        const content = 'hello';
        inputEle.setValue(content);
        await inputEle.trigger('change');
        await inputEle.trigger('keyup.enter');
        const itemList = createWrapper(wrapper, 'test-item');
        const count = createWrapper(wrapper, 'count');
        expect(itemList.length).toBe(1);
        expect(count.at(0).text()).toBe('1');
        expect(itemList.at(0).text()).toContain(content);
    })

    it(`
        1. 首次进入从远程获取数据
        2. 将数据展示到列表中
    `, async () => {
        axios.success = true;
        const wrapper = mount(TodoList, {
            store
        })
        await wrapper.vm.$nextTick()
            .then(() => {
                const itemList = createWrapper(wrapper, 'test-item');
                expect(itemList.length).toBe(3);
        })
    })

    it(`
        首次进入从远程获取数据失败时应该展示0条
    `, (done) => {
        const wrapper = mount(TodoList, {
            store
        });
        wrapper.vm.$nextTick()
            .then(() => {
                const itemList = createWrapper(wrapper, 'test-item');
                const count = createWrapper(wrapper, 'count');
                expect(itemList.length).toBe(0);
                expect(count.at(0).text()).toBe('0');
                done();
        })
    })
})



