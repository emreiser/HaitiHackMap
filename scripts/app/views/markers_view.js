(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};App.Views.MarkersView=function(t){function r(){return this.changeMarkers=e(this.changeMarkers,this),this.addMarkers=e(this.addMarkers,this),r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype.initialize=function(e){return this.map=e.map,this.children=_([]),this.listenTo(this.collection,"reset",this.addMarkers),this.on("filter",this.changeMarkers),this},r.prototype.addMarkers=function(){var e=this;return this.collection.each(function(t){return e.children.push(new App.Views.MarkerView({model:t,map:e.map}))})},r.prototype.changeMarkers=function(){var e=this;return this.children.each(function(e){var t;return t=e.model.get("category_names"),App.filters.hasCategorySelected(t)?e.show():e.hide()})},r}(Backbone.View)}).call(this);