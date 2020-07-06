<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input type="text" data-input="test-input" :value = "inputValue" @input="(e)=>{changeInputValue(e.target.value)}" @keyup.enter="changeInput" placeholder="TodoItem" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Header',
  methods: {
    changeInput () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.changeInputValue('')
      }
    },
    ...mapMutations({
      changeInputValue: 'changeInputValue'
    })
  },
  computed: {
    ...mapState({
      inputValue: state => state.inputValue
    })
    // ...mapState(['inputValue'])
  }
}
</script>
<style scoped lang="stylus">
.header{
  line-height 60px;
  background #333;
}
.header-content{
  width:500px;
  margin 0 auto;
  font-size:24px;
  color:#fff;
}
.header-content input{
  float:right;
  width:350px;
  outline:none;
  text-indent:10px;
  margin-top:22px;
}
</style>
