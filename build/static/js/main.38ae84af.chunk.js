(this["webpackJsonpbook-my-show"]=this["webpackJsonpbook-my-show"]||[]).push([[0],{107:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(33),i=s.n(n),l=s(22),r=(s(60),s(12)),o=s.n(r),d=s(5),j=s(36),b=s(6),m=s(14),x=s(1),h=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"text-white flex items-center justify-between",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{className:"text-xl font-bold",children:"It All Starts Here!"}),Object(x.jsxs)("span",{className:"text-gray-400 text-xs flex items-center",children:["Kolkata ",Object(x.jsx)(m.b,{})]})]}),Object(x.jsx)("div",{className:"w-7 h-7",children:Object(x.jsx)(m.e,{className:"w-full h-full"})})]})})},u=function(){return Object(x.jsxs)("div",{className:"w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md",children:[Object(x.jsx)(m.e,{}),Object(x.jsx)("input",{type:"search",className:"w-full bg-transparent border-none focus:outline-none",placeholder:"Search for Movies, Events, Plays, Sports and Activities"})]})},f=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container mx-auto px-10 flex items-center justify-between bg-drala-400",children:[Object(x.jsxs)("div",{className:"flex item-center w-1/2 gap-3",children:[Object(x.jsx)("div",{className:"w-12 h-6",children:Object(x.jsx)("img",{src:"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",alt:"Logo"})}),Object(x.jsxs)("div",{className:"w-full h-10 flex items-center gap-3 bg-white px-3 py-1 rounded-md",children:[Object(x.jsx)(m.e,{}),Object(x.jsx)("input",{type:"search",className:"w-full bg-transparent border-none focus:outline-none",placeholder:"Search for Movies, Events, Plays, Sports and Activities"})]})]}),Object(x.jsxs)("div",{className:"flex items-center gap-3",children:[Object(x.jsxs)("span",{className:"text-gray-200 text-xs flex items-center cursor-pointer hover:text-white",children:["Kolkata ",Object(x.jsx)(m.a,{})]}),Object(x.jsx)("button",{className:"bg-red-600 text-white px-2 py-1 text-sm rounded",children:"Sign in"}),Object(x.jsx)("div",{className:"w-8 h-8 text-white",children:Object(x.jsx)(m.d,{className:"w-full h-full"})})]})]})})},p=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("nav",{className:"bg-bms-700 p-4",children:[Object(x.jsx)("div",{className:"md:hidden",children:Object(x.jsx)(h,{})}),Object(x.jsx)("div",{className:"hidden md:flex lg:hidden",children:Object(x.jsx)(u,{})}),Object(x.jsx)("div",{className:"hidden w-full lg:flex",children:Object(x.jsx)(f,{})})]})})},O=s(7),g=s.n(O),v=s(18),w=s(13),y=s(21),N=s.n(y),F=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:e.className,style:Object(d.a)(Object(d.a)({},e.style),{},{backgroundColor:"black"}),onClick:e.onClick})})},k=function(e){return Object(x.jsxs)(x.Fragment,{children:["className=",e.className,"style=",Object(d.a)(Object(d.a)({},e.style),{},{backgroundColor:"black"}),"onClick=",e.onClick,Object(x.jsx)("div",Object(d.a)({},e))]})},S=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),s=t[0],a=t[1];Object(c.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/movie/now_playing");case 2:t=e.sent,a(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var n={arrows:!0,autoplay:!0,centerMode:!0,centerPadding:"300px",slidesToShow:1,infinite:!0,slidesToScroll:1,nextArrow:Object(x.jsx)(F,{}),PrevArrow:Object(x.jsx)(k,{})},i={arrows:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,nextArrow:Object(x.jsx)(F,{}),PrevArrow:Object(x.jsx)(k,{})};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"lg:hidden",children:Object(x.jsx)(N.a,Object(d.a)(Object(d.a)({},i),{},{children:s.map((function(e){return Object(x.jsx)("div",{className:"w-full h-56 md:h-80 py-3",children:Object(x.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path),alt:"testing",className:"w-full h-full"})})}))}))}),Object(x.jsx)("div",{className:"hidden lg:block",children:Object(x.jsx)(N.a,Object(d.a)(Object(d.a)({},n),{},{children:s.map((function(e){return Object(x.jsx)("div",{className:"w-full h-96 px-2 py-3",children:Object(x.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path),alt:"testing",className:"w-full h-full rounded-md"})})}))}))})]})},T=function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p,{}),Object(x.jsx)(S,{}),e.children]})},C=["component"],D=function(e){var t=e.component,s=Object(j.a)(e,C);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(b.a,Object(d.a)(Object(d.a)({},s),{},{component:function(e){return Object(x.jsx)(T,{children:Object(x.jsx)(t,Object(d.a)({},e))})}}))})},_=a.a.createContext(),P=function(e){var t=e.children,s=Object(c.useState)({id:0,original_title:"",backdrop_path:"",poster_path:""}),a=Object(w.a)(s,2),n=a[0],i=a[1];return Object(x.jsx)(_.Provider,{value:{movie:n,setMovie:i},children:t})},E=function(){var e=Object(c.useContext)(_).movie;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"text-white flex items-center justify-between",children:[Object(x.jsx)("div",{children:Object(x.jsx)("h3",{className:"text-xl font-bold",children:e.original_title})}),Object(x.jsx)("div",{className:"w-8 h-8",children:Object(x.jsx)(m.f,{className:"w-full h-full"})})]})})},M=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container mx-auto px-4 flex items-center justify-between",children:[Object(x.jsxs)("div",{className:"flex item-center w-1/2 gap-3",children:[Object(x.jsx)("div",{className:"w-12 h-12",children:Object(x.jsx)("img",{src:"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",alt:"Logo"})}),Object(x.jsxs)("div",{className:"w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md",children:[Object(x.jsx)(m.e,{}),Object(x.jsx)("input",{type:"search",className:"w-full bg-transparent border-none focus:outline-none",placeholder:"Search for Movies, Events, Plays, Sports and Activities"})]})]}),Object(x.jsxs)("div",{className:"flex items-center gap-3",children:[Object(x.jsxs)("span",{className:"text-gray-200 text-xs flex items-center cursor-pointer hover:text-white",children:["Kolkata ",Object(x.jsx)(m.a,{})]}),Object(x.jsx)("button",{className:"bg-red-600 text-white px-2 py-1 text-sm rounded",children:"Sign in"}),Object(x.jsx)("div",{className:"w-8 h-8 text-white",children:Object(x.jsx)(m.d,{className:"w-full h-full"})})]})]})})},R=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("nav",{className:"absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-4",children:[Object(x.jsx)("div",{className:"md:hidden",children:Object(x.jsx)(E,{})}),Object(x.jsx)("div",{className:"hidden md:block lg:hidden",children:Object(x.jsx)(E,{})}),Object(x.jsx)("div",{className:"hidden w-full lg:flex",children:Object(x.jsx)(M,{})})]})})},B=function(e){var t=Object(b.e)().id,s=Object(c.useContext)(_),a=(s.movie,s.setMovie);return Object(c.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/movie/".concat(t));case 2:s=e.sent,a(s.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(R,{}),e.children]})},I=["component"],A=function(e){var t=e.component,s=Object(j.a)(e,I);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(b.a,Object(d.a)(Object(d.a)({},s),{},{component:function(e){return Object(x.jsx)(B,{children:Object(x.jsx)(t,Object(d.a)({},e))})}}))})},z=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"w-full h-30 px-2",children:Object(x.jsx)("img",{className:"w-full h-full rounded-xl",src:e.src,alt:"entertainment image"})})})},W=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N.a,Object(d.a)(Object(d.a)({},{Infinity:!1,autoplay:!1,slidesToShow:4,slidesToScroll:4,InitialSlide:0,Responsive:[{breakpoints:1024,settings:{slidesToShow:3,slidesToScroll:2,infinite:!0}},{breakpoints:768,settings:{slidesToShow:2,slidesToScroll:1,InitialSlide:1}},{breakpoints:480,settings:{slidesToShow:2,slidesToScroll:1}}]}),{},{children:["https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjIwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/food-n-drinks-collection-202010061250.png","https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png"].map((function(e){return Object(x.jsx)(z,{src:e})}))}))})},K=function(e){return Object(x.jsx)(l.b,{to:"/movie/".concat(e.id),children:Object(x.jsxs)("div",{className:"flex flex-col items-start gap-2 px-1 md:px-3",children:[Object(x.jsx)("div",{className:"h-40 md:h-80",children:Object(x.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:e.original_title,className:"w-full h-full rounded-md"})}),Object(x.jsx)("h3",{className:"text-lg font-bold ".concat(e.isDark?"text-white":"text-gray-700"," "),children:e.original_title}),Object(x.jsx)("p",{className:"text-sm ".concat(e.isDark?"text-white":"text-gray-700"," "),children:e.subtitle})]})})},V={Infinity:!1,speed:500,slidesToShow:5,slidesToScroll:4,InitialSlide:0,Responsive:[{breakpoints:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoints:768,settings:{slidesToShow:2,slidesToScroll:2,InitialSlide:2}},{breakpoints:480,settings:{slidesToShow:3,slidesToScroll:1}}]},q=function(e){var t=e.config?e.config:V;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"flex flex-col items-start my-2",children:[Object(x.jsx)("h3",{className:"text-2xl font-bold ".concat(e.isDark?"text-white":"text-gray-700"),children:e.title}),Object(x.jsx)("p",{className:"text-sm ".concat(e.isDark?"text-white":"text-gray-700"),children:e.subtitle})]}),Object(x.jsx)(N.a,Object(d.a)(Object(d.a)({},t),{},{children:e.images.map((function(t){return Object(x.jsx)(K,Object(d.a)(Object(d.a)({},t),{},{isDark:e.isDark}))}))}))]})},L=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)([]),i=Object(w.a)(n,2),l=i[0],r=i[1],d=Object(c.useState)([]),j=Object(w.a)(d,2),b=j[0],m=j[1];return Object(c.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/movie/popular");case 2:t=e.sent,a(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/movie/top_rated");case 2:t=e.sent,r(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/movie/upcoming");case 2:t=e.sent,m(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"flex flex-col gap-10",children:[Object(x.jsxs)("div",{className:"container mx-auto px-4",children:[Object(x.jsx)("h1",{className:"text-2xl font-bold text-gray-800 my-3",children:"The Best of Entertainment"}),Object(x.jsx)(W,{})]}),Object(x.jsx)("div",{className:"bg-bms-800 py-12",children:Object(x.jsxs)("div",{className:"container mx-auto px-4 flex flex-col gap-3",children:[Object(x.jsx)("div",{className:"hidden md:flex",children:Object(x.jsx)("img",{src:"https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png",alt:"Rupay",className:"w-full h-full"})}),Object(x.jsx)(q,{images:s,title:"Premieres",subtitle:"Watch new movies at home every Friday",isDark:!0})]})})]}),Object(x.jsx)("div",{className:"container mx-auto px-4 my-8",children:Object(x.jsx)(q,{images:l,title:"Online Streaming Events",isDark:!1})}),Object(x.jsx)("div",{className:"container mx-auto px-4 my-8",children:Object(x.jsx)(q,{images:b,title:"Outdoor Events",isDark:!1})})]})},U=s(42),H=s(110),Z=s(109);function Y(e){var t=e.isOpen,s=e.setIsOpen,a=e.price;function n(){s(!1)}return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(H.a,{appear:!0,show:t,as:c.Fragment,children:Object(x.jsx)(Z.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto z-50",onClose:n,children:Object(x.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(x.jsx)(H.a.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(x.jsx)(Z.a.Overlay,{className:"fixed inset-0"})}),Object(x.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(x.jsx)(H.a.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(x.jsxs)("div",{className:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:[Object(x.jsx)(Z.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Please make a payment"}),Object(x.jsx)("div",{className:"mt-2",children:Object(x.jsx)("p",{className:"text-sm text-gray-500",children:"Please click on the button below to make a payment."})}),Object(x.jsxs)("div",{className:"w-full mt-4",children:[Object(x.jsxs)("button",{type:"button",className:"w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500",onClick:function(){var e={key:"rzp_test_ZHNoRqJjxYihVm",amount:100*a,currency:"INR",name:"Book My Show Clone",description:"Movie Purchase or Rental",image:"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",handler:function(){s(!1),alert("Payment Done")},theme:{color:"#c4242d"}};new window.Razorpay(e).open()},children:["Pay \u20b9",a]}),Object(x.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500",onClick:n,children:"Cancel Payment"})]})]})})]})})})})}var J=function(){var e,t=Object(c.useState)(!1),s=Object(w.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)(0),l=Object(w.a)(i,2),r=l[0],o=l[1],d=Object(c.useContext)(_).movie,j=null===(e=d.genres)||void 0===e?void 0:e.map((function(e){return e.name})).join(",");return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Y,{setIsOpen:n,isOpen:a,price:r}),Object(x.jsxs)("div",{className:"flex flex-col gap-3 lg:gap-8",children:[Object(x.jsxs)("div",{className:"flex items-center gap-3 md:px-4",children:[Object(x.jsx)("div",{className:"w-40 h-8",children:Object(x.jsx)("img",{src:"https://in.bmscdn.com/moviemode/tvod/premiere-tag.png",alt:"premiere",className:"w-full h-full"})}),Object(x.jsx)("span",{className:"bg-bms-700 p-1 text-xs text-white rounded-md",children:"Streaming Now"})]}),Object(x.jsx)("h1",{className:"hidden lg:block text-white lg:text-5xl font-bold",children:d.original_title}),Object(x.jsxs)("div",{className:"flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col",children:[Object(x.jsxs)("div",{className:"text-white font-light flex flex-col gap-2 md:px-4",children:[Object(x.jsxs)("h4",{children:["4K \u2022 ",d.original_language," \u2022 Action "]}),Object(x.jsxs)("h4",{children:[(d.runtime/60).toFixed(2)," h \u2022 ",j," \u2022 16+ \u2022 18 Mar,2021"," "]})]}),Object(x.jsxs)("div",{className:"flex items-center gap-3 md:px-4 md:w-screen lg:w-full",children:[Object(x.jsx)("button",{onClick:function(){n(!0),o(149)},className:"bg-red-600 w-full py-3 text-white font-semibold rounded-lg",children:"Rent \u20b9149"}),Object(x.jsx)("button",{onClick:function(){n(!0),o(689)},className:"bg-red-600 w-full py-3 text-white font-semibold rounded-lg",children:"Buy \u20b9689"})]})]})]})]})},G=function(){var e=Object(c.useContext)(_).movie;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"relative md:hidden w-full",style:{height:"calc(180vw)"},children:[Object(x.jsx)("div",{className:"absolute z-20 bottom-4 left-4",children:Object(x.jsx)(J,{})}),Object(x.jsx)("div",{className:"w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0"}),Object(x.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:"poster",className:"w-full h-full"})]}),Object(x.jsxs)("div",{className:"relative hidden md:block w-full lg:hidden",style:{height:"calc(100vw)"},children:[Object(x.jsx)("div",{className:"w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0"}),Object(x.jsx)("div",{className:"absolute z-20 bottom-4",children:Object(x.jsx)(J,{})}),Object(x.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:"poster",className:"w-full h-full"})]}),Object(x.jsxs)("div",{className:"relative hidden w-full lg:block",style:{height:"30rem"},children:[Object(x.jsx)("div",{className:"absolute z-10 w-full h-full",style:{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}),Object(x.jsxs)("div",{className:"absolute z-30 left-24 top-10 flex items-center gap-10",children:[Object(x.jsx)("div",{className:"w-64 h-96",children:Object(x.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:"poster",className:"w-full h-full rounded-xl"})}),Object(x.jsx)("div",{children:Object(x.jsx)(J,{})})]}),Object(x.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path),alt:"poster",className:"w-full h-full"})]})]})})},X=function(e){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"flex flex-col items-center",children:[Object(x.jsx)("div",{className:"w-32 h-32",children:Object(x.jsx)("img",{src:e.image,alt:"crew man",className:"w-full h-full rounded-full"})}),Object(x.jsx)("h1",{className:"text-xl text-gray-800",children:e.castName}),Object(x.jsxs)("h5",{className:"text-sm text-gray-500",children:["as ",e.role]})]})})},Q=function(){var e=Object(b.e)().id,t=Object(c.useContext)(_).movie,s=Object(c.useState)([]),a=Object(w.a)(s,2),n=a[0],i=a[1],l=Object(c.useState)([]),r=Object(w.a)(l,2),j=r[0],m=r[1],h=Object(c.useState)([]),u=Object(w.a)(h,2),f=u[0],p=u[1];Object(c.useEffect)((function(){(function(){var t=Object(v.a)(g.a.mark((function t(){var s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/movie/".concat(e,"/credits"));case 2:s=t.sent,i(s.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(c.useEffect)((function(){(function(){var t=Object(v.a)(g.a.mark((function t(){var s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/movie/".concat(e,"/similar"));case 2:s=t.sent,m(s.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(c.useEffect)((function(){(function(){var t=Object(v.a)(g.a.mark((function t(){var s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/movie/".concat(e,"/recommendations"));case 2:s=t.sent,p(s.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var O={infinite:!1,speed:500,slidesToShow:4,slidesToScroll:4,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:1}}]};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(G,{}),Object(x.jsxs)("div",{className:"my-12 container px-4 lg:ml-20 lg:w-2/3",children:[Object(x.jsxs)("div",{className:"flex flex-col item-start gap-3",children:[Object(x.jsx)("h2",{className:"text-gray-800 font-bold text-2xl",children:"About the movie"}),Object(x.jsx)("p",{children:t.overview})]}),Object(x.jsx)("div",{className:"my-8",children:Object(x.jsx)("hr",{})}),Object(x.jsxs)("div",{className:"my-8",children:[Object(x.jsx)("h2",{className:"text-gray-800 font-bold text-2xl mb-3",children:"Applicable offers"}),Object(x.jsxs)("div",{className:"flex flex-col gap-3 lg:flex-row",children:[Object(x.jsxs)("div",{className:"flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md",children:[Object(x.jsx)("div",{className:"w-8 h-8",children:Object(x.jsx)(U.b,{className:"w-full h-full"})}),Object(x.jsxs)("div",{className:"flex flex-col item-start",children:[Object(x.jsx)("h3",{className:"text-gray-700 text-xl font-bold",children:"Visa Stream Offer"}),Object(x.jsx)("p",{className:"text-gray-600",children:"Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream."})]})]}),Object(x.jsxs)("div",{className:"flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md",children:[Object(x.jsx)("div",{className:"w-12 h-8",children:Object(x.jsx)(U.a,{className:"w-full h-full"})}),Object(x.jsxs)("div",{className:"flex flex-col item-start",children:[Object(x.jsx)("h3",{className:"text-gray-700 text-xl font-bold",children:"Filmy Pass"}),Object(x.jsx)("p",{className:"text-gray-600",children:"Get Rs75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass Rs.99"})]})]})]})]}),Object(x.jsx)("div",{className:"my-8",children:Object(x.jsx)("hr",{})}),Object(x.jsxs)("div",{className:"my-8",children:[Object(x.jsx)("h2",{className:"text-gray-800 font-bold text-2xl mb-4",children:"Cast & Crew"}),Object(x.jsx)(N.a,Object(d.a)(Object(d.a)({},{infinite:!1,speed:500,slidesToShow:6,slidesToScroll:4,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:5,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]}),{},{children:n.map((function(e){return Object(x.jsx)(X,{image:"https://image.tmdb.org/t/p/original/".concat(e.profile_path),castName:e.original_name,role:e.character})}))}))]}),Object(x.jsx)("div",{className:"my-8",children:Object(x.jsx)("hr",{})}),Object(x.jsx)("div",{className:"my-8",children:Object(x.jsx)(q,{config:O,images:j,title:"You might also like",isDark:!1})}),Object(x.jsx)("div",{className:"my-8",children:Object(x.jsx)("hr",{})}),Object(x.jsx)("div",{className:"my-8",children:Object(x.jsx)(q,{config:O,images:f,title:"BMS XCLUSIV",isDark:!1})})]})]})},$=s(108),ee=function(e){return Object(x.jsx)($.a,{children:function(t){var s=t.open;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)($.a.Button,{className:"py-2 flex items-center gap-3",children:[s?Object(x.jsx)(m.c,{}):Object(x.jsx)(m.a,{})," ",Object(x.jsx)("span",{className:s?"text-red-600":"text-gray-700",children:e.title})]}),Object(x.jsx)($.a.Panel,{className:"text-gray-500",children:Object(x.jsx)("div",{className:"flex item-center gap-3 flex-wrap",children:e.tags.map((function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"border-2 border-gray-200 px-3 py-2",children:Object(x.jsx)("span",{className:"text-red-600",children:e})})})}))})})]})}})},te=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"container mx-auto px-4",children:Object(x.jsxs)("div",{className:"w-full lg:flex lg:flex-row-reverse",children:[Object(x.jsxs)("div",{className:"lg:w-3/4",children:[Object(x.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Plays in Bengaluru"}),Object(x.jsxs)("div",{className:"flex flex-wrap ",children:[Object(x.jsx)("div",{className:"w-1/2 md:w-1/3 lg:w-3/12 my-3",children:Object(x.jsx)(K,{src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg",title:"`Kanthamathi` (Sadarame) Surabhi Theatre Play",subtitle:"Telugu -> \u20b9400"})}),Object(x.jsx)("div",{className:"w-1/2 md:w-1/3 lg:w-3/12 my-3",children:Object(x.jsx)(K,{src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg",title:"`Kanthamathi` (Sadarame) Surabhi Theatre Play",subtitle:"Telugu -> \u20b9400"})}),Object(x.jsx)("div",{className:"w-1/2 md:w-1/3 lg:w-3/12 my-3",children:Object(x.jsx)(K,{src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg",title:"`Kanthamathi` (Sadarame) Surabhi Theatre Play",subtitle:"Telugu -> \u20b9400"})}),Object(x.jsx)("div",{className:"w-1/2 md:w-1/3 lg:w-3/12 my-3",children:Object(x.jsx)(K,{src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg",title:"`Kanthamathi` (Sadarame) Surabhi Theatre Play",subtitle:"Telugu -> \u20b9400"})})]})]}),Object(x.jsxs)("div",{className:"lg:w-3/12 ",children:[Object(x.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Filters"}),Object(x.jsxs)("div",{children:[Object(x.jsx)(ee,{title:"Date",tags:["Today","Tomorrow","This Weekend"]}),Object(x.jsx)(ee,{title:"Language",tags:["Tamil","Telegu","English"]})]})]})]})})})};s(105),s(106);o.a.defaults.baseURL="https://api.themoviedb.org/3",o.a.defaults.params={},o.a.defaults.params.api_key="5a409d1a1f7a2735453d768301f73e87";var se=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(D,{path:"/",exact:!0,component:L}),Object(x.jsx)(A,{path:"/movie/:id",exact:!0,component:Q}),Object(x.jsx)(D,{path:"/plays",exact:!0,component:te})]})};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(l.a,{children:Object(x.jsx)(P,{children:Object(x.jsx)(se,{})})})}),document.getElementById("root"))},60:function(e,t,s){}},[[107,1,2]]]);
//# sourceMappingURL=main.38ae84af.chunk.js.map