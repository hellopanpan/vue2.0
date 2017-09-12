<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">Tag</strong>
				<h2>Tag</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class ='p-10'>
				<el-tag>标签一</el-tag>
				<el-tag type="gray">标签二</el-tag>
				<el-tag type="primary">标签三</el-tag>
				<el-tag type="success">标签四</el-tag>
				<el-tag type="warning">标签五</el-tag>
				<el-tag type="danger">标签六</el-tag>
			</div>
			<div class='p-10'>
				<el-tag
				  v-for="tag in tags"
				  :key="tag.name"
				  :closable="true"
				  :type="tag.type"
				   @close="handleClose(tag)"
				>
				{{tag.name}}
				</el-tag>
			</div>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data(){
			return{
				tags: [
			      { name: '标签一', type: '' },
			      { name: '标签二', type: 'gray' },
			      { name: '标签三', type: 'primary' },
			      { name: '标签四', type: 'success' },
			      { name: '标签五', type: 'warning' },
			      { name: '标签六', type: 'danger' }
			    ]
			}
		},
		methods:{
			handleClose(tag) {
		        this.tags.splice(this.tags.indexOf(tag), 1);
		    },
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
	.el-tag{
		margin-right:10px;
	}
	

</style>