<template>
  <div>
    <Header @add='addItem' />
    <undoList :list="undoList" @delete='deleteUdoList' @changeType='updateUndoList' @reset='resetType' @change="changeValue"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import undoList from './components/UndoList.vue'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
    return {
      undoList: []
    }
  },
  components: {
    Header,
    undoList
  },
  methods: {
    addItem (value) {
      this.undoList.push({
        value: value,
        type: 'div'
      })
    },
    deleteUdoList (index) {
      this.undoList.splice(index, 1)
    },
    updateUndoList (index) {
      const newArr = []
      this.undoList.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          newArr.push({ value: item.value, type: 'input' })
        } else {
          newArr.push({ value: item.value, type: 'div' })
        }
      })
      this.undoList = [...newArr]
    },
    resetType () {
      const newArr = []
      this.undoList.forEach((item, itemIndex) => {
        newArr.push({ value: item.value, type: 'div' })
      })
      this.undoList = [...newArr]
    },
    changeValue (dataset) {
      this.undoList[dataset.index].value = dataset.value
      this.undoList[dataset.index].type = 'div'
    }
  },
  mounted () {
    axios.get('/getList.json')
      .then((res) => {
        this.undoList = res.data
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
