/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{createThemedClasses as o,getClassList as t}from"./chunk1.js";import{BACKDROP as s,dismiss as i,eventMethod as n,present as a,createOverlay as r,dismissOverlay as l,getTopOverlay as d,removeLastOverlay as m}from"./chunk2.js";import{attachComponent as c,detachComponent as p}from"./chunk7.js";function h(e,o){const t=new e,s=new e;s.addElement(o.querySelector("ion-backdrop"));const i=new e;return i.addElement(o.querySelector(".modal-wrapper")),i.beforeStyles({opacity:1}).fromTo("translateY","100%","0%"),s.fromTo("opacity",.01,.4),Promise.resolve(t.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").add(s).add(i))}function u(e,o){const t=new e,s=new e;s.addElement(o.querySelector("ion-backdrop"));const i=new e,n=o.querySelector(".modal-wrapper");i.addElement(n);const a=n.getBoundingClientRect();return i.beforeStyles({opacity:1}).fromTo("translateY","0%",`${window.innerHeight-a.top}px`),s.fromTo("opacity",.4,0),Promise.resolve(t.addElement(o).easing("ease-out").duration(250).add(s).add(i))}function y(e,o){const t=new e,s=new e;s.addElement(o.querySelector("ion-backdrop"));const i=new e;return i.addElement(o.querySelector(".modal-wrapper")),i.fromTo("opacity",.01,1).fromTo("translateY","40px","0px"),s.fromTo("opacity",.01,.4),Promise.resolve(t.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").add(s).add(i))}function b(e,o){const t=new e,s=new e;s.addElement(o.querySelector("ion-backdrop"));const i=new e,n=o.querySelector(".modal-wrapper");return i.addElement(n),i.fromTo("opacity",.99,0).fromTo("translateY","0px","40px"),s.fromTo("opacity",.4,0),Promise.resolve(t.addElement(o).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).add(s).add(i))}class w{constructor(){this.presented=!1,this.keyboardClose=!0,this.enableBackdropDismiss=!0,this.showBackdrop=!0,this.willAnimate=!0}componentDidLoad(){this.ionModalDidLoad.emit()}componentDidUnload(){this.ionModalDidUnload.emit()}onDismiss(e){e.stopPropagation(),e.preventDefault(),this.dismiss()}onBackdropTap(){this.dismiss(null,s)}lifecycle(e){const o=this.usersElement,t=D[e.type];if(o&&t){const s=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(s)}}async present(){if(this.presented)return Promise.resolve();const e=this.el.querySelector(".modal-wrapper"),o=Object.assign({},this.componentProps,{modal:this.el}),s=[...t(this.cssClass),"ion-page"];return this.usersElement=await c(this.delegate,e,this.component,s,o),a(this,"modalEnter",h,y)}async dismiss(e,o){await i(this,e,o,"modalLeave",u,b),await p(this.delegate,this.usersElement)}onDidDismiss(e){return n(this.el,"ionModalDidDismiss",e)}onWillDismiss(e){return n(this.el,"ionModalWillDismiss",e)}hostData(){return{"no-router":!0,style:{zIndex:2e4+this.overlayId}}}render(){const t=o(this.mode,this.color,"modal-wrapper");return[e("ion-backdrop",{visible:this.showBackdrop,tappable:this.enableBackdropDismiss}),e("div",{role:"dialog",class:t})]}static get is(){return"ion-modal"}static get host(){return{theme:"modal"}}static get properties(){return{animationCtrl:{connect:"ion-animation-controller"},color:{type:String,attr:"color"},component:{type:"Any",attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:"Any",attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:"Any",attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},willAnimate:{type:Boolean,attr:"will-animate"}}}static get events(){return[{name:"ionModalDidLoad",method:"ionModalDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidUnload",method:"ionModalDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-modal{left:0;right:0;top:0;bottom:0;position:absolute;display:block;contain:strict}ion-modal-controller{display:none}\@media not all and (min-width:768px) and (min-height:600px){ion-modal ion-backdrop{display:none}}.modal-wrapper{z-index:10;height:100%;contain:strict}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper{left:calc(50% - (600px/2));top:calc(50% - (500px/2));position:absolute;width:600px;height:500px}}\@media only screen and (min-width:768px) and (min-height:768px){.modal-wrapper{left:calc(50% - (600px/2));top:calc(50% - (600px/2));position:absolute;width:600px;height:600px}}.modal-wrapper-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper-md{border-radius:2px;overflow:hidden;-webkit-box-shadow:0 28px 48px rgba(0,0,0,.4);box-shadow:0 28px 48px rgba(0,0,0,.4)}}"}static get styleMode(){return"md"}}const D={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillDismiss",ionModalDidDismiss:"ionViewDidDismiss"};class g{constructor(){this.modals=new Map}modalWillPresent(e){this.modals.set(e.target.overlayId,e.target)}modalWillDismiss(e){this.modals.delete(e.target.overlayId)}escapeKeyUp(){m(this.modals)}create(e){return r(document.createElement("ion-modal"),e)}dismiss(e,o,t=-1){return l(e,o,this.modals,t)}getTop(){return d(this.modals)}static get is(){return"ion-modal-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},getTop:{method:!0}}}}export{w as IonModal,g as IonModalController};