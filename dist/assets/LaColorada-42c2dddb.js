import{r as c,j as l}from"./index-ba945616.js";const w=()=>{const[d,f]=c.useState([]),[h,u]=c.useState(0);c.useEffect(()=>{fetch("https://raw.githubusercontent.com/cristianlondonot/mandounificado-spidersoft/main/data-factor.json").then(o=>o.json()).then(o=>{const r=o.reduce((a,t)=>{const i=t.NOMBRE;return a[i]?a[i]++:a[i]=1,a},{}),e=Object.entries(r).map(([a,t])=>({veredaBarrio:a,count:t}));f(e);const n=e.reduce((a,t)=>a+t.count,0)/e.length;u(n)}).catch(o=>console.error("Error al cargar los datos:",o))},[]);const m=o=>{var s;const r=((s=d.find(n=>n.veredaBarrio===o))==null?void 0:s.count)||0;let e="#656565";return r<=3?e="#387905":r<=6?e="#feba00":r<=9?e="#F2860D":r<=12?e="#fc6107":r<15&&(e="#FC0707"),e};return l.jsx("div",{className:"w-full min-h-96",children:l.jsx("svg",{id:"uuid-224d9fdd-c33a-4d65-9a59-71726c62bff4",xmlns:"http://www.w3.org/2000/svg",width:302.2,height:365.99,xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 202.2 265.99",className:"m-auto",children:l.jsx("polygon",{fill:m("LA COLORADA"),className:"uuid-0af3b014-c820-4f4e-942e-a8b6e5a5ea88",points:"198.19 31.03 197.43 32.79 196.7 34.55 195.19 36.82 193.68 38.57 191.67 39.33 189.66 39.85 187.65 40.61 185.64 41.61 183.88 42.37 180.36 45.38 178.86 46.64 178.1 48.65 177.35 50.91 176.59 52.67 176.09 54.68 175.09 56.69 174.33 58.7 173.83 60.71 173.08 63.5 172.82 65.26 172.32 67.77 172.07 69.78 171.32 71.29 170.31 73.05 170.31 75.08 170.31 76.84 170.56 78.6 170.81 80.36 170.06 82.12 168.8 84.63 168.05 86.91 167.55 88.92 167.29 90.93 167.04 92.94 166.04 94.95 165.79 96.96 165.28 99.73 165.28 99.98 164.78 100.73 164.28 101.49 163.53 102.24 162.77 103.25 161.51 104.5 159.5 106.51 158.5 107.52 158 107.77 157.49 108.02 156.51 108.53 156.01 109.05 155.25 109.3 153.74 110.05 151.48 109.55 151.23 110.05 151.23 110.56 150.98 111.06 150.98 111.56 150.98 112.06 150.98 112.82 150.98 113.32 150.98 113.82 150.48 116.09 150.23 117.59 149.97 117.09 149.72 116.84 149.22 117.09 148.47 117.59 148.22 118.35 147.71 119.1 147.21 120.11 147.21 121.13 147.21 122.39 147.21 123.14 147.46 124.65 147.46 125.41 147.71 126.41 147.71 127.67 147.46 128.67 147.21 129.43 146.71 130.18 146.2 130.43 145.7 130.68 145.2 130.93 144.45 130.93 143.94 131.19 142.94 131.19 142.18 131.19 141.43 131.44 140.42 131.19 139.92 131.19 139.17 130.68 138.67 130.43 137.91 130.43 137.41 130.68 137.16 130.68 136.91 130.93 137.41 131.19 137.91 131.44 138.16 131.44 138.67 131.69 138.92 132.21 139.42 132.97 139.92 133.47 139.92 134.22 140.17 134.98 140.42 135.48 140.68 136.48 140.93 137.24 140.93 138.24 140.93 139 141.18 139.75 141.18 140.76 141.18 141.51 141.43 142.27 141.68 142.77 141.93 143.52 142.18 144.02 142.44 144.53 142.69 144.78 143.69 145.03 144.7 144.53 145.45 144.28 145.95 143.52 146.2 143.02 146.71 142.27 146.96 142.01 147.71 141.51 148.47 142.01 148.97 142.52 149.47 143.02 149.47 143.77 149.47 144.28 149.47 145.28 149.47 146.79 149.22 147.79 149.22 148.3 148.72 148.8 147.71 149.05 146.96 149.3 145.7 149.8 144.7 149.8 143.44 149.8 142.44 149.55 142.18 149.55 141.18 149.55 140.68 149.8 139.92 149.8 139.67 150.31 139.42 150.31 139.17 150.81 138.41 151.56 137.66 152.57 136.91 153.32 136.4 153.83 135.65 154.58 135.4 154.83 134.9 155.35 134.39 155.61 133.89 155.86 133.14 155.86 132.13 155.86 130.87 155.86 129.87 155.86 129.37 155.86 128.61 155.86 127.86 155.86 126.85 155.61 126.35 155.61 126.1 155.35 125.35 154.58 124.59 154.08 124.09 153.57 123.59 153.07 122.83 152.57 122.08 152.32 121.58 152.07 121.07 152.07 120.82 152.07 120.57 152.32 120.32 152.82 120.32 153.32 120.57 153.83 120.82 154.08 121.07 154.33 121.32 155.08 121.32 155.61 121.32 155.86 121.58 156.36 121.58 156.61 121.32 156.86 121.07 157.37 120.57 157.37 120.07 157.37 119.56 157.11 119.31 157.11 118.06 156.86 117.55 156.61 117.3 156.11 117.05 155.86 116.3 155.61 116.07 155.35 115.31 155.35 114.79 155.35 114.29 155.35 113.81 155.08 113.28 155.08 112.78 155.08 112.3 155.08 112.03 154.83 111.79 154.58 111.27 154.08 111.04 154.08 110.52 154.08 110.29 153.83 109.78 153.57 109.53 153.57 109.26 153.57 109.03 153.83 108.28 154.58 108.28 155.08 108.28 155.61 108.51 156.11 108.78 156.61 109.26 156.86 109.78 157.37 110.01 157.62 110.52 158.12 110.77 158.37 111.04 158.37 112.55 158.87 113.53 158.87 114.04 158.87 114.79 158.62 115.31 158.62 115.82 159.12 115.82 159.63 115.82 160.38 115.54 160.88 115.31 161.39 115.06 161.89 115.06 162.39 114.79 162.89 114.79 163.4 114.56 163.9 114.04 164.65 113.81 165.16 113.53 165.41 112.78 165.66 112.3 165.41 111.79 165.41 111.54 165.16 111.27 164.65 111.04 164.4 111.04 163.65 111.04 163.15 110.52 162.39 110.29 162.14 109.78 161.89 109.03 161.39 108.51 161.39 108 161.64 107.25 161.89 107 161.89 106.5 161.89 106.27 162.39 105.74 162.89 105.74 163.4 105.74 163.9 106.01 164.65 106.5 164.91 107 165.16 107.25 165.66 107.75 166.16 108.51 166.94 109.03 167.19 109.53 167.44 110.01 167.94 110.52 168.44 111.04 168.95 111.27 169.95 110.77 170.46 110.77 170.96 110.29 171.96 109.78 172.47 109.03 172.97 108.51 173.22 108.28 173.22 107.75 173.47 107.25 173.47 106.27 173.72 104.99 173.72 104.49 173.97 103.73 174.22 103.5 174.73 102.98 175.23 102.98 175.98 103.25 176.99 103.25 177.74 103.25 178.52 103.5 180.03 103.5 180.28 103.73 181.03 104 181.28 104.49 182.29 104.99 182.79 105.51 183.29 105.51 184.05 105.51 184.8 105.26 185.3 104.99 185.81 104.49 185.81 103.5 186.06 102.75 185.56 101.72 185.56 100.49 185.56 99.73 185.81 99.46 185.56 98.47 185.3 98.2 184.8 97.45 184.3 96.69 184.05 96.46 183.54 95.94 183.29 95.44 183.29 94.68 183.54 94.2 184.05 93.7 184.55 93.18 185.3 92.95 186.06 92.95 186.81 92.69 187.57 92.69 188.32 92.69 188.82 92.69 189.58 92.42 189.83 92.42 191.08 92.19 192.09 91.67 192.59 91.17 193.09 90.41 193.09 89.93 193.09 88.9 192.59 88.15 192.09 87.92 191.59 87.92 191.08 87.92 190.83 88.4 190.08 88.9 189.58 89.15 189.33 89.66 188.57 90.18 187.57 90.18 186.81 90.18 186.06 89.93 185.3 89.66 184.55 89.43 184.3 88.67 184.05 88.15 184.05 87.65 184.3 86.89 184.8 85.91 185.56 85.39 186.06 85.39 186.56 85.39 187.31 85.39 188.32 85.64 189.33 85.64 189.58 85.39 190.33 85.39 190.83 84.88 191.59 84.13 191.84 83.14 191.84 82.12 191.84 81.36 191.84 80.88 191.84 80.61 192.34 80.38 192.84 80.38 194.6 79.86 195.36 79.35 195.86 78.87 196.36 78.12 196.61 77.09 197.37 76.11 197.87 75.35 198.37 74.6 199.38 73.09 200.38 72.09 201.66 71.33 202.92 70.83 204.17 70.33 204.93 69.82 205.68 69.32 205.93 68.82 206.18 68.06 205.93 67.31 205.43 67.06 205.18 66.81 205.93 66.81 206.94 66.81 207.94 66.81 208.95 66.56 209.95 66.05 210.96 65.8 211.46 65.55 211.96 65.05 212.47 64.55 213.49 64.3 214 64.3 214.5 64.3 215.25 64.8 216.51 65.55 216.51 66.56 217.01 67.31 217.52 68.32 218.02 69.07 218.52 69.57 218.52 68.82 220.53 68.06 222.29 67.56 223.55 67.31 223.8 66.81 225.08 66.56 226.33 66.05 226.58 65.8 226.83 65.05 226.83 64.8 226.83 63.54 226.58 62.79 226.33 61.78 226.33 61.28 226.58 61.03 226.83 60.78 227.09 60.53 227.34 60.27 228.09 59.27 229.85 58.77 231.11 58.77 231.36 58.26 232.11 57.51 233.37 56.5 234.88 56 235.63 55.5 237.14 55.25 238.14 55.25 239.4 55 241.16 55 242.67 55 242.92 54.49 243.92 54.24 244.68 52.73 246.44 52.23 246.94 51.48 247.97 50.98 248.72 50.98 249.22 50.98 249.47 50.98 249.98 51.23 250.73 51.48 251.74 51.48 252.49 51.73 252.74 51.98 252.99 52.48 253.24 53.49 253.5 53.99 253.75 55.25 253.75 55.75 253.75 56 253.5 56.5 253.5 57.01 253.75 57.26 253.75 57.76 254 58.26 254 59.27 254 60.02 254.5 61.28 255.26 62.03 256.51 62.03 257.27 62.54 258.02 63.04 259.05 63.29 259.55 63.29 260.3 63.54 261.31 63.79 262.31 64.04 262.82 63.29 263.07 61.78 263.82 31.14 261.56 28.63 261.31 26.37 261.31 25.11 261.06 24.36 261.06 23.6 261.31 22.6 261.81 21.84 262.56 20.84 263.57 20.08 264.32 19.83 264.57 19.33 264.07 18.83 263.57 18.32 263.07 18.07 262.56 17.32 260.81 16.06 258.77 14.3 257.77 11.54 255.76 9.28 252.99 6.76 249.73 4.25 247.72 4 245.94 2.24 245.18 4 244.18 5.76 242.92 6.51 242.17 7.27 241.66 8.27 241.16 9.03 240.91 10.03 240.15 11.29 238.9 12.8 237.64 13.8 236.64 15.06 235.63 15.56 234.88 16.57 234.12 17.32 233.62 17.82 233.37 19.08 233.12 20.84 233.12 22.09 233.12 24.36 233.62 24.86 233.62 25.86 233.87 28.13 234.12 29.13 234.12 30.39 234.12 31.9 234.37 33.4 234.37 33.65 234.37 34.91 234.63 36.42 234.88 37.15 234.88 38.41 234.88 39.41 234.63 39.41 234.37 39.41 234.12 39.41 232.36 39.67 231.86 39.92 231.61 40.17 230.86 40.42 230.1 40.92 229.1 40.92 228.09 41.42 227.09 41.42 226.83 41.17 226.58 40.67 226.08 40.67 225.83 40.67 223.55 40.92 221.79 41.17 219.78 41.17 217.77 41.17 215.25 40.92 213.24 40.92 211.21 40.67 209.2 40.42 206.94 40.42 205.18 40.42 202.67 40.42 200.13 40.42 197.37 40.67 195.36 40.67 193.09 40.92 191.34 40.92 189.58 40.92 187.31 41.17 185.56 41.17 183.29 41.17 180.53 40.92 178.27 40.67 175.98 40.42 174.22 40.42 172.21 40.42 169.45 40.42 167.44 40.67 165.16 42.18 163.9 43.94 162.64 45.7 161.39 46.95 160.13 48.71 158.87 50.72 157.87 52.48 157.11 53.74 155.86 55 154.08 56.25 151.82 58.01 151.31 59.77 151.82 61.53 152.07 63.29 151.06 64.55 149.55 66.05 147.79 67.31 145.78 68.32 144.02 69.57 141.76 70.33 140.25 69.82 138.24 68.57 135.98 67.56 134.47 66.31 132.97 64.8 130.93 63.29 128.92 62.54 127.17 61.53 125.66 61.53 125.41 61.03 124.9 61.53 124.4 64.3 119.86 66.56 116.09 68.32 113.32 70.83 110.81 73.85 108.53 78.12 107.52 82.12 107.52 84.13 107.52 86.14 106.51 88.4 105.76 89.93 105.01 94.43 100.73 95.19 99.73 102.5 93.95 110.52 86.66 117.3 79.85 124.34 72.54 125.85 70.28 128.86 66.26 130.12 65 134.14 60.21 135.65 58.45 137.41 56.44 142.18 49.9 144.95 45.88 148.22 41.11 150.48 36.06 150.98 34.8 152.99 29.02 154.75 25.48 155 24.98 155.25 23.98 155.5 23.47 155.76 22.72 156.51 19.96 156.51 18.7 156.76 14.41 156.76 12.65 156.76 12.14 158.75 12.14 164.28 12.39 164.78 12.39 165.28 12.39 166.29 12.14 167.04 11.89 167.8 11.64 168.8 11.14 169.81 10.38 170.56 9.88 171.57 9.13 173.33 7.12 177.35 4.1 180.36 2.09 180.61 1.59 181.12 1.09 182.37 1.34 184.38 2.09 186.14 2.84 187.9 3.6 189.41 4.6 191.17 5.86 193.18 6.36 195.19 8.12 196.95 10.13 197.94 11.64 198.94 13.15 200.45 14.91 200.95 17.19 201.2 18.95 201.2 21.46 201.2 23.47 200.2 25.99 199.44 28 198.69 30.28 198.19 31.03"})})})};export{w as default};
