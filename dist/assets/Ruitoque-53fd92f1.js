import{r as l,j as a}from"./index-ba945616.js";const x=()=>{const[d,f]=l.useState([]),[m,u]=l.useState(0);l.useEffect(()=>{fetch("https://raw.githubusercontent.com/cristianlondonot/mandounificado-spidersoft/main/data-factor.json").then(r=>r.json()).then(r=>{const o=r.reduce((t,s)=>{const c=s.NOMBRE;return t[c]?t[c]++:t[c]=1,t},{}),e=Object.entries(o).map(([t,s])=>({veredaBarrio:t,count:s}));f(e);const i=e.reduce((t,s)=>t+s.count,0)/e.length;u(i)}).catch(r=>console.error("Error al cargar los datos:",r))},[]);const h=r=>{var n;const o=((n=d.find(i=>i.veredaBarrio===r))==null?void 0:n.count)||0;let e="#656565";return o<=3?e="#387905":o<=6?e="#feba00":o<=9?e="#F2860D":o<=12?e="#fc6107":o<15&&(e="#FC0707"),e};return a.jsxs("svg",{id:"a",xmlns:"http://www.w3.org/2000/svg",width:460,height:460,viewBox:"0 0 460 460",className:"m-auto",children:[a.jsx("defs",{children:a.jsx("style",{children:`.b{fill:${h("RUITOQUE")};fill-rule:evenodd;stroke-width:0px;}`})}),a.jsx("polygon",{className:"b",points:"300.62 92.09 299.34 92.09 298.94 92.09 298.1 92.09 297.68 92.09 297.27 92.09 296.43 91.66 296.43 91.25 295.6 91.25 295.19 91.66 293.93 91.66 292.69 92.09 288.93 92.54 287.25 92.94 286.85 93.35 287.25 94.18 287.68 95.45 288.52 98.79 288.93 100.43 290.18 100.03 295.6 98.36 300.62 97.52 302.24 97.52 303.06 97.52 303.49 97.52 303.9 97.52 304.33 97.52 305.58 97.52 306 97.12 306.4 97.12 306.81 96.69 307.24 97.12 307.24 97.52 307.65 97.95 308.08 97.95 308.49 97.52 308.08 97.12 308.08 96.69 308.08 96.28 308.49 95.85 309.74 95.85 313.9 95.85 314.74 95.85 315.16 96.28 315.56 96.28 318.08 96.69 319.33 97.12 319.33 97.52 319.33 98.36 318.9 98.79 318.49 99.19 317.24 100.03 316.83 100.43 316.83 100.86 317.24 101.27 317.66 100.86 318.08 100.43 318.49 100.03 320.97 97.95 321.4 97.52 321.81 97.52 321.81 97.12 322.24 96.69 322.65 96.28 322.65 95.02 323.08 95.02 323.91 94.61 325.15 93.78 325.58 93.35 326.41 93.35 327.65 92.94 328.08 92.54 328.08 92.09 328.08 91.25 327.65 90.85 327.65 90.42 328.49 89.58 328.9 89.18 328.9 88.34 329.33 88.34 329.74 87.91 329.74 87.51 330.16 87.08 329.74 86.67 328.9 85.41 328.08 85.84 327.22 85.84 327.22 86.24 326.83 86.67 326.41 86.67 325.58 87.08 325.15 87.08 323.91 87.91 323.91 88.34 323.91 89.18 323.08 90.01 322.65 90.01 323.08 89.58 323.49 89.58 323.91 89.18 323.49 88.75 322.24 89.58 323.49 88.34 323.49 87.91 323.91 87.51 323.49 87.51 323.91 87.51 323.91 87.08 323.91 86.24 323.49 86.24 323.49 85.84 323.08 85.84 323.08 85 324.31 84.57 325.99 84.17 328.08 83.76 328.9 83.76 329.33 83.76 329.74 83.76 330.16 84.17 330.99 84.57 331.4 85 332.24 85.84 332.66 86.24 332.66 86.67 333.5 87.08 335.58 87.91 338.08 89.58 341.41 90.85 342.65 91.25 343.06 91.66 343.9 92.09 343.9 92.54 344.74 92.94 344.74 93.35 345.56 93.35 345.99 93.35 346.4 92.94 346.4 92.09 346.83 91.66 347.24 91.25 348.08 91.25 348.9 91.25 349.74 92.09 350.58 92.54 352.65 94.61 353.08 95.02 353.49 95.02 353.91 95.45 355.15 95.45 356.83 95.85 357.24 95.85 357.66 95.85 358.9 95.45 359.33 95.45 359.74 95.02 360.16 93.78 360.16 92.54 360.58 92.54 360.58 92.09 360.97 89.18 361.83 90.01 362.65 90.85 363.49 92.54 363.9 94.18 363.9 95.45 365.15 99.19 366.41 100.86 366.81 101.27 366.81 101.7 367.24 102.94 367.63 103.37 368.03 105.44 368.46 108.78 368.46 109.19 368.46 110.45 368.87 111.31 368.87 115.46 368.03 115.89 368.03 117.13 368.46 120.06 368.46 124.64 368.87 126.72 370.13 129.63 370.13 130.48 372.21 134.25 374.3 136.73 378.46 140.91 381.4 143.41 382.21 143.84 384.3 145.92 385.97 147.16 387.21 147.99 388.88 149.68 390.12 151.76 390.96 154.26 391.38 156.36 391.8 158.87 392.62 161.78 393.88 163.85 395.12 165.52 395.53 165.93 397.63 168.88 399.3 170.55 399.71 172.22 400.55 174.7 400.55 176.8 400.55 179.31 401.8 181.38 402.62 183.46 403.88 186.39 404.28 188.89 404.28 191.83 404.71 195.17 405.12 198.48 405.96 200.15 406.8 202.65 407.22 203.06 408.05 203.89 408.46 204.32 409.71 205.56 410.53 206.4 410.96 206.83 411.37 207.26 411.8 207.69 412.21 207.69 412.21 208.09 412.63 208.09 413.47 208.93 415.13 210.17 415.96 211 418.05 211.84 420.55 213.51 420.96 213.94 421.38 214.34 422.22 215.18 423.46 217.25 424.3 218.52 424.71 218.92 425.53 220.18 425.96 221.02 425.96 221.42 426.37 221.85 426.8 222.26 427.21 222.69 426.8 223.93 426.37 225.17 425.96 225.6 425.96 226.46 424.3 229.37 423.87 231.04 423.46 231.47 422.62 231.87 422.22 233.11 420.96 234.38 420.55 235.21 418.88 236.45 417.62 237.71 413.87 239.36 412.21 241.03 410.53 243.13 409.71 244.37 409.3 246.9 408.9 247.33 408.05 248.97 408.05 250.64 408.9 253.15 409.71 256.06 410.53 258.56 412.21 261.47 414.3 265.67 416.78 269.84 418.46 271.51 419.28 272.75 420.96 274.85 421.8 276.92 423.46 279.83 423.87 281.1 424.3 283.63 423.87 286.54 423.03 288.2 420.55 289.04 416.78 289.45 415.13 289.45 413.05 289.45 410.96 289.45 409.3 289.85 407.62 290.71 405.55 291.95 404.28 292.78 402.21 293.19 399.71 294.02 396.37 294.86 395.96 295.29 395.96 296.53 395.96 298.6 395.96 299.87 395.53 300.7 395.12 301.11 394.3 303.23 394.3 303.64 393.88 305.31 394.3 306.14 394.3 306.97 394.72 308.64 395.53 310.72 395.96 311.15 395.96 313.63 396.37 315.3 397.21 316.56 397.21 316.97 396.8 319.88 396.8 320.31 396.37 320.31 395.96 320.71 395.53 320.71 395.12 322 395.12 322.41 395.12 322.84 395.12 323.24 395.12 324.08 395.53 324.5 395.53 324.91 395.96 325.74 396.37 327.01 396.37 327.82 396.8 328.65 396.8 329.08 396.8 329.92 396.8 330.75 396.37 331.16 395.96 331.99 395.96 332.42 395.53 332.42 395.53 333.26 395.53 333.66 395.53 334.09 395.53 334.5 395.12 334.9 394.72 334.9 394.3 334.9 393.88 334.9 393.46 334.5 393.05 334.5 391.8 334.09 390.96 333.66 390.55 333.66 390.55 333.26 390.55 332.42 390.55 331.59 390.55 330.75 390.12 330.32 389.28 329.49 388.46 329.08 387.65 328.65 387.21 328.25 385.97 327.41 385.55 327.41 385.13 327.41 384.3 328.25 383.87 328.25 383.46 328.65 383.03 329.08 382.63 329.08 382.21 329.08 381.4 329.08 380.96 329.08 380.55 328.65 380.12 328.65 379.72 328.25 378.88 327.41 378.46 327.01 378.05 326.58 377.21 326.17 376.78 325.74 376.38 325.74 375.96 325.34 375.12 324.5 374.71 323.67 373.87 323.24 373.05 322.41 372.63 322 372.21 321.55 371.37 321.55 370.13 321.14 369.71 321.14 368.87 321.14 366.81 320.71 365.99 320.71 364.74 320.31 364.31 319.88 363.49 319.07 362.65 318.64 362.24 318.23 362.24 317.8 361.83 317.8 361.4 317.4 359.74 316.56 358.9 316.13 358.49 316.13 357.66 316.13 356.83 316.56 355.56 316.56 354.75 316.13 353.91 315.73 353.49 314.89 353.08 314.46 352.65 314.06 351.81 313.22 351.81 312.79 351.81 312.39 352.24 312.39 352.24 311.98 352.24 311.55 352.24 311.15 350.99 311.15 350.99 311.55 350.58 311.98 349.74 311.98 349.31 311.98 348.9 312.39 348.5 312.79 348.5 313.22 348.08 313.22 347.24 313.63 346.83 313.22 346.4 313.22 345.99 312.79 344.74 311.98 343.9 311.55 343.49 311.55 343.49 311.15 343.06 311.15 342.65 310.72 341.41 309.88 340.99 309.88 339.74 309.48 339.33 309.05 338.49 308.64 338.08 307.81 337.24 307.38 336.81 306.97 336.41 306.55 336.81 305.73 336.81 304.07 337.24 303.23 337.24 302.8 337.24 302.37 337.24 301.94 337.65 301.94 337.65 301.54 337.65 301.11 337.65 300.7 337.65 300.27 337.65 299.87 337.65 299.44 337.24 299.44 336.81 299.44 336.81 299.87 336.41 299.87 335.99 299.44 335.15 299.03 334.74 298.6 334.31 298.6 333.9 298.6 333.5 298.2 333.08 297.79 332.66 297.36 332.24 296.93 331.4 296.53 330.99 295.69 330.56 295.29 330.56 294.86 330.56 294.02 330.16 294.02 330.16 293.62 329.74 293.19 329.74 292.78 329.33 292.78 329.33 292.35 328.9 291.95 328.9 291.52 328.49 291.11 328.08 290.71 327.65 290.71 327.22 290.71 327.22 290.28 326.83 290.28 326.41 290.28 325.15 289.85 324.74 289.85 323.08 289.85 322.65 289.85 322.24 290.28 321.4 290.28 320.15 289.04 319.33 288.61 318.49 288.2 319.33 287.37 319.33 286.94 318.49 286.54 317.24 285.7 317.66 285.27 317.24 284.87 316.4 283.63 316.4 283.17 315.99 282.77 315.56 281.91 313.9 279 313.08 277.33 311.83 275.25 310.58 274.01 309.74 273.18 308.08 272.34 307.24 272.34 305.16 272.75 303.9 272.34 302.66 272.34 302.24 272.34 301.83 272.34 301.4 271.08 301.4 269.84 301.83 269.01 301.4 267.77 300.99 266.93 300.62 266.1 299.77 264.83 298.94 263.57 297.27 262.73 295.19 262.3 292.69 262.3 289.75 262.73 287.68 262.73 286.85 263.14 285.18 263.14 283.1 264.83 281.03 266.5 279.37 267.77 278.52 268.58 278.52 269.41 277.27 271.08 276.02 272.75 274.75 274.01 274.35 275.68 274.35 278.16 274.75 281.1 275.59 283.17 275.59 283.63 276.02 284.44 276.02 286.54 275.59 289.04 274.35 291.52 272.68 294.45 271.84 296.12 268.93 297.79 267.68 299.44 266.43 300.27 264.35 302.37 263.09 303.23 261.85 304.07 259.35 305.31 257.68 306.14 255.6 307.81 254.34 309.88 253.1 311.98 252.27 314.06 251.43 316.97 251.43 319.88 251.43 320.31 251.87 322.41 251.87 322.84 253.1 325.74 253.53 327.41 254.34 329.92 255.18 334.09 256.84 337.84 258.12 339.08 258.94 340.34 259.78 341.2 260.18 342.01 261.02 343.27 261.02 344.11 261.02 345.35 261.02 346.61 261.02 347.02 260.18 347.85 258.52 348.28 256.02 348.28 253.93 348.69 253.53 348.69 251.02 348.69 249.35 349.09 248.09 349.52 247.25 349.52 246.44 348.69 243.52 344.11 243.1 343.68 242.68 343.27 241.84 342.85 240.6 342.85 238.93 343.27 236.43 343.68 234.77 343.27 233.55 342.85 232.3 342.01 231.87 341.61 231.47 341.2 230.21 340.34 229.8 340.34 229.37 340.34 228.96 340.77 228.96 342.44 228.96 344.52 228.96 345.35 229.37 345.78 229.8 346.61 230.63 347.45 231.47 348.69 231.87 349.93 231.87 350.76 232.3 350.76 232.3 351.19 232.71 351.6 233.55 351.6 234.77 351.6 236.87 351.6 237.69 352.03 236.43 352.03 234.77 352.43 233.96 352.43 233.13 352.43 232.3 352.03 231.47 352.03 230.63 352.43 230.63 352.86 230.63 353.27 230.21 353.7 229.37 354.1 228.53 354.1 228.13 354.53 226.9 354.94 225.22 355.77 223.55 356.61 221.88 356.61 219.37 357.44 218.13 357.85 216.87 358.28 216.03 358.68 215.21 359.11 214.37 359.11 213.53 359.11 213.12 359.11 213.12 359.97 212.3 359.97 210.62 360.38 209.8 360.38 208.55 359.97 206.88 359.97 204.8 360.38 202.71 360.8 199.8 361.21 198.55 361.64 197.3 361.64 196.05 362.04 194.78 362.04 191.47 362.47 188.96 362.47 187.71 362.47 186.89 362.47 185.22 362.47 183.97 362.47 182.72 362.88 180.62 363.71 178.14 364.95 176.47 365.79 174.37 366.62 171.89 367.46 168.95 369.56 166.9 370.8 165.66 371.63 163.99 372.87 161.89 374.54 160.25 376.21 158.15 377.45 156.08 378.29 154.41 379.17 151.9 380.41 149.83 381.24 148.16 382.08 146.89 382.08 146.06 382.08 144.83 381.65 142.31 381.24 139.83 380.41 137.73 379.57 136.49 379.17 134.83 378.72 132.75 378.72 131.08 378.29 130.25 377.88 128.98 377.45 126.48 376.64 124.4 375.38 124 375.38 121.9 374.54 118.58 373.71 116.48 372.87 114.81 372.87 112.31 372.47 111.9 372.04 110.24 371.63 109 370.8 105.66 369.56 104.42 369.13 102.75 368.72 102.33 368.72 101.1 368.29 99.84 367.05 99.44 365.38 99.03 361.64 98.19 359.11 97.76 354.1 96.94 347.45 95.26 338.24 94.85 335.33 92.75 329.08 89.84 320.31 88.6 317.4 86.5 314.46 84.86 310.72 83.19 307.81 81.94 306.14 81.52 305.73 80.26 304.9 78.61 304.07 76.94 302.8 74.84 301.54 73.17 299.87 71.94 297.79 71.53 296.12 71.53 294.02 70.69 290.71 70.26 288.61 69.44 287.37 69.02 286.54 68.59 286.54 67.35 285.27 66.09 284.87 65.28 284.87 62.77 286.94 61.51 287.37 60.27 288.2 59.01 289.04 58.19 290.28 57.36 291.11 56.1 292.78 55.26 294.45 54.43 295.69 53.59 296.93 51.95 299.44 50.28 301.54 48.18 304.9 46.51 306.14 45.27 307.38 44.43 307.81 42.76 308.22 41.93 309.05 41.09 309.48 41.09 310.31 41.09 310.72 40.26 311.55 39.02 312.79 37.75 313.63 36.51 314.06 35.68 314.06 35.3 314.06 33.2 313.63 33.2 312.39 33.2 309.48 33.2 306.14 33.2 304.07 32.79 302.37 32.79 301.54 32.79 299.03 32.79 297.79 33.63 295.69 34.03 294.86 34.87 292.78 35.68 291.52 36.11 289.85 36.11 288.61 36.11 287.37 35.68 286.54 36.11 285.27 36.94 282.77 37.75 281.1 38.18 279.43 39.02 279 41.52 278.16 42.36 277.76 43.19 276.92 44.03 276.09 44.84 274.42 45.7 273.18 46.51 271.92 46.94 271.08 48.18 269.84 48.61 269.41 49.44 268.58 51.11 267.77 54.02 266.5 55.69 265.67 56.1 265.26 57.36 264.83 58.19 264.43 60.27 263.57 61.51 263.14 62.34 262.73 64.44 261.47 64.01 261.47 63.19 259.39 62.77 258.56 62.34 257.72 61.51 256.48 60.67 255.65 61.51 254.39 62.34 252.74 62.34 252.31 62.77 251.91 63.19 251.07 63.19 250.64 62.77 250.64 61.94 250.24 61.51 250.24 61.1 250.24 60.67 250.24 60.27 249.81 60.27 249.4 61.51 248.57 63.19 247.73 64.01 248.14 65.28 247.73 65.69 247.33 66.09 246.9 66.92 246.9 67.76 246.47 68.19 246.47 69.02 246.06 69.44 245.66 70.69 246.9 71.1 247.33 71.1 248.14 71.53 249.4 71.53 249.81 71.94 250.24 71.94 250.64 74.84 248.57 74.84 247.33 75.27 246.9 75.69 246.06 76.51 245.23 76.94 244.8 77.35 243.96 77.35 242.7 80.26 242.29 80.26 241.86 84.86 241.03 86.1 240.62 86.1 240.19 85.69 240.19 84.44 240.19 84.02 240.19 83.59 240.19 83.19 240.19 81.94 240.19 81.52 239.79 81.09 239.79 80.26 239.36 79.85 239.36 78.61 238.95 78.61 238.53 77.78 238.53 77.35 238.53 76.94 238.12 76.11 238.12 76.11 237.71 75.69 237.29 75.27 236.88 74.84 236.45 74.01 236.45 73.6 235.62 72.77 234.38 73.17 234.38 73.6 233.95 74.01 233.95 74.44 233.95 75.69 234.38 76.51 234.38 78.19 234.38 80.26 234.38 81.52 234.38 81.94 234.38 81.94 233.95 85.26 231.04 86.1 230.63 86.5 229.8 86.1 229.8 85.26 228.13 83.59 226.03 84.02 224.36 83.59 223.93 81.94 222.26 81.52 219.76 81.94 217.68 81.94 217.25 81.52 217.25 81.52 216.85 81.52 216.44 81.52 216.01 81.52 215.61 81.52 215.18 81.52 214.77 81.94 214.34 82.35 214.34 82.76 213.94 83.19 213.94 83.59 213.94 84.44 213.51 85.26 213.1 86.1 212.67 86.5 212.67 86.94 212.27 86.94 212.67 86.94 213.51 86.94 214.34 87.34 214.77 87.77 215.18 88.17 215.61 88.6 215.61 89.44 215.61 89.44 216.01 89.84 216.01 90.27 216.44 90.27 217.68 90.69 219.76 90.27 219.76 90.27 220.18 90.69 221.42 91.11 222.69 91.51 223.09 91.51 223.52 91.94 223.52 92.75 223.52 94.02 223.93 95.69 223.93 96.52 223.93 97.36 224.76 98.19 224.76 98.6 224.76 99.03 224.36 99.84 223.52 100.27 223.52 100.67 223.09 101.1 223.09 101.51 223.52 103.15 221.85 103.99 220.59 104.83 218.52 106.49 214.34 108.16 211 109.4 210.17 110.66 209.33 110.66 208.93 111.08 208.93 111.5 208.52 112.31 208.09 113.58 206.83 114.81 205.99 116.08 205.16 116.91 204.32 117.33 203.89 118.15 202.25 119.39 200.58 120.23 199.74 121.9 198.48 122.33 197.65 122.73 197.24 124 196.41 125.24 195.57 128.15 193.5 128.98 193.07 129.41 192.66 130.65 191.83 131.92 190.99 134.83 188.89 136.49 188.08 141.48 185.55 142.74 185.12 143.58 184.72 145.25 183.88 146.49 183.46 149.4 182.62 150.23 182.22 151.08 182.22 151.9 181.79 152.74 181.79 153.98 180.95 155.24 180.55 156.91 179.71 157.74 179.31 158.58 178.88 158.98 178.88 159.41 178.47 160.25 178.04 161.06 177.64 161.49 177.64 162.33 177.21 163.16 177.21 164.4 177.21 165.23 176.8 166.9 176.8 168.95 176.8 169.8 176.8 170.22 176.8 170.62 176.37 172.3 176.37 173.53 176.37 174.8 176.37 176.05 176.8 177.3 176.8 178.14 176.8 178.95 176.8 179.38 176.8 179.78 176.8 180.22 176.8 180.62 176.8 181.05 176.37 183.12 175.54 188.55 173.03 189.8 172.22 191.05 171.79 192.71 170.96 193.96 169.72 195.62 167.6 196.88 164.28 198.96 159.27 200.63 156.77 203.13 153.86 203.55 153.43 208.12 156.77 209.8 158.03 212.72 158.44 215.63 160.11 218.97 160.94 220.21 160.94 222.71 160.51 226.05 159.27 227.3 157.2 229.37 155.53 233.96 155.1 236.43 157.6 239.77 155.53 241.02 154.69 243.94 153.02 245.62 152.19 246.85 150.52 248.93 148.42 253.1 145.08 258.52 142.58 261.02 140.91 263.09 137.16 263.09 134.25 263.09 131.75 262.69 127.55 262.27 126.31 261.02 124.21 261.85 120.47 262.27 118.39 266.02 116.72 268.1 113.81 271.84 112.14 273.52 112.14 275.59 114.22 279.37 112.98 279.37 108.78 272.68 79.99 272.27 78.32 272.68 77.92 273.52 77.92 273.94 77.92 274.35 77.92 274.75 78.32 275.18 78.32 275.59 78.75 276.02 78.75 276.02 79.16 276.43 79.59 276.85 79.59 277.27 80.42 277.69 80.83 278.09 80.83 278.09 81.26 278.52 81.66 278.93 82.09 279.37 82.5 279.77 82.5 280.18 82.93 280.6 82.93 281.03 83.76 281.43 84.17 281.84 84.17 282.27 84.57 282.68 84.57 283.1 85 283.52 85 283.94 85 284.34 85 285.18 84.57 285.62 84.57 286.02 84.17 286.44 84.17 286.85 83.76 287.25 83.33 287.25 82.93 287.68 82.93 288.12 82.5 288.52 82.5 288.93 82.5 289.35 82.09 289.75 82.5 290.59 82.5 291.02 82.5 291.43 82.93 292.27 83.33 293.09 83.76 293.52 83.76 293.93 83.76 294.37 83.76 294.37 84.17 294.77 84.17 295.19 84.17 295.19 84.57 295.6 84.57 296 84.57 296 85 296.43 85 297.27 85.41 298.1 85.41 298.52 85.41 299.77 85.84 300.62 86.24 300.99 86.24 301.4 86.67 301.83 87.08 302.24 87.51 302.24 88.34 302.24 88.75 302.66 89.18 303.06 89.58 303.49 89.58 303.9 90.01 304.33 90.85 304.33 91.25 304.74 91.25 304.74 91.66 304.74 92.54 304.74 92.94 304.33 93.35 304.33 94.18 303.9 94.61 303.9 95.45 303.49 95.85 303.49 96.28 303.06 96.28 302.66 95.02 302.66 94.18 303.49 94.18 303.9 93.78 303.06 92.54 302.66 92.09 301.83 92.09 301.4 92.09 300.99 92.54 300.62 92.09"})]})};export{x as default};
