(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};App.Views.OSMResultView=function(t){function r(){return this.handleClick=e(this.handleClick,this),r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype.tagName="li",r.prototype.events={click:"handleClick"},r.prototype.initialize=function(){return this.render(),this},r.prototype.render=function(){var e;return e=this.model.get("display_name"),this.$el.html(e).prop("title",e),this},r.prototype.handleClick=function(e){return App.search.trigger("result:select",this.model)},r}(Backbone.View)}).call(this);