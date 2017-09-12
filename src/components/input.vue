<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">Input</strong>
				<h2>Input</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class='p-10'>
				<el-row>
					<el-col :span="10" class='pr-10'>
						<el-input v-model="input" placeholder="请输入内容"></el-input>
						<div style="margin-top: 15px;"></div>
						<span style="margin-top: 15px;"></span>
						<el-input
						  placeholder="请选择日期"
						  icon="search"
						  v-model="input2"
						  :on-icon-click="handleIconClick">
						</el-input>
					</el-col>
				</el-row>		
			</div>
			<div class='p-10'>
			<el-row>
				<el-col :span='10'>
				<div>
				  <el-input placeholder="请输入内容" v-model="input3">
				    <template slot="prepend">Http://</template>
				  </el-input>
				</div>
				<div style="margin-top: 15px;">
				  <el-input placeholder="请输入内容" v-model="input4">
				    <template slot="append">.com</template>
				  </el-input>
				</div>
				<div style="margin-top: 15px;">
				  <el-input placeholder="请输入内容" v-model="input5">
				    <el-select v-model="select" slot="prepend" placeholder="请选择">
				      <el-option label="餐厅名" value="1"></el-option>
				      <el-option label="订单号" value="2"></el-option>
				      <el-option label="用户电话" value="3"></el-option>
				    </el-select>
				    <el-button slot="append" icon="search"></el-button>
				  </el-input>
				</div>
				</el-col>
				</el-row>
			</div>
			<div class="p-10">
				<h3 class="lighten">Different Size</h3>
				<el-col :span='10'>	
					<el-input
					    size="large"
					    placeholder="请输入内容"
					    v-model="input6">
					  </el-input>
					  <div style="margin-top: 15px;"></div>
					  <el-input
					    placeholder="请输入内容"
					    v-model="input7">
					  </el-input>
					   <div style="margin-top: 15px;"></div>
					  <el-input
					    size="small"
					    placeholder="请输入内容"
					    v-model="input8">
					  </el-input>
					   <div style="margin-top: 10px;"></div>
					  <el-input
					    size="mini"
					    placeholder="请输入内容"
					    v-model="input9">
					  </el-input>
				</el-col>
			</div>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data () {
			return {
				input:'',
				input2:'',
				input3:'',
				input4:'',
				input5:'',
				select: '',
				input6: '',
		      	input7: '',
		      	input8: '',
		     	input9: ''
			}
		},
		methods:{
			 handleIconClick(ev) {
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
	.lighten{
		color:lighten(#666,20%)
	}
	

</style>