import{c as e}from"./index.c6ea5d74.js";import{_ as s}from"./SwitchRoles.90c7ba3a.js";import{d as i,ab as a,Z as n,$ as o,r as t,aL as r,o as l,a0 as d,a as c,a5 as m,ar as p,w as u,c as f,a4 as h,au as y}from"./vendor.46c44667.js";function v(s){if(s&&s instanceof Array&&s.length>0){const i=e.getters&&e.getters.roles,a=s;return i.some((e=>a.includes(e)))}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}const k=i({name:"DirectivePermission",components:{SwitchRoles:s},setup(){const e=a(1);return{checkPermission:v,handleRolesChange:()=>{e.value++},key:e}}});n("data-v-4b1e8b8d");const _={class:"app-container"},g={class:"permission-alert"},b=y(" Only "),C=y("admin"),P=y(" can see this "),w=y(" v-permission=\"['admin']\" "),x={class:"permission-alert"},R=y(" Only "),z=y("editor"),A=y(" can see this "),E=y(" v-permission=\"['editor']\" "),j={class:"permission-alert"},I=y(" Both "),O=y("admin"),B=y(" and "),L=y("editor"),S=y(" can see this "),D=y(" v-permission=\"['admin','editor']\" "),F=m("aside",null,[y(" In some cases, using v-permission will have no effect. For example: Element-UI's Tab component or el-table-column and other scenes that dynamically render dom. You can only do this with v-if. "),m("br"),y(" e.g. ")],-1),T=y(" Admin can see this "),U=y(" v-if=\"checkPermission(['admin'])\" "),Y=y(" Editor can see this "),Z=y(" v-if=\"checkPermission(['editor'])\" "),$=y(" Both admin or editor can see this "),q=y(" v-if=\"checkPermission(['admin','editor'])\" ");o(),k.render=function(e,s,i,a,n,o){const y=t("switch-roles"),v=t("el-tag"),k=t("el-tab-pane"),G=t("el-tabs"),H=r("permission");return l(),d("div",_,[c(y,{onChange:e.handleRolesChange},null,8,["onChange"]),(l(),d("div",{key:e.key,style:{"margin-top":"30px"}},[m("div",null,[p(m("span",g,[b,c(v,{class:"permission-tag",size:"small"},{default:u((()=>[C])),_:1}),P],512),[[H,["admin"]]]),p(c(v,{class:"permission-sourceCode",type:"info"},{default:u((()=>[w])),_:1},512),[[H,["admin"]]])]),m("div",null,[p(m("span",x,[R,c(v,{class:"permission-tag",size:"small"},{default:u((()=>[z])),_:1}),A],512),[[H,["editor"]]]),p(c(v,{class:"permission-sourceCode",type:"info"},{default:u((()=>[E])),_:1},512),[[H,["editor"]]])]),m("div",null,[p(m("span",j,[I,c(v,{class:"permission-tag",size:"small"},{default:u((()=>[O])),_:1}),B,c(v,{class:"permission-tag",size:"small"},{default:u((()=>[L])),_:1}),S],512),[[H,["admin","editor"]]]),p(c(v,{class:"permission-sourceCode",type:"info"},{default:u((()=>[D])),_:1},512),[[H,["admin","editor"]]])])])),(l(),d("div",{key:"checkPermission"+e.key,style:{"margin-top":"60px"}},[F,c(G,{type:"border-card",style:{width:"550px"}},{default:u((()=>[e.checkPermission(["admin"])?(l(),f(k,{key:0,label:"Admin"},{default:u((()=>[T,c(v,{class:"permission-sourceCode",type:"info"},{default:u((()=>[U])),_:1})])),_:1})):h("",!0),e.checkPermission(["editor"])?(l(),f(k,{key:1,label:"Editor"},{default:u((()=>[Y,c(v,{class:"permission-sourceCode",type:"info"},{default:u((()=>[Z])),_:1})])),_:1})):h("",!0),e.checkPermission(["admin","editor"])?(l(),f(k,{key:2,label:"Admin-OR-Editor"},{default:u((()=>[$,c(v,{class:"permission-sourceCode",type:"info"},{default:u((()=>[q])),_:1})])),_:1})):h("",!0)])),_:1})]))])},k.__scopeId="data-v-4b1e8b8d";export{k as default};
