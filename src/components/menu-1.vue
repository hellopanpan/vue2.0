<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">Menu</strong>
				<h2>Menu</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class='p-10'>
				<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				  <el-menu-item index="1">处理中心</el-menu-item>
				  <el-submenu index="2">
				    <template slot="title">我的工作台</template>
				    <el-menu-item index="2-1">选项1</el-menu-item>
				    <el-menu-item index="2-2">选项2</el-menu-item>
				    <el-menu-item index="2-3">选项3</el-menu-item>
				  </el-submenu>
				  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
				</el-menu>
			</div>
			<div class="p-10" >
				<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				  <el-menu-item index="1">处理中心</el-menu-item>
				  <el-submenu index="2">
				    <template slot="title">我的工作台</template>
				    <el-menu-item index="2-1">选项1</el-menu-item>
				    <el-menu-item index="2-2">选项2</el-menu-item>
				    <el-menu-item index="2-3">选项3</el-menu-item>
				  </el-submenu>
				  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
				</el-menu>
			</div>
			<div class='p-10' style="width:300px">
					<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
				      <el-submenu index="1">
				        <template slot="title"><i class="el-icon-message"></i>导航一</template>
				        <el-menu-item-group>
				          <template slot="title">分组一</template>
				          <el-menu-item index="1-1">选项1</el-menu-item>
				          <el-menu-item index="1-2">选项2</el-menu-item>
				        </el-menu-item-group>
				        <el-menu-item-group title="分组2">
				          <el-menu-item index="1-3">选项3</el-menu-item>
				        </el-menu-item-group>
				        <el-submenu index="1-4">
				          <template slot="title">选项4</template>
				          <el-menu-item index="1-4-1">选项1</el-menu-item>
				        </el-submenu>
				      </el-submenu>
				      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
				      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
				    </el-menu>
			 </div>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data() {
	      return {
	        activeIndex: '1',
	        activeIndex2: '1'
	      };
	    },
	    methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      },
		  handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	}
</script>
<style lang='scss'>
	@for $i from 1 to 21{
		.p-#{$i}{
			padding: #{$i}px !important;
		}
		.pt-#{$i}{
			padding-top:#{$i}px !important;
		}
		.pb-#{$i}{
			padding-bottom: #{$i}px !important;
		}
		.pl-#{$i}{
			pading-left: #{$i}px !important;
		}
		.pr-#{$i}{
			padding-right:#{$i}px !important;
		}
	};
	.grid-content{
		color:#666;
		line-height:36px;

	}
	

</style>