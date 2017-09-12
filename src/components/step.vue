<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">Step</strong>
				<h2>Step</h2>
			</div>
		</el-col>
			<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class='p-10'>
				<el-steps :space="100" :active="active" finish-status="success">
				<el-step title="step 1"></el-step>
				<el-step title="step 2"></el-step>
				<el-step title="step 3"></el-step>
				</el-steps>
				<el-button style="margin-top: 12px;" @click="next">Next</el-button>
			</div>
			<div class='p-10'>
				<el-steps :space="100" direction="vertical" :active="active">
				<el-step title="步骤 1"></el-step>
				<el-step title="步骤 2"></el-step>
				<el-step title="步骤 3"></el-step>
				</el-steps>
			</div>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data(){
			return{
				active: 1
			}
		},
		methods: {
			next: function(){
				this.active++;
				if(this.active > 3){
					this.active = 0 ;
				}
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