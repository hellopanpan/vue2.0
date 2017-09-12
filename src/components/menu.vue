<template>
<div class="grid-content bg-purple"style="height:100%" >
	<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" theme="dark" style="min-height:600px;height:100%">
	  <el-submenu index="1">
	    <template slot="title">
	      <i class="el-icon-message"></i>
	      <span slot="title">Basic</span>
	    </template>
	    <el-menu-item-group>
	      <el-menu-item index="1-1"><router-link to="/gird" tag='li'> Gird</router-link></el-menu-item>
	      <el-menu-item index="1-2"><router-link to="/button" tag='li'>Button</router-link></el-menu-item>
	      <el-menu-item index="1-3"><router-link to="/dropdown" tag='li'>DropDown</router-link></el-menu-item>
	      <el-menu-item index="1-4"><router-link to="/icon" tag='li'>icon</router-link></el-menu-item>
	    </el-menu-item-group>
	  </el-submenu>
	  <el-submenu index="2">
	    <template slot="title">
	      <i class="el-icon-message"></i>
	      <span slot="title">Data</span>
	    </template>
	    <el-menu-item-group>
	      <el-menu-item index="2-1"><router-link to="/table" tag='li'>Table</router-link></el-menu-item>
	      <el-menu-item index="2-2"><router-link to="/menu" tag='li'>Menu</router-link></el-menu-item>
	      <el-menu-item index="2-3"><router-link to="/progress" tag='li'>Progress</router-link></el-menu-item>
	      <el-menu-item index="2-4"><router-link to="/tag" tag='li'>Tag</router-link></el-menu-item>
	      <el-menu-item index="2-5"><router-link to="/badge" tag='li'>Badge</router-link></el-menu-item>
	    </el-menu-item-group>
	  </el-submenu>
	  <el-submenu index="3">
	    <template slot="title">
	      <i class="el-icon-message"></i>
	      <span slot="title">Form</span>
	    </template>
	    <el-menu-item-group>
	      <el-menu-item index="3-1"><router-link to="/input" tag='li'>Input</router-link></el-menu-item>
	      <el-menu-item index="3-2"><router-link to="/radio" tag='li'>Radio and Checkbox</router-link></el-menu-item>
	      <el-menu-item index="3-3"><router-link to="/file" tag='li'>FileUpLoad</router-link></el-menu-item>
	      <el-menu-item index="3-4"><router-link to="/rate" tag='li'>Rate</router-link></el-menu-item>
	    </el-menu-item-group>
	  </el-submenu>
	  <el-submenu index="4">
	    <template slot="title">
	      <i class="el-icon-message"></i>
	      <span slot="title">Nav</span>
	    </template>
	    <el-menu-item-group>
	      <el-menu-item index="4-1"><router-link to="/tab" tag='li'>Tab</router-link></el-menu-item>
	      <el-menu-item index="4-2"><router-link to="/pagination" tag='li'>Pagination</router-link></el-menu-item>
	      <el-menu-item index="4-3"><router-link to="/step" tag='li'>Step</router-link></el-menu-item>
	    </el-menu-item-group>
	  </el-submenu>
	</el-menu>
</div>
</template>
<script>
	export default{
		data: function (){
			return {
				 isCollapse: false
			}
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