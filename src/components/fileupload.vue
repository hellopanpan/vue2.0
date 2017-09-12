<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">FileUpLoad</strong>
				<h2>FileUpLoad</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
		 	<div class='p-10'>
		 		<el-upload
				  class="upload-demo"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :on-preview="handlePreview"
				  :on-remove="handleRemove"
				  :file-list="fileList">
				  <el-button size="small" type="primary">点击上传</el-button>
				  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
		 	</div>
		 	<div class='p-10'>
		 		<el-upload
				  class="upload-demo"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :on-preview="handlePreview"
				  :on-remove="handleRemove"
				  :file-list="fileList2"
				  list-type="picture">
				  <el-button size="small" type="primary">点击上传</el-button>
				  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
		 	</div>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		 data() {
	      return {
	        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
	        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
	      };
	    },
	    methods: {
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      handlePreview(file) {
	        console.log(file);
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