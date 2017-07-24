var args = arguments[0] || {};
var pwidth = Titanium.Platform.displayCaps.platformWidth;
var cell_width;
var mod = require('bencoding.blur');
var u_id = args.u_id || null;
var u_model = Alloy.createCollection("staff");
var u_res = u_model.getDataById(u_id); 

if(OS_ANDROID){
	cell_width = Math.floor((pixelToDp(pwidth) / 2)) - 2;
}else{
	cell_width = Math.floor(pwidth / 2) - 2;
}

function init(){
	Alloy.Globals.loading.startLoading("Loading...");
	userProfileImage();
	$.email.setText(u_res.email);
	$.name.setValue(u_res.name);
	$.position.setValue(u_res.position);
	$.mobile.setHintText("Not yet Assign");
	$.mobile.setValue(u_res.mobile);
}

init();

function userProfileImage(){
	var img_blur = mod.createBasicBlurView({
		width:Ti.UI.FILL,
		height:"200%",
		blurRadius:10,
		image: '/images/profile_example.jpg',
		zIndex: '1'
	});

	var img_blurr = $.UI.create("View",{
		classes: ['wfill'],
		height: cell_width*1.2,
		backgroundColor: "#66787878",
		zIndex: "2"
	});
	
	var img_view = $.UI.create("View",{
		classes: ['wfill'],
		height: cell_width*1.2
	});
	
	var chg_icon = $.UI.create("ImageView",{
		width: cell_width*0.3,
		height: cell_width*0.3,
		right: cell_width/2,
		bottom: cell_width*1.2/2/2/2,
		borderRadius: cell_width*0.3/2,
		image: "/images/camera_icon.png",
		zIndex: '4'
	});	
	
	var user_img = $.UI.create("ImageView",{
		height: cell_width,
		width: cell_width,
		borderRadius: cell_width/2,
		image: "/images/profile_example.jpg",
		zIndex: '3'
	});
	
	img_view.add(img_blur);
	img_view.add(img_blurr);
	img_view.add(user_img);
	img_view.add(chg_icon);
	$.user_img.add(img_view);
	Alloy.Globals.loading.stopLoading();	
}

function createMessage(t,e){
	var box = Titanium.UI.createAlertDialog({
		title: t,
		message: e
	});
	box.show();
};

function showEmail(){
	//alert(u_res.email);
	createMessage("Can't edit",u_res.email);
}

function male_chkbox(){
	$.male.image = "/images/checkbox_checked.png";
	$.female.image = "/images/checkbox_unchecked.png";
}

function female_chkbox(){
	$.female.image = "/images/checkbox_checked.png";
	$.male.image = "/images/checkbox_unchecked.png";
}