(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xiaoyuanshiwuzhaoling/add-or-update"],{"4cab":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return i}));var i={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"b7aa"))}},a=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"518d":function(e,n,t){"use strict";var i=t("8bae"),a=t.n(i);a.a},"63b7":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,i,a,u,o){try{var r=e[u](o),s=r.value}catch(l){return void t(l)}r.done?n(s):Promise.resolve(s).then(i,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(i,a){var o=e.apply(n,t);function r(e){u(o,i,a,r,s,"next",e)}function s(e){u(o,i,a,r,s,"throw",e)}r(void 0)}))}}var r=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b7aa"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ro:{xiaoyuanshiwuzhaolingUuidNumber:!0,xiaoyuanshiwuzhaolingName:!1,shiwuzhaolingTypes:!1,statusTypes:!1,yonghuId:!1,xiaoyuanshiwuzhaolingPhoto:!1,xiaoyuanshiwuzhaolingTime:!1,xiaoyuanshiwuzhaolingDizhi:!1,xiaoyuanshiwuzhaolingContent:!1,createTime:!1},ruleForm:{xiaoyuanshiwuzhaolingUuidNumber:this.getUUID(),xiaoyuanshiwuzhaolingName:"",shiwuzhaolingTypes:"",shiwuzhaolingValue:"",statusTypes:"",statusValue:"",yonghuId:"",xiaoyuanshiwuzhaolingPhoto:"",xiaoyuanshiwuzhaolingTime:"",xiaoyuanshiwuzhaolingDizhi:"",xiaoyuanshiwuzhaolingContent:"",createTime:""},user:{},shiwuzhaolingTypesOptions:[],shiwuzhaolingTypesIndex:0,statusTypesOptions:[],statusTypesIndex:0}},components:{wPicker:r},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var n=this;return o(i.default.mark((function t(){var a,u,o,r,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={page:1,limit:100,dicCode:"shiwuzhaoling_types"},t.next=3,n.$api.page("dictionary",a);case 3:return u=t.sent,n.shiwuzhaolingTypesOptions=u.data.list,o={page:1,limit:100,dicCode:"status_types"},t.next=8,n.$api.page("dictionary",o);case 8:if(r=t.sent,n.statusTypesOptions=r.data.list,!e.id){t.next=16;break}return n.ruleForm.id=e.id,t.next=14,n.$api.info("xiaoyuanshiwuzhaoling",n.ruleForm.id);case 14:s=t.sent,n.ruleForm=s.data;case 16:e.xiaoyuanshiwuzhaolingId&&(n.ruleForm.xiaoyuanshiwuzhaolingId=e.xiaoyuanshiwuzhaolingId);case 17:case"end":return t.stop()}}),t)})))()},methods:{shiwuzhaolingTypesChange:function(e){this.shiwuzhaolingTypesIndex=e.target.value,this.ruleForm.shiwuzhaolingValue=this.shiwuzhaolingTypesOptions[this.shiwuzhaolingTypesIndex].indexName,this.ruleForm.shiwuzhaolingTypes=this.shiwuzhaolingTypesOptions[this.shiwuzhaolingTypesIndex].codeIndex},statusTypesChange:function(e){this.statusTypesIndex=e.target.value,this.ruleForm.statusValue=this.statusTypesOptions[this.statusTypesIndex].indexName,this.ruleForm.statusTypes=this.statusTypesOptions[this.statusTypesIndex].codeIndex},xiaoyuanshiwuzhaolingPhotoTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.xiaoyuanshiwuzhaolingPhoto=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},xiaoyuanshiwuzhaolingTimeConfirm:function(e){console.log(e),this.ruleForm.xiaoyuanshiwuzhaolingTime=e.result,this.$forceUpdate()},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.xiaoyuanshiwuzhaolingUuidNumber){t.next=3;break}return n.$utils.msg("失物编号不能为空"),t.abrupt("return");case 3:if(n.ruleForm.xiaoyuanshiwuzhaolingName){t.next=6;break}return n.$utils.msg("物品名称不能为空"),t.abrupt("return");case 6:if(n.ruleForm.shiwuzhaolingTypes){t.next=9;break}return n.$utils.msg("物品类型不能为空"),t.abrupt("return");case 9:if(n.ruleForm.statusTypes){t.next=12;break}return n.$utils.msg("物品状态不能为空"),t.abrupt("return");case 12:if(n.ruleForm.xiaoyuanshiwuzhaolingPhoto){t.next=15;break}return n.$utils.msg("物品图片不能为空"),t.abrupt("return");case 15:if(n.ruleForm.xiaoyuanshiwuzhaolingTime){t.next=18;break}return n.$utils.msg("拾遗时间不能为空"),t.abrupt("return");case 18:if(n.ruleForm.xiaoyuanshiwuzhaolingDizhi){t.next=21;break}return n.$utils.msg("拾遗地址不能为空"),t.abrupt("return");case 21:if(!n.ruleForm.id){t.next=26;break}return t.next=24,n.$api.update("xiaoyuanshiwuzhaoling",n.ruleForm);case 24:t.next=28;break;case 26:return t.next=28,n.$api.save("xiaoyuanshiwuzhaoling",n.ruleForm);case 28:e.setStorageSync("pingluenStateState",!0),n.$utils.msgBack("提交成功");case 30:case"end":return t.stop()}}),t)})))()},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},"7c65":function(e,n,t){"use strict";t.r(n);var i=t("4cab"),a=t("fec1");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("518d");var o,r=t("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"494574e5",null,!1,i["a"],o);n["default"]=s.exports},"8bae":function(e,n,t){},da21:function(e,n,t){"use strict";(function(e){t("48e8");i(t("66fd"));var n=i(t("7c65"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},fec1:function(e,n,t){"use strict";t.r(n);var i=t("63b7"),a=t.n(i);for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);n["default"]=a.a}},[["da21","common/runtime","common/vendor"]]]);