import {
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseComponent, ngxUtils } from 'ngx-framework/cores';

export var xblogPostComponent = Component({
  selector: 'xblog-post',
  template: "<ngx-card><ngx-card-header><ngx-card-title><a [routerLink]=\"[model.routeLink]\"><p>{{model.title}}</p></a></ngx-card-title><ngx-card-subtitle>Posted on {{model.postedDate}}</ngx-card-subtitle><ngx-card-text><p>{{model.description}}</p></ngx-card-text></ngx-card-header></ngx-card>",
  styles: [":host(.xblog-post){display:block;box-shadow:0 1px 4px 0 rgba(0,0,0,0.14)}:host(.xblog-post) /deep/>.ngx-card{border-radius:0;border:none}:host(.xblog-post) /deep/>.ngx-card ngx-card-title>a{font-weight:800;text-decoration:none;color:#333}:host(.xblog-post) /deep/>.ngx-card ngx-card-title>a:focus,:host(.xblog-post) /deep/>.ngx-card ngx-card-title>a:hover{color:#5cb75c}:host(.xblog-post) /deep/>.ngx-card ngx-card-title>a>p{margin:0;overflow:hidden}:host(.xblog-post) /deep/>.ngx-card ngx-card-subtitle{font-style:italic}:host(.xblog-post) /deep/>.ngx-card ngx-card-text>p{overflow:hidden;max-height:3em}:host(.xblog-post).xblog-post-size-large /deep/ ngx-card-title>a{font-size:1.75rem}:host(.xblog-post).xblog-post-size-large /deep/ ngx-card-title>a>p{white-space:nowrap;text-overflow:ellipsis}:host(.xblog-post).xblog-post-size-large /deep/ ngx-card-subtitle{font-size:.875rem}:host(.xblog-post).xblog-post-size-small /deep/ .ngx-card ngx-card-title{display:flex;align-items:center;height:3em;margin:0}:host(.xblog-post).xblog-post-size-small /deep/ .ngx-card ngx-card-title>a{font-size:1.25rem}:host(.xblog-post).xblog-post-size-small /deep/ .ngx-card ngx-card-subtitle{font-size:.75rem}:host(.xblog-post).xblog-post-size-small /deep/ .ngx-card ngx-card-text>p{font-size:.875rem}"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: [ 'size', 'model' ],
  host: {
    '[class.xblog-post]': 'true'
  }
})
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,

    function (elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ],

  ngOnChanges: function(changeRecord){
    this.validate();

    ngxBaseComponent.prototype.ngOnChanges.apply(this, arguments);
  },

  ngOnInit: function(){
    this.validate();

    ngxBaseComponent.prototype.ngOnInit.apply(this);
  },

  initDefaultValues: function(){
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (ngxUtils.isEmpty(this.size)) {
      this.size = 'large';
      _changeRecord = this.buildChangeRecord(_styleProperties.SIZE, this.size);
     }

     return _changeRecord;
  },

  getPrefixClass: function(){
    return 'xblog-post';
  },

  validate: function(){
    if(ngxUtils.isEmpty(this.model.id)){ throw 'A article must have id'; }

    if(ngxUtils.isEmpty(this.model.title)){ throw 'A article must have title'; }

    if(ngxUtils.isEmpty(this.model.description)){ throw 'A article must have description'; }

    if(ngxUtils.isEmpty(this.model.postedDate)){ throw 'A article must have postedDate'; }
  }
});