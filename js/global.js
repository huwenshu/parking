;(function(){
	$.global_config = {//表格插件的全局配置
		table_config:{
			"bStateSave": true, //是否把获得数据存入cookie
	        "lengthMenu": [
	            [5, 15, 20, -1],
	            [5, 15, 20, "All"] // 更改每页显示记录数
	        ],
	        // 设置初始值
	        "pageLength": 5,            
	        "pagingType": "bootstrap_full_number",
	        "language": {
	            "search": "搜索: ",
	            "lengthMenu": "  _MENU_ 条数据",
	            "emptyTable": "表格中没有数据~",
	            "info": "显示 _START_ 到 _END_ 条数据 共 _TOTAL_ 条数据",
	            "infoEmpty": "没有数据~",
	            "infoFiltered": "(在 _MAX_ 条数据中查询)",
	            "lengthMenu": "显示 _MENU_ 条数据",
	            "search": "查询:",
	            "zeroRecords": "没有找到对应的数据",
	            "paginate": {
	                "previous":"Prev",
	                "next": "Next",
	                "last": "Last",
	                "first": "First"
	            }
	        },
	        "columnDefs": [{  // 设置默认值
	            'orderable': false,
	            'targets': [0]
	        }, {
	            "searchable": false,
	            "targets": [0]
	        }],
	        "order": [
	            [1, "asc"]
	        ] //升序排列
		}
	};

	//---start---
	    $.table_init = function($table){//表格初始化
	    	var tableWrapper = jQuery('#favourable_wrapper');

		    $table.find('.group-checkable').change(function () {
		        var set = jQuery(this).attr("data-set");
		        var checked = jQuery(this).is(":checked");
		        jQuery(set).each(function () {
		            if (checked) {
		                $(this).attr("checked", true);
		                $(this).parents('tr').addClass("active");
		            } else {
		                $(this).attr("checked", false);
		                $(this).parents('tr').removeClass("active");
		            }
		        });
		        jQuery.uniform.update(set);
		    });

		    $table.on('change', 'tbody tr .checkboxes', function () {
		        $(this).parents('tr').toggleClass("active");
		    });

		    tableWrapper.find('.dataTables_length select').addClass("form-control input-xsmall input-inline"); 
	    };
	    //---end---


	    $.fn.toggleStyle = function(theme){//切换主题
			 $(this).children('li').children("a").bind('click',function(e){
					document.getElementById('style_color').setAttribute('href',$(this).data('url'));
			});
		};

		//------------单选按钮和复选按钮的事件绑定----------------

})();