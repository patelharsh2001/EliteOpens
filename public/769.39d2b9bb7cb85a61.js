"use strict";(self.webpackChunkTournament=self.webpackChunkTournament||[]).push([[769],{5769:(U,p,m)=>{m.r(p),m.d(p,{AdminModule:()=>y});var c=m(9808),i=m(2382),u=m(8118),h=m(7453),t=m(1223),g=m(4551);function f(e,r){if(1&e&&(t.TgZ(0,"div",17),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.errorMessage," ")}}let A=(()=>{class e{constructor(n,o){this.router=n,this.auth=o}ngOnInit(){this.user=new h.n}authenticate(n){n.valid?this.auth.authenticate(this.user).subscribe(o=>{o.success&&(this.auth.storeUserData(o.token,o.user),this.router.navigateByUrl("admin/main"))}):this.errorMessage="Form Data Invalid"}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.F0),t.Y36(g.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:26,vars:3,consts:[[1,"bg-info","p-2","text-center","text-white"],[1,"container"],[1,"row"],[1,"col-md-6","offset-md-3","col-lg-6","offset-lg-3","col-sm-8","offset-sm-1"],["class","bg-danger mt-2 p-2 text-center text-white",4,"ngIf"],["autocomplete","off",3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["for","username"],["type","text","name","username","placeholder","Enter Username","id","username","required","","autofocus","","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],["for","password"],["type","password","name","password","placeholder","Enter Password","id","password","required","","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","text-right"],["type","submit",1,"btn","btn-primary","m-1"],[1,"fas","fa-sign-in-alt"],["routerLink","/home",1,"btn","btn-secondary","m-1"],[1,"fas","fa-undo"],[1,"bg-danger","mt-2","p-2","text-center","text-white"]],template:function(n,o){if(1&n){const l=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"h3"),t._uU(2,"Tennis Tournament Admin"),t.qZA(),t.qZA(),t.TgZ(3,"main",1),t.TgZ(4,"div",2),t.TgZ(5,"div",3),t.YNc(6,f,2,1,"div",4),t.TgZ(7,"h1"),t._uU(8,"Please Login"),t.qZA(),t.TgZ(9,"form",5,6),t.NdJ("ngSubmit",function(){t.CHM(l);const a=t.MAs(10);return o.authenticate(a)}),t.TgZ(11,"fieldset",7),t.TgZ(12,"label",8),t._uU(13,"Username:"),t.qZA(),t.TgZ(14,"input",9),t.NdJ("ngModelChange",function(a){return o.user.username=a}),t.qZA(),t.qZA(),t.TgZ(15,"fieldset",7),t.TgZ(16,"label",10),t._uU(17,"Password:"),t.qZA(),t.TgZ(18,"input",11),t.NdJ("ngModelChange",function(a){return o.user.password=a}),t.qZA(),t.qZA(),t.TgZ(19,"fieldset",12),t.TgZ(20,"button",13),t._UZ(21,"i",14),t._uU(22," Log In "),t.qZA(),t.TgZ(23,"button",15),t._UZ(24,"i",16),t._uU(25," Cancel "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}2&n&&(t.xp6(6),t.Q6J("ngIf",null!=o.errorMessage),t.xp6(8),t.Q6J("ngModel",o.user.username),t.xp6(4),t.Q6J("ngModel",o.user.password))},directives:[c.O5,i._Y,i.JL,i.F,i.Fj,i.Q7,i.JJ,i.On,u.rH],encapsulation:2}),e})(),d=(()=>{class e{constructor(n,o){this.router=n,this.auth=o}canActivate(n,o){return this.auth.authenticated?(console.log("authenticated"),!0):(console.log("cannot authenticate"),this.router.navigate(["/admin/auth"]),!1)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(u.F0),t.LFG(g.e))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),_=(()=>{class e{constructor(n,o){this.auth=n,this.router=o}logout(){this.auth.logout(),this.router.navigateByUrl("/")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.e),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:8,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"row","mt-2"],[1,"col-3"],["routerLink","/admin/main/tournaments","routerLinkActive","active",1,"btn","btn-outline-info","btn-block"],[1,"col-9"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"button",4),t._uU(5," Tournaments "),t.qZA(),t.TgZ(6,"div",5),t._UZ(7,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[u.rH,u.Od,u.lC],encapsulation:2}),e})();var b=m(1625),T=m(1633);let Z=(()=>{class e{constructor(n,o,l){this.repository=n,this.router=o,this.editing=!1,this.tournament=new b.f,this.editing="edit"===l.snapshot.params.mode,this.editing&&Object.assign(this.tournament,n.getTournament(l.snapshot.params.id))}ngOnInit(){}save(n){this.repository.saveTournament(this.tournament),this.router.navigateByUrl("/admin/main/tournaments")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(T.z),t.Y36(u.F0),t.Y36(u.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:27,vars:15,consts:[[1,"bg-primary","p-2","text-white","bg-dark"],["novalidate","",3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["type","text","name","name",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","location",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","entryfee",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","startdate",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","m-1"],["type","reset","routerLink","/admin/main/tournaments",1,"btn","btn-secondary"],[1,"fas","fa-undo"]],template:function(n,o){if(1&n){const l=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"h5"),t._uU(2),t.qZA(),t.qZA(),t.TgZ(3,"form",1,2),t.NdJ("ngSubmit",function(){t.CHM(l);const a=t.MAs(4);return o.save(a)}),t.TgZ(5,"div",3),t.TgZ(6,"label"),t._uU(7,"Name"),t.qZA(),t.TgZ(8,"input",4),t.NdJ("ngModelChange",function(a){return o.tournament.name=a}),t.qZA(),t.qZA(),t.TgZ(9,"div",3),t.TgZ(10,"label"),t._uU(11,"Location"),t.qZA(),t.TgZ(12,"input",5),t.NdJ("ngModelChange",function(a){return o.tournament.location=a}),t.qZA(),t.qZA(),t.TgZ(13,"div",3),t.TgZ(14,"label"),t._uU(15,"Entry Fee"),t.qZA(),t.TgZ(16,"input",6),t.NdJ("ngModelChange",function(a){return o.tournament.entryFee=a}),t.qZA(),t.qZA(),t.TgZ(17,"div",3),t.TgZ(18,"label"),t._uU(19,"Start Date"),t.qZA(),t.TgZ(20,"input",7),t.NdJ("ngModelChange",function(a){return o.tournament.startDate=a}),t.qZA(),t.qZA(),t.TgZ(21,"button",8),t._UZ(22,"i"),t._uU(23),t.qZA(),t.TgZ(24,"button",9),t._UZ(25,"i",10),t._uU(26," Cancel "),t.qZA(),t.qZA()}2&n&&(t.ekj("bg-warning",o.editing)("text-dark",o.editing),t.xp6(2),t.hij("",o.editing?"Edit":"Add"," Tournament"),t.xp6(6),t.Q6J("ngModel",o.tournament.name),t.xp6(4),t.Q6J("ngModel",o.tournament.location),t.xp6(4),t.Q6J("ngModel",o.tournament.entryFee),t.xp6(4),t.Q6J("ngModel",o.tournament.startDate),t.xp6(1),t.ekj("btn-warning",o.editing),t.xp6(1),t.Tol(o.editing?"fas fa-save":"fas fa-plus-circle"),t.xp6(1),t.hij(" ",o.editing?"Save":"Add"," "))},directives:[i._Y,i.JL,i.F,i.Fj,i.JJ,i.On,u.rH],encapsulation:2}),e})();function C(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"td"),t.TgZ(11,"button",4),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw().editTournament(s._id)}),t._UZ(12,"i",5),t._uU(13," Edit "),t.qZA(),t.qZA(),t.TgZ(14,"td"),t.TgZ(15,"button",6),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw().deleteTournament(s._id)}),t._UZ(16,"i",7),t._uU(17," Delete "),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=r.$implicit;t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(n.location),t.xp6(2),t.Oqu(n.startDate),t.xp6(2),t.Oqu(t.gM2(9,4,n.entryFee,"USD","symbol","2.2-2"))}}const q=u.Bz.forChild([{path:"auth",component:A},{path:"main",component:_,canActivate:[d],children:[{path:"tournaments/:mode/:id",component:Z,data:{title:"Edit Tournament"},canActivate:[d]},{path:"tournaments/:mode",component:Z,data:{title:"Add Tournament"},canActivate:[d]},{path:"tournaments",component:(()=>{class e{constructor(n,o){this.repository=n,this.router=o}ngOnInit(){}getTournaments(){return this.repository.getTournaments()}deleteTournament(n){confirm("Are you sure?")&&null!==n?this.repository.deleteTournament(n):(window.location.reload(),this.router.navigateByUrl("/admin/main/tournaments"))}addTournament(){this.router.navigateByUrl("/admin/main/tournaments/add")}editTournament(n){this.router.navigateByUrl("/admin/main/tournaments/edit/"+n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(T.z),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:18,vars:1,consts:[[1,"table","table-sm","table-striped"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"click"],[1,"fas","fa-plus-circle"],[1,"btn","btn-sm","btn-primary","m-1",3,"click"],[1,"fas","fa-pencil-alt"],[1,"btn","btn-sm","btn-danger","m-1",3,"click"],[1,"fas","fa-trash-alt"]],template:function(n,o){1&n&&(t.TgZ(0,"table",0),t.TgZ(1,"thead"),t.TgZ(2,"tr"),t.TgZ(3,"th"),t._uU(4,"Name"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Location"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Entry Fee"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Start Date"),t.qZA(),t._UZ(11,"th"),t._UZ(12,"th"),t.qZA(),t.qZA(),t.TgZ(13,"tbody"),t.YNc(14,C,18,9,"tr",1),t.qZA(),t.qZA(),t.TgZ(15,"button",2),t.NdJ("click",function(){return o.addTournament()}),t._UZ(16,"i",3),t._uU(17," Add New Tournament "),t.qZA()),2&n&&(t.xp6(14),t.Q6J("ngForOf",o.getTournaments()))},directives:[c.sg],pipes:[c.H9],encapsulation:2}),e})(),data:{title:"Tournament Table"},canActivate:[d]},{path:"**",redirectTo:"list"}]},{path:"**",redirectTo:"auth"}]);let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[d],imports:[[c.ez,i.u5,q]]}),e})()}}]);