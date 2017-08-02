var cell_width;
var pwidth = Titanium.Platform.displayCaps.platformWidth;
var u_id = Ti.App.Properties.getString("u_id")||"";

if(OS_ANDROID){
	cell_width = Math.floor((pixelToDp(pwidth) / 2));
}else{
	cell_width = Math.floor(pwidth / 2);
}

function init() {
	var checker = Alloy.createCollection('updateChecker'); 
	var isUpdate = checker.getCheckerById("3");
	API.callByPost({url:"getMyGroupList",params:{last_updated:isUpdate.updated, u_id:u_id}},{
		onload:function(responseText){
			var res = JSON.parse(responseText);
			var arr = res.data || null;
			var model = Alloy.createCollection("my_group");
			var arrr = res.group;
			var modell = Alloy.createCollection("groups");
			model.saveArray(arr);
			modell.saveArray(arrr);
			model = null;
			arr = null;
			res =null;				
		}
	});
	var model = Alloy.createCollection("my_group");
	var arr = model.getDataById(u_id);
	render_list(arr);
}

function render_list(e) {
	e.forEach(function(data) {
		var view_group = $.UI.create("View", {
			classes: ['vert',"hsize"],
			width: cell_width
		});
		var view_img = $.UI.create("View",{
			classes: ['vert'],
			height: cell_width - 30,
			width: cell_width - 30,
			top: '15',
			left: '15',
			right: '15',
			borderRadius: (cell_width - 30) / 2,
			backgroundColor: "#eff3f6",
			g_id: data.g_id
		});
		var img = $.UI.create("ImageView",{
			classes: ["wfill", "hsize"],
			defaultImage: "/images/group_picture_circle.png",
			image: data.g_image,
			g_id: data.g_id
		});
		var group_title = (OS_ANDROID) ? $.UI.create("Label",{
			classes: ["hsize","wsize","h4"],
			text: data.g_name,
			top: '5',
			ellipsize: true,
			wordWrap: false,
		}) : $.UI.create("Label",{
			classes: ["hsize","wsize","h4"],
			text: data.g_name,
			top: '5'
		});
		
		view_img.add(img);
		view_group.add(view_img);
		view_group.add(group_title);
		view_img.addEventListener("click", function(e){
			addPage("group_post", "Group Posts", {g_id: e.source.g_id});
		});
		$.group_list.add(view_group);
	});
}
Ti.App.addEventListener("groupList:init",init);

function pixelToDp(px) {
	return ( parseInt(px) / (Titanium.Platform.displayCaps.dpi / 160));
}

init();