(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};App.SearchRouter=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.routes={"":"default"},n.prototype.initialize=function(){var e;return e=$("input[name='builtAddress']"),App.search=new App.Views.SimpleSearchView({el:e}),this},n.prototype["default"]=function(){return this},n}(Backbone.Router)}).call(this);