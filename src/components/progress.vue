<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">Progress</strong>
				<h2>Progress</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class='p-10'style='width:400px'>
				<el-progress :percentage="0"></el-progress>
				<el-progress :percentage="70"></el-progress>
				<el-progress :percentage="100" status="success"></el-progress>
				<el-progress :percentage="50" status="exception"></el-progress>
			</div>
			<div class='p-10'style='width:400px'>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
			</div>
			<div class='p-10' style='width:400px'>
				<el-progress type="circle" :percentage="0"></el-progress>
				<el-progress type="circle" :percentage="25"></el-progress>
				<el-progress type="circle" :percentage="100" status="success"></el-progress>
				<el-progress type="circle" :percentage="50" status="exception"></el-progress>
			</div>
		</el-col>
	</el-row>
</template>
<script>
	export default {

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
	.el-progress{
		@extend .p-5;
	}
	

</style>