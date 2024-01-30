import{r as c,j as l}from"./index-ba945616.js";const g=()=>{const[d,f]=c.useState([]),[h,u]=c.useState(0);c.useEffect(()=>{fetch("https://raw.githubusercontent.com/cristianlondonot/mandounificado-spidersoft/main/data-factor.json").then(a=>a.json()).then(a=>{const t=a.reduce((o,r)=>{const i=r.NOMBRE;return o[i]?o[i]++:o[i]=1,o},{}),e=Object.entries(t).map(([o,r])=>({veredaBarrio:o,count:r}));f(e);const n=e.reduce((o,r)=>o+r.count,0)/e.length;u(n)}).catch(a=>console.error("Error al cargar los datos:",a))},[]);const m=a=>{var s;const t=((s=d.find(n=>n.veredaBarrio===a))==null?void 0:s.count)||0;let e="#656565";return t<=3?e="#387905":t<=6?e="#feba00":t<=9?e="#F2860D":t<=12?e="#fc6107":t<15&&(e="#FC0707"),e};return l.jsx("div",{className:"w-full min-h-96",children:l.jsx("svg",{id:"uuid-54a1a80d-cd73-4938-baa7-aa4e35e5f099",xmlns:"http://www.w3.org/2000/svg",width:210.54,height:259.23,xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 110.54 159.23",className:"m-auto",children:l.jsx("polygon",{fill:m("RIO SOGAMOSO"),className:"uuid-7c9f1ff6-5a08-4dd0-b5c2-f73d6d92e320",points:"18.71 6.24 19.95 8.74 22.45 10.97 24.7 11.99 25.95 12.48 29.94 12.98 30.44 12.98 30.94 13.23 34.43 13.48 37.68 13.98 40.93 16.23 42.17 17.23 44.17 18.98 45.92 20.22 47.42 20.47 47.67 20.47 47.92 20.47 49.16 20.72 50.66 20.97 53.16 21.97 54.16 22.99 54.41 23.24 54.66 24.24 54.66 24.99 53.91 25.74 53.16 26.99 53.16 27.98 54.16 29.23 55.89 30.23 58.13 30.48 60.13 29.98 61.88 29.23 62.63 28.73 63.62 28.23 63.87 28.23 65.12 27.49 65.87 26.99 67.12 26.49 68.37 26.24 69.87 26.49 71.86 27.24 73.61 28.73 73.61 28.98 74.11 30.23 73.86 31.73 73.86 31.98 73.36 33.48 73.36 33.73 72.86 34.5 72.11 36.24 70.87 38.24 70.12 39.99 69.87 40.74 69.62 41.49 69.87 42.74 70.12 44.23 70.12 45.23 70.62 47.73 70.87 50.48 70.87 52.22 70.62 52.49 70.37 54.22 70.62 54.72 70.87 56.24 72.11 57.74 73.36 58.74 73.61 58.74 75.36 58.99 77.11 58.74 77.61 58.49 80.85 57.99 83.6 57.74 85.85 57.49 89.34 57.49 93.83 58.24 96.31 58.74 96.56 58.74 99.31 59.98 101.55 61.48 103.55 62.98 103.8 63.23 103.55 63.23 103.3 63.23 103.05 63.23 102.8 63.23 102.55 63.48 102.3 63.73 102.05 63.98 101.8 63.98 101.55 64.48 101.3 64.98 101.05 65.23 100.8 65.73 100.55 66.23 100.06 67.22 99.81 67.47 99.56 67.72 99.31 67.97 99.31 68.22 99.31 68.47 99.56 68.99 100.06 69.74 100.8 69.99 101.55 70.49 102.05 70.99 102.8 71.49 103.05 71.74 103.3 73.49 103.55 75.48 103.55 75.98 104.05 77.23 104.55 79.23 105.3 81.75 106.05 83.99 106.8 85.99 107.55 87.49 108.29 89.24 108.79 90.98 109.29 93.25 109.54 95.73 109.54 96.48 108.04 96.25 105.8 95.98 103.55 95.5 101.8 95.23 99.56 94.75 97.31 94 95.33 92.98 93.58 92 91.59 91.48 89.59 90.98 87.59 89.74 85.85 88.99 83.85 88.99 83.1 90.48 82.85 92.48 82.85 94.48 82.1 96.48 82.1 96.75 82.35 98.25 84.35 97.75 86.09 97.97 88.09 98.47 90.09 98.99 92.59 100.24 94.08 101.47 95.33 102.99 95.81 104.74 96.56 106.48 96.56 108.48 95.81 110.48 95.33 112.48 95.08 114.22 95.08 114.47 95.08 115.99 95.08 116.24 95.08 116.49 95.08 117.99 95.08 118.24 95.08 119.99 95.81 121.49 96.56 123.48 96.56 123.73 96.56 125.48 95.56 127.25 94.33 128.75 93.83 130.49 93.83 130.74 93.83 132.49 94.58 134.49 94.83 136.24 92.84 135.99 91.09 134.99 89.09 134.99 87.59 135.49 86.84 137.98 86.34 138.98 86.09 139.73 84.35 140 83.1 141.75 82.85 143.48 83.1 143.48 83.6 145.22 83.85 146.99 83.85 148.22 82.85 147.99 81.1 146.99 79.35 145.97 77.61 145.22 75.61 144.75 73.86 144.48 72.36 145.22 70.87 146.72 70.87 146.99 71.36 148.74 71.86 150.49 72.11 152.49 72.11 154.48 71.11 155.98 69.87 156.98 67.87 157.48 65.87 158.23 64.12 158.23 62.13 157.98 60.13 156.98 59.38 155.48 59.13 153.23 58.38 151.49 56.88 149.74 55.89 147.99 54.66 146.24 53.16 144.97 51.66 143.25 50.41 141.75 50.16 141.5 51.41 139.73 53.16 139.25 53.41 138.98 54.66 138.23 54.91 136.99 54.91 136.74 53.66 134.99 52.16 133.99 50.66 131.99 48.92 130.99 47.67 129.74 45.42 128.75 42.92 128.75 42.17 128.5 42.67 127.5 43.42 125.73 44.17 124.23 45.17 122.23 45.92 120.49 45.92 120.24 46.67 118.74 46.92 118.24 47.42 116.49 48.67 114.99 49.41 113.23 49.91 111.48 49.91 111.23 49.66 109.48 48.92 107.73 47.92 105.98 46.67 104.24 44.67 103.24 43.42 101.97 42.92 99.97 42.92 99.74 43.17 98.25 43.67 96.25 44.42 94.48 44.92 92.75 45.67 90.73 46.67 88.74 47.17 86.74 47.42 84.49 47.42 84.24 47.17 82.5 46.92 80.75 46.67 78.98 46.42 76.73 45.67 74.49 45.17 72.74 44.92 70.74 45.67 68.47 46.42 66.48 46.67 64.73 46.67 64.48 46.42 62.73 45.92 60.23 45.42 58.24 44.67 56.49 43.92 54.97 43.17 52.74 41.92 51 40.43 49.48 38.68 49.25 37.18 47.98 35.43 46.25 33.69 44.98 31.94 43.73 30.69 42.24 28.44 41.74 25.7 41.49 23.7 41.24 21.7 40.74 19.95 39.49 18.71 37.99 17.21 36.49 15.96 35 13.98 34.5 12.24 35.5 10.47 35.25 8.74 34.75 7.74 32.98 6.72 30.98 5.49 29.48 3.75 28.73 1.98 26.99 1.23 24.99 1 23.24 1 22.99 1 20.97 1.48 18.98 2.23 16.73 2.48 14.48 2.48 12.48 2.48 9.74 2.23 7.97 3.75 7.97 6.49 7.24 7.97 6.24 8.97 5.24 10.97 2.73 12.71 1 14.23 1 16.46 2.23 18.21 3.98 18.46 5.49 18.71 6.24"})})})};export{g as default};