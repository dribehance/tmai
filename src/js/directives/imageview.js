angular.module('Tmai').directive('imageview', function() {
	return {
		scope:{
			src:"="
		},
		template:function(tElement,tAttrs){
			return "<img ng-src={{src}} class='block full-width' />";
		},
		link:function(scope,elem,attrs){
			var viewport = {
				width:elem.parent().width()
			}
			var style = {
				display:"inline-block",
				overflow:"hidden",
				"vertical-align":"top",
				"text-align":"center",
				width:viewport.width/attrs.grid +"px",
				height:viewport.width/attrs.grid * attrs.rate +"px",
				"background-image":"url('../images/default.png')",
				"background-repeat":"no-repeat",
				"background-position":"center center",
				"background-color":"#c8c8c8"

			}
			elem.children("img").bind("load",function() {

				$(elem).css({"background":"none"})
			})
			elem.css(style)
		}
	}
});