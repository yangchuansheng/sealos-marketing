(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{8764:function(e,t,a){let l,n,s;var i=Object.create,o=Object.defineProperty,r=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,h=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,y=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t,a,l)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of p(t))u.call(e,n)||n===a||o(e,n,{get:()=>t[n],enumerable:!(l=r(t,n))||l.enumerable});return e},d=(e,t,a)=>(y(e,"symbol"!=typeof t?t+"":t,a),a),b={};((e,t)=>{for(var a in t)o(e,a,{get:t[a],enumerable:!0})})(b,{default:()=>w}),e.exports=c(o({},"__esModule",{value:!0}),b);var P=(s=null!=(l=a(9893))?i(h(l)):{},c(!n&&l&&l.__esModule?s:o(s,"default",{value:l,enumerable:!0}),l)),m=a(6129),f=a(2166);class w extends P.Component{constructor(){super(...arguments),d(this,"callPlayer",m.callPlayer),d(this,"playerID",this.props.config.playerId||`wistia-player-${(0,m.randomString)()}`),d(this,"onPlay",(...e)=>this.props.onPlay(...e)),d(this,"onPause",(...e)=>this.props.onPause(...e)),d(this,"onSeek",(...e)=>this.props.onSeek(...e)),d(this,"onEnded",(...e)=>this.props.onEnded(...e)),d(this,"onPlaybackRateChange",(...e)=>this.props.onPlaybackRateChange(...e)),d(this,"mute",()=>{this.callPlayer("mute")}),d(this,"unmute",()=>{this.callPlayer("unmute")})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){let{playing:t,muted:a,controls:l,onReady:n,config:s,onError:i}=this.props;(0,m.getSDK)("https://fast.wistia.com/assets/external/E-v1.js","Wistia").then(e=>{s.customControls&&s.customControls.forEach(t=>e.defineControl(t)),window._wq=window._wq||[],window._wq.push({id:this.playerID,options:{autoPlay:t,silentAutoPlay:"allow",muted:a,controlsVisibleOnLoad:l,fullscreenButton:l,playbar:l,playbackRateControl:l,qualityControl:l,volumeControl:l,settingsControl:l,smallPlayButton:l,...s.options},onReady:e=>{this.player=e,this.unbind(),this.player.bind("play",this.onPlay),this.player.bind("pause",this.onPause),this.player.bind("seek",this.onSeek),this.player.bind("end",this.onEnded),this.player.bind("playbackratechange",this.onPlaybackRateChange),n()}})},i)}unbind(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded),this.player.unbind("playbackratechange",this.onPlaybackRateChange)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.unbind(),this.callPlayer("remove")}seekTo(e,t=!0){this.callPlayer("time",e),t||this.pause()}setVolume(e){this.callPlayer("volume",e)}setPlaybackRate(e){this.callPlayer("playbackRate",e)}getDuration(){return this.callPlayer("duration")}getCurrentTime(){return this.callPlayer("time")}getSecondsLoaded(){return null}render(){let{url:e}=this.props,t=e&&e.match(f.MATCH_URL_WISTIA)[1],a=`wistia_embed wistia_async_${t}`;return P.default.createElement("div",{id:this.playerID,key:t,className:a,style:{width:"100%",height:"100%"}})}}d(w,"displayName","Wistia"),d(w,"canPlay",f.canPlay.wistia),d(w,"loopOnEnded",!0)}}]);