(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.MarkersView = (function(_super) {

    __extends(MarkersView, _super);

    function MarkersView() {
      this.changeMarkers = __bind(this.changeMarkers, this);

      this.addMarkers = __bind(this.addMarkers, this);
      return MarkersView.__super__.constructor.apply(this, arguments);
    }

    MarkersView.prototype.initialize = function(options) {
      this.map = options.map;
      this.children = _([]);
      this.listenTo(this.collection, 'reset', this.addMarkers);
      this.on('filter', this.changeMarkers);
      return this;
    };

    MarkersView.prototype.addMarkers = function() {
      var _this = this;
      return this.collection.each(function(model) {
        return _this.children.push(new App.Views.MarkerView({
          model: model,
          map: _this.map
        }));
      });
    };

    MarkersView.prototype.changeMarkers = function() {
      var _this = this;
      return this.children.each(function(child) {
        var category_names;
        category_names = child.model.get('category_names');
        if (App.filters.hasCategorySelected(category_names)) {
          return child.show();
        } else {
          return child.hide();
        }
      });
    };

    return MarkersView;

  })(Backbone.View);

}).call(this);
