<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">DropDown</strong>
				<h2>DropDown</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class="">
				<h3 class="lighten">basic dropdown</h3>
				<el-select v-model="value" placeholder="请选择" clearable>
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</div>
			<div class="">
				<h3 class="lighten">dropdown multiple</h3>
				<el-select v-model="value2" placeholder="请选择" clearable multiple >
				    <el-option
				      v-for="item in options2"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</div>
			<div class= ''>
				<h3 class="lighten">dropdown Group</h3>
				<el-select v-model="value3" placeholder="请选择">
				    <el-option-group
				      v-for="group in options3"
				      :key="group.label"
				      :label="group.label">
				      <el-option
				        v-for="item in group.options"
				        :key="item.value"
				        :label="item.label"
				        :value="item.value">
				      </el-option>
				    </el-option-group>
				</el-select>
			</div>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data: function(){
			return{
				 options: [{
		          value: '1',
		          label: 'option1'
		        }, {
		          value: '2',
		          label: 'option2'
		        }, {
		          value: '3',
		          label: 'option3'
		        }, {
		          value: '4',
		          label: 'option4'
		        }, {
		          value: '5',
		          label: 'option5'
		        }],
		        value:'',
		         options2: [{
		          value: '1',
		          label: 'option1'
		        }, {
		          value: '2',
		          label: 'option2'
		        }, {
		          value: '3',
		          label: 'option3'
		        }, {
		          value: '4',
		          label: 'option4'
		        }, {
		          value: '5',
		          label: 'option5'
		        }],
		        value2:[],
		         options3: [{
		          label: 'city',
		          options: [{
		            value: 'Shanghai',
		            label: 'shanghai'
		          }, {
		            value: 'Beijing',
		            label: 'beijing'
		          }]
		        }, {
		          label: 'city',
		          options: [{
		            value: 'Chengdu',
		            label: 'chengdu'
		          }, {
		            value: 'Shenzhen',
		            label: 'shengzheng'
		          }, {
		            value: 'Guangzhou',
		            label: 'guangzhou'
		          }, {
		            value: 'Dalian',
		            label: 'dalian'
		          }]
		        }],
		        value3: ''
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