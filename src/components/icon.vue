<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">Icon</strong>
				<h2>ICon</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class='icon_size p-10'>
				<i class="el-icon-arrow-down"></i>
				<i class="el-icon-arrow-left"></i>
				<i class="el-icon-arrow-right"></i>
				<i class="el-icon-arrow-up"></i>
				<i class="el-icon-caret-bottom"></i>
				<i class="el-icon-caret-left"></i>
			</div>
			<div class='icon_size p-10'>
				<i class="el-icon-caret-right"></i>
				<i class="el-icon-caret-top"></i>
				<i class="el-icon-check"></i>
				<i class="el-icon-circle-check"></i>
				<i class="el-icon-circle-close"></i>
				<i class="el-icon-circle-cross"></i>
			</div>
			<div class='icon_size p-10'>
				<i class="el-icon-close"></i>
				<i class="el-icon-upload"></i>
				<i class="el-icon-d-arrow-left"></i>
				<i class="el-icon-d-arrow-right"></i>
				<i class="el-icon-d-caret"></i>
				<i class="el-icon-date"></i>
			</div>
			<div class='icon_size p-10'>
				<i class="el-icon-delete"></i>
				<i class="el-icon-document"></i>
				<i class="el-icon-edit"></i>
				<i class="el-icon-loading"></i>
				<i class="el-icon-information"></i>
				<i class="el-icon-menu"></i>
			</div>
			<div class='icon_size p-10'>
				<i class="el-icon-plus"></i>
				<i class="el-icon-search"></i>
				<i class="el-icon-view"></i>
				<i class="el-icon-delete2"></i>
				<i class="el-icon-minus"></i>
				<i class="el-icon-picture"></i>
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
	.icon_size{
		font-size:20px;
	}
	i{
		@extend .p-10;
	}
	

</style>