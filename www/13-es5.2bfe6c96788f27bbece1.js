!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var c=n[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function e(t,e,c){return e&&n(t.prototype,e),c&&n(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7wo0":function(n,c,i){"use strict";i.r(c),i.d(c,"SettingsModule",(function(){return P}));var r=i("M0ag"),a=i("tyNb"),o=i("ey9i"),s=i("H+bZ"),l=i("ntpF"),b=i("fXoL"),u=i("1kSV"),d=i("3Pt+"),f=i("5eHb"),m=i("sYmb"),g=i("ofXK"),v=i("ZOsW");function p(t,n){if(1&t&&(b.Tb(0,"div",4),b.Lc(1,"\n    "),b.Ob(2,"label",5),b.Lc(3,"\n    "),b.Tb(4,"div",6),b.Lc(5,"\n      "),b.Ob(6,"input",7),b.Lc(7,"\n    "),b.Sb(),b.Lc(8,"\n  "),b.Sb()),2&t){var e=b.ic(2);b.Ab(2),b.pc("translate",e.setting.Name)}}function L(t,n){if(1&t&&(b.Tb(0,"div",4),b.Lc(1,"\n    "),b.Ob(2,"label",5),b.Lc(3,"\n    "),b.Tb(4,"div",6),b.Lc(5,"\n      "),b.Ob(6,"input",7),b.Lc(7,"\n    "),b.Sb(),b.Lc(8,"\n  "),b.Sb()),2&t){var e=b.ic(2);b.Ab(2),b.pc("translate",e.setting.Name)}}function h(t,n){if(1&t&&(b.Tb(0,"div",4),b.Lc(1,"\n    "),b.Ob(2,"label",5),b.Lc(3,"\n    "),b.Tb(4,"div",6),b.Lc(5,"\n      "),b.Ob(6,"input",8),b.Lc(7,"\n    "),b.Sb(),b.Lc(8,"\n  "),b.Sb()),2&t){var e=b.ic(2);b.Ab(2),b.pc("translate",e.setting.Name)}}function S(t,n){if(1&t&&(b.Tb(0,"div",4),b.Lc(1,"\n    "),b.Ob(2,"label",5),b.Lc(3,"\n    "),b.Tb(4,"div",6),b.Lc(5,"\n      "),b.Ob(6,"input",9),b.Lc(7,"\n    "),b.Sb(),b.Lc(8,"\n  "),b.Sb()),2&t){var e=b.ic(2);b.Ab(2),b.pc("translate",e.setting.Name)}}function T(t,n){if(1&t&&(b.Tb(0,"div",4),b.Lc(1,"\n    "),b.Ob(2,"label",5),b.Lc(3,"\n    "),b.Tb(4,"div",6),b.Lc(5,"\n      "),b.Tb(6,"ng-select",10),b.Lc(7,"\n      "),b.Sb(),b.Lc(8,"\n    "),b.Sb(),b.Lc(9,"\n  "),b.Sb()),2&t){var e=b.ic(2);b.Ab(2),b.pc("translate",e.setting.Name),b.Ab(4),b.oc("items",e.list)("closeOnSelect",!0)}}function y(t,n){if(1&t&&(b.Tb(0,"div",11),b.Lc(1,"\n    "),b.Ob(2,"input",12),b.Lc(3,"\n    "),b.Ob(4,"label",13),b.Lc(5,"\n  "),b.Sb()),2&t){var e=b.ic(2);b.Ab(2),b.pc("id",e.setting.Name),b.Ab(2),b.pc("for",e.setting.Name),b.pc("translate",e.setting.Name)}}function O(t,n){if(1&t&&(b.Tb(0,"div",1),b.Lc(1,"\n  "),b.Jc(2,p,9,1,"div",2),b.Lc(3,"\n  "),b.Jc(4,L,9,1,"div",2),b.Lc(5,"\n  "),b.Jc(6,h,9,1,"div",2),b.Lc(7,"\n  "),b.Jc(8,S,9,1,"div",2),b.Lc(9,"\n  "),b.Jc(10,T,10,3,"div",2),b.Lc(11,"\n  "),b.Jc(12,y,6,3,"div",3),b.Lc(13,"\n"),b.Sb()),2&t){var e=b.ic();b.oc("formGroupName",e.setting.Name),b.Ab(2),b.oc("ngIf","str"===e.setting.DataType),b.Ab(2),b.oc("ngIf","path"===e.setting.DataType),b.Ab(2),b.oc("ngIf","int"===e.setting.DataType),b.Ab(2),b.oc("ngIf","hex"===e.setting.DataType),b.Ab(2),b.oc("ngIf","list"===e.setting.DataType),b.Ab(2),b.oc("ngIf","bool"===e.setting.DataType)}}new o.c("SettingComponent");var k,w=((k=function(){function n(e,c,i){t(this,n),this.formBuilder=e,this.fgd=c,this.translate=i,this.list=[]}return e(n,[{key:"ngOnInit",value:function(){var t,n=this;"hex"===this.setting.DataType?t=this.formBuilder.group({current:["",d.q.compose([d.q.required,d.q.pattern("^[0-9A-Fa-f]+")])]}):"bool"===this.setting.DataType?t=this.formBuilder.group({current:[]}):"list"===this.setting.DataType?(t=this.formBuilder.group({current:[null,d.q.required]}),this.list=[],this.setting.list.forEach((function(t){var e=Object.keys(t)[0],c=Object.values(t)[0];n.list.push({label:e,value:c})}))):t=this.formBuilder.group({current:["",d.q.required]}),this.fgd.form.addControl(this.setting.Name,t);var e=""!==this.setting.current_value?this.setting.current_value:this.setting.default_value;this.fgd.form.get(this.setting.Name).get("current").patchValue(e)}}]),n}()).\u0275fac=function(t){return new(t||k)(b.Nb(d.d),b.Nb(d.f),b.Nb(m.d))},k.\u0275cmp=b.Hb({type:k,selectors:[["app-setting"]],inputs:{setting:"setting",advanced:"advanced"},features:[b.zb([],[{provide:d.b,useExisting:d.f}])],decls:2,vars:1,consts:[[3,"formGroupName",4,"ngIf"],[3,"formGroupName"],["class","form-group row mt-2",4,"ngIf"],["class","row mt-2 custom-control custom-checkbox",4,"ngIf"],[1,"form-group","row","mt-2"],["for","current",1,"col-sm-6","col-form-label",3,"translate"],[1,"col-sm"],["type","text","formControlName","current",1,"w-100","form-control"],["type","number","formControlName","current",1,"w-50","form-control"],["type","text","formControlName","current",1,"w-50","form-control"],["bindLabel","label","bindValue","value","formControlName","current",3,"items","closeOnSelect"],[1,"row","mt-2","custom-control","custom-checkbox"],["formControlName","current","type","checkbox",1,"custom-control-input","form-control",3,"id"],[1,"ml-3","custom-control-label",3,"for","translate"]],template:function(t,n){1&t&&(b.Jc(0,O,14,7,"div",0),b.Lc(1,"\n")),2&t&&b.oc("ngIf",!1===n.setting.Advanced||n.advanced===n.setting.Advanced)},directives:[g.n,d.l,d.g,m.a,d.c,d.k,d.e,d.o,v.a,d.a],styles:[".custom-control-input.is-valid[_ngcontent-%COMP%] ~ .custom-control-label[_ngcontent-%COMP%], was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid ~ .custom-control-label[_ngcontent-%COMP%]{color:#000}"]}),k),N=["content"];function A(t,n){if(1&t&&(b.Rb(0),b.Lc(1,"\n                  "),b.Ob(2,"app-setting",24),b.Lc(3,"\n                "),b.Qb()),2&t){var e=n.$implicit,c=b.ic(4);b.Ab(2),b.oc("setting",e)("advanced",c.advanced)}}function C(t,n){if(1&t&&(b.Tb(0,"div",18),b.Lc(1,"\n            "),b.Ob(2,"div",19),b.Lc(3,"\n            "),b.Tb(4,"div",20),b.Lc(5,"\n              "),b.Tb(6,"div",21),b.Lc(7,"\n                "),b.Ob(8,"h5",22),b.Lc(9,"\n              "),b.Sb(),b.Lc(10,"\n              "),b.Tb(11,"div",23),b.Lc(12,"\n                "),b.Jc(13,A,4,2,"ng-container",12),b.Lc(14,"\n              "),b.Sb(),b.Lc(15,"\n            "),b.Sb(),b.Lc(16,"\n          "),b.Sb()),2&t){var e=b.ic().$implicit;b.Ab(2),b.qc("translate","setting.header.",e._Theme,""),b.Ab(6),b.qc("translate","setting.subtitle.",e._Theme,""),b.Ab(5),b.oc("ngForOf",e.ListOfSettings)}}function I(t,n){if(1&t&&(b.Tb(0,"div"),b.Lc(1,"\n          "),b.Jc(2,C,17,3,"div",17),b.Lc(3,"\n        "),b.Sb()),2&t){var e=n.$implicit,c=b.ic(2);b.Ab(2),b.oc("ngIf",c.hasBasicSettings(e.ListOfSettings))}}function _(t,n){if(1&t){var e=b.Ub();b.Tb(0,"form",9),b.Lc(1,"\n    "),b.Tb(2,"div",10),b.Lc(3,"\n      "),b.Tb(4,"div",11),b.Lc(5,"\n        "),b.Jc(6,I,4,1,"div",12),b.Lc(7,"\n      "),b.Sb(),b.Lc(8,"\n      "),b.Tb(9,"div",13),b.Lc(10,"\n        "),b.Tb(11,"button",14),b.ec("click",(function(){return b.Bc(e),b.ic().updateSettings()})),b.Sb(),b.Lc(12,"\n      "),b.Sb(),b.Lc(13,"\n    "),b.Sb(),b.Lc(14,"\n\n    "),b.Tb(15,"div",10),b.Lc(16,"\n      "),b.Ob(17,"div",15),b.Lc(18,"\n      "),b.Tb(19,"div",13),b.Lc(20,"\n        "),b.Tb(21,"button",16),b.ec("click",(function(){return b.Bc(e),b.ic().updateSettings()})),b.Sb(),b.Lc(22,"\n      "),b.Sb(),b.Lc(23,"\n    "),b.Sb(),b.Lc(24,"\n  "),b.Sb()}if(2&t){var c=b.ic();b.oc("formGroup",c.form),b.Ab(6),b.oc("ngForOf",c.settings),b.Ab(5),b.oc("disabled",!c.form.valid),b.Ab(10),b.oc("disabled",!c.form.valid)}}function J(t,n){1&t&&(b.Lc(0,"\n  "),b.Tb(1,"div",25),b.Lc(2,"\n    "),b.Ob(3,"h4",26),b.Lc(4,"\n    "),b.Tb(5,"button",27),b.ec("click",(function(){return n.$implicit.dismiss("Cross click")})),b.Lc(6,"\n      "),b.Tb(7,"span",28),b.Lc(8,"\xd7"),b.Sb(),b.Lc(9,"\n    "),b.Sb(),b.Lc(10,"\n  "),b.Sb(),b.Lc(11,"\n  "),b.Ob(12,"div",29),b.Lc(13,"\n  "),b.Tb(14,"div",30),b.Lc(15,"\n    "),b.Tb(16,"button",31),b.ec("click",(function(){return n.$implicit.dismiss("cancel")})),b.Sb(),b.Lc(17,"\n  "),b.Sb(),b.Lc(18,"\n"))}new o.c("SettingsComponent");var B,x,q,D=[{path:"",component:(B=function(){function n(e,c,i,r,a,o){t(this,n),this.modalService=e,this.apiService=c,this.formBuilder=i,this.toastr=r,this.headerService=a,this.translate=o,this.advanced=!1}return e(n,[{key:"ngOnInit",value:function(){var t=this;this.form=this.formBuilder.group({}),this.apiService.getSettings().subscribe((function(n){t.settings=n,t.settings.sort((function(t,n){return t._Order-n._Order}))}))}},{key:"advancedSettings",value:function(t){this.advanced=!!t.currentTarget.checked}},{key:"updateSettings",value:function(){var t=this;this.form.invalid?this.form.markAsTouched():(Object.keys(this.form.value).forEach((function(n){!0===t.form.value[n].current?t.form.value[n].current=1:!1===t.form.value[n].current&&(t.form.value[n].current=0)})),this.apiService.putSettings(this.form.value).subscribe((function(n){t.form.markAsPristine(),t.toastr.success(t.translate.instant("api.global.succes.update.title")),t.apiService.getSettings().subscribe((function(n){t.settings=n,t.settings.sort((function(t,n){return t._Order-n._Order}))})),t.apiService.getRestartNeeded().subscribe((function(n){n.RestartNeeded&&!0===n.RestartNeeded&&(t.headerService.setRestart(!0),t.open(t.content))}))})))}},{key:"open",value:function(t){this.modalService.open(t,{ariaLabelledBy:"modal-basic-title"}).result.then((function(t){}),(function(t){}))}},{key:"hasBasicSettings",value:function(t){return!!this.advanced||t.filter((function(t){return!1===t.Advanced})).length>0}}]),n}(),B.\u0275fac=function(t){return new(t||B)(b.Nb(u.e),b.Nb(s.a),b.Nb(d.d),b.Nb(f.b),b.Nb(l.a),b.Nb(m.d))},B.\u0275cmp=b.Hb({type:B,selectors:[["app-settings"]],viewQuery:function(t,n){var e;1&t&&b.Rc(N,!0),2&t&&b.xc(e=b.fc())&&(n.content=e.first)},decls:22,vars:2,consts:[[1,"h-100"],[1,"switch","switch-sm","mr-2","pr-2","float-right"],["type","checkbox","id","switch-advanced",1,"switch",3,"checked","click"],["for","switch-advanced","translate","setting.advanced.button",1,"mb-0"],["translate","setting.help.legend"],["href","https://github.com/pipiche38/Domoticz-Zigate-Wiki/blob/master/en-eng/PluginConf.json.md","translate","setting.help.link","target","_blank"],[1,"mt-3"],[3,"formGroup",4,"ngIf"],["content",""],[3,"formGroup"],[1,"row"],[1,"col-sm-11","card-columns"],[4,"ngFor","ngForOf"],[1,"col-sm-1"],["translate","setting.validate.button",1,"w-100","btn","btn-primary",3,"disabled","click"],[1,"col-sm"],["translate","setting.validate.button",1,"btn","btn-primary","w-100",3,"disabled","click"],["class","card",4,"ngIf"],[1,"card"],[1,"card-header",3,"translate"],[1,"card-body"],[1,"card-title"],[3,"translate"],[1,"card-text"],[3,"setting","advanced"],[1,"modal-header"],["id","modal-basic-title","translate","setting.reloadplugin.alert.title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["translate","setting.reloadplugin.alert.subject",1,"modal-body"],[1,"modal-footer"],["type","button","translate","setting.reloadplugin.alert.cancel",1,"btn","btn-outline-dark",3,"click"]],template:function(t,n){1&t&&(b.Tb(0,"fieldset",0),b.Lc(1,"\n  "),b.Tb(2,"div",1),b.Lc(3,"\n    "),b.Tb(4,"input",2),b.ec("click",(function(t){return n.advancedSettings(t)})),b.Sb(),b.Lc(5,"\n    "),b.Ob(6,"label",3),b.Lc(7,"\n  "),b.Sb(),b.Lc(8,"\n\n  "),b.Ob(9,"legend",4),b.Lc(10,"\n  "),b.Ob(11,"a",5),b.Lc(12,"\n"),b.Sb(),b.Lc(13,"\n"),b.Tb(14,"div",6),b.Lc(15,"\n  "),b.Jc(16,_,25,4,"form",7),b.Lc(17,"\n"),b.Sb(),b.Lc(18,"\n\n"),b.Jc(19,J,19,0,"ng-template",null,8,b.Kc),b.Lc(21,"\n")),2&t&&(b.Ab(4),b.oc("checked",n.advanced),b.Ab(12),b.oc("ngIf",n.settings))},directives:[m.a,g.n,d.s,d.l,d.f,g.m,w],styles:[""]}),B),data:{title:Object(o.d)("settings")}}],j=((q=function n(){t(this,n)}).\u0275mod=b.Lb({type:q}),q.\u0275inj=b.Kb({factory:function(t){return new(t||q)},providers:[],imports:[[a.i.forChild(D)],a.i]}),q),P=((x=function n(){t(this,n)}).\u0275mod=b.Lb({type:x}),x.\u0275inj=b.Kb({factory:function(t){return new(t||x)},imports:[[j,r.a]]}),x)}}])}();