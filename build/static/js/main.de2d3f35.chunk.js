(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),i=s(5),n=s.n(i),r=(s(10),s(11),s(12),s(2)),l=s(3),o=s(0),j=c.a.createContext();function d(e){var t=Object(a.useState)({teachers:1,people:12,infecteds:1,maskEfficiency:0,maskPopulation:1,duration:1,ventilation:.1,firstOrderLoss:1.02,totalCO2ExhaladoPMinuto:3.32444,totalCO2ExhaladoPSegundo:.05540733333,totalCO2Ambiente:1085,roomHeight:2.4,roomWidth:6,roomLarge:10,roomVolumeM3:144,co2Exterior:415,infectedExhalation:60,netEmissionRate:60,avrConcentrationOfQuantas:.1524233228,InhaledQuantasByPerson:.07926012787,infectionProbability:7.52}),s=Object(l.a)(t,2),c=s[0],i=s[1];function n(e,t){var s=c.roomVolumeM3,a=c.firstOrderLoss,n=c.duration,l=e/a/s*(1-1/a/n*(1-Math.exp(-a*n)));console.log(t),i(Object(r.a)(Object(r.a)({},c),{},{avrConcentrationOfQuantas:l}));d(l,undefined,e,t)}function d(e,t,s,a){var n=c.duration,l=c.maskEfficiency,o=c.maskPopulation;if(t){console.log("Existe duracion");var j=.52*e*t*(1-l*o),d=100*(1-Math.exp(-j)),m=b(t);i(Object(r.a)(Object(r.a)({},c),{},{InhaledQuantasByPerson:j,duration:t,avrConcentrationOfQuantas:e,infectionProbability:d,totalCO2Ambiente:m}))}else{console.log("NO existe duracion");var u=.52*e*n*(1-a*o),O=100*(1-Math.exp(-u));i(Object(r.a)(Object(r.a)({},c),{},{InhaledQuantasByPerson:u,avrConcentrationOfQuantas:e,infectionProbability:O,netEmissionRate:s,maskEfficiency:a}))}}function b(e){var t=c.totalCO2ExhaladoPSegundo,s=c.roomVolumeM3,a=c.ventilation,i=c.co2Exterior;return 3.6*t/a/s*(1-1/a/e*(1-Math.exp(-a*e)))*1e6+i}var m={room:c,setRoom:i,updateAvrConcentrationOfQuantasNER:n,updateAvrConcentrationOfQuantasVENT:function(e){var t=c.netEmissionRate,s=c.roomVolumeM3,a=c.duration,n=e+.92,l=t/n/s*(1-1/n/a*(1-Math.exp(-n*a)));i(Object(r.a)(Object(r.a)({},c),{},{ventilation:e,avrConcentrationOfQuantas:l,firstOrderLoss:n})),d(l),function(e){var t=c.totalCO2ExhaladoPSegundo,s=c.roomVolumeM3,a=c.duration,n=c.co2Exterior,l=3.6*t/e/s*(1-1/e/a*(1-Math.exp(-e*a)))*1e6+n;i(Object(r.a)(Object(r.a)({},c),{},{totalCO2Ambiente:l,ventilation:e}))}(e)},updateAvrConcentrationOfQuantasDURATION:function(e){var t=c.netEmissionRate,s=c.roomVolumeM3,a=c.firstOrderLoss;d(t/a/s*(1-1/a/e*(1-Math.exp(-a*e))),e),b(e)},updateNetEmissionRateMASK:function(e){n(c.infectedExhalation*(1-e*c.maskPopulation)*c.infecteds,e)},updateInhaledQuantasByPerson:d};return Object(a.useEffect)((function(){console.log(c)})),Object(o.jsx)(j.Provider,Object(r.a)({value:m},e))}function b(){var e=c.a.useContext(j);if(!e)throw new Error("useRoom debe estar dentro del proveedor RoomContext");return e}var m=s.p+"static/media/Estudiante10.4427dc84.svg",u=s.p+"static/media/Estudiante8.00c6f422.svg",O=s.p+"static/media/Estudiante7.2de939df.svg",x=s.p+"static/media/Estudiante6.b7d71359.svg",p=s.p+"static/media/Estudiante5.525c694b.svg",h=s.p+"static/media/Estudiante4.ea653e95.svg",v=s.p+"static/media/Estudiante3.e311d1b6.svg",f=s.p+"static/media/Estudiante2.1fb01330.svg",g=s.p+"static/media/Teacher.e452ae2f.svg",N=s.p+"static/media/TeacherDesk.57db871a.svg",C=s.p+"static/media/Bookshelf.57b98b4a.svg",E=s.p+"static/media/BarbijoDeTela.47da2baa.svg",S=s.p+"static/media/BarbijoQuirurgico.0579a8ca.svg",w=s.p+"static/media/BarbijoKN95.5143a7dd.svg",k=s.p+"static/media/VentCerradaD.d59c065c.svg",A=s.p+"static/media/VentParcialD.755553db.svg",P=s.p+"static/media/VentAbiertaD.d3fe3912.svg",V=s.p+"static/media/VentSystemD.16fd7dff.svg";function y(e){return Object(o.jsx)("div",{className:"room-container",children:Object(o.jsx)("div",{className:"room",children:Object(o.jsxs)("div",{className:"room-floor floor-shadow",children:[Object(o.jsx)(M,{room:e}),Object(o.jsx)(B,{})]})})})}function M(e){return Object(o.jsxs)("div",{className:"room-grid",children:[Object(o.jsx)(R,{}),Object(o.jsx)(T,{tipo:x}),Object(o.jsx)(T,{tipo:f}),Object(o.jsx)(T,{tipo:v}),Object(o.jsx)(I,{}),Object(o.jsx)(T,{tipo:h}),Object(o.jsx)(T,{tipo:p}),Object(o.jsx)(T,{tipo:x}),Object(o.jsx)(T,{tipo:O}),Object(o.jsx)(T,{tipo:u,inf:1}),Object(o.jsx)(T,{tipo:v}),Object(o.jsx)(F,{}),Object(o.jsx)(T,{tipo:m}),Object(o.jsx)(T,{tipo:f}),Object(o.jsx)(T,{tipo:p})]})}function B(){var e=b().room;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"left-wall wall",children:Object(o.jsx)(Q,{vent:e.ventilation})}),Object(o.jsx)("div",{className:"right-wall wall"})]})}function Q(e){return Object(o.jsx)("div",{className:"window-container window-wrapper",children:function(e){switch(e){default:case.1:return Object(o.jsx)("img",{className:"window-closed",src:k,alt:"Ventilaci\xf3n"});case 3:return Object(o.jsx)("img",{className:"window-parcial",src:A,alt:"Ventilaci\xf3n"});case 5:return Object(o.jsx)("img",{className:"window-open",src:P,alt:"Ventilaci\xf3n"});case 7:return Object(o.jsx)("img",{className:"window-system",src:V,alt:"Ventilaci\xf3n"})}}(e.vent)})}function R(){return Object(o.jsx)("div",{className:"iso-element",children:Object(o.jsx)("div",{className:"shelf-wrapper",children:Object(o.jsx)("img",{src:C,alt:"Biblioteca"})})})}function T(e){var t=b().room;return Object(o.jsx)("div",{className:1===e.inf?"iso-element iso-infected":"iso-element",children:Object(o.jsx)("div",{className:"iso-box",children:Object(o.jsxs)("div",{className:"student-wrapper",children:[Object(o.jsx)(D,{maskType:t.maskEfficiency}),Object(o.jsx)("img",{src:e.tipo,alt:"Estudiante"})]})})})}function D(e){return function(e){switch(e){case.5:return Object(o.jsx)("img",{className:"mask",src:E,alt:"Barbijo"});case.65:return Object(o.jsx)("img",{className:"mask",src:S,alt:"Barbijo"});case.9:return Object(o.jsx)("img",{className:"mask",src:w,alt:"Barbijo"});case 0:default:return Object(o.jsx)(o.Fragment,{})}}(e.maskType)}function I(){return Object(o.jsx)("div",{className:"iso-element doble",children:Object(o.jsx)("div",{className:"people-wrapper",children:Object(o.jsx)("img",{src:g,alt:"Profesora"})})})}function F(){return Object(o.jsx)("div",{className:"iso-element",children:Object(o.jsx)("div",{className:"iso-box",children:Object(o.jsx)("div",{className:"desk-wrapper",children:Object(o.jsx)("img",{src:N,alt:"Escritorio de profesora"})})})})}var K=s.p+"static/media/SelBarbijoNO.1162548f.svg",L=s.p+"static/media/SelBarbijoTela.a9905117.svg",J=s.p+"static/media/SelBarbijoQuirurgico.d04e8b43.svg",U=s.p+"static/media/SelBarbijoKN95.55b33fef.svg",q=s.p+"static/media/SelVentCerrada.857609f6.svg",H=s.p+"static/media/SelVentParcial.86030093.svg",W=s.p+"static/media/SelVentAbierta.48943e80.svg",z=s.p+"static/media/SelVentSystem.192b4bad.svg";function G(){return Object(o.jsxs)("div",{className:"room-parameters",children:[Object(o.jsx)("div",{className:"parameters-header",children:Object(o.jsx)("h5",{className:"parameters-title",children:"Par\xe1metros del ambiente"})}),Object(o.jsxs)("div",{className:"controllers-div",children:[Object(o.jsx)(X,{min:1,max:9,label:"duraci\xf3n",unit:"hr"}),Object(o.jsx)(Y,{}),Object(o.jsx)($,{})]})]})}function X(e){var t=e.min,s=e.max,a=e.label,c=e.unit,i=b(),n=i.room,r=i.updateAvrConcentrationOfQuantasDURATION;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h5",{className:"slider-title",children:"Duraci\xf3n de permanencia en ambiente:"}),Object(o.jsxs)("div",{className:"range shadow",children:[Object(o.jsxs)("div",{className:"slider-info",children:[Object(o.jsxs)("span",{className:"slider-value",children:[n.duration,c]}),Object(o.jsx)("span",{className:"slider-label",children:a})]}),Object(o.jsx)("div",{className:"field",children:Object(o.jsx)("input",{type:"range",min:t,max:s,value:n.duration,onChange:function(e){r(e.target.value)}})})]})]})}function Y(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),s=t[0],c=t[1],i=b().updateNetEmissionRateMASK,n=function(e){var t;switch(c(e),e){default:case 0:t=0;break;case 1:t=.5;break;case 2:t=.65;break;case 3:t=.9}i(t)};return Object(o.jsxs)("div",{className:"mask-selector-div",children:[Object(o.jsx)("h5",{children:"Selector de barbijo:"}),Object(o.jsxs)("ol",{children:[Object(o.jsx)("li",{className:0===s?"btn-selected":null,onClick:function(){return n(0)},children:Object(o.jsx)(Z,{src:K,label:"Ninguno",id:0})}),Object(o.jsx)("li",{className:1===s?"btn-selected":null,onClick:function(){return n(1)},children:Object(o.jsx)(Z,{src:L,label:"De tela",id:1})}),Object(o.jsx)("li",{className:2===s?"btn-selected":null,onClick:function(){return n(2)},children:Object(o.jsx)(Z,{src:J,label:"Quir\xfargico",id:2})}),Object(o.jsx)("li",{className:3===s?"btn-selected":null,onClick:function(){return n(3)},children:Object(o.jsx)(Z,{src:U,label:"N95",id:3})})]})]})}function Z(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:e.src,alt:"Selector de barbijo"}),Object(o.jsx)("p",{children:e.label})]})}function $(){var e=Object(a.useState)(.1),t=Object(l.a)(e,2),s=t[0],c=t[1],i=b().updateAvrConcentrationOfQuantasVENT,n=function(e){i(e),c(e)};return Object(o.jsxs)("div",{className:"mask-selector-div",children:[Object(o.jsx)("h5",{children:"Selector de ventilaci\xf3n:"}),Object(o.jsxs)("ol",{children:[Object(o.jsx)("li",{className:.1===s?"btn-selected":null,onClick:function(){return n(.1)},children:Object(o.jsx)(_,{src:q,label:"Ninguna",id:0})}),Object(o.jsx)("li",{className:3===s?"btn-selected":null,onClick:function(){return n(3)},children:Object(o.jsx)(_,{src:H,label:"Parcial",id:1})}),Object(o.jsx)("li",{className:5===s?"btn-selected":null,onClick:function(){return n(5)},children:Object(o.jsx)(_,{src:W,label:"Total",id:2})}),Object(o.jsx)("li",{className:7===s?"btn-selected":null,onClick:function(){return n(7)},children:Object(o.jsx)(_,{src:z,label:"Sistema",id:3})})]})]})}function _(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:e.src,alt:"Selector de ventilaci\xf3n"}),Object(o.jsx)("p",{children:e.label})]})}var ee=s.p+"static/media/Sensor.02a692fe.svg",te=s.p+"static/media/SensorNormal.c078f429.svg",se=s.p+"static/media/SensorAlto.37c94170.svg",ae=s.p+"static/media/SensorPeligro.b9c29bb2.svg";function ce(){var e=b().room;return Object(o.jsxs)("div",{className:"results-card",children:[Object(o.jsx)("div",{className:"results-header",children:Object(o.jsx)("h3",{className:"results-title",children:"Resultados"})}),Object(o.jsxs)("div",{className:"results-wrapper",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"ppm-card",children:[Object(o.jsxs)("h5",{className:"results-subtitle",children:["Total CO",Object(o.jsx)("sub",{children:"2"})," presente en el ambiente (partes por mill\xf3n):"]}),Object(o.jsxs)("h1",{className:e.totalCO2Ambiente<800?"ppmOK results-ppm":e.totalCO2Ambiente>=800&&e.totalCO2Ambiente<1400?"ppmAlto results-ppm":"ppmPeligro results-ppm",children:[parseInt(e.totalCO2Ambiente)," ppm"]})]}),Object(o.jsxs)("div",{className:"ppm-card",children:[Object(o.jsx)("h5",{className:"results-subtitle",children:"Probabilidad de contagio por persona (%):"}),Object(o.jsxs)("h1",{className:"results-ppm",children:[parseFloat(e.infectionProbability).toFixed(2)," %"]})]})]}),Object(o.jsx)(ie,{})]})]})}function ie(){var e=b().room;return Object(o.jsxs)("div",{className:"sensor-div",children:[Object(o.jsxs)("span",{className:"screen-result",children:[parseInt(e.totalCO2Ambiente)," ppm"]}),function(e){switch(e<800?0:e>=800&&e<1400?1:2){case 0:return Object(o.jsx)("img",{className:"sensor-img",src:te,alt:"Sensor"});case 1:return Object(o.jsx)("img",{className:"sensor-img",src:se,alt:"Sensor"});case 2:return Object(o.jsx)("img",{className:"sensor-img",src:ae,alt:"Sensor"});default:return Object(o.jsx)("img",{className:"sensor-img",src:ee,alt:"Sensor"})}}(e.totalCO2Ambiente),Object(o.jsxs)("h4",{children:["Medidor de CO",Object(o.jsx)("sub",{children:"2"})]})]})}function ne(){return Object(o.jsx)("div",{children:Object(o.jsx)(d,{children:Object(o.jsx)(re,{})})})}function re(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(y,{}),Object(o.jsx)(G,{})]}),Object(o.jsx)(ce,{})]})}function le(){return Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)("h1",{children:"Simulador de riesgo de contagio por aerosoles en ambientes cerrados"}),Object(o.jsxs)("p",{className:"header-text",children:["Siempre que las personas se re\xfanen en espacios cerrados, el riesgo de infecci\xf3n aumenta. Nuestra herramienta interactiva muestra c\xf3mo se propaga el ",Object(o.jsx)("b",{children:"COVID-19"}),"."]})]})}function oe(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(le,{}),Object(o.jsx)(ne,{})]})}var je=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("div",{className:"App-header",children:Object(o.jsx)(oe,{})})})};n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(je,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.de2d3f35.chunk.js.map