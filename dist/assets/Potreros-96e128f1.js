import{r as c,j as l}from"./index-ba945616.js";const g=()=>{const[d,f]=c.useState([]),[h,u]=c.useState(0);c.useEffect(()=>{fetch("https://raw.githubusercontent.com/cristianlondonot/mandounificado-spidersoft/main/data-factor.json").then(o=>o.json()).then(o=>{const t=o.reduce((r,a)=>{const i=a.NOMBRE;return r[i]?r[i]++:r[i]=1,r},{}),e=Object.entries(t).map(([r,a])=>({veredaBarrio:r,count:a}));f(e);const n=e.reduce((r,a)=>r+a.count,0)/e.length;u(n)}).catch(o=>console.error("Error al cargar los datos:",o))},[]);const m=o=>{var s;const t=((s=d.find(n=>n.veredaBarrio===o))==null?void 0:s.count)||0;let e="#656565";return t<=3?e="#387905":t<=6?e="#feba00":t<=9?e="#F2860D":t<=12?e="#fc6107":t<15&&(e="#FC0707"),e};return l.jsx("div",{className:"w-full min-h-96",children:l.jsx("svg",{id:"uuid-0f15d938-6621-4fd4-8b40-8be4261f4004",xmlns:"http://www.w3.org/2000/svg",width:198.3,height:267.62,viewBox:"0 0 198.3 267.62",className:"m-auto",children:l.jsx("polygon",{fill:m("POTREROS"),className:"uuid-5f321167-2d2d-4c95-815c-bdb6029593b1",points:"180.53 152.72 176.03 154.98 167.57 160.05 164.2 160.62 161.38 161.19 150.72 166.83 145.65 169.63 138.89 174.7 135.5 177.52 121.41 185.42 118.02 187.67 114.09 191.06 111.83 192.18 109.58 192.74 107.31 193.31 100.55 196.68 98.3 198.39 97.18 199.5 92.66 200.64 87.03 201.25 84.78 201.25 83.64 198.93 81.39 187.1 79.71 185.42 74.07 184.28 71.81 183.17 65.09 174.7 59.45 165.69 59.45 162.87 56.65 157.8 54.95 153.86 50.44 151.61 47.07 151.61 42.55 149.35 37.47 148.75 34.1 149.35 29.03 148.75 25.09 143.11 23.39 138.03 22.27 134.64 20.57 131.27 18.31 127.88 19.45 125.06 20.02 120.52 18.31 116.01 17.77 110.37 19.45 103.04 23.39 101.36 30.15 96.8 35.79 91.15 36.36 89.47 35.79 82.14 36.92 78.75 39.18 72 43.11 68.63 46.5 66.37 53.26 74.25 58.9 79.89 66.78 84.4 71.81 88.9 76.32 92.86 80.82 97.4 87.6 100.79 92.11 101.91 101.12 104.73 107.88 106.98 114.64 106.43 118.59 104.73 120.85 105.3 122.53 106.98 124.23 111.49 125.35 117.7 129.29 125.06 134.36 132.39 137.18 135.21 142.26 139.17 147.33 139.72 152.97 139.72 155.22 141.97 156.91 144.79 159.69 146.49 163.63 147.04 168.7 148.75 172.07 150.47 176.03 151.61 180.53 152.72"})})})};export{g as default};
