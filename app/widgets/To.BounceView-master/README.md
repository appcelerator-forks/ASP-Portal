# To.BounceView
To.BounceView is a bouncing view widget for Titanium. It basically is a `View` wrapper with a resize method that animates vertically and horizontally.


### Example:

![Example gif](http://zippy.gfycat.com/DarlingFairHornet.gif) | ![Another Example](http://zippy.gfycat.com/PortlySpecificBrownbear.gif)

### How to get it
Install through [gitt.io](http://gitt.io/component/To.BounceView)

`$ gittio install To.BounceView`

Or download by downloading the ZIP. 

### Using it?
Are you using this module? Let me know! I want to build a showcase here!

### Implementation

Implementing it is very easy, just add it to the view

```xml
<Window>
    <Widget src="To.BounceView" id="bouncyView" onClick="clickBottom">
        <Label>Awesome</Label>
    </Widget>
</Window>
```

All properties set in the tss will be applied to the view created, and it also supports all subviews as normal.

Resizing the view (horizontally) is also easy, just call the resize method:

```js
// resize to 300x300
$.bouncyView.resize(300,300);
```

By default the speed of the animation is 250ms. That means the total animation will last 500ms. This can be adjusted in the 3rd parameter in the resize function. 50ms would be a good amount for a button press for example

```js
// resize to 300
$.bouncyView.resize(300, 300, 50);
```

When resizing to a size it already is, it will shrink 90% and then go back to 100% again.

An extended example would be a view with a couple of buttons, that animate from behind a single button as often shown.

```xml
<Widget src="To.BounceView" id="buttonsView" onClick="clickButtons">
    <View width="60" height="60" backgroundColor="red" right="0" bottom="0" zIndex="5" onClick="clickButtons" />
    <View width="60" height="60" backgroundColor="yellow" right="0" top="0" zIndex="3" />
    <View width="60" height="60" backgroundColor="green" left="0" top="0" zIndex="3" />
    <View width="60" height="60" backgroundColor="green" left="0" bottom="0" zIndex="3" />
</Widget>
```

And the added function to expand it

```js
var buttonsExpanded = false;
function clickButtons(){
	var size = buttonsExpanded ? 60 : 175;
	$.buttonsView.resize(size,size);
	buttonsExpanded = !buttonsExpanded;
}
```

If you don't want it to bounce, set the 4th parameter to true
```js
$.bouncyView.resize(300, 300, null, true);
```

### Properties

There are several properties that can be added to the BounceView on load, or trough the relevant setter.

- speed
- noBounce
- positiveBounce
- bounceRate
- horizontalBounce
- verticalBounce

All these properties have a setter, and can also be provided in the `tss` in the controller that includes the widget.

### Extra configuration

If you want it to bounce less/more than the default 10%, set it through the `setBounceRate` function
```
// sets the bounce rate to 5%
$.buttonsView.setBounceRate(0.05);
```

When you resize the view to the same size, the default is a button press style, shrink and resize to original size. This can be changed to increase first, then shrink through the `setPositiveBounce` function:
```
// let the view increase size, then shrink
$.buttonsView.setPositiveBounce(true);
```

If you just want to disable bouncing either horizontally or vertically
```
// disable horizontal bouncing
$.buttonsView.setHorizontalBounce(false);

// disable vertical bouncing
$.buttonsView.setVerticalBounce(false);
```

