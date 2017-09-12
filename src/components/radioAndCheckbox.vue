<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">Radio and checkbox</strong>
				<h2>Radio and checkbox</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class='p-10'>
				<h3 class="lighten">Radio</h3>
				<el-radio class="radio" v-model="radio" label="1">备选项1</el-radio>
  				<el-radio class="radio" v-model="radio" label="2">备选项2</el-radio>
  				<el-radio label="不可选" v-model="radio"  :disabled="true"></el-radio>
			</div>
			<div class='p-10'>
				<el-radio-group v-model="radio3">
			    <el-radio-button label="上海"></el-radio-button>
			    <el-radio-button label="北京"></el-radio-button>
			    <el-radio-button label="广州"></el-radio-button>
			    <el-radio-button label="深圳"></el-radio-button>
			    <el-radio-button label="不可选" :disabled="true"></el-radio-button>
			  </el-radio-group>
			</div>
			<div class='p-10'>
				<h3 class="lighten">CheckBox</h3>
				 <el-checkbox-group 
				    v-model="checkedCities1"
				    :min="1"
				    :max="3">
				    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
				  </el-checkbox-group>
			</div>
			<div class='p-10'>
				<el-checkbox-group v-model="checkboxGroup1">
				    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
				  </el-checkbox-group>
			</div>
		
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data(){
			return{
				radio:'1',
				radio3:'北京',
				checkedCities1: ['上海', '北京'],
				cities: ['上海', '北京', '广州', '深圳'],
				checkboxGroup1: ['上海', '广州'],
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