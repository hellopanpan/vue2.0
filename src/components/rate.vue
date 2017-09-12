<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">Rate</strong>
				<h2>Rate</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class='p-10'>
				<h3 class='lighten'> Color stay the same</h3>
				<el-rate v-model="value1"></el-rate>
				<h3 class='lighten'> Color change</h3>
				<el-rate
				    v-model="value2"
				    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
				 </el-rate>
				 <h3 class='lighten'> with text</h3>
				<el-rate
				  v-model="value4"
				  show-text
				  text-color="#ff9900"
				  text-template="{value}">
				</el-rate>
			</div>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data(){
			return{
				 value1: 4,
				 value4: 4,
				 value2: 1
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
		color: lighten(#666,16%);
	}
	

</style>