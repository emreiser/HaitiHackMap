(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};App.Collections.Pois=function(t){function r(){return this.grab=e(this.grab,this),r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype.model=App.Models.Poi,r.prototype.url=function(){return App.options.resultsUrl||"scripts/results.json"},r.prototype.initialize=function(){return _.defer(this.grab),this},r.prototype.grab=function(){return this.fetch()},r}(Backbone.Collection)}).call(this);