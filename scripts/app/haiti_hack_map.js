(function(){var e,t=function(e,t){return function(){return e.apply(t,arguments)}};e=function(){function e(e){e==null&&(e={}),this.setOptions=t(this.setOptions,this),this.setup=t(this.setup,this),this.setup(e),this.run()}return e.prototype.setup=function(e){return this.setOptions(e),this.addElements(),L.Icon.Default.imagePath=e.imagesPath||"images"},e.prototype.setOptions=function(e){return App.options={categoriesUrl:e.categoriesUrl,extractLocation:e.extractLocation,popupContentsRenderer:e.popupContentsRenderer,popupContentsTemplate:e.popupContentsTemplate,resultsUrl:e.resultsUrl,appUrl:e.appUrl}},e.prototype.addElements=function(){var e,t,n;return $("body").append($("<div/>").attr("id","app")),t="styles/haiti_hack_map.css",n="",App.options.appUrl?n=""+App.options.appUrl+"/"+t:n=t,e=$("<link/>").attr({rel:"stylesheet",href:n}),$("head").append(e)},e.prototype.run=function(){return new App.Router},e}(),window.HaitiHackMap=e}).call(this);