(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__3-Bc8",control:"Checkout_control__21f66",actions:"Checkout_actions__2UoxR",submit:"Checkout_submit__2bhEl",invalid:"Checkout_invalid__3J-Ih"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3Vw83",total:"Cart_total__AVe-8",actions:"Cart_actions__3Gc7M","button--alt":"Cart_button--alt__UO7oC",button:"Cart_button__2AofG"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1kSJb",summary:"CartItem_summary__1_L9s",price:"CartItem_price__131kb",amount:"CartItem_amount__kauLM",actions:"CartItem_actions__VCJej"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1qyeO",icon:"HeaderCartButton_icon__fR3V5",badge:"HeaderCartButton_badge__3bOMX",bump:"HeaderCartButton_bump__45TEo"}},,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__X8oql","meals-appear":"AvailableMeals_meals-appear__3K0sD",MealsLoading:"AvailableMeals_MealsLoading__nEelz",MealsError:"AvailableMeals_MealsError__XEKMx"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2xh3h",modal:"Modal_modal__3kzeE","slide-down":"Modal_slide-down__2lnp6"}},,,function(e,t,n){e.exports={header:"Header_header__12exQ","main-image":"Header_main-image__Y5EvT"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__onICg"}},function(e,t,n){e.exports={card:"Card_card__2j141"}},function(e,t,n){e.exports={meal:"MealItem_meal__1-7jb",description:"MealItem_description__11wNm",price:"MealItem_price__uorIJ"}},function(e,t,n){e.exports={form:"MealItemForm_form__1kaMU"}},function(e,t,n){e.exports={input:"Input_input__vZrCg"}},,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),s=(n(27),n(2)),o=n(17),l=n.n(o),u=n.p+"static/media/meals.2971f633.jpg",d=n(0),j=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=n(10),b=n.n(m),O=c.a.createContext({items:[],totalAmounts:0,addItem:function(e){},removeItem:function(e){},EmptyCart:function(){}}),h=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useContext)(O).items,o=i.reduce((function(e,t){return e+t.amount}),0),l="".concat(b.a.button," ").concat(c?b.a.bump:"");return Object(a.useEffect)((function(){if(0!==i.length){r(!0);var e=setTimeout((function(){r(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(d.jsxs)("button",{className:l,onClick:e.onShowCart,children:[Object(d.jsx)("span",{className:b.a.icon,children:Object(d.jsx)(j,{})}),Object(d.jsx)("span",{children:"Your Cart"}),Object(d.jsx)("span",{className:b.a.badge,children:o})]})},x=function(e){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsxs)("header",{className:l.a.header,children:[Object(d.jsx)("h1",{children:"Sam In The Kitchen"}),Object(d.jsx)(h,{onShowCart:e.onShowCart})]}),Object(d.jsx)("div",{className:l.a["main-image"],children:Object(d.jsx)("img",{src:u,alt:"A table full of foods"})})]})},f=n(19),p=n.n(f),_=function(){return Object(d.jsxs)("section",{className:p.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food,Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n(12),y=n(13),N=n.n(y),g=n(20),A=n.n(g),k=function(e){return Object(d.jsx)("div",{className:A.a.card,children:e.children})},M=n(21),I=n.n(M),w=n(22),E=n.n(w),S=n(4),H=n(23),F=n.n(H),R=c.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:F.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(S.a)({ref:t},e.input))]})})),D=function(e){var t=Object(a.useState)(!0),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useRef)();return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>5?r(!1):e.onAddToCart(a)},className:E.a.form,children:[Object(d.jsx)(R,{ref:i,label:"Amount",input:{type:"number",id:"amount_"+e.id,min:"1",step:1,defaultValue:"1"}}),Object(d.jsx)("button",{children:"+Add"}),!c&&Object(d.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},P=function(e){var t="\u20b9 ".concat(e.price.toFixed(2)),n=Object(a.useContext)(O);return Object(d.jsxs)("li",{className:I.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{children:e.description}),Object(d.jsx)("div",{children:t})]}),Object(d.jsx)("div",{children:Object(d.jsx)(D,{onAddToCart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price})},id:e.id})})]})},T=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),i=Object(s.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)(),j=Object(s.a)(u,2),m=j[0],b=j[1];if(Object(a.useEffect)((function(){var e=function(){var e=Object(C.a)(Object(v.a)().mark((function e(){var t,n,a,r;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://foodlists-1374a-default-rtdb.firebaseio.com/meals.json");case 3:if(200===(t=e.sent).status){e.next=6;break}throw new Error("Unable to Fetch Data");case 6:return e.next=8,t.json();case 8:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),l(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),l(!1),b(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),o)return Object(d.jsx)("section",{className:N.a.MealsLoading,children:Object(d.jsx)("p",{children:"loading..."})});if(m)return Object(d.jsx)("section",{className:N.a.MealsError,children:Object(d.jsx)("p",{children:m})});var O=n.map((function(e){return Object(d.jsx)(P,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(d.jsx)("section",{className:N.a.meals,children:Object(d.jsx)(k,{children:Object(d.jsx)("ul",{children:n&&O})})})},B=function(){return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(_,{}),Object(d.jsx)(T,{})]})},J=n(5),L=n.n(J),V=n(14),z=n.n(V),U=function(e){return Object(d.jsx)("div",{onClick:e.onHideCart,className:z.a.backdrop})},Y=function(e){return Object(d.jsx)("div",{className:z.a.modal,children:Object(d.jsx)("div",{className:z.a.content,children:e.children})})},q=function(e){var t=document.getElementById("overlays");return Object(d.jsxs)(a.Fragment,{children:[i.a.createPortal(Object(d.jsx)(U,{onHideCart:e.onHideCart}),t),";",i.a.createPortal(Object(d.jsx)(Y,{onHideCart:e.onHideCart,children:e.children}),t)]})},K=n(16),X=n(7),G=n.n(X),$=function(e){var t="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:G.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:G.a.summary,children:[Object(d.jsx)("span",{className:G.a.price,children:t}),Object(d.jsxs)("span",{className:G.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:G.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Q=n(3),Z=n.n(Q),W=function(e){var t=Object(a.useState)({name:!0,street:!0,city:!0,postal:!0}),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useRef)(),o=Object(a.useRef)(),l=Object(a.useRef)(),u=Object(a.useRef)(),j="".concat(Z.a.control," ").concat(c.name?"":Z.a.invalid),m="".concat(Z.a.control," ").concat(c.street?"":Z.a.invalid),b="".concat(Z.a.control," ").concat(c.postal?"":Z.a.invalid),O="".concat(Z.a.control," ").concat(c.city?"":Z.a.invalid);return Object(d.jsxs)("form",{className:Z.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=o.current.value,c=l.current.value,s=u.current.value,d=function(e){return""===e.trim()},j=!d(n),m=!d(a),b=!d(s),O=6===c.trim().length;r({name:j,street:m,postal:O,city:b}),j&&b&&m&&O&&(e.onConfirm({name:n,street:s,city:s,postalCode:c}),i.current.value="",o.current.value="",u.current.value="",l.current.value="")},children:[Object(d.jsxs)("div",{className:j,children:[Object(d.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(d.jsx)("input",{ref:i,type:"text",id:"name"}),!c.name&&Object(d.jsx)("p",{children:"Please enter a valid name"})]}),Object(d.jsxs)("div",{className:m,children:[Object(d.jsx)("label",{htmlFor:"street",children:"Street"}),Object(d.jsx)("input",{ref:o,type:"text",id:"street"}),!c.street&&Object(d.jsx)("p",{children:"Please enter a valid street"})]}),Object(d.jsxs)("div",{className:b,children:[Object(d.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(d.jsx)("input",{ref:l,type:"text",id:"postal"}),!c.postal&&Object(d.jsx)("p",{children:"Please enter a valid postal code (6 characters long)"})]}),Object(d.jsxs)("div",{className:O,children:[Object(d.jsx)("label",{htmlFor:"city",children:"City"}),Object(d.jsx)("input",{ref:u,type:"text",id:"city"}),!c.city&&Object(d.jsx)("p",{children:"Please enter a valid city"})]}),Object(d.jsxs)("div",{className:Z.a.actions,children:[Object(d.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(d.jsx)("button",{className:Z.a.submit,children:"Confirm"})]})]})},ee=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(!1),l=Object(s.a)(o,2),u=l[0],j=l[1],m=Object(a.useState)(!1),b=Object(s.a)(m,2),h=b[0],x=b[1],f=Object(a.useContext)(O),p=f.items.length>0,_="$".concat(f.totalAmounts.toFixed(2)),y=function(e){f.removeItem(e)},N=function(e){f.addItem(Object(S.a)(Object(S.a)({},e),{},{amount:1}))},g=function(){var e=Object(C.a)(Object(v.a)().mark((function e(t){return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("https://foodlists-1374a-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:f.items})});case 3:j(!1),x(!0),f.EmptyCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(d.jsx)("ul",{children:f.items.map((function(e){return Object(d.jsx)($,{name:e.name,amount:e.amount,price:e.price,onRemove:y.bind(null,e.id),onAdd:N.bind(null,e)},e.id)}))}),k=Object(d.jsxs)("div",{className:L.a["cart-items"],children:[A,Object(d.jsxs)("div",{className:L.a.total,children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:_})]}),r&&Object(d.jsx)(W,{onConfirm:g,onCancel:e.onHideCart}),!r&&Object(d.jsxs)("div",{className:L.a.actions,children:[Object(d.jsx)("button",{onClick:e.onHideCart,className:L.a["button--alt"],children:"Close"}),p&&Object(d.jsx)("button",{onClick:function(){i(!0)},className:L.a.button,children:"Order"})]})]}),M=Object(d.jsx)("p",{children:"sending the order..."}),I=Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)("p",{children:"Successfully sent the order"}),Object(d.jsx)("div",{className:L.a.actions,children:Object(d.jsx)("button",{onClick:e.onHideCart,className:L.a.button,children:"Close"})})]});return Object(d.jsx)(K.Fragment,{children:Object(d.jsxs)(q,{onHideCart:e.onHideCart,children:[!u&&!h&&k,u&&!h&&M,!u&&h&&I]})})},te=n(18),ne={items:[],totalAmounts:0},ae=function(e,t){if("ADD"===t.type){var n,a=e.totalAmounts+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(S.a)(Object(S.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(te.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmounts:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmounts-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(S.a)(Object(S.a)({},l),{},{amount:l.amount-1});(s=Object(te.a)(e.items))[o]=d}return{items:s,totalAmounts:u}}if("CLEAR"===t.type)return ne},ce=function(e){var t=Object(a.useReducer)(ae,ne),n=Object(s.a)(t,2),c=n[0],r=n[1],i={items:c.items,totalAmounts:c.totalAmounts,addItem:function(e){r({type:"ADD",item:e})},removeItem:function(e){r({type:"REMOVE",id:e})},EmptyCart:function(){r({type:"CLEAR"})}};return Object(d.jsx)(O.Provider,{value:i,children:e.children})};var re=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)(ce,{children:[n&&Object(d.jsx)(ee,{onHideCart:function(){c(!1)}}),Object(d.jsx)(x,{onShowCart:function(){c(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(B,{})})]})};i.a.render(Object(d.jsx)(re,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.b0bdfb92.chunk.js.map