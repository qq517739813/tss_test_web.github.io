if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),a={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-e1498109"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/403-BlsR4Atm.css",revision:null},{url:"assets/css/404-DLmx09gd.css",revision:null},{url:"assets/css/500-P8cjCk8K.css",revision:null},{url:"assets/css/AgeRatioChart-cfdIdYqj.css",revision:null},{url:"assets/css/AgeRatioChart-D0gPfSgb.css",revision:null},{url:"assets/css/AnnualUseChart-DTtxSlQW.css",revision:null},{url:"assets/css/AnnualUseChart-rzHHre3w.css",revision:null},{url:"assets/css/ChinaMapChart-BJd_BBNB.css",revision:null},{url:"assets/css/ChinaMapChart-VjsZdtLi.css",revision:null},{url:"assets/css/curve-DJneZLU1.css",revision:null},{url:"assets/css/HotPlateChart-CA8Kz00H.css",revision:null},{url:"assets/css/HotPlateChart-CxxxrMNB.css",revision:null},{url:"assets/css/Imgs-C7xaGgL4.css",revision:null},{url:"assets/css/index-0fd3mW5m.css",revision:null},{url:"assets/css/index-AoLTPEN2.css",revision:null},{url:"assets/css/index-B_SY1GJM.css",revision:null},{url:"assets/css/index-B906lYhb.css",revision:null},{url:"assets/css/index-BF52ztJF.css",revision:null},{url:"assets/css/index-BqvetaX-.css",revision:null},{url:"assets/css/index-Buh6b0IB.css",revision:null},{url:"assets/css/index-BzihZGbh.css",revision:null},{url:"assets/css/index-BZNPlEg4.css",revision:null},{url:"assets/css/index-CC8JigyT.css",revision:null},{url:"assets/css/index-CDpCTSfx.css",revision:null},{url:"assets/css/index-CENpr6bN.css",revision:null},{url:"assets/css/index-CK7gjiu7.css",revision:null},{url:"assets/css/index-CngtCcIE.css",revision:null},{url:"assets/css/index-CUYGGlFc.css",revision:null},{url:"assets/css/index-CZbBN78A.css",revision:null},{url:"assets/css/index-D6jPkxQV.css",revision:null},{url:"assets/css/index-DC2fcAYj.css",revision:null},{url:"assets/css/index-Dkka7KF3.css",revision:null},{url:"assets/css/index-DPwLjweE.css",revision:null},{url:"assets/css/index-DPyQQBPc.css",revision:null},{url:"assets/css/index-Dqg5QF45.css",revision:null},{url:"assets/css/index-DQqarpOi.css",revision:null},{url:"assets/css/index-DQZjA0y7.css",revision:null},{url:"assets/css/index-HvZu_OF_.css",revision:null},{url:"assets/css/index-LeJ6GIDG.css",revision:null},{url:"assets/css/index-naAXWQD1.css",revision:null},{url:"assets/css/index-SuD67rAw.css",revision:null},{url:"assets/css/index-xauC7E5d.css",revision:null},{url:"assets/css/LoginForm-Btl9FDFs.css",revision:null},{url:"assets/css/MaleFemaleRatioChart-CPL9sVLw.css",revision:null},{url:"assets/css/MaleFemaleRatioChart-EAjzWCuB.css",revision:null},{url:"assets/css/OverNext30Chart-BDvLn_Bw.css",revision:null},{url:"assets/css/OverNext30Chart-CpTuWxMn.css",revision:null},{url:"assets/css/pie-Uwc-cvsR.css",revision:null},{url:"assets/css/PlatformSourceChart-BLHx8obS.css",revision:null},{url:"assets/css/PlatformSourceChart-C4F9ije5.css",revision:null},{url:"assets/css/RealTimeAccessChart-ClvGkS3N.css",revision:null},{url:"assets/css/RealTimeAccessChart-YxsRWviG.css",revision:null},{url:"assets/js/403-KTgpM0Vi.js",revision:null},{url:"assets/js/404-D0D2Eej5.js",revision:null},{url:"assets/js/500-CLuTnp1I.js",revision:null},{url:"assets/js/AgeRatioChart-44sd2qnS.js",revision:null},{url:"assets/js/AgeRatioChart-CMcHZ_U2.js",revision:null},{url:"assets/js/AnnualUseChart-BkezG931.js",revision:null},{url:"assets/js/AnnualUseChart-Ezh-YZAW.js",revision:null},{url:"assets/js/ChinaMapChart-CkwUNWE-.js",revision:null},{url:"assets/js/ChinaMapChart-D6fnTuJt.js",revision:null},{url:"assets/js/curve-C_K9AgbN.js",revision:null},{url:"assets/js/detail-BQFS-Zot.js",revision:null},{url:"assets/js/detail-CHB0uqSU.js",revision:null},{url:"assets/js/detail-DBWScdWn.js",revision:null},{url:"assets/js/HotPlateChart-CKGfXCq9.js",revision:null},{url:"assets/js/HotPlateChart-ME_0vqCO.js",revision:null},{url:"assets/js/Imgs-D33Wb4DR.js",revision:null},{url:"assets/js/index-_7q-ypi4.js",revision:null},{url:"assets/js/index-_lYaS_Fj.js",revision:null},{url:"assets/js/index-3NLSDXTz.js",revision:null},{url:"assets/js/index-9OpM3pkP.js",revision:null},{url:"assets/js/index-aN9g1Hjt.js",revision:null},{url:"assets/js/index-B7lYdI3F.js",revision:null},{url:"assets/js/index-BD3p8srm.js",revision:null},{url:"assets/js/index-BeCuk19H.js",revision:null},{url:"assets/js/index-BI109tUP.js",revision:null},{url:"assets/js/index-BIdJqGkv.js",revision:null},{url:"assets/js/index-Bis-mVvj.js",revision:null},{url:"assets/js/index-BmxTgRhb.js",revision:null},{url:"assets/js/index-BoGKeyu7.js",revision:null},{url:"assets/js/index-ByuBQmQ1.js",revision:null},{url:"assets/js/index-BZPi55w-.js",revision:null},{url:"assets/js/index-C7v4LesR.js",revision:null},{url:"assets/js/index-CAolS7zP.js",revision:null},{url:"assets/js/index-CcNO9GIT.js",revision:null},{url:"assets/js/index-CCTNRXhY.js",revision:null},{url:"assets/js/index-CdVHNG8j.js",revision:null},{url:"assets/js/index-CDwNn1Ji.js",revision:null},{url:"assets/js/index-Cf6bKr-o.js",revision:null},{url:"assets/js/index-CfQpKPfd.js",revision:null},{url:"assets/js/index-Ck8gvd3T.js",revision:null},{url:"assets/js/index-COa3-Mku.js",revision:null},{url:"assets/js/index-CpmnXI1T.js",revision:null},{url:"assets/js/index-CQJsKq8T.js",revision:null},{url:"assets/js/index-CToCCBvh.js",revision:null},{url:"assets/js/index-CVqgOelB.js",revision:null},{url:"assets/js/index-Cyxm7Mvt.js",revision:null},{url:"assets/js/index-CZrOeNzm.js",revision:null},{url:"assets/js/index-D7qUjiRU.js",revision:null},{url:"assets/js/index-D87jFVB3.js",revision:null},{url:"assets/js/index-Dgjewm6p.js",revision:null},{url:"assets/js/index-DhlQmxwX.js",revision:null},{url:"assets/js/index-DKa_0QJs.js",revision:null},{url:"assets/js/index-DKnN3Xp-.js",revision:null},{url:"assets/js/index-DMiDRK9J.js",revision:null},{url:"assets/js/index-DMOcnwyE.js",revision:null},{url:"assets/js/index-DMPwwfY9.js",revision:null},{url:"assets/js/index-Dp2dDjer.js",revision:null},{url:"assets/js/index-DtyL_ODA.js",revision:null},{url:"assets/js/index-DuHrCAhx.js",revision:null},{url:"assets/js/index-DUt6v2S3.js",revision:null},{url:"assets/js/index-Duy8LtGM.js",revision:null},{url:"assets/js/index-DY4vgLsd.js",revision:null},{url:"assets/js/index-DZU7O34V.js",revision:null},{url:"assets/js/index-gkpyE2MR.js",revision:null},{url:"assets/js/index-hThNMqON.js",revision:null},{url:"assets/js/index-LWsIxNmv.js",revision:null},{url:"assets/js/index-MoOsxFwf.js",revision:null},{url:"assets/js/index-NRKkPGrU.js",revision:null},{url:"assets/js/index-NvU6tBN_.js",revision:null},{url:"assets/js/index-NX1Ub4ck.js",revision:null},{url:"assets/js/index-sLd2LRPJ.js",revision:null},{url:"assets/js/index-t2sIXTiT.js",revision:null},{url:"assets/js/index-tD8G5saM.js",revision:null},{url:"assets/js/index-TkcEi4Od.js",revision:null},{url:"assets/js/index-UuAYtvog.js",revision:null},{url:"assets/js/index-vf_CjN7T.js",revision:null},{url:"assets/js/index-vUUMJWSF.js",revision:null},{url:"assets/js/index-xatGAnpE.js",revision:null},{url:"assets/js/index-ySq6Eq17.js",revision:null},{url:"assets/js/index-z0XPNnOu.js",revision:null},{url:"assets/js/index.vue_vue_type_script_setup_true_name_ECharts_lang-Bj7774D2.js",revision:null},{url:"assets/js/index.vue_vue_type_script_setup_true_name_ProTable_lang-DjapYMCh.js",revision:null},{url:"assets/js/index.vue_vue_type_script_setup_true_name_SwitchDark_lang-CfgdEVrc.js",revision:null},{url:"assets/js/LoginForm-_vZ2tLbr.js",revision:null},{url:"assets/js/MaleFemaleRatioChart-BwJIzZkb.js",revision:null},{url:"assets/js/MaleFemaleRatioChart-DdFvzAVT.js",revision:null},{url:"assets/js/OverNext30Chart-CPQ1RzG5.js",revision:null},{url:"assets/js/OverNext30Chart-Q_6ATamV.js",revision:null},{url:"assets/js/pie-D1uikBBx.js",revision:null},{url:"assets/js/PlatformSourceChart-C7TGoGpE.js",revision:null},{url:"assets/js/PlatformSourceChart-DfyJ6C1m.js",revision:null},{url:"assets/js/RealTimeAccessChart-Ca6yIvYu.js",revision:null},{url:"assets/js/RealTimeAccessChart-DrOiEH7n.js",revision:null},{url:"assets/js/sortable.esm-9-_WONQE.js",revision:null},{url:"assets/js/tabs-d7i0_vJU.js",revision:null},{url:"assets/js/upload-CQa-J5GV.js",revision:null},{url:"assets/js/useAuthButtons-DvihDCn0.js",revision:null},{url:"assets/js/useHandleData-BD-vuBye.js",revision:null},{url:"assets/js/user-CNEnVpYA.js",revision:null},{url:"assets/js/UserDrawer-D6MwG-Aj.js",revision:null},{url:"assets/js/UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-4lp6i1iP.js",revision:null},{url:"index.html",revision:"a9bddda33e0551176d99f372d2d5361d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.png",revision:"1db4108e5d8e6e11f3508c8ecb9a2d6b"},{url:"manifest.webmanifest",revision:"a7dc2b25cf2561b8b57ef7a7455b2bfb"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
