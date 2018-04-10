/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("oaffslat",["exports","./chunk4.js","./chunk3.js"],function(e,t,i){var n=window.Ionic.h,o=function(){function e(){this.activated=!1,this.checked=!1,this.disabled=!1,this.value="on",this.gestureConfig={onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),gestureName:"toggle",passive:!1,gesturePriority:30,type:"pan",direction:"x",threshold:0,attachTo:"parent"}}return e.prototype.componentWillLoad=function(){this.ionStyle=i.deferEvent(this.ionStyle),this.inputId="ion-tg-"+a++,void 0===this.name&&(this.name=this.inputId),this.emitStyle()},e.prototype.componentDidLoad=function(){this.didLoad=!0;var e=this.nativeInput.closest("ion-item");if(e){var t=e.querySelector("ion-label");t&&(t.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",t.id))}},e.prototype.checkedChanged=function(e){this.didLoad&&this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"toggle-disabled":this.disabled,"toggle-checked":this.checked,"toggle-activated":this.activated})},e.prototype.onDragStart=function(e){return this.pivotX=e.currentX,this.activated=!0,e.event.preventDefault(),!0},e.prototype.onDragMove=function(e){var i=e.currentX;c(this.checked,i-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=i,t.hapticSelection())},e.prototype.onDragEnd=function(e){var i=e.currentX-this.pivotX;c(this.checked,i,4)&&(this.checked=!this.checked,t.hapticSelection()),this.activated=!1,this.nativeInput.focus()},e.prototype.onChange=function(){this.checked=!this.checked},e.prototype.onKeyUp=function(){this.keyFocus=!0},e.prototype.onFocus=function(){this.ionFocus.emit()},e.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},e.prototype.hostData=function(){return{class:{"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus}}},e.prototype.render=function(){var e=this;return[n("ion-gesture",Object.assign({},this.gestureConfig,{disabled:this.disabled,tabIndex:-1}),n("div",{class:"toggle-icon"},n("div",{class:"toggle-inner"})),n("div",{class:"toggle-cover"})),n("input",{type:"checkbox",onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),checked:this.checked,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:function(t){return e.nativeInput=t}})]},Object.defineProperty(e,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"toggle"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["emitStyle"]},keyFocus:{state:!0},mode:{type:"Any",attr:"mode"},name:{type:String,attr:"name",mutable:!0},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-toggle{display:inline-block;contain:content;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-toggle ion-gesture{display:block;width:100%;height:100%;visibility:inherit}.toggle-cover{left:0;position:absolute;top:0;width:100%;height:100%;border:0;outline:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;background:0 0;cursor:pointer}ion-toggle input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;pointer-events:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}ion-toggle :focus{outline:0}.toggle-key input{border:2px solid #5e9ed6}.toggle-md{padding:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}.toggle-md .toggle-icon{border-radius:14px;position:relative;display:block;width:100%;height:100%;background-color:rgba(var(--ion-item-md-border-color-rgb,var(--ion-item-border-color-rgb,0,0,0)),.13);-webkit-transition:background-color .3s;transition:background-color .3s;pointer-events:none}.toggle-md .toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;background-color:var(--ion-background-md-color,var(--ion-background-color,#fff));-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;will-change:transform,background-color;contain:strict}.toggle-md.toggle-checked .toggle-icon{background-color:rgba(var(--ion-color-md-primary-rgb,var(--ion-color-primary-rgb,56,128,255)),.5)}.toggle-md.toggle-checked .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-md.item-toggle-disabled ion-label,.toggle-md.toggle-disabled{opacity:.3;pointer-events:none}.toggle-md.toggle-disabled ion-radio{opacity:.3}.item-md .toggle-md[slot]{margin:0;padding:12px 8px 12px 16px;cursor:pointer}.item-md .toggle-md[slot=start]{padding:12px 18px 12px 2px}.item-md.item-toggle ion-label{margin-left:0}.toggle-md-primary.toggle-checked .toggle-icon{background-color:var(--ion-color-md-primary-tint,var(--ion-color-primary-tint,#4c8dff))}.toggle-md-primary.toggle-checked .toggle-inner{background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.toggle-md-secondary.toggle-checked .toggle-icon{background-color:var(--ion-color-md-secondary-tint,var(--ion-color-secondary-tint,#24d6ea))}.toggle-md-secondary.toggle-checked .toggle-inner{background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.toggle-md-tertiary.toggle-checked .toggle-icon{background-color:var(--ion-color-md-tertiary-tint,var(--ion-color-tertiary-tint,#7e57ff))}.toggle-md-tertiary.toggle-checked .toggle-inner{background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.toggle-md-success.toggle-checked .toggle-icon{background-color:var(--ion-color-md-success-tint,var(--ion-color-success-tint,#28e070))}.toggle-md-success.toggle-checked .toggle-inner{background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.toggle-md-warning.toggle-checked .toggle-icon{background-color:var(--ion-color-md-warning-tint,var(--ion-color-warning-tint,#ffd31a))}.toggle-md-warning.toggle-checked .toggle-inner{background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.toggle-md-danger.toggle-checked .toggle-icon{background-color:var(--ion-color-md-danger-tint,var(--ion-color-danger-tint,#f25454))}.toggle-md-danger.toggle-checked .toggle-inner{background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.toggle-md-light.toggle-checked .toggle-icon{background-color:var(--ion-color-md-light-tint,var(--ion-color-light-tint,#f5f6f9))}.toggle-md-light.toggle-checked .toggle-inner{background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.toggle-md-medium.toggle-checked .toggle-icon{background-color:var(--ion-color-md-medium-tint,var(--ion-color-medium-tint,#a2a4ab))}.toggle-md-medium.toggle-checked .toggle-inner{background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.toggle-md-dark.toggle-checked .toggle-icon{background-color:var(--ion-color-md-dark-tint,var(--ion-color-dark-tint,#383a3e))}.toggle-md-dark.toggle-checked .toggle-inner{background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function c(e,t,i){var n="rtl"===document.dir;return e?!n&&i>t||n&&-i<t:!n&&-i<t||n&&i>t}var a=0;e.IonToggle=o,Object.defineProperty(e,"__esModule",{value:!0})});