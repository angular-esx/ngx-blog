import { 
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

export var xblogTableContentComponent = Component({
  selector: 'xblog-table-content',
  template: "<ng-content select=\"xblog-table-content > xblog-title\"></ng-content><ol><li *ngFor=\"let heading of model\"><a href=\"/#{{heading.id}}\">{{heading.name}}</a><ul *ngIf=\"heading.subHeadings.length > 0\"><li *ngFor=\"let subHeading of heading.subHeadings\"><a href=\"/#{{subHeading.id}}\">{{subHeading.name}}</a></li></ul></li></ol>",
  styles: [":host('.xblog-table-content'){display:block}"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: [ 'model' ],
  host: {
    '[class.xblog-table-content]': 'true'
  }
})
.Class({
  constructor: function(){}
});