/**
 * @license Apache License Version 2.0, January 2004 http://www.apache.org/licenses/
 * @author cnliangwei@foxmail.com
 */
import {
	Compiler,
	Component,
	NgModule,
	Injectable,
	ViewContainerRef,
	ApplicationRef,
	ReflectiveInjector,
	ModuleWithComponentFactories,
	ComponentRef,
	ViewChild
} from '@angular/core';

let doc = document, id="ng2-layer-static-style";
if(!doc.querySelector("style#"+id)){
	//插入css3 过度动画样式
	let styleText = `@font-face{font-family:'ng2layer';src:url('fonts/fonticon.ttf?mxrgd8') format('truetype'),url('fonts/fonticon.woff?mxrgd8') format('woff'),url('fonts/fonticon.svg?mxrgd8#fonticon') format('svg');font-weight:normal;font-style:normal}.iconing_layer_backdrop{position:fixed;top:0;left:0;right:0;bottom:0;font-size:0;text-align:center;box-sizing:border-box;background:rgba(138,138,138,0);z-index:10000}.iconing_layer_backdrop *{outline:none}.iconing_layer_backdrop:after{content:"";display:inline-block;height:100%;vertical-align:middle}.iconing_tip_backdrop{position:fixed;text-align:center;overflow:visible;height:0;right:0;left:0;z-index:10000}.iconing_tip_backdrop.iconing_loading_modal{top:0;bottom:0;height:100%;background:rgba(138,138,138,0.5);font-size:0}.iconing_tip_backdrop.iconing_loading_modal .iconing_tip_body{font-size:16px;vertical-align:middle;margin-top:-150px}.iconing_tip_backdrop.iconing_loading_modal:before{content:"";display:inline-block;height:100%;vertical-align:middle}.iconing_tip_body{display:inline-block;background-color:rgba(103,103,103,0.8);border-radius:2px;padding:12px 14px;color:#fff;line-height:1em;position:relative;font-size:18px;z-index:10;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.iconing_type_loading{padding-left:40px !important;background-image:url(loading.svg);background-size:20px 20px;background-repeat:no-repeat;background-position:12px center}.iconing_align_top{top:60px}.iconing_align_center{top:38%}.iconing_align_bottom{bottom:150px}.iconing_layer_body{box-sizing:border-box;background:#fff;padding:5px 12px;text-align:left;font-size:16px;display:inline-block;vertical-align:middle;box-shadow:1px 5px 10px rgba(0,0,0,0.4);overflow:hidden;border-radius:2px;margin-top:-200px;position:relative;z-index:10}.iconing_layer_title{box-sizing:content-box;height:1em;line-height:1em;padding:14px 18px 12px;padding-right:40px;font-size:18px;margin:-5px -12px;margin-bottom:0;box-shadow:0 0 5px #dbdbdb;border-radius:2px 2px 0 0}.iconing_layer_title:empty{visibility:hidden}.iconing_layer_header{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.iconing_layer_content{box-sizing:border-box;padding:18px 5px 25px;min-height:100px;min-width:150px}.iconing_layer_content:empty{background:url(loading.gif) center center no-repeat}.iconing_layer_close_btn{display:none;box-sizing:border-box;outline:none;background:none !important;position:absolute;margin:auto 0;padding:0;height:1.5em;width:1.5em;line-height:1.5em;font-size:1.1em;border:none;color:#fff;bottom:0;right:5px;top:0;color:rgba(255,102,0,0.5)}.iconing_layer_close_btn.iconing_layer_close_able{display:block}.iconing_layer_close_btn:hover{color:#f60}.iconing_layer_close_btn:before{font-family:'ng2layer' !important;speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"\e906"}.iconing_alert_body{box-sizing:border-box;padding:20px !important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.iconing_alert_title{box-sizing:border-box;font-size:16px}.iconing_content{box-sizing:border-box;padding:12px 20px;margin-top:10px;min-width:170px}.iconing_btn_cancel{background:#c7c7c5}.iconing_alert_btn{box-sizing:border-box;margin-top:12px;text-align:right}.iconing_alert_btn button{box-sizing:border-box;border:none;padding:8px 16px;color:#fff;font-size:14px !important}.iconing_btn_ok{box-sizing:border-box;margin-left:16px;background:#4285f4}.rollIn{animation-duration:.35s;animation-name:rollIn;animation-timing-function:ease-out}@keyframes rollIn{0%{opacity:0;-webkit-transform:translateX(-100%) rotate(-120deg);-ms-transform:translateX(-100%) rotate(-120deg);transform:translateX(-100%) rotate(-120deg)}100%{opacity:1;-webkit-transform:translateX(0) rotate(0);-ms-transform:translateX(0) rotate(0);transform:translateX(0) rotate(0)}}.rollOut{animation-duration:.35s;animation-name:rollOut;animation-timing-function:ease-in}@keyframes rollOut{0%{transform:translateX(0) rotate(0)}100%{opacity:0;transform:translateX(100%) rotate(120deg)}}.fallDown{animation-duration:.25s;animation-name:fallDown;transition-timing-function:ease-in}@keyframes fallDown{0%,60%,75%,90%,100%{-webkit-transition-timing-function:cubic-bezier(.215, .61, .355, 1);transition-timing-function:cubic-bezier(.215, .61, .355, 1)}0%{opacity:0;transform:translate3d(0, -500px, 0)}60%{transform:translate3d(0, 25px, 0)}75%{transform:translate3d(0, -10px, 0)}90%{transform:translate3d(0, 5px, 0)}100%{opacity:1;transform:none}}.fadeInDown{animation-duration:.6s;-webkit-animation-duration:.6s;animation-name:fadeInDown;-webkit-animation-name:fadeInDown}@keyframes fadeInDown{0%{opacity:0;transform:translate(0, -90px)}100%{opacity:1;transform:translate(0, 0)}}.fadeOutDown{animation-duration:.6s;-webkit-animation-duration:.6s;animation-name:fadeOutDown;-webkit-animation-name:fadeOutDown}@keyframes fadeOutDown{0%{opacity:1;transform:translate(0, 0)}100%{opacity:0;transform:translate(0, -90px)}}.runIn{animation-duration:.6s;animation-name:runIn}@keyframes runIn{-webkit-transition:all 300ms cubic-bezier(.085, .43, .05, 1);-webkit-transition:all 300ms cubic-bezier(.085, .43, .05, 1.475);-moz-transition:all 300ms cubic-bezier(.085, .43, .05, 1.475);-o-transition:all 300ms cubic-bezier(.085, .43, .05, 1.475);transition:all 300ms cubic-bezier(.085, .43, .05, 1.475)}.bounceIn{animation-duration:.6s;-webkit-animation-duration:.6s;animation-name:bounceIn;-webkit-animation-name:bounceIn}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,100%{transition-timing-function:cubic-bezier(.215, .61, .355, 1)}0%{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}20%{-webkit-transform:scale3d(1.1, 1.1, 1.1);transform:scale3d(1.1, 1.1, 1.1)}40%{-webkit-transform:scale3d(.9, .9, .9);transform:scale3d(.9, .9, .9)}60%{-webkit-transform:scale3d(1.03, 1.03, 1.03);transform:scale3d(1.03, 1.03, 1.03)}80%{-webkit-transform:scale3d(.97, .97, .97);transform:scale3d(.97, .97, .97)}100%{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}.bounceOut{animation:bounceOut linear .5s;transform-origin:50% 50%}@keyframes bounceOut{0%{opacity:1;transform:scaleX(1) scaleY(1)}25%{opacity:1;transform:scaleX(.95) scaleY(.95)}50%{opacity:1;transform:scaleX(1.1) scaleY(1.1)}100%{opacity:0;transform:scaleX(.3) scaleY(.3)}}.splatIn{animation-duration:.8s;-webkit-animation-duration:.8s;animation-name:splat;-webkit-animation-name:splat}@keyframes splatIn{0%{transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -300, 0, 0, 1)}2.92%{transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -135.218, 0, 0, 1)}3.37%{transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -114.871, 0, 0, 1)}3.47%{transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -110.596, 0, 0, 1)}4.58%{transform:matrix3d(2.061, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -68.65, 0, 0, 1)}5.69%{transform:matrix3d(2.321, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -36.551, 0, 0, 1)}5.76%{transform:matrix3d(2.32, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -34.768, 0, 0, 1)}7.41%{transform:matrix3d(1.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -3.804, 0, 0, 1)}7.51%{transform:matrix3d(1.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -2.454, 0, 0, 1)}7.88%{transform:matrix3d(1.771, 0, 0, 0, 0, 1.062, 0, 0, 0, 0, 1, 0, 2.008, 0, 0, 1)}8.68%{transform:matrix3d(1.408, 0, 0, 0, 0, 1.181, 0, 0, 0, 0, 1, 0, 9.646, 0, 0, 1)}10.03%{transform:matrix3d(.982, 0, 0, 0, 0, 1.333, 0, 0, 0, 0, 1, 0, 16.853, 0, 0, 1)}10.85%{transform:matrix3d(.822, 0, 0, 0, 0, 1.398, 0, 0, 0, 0, 1, 0, 18.613, 0, 0, 1)}11.53%{transform:matrix3d(.732, 0, 0, 0, 0, 1.439, 0, 0, 0, 0, 1, 0, 18.992, 0, 0, 1)}12.22%{transform:matrix3d(.672, 0, 0, 0, 0, 1.469, 0, 0, 0, 0, 1, 0, 18.618, 0, 0, 1)}14.18%{transform:matrix3d(.612, 0, 0, 0, 0, 1.501, 0, 0, 0, 0, 1, 0, 15.054, 0, 0, 1)}14.37%{transform:matrix3d(.612, 0, 0, 0, 0, 1.501, 0, 0, 0, 0, 1, 0, 14.604, 0, 0, 1)}19.23%{transform:matrix3d(.737, 0, 0, 0, 0, 1.371, 0, 0, 0, 0, 1, 0, 3.855, 0, 0, 1)}20.01%{transform:matrix3d(.763, 0, 0, 0, 0, 1.338, 0, 0, 0, 0, 1, 0, 2.724, 0, 0, 1)}23.05%{transform:matrix3d(.856, 0, 0, 0, 0, 1.211, 0, 0, 0, 0, 1, 0, .036, 0, 0, 1)}25.75%{transform:matrix3d(.923, 0, 0, 0, 0, 1.114, 0, 0, 0, 0, 1, 0, -0.709, 0, 0, 1)}26.94%{transform:matrix3d(.947, 0, 0, 0, 0, 1.078, 0, 0, 0, 0, 1, 0, -0.76, 0, 0, 1)}31.58%{transform:matrix3d(1.009, 0, 0, 0, 0, .987, 0, 0, 0, 0, 1, 0, -0.406, 0, 0, 1)}31.73%{transform:matrix3d(1.01, 0, 0, 0, 0, .986, 0, 0, 0, 0, 1, 0, -0.392, 0, 0, 1)}37.32%{transform:matrix3d(1.029, 0, 0, 0, 0, .958, 0, 0, 0, 0, 1, 0, -0.03, 0, 0, 1)}38.15%{transform:matrix3d(1.029, 0, 0, 0, 0, .958, 0, 0, 0, 0, 1, 0, -0.008, 0, 0, 1)}42.35%{transform:matrix3d(1.022, 0, 0, 0, 0, .969, 0, 0, 0, 0, 1, 0, .03, 0, 0, 1)}48.9%{transform:matrix3d(1.007, 0, 0, 0, 0, .99, 0, 0, 0, 0, 1, 0, .009, 0, 0, 1)}57.77%{transform:matrix3d(.998, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, -0.001, 0, 0, 1)}60.47%{transform:matrix3d(.998, 0, 0, 0, 0, 1.004, 0, 0, 0, 0, 1, 0, -0.001, 0, 0, 1)}69.36%{transform:matrix3d(.999, 0, 0, 0, 0, 1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}83.61%{transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}100%{transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}}.dropDown{animation-duration:.4s;-webkit-animation-duration:.4s;animation-name:dropDown;-webkit-animation-name:dropDown}@keyframes dropDown{0%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -15, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -15, 0, 1);opacity:0}4%{-webkit-transform:matrix3d(.96758, 0, 0, 0, 0, .96758, 0, 0, 0, 0, 1, 0, 0, -8.46592, 0, 1);transform:matrix3d(.96758, 0, 0, 0, 0, .96758, 0, 0, 0, 0, 1, 0, 0, -8.46592, 0, 1)}8%{-webkit-transform:matrix3d(.96176, 0, 0, 0, 0, .96176, 0, 0, 0, 0, 1, 0, 0, -4.91725, 0, 1);transform:matrix3d(.96176, 0, 0, 0, 0, .96176, 0, 0, 0, 0, 1, 0, 0, -4.91725, 0, 1)}12%{-webkit-transform:matrix3d(.96958, 0, 0, 0, 0, .96958, 0, 0, 0, 0, 1, 0, 0, -0.25224, 0, 1);transform:matrix3d(.96958, 0, 0, 0, 0, .96958, 0, 0, 0, 0, 1, 0, 0, -0.25224, 0, 1);opacity:1}16%{-webkit-transform:matrix3d(.98144, 0, 0, 0, 0, .98144, 0, 0, 0, 0, 1, 0, 0, 1.26207, 0, 1);transform:matrix3d(.98144, 0, 0, 0, 0, .98144, 0, 0, 0, 0, 1, 0, 0, 1.26207, 0, 1)}20%{-webkit-transform:matrix3d(.99188, 0, 0, 0, 0, .99188, 0, 0, 0, 0, 1, 0, 0, 1.76942, 0, 1);transform:matrix3d(.99188, 0, 0, 0, 0, .99188, 0, 0, 0, 0, 1, 0, 0, 1.76942, 0, 1)}24%{-webkit-transform:matrix3d(.99884, 0, 0, 0, 0, .99884, 0, 0, 0, 0, 1, 0, 0, 1.60106, 0, 1);transform:matrix3d(.99884, 0, 0, 0, 0, .99884, 0, 0, 0, 0, 1, 0, 0, 1.60106, 0, 1)}28%{-webkit-transform:matrix3d(1.0023, 0, 0, 0, 0, 1.0023, 0, 0, 0, 0, 1, 0, 0, 1.10713, 0, 1);transform:matrix3d(1.0023, 0, 0, 0, 0, 1.0023, 0, 0, 0, 0, 1, 0, 0, 1.10713, 0, 1)}32%{-webkit-transform:matrix3d(1.00324, 0, 0, 0, 0, 1.00324, 0, 0, 0, 0, 1, 0, 0, .56005, 0, 1);transform:matrix3d(1.00324, 0, 0, 0, 0, 1.00324, 0, 0, 0, 0, 1, 0, 0, .56005, 0, 1)}36%{-webkit-transform:matrix3d(1.00278, 0, 0, 0, 0, 1.00278, 0, 0, 0, 0, 1, 0, 0, .12148, 0, 1);transform:matrix3d(1.00278, 0, 0, 0, 0, 1.00278, 0, 0, 0, 0, 1, 0, 0, .12148, 0, 1)}40%{-webkit-transform:matrix3d(1.00181, 0, 0, 0, 0, 1.00181, 0, 0, 0, 0, 1, 0, 0, -0.14782, 0, 1);transform:matrix3d(1.00181, 0, 0, 0, 0, 1.00181, 0, 0, 0, 0, 1, 0, 0, -0.14782, 0, 1)}44%{-webkit-transform:matrix3d(1.00088, 0, 0, 0, 0, 1.00088, 0, 0, 0, 0, 1, 0, 0, -0.25729, 0, 1);transform:matrix3d(1.00088, 0, 0, 0, 0, 1.00088, 0, 0, 0, 0, 1, 0, 0, -0.25729, 0, 1)}48%{-webkit-transform:matrix3d(1.00021, 0, 0, 0, 0, 1.00021, 0, 0, 0, 0, 1, 0, 0, -0.25225, 0, 1);transform:matrix3d(1.00021, 0, 0, 0, 0, 1.00021, 0, 0, 0, 0, 1, 0, 0, -0.25225, 0, 1)}52%{-webkit-transform:matrix3d(.99986, 0, 0, 0, 0, .99986, 0, 0, 0, 0, 1, 0, 0, -0.18613, 0, 1);transform:matrix3d(.99986, 0, 0, 0, 0, .99986, 0, 0, 0, 0, 1, 0, 0, -0.18613, 0, 1)}56%{-webkit-transform:matrix3d(.99973, 0, 0, 0, 0, .99973, 0, 0, 0, 0, 1, 0, 0, -0.10336, 0, 1);transform:matrix3d(.99973, 0, 0, 0, 0, .99973, 0, 0, 0, 0, 1, 0, 0, -0.10336, 0, 1)}60%{-webkit-transform:matrix3d(.99975, 0, 0, 0, 0, .99975, 0, 0, 0, 0, 1, 0, 0, -0.03233, 0, 1);transform:matrix3d(.99975, 0, 0, 0, 0, .99975, 0, 0, 0, 0, 1, 0, 0, -0.03233, 0, 1)}64%{-webkit-transform:matrix3d(.99983, 0, 0, 0, 0, .99983, 0, 0, 0, 0, 1, 0, 0, .01446, 0, 1);transform:matrix3d(.99983, 0, 0, 0, 0, .99983, 0, 0, 0, 0, 1, 0, 0, .01446, 0, 1)}68%{-webkit-transform:matrix3d(.99991, 0, 0, 0, 0, .99991, 0, 0, 0, 0, 1, 0, 0, .03631, 0, 1);transform:matrix3d(.99991, 0, 0, 0, 0, .99991, 0, 0, 0, 0, 1, 0, 0, .03631, 0, 1)}72%{-webkit-transform:matrix3d(.99997, 0, 0, 0, 0, .99997, 0, 0, 0, 0, 1, 0, 0, .03908, 0, 1);transform:matrix3d(.99997, 0, 0, 0, 0, .99997, 0, 0, 0, 0, 1, 0, 0, .03908, 0, 1)}76%{-webkit-transform:matrix3d(1.00001, 0, 0, 0, 0, 1.00001, 0, 0, 0, 0, 1, 0, 0, .03077, 0, 1);transform:matrix3d(1.00001, 0, 0, 0, 0, 1.00001, 0, 0, 0, 0, 1, 0, 0, .03077, 0, 1)}80%{-webkit-transform:matrix3d(1.00002, 0, 0, 0, 0, 1.00002, 0, 0, 0, 0, 1, 0, 0, .01851, 0, 1);transform:matrix3d(1.00002, 0, 0, 0, 0, 1.00002, 0, 0, 0, 0, 1, 0, 0, .01851, 0, 1)}84%{-webkit-transform:matrix3d(1.00002, 0, 0, 0, 0, 1.00002, 0, 0, 0, 0, 1, 0, 0, .00719, 0, 1);transform:matrix3d(1.00002, 0, 0, 0, 0, 1.00002, 0, 0, 0, 0, 1, 0, 0, .00719, 0, 1)}88%{-webkit-transform:matrix3d(1.00002, 0, 0, 0, 0, 1.00002, 0, 0, 0, 0, 1, 0, 0, -0.00078, 0, 1);transform:matrix3d(1.00002, 0, 0, 0, 0, 1.00002, 0, 0, 0, 0, 1, 0, 0, -0.00078, 0, 1)}92%{-webkit-transform:matrix3d(1.00001, 0, 0, 0, 0, 1.00001, 0, 0, 0, 0, 1, 0, 0, -0.00493, 0, 1);transform:matrix3d(1.00001, 0, 0, 0, 0, 1.00001, 0, 0, 0, 0, 1, 0, 0, -0.00493, 0, 1)}96%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.00594, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.00594, 0, 1)}100%{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);opacity:1}}.vanishIn{animation-name:vanishIn;animation-duration:1s}@keyframes vanishIn{0%{opacity:0;transform-origin:50% 50%;transform:scale(2, 2);filter:blur(90px)}100%{opacity:1;transform-origin:50% 50%;transform:scale(1, 1);filter:blur(0)}}.vanishOut{animation-duration:.4s;animation-name:vanishOut}@keyframes vanishOut{0%{opacity:1;transform-origin:50% 50%;transform:scale(1, 1);filter:blur(0)}100%{opacity:0;transform-origin:50% 50%;transform:scale(2, 2);filter:blur(20px)}}.spaceOut{animation-name:spaceOut;animation-duration:1s}@keyframes spaceOut{0%{opacity:1;transform-origin:0 0;transform:perspective(800px) rotateX(0) translateZ(0)}100%{opacity:0;transform-origin:50% 100%;transform:perspective(800px) rotateX(-180deg) translateZ(300px)}}.spaceIn{animation-name:spaceIn;animation-duration:1s}@keyframes spaceIn{0%{opacity:0;transform-origin:50% 0;transform:scale(.2) translate(0, -200%)}100%{opacity:1;transform-origin:50% 0;transform:scale(1) translate(0, 0)}}.boingOut{animation-duration:.45s;animation-name:boingOut}@keyframes boingOut{0%{transform:perspective(800px) rotateX(0) rotateY(0)}20%{transform-origin:100% 100%;transform:perspective(800px) rotateX(0) rotateY(0)}30%{transform-origin:0 100%;transform:perspective(800px) rotateX(0) rotateY(0)}40%{opacity:1;transform-origin:0 100%;transform:perspective(800px) rotateX(10deg) rotateY(10deg)}100%{opacity:0;transform-origin:100% 100%;transform:perspective(800px) rotateX(90deg) rotateY(0)}}.jellyIn{animation:jellyIn 1000ms linear both}@keyframes jellyIn{0%{transform:matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}3.4%{transform:matrix3d(.128, 0, 0, 0, 0, .407, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}4.7%{transform:matrix3d(.27, 0, 0, 0, 0, .599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}6.81%{transform:matrix3d(.589, 0, 0, 0, 0, .893, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}9.41%{transform:matrix3d(1.032, 0, 0, 0, 0, 1.168, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}10.21%{transform:matrix3d(1.155, 0, 0, 0, 0, 1.226, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}13.61%{transform:matrix3d(1.496, 0, 0, 0, 0, 1.332, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}14.11%{transform:matrix3d(1.518, 0, 0, 0, 0, 1.331, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}17.52%{transform:matrix3d(1.497, 0, 0, 0, 0, 1.239, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}18.72%{transform:matrix3d(1.439, 0, 0, 0, 0, 1.187, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}21.32%{transform:matrix3d(1.279, 0, 0, 0, 0, 1.069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}24.32%{transform:matrix3d(1.105, 0, 0, 0, 0, .96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}25.23%{transform:matrix3d(1.063, 0, 0, 0, 0, .938, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}29.03%{transform:matrix3d(.953, 0, 0, 0, 0, .897, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}29.93%{transform:matrix3d(.941, 0, 0, 0, 0, .899, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}35.54%{transform:matrix3d(.942, 0, 0, 0, 0, .962, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}36.74%{transform:matrix3d(.951, 0, 0, 0, 0, .979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}41.04%{transform:matrix3d(.982, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}44.44%{transform:matrix3d(.997, 0, 0, 0, 0, 1.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}52.15%{transform:matrix3d(.998, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}59.86%{transform:matrix3d(.996, 0, 0, 0, 0, .99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}63.26%{transform:matrix3d(1, 0, 0, 0, 0, .992, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}75.28%{transform:matrix3d(1.004, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}85.49%{transform:matrix3d(.998, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}90.69%{transform:matrix3d(.998, 0, 0, 0, 0, .999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}100%{transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@keyframes fadeOutDown{0%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(25px);-ms-transform:translateY(25px);transform:translateY(25px)}}
	`,
	style=doc.createElement("style");
	
	style.type = 'text/css';
	style.id=id;
	style.appendChild(doc.createTextNode(styleText));
	
	let heads = doc.getElementsByTagName("head");
	if(heads && heads.length) { 
		heads[0].appendChild(style);
	} else {
		doc.documentElement.appendChild(style);
	}
}


export class LayerConfig {
	
	/**
	 * the new component will be a child of parent, if parent is null,
	 * new component will be a root component of application.
	 * valid only for dialog leyer
	 */
	parent:ViewContainerRef;
	
	/**
	 * a class for creating new component
	 * valid only for dialog leyer
	 */
	dialogComponent:any;
	
	/**
	 * dialog title
	 * valid only for dialog leyer
	 */
	title:string;
	
	/**
	 * show close button or not.
	 * valid only for dialog leyer
	 */
	closeAble:boolean;

	/**
	 * message type of tip layer.
	 * valid for alert, confirm, tip, loading leyer
	 */
	message:string;
	
	/**
	 * text of "ok" button.
	 * valid for alert or confirm leyer
	 */
	okText:string;
	
	/**
	 * text of "cancel" button
	 * valid only for confirm leyer
	 */
	cancelText:string;
	
	/**
	 * position of the layer("top", "center", "bottom"), default to "top"
	 * valid only for loading or tip leyer
	 */
	align:string;
	
	/**
	 * modal window or not
	 * valid only for loading leyer
	 */
	isModal:boolean;

	/**
	 * layer will be automatic closed after duration(ms)
	 * valid only for tip leyer
	 */
	tipDuration:number;

	/**
	 * defined a popup animation by a class selector
	 * valid for all type leyer.
	 * 
	 * existing options:
	 * rollIn, fallDown, fadeInDown, runIn, bounceIn, 
	 * splatIn, dropDown, vanishIn, spaceIn, jelly, fadeInUp,
	 */
	inSelector:string;
	
	/**
	 * defined a closeing animation by a class selector
	 * valid for all type leyer.
	 * 
	 * existing options:
	 * rollOut, fadeOutDown, bounceOut, vanishOut, spaceOut,
	 * boingOut, fadeOutDown
	 */
	outSelector:string;
}

export class NgLayerRef {
	layerComponent:any;
	
	/**
	 * destory the layer.
	 */
	close(){
		this.layerComponent.close();
	};
	
	/**
	 * show close button or not
	 */
	showCloseBtn(show:boolean):NgLayerRef{
		this.layerComponent.config.closeAble=show;
		return this;
	}
	
	/**
	 * update dialog title. for dialog only
	 * 
	 * @return {NgLayerRef}
	 */
	setTitle(title:string):NgLayerRef{
		this.layerComponent.config.title=title;
		return this;
	}
	
	/**
	 * update message of layer
	 * 
	 * e.g.
	 * 
	 * ```typescript
	 * let tip = this.ly.tip("保存成功", 1000, "top", "warn");
	 * setTimeout(()=>{
	 * 	lyRef.setMessage("successfully saved").setTipType("success");
	 * 	lyRef.close();
	 * }, 2000);
	 * 
	 * ```
	 * @return {NgLayerRef}
	 */
	setMessage(message:string):NgLayerRef{
		this.layerComponent.config.message=message;
		return this;
	}
	
	/**
	 * if the callBack return ture, the layer will be closed
	 * 
	 * e.g.
	 * 
	 * ```typescript
	 * let lyRef = this.ly.confirm("are you sure?", "yes", "no");
	 * lyRef.setOnClose(()=>{
	 * 	if(...) return true;
	 * });
	 * ```
	 * @return {NgLayerRef}
	 */
	setOnClose(callBack:()=>boolean):NgLayerRef{
		this.layerComponent.onClose = callBack;
		return this;
	}
	
	/**
	 * update "ok" button text, for alert layer or confirm layer
	 * 
	 * e.g.
	 * 
	 * ```typescript
	 *let lyRef = this.ly.confirm("are you sure?", "yes", "no");
	 *lyRef.setOkText("sure");
	 * ```
	 * @return {NgLayerRef}
	 */
	setOkText(ok:string):NgLayerRef{
		this.layerComponent.config.okTxt=ok;
		return this;
	}
	
	/**
	 * update "cancel" button text, for confirm layer only
	 * 
	 * e.g.
	 * 
	 * ```typescript
	 *let lyRef = this.ly.confirm("are you sure?", "yes", "no");
	 *lyRef.setCancelText("not sure");
	 * ```
	 * @return {NgLayerRef}
	 */
	setCancelText(cancel:string):NgLayerRef{
		this.layerComponent.config.cancelTxt=cancel;
		return this;
	}
	
	
	/**
	 * message type of tip layer
	 * 
	 * e.g.
	 * 
	 * ```typescript
	 *let lyRef = this.ly.tip("saving...", "yes", "no");
	 *lyRef.setTipType("error");
	 * ```
	 * @return {NgLayerRef}
	 */
	/*setTipType(tipType:string){
		this.layerComponent.config.tipType=tipType;
		return this;
	}*/
	
	/**
	 * okCallback called on 'ok' button click. for alert layer or confirm layer
	 * 
	 * e.g.
	 * 
	 * ```typescript
	 *let lyRef = this.ly.confirm("are you sure?", "yes", "no");
	 *lyRef.ok(()=>{
	 * 	...do something...
	 * });
	 * ```
	 * @return {NgLayerRef}
	 */
	ok(okCallback:()=>boolean):NgLayerRef{
		this.layerComponent.onOk=okCallback;
		return this;
	}
	
	/**
	 * cancelCallback called on "cancel" button click. for confirm layer only
	 * 
	 * e.g.
	 * 
	 * ```typescript
	 *let lyRef = this.ly.confirm("are you sure?", "yes", "no");
	 *lyRef.ok(()=>{
	 * 	...do something...
	 * });
	 * ```
	 * 
	 * @return {NgLayerRef}
	 */
	cancel(cancelCallback:()=>boolean):NgLayerRef{
		this.layerComponent.onCancel=cancelCallback;
		return this;
	}
}

@Injectable()
export class NgLayer {
	constructor(private compiler: Compiler, private appRef: ApplicationRef) {}
	
	/**
	 * open a dialog window
	 * @return {NgLayerRef}
	 */
	dialog(config:LayerConfig):NgLayerRef {
		let layerId = "layer_"+new Date().getTime()
		return this.createComponent_(config, layerId);
	}
	
	/**
	 * open a alert window
	 * 
	 * @return {NgLayerRef}
	 */
	alert(config:LayerConfig):NgLayerRef{
		return this.confirmOralert_(config, false);
	}
	
	/**
	 * open a confirm window
	 * 
	 * @return {NgLayerRef}
	 */
	confirm(config:LayerConfig):NgLayerRef{
		return this.confirmOralert_(config, true);
	}
	
	/**
	 * open a message layer
	 * 
	 * @return {NgLayerRef}
	 */
	tip(config:LayerConfig):NgLayerRef{
		return this.tipOrLoading_(config, true);
	}
	
	/**
	 * open a loading layer
	 * 
	 * @return {NgLayerRef}
	 */
	loading(config:LayerConfig):NgLayerRef{
		return this.tipOrLoading_(config, false);
	}
	
	/**
	 * 
	 */
	tipOrLoading_(config:LayerConfig, isTip:boolean){
	if(!config.outSelector){
			config.outSelector = "boingOut";
		}

		config = this.default_(config);

		let temp = '<div class="iconing_tip_body iconing_type_{{layerType}}">{{config.message}}</div>',
			layerId = "layer_"+new Date().getTime(),
			div = document.createElement("div"),
			claz = div.classList,
			modalStr;
		
		claz.add("iconing_tip_backdrop");
		claz.add(layerId);

		if(!config.align || ["center", "bottom", "top"].indexOf(config.align)<0){
			config.align = "top";
		}

		if(config.isModal){
			claz.add("iconing_loading_modal");
			modalStr = ".iconing_loading_modal";
		} else {
			modalStr = "";
		}
		claz.add("iconing_align_"+config.align);
		document.body.appendChild(div);
		
		@Component({
			selector:".iconing_tip_backdrop."+layerId+".iconing_align_"+config.align+modalStr,
			template:temp,
			providers:[NgLayerRef]
		})
		class LayerWraper {
			thizRef:ComponentRef<any>;
			layerEle:any;
			layerType:string = isTip?"tip":"loading";
			config:LayerConfig = config;
			
			constructor(private layerRef:NgLayerRef, private self:ViewContainerRef) {
				layerRef.layerComponent = this;
				this.layerRef = layerRef;
			}
			
			ngAfterViewInit(){
				this.layerEle = this.self.element.nativeElement.querySelector(".iconing_tip_body");
				if(this.config.inSelector){
					this.layerEle.classList.add(this.config.inSelector);
				}
				if(isTip) setTimeout(()=>this.close(), config.tipDuration+this.calCss_());
			}
			
			/** */
			close(){
				if(this.config.outSelector){
					let classList = this.layerEle.classList;
					classList.remove(this.config.inSelector);
					classList.add(this.config.outSelector);
					
					/**
					 * set a delay for layer closeing so the animation has time to play
					 */
					setTimeout(()=>{this.thizRef.destroy();}, this.calCss_());
				} else {
					this.thizRef.destroy();
				}
			}	
			
			calCss_(){
				let anima = getComputedStyle(this.layerEle).animationDuration,
					trans = getComputedStyle(this.layerEle).animationDuration,
					n1 = parseFloat(anima),
					n2 = parseFloat(trans);
				
				if(n1){
					let unit = anima.replace(n1.toString(), "").toLowerCase();
					n1 = unit=="ms"?n1:unit=="s"?n1*1000:0;
				}
				
				if(n2){
					let unit = anima.replace(n2.toString(), "").toLowerCase();
					n2 = unit=="ms"?n2:unit=="s"?n2*1000:0;
				}
				
				return Math.max(n1,n2)-5;
			}
		}
		
		@NgModule({declarations: [LayerWraper]})
		class DM {}
		
		/** create layer */
		let moduleWithComponentFactories  = this.compiler.compileModuleAndAllComponentsSync(DM),
			factory = moduleWithComponentFactories.componentFactories[0],
			layerWraper = this.appRef.bootstrap(factory);
			
			layerWraper.instance.thizRef = layerWraper;
		
		return layerWraper.instance.layerRef;
	}
	
	confirmOralert_(config:LayerConfig, isConfirm:boolean){
		let layerId = "layer_"+new Date().getTime(),
			div = document.createElement("div");
		
		div.classList.add("iconing_layer_backdrop");
		div.classList.add(layerId);
		document.body.appendChild(div);
		
		let temp:string = '<div class="iconing_layer_body iconing_alert_body">'+
				'<div class="iconing_content">{{config.message}}</div>'+
				'<div class="iconing_alert_btn">CANCELBUTTON'+
					'<button class="iconing_btn_ok" (click)="ok()">{{config.okText}}</button>'+
				'</div>'+
			'</div>';

		temp = isConfirm?temp.replace("CANCELBUTTON",'<button class="iconing_btn_cancel" (click)="cancel()">{{config.cancelText}}</button>'):temp.replace("CANCELBUTTON","");

		let layerWraperType = this.createComponentClass_(config, temp, layerId);
		
		@NgModule({declarations: [layerWraperType]})
		class DM {}
		
		/** create layer */
		let moduleWithComponentFactories  = this.compiler.compileModuleAndAllComponentsSync(DM),
			factory = moduleWithComponentFactories.componentFactories[0],
			layerWraper = this.appRef.bootstrap(factory);
			
			layerWraper.instance.thizRef = layerWraper;
			document.body.appendChild(layerWraper.location.nativeElement);
		
		return layerWraper.instance.layerRef;
	}
	
	/**
	 * 
	 */
	createComponentClass_(
		config:LayerConfig,
		temp:string,
		layerId:string
	){
		config = this.default_(config);
		@Component({
			selector:".iconing_layer_backdrop."+layerId,
			template:temp,
			providers:[NgLayerRef]
		})
		class layerWraper {
			thizRef:ComponentRef<any>;
			layerEle:any;
			backdropStyle:any;

			config:LayerConfig=config;
			
			@ViewChild('iconing_layer_content', {read: ViewContainerRef})
			layerView:ViewContainerRef;
			
			
			/**
			 * 
			 */
			constructor(private layerRef:NgLayerRef, private compiler: Compiler, private self:ViewContainerRef) {
				layerRef.layerComponent = this;
			}
			
			/**
			 * add enter state selector to layer body
			 */
			ngAfterViewInit(){
				let cfg = this.config;
				this.layerEle = this.self.element.nativeElement.querySelector(".iconing_layer_body");
				
				if(cfg.inSelector){
					this.layerEle.classList.add(cfg.inSelector);
					
					this.backdropStyle.background = "rgba(95, 95, 95, 0.5)";
					this.backdropStyle.transition = "background "+this.calCss_(this.layerEle)+"ms";
				}
				
			}
			
			/**
			 * 
			 */
			ngOnInit(){
				this.backdropStyle = this.self.element.nativeElement.style;
				
				if(config.dialogComponent){
					@NgModule({declarations: [config.dialogComponent]})
					class TempModule {}
					
					let moduleWithComponentFactories  = this.compiler.compileModuleAndAllComponentsAsync(TempModule);
					
					moduleWithComponentFactories.then((mvcf: ModuleWithComponentFactories <any>)=>{
						let injector = ReflectiveInjector.fromResolvedProviders([], this.layerView.injector);
						this.layerView.createComponent(mvcf.componentFactories[0], null, injector, []);
					});
				}
			}
			
			
			/** */
			close(){
				let cfg = this.config;
				if(!this.onClose || this.onClose()) {
					if(cfg.outSelector){
						let classList = this.layerEle.classList;
						classList.remove(cfg.inSelector);
						classList.add(cfg.outSelector);
						let duration = this.calCss_(this.layerEle);
						this.backdropStyle.background = "rgba(138, 138, 138, 0.5)";
						this.backdropStyle.transition = "background "+duration+"ms";
						
						/**
						 * set a delay for layer closeing so the animation has time to play
						 */
						setTimeout(()=>{this.thizRef.destroy();}, duration);
					} else {
						this.thizRef.destroy();
					}
				}
			}	
			
			cancel(){
				if(!this.onCancel || this.onCancel()) this.close();
			}
			
			onClose():boolean{return true}

			onCancel():boolean{return true}
			
			onOk():boolean{return true}

			/**
			 * alert or confirm layer
			 */
			ok(){
				if(!this.onOk || this.onOk()) this.close();
			}
			
			/**
			 * 
			 */
			calCss_(ele:any){
				let anima = getComputedStyle(ele).animationDuration,
					trans = getComputedStyle(ele).animationDuration,
					n1 = parseFloat(anima),
					n2 = parseFloat(trans);
				
				if(n1){
					let unit = anima.replace(n1.toString(), "").toLowerCase();
					n1 = unit=="ms"?n1:unit=="s"?n1*1000:0;
				}
				
				if(n2){
					let unit = anima.replace(n2.toString(), "").toLowerCase();
					n2 = unit=="ms"?n2:unit=="s"?n2*1000:0;
				}
				
				return Math.max(n1,n2);
			}
		}
		
		return layerWraper; 
	}
	
	private modifySelector_<T>(clazz:T, contentSelector:string) {
		if(!(Reflect && Reflect.getOwnMetadata)){
			throw 'reflect-metadata shim is required when using class decorators';
		}
		let mateData = Reflect.getOwnMetadata("annotations", new clazz().constructor);
		let parentMateData = mateData.find(annotation => {
			if(annotation.toString()==="@Component") return annotation;
		})
		
		if(!parentMateData){
			throw 'component type required a @Component decorator';
		}
		
		let newMataData = {selector:""};
		for(let i of Object.keys(parentMateData)){
			newMataData[i]=parentMateData[i];
		}
		newMataData.selector = '.'+contentSelector;
		
		let clazzTarget = Component(newMataData)(clazz);
		
		return clazzTarget;
	}
	
	private createComponent_(config:LayerConfig, layerId:string) {
		config.dialogComponent = this.modifySelector_(config.dialogComponent, "iconing_layer_content");
		
		let temp = '<div class="iconing_layer_body">'+
				'<div class="iconing_layer_header">'+
					'<div class="iconing_layer_title">{{config.title}}</div>'+
					'<button (click)="close();" class="iconing_layer_close_btn {{config.closeAble?\'iconing_layer_close_able\':\'\'}}"></button>'+
				'</div>'+
				'<div #iconing_layer_content></div>'+
			'</div>'
		
		let layerWraperType = this.createComponentClass_(config, temp, layerId);
		
		@NgModule({declarations: [layerWraperType]})
		class DM {}
		
		/**
		 * create layer
		 */
		let moduleWithComponentFactories  = this.compiler.compileModuleAndAllComponentsSync(DM),
			factory = moduleWithComponentFactories.componentFactories[0],
			layerWraper = null;
		if(!parent){
			layerWraper = this.appRef.bootstrap(factory);
			document.body.appendChild(layerWraper.location.nativeElement);
		} else {
			const injector = ReflectiveInjector.fromResolvedProviders([], config.parent.injector);
			layerWraper = config.parent.createComponent(factory, null, injector, []);
			layerWraper.instance.thizRef = layerWraper;
			
			document.body.appendChild(layerWraper.location.nativeElement);
		}
		
		return layerWraper.instance.layerRef;
	}

	default_(config:LayerConfig):LayerConfig {
		let dfs:LayerConfig = {
			title:"",
			align:"center",
			closeAble:true,
			cancelText:"cancel",
			okText:"ok",
			outSelector:"fadeOutDown",
			inSelector:"dropDown",
			parent:null,
			dialogComponent:null,
			isModal:false,
			tipDuration:2500,
			message:""
		};
		let keys = Object.keys(dfs), key:string;

		for(let i in keys){
			key = keys[i];
			if(config[key]==undefined){
				config[key] = dfs[key];
			}
		}

		return config;
	}
}