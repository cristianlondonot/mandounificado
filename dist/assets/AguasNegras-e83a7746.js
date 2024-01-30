import{r as l,j as e,D as m}from"./index-ba945616.js";const p=()=>{const[d,f]=l.useState([]),[x,u]=l.useState(0);l.useEffect(()=>{fetch("https://raw.githubusercontent.com/cristianlondonot/mandounificado-spidersoft/main/data-factor.json").then(t=>t.json()).then(t=>{const r=t.reduce((o,a)=>{const c=a.NOMBRE;return o[c]?o[c]++:o[c]=1,o},{}),s=Object.entries(r).map(([o,a])=>({veredaBarrio:o,count:a}));f(s);const n=s.reduce((o,a)=>o+a.count,0)/s.length;u(n)}).catch(t=>console.error("Error al cargar los datos:",t))},[]);const b=t=>{var i;const r=((i=d.find(n=>n.veredaBarrio===t))==null?void 0:i.count)||0;let s="#656565";return r<=3?s="#387905":r<=6?s="#feba00":r<=9?s="#F2860D":r<=12?s="#fc6107":r<15&&(s="#FC0707"),s};return e.jsxs("div",{className:"w-full min-h-96",children:[e.jsx(m,{id:"my-tooltip"}),e.jsxs("svg",{id:"uuid-fd4ce565-7aa7-4e99-b8b1-afd163519a7d",xmlns:"http://www.w3.org/2000/svg",width:238.43,height:255.12,xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 138.43 155.12",className:"m-auto",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`.uuid-d200dff4-2702-41f9-b0c1-fc72542b5a9a{fill:${b("AGUAS NEGRAS")};fill-rule:evenodd;stroke:#fff;stroke-miterlimit:10;stroke-width:2px;}`}),e.jsxs("filter",{id:"uuid-44b36b7a-09b5-475f-907c-471d3487bb11",filterUnits:"userSpaceOnUse",children:[e.jsx("feOffset",{dx:0,dy:2}),e.jsx("feGaussianBlur",{result:"uuid-51344424-e355-46e7-96bf-b1c31bb99596",stdDeviation:2}),e.jsx("feFlood",{floodColor:"#000",floodOpacity:.93}),e.jsx("feComposite",{in2:"uuid-51344424-e355-46e7-96bf-b1c31bb99596",operator:"in"}),e.jsx("feComposite",{in:"SourceGraphic"})]})]}),e.jsx("polygon",{className:"uuid-d200dff4-2702-41f9-b0c1-fc72542b5a9a",points:"137.43 47.8 137.43 48.55 137.43 49.05 137.43 49.58 137.43 50.08 137.43 50.33 137.18 50.58 136.68 50.83 136.43 50.83 135.93 50.83 135.68 50.83 135.68 50.58 135.43 50.58 135.18 50.58 135.18 50.33 134.68 50.08 134.43 50.08 133.93 50.08 133.7 50.08 133.45 50.08 133.2 49.83 132.69 49.83 132.19 49.83 131.94 49.83 131.69 49.83 131.44 50.08 131.19 50.08 130.94 50.33 131.19 50.83 131.44 50.58 131.69 50.33 131.94 50.33 132.44 50.33 132.69 50.58 132.94 50.58 133.2 50.58 133.45 50.83 133.7 50.83 133.93 51.08 134.18 51.33 134.43 51.58 134.43 51.83 134.68 51.83 134.68 52.08 134.93 52.33 134.68 52.83 134.43 53.08 134.18 53.08 133.93 53.33 133.7 53.58 133.7 54.08 133.45 54.58 133.45 54.83 133.45 55.08 133.45 55.58 133.45 56.08 133.93 56.58 134.18 57.08 134.18 57.58 133.93 57.83 133.7 58.08 133.45 58.08 132.94 58.08 132.69 58.08 132.44 58.08 132.19 58.08 131.94 58.08 131.94 58.33 131.94 58.58 131.94 58.84 132.19 59.09 132.44 59.34 132.44 59.59 132.19 59.84 132.19 60.09 132.19 60.34 132.19 61.11 132.19 61.36 132.19 61.86 132.19 62.11 131.94 62.36 131.69 62.36 131.44 62.36 131.19 62.36 130.69 62.36 130.69 62.11 130.19 62.11 130.19 61.86 130.19 61.36 130.19 61.11 129.94 61.11 129.44 61.11 129.19 61.11 128.94 61.36 128.44 61.36 128.19 61.36 128.44 61.61 128.94 61.61 129.19 61.61 129.44 61.61 129.69 61.86 129.69 62.11 129.44 62.36 129.44 62.61 129.44 62.86 129.69 62.86 129.94 62.61 129.94 62.86 130.19 62.86 130.44 63.11 130.94 63.11 131.19 62.86 131.44 62.86 131.44 63.11 131.44 63.36 131.19 63.36 130.94 63.61 130.69 63.61 130.44 63.61 129.94 63.86 129.69 63.86 129.19 64.11 128.94 64.36 128.94 64.86 129.19 64.86 129.44 64.61 129.69 64.36 129.94 64.36 130.19 64.36 130.44 64.11 130.69 64.11 130.94 64.11 131.19 64.11 131.44 63.86 131.69 63.86 131.94 64.11 131.94 64.36 131.69 64.61 131.69 64.86 131.69 65.11 131.69 65.61 131.69 66.11 131.44 66.36 131.19 66.86 130.94 66.86 130.44 67.61 129.94 68.12 129.69 68.37 129.69 68.87 129.69 69.12 129.19 70.62 129.19 71.37 129.19 71.62 129.19 71.87 129.19 72.12 129.19 72.37 128.94 72.62 128.69 72.62 128.44 72.62 128.19 73.12 127.69 73.62 127.44 73.62 127.19 73.37 126.94 73.37 126.69 73.12 126.44 73.12 126.44 73.37 126.44 73.87 126.19 73.87 125.94 73.87 125.69 73.87 125.44 73.87 124.69 73.87 123.94 73.37 123.44 73.37 122.94 73.37 122.68 73.37 122.43 73.37 122.18 73.37 121.93 73.62 121.68 73.87 121.43 73.87 120.93 73.87 120.68 74.12 120.43 74.12 120.18 74.37 119.93 74.37 119.43 74.37 118.68 73.87 117.93 73.87 117.43 73.87 117.18 73.87 116.93 73.87 116.68 73.62 116.43 73.62 116.18 73.62 116.18 73.12 115.93 73.12 115.68 72.87 115.68 72.37 115.68 72.12 115.43 71.87 115.18 71.87 114.93 71.87 114.68 71.62 114.43 71.62 114.18 71.62 113.93 71.62 113.43 71.62 112.93 71.37 112.17 70.87 111.92 70.62 111.67 70.37 111.67 70.12 111.42 69.62 111.42 69.37 111.42 69.12 111.42 68.87 111.42 68.62 111.17 68.62 110.92 68.62 110.67 68.62 110.17 68.12 109.92 67.86 109.92 67.61 109.67 67.61 109.67 67.36 109.67 67.11 109.42 66.86 109.42 66.61 109.17 66.61 109.17 66.36 108.92 66.11 108.92 65.86 108.92 65.61 108.67 65.36 108.67 65.11 108.67 64.86 108.67 64.61 108.42 64.61 108.42 64.36 108.17 64.11 107.92 64.11 107.67 64.11 107.42 63.86 107.17 63.86 106.92 63.86 106.92 64.11 106.67 64.11 106.67 64.36 106.42 64.61 106.17 64.86 106.17 65.11 106.17 65.36 105.92 65.36 105.92 65.61 106.17 66.11 106.42 66.36 106.67 66.61 106.67 66.86 106.67 67.11 106.67 67.36 106.42 67.61 106.17 67.61 105.92 67.61 105.67 67.61 105.42 67.61 104.92 67.61 104.92 67.36 104.67 67.36 104.67 67.11 104.42 66.86 104.17 66.86 103.67 66.36 103.17 66.36 102.92 66.36 102.42 66.36 102.16 66.36 101.91 66.36 101.66 66.61 101.41 66.86 101.16 67.11 100.91 67.11 100.66 67.11 100.41 67.11 100.16 66.86 99.91 66.61 99.66 66.61 99.66 66.86 99.91 66.86 100.16 67.36 100.16 67.61 100.16 67.86 99.91 68.12 99.66 68.12 99.41 68.37 98.66 68.37 98.41 68.37 98.16 68.37 97.91 68.37 97.66 68.37 97.41 68.37 97.16 68.62 96.91 68.87 96.91 70.37 96.91 70.62 96.91 70.87 96.66 71.12 96.66 71.37 96.66 71.62 96.66 71.87 96.91 72.12 97.16 72.12 97.41 72.37 97.66 72.62 98.41 72.87 98.66 72.87 99.16 73.12 99.66 73.37 99.91 73.62 100.16 73.87 100.41 73.87 100.66 73.87 101.16 74.12 101.41 74.37 101.91 74.62 102.16 74.87 102.67 75.12 102.92 75.12 103.17 75.37 103.67 75.87 103.92 76.62 104.17 76.87 104.67 77.37 105.17 77.37 105.67 77.12 105.92 77.12 106.17 76.87 106.42 76.87 106.67 76.87 106.92 76.62 107.17 76.62 107.17 76.37 107.17 76.12 107.17 75.87 107.42 75.87 107.67 75.87 107.67 76.12 107.67 76.37 107.67 76.62 107.42 77.12 107.42 77.37 107.67 77.62 107.67 77.87 108.17 78.12 108.42 78.38 108.92 78.63 109.17 78.88 109.17 79.13 109.17 79.38 108.92 79.63 108.67 79.63 108.42 79.63 108.17 79.63 108.17 80.13 108.42 80.38 108.92 80.38 109.17 80.38 109.17 80.13 109.42 80.13 109.42 79.88 109.67 79.88 109.92 79.63 110.17 79.88 110.42 80.13 110.67 80.38 110.92 80.88 111.17 81.13 111.42 81.38 111.67 81.63 112.17 82.13 112.42 82.38 112.93 82.88 112.93 83.13 113.18 83.38 113.43 83.63 113.68 83.9 113.93 84.4 114.18 84.65 114.43 85.15 114.43 85.4 114.43 85.65 114.68 85.9 114.68 86.15 114.93 86.4 114.93 86.65 115.18 86.9 115.43 87.15 115.43 87.4 115.68 87.65 115.93 87.91 115.93 88.16 115.68 88.16 115.93 88.41 115.93 88.66 115.93 89.16 115.93 89.41 116.18 89.91 116.18 90.16 116.18 90.41 116.43 90.66 116.43 90.91 116.43 91.16 116.18 91.41 116.18 91.66 116.18 91.91 116.18 92.16 116.18 92.41 116.43 92.66 116.68 92.91 116.68 93.41 116.43 93.66 116.18 94.16 116.18 94.41 115.93 94.91 115.93 95.43 116.18 95.68 116.18 95.93 115.93 96.18 115.68 95.68 115.68 95.43 115.43 94.91 115.18 94.66 114.93 94.16 114.68 93.66 114.43 93.16 114.18 92.91 113.93 92.16 113.93 91.66 113.93 91.41 113.93 91.16 113.93 90.66 113.68 90.16 113.68 89.91 113.43 89.66 112.93 89.16 112.93 88.66 112.68 88.16 112.68 87.65 112.42 87.65 112.17 87.4 111.92 87.65 111.92 87.91 111.67 88.16 111.42 88.16 111.42 87.91 111.42 87.4 111.67 86.9 111.67 86.65 111.67 86.4 111.67 86.15 111.42 85.9 111.17 85.9 110.92 85.9 110.92 86.15 110.67 86.15 110.42 85.9 110.42 85.65 110.67 85.4 110.67 84.9 110.67 84.65 110.42 84.15 110.17 83.9 109.92 83.9 109.67 83.63 109.67 83.38 109.67 83.13 109.17 82.88 108.92 82.63 108.67 82.38 108.42 82.38 107.92 81.88 107.67 81.63 106.92 80.88 106.67 80.63 106.42 80.38 106.17 80.38 105.92 80.63 105.92 80.88 105.67 80.88 105.42 80.88 105.42 80.38 105.42 80.13 104.92 79.63 104.67 79.38 103.17 78.88 102.92 78.38 102.67 78.38 102.67 78.12 102.42 77.87 102.16 77.87 101.66 77.87 101.41 77.62 101.16 77.37 101.16 77.12 100.91 77.37 100.66 77.37 100.16 77.37 99.91 77.37 99.66 77.37 99.41 77.37 99.16 77.37 98.91 77.62 98.91 77.87 98.91 78.12 98.91 78.38 98.91 78.63 99.16 78.88 99.16 79.13 99.16 79.63 99.41 79.88 99.41 80.13 99.91 80.13 100.16 80.38 100.16 80.63 100.41 80.63 100.66 80.88 100.66 81.38 100.66 81.63 100.66 81.88 100.66 82.38 100.66 82.63 100.91 82.88 101.16 83.13 101.41 83.38 101.41 83.63 101.66 84.15 101.91 84.4 101.91 84.65 101.91 84.9 101.66 85.15 101.41 85.15 101.16 85.4 100.91 85.65 100.66 85.65 100.66 85.4 100.66 85.15 100.91 84.9 100.91 84.65 100.91 84.4 100.91 84.15 100.66 84.15 100.16 83.9 99.91 83.9 99.66 83.9 99.41 83.9 99.16 83.38 99.41 83.13 99.41 82.63 99.41 82.38 99.41 82.13 99.41 81.88 99.41 81.63 99.16 81.63 98.91 81.13 98.66 80.88 98.41 80.88 98.16 80.63 97.91 80.38 97.66 80.13 97.66 79.88 97.66 79.38 97.66 79.13 97.41 79.13 97.41 79.38 97.16 79.63 96.91 79.63 96.91 79.88 96.91 80.13 96.66 80.38 96.66 80.63 96.41 80.63 96.66 80.88 96.66 81.13 96.91 81.38 97.16 81.63 96.91 81.63 96.66 81.63 96.66 81.38 96.41 81.63 96.41 81.88 96.41 82.88 96.41 83.38 96.66 83.9 96.66 84.4 96.66 84.65 96.66 85.15 96.66 85.4 96.66 85.65 96.91 85.9 97.16 85.9 97.41 85.9 97.66 86.15 97.66 86.4 97.66 86.65 97.66 87.15 97.91 87.4 97.66 87.65 97.41 87.4 97.41 87.15 97.41 86.65 97.41 86.4 97.16 86.4 96.66 86.4 96.41 86.15 96.16 85.9 96.16 85.65 96.16 85.4 96.16 85.15 96.16 84.4 96.16 83.9 95.91 83.63 95.41 83.63 95.16 83.63 94.91 83.63 94.66 83.9 94.66 84.15 94.41 84.4 94.41 84.15 94.41 83.9 94.41 83.63 94.41 83.38 94.16 83.38 94.41 83.13 94.66 83.13 94.91 83.13 94.91 82.88 95.16 82.88 95.16 82.63 94.91 82.63 94.66 82.38 94.66 82.13 94.41 81.88 94.41 81.63 94.41 81.38 94.41 81.13 94.66 80.88 94.66 80.63 94.91 80.13 94.91 79.63 95.41 79.13 95.66 78.88 95.91 78.38 96.16 77.87 96.16 77.62 95.66 77.62 95.41 77.62 95.16 77.62 95.16 77.87 94.91 78.12 94.91 78.38 94.91 78.63 94.66 79.13 94.16 79.63 93.91 79.88 93.91 79.63 93.91 79.13 94.16 78.63 94.41 78.38 94.16 78.12 93.68 78.12 93.41 78.12 93.18 78.38 93.18 78.88 92.93 78.88 92.66 78.88 92.18 78.63 91.9 78.63 91.9 78.38 92.18 78.38 92.66 78.12 93.18 77.87 93.41 77.37 93.68 77.37 94.16 77.12 94.16 76.87 94.16 76.37 94.16 76.12 93.91 76.12 93.68 75.87 93.68 75.62 93.18 75.37 92.43 75.37 92.18 75.37 91.9 75.37 91.4 75.62 91.4 75.87 91.4 76.12 91.4 76.62 91.4 76.87 91.68 77.12 91.68 77.37 91.15 77.62 90.92 77.62 90.65 77.87 90.65 77.62 90.65 77.37 90.65 77.12 90.42 76.62 90.17 76.62 89.9 76.62 89.67 76.62 89.42 76.62 89.15 76.62 89.15 76.37 88.92 76.12 88.65 75.87 88.4 75.87 88.17 75.87 87.65 75.62 87.42 75.87 87.15 75.87 86.92 75.87 86.92 76.12 87.15 76.37 87.42 76.87 87.65 77.37 87.65 77.62 87.9 77.87 87.9 78.38 88.17 78.38 88.4 78.63 88.4 78.88 88.17 78.88 87.65 78.88 87.42 78.63 87.42 78.12 87.15 77.87 86.92 77.62 86.67 77.62 86.17 77.62 85.92 77.87 85.92 78.12 85.65 78.38 85.42 78.63 85.42 78.88 85.42 79.13 85.65 79.38 85.92 79.63 86.17 79.88 86.4 80.38 86.4 80.63 87.15 81.38 87.42 81.88 87.9 82.38 88.17 82.63 88.65 83.13 88.65 83.38 88.65 83.63 89.15 83.9 89.15 84.15 89.42 84.4 89.42 84.65 89.67 84.65 89.67 84.9 89.9 85.15 89.9 85.4 89.67 85.4 89.42 85.4 89.42 85.15 89.15 84.9 88.92 84.65 88.65 84.4 88.4 84.15 88.17 84.15 87.9 84.4 87.9 84.65 87.65 84.65 87.65 84.15 87.65 83.9 87.42 83.63 87.42 83.38 87.42 83.13 86.92 83.13 86.4 83.13 86.17 83.13 85.92 83.38 86.17 83.63 86.4 84.15 86.4 84.4 86.4 84.9 86.17 85.15 85.92 84.9 85.65 84.65 85.42 84.15 85.15 83.9 85.15 83.38 84.9 83.38 84.67 83.38 84.67 83.13 84.67 82.88 84.9 82.63 84.9 82.13 84.67 82.13 84.17 82.13 83.92 82.13 83.92 82.38 83.92 82.63 83.92 83.13 83.92 83.63 84.17 84.15 84.4 84.65 84.9 84.9 85.15 85.4 85.65 85.65 85.92 86.15 86.4 86.15 87.42 86.65 88.17 86.65 88.65 86.9 88.92 87.15 89.67 88.16 89.9 88.66 89.9 89.16 89.9 89.41 89.67 89.91 89.67 90.16 90.17 90.41 90.42 90.41 90.65 90.66 90.92 90.66 90.92 91.16 90.65 91.16 90.42 91.16 90.42 91.41 90.42 91.66 90.42 91.91 90.65 92.16 90.65 92.41 90.65 92.66 90.65 92.91 90.65 93.41 90.42 93.66 90.42 93.91 90.42 94.16 90.65 94.41 90.92 94.66 91.15 94.91 91.15 95.93 91.15 96.18 91.15 96.68 91.15 96.93 91.15 97.44 91.15 97.94 91.15 98.19 91.4 99.19 91.4 99.69 91.68 99.94 91.9 100.19 92.43 100.44 92.66 100.44 92.93 100.44 93.18 100.19 93.41 99.94 93.68 99.69 93.68 99.44 93.91 99.44 94.16 99.19 94.16 98.94 94.41 98.69 94.41 98.44 94.66 98.19 94.66 98.44 94.66 98.69 94.66 98.94 94.66 99.19 94.66 99.44 94.66 99.69 94.41 99.94 94.16 100.19 93.91 100.19 93.68 100.44 93.68 100.69 93.41 100.69 93.18 100.94 92.93 101.19 92.93 101.44 92.93 101.69 93.18 101.94 93.41 102.19 93.91 102.44 94.41 102.94 94.91 103.19 94.91 103.44 94.91 103.69 95.16 103.94 95.66 104.44 95.91 104.69 96.16 104.94 96.41 104.94 96.41 105.19 96.66 105.19 96.66 105.44 97.16 105.69 97.66 105.94 97.91 106.19 97.91 106.44 97.66 106.44 97.66 106.69 97.91 106.97 98.16 106.97 98.66 106.97 98.91 107.22 99.16 107.22 99.16 106.97 99.41 106.97 99.41 106.44 99.66 106.44 99.66 106.19 99.91 106.19 100.16 106.44 100.16 106.69 100.16 107.22 100.16 107.47 100.41 107.72 100.66 107.72 100.91 107.72 101.16 107.72 101.41 107.72 101.66 107.97 101.91 107.97 102.16 107.72 102.16 107.47 102.42 107.22 102.42 106.69 102.42 106.44 102.16 105.94 102.16 105.69 102.16 105.44 102.16 105.19 102.16 104.94 102.16 104.69 102.42 104.69 102.42 104.94 102.67 105.19 102.67 105.44 102.67 105.69 102.67 106.19 102.67 106.69 102.67 106.97 102.67 107.22 102.92 107.22 102.92 107.72 103.17 107.72 103.42 107.72 103.67 107.97 103.92 107.97 104.17 108.22 104.92 108.22 105.17 107.97 105.42 107.72 105.67 107.72 105.92 107.72 106.17 107.72 106.17 107.97 106.42 107.97 106.67 107.97 107.17 107.97 107.67 107.97 108.17 107.72 108.42 107.47 108.67 107.47 108.92 107.47 109.17 107.47 109.42 107.22 109.67 107.22 110.17 106.97 110.42 106.69 110.67 106.44 110.67 106.19 110.42 105.94 110.67 105.69 110.92 105.69 111.42 105.44 111.92 105.19 112.17 105.19 112.68 104.94 113.18 104.44 113.18 104.19 113.43 103.94 113.68 103.94 113.93 103.94 114.18 103.94 114.43 103.69 114.43 103.19 114.43 102.94 114.68 102.94 114.93 102.94 115.18 102.69 115.43 102.69 115.43 102.44 115.43 101.94 115.43 101.69 115.43 101.44 115.18 101.44 114.93 101.19 114.68 100.94 114.93 100.69 115.18 100.94 115.43 100.94 115.43 100.69 115.43 100.44 115.43 100.19 115.43 99.94 115.68 99.94 116.18 99.94 116.43 99.69 116.93 99.69 117.43 99.19 117.68 99.19 117.93 98.94 118.18 98.94 118.18 99.44 118.18 99.69 117.93 99.94 117.43 100.19 117.18 100.19 117.18 100.44 117.18 100.69 117.43 100.69 117.68 100.94 117.68 101.44 117.68 101.69 117.68 102.19 117.68 102.44 117.93 102.69 118.18 102.94 118.43 103.19 118.43 103.69 118.68 103.94 118.93 103.94 119.18 103.94 119.43 103.94 120.43 104.44 120.68 104.69 120.93 104.69 121.43 104.69 121.93 104.94 121.93 105.19 121.68 105.19 121.43 105.19 120.68 104.94 120.43 104.94 120.18 104.94 119.93 104.94 119.68 105.19 119.43 105.19 119.18 105.19 118.93 105.19 118.68 105.19 118.43 105.19 117.93 104.94 117.68 104.94 117.18 104.94 116.93 105.19 116.68 105.44 116.68 105.69 116.68 105.94 116.68 106.19 116.68 106.44 116.93 106.69 117.18 106.69 117.43 106.69 117.68 106.69 117.68 106.97 117.43 106.97 117.18 106.97 116.68 106.97 116.68 107.22 116.68 107.47 116.68 107.97 116.68 108.22 116.43 108.47 116.43 107.97 116.43 107.72 116.18 107.47 116.18 107.22 116.18 106.69 116.18 106.44 115.68 106.44 115.43 106.44 114.93 106.44 114.68 106.44 114.43 106.44 113.93 106.97 113.93 107.22 113.68 107.72 113.43 107.97 113.18 108.22 112.68 108.47 112.42 108.72 112.17 108.97 111.92 108.97 111.67 109.22 111.42 109.72 110.92 109.97 110.67 109.97 110.42 109.97 109.92 109.97 109.67 110.22 109.17 110.22 109.17 110.47 109.42 110.72 109.67 111.22 109.92 111.22 109.92 111.47 109.67 111.47 109.42 111.47 109.17 110.97 108.92 110.97 108.42 110.97 108.17 110.97 107.92 111.22 107.67 110.97 107.42 110.97 107.17 110.97 106.92 110.97 106.67 110.97 106.42 110.97 106.17 111.22 105.92 111.22 105.92 111.47 105.67 111.72 105.67 111.97 105.67 112.22 105.92 112.72 105.92 112.97 106.17 113.22 106.42 113.22 106.42 113.47 106.67 113.47 106.92 113.47 107.17 113.47 107.42 113.72 107.67 113.97 107.67 114.47 107.42 114.97 107.42 115.22 107.42 115.72 107.67 115.97 108.17 115.97 108.42 115.97 108.92 116.22 109.17 116.22 109.67 116.73 109.92 116.98 109.92 117.23 109.67 117.23 109.17 116.98 108.92 116.73 108.92 116.47 108.67 116.47 108.42 116.73 107.67 116.73 106.92 116.22 106.92 115.97 106.67 115.97 106.42 115.97 105.92 115.97 105.67 115.97 105.42 115.72 105.17 115.72 104.92 115.47 104.67 115.47 104.92 115.22 105.17 115.47 105.42 115.47 105.92 115.72 106.17 115.72 106.42 115.72 106.67 115.47 106.67 115.22 106.67 114.97 106.42 114.47 106.17 114.47 105.92 114.22 105.67 113.97 105.42 113.47 105.17 113.22 104.92 112.72 104.42 112.22 104.17 112.22 103.67 112.22 103.42 112.22 103.17 111.97 102.92 111.97 102.42 111.97 102.16 112.22 101.91 112.72 101.91 112.97 101.66 112.97 101.66 113.47 101.41 113.72 101.16 113.97 101.16 114.22 100.91 114.47 100.66 114.72 100.16 114.72 100.16 114.47 100.41 114.22 100.66 113.97 100.66 113.72 100.91 113.72 100.91 113.22 101.16 112.97 101.16 112.47 101.16 112.22 101.41 111.72 101.41 111.47 100.91 111.47 100.66 111.72 100.41 111.72 100.16 111.72 99.91 111.72 99.66 111.72 99.41 111.97 99.16 111.97 98.91 111.72 98.66 111.72 98.41 111.72 98.41 111.97 98.16 112.22 98.16 112.47 97.91 112.47 97.91 112.72 97.91 112.97 97.91 113.22 97.66 113.47 97.41 113.47 97.16 113.47 97.16 113.22 97.41 112.97 97.66 112.72 97.66 112.47 97.66 111.97 97.91 111.72 97.91 111.47 97.91 111.22 97.91 110.97 97.66 110.97 97.16 110.97 96.66 110.97 96.41 110.97 96.41 110.72 95.91 110.47 95.41 110.22 95.16 110.22 94.91 110.22 94.91 110.72 94.66 110.97 94.66 111.22 94.41 111.47 93.91 111.97 93.68 112.47 93.68 112.72 93.68 113.22 94.16 113.72 94.41 113.97 94.66 114.22 94.91 114.72 95.16 114.97 95.41 115.47 95.41 115.72 95.41 115.97 94.66 115.97 91.15 116.73 89.42 117.23 88.65 117.48 87.65 117.48 87.9 117.23 88.17 116.98 88.17 116.73 88.4 116.47 88.65 115.97 88.65 115.72 89.15 115.22 89.15 114.47 89.15 114.22 88.92 113.72 88.92 113.47 88.92 113.22 88.92 112.97 88.65 112.72 88.4 112.97 87.9 113.72 87.65 113.97 87.42 114.47 87.15 114.97 87.15 115.72 86.92 115.97 87.15 116.22 86.92 116.98 86.4 116.47 86.4 116.22 86.17 116.22 85.92 115.97 85.65 115.97 85.65 116.22 85.42 116.22 85.15 116.47 84.9 116.73 84.67 116.98 84.4 117.23 84.17 117.73 84.17 117.98 84.17 118.23 83.92 118.23 83.92 117.98 83.65 117.98 83.42 117.98 83.17 117.98 83.17 118.23 82.9 118.48 82.67 118.48 82.4 118.73 81.92 118.98 81.39 119.48 81.39 119.73 81.39 119.98 81.64 120.23 81.92 120.23 82.15 120.48 82.4 120.48 82.67 120.48 82.9 120.73 83.17 120.98 83.65 121.23 83.65 121.48 83.92 121.48 83.65 121.48 83.42 121.48 83.17 121.23 82.9 120.98 82.67 120.98 82.4 120.73 82.15 120.73 81.92 120.73 81.64 120.48 81.39 120.48 80.89 120.48 80.89 120.73 80.66 120.73 80.66 120.98 80.66 121.23 80.66 121.48 80.66 121.98 80.89 122.73 81.17 122.98 81.17 123.48 81.17 123.98 81.17 124.73 81.17 124.98 81.39 125.23 81.39 125.48 81.64 125.48 81.92 125.48 82.15 125.23 82.4 125.23 82.4 124.98 82.67 124.98 82.9 124.98 82.9 125.23 82.67 125.48 82.4 125.48 82.15 125.73 81.92 125.73 81.92 125.98 81.92 126.23 82.15 126.48 81.92 126.73 81.92 126.99 81.64 127.24 81.64 127.74 81.64 127.99 81.39 128.24 81.17 127.99 81.39 127.74 81.39 127.49 81.39 127.24 81.39 126.99 81.39 126.73 81.39 126.48 81.39 126.23 81.39 125.98 81.17 125.98 80.89 125.73 80.66 125.48 80.66 125.23 80.41 124.98 80.14 124.98 79.91 124.98 79.91 125.23 79.66 125.23 79.66 125.48 79.66 125.73 79.39 125.98 79.16 126.23 79.16 125.98 79.16 125.73 79.16 125.48 79.39 125.23 79.66 124.98 79.66 124.73 80.14 124.48 80.14 124.23 80.14 123.98 80.14 123.73 79.91 123.48 79.91 123.23 79.66 122.98 79.39 122.73 79.16 122.48 79.16 122.23 79.16 121.98 79.39 121.73 79.39 121.48 79.16 121.23 78.89 121.23 78.64 121.23 78.64 121.48 78.41 121.48 78.14 121.73 77.91 121.98 77.66 122.23 77.66 122.48 77.16 122.48 77.16 122.73 76.41 122.98 75.89 123.23 75.39 123.48 75.14 123.73 74.91 123.98 74.64 124.23 74.64 124.73 74.64 124.98 74.64 125.23 74.91 125.73 74.91 125.98 74.64 125.98 74.64 125.73 74.41 125.48 74.16 125.23 74.16 124.98 73.89 124.98 73.89 124.73 73.41 124.73 73.14 124.73 72.91 124.73 72.39 124.73 72.16 124.73 71.66 124.48 71.41 124.23 70.91 123.73 70.38 123.73 70.15 123.73 69.63 123.73 69.63 123.98 69.4 124.23 69.4 124.48 69.63 124.73 69.88 124.98 69.88 125.23 70.15 125.23 70.65 125.73 70.91 125.98 70.91 126.23 71.13 126.48 71.41 126.73 71.41 126.99 71.66 127.24 71.89 127.24 72.16 127.24 72.39 126.99 72.64 126.99 72.91 126.99 72.91 127.24 73.14 127.49 73.14 127.74 72.91 127.49 72.64 127.49 72.39 127.49 72.16 127.49 71.89 127.49 71.89 127.74 71.89 127.99 71.66 127.99 71.41 127.99 71.13 127.99 70.65 127.74 70.38 127.49 70.38 127.24 70.15 126.99 69.88 126.48 69.88 126.23 69.63 126.23 69.4 126.23 69.13 126.23 69.13 126.48 68.88 126.73 68.88 126.99 68.88 127.24 68.88 127.49 68.65 127.49 68.65 127.74 68.38 127.99 68.38 128.24 68.38 128.49 68.38 128.74 68.38 128.49 68.15 128.24 68.15 127.99 68.15 127.49 68.15 127.24 68.15 126.99 68.38 126.99 68.38 126.48 68.65 126.23 68.38 125.23 68.38 124.48 68.15 124.23 67.9 123.98 67.9 123.73 67.63 123.73 67.13 123.73 66.88 123.73 66.65 123.73 66.4 123.98 66.13 123.98 65.88 124.23 65.65 124.48 65.4 124.73 65.4 124.98 65.13 125.23 65.13 125.48 65.13 125.73 65.4 125.98 65.4 126.23 65.65 126.73 65.65 126.99 65.65 127.24 65.65 127.49 65.65 127.74 65.65 128.24 65.88 128.24 65.88 128.99 65.88 129.24 65.88 129.74 65.88 130.01 65.65 130.01 65.4 130.01 65.4 129.74 65.4 129.24 65.4 128.99 65.4 128.49 65.13 128.49 64.9 128.49 64.9 128.24 64.9 127.99 64.65 127.74 64.65 127.49 64.38 127.24 64.13 126.99 63.9 126.99 63.65 126.99 63.65 127.24 63.9 127.49 63.9 127.74 64.13 127.99 64.38 128.49 64.13 129.24 64.13 129.49 63.9 129.74 63.9 130.26 63.9 130.51 63.9 130.76 63.65 130.76 63.65 130.26 63.65 129.74 63.65 129.49 63.65 128.99 63.9 128.74 63.9 128.49 63.65 128.49 63.38 128.49 63.15 128.74 63.15 128.99 63.15 129.24 63.15 129.49 62.9 129.49 62.9 129.74 62.63 129.74 62.38 130.01 61.9 130.76 61.63 131.01 61.37 131.51 61.15 131.76 61.37 132.01 61.63 132.26 61.9 132.51 62.15 132.76 62.38 132.76 62.63 132.76 62.9 132.76 62.9 133.01 62.9 133.26 62.63 133.26 62.9 133.51 62.9 133.76 63.15 134.01 63.38 134.26 63.38 134.51 63.15 134.51 62.9 134.26 62.63 134.01 62.38 133.76 61.9 133.51 61.63 133.51 61.37 133.51 61.37 133.26 61.15 133.01 60.87 133.01 60.62 133.01 60.39 133.01 60.14 133.01 59.87 133.01 59.62 133.01 59.39 133.01 59.14 133.01 58.87 133.26 59.14 133.51 59.39 133.51 59.62 133.76 59.87 133.76 60.14 133.76 60.39 134.26 60.62 134.51 60.62 134.76 60.62 135.01 60.62 135.26 60.87 136.01 61.15 136.27 61.37 136.77 61.63 137.02 61.9 137.52 61.9 137.77 61.63 137.52 61.37 137.52 61.37 137.77 61.37 138.02 61.37 138.52 61.63 138.77 61.63 139.02 61.9 139.27 62.15 139.52 62.15 139.77 61.9 139.77 61.9 139.52 61.63 139.52 61.37 139.27 61.15 139.02 61.15 138.77 60.87 138.27 60.87 137.52 60.62 137.02 60.62 136.77 60.14 136.27 59.87 136.01 59.87 135.76 60.14 135.76 60.14 135.26 60.14 135.01 59.62 134.76 59.39 134.51 59.14 134.51 58.87 134.51 58.87 134.76 58.87 135.01 58.87 135.26 58.87 135.51 58.87 136.01 58.87 136.27 58.64 136.01 58.39 135.76 58.39 135.51 58.12 135.01 58.12 134.51 58.12 134.26 57.87 134.01 57.87 133.76 57.64 133.76 57.39 133.76 57.12 133.76 57.12 134.01 57.12 134.26 56.89 134.51 56.89 135.01 56.64 135.01 56.64 135.26 56.37 135.26 56.37 135.51 56.37 135.76 56.37 136.27 56.64 136.52 56.64 136.77 56.64 137.27 56.64 137.77 56.64 138.02 56.64 138.27 56.37 139.02 56.37 139.27 56.12 139.52 55.89 139.77 56.12 140.02 56.37 140.27 56.64 140.52 56.64 140.77 56.64 141.54 56.64 141.79 56.89 142.04 56.89 142.54 57.12 142.79 57.12 143.04 57.39 143.04 57.39 143.29 57.64 143.54 57.87 143.54 58.12 143.54 58.39 143.54 58.64 143.54 58.87 143.54 59.14 143.79 59.14 144.04 59.39 144.29 59.62 144.54 59.62 144.79 59.87 145.04 60.14 145.04 60.14 145.29 60.39 145.55 60.87 145.55 60.87 145.8 61.37 145.8 61.63 145.8 61.9 145.8 61.9 145.55 61.9 145.29 62.15 145.04 62.38 145.04 62.38 145.29 62.9 145.55 63.15 145.55 63.65 145.55 63.9 145.55 64.13 145.55 64.38 145.55 64.65 145.55 64.9 145.29 65.13 145.04 65.4 144.79 65.65 144.54 65.88 144.54 66.13 144.79 66.4 144.79 66.65 144.54 66.65 144.29 66.65 144.04 66.65 143.79 66.65 143.54 66.65 143.29 66.88 143.04 67.13 143.04 67.4 143.04 67.63 142.79 67.63 142.54 67.63 142.29 67.9 142.04 68.15 142.29 68.38 142.54 68.38 142.79 68.65 142.79 68.88 143.04 69.13 143.04 69.13 143.29 68.88 143.29 68.65 143.29 68.88 143.54 68.88 143.79 69.13 144.04 69.13 144.29 69.4 144.29 69.63 144.54 69.88 144.54 69.88 144.79 70.15 145.04 70.38 145.55 70.65 145.8 70.65 146.05 70.65 146.8 70.65 147.3 70.65 147.8 70.91 148.05 71.13 148.05 71.41 148.05 71.41 148.3 71.13 148.3 70.91 148.3 70.65 148.3 70.38 148.55 70.38 148.8 70.38 149.05 70.15 149.3 70.15 149.55 69.63 149.55 69.4 149.8 69.13 150.3 68.88 150.55 68.65 150.8 68.65 150.55 68.65 150.3 68.88 150.05 69.13 149.55 69.4 149.3 69.4 148.55 69.4 148.3 69.4 148.05 69.13 148.05 68.88 148.05 68.88 148.3 68.88 148.55 68.88 149.05 68.65 149.3 68.38 149.05 68.15 149.05 68.15 148.8 67.9 148.8 67.9 148.55 67.9 148.3 67.9 148.05 68.15 147.55 68.15 147.8 68.38 147.8 68.65 148.05 68.88 147.8 68.88 147.55 68.88 147.3 68.65 146.8 68.88 146.55 68.88 146.3 68.65 146.05 68.38 146.05 68.15 146.05 67.9 146.3 67.63 146.3 67.4 146.3 67.4 146.55 67.4 146.8 67.13 147.05 67.13 147.3 67.13 147.55 67.4 147.8 67.63 147.8 67.63 148.05 67.4 148.05 66.88 148.05 66.65 148.05 66.13 148.3 65.88 148.55 65.65 148.55 65.13 148.55 64.9 148.55 64.38 148.55 63.9 148.55 63.15 148.8 62.9 148.8 62.63 148.8 62.63 149.05 62.15 149.05 61.63 149.05 61.15 149.05 60.87 149.05 60.39 149.05 59.87 149.05 59.14 149.05 58.87 149.05 58.64 149.3 58.12 149.3 57.87 149.3 57.64 149.55 57.39 149.55 56.89 149.8 56.64 150.05 56.64 150.3 56.64 150.55 56.64 150.8 56.37 151.05 56.12 151.3 55.89 151.8 55.64 152.05 55.37 152.3 55.12 152.3 54.89 152.55 54.89 152.3 55.12 152.05 55.37 152.05 55.64 151.55 55.89 151.3 56.12 151.05 56.12 150.55 56.12 150.05 56.37 150.05 56.37 149.8 56.12 149.55 55.89 149.55 55.37 149.55 55.12 149.55 54.89 149.8 54.62 149.8 54.62 149.55 54.89 149.3 55.12 149.3 55.37 149.3 55.64 149.3 56.12 149.05 56.37 149.05 56.64 149.05 56.64 148.8 56.89 148.8 57.12 148.8 57.39 148.8 57.64 148.55 57.64 148.3 57.39 148.05 57.39 147.8 57.12 147.3 56.89 147.3 56.89 147.05 56.64 147.05 56.12 147.05 55.37 146.8 55.12 146.55 54.89 146.55 54.89 146.3 54.62 146.05 54.37 145.8 54.14 145.8 53.89 145.8 53.64 145.8 53.39 145.8 53.14 145.55 53.14 145.29 53.14 145.04 53.39 145.04 53.39 145.29 53.64 145.29 53.89 145.29 54.14 145.29 54.37 145.29 54.62 145.29 54.89 145.04 54.89 144.54 54.89 144.29 54.62 144.04 54.37 143.79 54.14 143.79 53.89 143.79 53.89 143.54 53.64 143.29 53.39 143.04 53.14 142.79 52.89 142.54 52.64 142.29 52.39 142.29 52.14 141.79 51.89 141.79 51.89 141.27 51.89 141.02 51.89 140.77 51.89 140.52 51.89 140.27 51.64 140.02 51.39 140.02 51.14 139.77 50.64 139.77 50.38 139.77 50.13 140.02 49.88 140.02 49.38 140.27 49.13 140.52 48.88 140.52 48.63 140.52 48.38 140.52 47.88 140.52 47.63 140.77 47.63 141.02 47.38 141.54 47.13 141.79 46.63 141.79 46.38 141.79 46.13 141.79 45.88 142.04 45.88 142.54 45.63 143.04 45.63 143.29 45.63 143.79 45.63 144.04 45.38 144.04 45.13 144.29 45.13 144.54 45.38 144.54 45.63 144.79 45.63 145.04 45.63 145.29 45.13 145.55 44.88 145.29 44.63 145.55 44.38 145.55 44.38 145.8 44.13 146.05 44.13 146.3 43.88 146.3 43.63 146.3 43.38 146.05 43.13 145.8 43.13 145.55 42.88 145.29 43.13 144.79 43.63 144.04 43.63 143.04 44.13 142.54 44.38 142.04 44.38 141.79 44.63 141.54 44.63 141.27 44.38 141.02 43.88 141.02 43.63 141.02 43.13 141.02 42.88 140.77 43.13 140.52 43.38 140.52 43.88 140.52 44.38 140.52 44.63 140.52 44.88 140.52 45.13 140.52 45.38 140.02 45.88 139.52 46.13 139.27 46.38 139.02 46.38 138.77 46.13 138.27 46.13 138.02 45.88 138.02 45.63 137.77 45.38 137.77 45.13 137.77 44.88 137.77 45.13 137.77 45.38 137.77 45.63 137.77 45.88 137.77 46.13 137.77 46.38 137.77 46.63 138.02 46.63 138.27 46.88 138.52 46.88 138.77 47.13 138.77 47.38 138.77 47.63 138.52 48.13 138.02 48.63 138.02 48.88 138.02 49.13 138.02 49.38 137.77 49.63 137.52 49.63 137.27 49.88 137.27 50.13 137.27 50.38 137.27 50.64 137.27 51.14 136.77 51.39 136.27 51.39 135.76 51.64 135.26 51.89 135.01 52.39 134.76 52.14 134.01 52.14 133.76 52.14 133.26 52.14 133.01 52.14 132.76 52.14 132.51 51.89 132.51 51.64 132.51 51.39 132.51 50.89 132.51 50.38 132.51 50.64 132.26 51.39 131.76 51.89 131.01 52.14 130.26 52.39 130.01 52.64 129.74 53.14 129.49 53.39 129.49 53.64 129.49 53.89 129.49 54.14 129.49 54.62 130.01 54.89 130.01 55.12 130.26 55.37 130.26 55.89 130.26 56.37 129.74 56.37 129.49 56.64 128.99 56.64 128.74 57.12 128.24 56.89 127.99 56.89 127.74 56.64 127.74 56.37 127.49 56.12 127.49 55.89 127.49 55.64 127.49 55.64 127.74 55.37 127.74 55.12 127.74 54.89 127.74 54.62 127.74 54.37 127.74 54.14 127.49 54.37 127.24 54.62 127.24 55.12 126.99 55.64 126.99 56.12 126.73 56.37 126.73 56.64 126.73 56.89 126.48 57.12 126.48 57.39 126.48 57.64 126.48 57.87 126.48 58.12 126.48 58.39 126.48 58.64 126.48 58.64 125.98 58.64 125.73 59.14 125.23 59.62 124.98 59.87 124.48 59.87 123.98 59.87 123.48 59.62 123.23 59.14 122.73 58.87 122.73 58.64 122.73 58.39 122.48 57.87 122.73 57.39 122.98 57.39 123.23 56.64 123.73 56.37 124.23 56.12 124.73 55.64 124.73 55.12 124.73 54.62 124.73 54.37 124.98 54.14 124.98 53.89 124.98 53.89 125.23 53.64 125.23 53.39 125.23 53.39 125.48 53.14 125.48 52.89 125.48 52.39 125.73 51.39 126.23 50.89 126.48 48.63 126.99 48.38 127.24 47.63 127.49 46.63 127.49 46.38 127.99 46.38 128.24 46.38 128.49 45.88 128.24 45.88 127.99 45.38 127.74 44.63 127.74 43.88 127.74 43.63 127.74 43.38 127.49 42.88 127.24 42.13 126.99 41.63 126.99 41.38 126.99 40.63 126.99 40.12 127.24 39.37 127.24 38.87 127.49 38.62 127.49 38.37 127.74 38.12 127.99 37.87 128.24 37.12 128.24 36.87 128.24 36.37 128.49 36.12 128.74 35.37 129.74 34.87 130.26 34.62 130.51 33.87 130.51 33.62 130.51 33.37 130.51 32.62 130.26 31.87 130.51 31.37 131.26 31.62 131.76 31.87 132.51 31.12 133.51 29.86 135.01 28.61 136.01 27.11 136.52 25.86 137.02 24.61 137.77 23.11 138.27 22.11 138.52 20.36 138.52 18.35 139.02 15.85 140.02 11.62 139.27 9.37 139.27 7.61 138.77 6.86 138.77 6.11 139.02 5.86 139.52 5.86 140.02 6.36 140.77 6.36 141.27 6.11 141.27 5.61 141.02 5.11 140.27 5.11 139.02 4.36 137.77 3.61 137.27 3.11 137.02 2.86 137.02 1.36 135.51 4.11 132.26 6.86 129.24 9.62 125.98 11.62 123.23 13.37 120.48 15.6 117.73 17.35 115.22 17.6 114.72 19.86 111.72 21.86 107.97 23.36 105.94 24.86 103.69 26.11 101.69 26.86 99.69 27.61 97.44 28.61 95.43 29.61 91.91 29.86 88.16 29.86 85.4 30.12 80.38 30.37 75.37 30.37 71.12 30.62 67.11 32.87 63.61 33.87 62.11 43.13 56.58 48.38 51.33 52.14 47.3 52.64 46.55 53.64 44.8 54.37 44.05 55.12 42.3 55.37 41.55 55.89 40.8 56.12 40.3 57.64 37.27 59.14 34.77 59.87 33.52 63.15 29.76 66.4 26.26 70.15 22.26 71.89 20.76 73.41 19.5 77.39 15.75 80.89 12.73 84.4 9.47 88.92 7.47 92.93 6.47 96.91 3.97 99.91 1.45 100.66 2.45 102.16 3.97 103.17 5.47 104.42 7.22 105.92 9.22 107.17 10.73 108.92 12.73 110.67 14.23 112.68 16.25 113.93 18 114.68 19.5 116.43 22.01 117.93 23.76 119.18 25.26 120.68 27.26 122.68 29.01 123.69 30.77 124.94 32.02 126.19 34.27 127.69 36.02 129.19 39.04 130.44 40.8 131.69 42.3 132.94 43.55 134.18 45.05 135.18 46.3 136.18 47.55 137.18 47.55 137.18 47.8 137.43 47.8"})]})]})};export{p as default};
