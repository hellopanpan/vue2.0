<template>
	<el-row>
		<el-col :span = '24'>
			<div class="p-15 center-block">
				Basic/
				<strong class="text-danger">Table</strong>
				<h2>Table</h2>
			</div>
		</el-col>
		<el-col :span = '24' style="background:#fff" class='p-15'> 
			<div class='p-10'>
				<el-table
				    :data="tableData"
				    stripe
				    style="width: 100%">
				    <el-table-column
				      prop="date"
				      label="日期"
				      width="180">
				    </el-table-column>
				     <el-table-column
				      prop="favar"
				      label="爱好"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="地址"
				      >
				    </el-table-column>
				  </el-table>
			  </div>
			  <div class="p-10">
			  	 <el-table
				    ref="multipleTable"
				    :data="tableData3"
				    border
				    tooltip-effect="dark"
				    style="width: 100%"
				    @selection-change="handleSelectionChange">
				    <el-table-column
				      type="selection"
				      width="50">
				    </el-table-column>
				    <el-table-column
				      label="日期"
				      width="250">
				      <template scope="scope"><el-icon name="time" class='pr-10'></el-icon>{{ scope.row.date }}</template>
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名"
				      width="220">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="地址"
				      show-overflow-tooltip>
				    </el-table-column>
				  </el-table>
			  </div>
			  
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data: function () {
			return {
				tableData: [{
		          date: '2016-05-02',
		          favar: 'color red',
		          name: 'xpan',
		          address: '成都市成华区双金路路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          favar: 'color blue',
		          name: 'pan',
		          
		          address: '成都市成华区双金路路 1518 弄'
		        }, {
		          date: '2016-05-01',
		          favar: 'color yes',
		          name: 'panpam',
		          address: '成都市成华区双金路路 1518 弄'
		        }, {
		          date: '2016-05-03',
		          name: 'panpanm',
		           favar: 'color no',
		          address: '成都市成华区双金路路 1518 弄'
		        }],
		        tableData3: [{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-08',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-06',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-07',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }],
		        multipleSelection: []
			}
		},
		methods: {
			toggleSelection(rows) {
		        if (rows) {
		          rows.forEach(row => {
		            this.$refs.multipleTable.toggleRowSelection(row);
		          });
		        } else {
		          this.$refs.multipleTable.clearSelection();
		        }
		      },
		     handleSelectionChange(val) {
		        this.multipleSelection = val;
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