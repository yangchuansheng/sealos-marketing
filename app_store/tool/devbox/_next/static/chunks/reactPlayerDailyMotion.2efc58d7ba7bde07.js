(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[596],{2096:function(e,t,r){let a,i,n;var s=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,u=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,y=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of p(t))h.call(e,i)||i===r||o(e,i,{get:()=>t[i],enumerable:!(a=l(t,i))||a.enumerable});return e},d=(e,t,r)=>(y(e,"symbol"!=typeof t?t+"":t,r),r),m={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(m,{default:()=>P}),e.exports=c(o({},"__esModule",{value:!0}),m);var f=(n=null!=(a=r(9893))?s(u(a)):{},c(!i&&a&&a.__esModule?n:o(n,"default",{value:a,enumerable:!0}),a)),g=r(6129),b=r(2166);class P extends f.Component{constructor(){super(...arguments),d(this,"callPlayer",g.callPlayer),d(this,"onDurationChange",()=>{let e=this.getDuration();this.props.onDuration(e)}),d(this,"mute",()=>{this.callPlayer("setMuted",!0)}),d(this,"unmute",()=>{this.callPlayer("setMuted",!1)}),d(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){let{controls:t,config:r,onError:a,playing:i}=this.props,[,n]=e.match(b.MATCH_URL_DAILYMOTION);if(this.player){this.player.load(n,{start:(0,g.parseStartTime)(e),autoplay:i});return}(0,g.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",e=>e.player).then(i=>{if(!this.container)return;let s=i.player;this.player=new s(this.container,{width:"100%",height:"100%",video:n,params:{controls:t,autoplay:this.props.playing,mute:this.props.muted,start:(0,g.parseStartTime)(e),origin:window.location.origin,...r.params},events:{apiready:this.props.onReady,seeked:()=>this.props.onSeek(this.player.currentTime),video_end:this.props.onEnded,durationchange:this.onDurationChange,pause:this.props.onPause,playing:this.props.onPlay,waiting:this.props.onBuffer,error:e=>a(e)}})},a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.player.duration||null}getCurrentTime(){return this.player.currentTime}getSecondsLoaded(){return this.player.bufferedTime}render(){let{display:e}=this.props;return f.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},f.default.createElement("div",{ref:this.ref}))}}d(P,"displayName","DailyMotion"),d(P,"canPlay",b.canPlay.dailymotion),d(P,"loopOnEnded",!0)}}]);