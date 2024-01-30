import{r as c,j as l}from"./index-ba945616.js";const w=()=>{const[d,f]=c.useState([]),[h,u]=c.useState(0);c.useEffect(()=>{fetch("https://raw.githubusercontent.com/cristianlondonot/mandounificado-spidersoft/main/data-factor.json").then(t=>t.json()).then(t=>{const o=t.reduce((r,a)=>{const i=a.NOMBRE;return r[i]?r[i]++:r[i]=1,r},{}),e=Object.entries(o).map(([r,a])=>({veredaBarrio:r,count:a}));f(e);const n=e.reduce((r,a)=>r+a.count,0)/e.length;u(n)}).catch(t=>console.error("Error al cargar los datos:",t))},[]);const m=t=>{var s;const o=((s=d.find(n=>n.veredaBarrio===t))==null?void 0:s.count)||0;let e="#656565";return o<=3?e="#387905":o<=6?e="#feba00":o<=9?e="#F2860D":o<=12?e="#fc6107":o<15&&(e="#FC0707"),e};return l.jsx("div",{className:"w-full min-h-96",children:l.jsx("svg",{id:"uuid-c52d8d51-239a-4f60-a877-a19358848d32",xmlns:"http://www.w3.org/2000/svg",width:274.17,height:271.27,xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 174.17 171.27",className:"m-auto",children:l.jsx("polygon",{fill:m("TENERIFE"),className:"uuid-ef8dcd30-4b15-44b2-81e5-7689bf10b7ca",points:"64.83 2.23 65.08 3.75 65.33 5.74 65.83 7.51 66.33 9.51 66.08 11.52 65.58 13.77 65.08 15.52 64.33 17.53 63.83 19.55 64.58 21.3 66.33 22.31 68.34 22.06 70.07 21.3 72.32 22.06 74.08 21.81 75.33 22.81 76.33 24.56 77.58 26.31 78.08 28.07 78.83 30.09 80.34 31.34 82.09 31.84 83.84 32.34 86.35 33.1 88.35 33.35 90.1 33.1 92.11 33.1 94.36 33.6 96.11 34.35 97.62 35.6 99.62 36.1 101.37 36.35 103.12 37.35 104.38 39.36 105.13 41.38 105.38 43.36 104.88 45.37 104.63 47.39 104.63 49.14 105.13 50.9 105.88 52.65 105.88 54.4 105.88 56.15 107.38 57.41 109.13 58.16 110.87 58.91 112.87 59.41 114.62 59.66 116.63 59.66 118.38 60.41 120.38 61.41 122.64 61.91 124.39 63.17 126.64 63.92 128.4 64.44 130.4 64.69 132.65 65.19 134.16 65.69 136.41 66.69 138.16 67.44 139.91 68.2 141.92 68.2 143.92 68.45 146.18 68.95 148.18 69.95 150.68 71.45 152.44 72.7 154.69 73.45 156.44 74.21 158.45 74.71 160.45 75.21 162.2 75.98 163.96 76.23 165.71 76.73 166.96 77.23 166.96 77.73 166.96 78.98 166.96 79.99 167.21 80.99 168.21 83.24 169.21 82.74 169.71 83.24 169.71 83.99 169.97 86 169.71 88.02 170.22 90 171.22 91.78 172.22 93.26 172.97 95.03 172.72 95.26 170.97 96.01 169.21 96.76 167.46 97.52 165.46 98.27 163.96 99.04 162.45 100.29 160.7 101.79 159.2 103.05 157.95 104.55 156.44 106.05 155.19 107.8 153.69 109.81 152.69 111.58 151.43 113.58 150.43 115.34 149.93 117.34 149.43 119.34 148.93 121.1 147.68 122.87 147.18 124.87 146.68 126.88 146.18 128.88 145.67 130.38 145.93 132.14 147.68 133.41 148.93 134.91 150.68 135.66 151.94 137.17 152.94 138.65 153.69 140.42 154.44 141.92 155.44 143.68 155.94 145.68 156.69 147.18 157.44 148.93 157.69 150.94 157.44 152.69 157.44 154.44 157.44 155.7 156.69 156.2 154.94 157.47 153.19 158.97 151.43 160.48 149.68 161.73 148.43 163.23 147.43 164.73 145.93 165.73 143.42 167.24 140.92 169.01 141.17 167.74 141.42 166.99 141.67 166.23 141.17 164.98 140.17 164.23 138.41 163.98 137.16 163.98 135.41 163.48 133.15 162.98 131.65 163.23 130.4 164.23 129.65 164.98 128.15 165.48 126.39 165.73 123.64 166.49 123.14 166.74 122.64 167.24 121.38 167.74 120.13 167.24 119.63 165.98 119.63 165.48 119.63 164.48 119.63 163.23 118.38 161.98 116.88 161.98 115.87 163.48 115.62 165.23 115.62 165.73 115.62 166.49 115.12 167.24 113.62 166.23 112.87 164.98 112.37 164.23 111.87 163.23 111.62 162.48 111.12 160.48 111.12 159.22 110.87 157.47 110.62 155.7 109.86 154.44 108.63 153.69 106.88 153.69 105.38 153.94 104.63 153.94 104.13 153.94 103.12 153.44 102.62 152.44 102.87 151.44 103.12 150.19 103.37 147.93 103.63 146.18 103.37 144.93 102.87 144.43 102.12 144.16 101.12 144.43 100.12 145.93 98.62 147.18 96.61 147.93 95.86 147.68 95.36 147.68 94.61 146.93 94.61 145.43 95.36 144.16 96.11 143.15 96.36 141.42 96.11 140.15 95.86 139.15 95.86 138.92 96.61 137.42 98.37 136.41 100.62 134.64 103.63 132.89 104.88 132.14 106.13 131.13 107.13 130.13 107.13 128.88 107.13 128.63 106.13 127.38 104.38 126.63 102.37 126.13 100.87 126.63 99.62 128.88 99.12 131.38 98.62 132.89 98.12 133.14 97.36 133.66 96.11 133.89 94.86 133.41 94.36 132.64 93.61 131.64 93.11 129.88 93.11 128.38 93.11 127.38 92.61 126.63 91.61 126.63 90.6 126.88 89.6 127.63 88.85 128.63 88.1 129.63 87.6 130.38 87.1 131.38 86.35 132.14 85.09 133.14 84.09 134.16 83.34 134.64 82.34 135.39 81.09 135.66 79.84 135.66 78.58 135.66 77.08 136.14 76.08 136.89 75.83 137.42 75.58 138.17 75.33 138.92 75.33 140.15 75.08 141.42 75.08 142.4 74.58 143.15 74.08 143.43 73.57 143.15 73.32 142.92 72.82 142.17 72.07 140.67 71.57 139.4 71.07 138.65 70.32 137.9 69.09 137.17 67.59 136.66 65.58 136.14 63.83 135.66 62.58 135.39 61.58 135.39 60.32 135.66 60.07 136.41 59.82 136.41 59.82 137.17 60.07 138.4 60.07 138.92 60.32 139.67 60.57 140.42 60.57 141.17 60.57 141.42 60.32 141.92 60.07 142.17 59.82 142.4 59.57 142.4 58.82 142.67 57.57 142.67 56.07 142.67 54.81 142.4 53.81 141.65 52.81 140.9 52.56 139.67 52.31 138.65 52.06 137.9 51.56 136.89 50.56 136.41 49.56 136.41 48.55 136.89 47.8 137.9 47.55 138.65 47.3 138.92 46.8 139.15 45.8 139.15 44.8 139.15 43.8 139.15 43.3 139.4 43.3 140.15 43.55 141.17 43.8 141.92 43.8 142.67 43.55 143.43 42.79 143.68 42.04 143.15 41.04 142.67 40.04 142.17 38.79 141.92 37.54 141.92 36.53 142.17 35.53 142.4 34.53 142.4 33.53 141.92 32.53 141.65 31.78 141.65 30.77 141.92 29.77 142.4 29.04 143.15 28.54 143.91 27.79 144.16 27.29 144.16 27.04 143.68 26.79 142.67 26.54 141.92 26.54 140.9 26.54 139.9 26.54 139.15 27.04 137.9 27.29 136.66 27.29 135.39 26.79 133.89 26.29 132.89 25.79 132.64 25.04 132.14 24.28 132.89 23.28 133.89 22.53 134.16 21.28 133.89 20.53 133.41 20.03 132.64 19.78 131.89 18.77 130.88 17.77 130.38 17.02 129.63 16.52 129.13 16.52 128.38 16.77 127.13 17.27 126.38 18.02 126.13 19.03 126.13 20.53 126.88 21.78 128.13 22.78 128.63 24.03 128.63 25.54 128.38 26.79 127.63 27.29 126.63 27.29 125.88 27.79 125.12 28.29 124.87 29.04 124.62 29.77 124.37 30.27 123.87 30.77 122.87 31.02 121.35 31.53 120.1 32.03 118.84 32.53 117.84 32.78 116.59 32.53 115.59 31.53 114.08 30.77 113.33 30.02 112.33 29.77 111.58 29.77 110.58 29.77 109.06 29.77 108.05 29.29 107.3 28.04 106.3 27.04 105.8 26.54 105.05 26.54 104.3 27.04 103.55 27.54 102.54 28.04 101.54 27.79 100.29 27.54 98.77 27.29 97.52 27.29 96.53 27.54 95.51 27.79 94.28 27.79 93.26 27.29 92.28 27.29 91.78 26.29 91.03 25.29 89.75 24.53 88.77 24.03 87.75 23.78 86.75 23.53 86 23.03 86 21.78 85.75 19.53 85.5 18.77 84.99 18.52 84.24 18.77 82.74 19.28 80.99 19.03 79.74 18.52 78.23 17.02 76.73 15.27 75.71 14.52 75.21 14.27 74.71 14.27 74.21 14.77 73.7 16.52 71.95 17.27 71.2 17.27 70.7 16.77 69.95 16.27 69.45 15.52 69.2 14.77 69.2 12.76 69.7 10.01 70.2 9.01 69.95 8.01 69.7 6.75 69.2 6 68.45 5.25 67.44 5.25 66.69 5.25 65.69 5.5 63.92 6.75 62.67 7.51 61.41 7.01 59.66 6.75 57.91 6.5 56.66 6.25 56.15 6.25 54.15 6.5 50.62 7.26 49.14 8.51 47.87 9.76 46.87 10.01 46.87 10.51 45.64 10.76 44.13 10.51 42.36 10.51 41.11 10.76 39.36 10.76 38.6 10.76 37.35 10.26 36.35 8.51 35.35 7.26 34.35 6.5 33.6 5.75 32.84 4.5 30.34 3.25 28.82 3 28.07 2.75 26.31 2.75 24.81 2.25 24.06 1.25 23.81 2.25 20.3 4 19.8 5.75 18.8 8.01 18.55 9.51 19.55 11.01 21.05 11.76 22.56 12.26 24.56 13.27 26.31 14.77 27.31 15.52 28.82 16.02 30.84 17.27 32.09 19.28 31.84 21.03 32.09 23.03 32.84 24.28 34.35 26.04 35.6 26.79 37.6 28.04 39.11 30.02 39.11 31.78 38.85 33.53 38.6 35.28 39.36 37.29 40.61 38.79 41.61 40.79 41.61 42.54 41.38 44.3 40.61 45.55 39.36 45.8 37.35 45.8 35.35 45.8 33.35 46.05 31.34 46.55 29.57 47.55 28.07 48.3 26.31 48.3 24.56 48.05 22.81 47.55 20.8 46.8 19.3 45.55 18.03 44.3 16.53 44.05 14.77 44.05 12.77 44.3 11.02 44.55 9.01 45.05 6.51 45.05 4.48 45.3 2.73 45.8 1 47.55 1 49.05 1.73 50.56 2.98 52.31 3.98 54.56 4.48 56.32 3.75 57.57 1.98 59.32 1.98 61.07 2.23 63.08 2.23 64.83 2.23"})})})};export{w as default};
