import * as ngCore from '@angular/core';

import { ngxUtils } from 'ngx-bootstrap/cores';
import { NGX_NAVBAR_DIRECTIVES } from 'ngx-bootstrap/components';

function _navbarComponent(){
  this.constructor = function navbarComponent(){};
}

export var navbarComponent = ngCore.Component({
  selector: 'xblog-navbar',
  template: "<ngx-navbar color=\"success\" position=\"top\"><div ngx-navbar-brand>$ngx</div></ngx-navbar>",
  directives: [ NGX_NAVBAR_DIRECTIVES ],
  host: {
    '[class.xblog-navbar]': 'true'
  }
})
.Class(new _navbarComponent());