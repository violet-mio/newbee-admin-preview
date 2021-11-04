var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(o,t,l)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[t]=l,r=(e,o)=>{for(var t in o||(o={}))a.call(o,t)&&i(e,t,o[t]);if(l)for(var t of l(o))n.call(o,t)&&i(e,t,o[t]);return e},d=(e,l)=>o(e,t(l));import{a as s}from"./index.c6ea5d74.js";import{b as c,e as p,g,h as u,i as m}from"./home-page-config.e5f742f4.js";import{l as f}from"./lodash.6789d9fe.js";import{d as b,ab as h,aA as y,Y as C,aB as v,aq as R,V,r as E,o as I,c as T,w as x,a as F,au as k,am as _,W as w,aL as O,a0 as N,ar as U,a5 as D,a3 as j,aa as S,ad as L,a2 as B}from"./vendor.46c44667.js";const P={HOT:3,NEW:4,RECOMMEND:5};s(P,{[P.HOT]:"热销",[P.NEW]:"新品",[P.RECOMMEND]:"推荐"});const Q=b({name:"AddSwiperDialog",props:{isEdit:{type:Boolean,default:!1},id:{type:[String,Number],default:""},configType:{type:Number,required:!0}},emits:["reload"],setup(e,{attrs:o,slots:t,emit:l}){const a={configName:"",redirectUrl:"",goodsId:"",configRank:""},n=h(null),i=y({dialogVisible:!1,title:C((()=>e.isEdit?"编辑商品":"添加商品")),postForm:f.exports.cloneDeep(a),postFormRules:{configName:[{required:"true",message:"商品不能为空",trigger:["blur"]},{max:128,message:"商品名称不能超过128个字符",trigger:["blur"]}],goodsId:[{required:"true",message:"商品编号不能为空",trigger:["blur"]}],configRank:[{required:"true",message:"排序不能为空",trigger:["blur"]},{validator:(e,o,t)=>{o<0||o>200?t(new Error("排序值不能小于0 或者大于200")):t()},trigger:["blur"]}]},loading:!1}),s=(e=!1)=>{i.dialogVisible=!1,i.postForm=f.exports.cloneDeep(a),l("reload",{isReload:e})};return d(r({submitForm:()=>{n.value.validate().then((()=>{const o=f.exports.cloneDeep(i.postForm);let t="";e.isEdit?(o.id=e.id,t=p):t=g,i.loading=!0,t(r({configType:e.configType},o)).then((o=>{V.success(""+(e.isEdit?"编辑成功":"添加成功")),s(!0)})).finally((()=>{i.loading=!1}))})).catch((e=>(console.log(e),!1)))},open:()=>{i.dialogVisible=!0,R((()=>{var o;e.isEdit&&(o=e.id,c(o).then((e=>{i.postForm=Object.assign(i.postForm,e.data)})))}))}},v(i)),{postFormRef:n,emitClose:s,handleCancel:()=>{s(!1)}})}}),q=k("取 消"),M=k("确 定");Q.render=function(e,o,t,l,a,n){const i=E("el-input"),r=E("el-form-item"),d=E("el-form"),s=E("el-button"),c=E("el-dialog");return I(),T(c,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":o[4]||(o[4]=o=>e.dialogVisible=o),"destroy-on-close":"","before-close":e.handleCancel},{footer:x((()=>[F(s,{loading:e.loading,onClick:e.handleCancel},{default:x((()=>[q])),_:1},8,["loading","onClick"]),F(s,{loading:e.loading,type:"primary",onClick:e.submitForm},{default:x((()=>[M])),_:1},8,["loading","onClick"])])),default:x((()=>[F(d,{model:e.postForm,rules:e.postFormRules,ref:"postFormRef","label-width":"100px"},{default:x((()=>[F(r,{label:"商品名称",prop:"configName"},{default:x((()=>[F(i,{type:"text",modelValue:e.postForm.configName,"onUpdate:modelValue":o[0]||(o[0]=o=>e.postForm.configName=o)},null,8,["modelValue"])])),_:1}),F(r,{label:"跳转链接",prop:"redirectUrl"},{default:x((()=>[F(i,{type:"text",modelValue:e.postForm.redirectUrl,"onUpdate:modelValue":o[1]||(o[1]=o=>e.postForm.redirectUrl=o)},null,8,["modelValue"])])),_:1}),F(r,{label:"商品编号",prop:"goodsId"},{default:x((()=>[F(i,{type:"number",modelValue:e.postForm.goodsId,"onUpdate:modelValue":o[2]||(o[2]=o=>e.postForm.goodsId=o)},null,8,["modelValue"])])),_:1}),F(r,{label:"排序值",prop:"configRank"},{default:x((()=>[F(i,{type:"number",modelValue:e.postForm.configRank,"onUpdate:modelValue":o[3]||(o[3]=o=>e.postForm.configRank=o)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue","before-close"])};const $=b({name:"IndexConfigList",props:{configType:{type:Number,required:!0}},components:{IndexConfigDialog:Q},setup(e,{attrs:o,slots:t,emit:l}){const a=y({list:[],total:0,listLoading:!1,listQuery:{page:1,limit:10},multipleSelection:[],configId:"",isEdit:!1}),n=h(null),i=()=>{a.listLoading=!0,u({pageNumber:a.listQuery.page,pageSize:a.listQuery.limit,configType:e.configType}).then((e=>{a.list=e.data.list,a.total=e.data.totalCount})).finally((()=>{a.listLoading=!1}))};_((()=>{i()}));const s=h([]);return d(r({},v(a)),{handleAdd:()=>{n.value.open()},handleBatchRemove:()=>{if(!s.value.length)return V.error("请选择需要移除的商品"),!1;const e=s.value.map((e=>e.configId));w.confirm("此操作将删除所选的商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{m(e).then((()=>{V.success("删除成功")}))})).catch((()=>{V.info("已取消删除")}))},handleEdit:({configId:e})=>{a.configId=e,a.isEdit=!0,n.value.open()},handleRemove:e=>{w.confirm("此操作将删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{const o=[e.configId];m(o).then((()=>{V.success("删除成功")}))})).catch((()=>{V.info("已取消删除")}))},getList:i,indexConfigDialogRef:n,handleReload:({isReload:e})=>{a.configId="",a.isEdit=!1,e&&i()},multipleSelection:s,handleSelectionChange:e=>{s.value=e}})}}),A={class:"app-container"},H=k("添加"),W=k("批量删除"),z=["href"],Y=k("编辑"),G=k("移除");$.render=function(e,o,t,l,a,n){const i=E("el-button"),r=E("el-card"),d=E("el-table-column"),s=E("el-table"),c=E("pagination"),p=E("IndexConfigDialog"),g=O("loading");return I(),N("div",A,[F(r,{class:"operate-container",shadow:"never"},{default:x((()=>[F(i,{type:"primary",onClick:e.handleAdd},{default:x((()=>[H])),_:1},8,["onClick"]),F(i,{type:"danger",onClick:e.handleBatchRemove,disabled:e.multipleSelection.length<=0},{default:x((()=>[W])),_:1},8,["onClick","disabled"])])),_:1}),U(F(s,{data:e.list,border:"",style:{width:"100%"},onSelectionChange:e.handleSelectionChange},{default:x((()=>[F(d,{type:"selection",width:"55"}),F(d,{align:"center",prop:"configId",label:"id",width:"55"}),F(d,{align:"center",prop:"configName",label:"商品名称"}),F(d,{align:"center",prop:"redirectUrl",label:"跳转链接"},{default:x((e=>[D("a",{target:"_blank",href:e.row.redirectUrl},j(e.row.redirectUrl),9,z)])),_:1}),F(d,{align:"center",label:"排序值",prop:"goodsId"}),F(d,{align:"center",label:"商品编号",prop:"goodsId"}),F(d,{align:"center",label:"添加时间",prop:"createTime"}),F(d,{"header-align":"center",align:"center",label:"操作"},{default:x((o=>[F(i,{type:"primary",onClick:t=>e.handleEdit(o.row)},{default:x((()=>[Y])),_:2},1032,["onClick"]),F(i,{type:"danger",onClick:t=>e.handleRemove(o.row)},{default:x((()=>[G])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),[[g,e.listLoading]]),F(c,{total:e.total,page:e.listQuery.page,"onUpdate:page":o[0]||(o[0]=o=>e.listQuery.page=o),limit:e.listQuery.limit,"onUpdate:limit":o[1]||(o[1]=o=>e.listQuery.limit=o),onPagination:e.getList},null,8,["total","page","limit","onPagination"]),F(p,{ref:"indexConfigDialogRef",id:e.configId,"is-edit":e.isEdit,"config-type":e.configType,onReload:e.handleReload},null,8,["id","is-edit","config-type","onReload"])])};const J=b({name:"IndexConfig",components:{IndexConfigList:$},setup(e,{attrs:o,slots:t,emit:l}){const a=[{name:`${P.HOT}`,title:"热销商品配置",icon:"el-icon-star-on"},{name:`${P.NEW}`,title:"新品上线配置",icon:"el-icon-sell"},{name:`${P.RECOMMEND}`,title:"为你推荐配置",icon:"el-icon-thumb"}],n=y({activeTab:`${P.HOT}`});return d(r({configType:P,tabs:a},v(n)),{handleTabsChange:e=>{console.log(e)}})}}),K={class:"app-container"};J.render=function(e,o,t,l,a,n){const i=E("IndexConfigList"),r=E("el-tab-pane"),d=E("el-tabs");return I(),N("div",K,[F(d,{type:"border-card",modelValue:e.activeTab,"onUpdate:modelValue":o[0]||(o[0]=o=>e.activeTab=o),onChange:e.handleTabsChange},{default:x((()=>[(I(!0),N(S,null,L(e.tabs,(e=>(I(),T(r,{key:`${e.name}`,name:e.name,lazy:""},{label:x((()=>[D("span",null,[D("i",{class:B(e.icon)},null,2),k(" "+j(e.title),1)])])),default:x((()=>[F(i,{"config-type":+e.name},null,8,["config-type"])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue","onChange"])])};export{J as default};
