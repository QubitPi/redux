/*! For license information please see 5784.fd002499.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5784],{3277:(n,t,s)=>{s.d(t,{c:()=>r});var e=s(5793);function r({context:n,subscribe:t}){return(s,r)=>{"object"==typeof r?r.addInitializer((function(){new e.s(this,{context:n,callback:n=>{s.set.call(this,n)},subscribe:t})})):s.constructor.addInitializer((s=>{new e.s(s,{context:n,callback:n=>{s[r]=n},subscribe:t})}))}}},4715:(n,t,s)=>{s.d(t,{r:()=>r});var e=s(4676);function r(n){return(0,e.n)({...n,state:!0,attribute:!1})}},5784:(n,t,s)=>{s.r(t),s.d(t,{CanarySearch:()=>x});var e=s(4440),r=s(4715),i=s(1674),a=s(3277),o=s(6468),u=s(9938),c=s(4435),d=s(556),h=s(2208),b=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p=(n,t,s,e)=>{for(var r,i=e>1?void 0:e?l(t,s):t,a=n.length-1;a>=0;a--)(r=n[a])&&(i=(e?r(t,s,i):r(i))||i);return e&&i&&b(t,s,i),i};let x=class extends e.s{constructor(){super(...arguments),this.MODE=c.M,this._containerRef=(0,i.e)()}connectedCallback(){super.connectedCallback(),this.dispatchEvent((0,h.lh)({type:"register_mode",data:this.MODE}))}render(){return this._mode&&this._mode.current===this.MODE?e.x`
          <div class="container" part="container">
            <div class="head" part="head">
              <slot name="head"></slot>
            </div>
            <div
              class="scroll-container"
              ${(0,i.n)(this._containerRef)}
              part="scroll-container"
            >
              <div class="body" part="body">
                <slot name="body"></slot>
              </div>
            </div>
          </div>
        `:e.T}};x.styles=[d.g,d.s,e.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.sticky{position:sticky;}
.static{position:static;}
.flex{display:flex;};
    `,e.i`
      .container {
        display: flex;
        flex-direction: column;
      }

      .head {
        position: sticky;
        top: 0px;
        background-color: var(--canary-color-gray-100);
        z-index: 50;
        padding-left: 12px;
        margin-bottom: 4px;
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
    `],p([(0,a.c)({context:o.pC,subscribe:!0}),(0,r.r)()],x.prototype,"_mode",2),x=p([(0,u.r)("canary-search")],x)},5793:(n,t,s)=>{s.d(t,{s:()=>r});var e=s(699);class r{constructor(n,t,s,e){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,t)),this.unsubscribe=t},this.host=n,void 0!==t.context){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=s,this.subscribe=e??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new e.s(this.context,this.t,this.subscribe))}}}}]);