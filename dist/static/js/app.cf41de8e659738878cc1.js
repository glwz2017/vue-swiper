webpackJsonp([0],{"5x62":function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("VCXJ"),n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var h=s("Mw9A")({name:"app"},n,!1,function(t){s("5x62")},null,null).exports,r=s("zO6J"),o={data:()=>({slidesLength:1,_width:0,auto:!0,slideing:!0,timer1:"",dom:{},t:{sx:0,s:0,m:0,e:0},index:1}),props:{autoPlay:{default:!0},duration:{default:500},interval:{default:2500},showIndicator:{default:!0}},mounted(){this.starDom(),this.dom.transform=`translate3d(${-1*this._width}px, 0px, 0px)`,this.autoPlay&&this.setTime()},methods:{s(t){this.slideing&&(this.auto=!1,window.clearTimeout(this.timer1),this.t.sx=this.getTransform(),this.t.s=t.touches[t.touches.length-1].clientX)},m(t){this.slideing&&-1!=this.t.s&&(this.auto=!1,window.clearTimeout(this.timer1),this.dom=this.dom,this.t.m=t.touches[t.touches.length-1].clientX-this.t.s,this.setTransform(this.t.m+this.t.sx))},e(t){if(this.slideing&&-1!=this.t.s){this.auto=!1,window.clearTimeout(this.timer1),this.setTransform(this.t.m+this.t.sx);t=this.getTransform();t+=this.t.m>0?.2*this._width:-.2*this._width,this.index=-1*Math.round(t/this._width),this.wh("touch")}},setTransform(t){this.dom.transform=`translate3d(${t}px, 0px, 0px)`},getTransform(){var t=this.dom.transform;return t=(t=t.substring(12)).match(/(\S*)px/)[1],Number(t)},fn(t){t.preventDefault()},wh(t){this.slideing=!1,this.dom.transition="touch"==t?"250ms":this.duration+"ms",this.setTransform(-1*this.index*this._width),this.t.m=0,this.t.s=-1,this.autoPlay&&this.setTime();var i="touch"==t?"250":this.duration;setTimeout(()=>{this.dom.transition="0s",this.index>=this.slidesLength+1&&(this.index=1,this.setTransform(-1*this.index*this._width)),this.index<=0&&(this.index=this.slidesLength,this.setTransform(-1*this.index*this._width)),this.$emit("transtionend",this.index-1),this.auto=!0,this.slideing=!0},i)},setTime(){this.timer1=window.setTimeout(()=>{this.auto?(this.index++,this.wh()):window.clearTimeout(this.timer1)},this.interval)},starDom(){var t=document.getElementsByClassName("wh_slide");this.slidesLength=t.length;var i=t[0].cloneNode(!0),s=t[this.slidesLength-1].cloneNode(!0);document.getElementById("wh_swiper").insertBefore(s,t[0]),document.getElementById("wh_swiper").appendChild(i),this._width=window.screen.availWidth,this.dom=document.getElementById("wh_swiper").style}}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("section",{staticClass:"wh_content",on:{touchmove:t.fn}},[s("div",{attrs:{id:"wh_swiper"},on:{touchstart:t.s,touchmove:t.m,touchend:t.e}},[t._t("default")],2),t._v(" "),t.showIndicator?s("div",{staticClass:"wh_indicator"},t._l(t.slidesLength,function(i,e){return s("div",{staticClass:"wh_indicator_item",class:{wh_show_bgcolor:t.index-1==e}})})):t._e()])},staticRenderFns:[]};var d=s("Mw9A")(o,a,!1,function(t){s("RS8P")},null,null).exports,l={methods:{clickSlide(){this.$emit("click")}}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"wh_slide",on:{click:this.clickSlide}},[this._t("default")],2)},staticRenderFns:[]};var c={data:()=>({list:["https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360","https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360","https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360"]}),components:{Swiper:d,Slide:s("Mw9A")(l,m,!1,function(t){s("Omqa")},null,null).exports}},u={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"hello"},[this.list.length>0?i("Swiper",this._l(this.list,function(t,s){return i("Slide",{key:s},[i("img",{attrs:{src:t}})])})):this._e()],1)},staticRenderFns:[]};var w=s("Mw9A")(c,u,!1,function(t){s("lFsY")},"data-v-5f7de381",null).exports;e.a.use(r.a);var p=new r.a({routes:[{path:"/",name:"HelloWorld",component:w}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:p,template:"<App/>",components:{App:h}})},Omqa:function(t,i){},RS8P:function(t,i){},lFsY:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.cf41de8e659738878cc1.js.map