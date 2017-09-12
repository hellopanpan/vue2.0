<template>
  <div id="app">
   <el-row style="min-width:1250px;height:100%">
    <el-col :span="4" style="height:100%" >
      <div class="grid-content bg-purple" style="height:100%" >
        <i-menu></i-menu>
      </div>
    </el-col>
    <el-col :span="20" ><div class="grid-content bg-purple-light">
       <router-view></router-view>
    </div>
    </el-col>  
  </el-row>
  </div>
</template>
<script>
import Menu from './components/menu.vue'
export default {
 
  name: 'app',
  data () {
    return {
      msg: 'Hello world',
      isCollapse: false
    }
  },
  components:{
    iMenu : Menu
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
html,body{
  margin:0;
  padding:0;
  height:100%;
}
#app{
  padding: 0;
  margin: 0;
  height:100%;
  width:100%
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
