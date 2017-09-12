<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">BUtton</strong>
				<h2>Button</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class="">
				<h3 class="lighten">basic button</h3>
				<el-button>Button1</el-button>
				<el-button type= 'primary'>primary</el-button>
				<el-button type= 'text'>text</el-button>
				<el-button :disabled="true">Disabled</el-button>
			</div>
			<div class="">
				<h3 class="lighten">button different size</h3>
				<el-button type="primary" size="large">Big</el-button>
				<el-button type="primary">normal</el-button>
				<el-button type="primary" size="small">Small</el-button>
				<el-button type="primary" size="mini">x small</el-button>
			</div>
			<div class="">
				<h3 class="lighten">color button</h3>
				<el-button type="success">success</el-button>
				<el-button type= "warning">warning</el-button>
				<el-button type= 'danger'>danger</el-button>
				<el-button type= 'info'>info</el-button>
			</div>
			<div class="">
				<h3 class="lighten">icon button</h3>
				<el-button type="primary" icon ='share'>success</el-button>
				<el-button type= "primary" icon = 'delete'>warning</el-button>
				<el-button type= 'primary' icon ='search'>danger</el-button>
				<el-button type= 'primary'>info <i class= 'el-icon-upload el-icon-right'></i></el-button>
				<el-button type="primary" :loading="true">加载中</el-button>
			</div>
			<div class="">
				<h3 class="lighten">button group</h3>
				<el-button-group>
				  <el-button type="primary" icon="arrow-left">Last</el-button>
				  <el-button type="primary">Next<i class="el-icon-arrow-right el-icon--right"></i></el-button>
				</el-button-group>
				<el-button-group>
				  <el-button type="primary" icon="edit"></el-button>
				  <el-button type="primary" icon="share"></el-button>
				  <el-button type="primary" icon="delete"></el-button>
				</el-button-group>
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
	.lighten{
		color:lighten(#666,20%)
	}
	

</style>