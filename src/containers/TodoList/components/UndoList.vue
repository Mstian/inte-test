<template>
  <div class="undolist">
       <div class="count">
         <span>正在进行</span>
         <span class="countNum" data-input="count" >{{list.length}}</span>
       </div>
       <div class="itemsWrap">
        <div v-for="(item,index) in list" :key="index" class="items" data-input="test-item" @click="handleChangeType(index)" >
            <input class="undoinput" v-if="item.type == 'input' " data-input='input' type="text" :value="item.value" @blur="resetType" @change="(e) => {changeValue(e.target.value,index)}">
            <span v-else>{{ item.value }}</span>
            <span class="delete" data-input="delete" @click="handleClick(index)" >-</span>
        </div>
       </div>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: ['list'],
  methods: {
    handleClick (index) {
      this.$emit('delete', index)
    },
    handleChangeType (index) {
      this.$emit('changeType', index)
    },
    resetType () {
      this.$emit('reset')
    },
    changeValue (value, index) {
      this.$emit('change', {
        value,
        index
      })
    }
  }
}
</script>

<style scoped>
    .count{
        width: 500px;
        margin: 0 auto;
        font-size: 20px;
        margin-bottom: 10px;
    }
    .countNum{
        float: right;
        font-size: 16px;
        width: 20px;
        height: 20px;
        background: #333;
        color: #fff;
        line-height: 20px;
        text-align: center;
        margin-top: 5px;
        border-radius: 50%;
    }
    .itemsWrap{
        width: 500px;
        margin: 0 auto;
        font-size: 16px;
    }
    .items{
        background: #fff;
        border-left: 5px solid cyan;
        border-radius: 3px;
        text-indent: 5px;
        padding: 3px 0;
        margin-bottom: 8px;
    }
    .delete{
        float: right;
        font-size: 16px;
        width: 20px;
        height: 20px;
        background: #999;
        color: #fff;
        line-height: 20px;
        text-align: center;
        border-radius: 50%;
        text-indent: 0;
        cursor: pointer;
    }
    .undoinput{
        width: 300px;
        height: 16px;
        text-indent: 4px;
    }
</style>
