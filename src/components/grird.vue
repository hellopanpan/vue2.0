<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">Gird</strong>
				<h2>Gird</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<el-row>
			  <el-col :span="12"><div class="grid-content bg-purple" >col-12</div></el-col>
			  <el-col :span="12"><div class="grid-content bg-danger">col-12</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="8"><div class="grid-content bg-purple">col-8</div></el-col>
			  <el-col :span="8"><div class="grid-content bg-danger">col-8</div></el-col>
			  <el-col :span="8"><div class="grid-content bg-purple">col-8</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="6"><div class="grid-content bg-purple">col-6</div></el-col>
			  <el-col :span="6"><div class="grid-content bg-danger">col-6</div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple">col-6</div></el-col>
			  <el-col :span="6"><div class="grid-content bg-danger">col-6</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">col-4</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-danger">col-4</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">col-4</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-danger">col-4</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">col-4</div></el-col>
			  <el-col :span="4"><div class="grid-content bg-danger">col-4</div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			  <el-col :span="1"><div class="grid-content bg-purple">col-1</div></el-col>
			</el-row>
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
	

</style>