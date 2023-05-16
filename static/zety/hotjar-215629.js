window.hjSiteSettings = window.hjSiteSettings || {"site_id":215629,"r":0.37761114500661375,"rec_value":0.018939288851898092,"state_change_listen_mode":"automatic_with_fragments","record":true,"continuous_capture_enabled":true,"recording_capture_keystrokes":true,"session_capture_console":false,"session_capture_console_consent":false,"anonymize_digits":true,"anonymize_emails":true,"suppress_all":false,"suppress_text":null,"suppress_location":false,"user_attributes_enabled":true,"legal_name":null,"privacy_policy_url":null,"deferred_page_contents":[],"record_targeting_rules":[{"component":"url","match_operation":"regex","pattern":"https:\\/\\/(builder.)?zety\\.com\\/profile","negate":false}],"feedback_widgets":[{"id":2180,"created_epoch_time":1487070346,"effective_show_branding":false,"skin":"light","background":"#505c6a","position":"middle_right","content":{"email":"Enter your email address if you would like to receive a follow up.","emotion":"How would you rate the resume builder?","initial":"See a bug? Want a new feature? Let us know!","thankyou":"Thank you for sharing your feedback with us!"},"connect_visit_data":"ask","language":"en","display_condition":"immediate","display_delay":0,"persist_condition":"always","auto_screenshot":true,"targeting_percentage":100,"targeting":[{"component":"device","match_operation":"exact","negate":false,"pattern":"desktop","name":null,"rule_type":null},{"component":"url","match_operation":"contains","negate":false,"pattern":"/app/cv/","name":null,"rule_type":null}],"ask_for_consent":true,"emotion_style":"default","display_type":"button","show_legal":null,"widget_label":null,"active_seasonal_emotion_style":null,"parent_element_selector":null}],"heatmaps":[],"polls":[{"id":172014,"created_epoch_time":1496239032,"skin":"dark","background":"#037ef3","effective_show_branding":true,"position":"left","content":{"version":2,"questions":[{"labels":[{"text":"😞 I don't like it"},{"text":"Love it! 😍"}],"next":"byAnswer","nextByAnswer":["question:88b2db32-c772-4533-a0f3-497473514e29","question:9e84f93e-fa1a-43e8-928b-62c1823c2489","question:5831be38-1060-4844-993d-b8cf87f1ccfd"],"required":true,"text":"👋 Hello! How would you rate our builder from 0 to 10?","type":"net-promoter-score","uuid":"1d605b38-0f5c-4b9f-931d-cefdd98905dc"},{"next":"thankYou","required":true,"text":"🔧 What would you improve?","type":"single-open-ended-multiple-line","uuid":"88b2db32-c772-4533-a0f3-497473514e29"},{"next":"thankYou","required":true,"text":"🔧 What's the one thing that you would like to change about the resume builder?","type":"single-open-ended-multiple-line","uuid":"9e84f93e-fa1a-43e8-928b-62c1823c2489"},{"next":"byOrder","required":true,"text":"Thank you! ❤️ What do you love about our resume builder?","type":"single-open-ended-multiple-line","uuid":"5831be38-1060-4844-993d-b8cf87f1ccfd"}],"thankyou":"❤️ Thank you for your feedback! ❤️"},"connect_visit_data":"ask","ask_for_consent":true,"language":"en","display_condition":"immediate","display_delay":0,"persist_condition":"response","targeting_percentage":100,"targeting":[{"component":"url","match_operation":"simple","negate":false,"pattern":"https://zety.com/user/cv","name":null,"rule_type":null},{"component":"device","match_operation":"exact","negate":false,"pattern":"desktop","name":null,"rule_type":null}],"uuid":"76cac679-0773-46d4-8c41-72c12321d1f6","invite":{"title":"Your feedback is important to us!","description":"Tell us what you think about this page by taking our quick Survey.","button":"Yes, I will give feedback","close":"No thanks"},"invite_enabled":false,"display_type":"popover","show_legal":null,"logo_url":null,"button_color":null}],"integrations":{"optimizely":{"tag_recordings":false},"mixpanel":{"send_events":false},"google_optimize":{"tag_recordings":false},"unbounce":{"tag_recordings":false},"hubspot":{"enabled":false,"send_recordings":false,"send_surveys":false}},"features":["ask.separate_service","heatmap.continuous.manual_retaker","survey.type_button","ask.use_insights_internal_api","survey.image_question","feedback.embeddable_widget","feedback.widgetV2","client_script.safe_date","ingestion.http.page_content","error_reporting","feedback.widget_telemetry","client_script.compression.pc","settings.billing_v2"]};

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=217)}({217:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t);var a,o=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;n(this,e),this.send=t,this.batchSize=r,this.flushInterval=i,this.buffer=[],this.flushTimer=null}var t,r,a;return t=e,(r=[{key:"getBuffer",value:function(){return this.buffer}},{key:"add",value:function(e){var t=this;this.buffer.push(e),this.buffer.length>=this.batchSize?this.flush():this.flushTimer||(this.flushTimer=setTimeout((function(){t.flush()}),this.flushInterval))}},{key:"flush",value:function(){this.buffer.length>0&&(this.send(this.buffer),this.buffer=[]),this.flushTimer&&(clearTimeout(this.flushTimer),this.flushTimer=null)}}])&&i(t.prototype,r),a&&i(t,a),e}();function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l,f=function(){try{return"performance"in window&&"now"in window.performance}catch(e){return!1}},d={version:3,metricsUrl:(null===(a=window._hjSettings)||void 0===a?void 0:a.metricsUrl)||"https://csmetrics.hotjar.com",features:{metrics:{sampling:.1},debug:{flag:"client_script.metrics.debug",sampling:.5}},browser:{hasPerformance:!1,hasDebug:!1},buffer:{bufferSize:40,flushInterval:2e3}},h={isDebugEnabled:!1,isMetricsEnabled:!1,loggedMetrics:{},genericTags:{}},g=function(e,t,r){h.loggedMetrics[e]=u(u({},h.loggedMetrics[e]),{},c({},t,r||{}))},b=function(e){return e&&(e.task||e.reason||e.module)||"value"},v=function(e,t){var r=b(t),n=h.loggedMetrics[e],i=n&&n[r]||{};return{tagName:r,start:i.start,total:i.total}},p=function(e){var t,r=null!==(t=e.tag)&&void 0!==t?t:void 0;return h.isDebugEnabled?u(u(u({},r),e.extraTags),h.genericTags):r},m=function(e){if(!l)return!1;var t=h.isMetricsEnabled||h.isDebugEnabled;return e?t&&e.flush:t},w=function(e){var t=!1,r="v=".concat(d.version),n=h.isDebugEnabled?"".concat(d.metricsUrl,"?").concat(r,"&debug=true"):"".concat(d.metricsUrl,"?").concat(r),i=JSON.stringify(e);if("sendBeacon"in navigator)try{t=navigator.sendBeacon.bind(navigator)(n,i)}catch(e){}if(!1===t)try{var a=new XMLHttpRequest;a.open("POST",n),a.timeout=1e4,a.send(i)}catch(e){}d.browser.hasDebug&&console.debug("New metric/log: ",e)},j={getState:function(){return u({},h)},start:function(){try{d.browser={hasPerformance:f(),hasDebug:/hjDebug=1/.test(location.search)};var e=window.hjSiteSettings||{},t=e.features,r=e.site_id,n=new Set(t),i=d.features,a=i.debug,s=i.metrics;h.genericTags={site_id:r},h.isDebugEnabled=n.has(a.flag)&&Math.random()<=a.sampling,h.isMetricsEnabled=Math.random()<=s.sampling,l=new o(w,d.buffer.bufferSize,d.buffer.flushInterval)}catch(e){console.debug("Error in metrics.start",{error:e})}},reset:function(){h.loggedMetrics={}},stop:function(){h.isDebugEnabled=!1,h.isMetricsEnabled=!1,h.genericTags={}},count:function(e,t){var r=t.incr,n=t.tag,i=t.extraTags;try{var a=b(n),o=h.loggedMetrics[e],s=0;if(r)s=(o&&o[a]||0)+(r.value||1),h.loggedMetrics[e]=u(u({},o),{},c({},a,(null==r?void 0:r.flush)?0:s));else s=1;if(m(r)){var f={name:e,type:"count",value:s,tags:p({tag:n,extraTags:i})};l.add(f)}}catch(e){}},distr:function(e,t){var r=t.task,n=t.value,i=t.extraTags;m()&&l.add({name:e,type:"distribution",value:n,tags:p({tag:{task:r},extraTags:i})})},time:function(){try{if(!d.browser.hasPerformance)return;return performance.now()}catch(e){}},timeStart:function(e,t){try{var r=j.time(),n=v(e,t),i=n.start,a=n.tagName;if(i)return;return g(e,a,{start:r}),r}catch(e){}},timeEnd:function(e,t){var r=t.tag,n=t.incr,i=t.extraTags;try{var a=j.time();if(!a)return;var o,s=v(e,r),u=s.start,c=s.tagName,f=s.total;if(n){var d,h=null!==(d=n.total)&&void 0!==d?d:n.start&&a-n.start;o=h?(f||0)+h:f;var b=n.flush?void 0:{total:o};g(e,c,b)}else o=u?a-u:void 0,g(e,c);if(o&&m(n)){var w={name:e,type:"distribution",value:Math.round(o),tags:p({tag:r,extraTags:i})};l.add(w)}return a}catch(t){console.debug("Failed to send timer metric: ",{name:e,tag:r,error:t})}},timeWatcher:function(){var e,t=0,r=!1,n=function(){var r,n=j.time();return t+=null!==(r=e&&n&&n-e)&&void 0!==r?r:0,e=j.time(),t};return{start:function(){if(!r)return r=!0,e=j.time()},incr:n,end:function(){var r=n();return t=0,e=void 0,r}}}};window.hj=window.hj||function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];(window.hj.q=window.hj.q||[]).push(t)},window.hj.metrics=j,hj.metrics.start(),hj.metrics.timeStart("time-to-first-event",null),window.hjBootstrap=window.hjBootstrap||function(e,t,r){var n=["bot","google","headless","baidu","bing","msn","duckduckbot","teoma","slurp","yandex","phantomjs","pingdom","ahrefsbot"].join("|"),i=new RegExp(n,"i"),a=window.navigator||{userAgent:"unknown"},o=a.userAgent?a.userAgent:"unknown";if(i.test(o))return hj.metrics.count("session-rejection",{tag:{reason:"bot"}}),void console.warn("Hotjar not launching due to suspicious userAgent:",o);var s="http:"===window.location.protocol,u=Boolean(window._hjSettings.preview);if(s&&!u)return hj.metrics.count("session-rejection",{tag:{reason:"https"}}),void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");var c=function(e,t,r){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(r),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};c(0,0,r);var l=window.document,f=l.head||l.getElementsByTagName("head")[0];hj.scriptDomain=e;var d=l.createElement("script");d.async=1,d.src=hj.scriptDomain+t,d.charset="utf-8",f.appendChild(d),c.revision="aca0084ee608",window.hjBootstrap=c},window.hjBootstrap("https://script.hotjar.com/","modules.36fe7de285484ee66a3f.js","215629"),window.hjLazyModules=window.hjLazyModules||{SURVEY_V2:{js:"survey-v2.883339c7f4c4ea614ebd.js"},SURVEY_BOOTSTRAPPER:{js:"survey-bootstrapper.37dfb2ac952498c1797e.js"},SURVEY_ISOLATED:{js:"survey-isolated.387a189642b7f00c21b7.js"},HEATMAP_RETAKER:{js:"heatmap-retaker.5edfe7397efb65783b82.js"},SURVEY_INVITATION:{js:"survey-invitation.33f6a056961d15e242df.js"},NOTIFICATION:{js:"notification.da0f02128c4ecc72e92e.js"},INCOMING_FEEDBACK:{js:"incoming-feedback.17baa8bc34884d61122e.js"},PREACT_INCOMING_FEEDBACK:{js:"preact-incoming-feedback.ee2cb316cb6e6fc0bab2.js"},SENTRY:{js:"sentry.05e3843c72bfc5103281.js"}}}});
