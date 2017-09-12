<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">Badge</strong>
				<h2>Badge</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class='p-10'>
				<el-badge :value="12" class="item">
				  <el-button size="small">评论</el-button>
				</el-badge>
				<span style="margin:20px"></span>
				<el-badge :value="3" class="item">
				  <el-button size="small">回复</el-button>
				</el-badge>
				<span style="margin:20px"></span>
				<el-badge value="new" class="item">
				  <el-button size="small">评论</el-button>
				</el-badge>
				<span style="margin:20px"></span>
				<el-badge value="hot" class="item">
				  <el-button size="small">回复</el-button>
				</el-badge>
			</div>
			<div class='p-10'>
				<el-badge is-dot class="item">数据查询</el-badge>
				<span style="margin:20px"></span>
				<el-badge is-dot class="item">
				  <el-button class="share-button" icon="share" type="primary"></el-button>
				</el-badge>
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
	

</style>