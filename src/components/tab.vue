<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">Tab</strong>
				<h2>Tab</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class='p-10'>
				<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="用户管理" name="first">用户管理1</el-tab-pane>
			    <el-tab-pane label="配置管理" name="second">配置管理1</el-tab-pane>
			    <el-tab-pane label="角色管理" name="third">角色管理1</el-tab-pane>
			    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿1</el-tab-pane>
			  </el-tabs>
			</div>
			<div class='p-10'>
				<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
			    	<el-tab-pane label="用户管理" name="first"> <span slot="label"><i class="el-icon-date"></i> 用户管理</span>用户管理2</el-tab-pane>
			   		 <el-tab-pane label="配置管理" name="second">配置管理2</el-tab-pane>
			   		<el-tab-pane label="角色管理" name="third">角色管理2</el-tab-pane>
			    	<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿2</el-tab-pane>
			  </el-tabs>
			</div>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data(){
			return{
				activeName: 'second',
				activeName2: 'third'
			}
		},
		methods:{
			handleClick: function(ev){
				console.log(ev);
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