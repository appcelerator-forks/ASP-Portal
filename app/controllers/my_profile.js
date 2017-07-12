// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var cell_width;
var pwidth = Titanium.Platform.displayCaps.platformWidth;
var user_name = Ti.App.Properties.getString('username');
var email = Ti.App.Properties.getString('email');
var contact = Ti.App.Properties.getString('contact');

if(OS_ANDROID){
	cell_width = Math.floor((pixelToDp(pwidth) / 2)) - 2;
}else{
	cell_width = Math.floor(pwidth / 2) - 2;
}

console.log(cell_width);
$.img.setBorderRadius(((cell_width / 2) - 10));
$.img.setWidth((cell_width - 20));

function pixelToDp(px) {
    return ( parseInt(px) / (Titanium.Platform.displayCaps.dpi / 160));
}

function init(){
	for(var i = 0;i<10;i++){
		render_post();		
	}
	// $.user_name.setText(user_name);
	// $.user_email.setText(email);
	// $.user_contact.setText(contact);
}

init();	

function render_post(){
	var container = $.UI.create("View",{classes:['view_class','vert','padding'],left:"0",right:"0",backgroundColor:"#fff"});
	var title_container = $.UI.create('View',{classes:['wfill','horz'],height:68});
	var user_img = $.UI.create("ImageView",{classes:['padding'],width:45,height:45,image:"/images/user.png"});
	var title_child_container = $.UI.create("View",{classes:['wfill','hfill','padding'],left:0});
	var username = $.UI.create("Label",{classes:['wsize','hsize','h4','bold'],text:"Name",left:"0",top:"0"});
	var time = $.UI.create("Label",{classes:['wsize','hsize','h5','grey'],left:"0",bottom:0,text:"50 minutes ago"});
	var more_container = $.UI.create("View",{classes:['hfill'],width:"30",right:"0"});
	var more = $.UI.create("ImageView",{right:"0",top:"0",image:'/images/btn-down.png'});
	var description = $.UI.create("Label",{classes:['wfill','hsize','padding'],top:"0",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."});
	var image_container = $.UI.create("ScrollableView",{classes:['wfill','padding'],height:250,backgroundColor:"#000",top:"0",scrollingEnabled:true});
	var small_image_container = $.UI.create("View",{classes:['wfill','hsize']});
	var small_image_container1 = $.UI.create("View",{classes:['wfill','hsize']});
	var image = $.UI.create("ImageView",{classes:['wfill','hsize'],image:"/images/image_example.png"});
	var image1 = $.UI.create("ImageView",{classes:['wfill','hsize'],image:"/images/image_example1.png"});
	var hr = $.UI.create("View",{classes:['hr']});
	var comment_container = $.UI.create("View",{classes:['wfill','hsize','padding']});
	var comment_count = $.UI.create("Label",{classes:['wsize','hsize','h6'],color:"#90949C",text:"10 comments",left:"0"});
	var comment_button_container = $.UI.create("View",{classes:['wsize','hsize','horz'],right:0});
	var comment_img = $.UI.create("ImageView",{image:"/images/comment.png"});
	var comment_button = $.UI.create("Label",{classes:['wsize','hsize','h6'],color:"#90949C",text:"Comment"});
	container.add(title_container);
	container.add(description);
	container.add(image_container);
	container.add(hr);
	container.add(comment_container);
	comment_container.add(comment_count);
	comment_container.add(comment_button_container);
	comment_button_container.add(comment_img);
	comment_button_container.add(comment_button);
	image_container.addView(small_image_container);
	image_container.addView(small_image_container1);
	small_image_container.add(image);
	small_image_container1.add(image1);
	title_container.add(user_img);
	title_child_container.add(username);
	title_child_container.add(time);
	more_container.add(more);
	title_child_container.add(more_container);
	title_container.add(title_child_container);
	$.mother_view.add(container);
	description.addEventListener("click",function(e){
		addPage("post_detail","Post Detail");
	});
	more_container.addEventListener("click",function(e){
		alert("asdf");
	});
	comment_button_container.addEventListener("click",function(e){
		addPage("post_comment","Post Comment");
	});
}