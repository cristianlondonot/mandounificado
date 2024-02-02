import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import '../../../App.sass'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'



const Jordan = ({departamento, municipio}) => {
  const navigate = useNavigate();

  //esta función es la que asigna el color según la cantidad de carencias que tiene la vereda o el barrio
  const { getColorByCarencias } = UseCarenciasPorVereda();

  //Esta función abre la vereda o barrio seleccionado. Toma los datos de data-name-url y los ingresa a navigate 
  const handleNeighborhoodClick = (event) => {
    const { dataset } = event.target;
    const nombreVeredaBarrioUrl = dataset.urlName;

    if (typeof municipio === 'function') {
      municipio({ nombre: nombreVeredaBarrioUrl });
    }

    if (nombreVeredaBarrioUrl) {
      navigate(`/departamento/${departamento}/municipio/${municipio}/vereda/${nombreVeredaBarrioUrl}`);
    } else {
      console.error('No se ha proporcionado el nombre de la ciudad.');
    }
    
  };
  return (
    <div className="w-full h-full">
      <Tooltip id="my-tooltip"  />
      <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1244.81 841.89"
          style={{
            strokeWidth: '2px',
            stroke: '#fff',
            enableBackground: "new 0 0 1244.81 841.89",
          }}
          xmlSpace="preserve"
        >
          <polygon
            fill={getColorByCarencias('EL GUASIMO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="El Guasimo"
            onClick={handleNeighborhoodClick} 
            data-url-name="el-guasimo"
            className="st0"
            points="911.5,226.9 916.99,228.28 924.97,231.48 931.83,234.68 937.78,237.42 943.27,240.42 946.24,244.51  947.61,250.48 948.76,253.91 949.21,255.51 952.87,258.27 958.82,258.04 966.82,256.88 972.06,256.42 980.07,261.48 980.32,261.48  980.75,262.16 983.73,265.82 987.84,267.19 988.32,267.42 994.72,269.73 999.05,272.93 999.96,273.62 1003.4,275.9 1007.97,276.82  1010.26,277.27 1012.31,277.5 1015.06,280.25 1016.2,281.87 1018.03,283.91 1018.95,285.07 1019.63,289.87 1020.32,294.22  1021.69,296.05 1023.52,298.56 1025.58,301.33 1026.95,302.93 1028.78,307.5 1030.15,310.02 1030.38,310.26 1030.61,310.26  1036.31,313.47 1041.11,316.21 1045.91,316.21 1048.2,316.44 1050.95,316.9 1053.23,319.18 1054.83,321.03 1059.64,321.93  1061.69,323.09 1065.58,324.9 1066.27,327.21 1067.18,329.93 1069.7,332.7 1074.48,335.21 1079.74,335.44 1085.46,334.75  1087.29,334.52 1090.72,334.07 1095.52,334.3 1098.5,338.41 1101.7,343.92 1102.61,345.98 1105.13,351.01 1109.7,356.29  1114.71,360.18 1121.59,364.98 1127.75,367.51 1133.7,370.7 1140.56,375.75 1144.9,378.03 1146.5,379.18 1151.31,383.77  1157.02,390.17 1159.31,395.91 1160.22,397.97 1162.28,405.31 1165.03,409.86 1165.48,416.06 1165.48,416.28 1162.28,422.23  1161.83,425.91 1161.83,430.25 1164.57,433.46 1167.09,435.51 1168.91,437.36 1169.83,438.28 1169.83,441.71 1166.4,446.51  1160.45,454.31 1157.25,462.31 1152.45,473.31 1152.68,481.56 1154.05,490.71 1159.08,498.71 1162.74,505.13 1166.17,511.56  1166.86,514.53 1161.83,514.99 1152.45,515.22 1143.53,514.3 1136,511.78 1126.15,506.73 1125.71,506.51 1118.85,503.08  1111.53,497.57 1103.98,494.38 1096.44,492.08 1089.35,487.73 1081.11,485.45 1076.77,484.76 1070.82,484.07 1070.16,484.07  1069.24,483.85 1068.1,483.62 1066.95,483.39 1061.47,482.24 1053.69,480.41 1047.06,478.81 1039.74,475.82 1037.45,472.39  1033.58,467.34 1030.84,463.68 1026.49,456.82 1020.09,450.63 1012.77,446.51 1005.45,444.22 994.72,443.99 986.03,445.82  981.23,449.25 977.09,451.33 973.91,452.25 973.44,452 967.03,449.25 961.31,444.91 957.67,443.54 956.07,442.85 951.5,442.85  944.64,441.94 940.52,441.48 936.63,440.34 932.06,440.11 929.77,441.71 930.23,446.99 931.37,454.08 932.29,462.77 932.98,470.33  934.8,475.59 939.61,479.04 940.52,481.33 935.03,478.36 929.09,474.45 925.43,470.79 922.47,467.11 920.19,465.28 918.82,463.91  915.61,460.25 912.41,456.12 909.21,453.37 906.47,452.25 899.15,452.48 898,449.03 896.63,447.22 895.95,446.05 894.8,443.77  893.89,441.48 893.2,438.96 892.52,437.59 892.06,435.97 891.37,434.83 890.69,433.46 890,432.54 889.54,432.31 889.08,431.4  888.17,430.03 887.27,428.42 886.36,426.82 885.9,425.91 885.67,425.43 884.99,423.83 884.53,422.69 883.84,421.54 883.16,420.86  881.79,419.26 881.79,419.03 881.56,418.8 881.79,417.89 875.84,406.43 872.41,396.83 860.75,384.91 850.68,378.72 842.7,373.46  837.42,366.6 834.46,358.81 827.58,348.72 820.95,340.47 814.34,330.18 806.79,319.41 798.33,307.27 791.01,293.76 783.92,274.53  779.81,252.54 779.12,235.14 778.68,227.36 778.68,224.83 784.15,227.13 788.27,225.74 792.84,224.37 799.7,218.65 804.96,212.92  814.57,206.51 822.78,202.4 831.01,197.13 839.02,193.69 847.48,190.71 858.23,183.6 863.72,179.94 868.29,186.14 868.75,186.82  874.01,191.17 880.64,196.68 884.99,200.34 889.08,204.91 893.2,210.4 896.63,215.91 897.78,221.4 900.98,225.06 906.24,225.51 "
          />
          <polygon
            fill={getColorByCarencias('EL POTRERO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="El Potrero"
            onClick={handleNeighborhoodClick} 
            data-url-name="el-potrero"
            className="st1"
            points="502.94,518.06 504.57,518.29 505.74,517.59 507.37,516.66 509.47,515.96 510.87,515.26 512.5,514.33  513.67,513.16 516.24,511.06 517.17,510.36 516.93,509.19 518.57,509.19 521.11,509.19 525.78,510.59 528.58,513.63 529.28,514.56  529.74,515.49 531.61,517.82 535.34,521.58 537.21,522.51 539.77,523.91 540.47,524.84 541.87,526.94 547.23,528.34 553.07,530.46  556.08,531.62 557.24,532.09 559.81,532.79 564.24,536.05 566.11,537.45 567.97,539.79 568.67,542.37 569.61,545.87 569.84,548.44  570.07,550.75 572.17,554.27 576.37,555.67 579.63,556.13 581.03,556.6 585.46,558.23 588.96,561.5 591.53,565.71 593.38,568.51  596.17,569.21 601.79,569.21 602.49,569.21 606.44,569.68 607.39,569.68 610.17,569.68 614.37,571.31 618.35,573.2 621.38,575.76  623.01,579.49 625.33,581.59 629.76,583.46 633.49,586.98 637.22,590.71 641.19,593.02 641.65,593.27 646.32,593.49 650.75,593.02  654.01,593.02 654.25,593.49 657.05,596.54 660.08,599.8 660.54,600.04 666.38,602.6 671.95,605.89 678.48,608.45 683.85,611.25  688.28,614.98 697.37,617.57 705.05,619.2 711.12,621.07 713.45,623.4 713.45,623.63 713.21,629.02 713.21,633.66 715.78,638.81  719.51,643.24 723.01,647.21 724.88,650.49 726.28,653.52 727.67,656.56 728.14,656.79 730.47,659.37 734.91,660.77 738.17,662.17  734.44,662.41 732.34,661.94 729.54,661.01 724.18,658.65 721.38,654.22 719.28,648.39 716.48,645.11 712.98,642.78 710.88,640.68  709.48,638.34 707.85,637.64 705.52,638.34 704.14,638.34 701.81,638.11 698.54,638.34 693.41,640.44 689.21,640.44 685.01,637.88  681.28,634.59 676.62,633.45 671.95,635.29 668.92,636.95 665.91,637.64 662.18,637.88 657.28,637.18 652.61,636.25 648.42,635.29  644.45,635.99 641.42,635.55 638.85,633.89 638.85,630.65 637.45,628.32 635.12,627.36 631.62,629.95 629.06,631.35 626.03,631.56  625.33,628.76 623.48,626.43 620.9,624.8 619.05,620.6 616.48,618.03 614.85,619.2 613.22,623.63 611.35,628.76 609.02,632.96  606.22,633.89 602.94,632.05 600.86,629.72 597.81,627.83 594.56,628.06 592.46,628.53 589.9,627.13 585.93,626.2 582.67,626.43  577.77,627.83 576.14,628.32 574.27,627.83 571.94,625.96 569.84,622.93 568.21,619.67 566.11,616.87 563.77,615.22 559.81,614.28  554.46,614.98 550.97,615.22 543.97,616.4 537.67,618.03 532.54,619.2 528.34,621.3 527.18,622 522.98,623.86 521.11,624.8  519.95,626.92 520.41,628.76 522.28,630.86 526.24,632.51 527.64,633.19 527.88,634.59 526.01,635.55 521.81,635.78 519.25,635.29  517.63,634.15 515.54,633.45 513.9,633.45 512.27,634.36 510.4,635.99 508.77,638.11 507.37,640.91 505.51,643.71 503.41,644.64  501.08,644.64 498.74,644.87 497.34,645.11 497.11,645.34 496.18,646.04 495.71,646.74 495.01,647.44 494.08,648.86 492.91,650.26  491.28,651.19 491.05,651.19 488.48,652.12 486.85,653.06 485.22,655.16 482.88,656.32 482.18,656.56 477.31,656.79 471.69,656.32  466.32,656.32 461.68,656.79 455.85,657.72 453.28,657.95 450.47,656.56 446.52,654.92 442.32,653.06 437.19,650.03 433.93,647.44  431.83,646.97 430.19,646.51 427.86,647.44 425.3,649.56 423.66,652.12 421.8,654.92 419.7,656.32 417.6,656.79 414.33,656.79  412.47,656.79 409.9,657.72 406.19,660.07 403.86,661.94 401.76,664.5 398.49,666.84 396.4,668 394.53,668.24 394.3,666.37  394.06,665.67 394.06,664.27 394.06,663.81 394.06,663.34 394.06,663.11 394.06,662.64 394.06,661.94 394.06,660.07 394.06,657.95  393.83,657.02 394.3,656.32 394.53,655.86 394.76,654.69 395.23,653.52 395.46,652.36 395.93,650.96 395.93,649.56 396.16,648.16  396.16,646.74 396.16,645.57 396.4,644.41 396.63,643.24 397.56,641.14 397.79,639.98 398.03,638.58 398.26,637.41 398.49,636.25  398.73,635.06 398.96,634.36 399.66,632.75 399.89,631.81 400.59,629.72 401.29,628.53 401.53,627.36 401.99,626.2 402.46,624.8  402.69,623.63 402.69,622.7 402.93,622 403.16,621.3 403.63,619.9 403.63,619.67 403.86,618.73 403.63,616.4 403.39,614.98  403.39,614.52 402.93,612.18 402.69,609.62 403.63,610.09 404.56,610.78 405.26,611.48 405.96,611.72 406.42,611.95 407.34,612.65  408.04,612.88 408.97,613.35 410.14,613.82 411.3,614.75 412,614.98 412.7,614.05 413.17,612.88 413.63,611.95 414.33,610.78  415.03,609.85 415.73,609.15 416.9,607.52 418.53,605.19 416.67,603.77 415.5,602.6 413.87,601.67 413.17,600.97 418.3,593.49  423.9,584.41 427.63,579.03 431.36,575.06 433.93,568.05 434.39,558.93 432.99,550.75 428.56,544 426.93,538.62 425.53,533.26  426,525.31 426.7,517.36 427.86,507.8 428.56,505.21 433.23,497.05 438.12,489.82 442.55,484.67 449.53,484.43 453.03,482.8  455.62,482.1 460.98,481.64 464.46,482.33 468.21,483.5 471.69,485.6 474.74,487.95 478.47,490.28 482.18,491.92 484.75,492.62  487.32,494.25 489.18,496.35 491.05,498.7 491.98,501.27 493.61,505 494.78,508.96 495.94,513.16 498.04,514.79 499.91,516.19  502.01,517.36 "
          />
          <polygon
            fill={getColorByCarencias('EL POZO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="El Pozo"
            onClick={handleNeighborhoodClick} 
            data-url-name="el-pozo"
            className="st2"
            points="193.17,246.07 202.16,250.45 208.15,251.6 211.38,252.07 216.45,252.76 225.21,251.37 230.5,250.22  242.48,252.3 243.63,252.53 251.24,254.37 262.08,257.16 271.97,257.85 276.35,258.06 282.8,258.31 289.95,258.52 298.48,256.91  299.38,256.7 299.84,256.7 300.07,256.45 310.23,253.91 319.92,252.99 321.76,252.76 323.12,252.53 331.21,250.91 337.88,247.23  343.87,243.06 349.86,242.37 357.47,241.67 364.39,245.82 372.9,249.99 375.43,250.22 383.5,250.91 395.72,251.37 409.76,251.14  415.29,251.14 418.75,251.37 420.82,251.37 421.29,251.37 430.04,254.6 435.12,257.37 439.5,259.23 441.57,272.37 438.57,285.53  433.27,295.92 429.35,306.06 430.51,314.84 434.89,322.24 433.73,333.09 432.58,344.62 432.58,356.85 434.89,362.41 435.35,367.25  433.27,373.03 433.73,382.02 437.42,393.31 438.11,405.11 439.03,419.42 439.5,433.04 438.57,440.88 438.57,451.96 438.57,459.82  439.03,463.97 441.11,468.37 444.57,474.13 445.49,481.74 443.88,486.58 439.5,491.67 434.66,498.81 430.04,506.9 429.35,509.44  428.2,518.89 427.51,526.74 427.05,534.6 428.43,539.9 430.04,545.22 434.42,551.91 435.81,560 435.35,568.99 432.81,575.92  429.12,579.84 425.43,585.16 419.9,594.15 414.83,601.55 415.52,602.24 417.14,603.16 418.29,604.29 420.13,605.7 418.52,608  417.37,609.61 416.67,610.31 415.98,611.23 415.29,612.38 414.83,613.3 414.37,614.46 413.68,615.38 412.99,615.15 411.83,614.22  410.68,613.76 409.76,613.3 409.07,613.07 408.17,612.38 407.7,612.15 407.01,611.92 406.32,611.23 405.4,610.54 404.48,610.08  404.71,612.61 405.17,614.92 405.17,615.38 405.4,616.78 405.63,619.09 405.4,620.01 405.4,620.24 404.94,621.62 404.71,622.31  404.48,623 404.48,623.93 404.25,625.08 403.79,626.46 403.32,627.63 403.09,628.79 402.4,629.94 401.71,632.01 401.48,632.94  400.79,634.55 400.56,635.24 400.33,636.39 400.1,637.56 399.87,638.7 399.64,640.08 399.41,641.23 398.48,643.33 398.25,644.46  398.02,645.61 398.02,646.79 398.02,648.17 397.79,649.55 397.79,650.93 397.33,652.32 397.1,653.47 396.64,654.62 396.41,655.78  396.18,656.24 395.72,656.93 395.95,657.85 395.95,659.94 395.95,661.79 395.95,662.48 395.95,662.94 395.95,663.17 395.95,663.63  395.95,664.09 395.95,665.48 396.18,666.17 396.41,668.01 393.64,668.24 389.03,667.55 386.73,667.09 383.96,667.09 381.19,667.55  378.66,666.86 377.51,666.63 376.81,666.63 377.51,664.78 380.04,661.1 383.04,657.39 386.04,653.01 387.19,648.86 386.73,646.07  386.5,644.23 386.27,643.56 384.65,640.08 383.04,637.8 380.96,636.39 377.28,635.7 374.28,635.24 372.67,633.86 372.9,630.17  372.44,628.79 369.46,628.09 366.92,627.17 366.23,626.23 363.46,626 359.55,626.23 358.62,626.23 355.63,626.23 353.32,625.31  349.4,622.31 346.18,618.62 341.8,613.76 338.34,610.31 333.04,605.22 328.45,600.39 321.99,593.46 317.36,589.54 315.06,587.7  310.91,583.07 306.3,580.07 304.01,577.77 302.4,577.07 297.79,580.3 292.02,586.08 285.11,591.85 275.2,597.63 273.35,599.24  268.28,602.91 261.15,608 253.09,611.46 246.4,613.3 239.72,614.92 235.57,615.15 231.42,615.15 225.42,615.84 218.76,618.39  218.3,618.62 214.38,620.47 212.3,621.62 210,623.7 204.93,625.54 201.47,624.62 196.86,622.31 194.32,621.16 190.4,618.62  189.02,616.55 186.74,613.99 184.66,610.31 181.18,604.77 177.27,600.16 176.36,596.01 175.42,592.77 176.8,592.54 177.75,592.54  181.88,591.85 188.58,590 192.94,588.85 197.32,587.7 202.62,586.54 204.93,586.77 205.39,582.84 205.62,577.53 205.62,572.44  205.62,568.53 205.16,563.68 204.47,560.46 203.77,555.85 202.85,551.45 201.7,547.3 201.24,544.53 200.32,538.98 199.16,534.14  197.55,529.97 195.48,525.36 193.63,522.13 191.33,519.12 187.64,514.07 184.66,508.51 183.97,505.75 183.72,500.22 183.97,495.82  184.2,493.28 184.89,485.19 185.35,479.66 185.56,476.65 187.43,467.19 189.94,457.49 191.56,452.42 193.63,447.35 194.78,441.11  193.86,435.34 191.56,431.41 188.1,427.28 183.97,422.88 180.97,418.96 178.44,415.02 174.73,409.26 170.14,404.4 165.99,399.33  161.38,393.56 156.75,388.7 154.21,384.8 151.24,379.71 148.47,375.1 146.16,367.02 145.93,360.77 146.4,355.24 147.32,348.09  148.47,338.85 146.4,333.55 142.71,326.85 137.41,319.22 131.18,308.85 127.49,299.4 123.8,290.62 118.5,287.14 118.5,285.76  118.27,283.22 116.66,280.23 113.22,277.67 111.61,274.91 110.92,273.75 110.68,270.99 110.68,269.83 111.15,264.53 111.38,260.84  112.3,257.37 112.99,253.91 113.91,250.45 114.6,247.23 115.28,245.36 115.51,245.13 121.73,245.59 129.11,246.53 136.02,246.53  136.25,246.53 140.86,245.82 142.02,245.82 143.17,245.59 148.7,244.21 153.08,241.67 154,241.21 159.29,238.91 161.84,238.22  163.68,237.75 170.58,237.75 180.97,240.52 "
          />
          <polygon
            fill={getColorByCarencias('HATO VIEJO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Hato Viejo"
            onClick={handleNeighborhoodClick} 
            data-url-name="hato-viejo"
            className="st3"
            points="189.39,458.12 183.64,462.74 176.5,468.05 167.51,473.83 158.05,479.82 145.84,490.68 122.8,519.99  112.43,533.38 112.2,533.15 108.05,531.52 103.44,528.75 100.91,525.75 100.44,523.22 100.91,519.3 103.67,513.54 105.05,509.37  104.82,506.83 104.82,506.6 103.67,503.37 102.29,500.61 101.6,496.44 101.6,491.14 102.29,488.35 103.21,484.2 104.36,476.83  103.21,472.45 103.21,471.75 100.21,463.21 97.45,458.12 93.53,453.74 93.3,453.5 91.92,452.12 89.15,449.59 87.3,444.73  86.84,443.57 86.84,443.34 84.31,438.04 81.77,432.74 80.16,430.88 77.64,428.11 77.87,425.11 78.08,421.65 79.01,417.04  75.34,413.8 74.42,412.41 73.26,409.88 73.72,408.5 74.65,405.73 74.65,402.71 74.65,401.1 75.57,399.95 77.41,397.41 77.64,393.93  77.64,393.24 77.87,387.71 78.08,385.64 78.31,381.95 78.55,379.41 79.47,373.17 81.54,363.72 85.69,355.63 91.22,347.31  92.84,344.34 95.6,339.48 99.29,335.1 102.52,332.33 102.75,328.85 102.75,326.78 101.83,325.39 103.21,320.53 106.9,315  112.2,307.16 116.58,302.32 118.66,297.92 117.96,296.08 117.48,293.54 117.48,292.16 118.19,288.68 117.96,287.76 123.25,291.24  126.95,300.02 130.62,309.45 136.85,319.84 142.17,327.47 145.84,334.17 147.93,339.48 146.78,348.71 145.84,355.86 145.4,361.39  145.61,367.64 147.93,375.72 150.68,380.33 153.67,385.42 156.21,389.34 160.82,394.18 165.43,399.95 169.58,405.02 174.19,409.88  177.88,415.64 180.41,419.58 183.41,423.5 187.56,427.88 191,432.05 193.3,435.95 194.23,441.73 193.07,447.97 191,453.04 "
          />
          <polygon
            fill={getColorByCarencias('MORROS')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Morros"
            onClick={handleNeighborhoodClick} 
            data-url-name="morros"
            className="st3"
            points="777.8,224.21 777.8,226.76 778.24,234.64 778.96,252.29 783.11,274.55 790.29,294.05 797.71,307.75  806.28,320.05 813.95,330.94 820.65,341.38 827.37,349.74 834.32,359.96 837.33,367.84 842.66,374.81 850.77,380.14 860.95,386.41  872.77,398.46 876.24,408.22 882.27,419.82 882.03,420.75 882.27,420.98 882.27,421.21 883.66,422.83 884.35,423.53 885.05,424.69  885.51,425.85 886.21,427.47 886.44,427.95 886.9,428.88 887.83,430.5 888.74,432.12 889.66,433.51 890.13,434.44 890.59,434.67  891.28,435.6 891.98,436.99 892.67,438.15 893.14,439.77 893.83,441.16 894.53,443.73 895.46,446.04 896.61,448.36 897.31,449.52  898.7,451.37 899.86,454.85 894.06,454.62 886.67,452.3 879.25,450.22 878.33,449.98 871.38,449.06 865.35,450.91 860.72,452.3  855.16,451.37 850.54,449.75 847.76,448.82 843.59,447.43 837.33,446.26 830.61,446.95 825.51,446.74 818.79,449.29 813,449.75  810.93,449.98 807.92,450.45 806.28,450.45 800.26,451.84 794.02,452.3 787.51,453 783.59,456.93 782.88,457.86 779.19,462.05  775.71,463.91 775.48,464.14 771.31,467.85 769.92,469.24 766.21,473.19 761.58,476.67 755.55,478.06 747.68,479.22 740.74,481.54  731.01,484.32 724.99,484.32 716.64,483.39 709.23,483.39 703.69,484.78 692.56,482.71 692.33,482.48 691.64,482.25 677.04,475.05  667.77,471.8 664.99,470.65 656.9,468.54 649.48,466.92 643.21,464.83 637.65,463.44 633.49,463.21 630.93,463.21 627.7,463.21  624.46,462.75 617.27,461.13 608.47,459.25 602.21,458.79 597.35,459.02 590.88,460.2 585.78,461.13 580.45,461.59 572.34,461.36  566.08,461.59 558.44,462.75 551.04,464.6 549.19,465.76 545.94,467.61 543.16,472.73 531.81,485.71 527.64,492.21 524.16,498.93  523,501.25 521.61,503.59 519.08,506.6 517.23,508.45 517.44,511.23 517.69,513.11 517.92,514.27 517,514.96 514.45,517.05  513.29,518.21 511.65,519.13 510.26,519.83 508.19,520.52 506.55,521.45 505.41,522.15 503.79,521.91 502.86,521.22 500.76,520.06  498.9,518.67 496.82,517.05 495.66,512.88 494.52,508.92 492.88,505.21 491.97,502.66 490.12,500.32 488.26,498.24 485.71,496.62  483.17,495.92 479.46,494.3 475.75,491.98 472.74,489.67 469.26,487.56 465.55,486.42 462.08,485.71 456.75,486.17 454.2,486.88  450.72,488.51 443.79,488.72 445.41,483.87 444.49,476.21 441.01,470.41 438.93,465.99 438.46,461.82 438.46,453.92 438.46,442.78  439.39,434.9 438.93,421.21 438,406.83 437.3,394.99 433.6,383.61 433.13,374.58 435.22,368.77 434.76,363.9 432.44,358.34  432.44,346.04 433.6,334.43 434.76,323.52 430.35,316.09 429.19,307.28 433.13,297.07 438.46,286.62 441.48,273.39 439.39,260.18  441.01,260.88 447.48,263.43 453.27,266.9 459.76,272.7 464.86,278.49 466.71,282.22 467.18,287.55 469.03,291.97 473.9,296.14  482.47,297.07 482.68,296.84 493.36,294.29 501.7,291.04 510.95,285.69 517.69,280.6 522.31,274.78 523.47,273.39 528.8,263.89  532.5,254.37 538.3,243.93 542.7,234.19 545.02,230.23 548.95,223.75 554.52,218.65 559.59,214.46 560.06,213.99 564.69,211.68  572.8,211.68 581.38,210.75 595.96,212.84 607.54,213.99 619.59,216.79 628.4,219.34 630.93,219.58 632.1,219.81 636.02,220.27  637.2,219.58 642.05,217.49 644.39,216.56 648.31,212.37 649.23,211.68 654.58,210.52 661.76,210.75 669.39,212.37 681.67,217.03  692.8,222.12 699.52,221.66 706.45,220.04 706.91,219.81 708.77,219.58 717.57,216.79 728.23,214.23 742.35,215.87 746.05,216.33  750.92,217.26 753.24,217.26 760.19,217.26 769.23,220.27 774.79,222.82 "
          />
          <polygon
            fill={getColorByCarencias('POMARROSO')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Pomarroso"
            onClick={handleNeighborhoodClick} 
            data-url-name="pomarroso"
            className="st4"
            points="175.57,597.72 175.08,595.04 173.11,590.41 172.64,589.19 170.94,586.74 168.01,582.35 162.17,576.97  153.13,569.9 152.42,569.42 143.4,563.06 136.83,558.92 135.36,555.51 135.12,552.83 134.88,551.37 134.15,548.44 134.15,547.96  134.15,543.31 131.22,539.41 127.08,538.19 126.35,537.95 126.11,537.7 122.94,536.97 113.92,535.51 109.56,534.29 120.5,520.12  144.87,489.16 157.78,477.68 167.75,471.35 177.25,465.24 184.8,459.63 190.9,454.74 188.21,464.99 186.27,474.98 186.02,478.17  185.53,484.02 184.8,492.57 184.58,495.25 184.34,499.9 184.58,505.74 185.29,508.67 188.48,514.54 192.36,519.9 194.79,523.06  196.74,526.47 198.94,531.35 200.64,535.75 201.86,540.87 202.83,546.74 203.32,549.66 204.54,554.05 205.51,558.7 206.24,563.55  206.98,566.98 207.46,572.1 207.46,576.24 207.46,581.62 207.22,587.22 206.73,591.38 204.3,591.14 198.69,592.36 194.06,593.58  189.43,594.8 182.39,596.75 177.98,597.48 177.03,597.48 "
          />
          <polygon
            fill={getColorByCarencias('ZONA URBANA')}
            data-tooltip-id="my-tooltip" 
            data-tooltip-content="Zona Urbana"
            onClick={handleNeighborhoodClick} 
            data-url-name="zona-urbana"
            className="st1"
            points="584.91,213.1 576.85,212.61 577.34,215.56 577.34,216.54 577.82,219.72 576.6,219.96 574.89,220.21  574.16,220.21 573.91,220.45 574.4,221.43 575.63,224.36 576.36,226.09 576.6,226.58 576.6,227.05 576.85,227.54 577.34,228.76  578.31,228.53 578.56,228.53 579.05,228.29 578.8,227.8 580.51,227.29 581.25,227.29 581.49,227.29 582.96,227.05 583.2,228.05  583.69,227.8 584.18,227.8 584.67,227.54 585.89,227.54 586.87,227.54 587.36,227.54 587.6,227.54 587.84,228.53 587.84,229  587.84,230.49 588.33,230.22 590.29,229 592.24,228.53 593.46,228.05 593.46,228.76 594.42,228.53 594.91,228.05 595.89,228.76  595.4,227.29 596.62,227.29 596.62,227.05 596.86,227.05 598.09,226.8 599.06,226.58 599.8,226.58 599.55,225.6 600.53,225.34  600.77,225.34 601.26,225.34 601.75,225.09 603.46,224.85 604.68,224.85 606.4,224.6 606.64,224.36 606.88,224.36 607.62,222.89  607.37,221.92 607.37,221.67 607.62,219.96 607.62,219.72 607.13,219.72 605.91,219.47 605.91,218.98 605.66,215.56 600.04,214.83  591.75,213.83 "
          />
        </svg>
    </div>
  )
}

export default Jordan