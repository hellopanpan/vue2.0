<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">Pagination</strong>
				<h2>Pagination</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class='p-10'>
				 <h3 class='lighten'>Page is less</h3>
				 <el-pagination
		   		  layout="prev, pager, next"
		  		  :total="50">
				 </el-pagination>
				 <h3 class='lighten'>Page is more</h3>
				 <el-pagination
			  		 layout="prev, pager, next"
			    	:total="1000">
				</el-pagination>
				<h3 class='lighten'>go to one page</h3>
				<el-pagination
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage3"
			      :page-size="100"
			      layout="prev, pager, next, jumper"
			      :total="1000">
			    </el-pagination>
			</div>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data(){
			return{
				currentPage3:3
			}
		},
		methods:{
			handleCurrentChange(ev){
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
		color: lighten(#666,16%);
	}
	

</style>