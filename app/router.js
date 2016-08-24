import * as ngRouter from '@angular/router-deprecated';

import { application } from './app';
import { NAVIGATIONS } from './models/navigation.model';

ngRouter.RouteConfig(_initRoute())(application);

function _initRoute(){
  var _configs = [];

  NAVIGATIONS.forEach(function(navigation){
    // if(navigation.useAsDefault){
    //   _configs.push({
    //     path: '/',
    //     redirectTo: '/blog'
    //   });
    // }
    _configs.push(_createRoute(navigation));
  });

  return _configs;
}

function _createRoute(navigation){
  return {
    path: navigation.useAsDefault ? '/blog' : '/blog' + navigation.path,
    name: navigation.name,
    component: navigation.module,
    useAsDefault: navigation.useAsDefault
  };
}