(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};App.Collections.Categories=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.model=App.Models.Category,n.prototype.url=function(){return App.options.categoriesUrl?App.options.categoriesUrl:"scripts/categories.json"},n.prototype.initialize=function(){return this.fetch(),this},n}(Backbone.Collection)}).call(this);