import{_ as u,o as a,c as o,a as t,t as n,b as p,p as v,d as f,e as w,f as x,g as k,r as _,w as q,v as I,F as y,h as g,i as l,j as $}from"./index-b6f9c9df.js";const L={props:["product"]},b=e=>(v("data-v-aae8980c"),e=e(),f(),e),V={class:"product-card"},D={class:"partner"},P=["src"],S={class:"image"},N=["src","alt"],U={class:"text"},B={class:"h4"},E={class:"h3"},F={class:"h5"},M={key:0,class:"new-item2"},j=b(()=>t("img",{class:"item",src:w,alt:""},null,-1)),A=[j];function T(e,d,s,h,c,i){return a(),o("div",V,[t("div",D,[t("img",{src:s.product.partner,alt:"",class:"partner-image"},null,8,P)]),t("div",S,[t("img",{src:s.product.img,alt:s.product.title},null,8,N)]),t("div",U,[t("div",B,[t("h4",null,n(s.product.sub_category.toUpperCase()),1)]),t("div",E,[t("b",null,[t("h3",null,n(s.product.title),1)])]),t("div",F,[t("h5",null,n(s.product.desc),1)])]),s.product.newItem?(a(),o("div",M,A)):p("",!0)])}const z=u(L,[["render",T],["__scopeId","data-v-aae8980c"]]);const G={props:["dodatnaOprema"],data(){return{}}},H=e=>(v("data-v-da239ab3"),e=e(),f(),e),J={class:"dodatnaOprema-card"},K={class:"partner"},Q=["src"],R={class:"image"},W=["src","alt"],X={class:"text"},Y={class:"h4"},Z={class:"h3"},tt={key:0,class:"new-item2"},et=H(()=>t("img",{class:"item",src:w,alt:""},null,-1)),st=[et];function at(e,d,s,h,c,i){return a(),o("div",J,[t("div",K,[t("img",{src:s.dodatnaOprema.partner,alt:"",class:"partner-image"},null,8,Q)]),t("div",R,[t("img",{src:s.dodatnaOprema.images[0],alt:s.dodatnaOprema.name},null,8,W)]),t("div",X,[t("div",Y,[t("h4",null,n(s.dodatnaOprema.category.toUpperCase()),1)]),t("div",Z,[t("b",null,[t("h3",null,n(s.dodatnaOprema.name),1)])])]),s.dodatnaOprema.newItem?(a(),o("div",tt,st)):p("",!0)])}const ot=u(G,[["render",at],["__scopeId","data-v-da239ab3"]]);const rt={name:"CategoryView",components:{Product:z,DodatnaOprema:ot},data(){return{input:"",products:x,dodatna_oprema:k,category:""}},computed:{filteredProducts(){return this.products.filter(e=>{if(this.$route.params.category!=null&&this.$route.query.qr==null)return(e.category==this.$route.params.category||e.sub_category==this.$route.params.category)&&e.title.toLowerCase().includes(this.input.toLowerCase());if(this.$route.query.qr!=null&&this.$route.params.category==null)return e.title.toLowerCase().includes(this.$route.query.qr)&&e.title.toLowerCase().includes(this.input.toLowerCase());if(this.$route.query.qr==""&&this.$route.params.category==""&&this.$route.query.sponsor==null)return e&&e.title.toLowerCase().includes(this.input.toLowerCase());if(this.$route.query.sponsor!=null)return e.partnerName==this.$route.query.sponsor&&e.title.toLowerCase().includes(this.input.toLowerCase())})},filteredOprema(){return this.dodatna_oprema.filter(e=>{if(this.$route.params.category!=null||this.$route.params.category!="")return e.category==this.$route.params.category})},loaded(){this.$route.params.category!=null?this.category=this.$route.params.category:this.category=""}}},nt={class:"container main"},ct={class:"head"},it={class:"title"},dt={key:0},lt={key:1},_t={class:"search"},ut={class:"content-wrapper"},pt={key:0},ht={class:"content-wrapper"};function mt(e,d,s,h,c,i){const C=_("Product"),m=_("router-link"),O=_("DodatnaOprema");return a(),o("div",nt,[t("div",ct,[t("span",it,[c.category?(a(),o("h2",dt,'"'+n(this.category.toUpperCase())+'"',1)):(a(),o("h2",lt,"SVE MAŠINE"))]),t("span",_t,[q(t("input",{type:"text","onUpdate:modelValue":d[0]||(d[0]=r=>c.input=r),placeholder:"Pretraga"},null,512),[[I,c.input]])])]),t("div",ut,[(a(!0),o(y,null,g(i.filteredProducts,r=>(a(),o("div",{class:"content",key:r.id},[l(m,{to:`/products/${r.sub_category}/${r.title}`},{default:$(()=>[l(C,{product:r},null,8,["product"])]),_:2},1032,["to"])]))),128))]),i.filteredOprema.length>0?(a(),o("h2",pt,"Dodatna oprema")):p("",!0),t("div",ht,[(a(!0),o(y,null,g(i.filteredOprema,r=>(a(),o("div",{class:"content",key:r.id},[l(m,{to:`/products/dodatna-oprema/${r.name}`},{default:$(()=>[l(O,{dodatnaOprema:r},null,8,["dodatnaOprema"])]),_:2},1032,["to"])]))),128))])])}const gt=u(rt,[["render",mt],["__scopeId","data-v-9c4d41c5"]]);export{gt as default};
