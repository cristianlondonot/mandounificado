import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import '../../../App.sass'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Guapota = (departamento, municipio) => {
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
        viewBox="0 0 1044.64 1033.89"
        style={{
          strokeWidth: '2px',
          stroke: '#fff',
          enableBackground: "new 0 0 1044.64 1033.89",
        }}
        xmlSpace="preserve"
      >
        <polygon
          fill={getColorByCarencias('AGUA FRIA')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Agua Fria"
          onClick={handleNeighborhoodClick} 
          data-url-name="agua-fria"
          className="st0"
          points="1018.01,381.51 1018.32,384.96 1017.38,390 1016.44,394.7 1016.44,397.83 1015.5,401.28  1012.68,405.36 1010.49,408.18 1007.67,412.9 1005.47,417.6 1003.28,422.31 1001.71,427.01 1000.77,433.93 1000.46,438  998.58,444.27 998.58,449 997.95,454.64 998.89,462.81 998.89,465.95 998.89,466.23 999.21,469.37 1000.46,472.84 1000.77,475.35  1000.77,477.86 1000.77,480.68 1000.46,483.81 999.83,488.54 998.58,491.67 997.01,495.75 996.07,502.33 995.13,506.43  994.82,507.68 992.94,511.44 990.74,517.4 988.55,521.16 987.61,522.75 986.36,526.83 985.1,529.65 983.85,533.41 981.97,537.48  981.34,539.05 979.46,545.63 977.58,550.67 975.07,555.37 972.59,560.41 969.46,564.8 966.01,569.19 965.38,570.44 965.38,576.74  966.01,580.5 966.32,583.92 966.32,586.14 959.74,597.42 950.97,607.79 939.06,619.41 935.3,624.43 931.85,627.56 925.89,632.6  900.22,652.97 899.57,653.29 898.63,654.54 889.23,665.22 888.63,665.85 885.8,669.61 880.14,674 873.56,681.23 873.24,681.23  867.94,684.68 863.87,687.19 858.22,688.44 857.91,688.75 853.84,687.81 847.88,686.25 841.61,682.48 837.54,679.04 835.66,673.37  833.15,670.55 825.63,668.67 820.96,663.03 820.64,659.55 820.02,653.29 818.76,645.42 817.19,644.51 814.06,645.74 812.49,647.64  809.05,652.35 806.85,655.48 801.84,660.18 773.63,689.38 769.27,683.11 768.96,682.8 767.7,682.8 765.51,682.8 764.57,682.8  763,682.8 760.49,682.17 759.24,680.6 753.91,679.66 752.03,678.41 750.78,674.62 749.84,669.92 746.08,668.04 743.57,667.73  737.93,673.68 736.36,679.04 731.97,681.86 728.84,680.92 725.39,678.72 721.34,674.94 716.64,672.43 708.47,671.49 705.67,670.55  705.02,665.85 704.42,656.42 700.63,652.97 696.25,647.64 695.31,643.88 694.68,639.16 690.63,630.38 685.3,624.74 679.04,616.56  674.33,609.36 666.81,599.3 660.54,592.72 653.96,585.8 651.77,580.78 648.32,572.64 642.68,565.43 635.79,556.94 628.89,551.3  622.96,545.63 621.39,541.56 619.2,530.87 616.38,523.98 611.05,515.2 602.28,507.06 601.34,506.43 608.23,507.68 619.83,505.17  631.08,503.61 637.04,503.92 643.31,504.23 646.44,505.17 649.89,508 653.96,511.44 661.8,514.89 666.19,517.74 670.89,521.5  673.39,523.98 678.38,526.83 685.3,526.17 690,520.22 693.45,513.01 695.02,502.01 695.31,497.63 696.9,490.11 700.35,484.12  706.9,479.42 714.42,477.23 726.96,473.47 730.72,468.11 736.05,463.13 737.62,462.81 743.26,460.93 751.09,459.03 760.49,455.89  764.26,454.01 767.39,452.13 773.63,449.31 779.27,447.12 784.29,445.86 789.3,442.08 793.38,437.69 795.88,434.87 789.62,430.77  780.84,431.11 773.32,432.99 764.26,424.19 758.93,418.86 751.09,413.84 743.88,406.95 737.3,396.89 735.42,386.84 734.8,375.24  735.74,366.44 735.42,361.74 735.11,352.02 731.03,346.98 731.66,339.15 731.03,332.57 728.84,325.96 730.72,320 728.84,316.56  726.33,309.95 726.02,304.93 731.03,302.74 736.68,295.51 739.5,289.26 745.45,281.09 749.21,275.76 749.21,275.45 750.47,273.25  752.66,270.09 755.17,267.59 757.99,264.77 758.3,264.77 758.3,264.45 761.12,263.2 761.75,262.89 763,263.51 763.32,263.83  766.76,266.33 767.7,266.65 768.64,267.59 771.78,269.15 773.63,269.78 776.14,270.41 777.71,271.03 778.33,271.35 780.21,272.6  781.78,274.82 783.35,277.02 784.6,277.64 786.48,278.58 788.99,279.84 789.93,280.78 790.87,281.09 791.81,284.22 793.38,286.73  793.69,287.07 796.2,289.89 799.02,292.69 801.21,293.94 802.15,294.28 804.03,296.13 804.97,298.33 808.11,301.8 810.93,304.93  814.69,307.76 819.08,309.64 822.84,310.58 823.75,310.89 827.82,311.2 831.59,311.83 833.47,312.14 834.41,313.08 835.97,314.65  839.11,317.81 841.93,320.32 846.94,324.71 853.21,328.47 858.54,331.31 862.3,333.19 862.93,333.19 865.12,333.19 868.57,333.82  872.01,333.82 875.78,334.45 880.14,335.39 884.55,337.27 887.37,339.46 888.91,341.66 889.57,344.16 889.85,346.04 890.51,347.32  892.7,348.26 895.21,349.49 896.46,350.77 896.75,352.02 896.75,353.59 897.06,356.1 898,358.92 898.34,359.55 898.94,359.86  901.16,361.43 903.98,362.05 907.12,361.43 909.31,360.17 911.19,359.23 911.82,359.23 914.01,359.23 915.89,360.17 917.15,362.37  919.97,365.19 922.79,368.32 925.58,370.51 927.46,371.14 929.34,371.77 930.91,373.02 931.85,375.87 935.61,377.44 936.24,377.75  940.31,378.38 941.88,378.69 946.27,379.63 949.71,379 951.91,378.06 953.16,377.44 953.79,377.44 955.67,377.12 958.8,377.75  961.31,379 962.25,380.26 962.56,380.57 964.13,382.45 964.44,383.7 964.44,384.64 965.7,385.9 967.26,385.27 968.52,384.96  971.97,383.7 975.7,382.45 979.15,381.51 981.34,380.88 983.53,380.88 985.42,380.88 987.3,381.82 987.92,381.82 989.49,382.76  991.06,383.08 992.94,382.14 994.19,380.57 996.7,378.69 999.52,376.81 1000.77,375.87 1002.34,375.87 1003.91,376.5  1005.47,376.81 1007.04,376.18 1009.55,376.81 1012.37,376.81 1014.25,377.12 1016.76,379.94 "
        />
        <polygon
          fill={getColorByCarencias('LAS FLORES')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Las Flores"
          onClick={handleNeighborhoodClick} 
          data-url-name="las-flores"
          className="st1"
          points="622.81,136.29 624.96,136.57 628.33,136.29 631.36,136.29 636.26,135.04 640.86,132.92 643.92,130.47  646.67,128 649.43,125.55 652.21,123.4 655.56,121.87 658.31,120.95 660.48,120.65 662.62,120.95 668.14,121.56 672.7,123.4  674.87,124.35 677.3,125.55 682.5,129.22 686.49,132.59 690.77,136.57 694.14,139.05 695.06,139.66 700.88,143.94 707.92,148.84  712.82,152.55 716.5,154.99 717.72,156.22 719.25,157.44 720.17,158.36 721.7,159.59 723.23,161.73 725.99,165.13 727.5,168.19  729.03,171.86 729.33,172.48 730.56,176.76 732.09,181.05 733.01,184.42 733.31,185.34 734.84,189.63 736.07,193.63 736.07,194.24  738.21,199.14 739.44,202.21 740.97,206.19 742.5,210.81 742.81,211.42 743.73,214.79 745.56,220.61 747.09,224.92 747.4,225.53  749.54,230.74 751.08,235.97 751.99,239.31 753.22,242.37 753.83,245.77 755.06,249.44 755.06,249.75 755.98,253.12 757.2,255.57  758.43,258.02 759.04,258.32 760.26,258.94 761.49,258.94 761.18,260.47 760.88,262.31 761.18,263.86 761.18,265.39 762.41,266.62  763.33,267.23 763.94,267.84 763.33,268.15 760.57,269.37 760.57,269.68 760.26,269.68 757.51,272.44 755.06,274.89 752.91,277.97  751.69,280.12 751.69,280.42 748.01,285.63 742.19,293.62 739.44,299.72 733.93,306.79 729.03,308.93 729.33,313.83 731.78,320.29  733.62,323.65 731.78,329.47 733.93,335.93 734.54,342.36 733.93,350.04 737.91,354.92 738.21,364.44 738.52,369.03 737.6,377.63  738.21,388.96 740.05,398.78 746.48,408.61 753.53,415.32 761.18,420.25 766.39,425.45 775.24,434.05 782.59,432.22 791.17,431.88  797.29,435.89 794.84,438.65 790.86,442.93 785.96,446.63 781.06,447.86 775.55,450 769.45,452.76 766.39,454.6 762.71,456.43  753.53,459.5 745.87,461.33 740.36,463.17 738.83,463.5 733.62,468.38 729.95,473.61 717.72,477.28 710.37,479.43 703.94,484.02  700.57,489.86 699.04,497.21 698.73,501.5 697.2,512.25 693.83,519.31 689.24,525.13 682.5,525.72 677.6,522.99 675.18,520.51  670.56,516.84 666.3,514.08 658.64,510.71 654.66,507.35 651.29,504.59 648.23,503.67 642.08,503.36 636.26,503.06 625.26,504.59  613.93,507.04 607.2,505.81 603.83,503.36 602.91,502.75 598.01,502.11 588.52,500.28 580.55,496.3 574.15,492.01 568.94,487.39  564.35,483.41 560.37,477.9 558.22,472.66 557,468.99 555.16,460.44 552.4,453.98 549.34,446.94 547.5,442.63 545.97,434.36  544.44,428.52 540.77,418.1 536.17,409.2 535.56,402.46 535.56,399.09 535.87,392.05 536.79,383.14 535.87,376.71 534.95,368.72  532.81,358.62 531.58,349.74 528.85,340.52 525.79,330.7 522.73,322.43 520.89,314.44 518.44,308.01 515.99,299.41 512.62,291.47  510.78,286.55 505.88,277.67 501.9,271.52 497,266.92 488.12,261.69 481.1,258.02 474.98,255.26 468.55,252.81 464.54,254.96  460.25,259.24 455.05,265.7 448.31,271.21 442.8,276.42 439.15,279.81 437.59,286.24 435.78,289.31 434.22,289.31 432.41,288.08  427.82,283.79 426.59,282.57 424.45,280.42 422.92,278.89 412.2,277.03 407.3,275.81 401.48,270.29 398.73,266.62 395.97,261.39  392.6,255.57 391.38,254.65 389.84,252.81 388.01,250.67 385.56,247.61 383.74,245.46 382.52,244.21 380.38,240.87 379.15,239.03  379.15,237.81 378.85,237.47 378.23,235.33 377.62,234.11 377.31,233.8 376.09,232.57 375.78,232.27 374.86,231.04 373.64,229.21  372.41,226.14 371.19,223.39 368.74,218.46 368.13,216.01 368.13,215.71 366.6,211.73 370.27,211.11 373.64,209.89 377.31,208.05  379.46,206.19 381.6,204.35 382.52,202.51 384.36,200.06 384.64,199.45 387.7,195.47 390.46,191.46 392.29,189.04 394.13,186.26  397.5,182.3 397.81,181.97 399.03,180.77 403.32,175.23 409.14,166.66 415.57,158.67 420.77,151.32 422,149.76 426.29,143.64  429.96,139.35 434.86,133.84 442.21,127.71 446.47,123.71 449.56,121.26 453.52,116.36 456.3,111.46 457.8,107.15 458.42,103.78  459.05,99.8 459.05,99.18 459.05,95.51 459.67,92.11 460.25,88.44 461.5,85.99 462.09,84.76 464.26,81.09 467.63,76.8 472.2,72.18  477.4,68.23 482.3,64.83 487.51,61.47 494.25,58.4 501.29,56.26 505.88,55.03 514.15,52.89 516.91,51.33 518.13,51.03 519.36,53.2  520.28,55.34 521.5,56.26 522.42,57.79 522.73,58.4 523.34,59.32 524.56,61.47 525.79,63.61 527.32,65.75 529.16,68.53  531.58,72.82 532.81,74.66 534.03,76.8 534.95,78.61 536.48,80.78 538.62,83.23 541.38,86.3 544.75,89.36 548.73,93.03  553.94,97.65 558.22,100.71 561.29,103.47 565.27,106.84 565.27,107.15 571.7,112.38 578.13,116.36 583,119.42 589.13,121.56  594.64,123.12 597.7,123.71 599.23,124.04 601.99,124.63 605.97,124.63 607.81,124.93 609.65,125.85 610.87,126.18 612.4,128  614.24,130.14 615.77,132 616.69,133.2 620.06,135.37 "
        />
        <polygon
          fill={getColorByCarencias('MORARIO')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Morario"
          onClick={handleNeighborhoodClick} 
          data-url-name="morario"
          className="st2"
          points="607.25,507.5 608.17,508.11 616.8,516.12 622.04,524.77 624.81,531.55 626.97,542.03 628.51,546.03  634.34,551.61 641.12,557.15 647.89,565.5 653.44,572.58 656.83,580.62 658.99,585.52 665.46,592.33 671.62,598.8 679.01,608.68  683.61,615.77 689.8,623.8 695.03,629.35 699.04,637.98 699.63,642.62 700.55,646.32 704.87,651.56 708.56,654.95 709.21,664.22  709.82,668.84 712.57,669.76 720.61,670.69 725.23,673.15 729.21,676.88 732.6,679.03 735.68,679.96 739.99,677.18 741.53,671.92  747.08,666.07 749.54,666.37 753.24,668.22 754.16,672.84 755.4,676.57 757.25,677.8 762.48,678.72 763.72,680.26 766.18,680.88  767.72,680.88 768.65,680.88 770.8,680.88 772.03,680.88 772.34,681.19 776.63,687.35 775.73,688.3 773.57,691.07 767.41,698.47  760.63,708.02 753.24,718.21 744.61,725.92 743.69,725.3 740.61,725.92 737.83,729 735.68,736.42 731.98,743.81 730.13,747.2  728.9,749.36 723.05,759.55 710.44,766.02 701.2,771.26 699.63,774.67 696.55,780.22 695.03,783.3 694.73,783.92 694.42,784.22  691.93,785.46 687.64,785.15 682.09,783.3 668.54,775.91 659.91,772.49 659.6,772.49 659.6,772.18 658.99,769.72 657.45,768.79  656.52,768.18 655.9,767.25 650.67,760.47 644.2,754.62 642.66,754 641.42,754.9 639.27,756.75 636.19,758.01 630.95,758.01  626.66,758.01 622.96,756.16 622.96,752.75 624.2,748.77 624.81,744.76 618.96,741.35 613.1,740.11 600.16,737.65 588.46,733.03  571.54,727.15 569.38,725.61 564.14,722.53 563.52,723.76 563.52,724.99 563.83,729 564.45,748.77 566.3,754 568.45,760.17  568.15,769.1 565.07,777.14 566.3,779.6 566.61,782.38 566.61,784.22 566.3,789.18 565.37,792.88 567.22,802.76 564.76,808.31  564.76,808.9 565.68,811.7 565.37,812.9 563.83,814.16 561.68,814.44 560.44,816.01 558.9,821.56 556.44,822.17 554.59,829.28  551.82,834.21 551.82,836.99 548.12,842.53 547.5,845.64 547.2,848.72 541.34,854.27 539.49,857.99 539.8,864.74 540.72,872.78  544.73,882.02 553.36,897.14 560.14,908.26 561.68,910.42 562.29,911.96 561.98,913.19 559.21,914.76 557.05,915.66 553.67,916.58  546.89,916.89 528.12,914.76 526.89,914.76 511.17,914.76 505.32,916.58 500.67,919.35 497.62,920.89 486.5,922.46 480.67,922.15  473.58,923.67 466.19,928.62 463.42,928.93 455.1,927.06 445.85,928.31 445.24,928.93 441.85,931.7 436.61,934.48 431.71,935.09  422.77,935.71 419.38,936.94 416.92,940.02 415.07,945.29 412.6,950.83 408.29,952.68 403.05,953.6 398.12,955.76 397.2,957.94  396.28,962.26 396.89,966.88 397.82,982.62 397.82,985.39 397.2,986.32 395.97,985.39 393.81,982.31 392.89,981.08 389.81,979.51  387.34,979.51 385.8,979.2 383.95,978.61 379.97,973.99 377.81,967.5 376.27,965.65 375.04,965.34 373.81,965.03 369.8,964.41  367.96,963.8 364.57,962.26 361.49,959.79 359.94,957.02 355.94,953.91 353.17,952.68 350.7,951.76 348.54,952.37 345.16,953.3  342.69,954.22 338.69,954.84 330.37,954.84 325.15,953.6 312.8,948.68 295.55,940.33 295.27,940.02 291.85,936.94 290.93,936.02  284.18,932.32 276.78,932.32 267.85,935.09 262.61,935.09 262.3,935.09 259.84,933.24 259.22,932.63 258.91,932.32 258.3,931.7  257.68,931.09 257.37,930.47 257.06,930.47 256.76,930.16 255.83,927.67 253.67,925.85 250.59,923.67 249.36,923.08 241.97,918.46  234.6,914.45 228.44,910.73 222.58,908.26 221.35,907.65 218.27,905.49 213.65,899.94 210.87,895.3 208.72,891.91 207.48,886.36  207.18,883.87 207.48,880.17 207.48,875.55 207.48,871.52 206.56,867.21 204.71,864.74 201.63,862 199.17,859.5 197.62,857.04  196.39,854.27 194.85,851.19 192.08,845.95 190.85,843.15 188.69,839.14 187.77,835.45 187.15,829.59 186.56,821.25 185.33,816.32  185.33,815.7 184.4,813.55 182.55,812.6 180.4,812.6 177.32,812.6 173.62,812.9 168.69,812.9 164.68,812.6 162.83,812.01  160.99,811.7 158.83,808.9 155.44,805.51 153.28,803.99 150.82,803.66 147.74,803.35 143.42,800.89 139.11,798.42 137.6,797.5  133.56,795.03 129.28,794.11 125.86,793.19 121.86,792.26 118.8,791.03 114.15,788.26 111.1,786.07 106.48,782.68 103.4,781.14  100.01,780.22 97.21,779.6 94.74,779.6 91.07,779.91 85.22,780.22 79.36,779.91 75.67,779.91 72.89,779.91 71.97,778.37  70.12,776.21 67.04,773.75 64.58,771.26 62.11,769.41 58.72,767.56 53.79,764.79 52.56,763.86 50.4,762.63 47.32,760.17  44.86,758.93 42.08,758.93 38.72,758.63 35.95,758.01 32.87,755.85 31.02,754.31 30.09,751.85 30.09,751.21 30.09,750.9  30.09,748.46 31.33,745.66 33.79,741.04 34.71,740.11 35.33,738.57 37.8,735.18 38.1,735.18 40.54,730.87 42.39,727.46  45.16,723.45 48.86,718.52 52.56,712.03 53.79,708.33 54.72,705.56 56.26,700.63 57.8,696.31 60.26,693.21 62.42,691.36  64.88,689.82 66.42,688.61 67.96,687.04 68.58,684.89 69.81,682.73 70.12,679.96 69.5,677.18 69.2,674.1 68.89,670.07 69.2,668.53  71.35,666.99 73.82,665.76 75.97,664.53 78.75,663.29 83.06,661.44 85.22,659.9 87.37,657.41 88.92,654.64 88.92,654.33  88.92,652.48 88.61,650.02 88.3,648.79 87.07,647.25 86.45,646.32 85.53,645.4 83.99,643.22 81.21,637.98 79.98,633.07  78.44,629.04 78.13,624.73 78.13,619.49 79.67,615.77 83.99,609.91 86.14,606.83 86.76,606.53 87.99,605.91 88.92,605.29 92,605.29  98.77,605.29 105.55,604.98 113.23,604.98 121.27,605.91 121.27,606.22 122.19,606.22 133.56,606.22 143.12,604.98 151.74,603.44  159.14,603.44 168.69,602.49 176.08,602.49 181.94,601.57 186.56,599.72 192.7,596.64 198.55,593.25 205.33,589.25 215.19,584.62  217.96,583.37 220.73,581.83 225.05,579.67 229.98,576.28 233.98,572.89 234.6,571.35 236.11,568.27 235.83,565.8 236.42,563.65  237.96,560.23 239.19,556.84 241.35,551.91 243.2,546.37 244.43,542.64 245.97,537.72 246.59,535.25 246.59,530.91 246.59,528.47  245.66,525.06 245.05,522.93 244.74,522 244.74,518.28 244.74,517.97 245.66,513.04 245.97,507.8 245.66,504.11 245.66,499.77  245.36,498.23 244.74,495.15 244.12,488.03 243.2,480.64 243.2,480.02 242.89,477.56 241.97,474.48 241.35,473.55 240.43,471.7  238.58,468.6 235.83,462.15 234.6,458.43 233.67,455.04 230.59,448.26 228.74,443.31 226.89,438.99 225.35,436.84 224.74,435.91  223.51,433.45 221.97,430.96 220.12,426.03 218.27,421.71 217.34,417.37 217.04,412.75 217.34,410.31 218.27,408.16 219.19,406.59  220.42,405.05 221.04,404.13 223.51,402.28 225.97,400.74 229.67,397.96 232.13,394.27 232.75,393.34 237.04,388.7 240.73,383.46  244.12,377.91 245.97,373.88 247.2,370.49 247.2,370.18 247.51,367.1 246.9,365.25 246.59,363.71 246.28,362.48 245.66,360.02  245.36,358.48 244.74,355.7 244.43,351.06 244.43,347.36 244.74,344.89 246.28,342.43 248.13,340.89 251.52,339.66 253.06,339.35  253.98,339.04 257.06,338.42 259.53,337.19 262.3,335.65 265.07,333.47 269.39,330.39 272.78,327.61 274.93,324.22 275.55,320.53  275.55,317.11 275.55,314.96 274.93,312.49 274.32,309.72 273.7,306.64 273.39,303.25 273.08,300.14 272.78,299.52 273.08,296.14  274.01,291.21 275.86,287.82 278.32,284.43 281.4,280.42 286.64,276.39 291.26,271.77 291.55,271.46 297.12,265.61 301.74,259.42  306.33,254.49 309.44,251.1 312.8,247.07 313.11,246.45 315.3,243.68 316.53,241.52 317.45,240.32 318.07,239.08 319.58,235.7  319.92,235.05 319.92,234.75 321.15,231.66 322.07,229.82 323.28,225.81 325.77,222.11 328.85,220.24 330.98,219.62 332.22,219.62  334.06,219.31 337.45,219.01 341.15,218.39 345.46,217.16 348.85,216.23 351.01,214.69 351.32,214.39 353.47,213.77 354.71,213.46  358.1,212.54 363.95,211.92 365.18,211.61 366.72,215.62 366.72,215.93 367.34,218.39 369.8,223.35 371.04,226.12 372.27,229.2  373.5,231.05 374.43,232.28 374.73,232.59 375.97,233.82 376.27,234.13 376.89,235.39 377.51,237.54 377.81,237.83 377.81,239.08  379.05,240.91 381.2,244.3 382.44,245.53 384.26,247.69 386.72,250.79 388.57,252.95 390.11,254.8 391.35,255.72 394.73,261.58  397.51,266.84 400.28,270.54 406.13,276.08 411.06,277.32 421.85,279.19 423.39,280.73 425.55,282.89 426.78,284.12 431.4,288.43  433.22,289.67 434.76,289.67 436.61,286.58 438.15,280.11 441.85,276.7 447.39,271.46 454.17,265.92 459.41,259.42 463.72,255.11  467.73,252.95 474.2,255.41 480.36,258.19 487.45,261.88 496.36,267.15 501.31,271.77 505.32,277.96 510.22,286.89 512.07,291.85  515.46,299.86 517.93,308.49 520.42,314.96 522.26,322.99 525.32,331.31 528.43,341.2 531.17,350.46 532.41,359.37 534.56,369.57  535.49,377.6 536.41,384.07 535.49,393.03 535.18,400.12 535.18,403.51 535.8,410.31 540.42,419.25 544.11,429.72 545.65,435.6  547.2,443.92 549.04,448.26 552.12,455.35 554.9,461.82 556.75,470.45 557.98,474.14 560.14,479.41 564.14,484.95 568.76,488.96  574,493.6 580.44,497.92 588.46,501.92 598.01,503.77 602.94,504.41 603.86,505.03 "
        />
        <polygon
          fill={getColorByCarencias('ZONA URBANA')}
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="Zona Urbana"
          onClick={handleNeighborhoodClick} 
          data-url-name="zona-urbana"
          className="st3"
          points="604.56,604.19 605.17,606.03 603.95,606.36 604.25,608.79 608.55,614.92 609.46,615.84 609.77,616.17  608.85,618.31 608.24,619.85 608.24,620.15 607.93,621.07 607.01,620.77 606.4,620.46 605.17,620.15 604.56,620.15 603.03,620.15  602.41,620.15 600.27,620.77 599.66,621.38 599.35,621.69 598.43,624.14 598.43,624.44 597.82,625.06 597.51,625.06 597.2,625.36  596.28,625.36 595.06,625.98 594.14,626.28 593.22,626.9 591.99,627.82 591.07,629.04 590.77,629.35 598.74,632.44 603.64,634.58  603.33,634.89 603.03,636.12 602.41,637.34 602.11,637.65 601.8,638.57 601.5,638.88 601.19,639.8 601.19,640.1 600.88,640.1  600.58,640.1 600.27,640.1 600.27,639.8 599.96,639.8 599.66,639.8 599.35,639.49 599.35,639.8 599.04,639.8 599.04,640.41  599.04,640.71 598.74,640.71 598.43,641.94 598.43,642.25 599.04,642.55 599.66,642.55 599.66,642.86 599.96,642.86 600.27,642.86  600.27,643.17 599.04,645.64 599.04,645.95 598.12,647.48 597.82,647.79 597.82,648.1 597.51,648.4 597.51,648.71 595.98,647.18  595.06,646.87 593.53,650.86 595.67,651.47 596.28,651.77 596.28,652.39 595.67,653.61 595.67,653.92 595.37,654.84 595.06,656.07  595.67,656.37 599.35,657.6 599.35,657.91 600.27,658.21 600.58,658.21 601.19,658.21 601.8,658.52 602.11,658.52 602.11,658.82  602.72,659.16 603.33,659.46 604.25,659.74 606.4,660.69 607.93,661.3 608.85,661.89 609.16,661.89 609.77,660.97 611.3,655.15  611.61,655.15 611.92,655.15 612.53,655.45 612.84,655.76 613.14,656.07 613.45,656.07 614.06,656.37 614.37,656.37 615.9,657.29  616.21,656.07 616.51,655.15 616.82,653.61 616.82,653.31 616.82,653 617.13,652.69 617.74,653 618.35,653.92 619.27,654.23  620.5,654.84 620.81,655.15 621.42,655.15 621.73,655.45 622.03,655.15 622.03,654.84 622.34,654.23 622.65,653.31 622.95,652.69  623.26,651.47 623.56,651.47 623.56,651.16 623.56,650.86 624.18,650.24 624.79,650.55 625.1,650.86 626.02,651.16 626.32,651.47  626.94,651.77 627.24,651.77 627.24,651.16 628.44,651.77 628.75,652.08 629.67,652.08 630.9,652.69 632.73,653.31 633.04,653.31  633.35,653.61 633.96,653.92 635.19,654.23 635.49,654.23 635.8,653.92 636.11,653 636.41,652.39 636.41,652.08 636.11,652.08  636.41,651.47 636.72,650.55 637.03,649.63 637.33,649.32 637.33,649.02 637.03,649.02 636.72,648.71 637.03,647.79 637.33,647.48  637.64,646.56 637.95,645.95 638.25,645.03 638.56,644.09 638.86,644.09 638.86,643.78 639.17,643.47 639.17,643.17 639.17,642.86  639.17,642.55 638.86,642.25 638.86,641.94 638.86,641.63 638.86,641.33 638.56,640.71 638.86,640.41 639.17,639.49 639.17,639.18  640.4,637.04 640.7,636.42 640.7,636.12 641.01,635.81 641.01,635.5 641.62,634.28 642.85,634.28 642.54,629.96 642.24,626.9  642.54,626.28 642.54,625.98 642.54,625.06 642.85,619.85 642.85,619.23 642.54,619.23 641.62,619.23 640.4,619.23 639.78,619.23  639.17,619.23 638.56,619.23 636.41,618.93 635.19,618.62 633.35,618.01 633.04,618.01 630.59,616.78 629.06,615.84 627.83,614.92  627.24,614.3 626.94,614.02 626.32,613.08 625.71,612.49 624.79,611.88 624.18,611.54 623.26,610.93 622.65,610.65 621.42,610.01  620.81,610.01 620.19,609.73 620.19,609.4 619.89,609.4 619.58,608.17 619.27,607.59 618.97,606.97 618.66,606.36 618.66,604.83  618.97,604.83 618.97,604.49 619.27,604.49 619.58,604.49 620.81,604.19 622.65,603.6 623.56,600.82 623.87,600.51 624.48,599.9  624.48,599.59 625.4,599.28 626.02,598.67 626.32,598.67 627.83,599.9 629.36,601.43 631.2,603.6 633.65,606.36 634.27,606.97  634.88,607.25 635.19,607.59 635.49,607.59 635.8,607.59 636.11,607.25 636.41,607.25 636.72,606.97 635.8,605.41 631.82,601.12  631.51,600.82 629.36,597.75 628.14,595.91 626.94,594.99 625.4,594.07 623.56,592.85 624.48,590.7 624.48,590.39 624.18,590.09  622.95,589.48 622.65,589.17 622.03,590.39 621.42,591.62 621.42,591.31 619.58,590.7 618.97,590.7 615.6,589.48 614.98,589.17  614.68,590.09 614.98,592.23 614.98,594.99 614.98,595.61 614.06,596.83 612.84,598.67 612.53,598.98 612.22,599.59 611.92,599.9  611.3,599.59 610.38,599.9 609.16,600.51 609.16,600.82 608.55,600.82 608.24,601.12 607.93,601.12 607.63,599.9 607.32,598.36  607.01,597.44 607.01,595.3 607.01,593.46 606.71,592.23 605.48,589.17 604.25,586.69 603.33,585.77 602.11,584.85 600.88,583.93  599.96,583.93 599.35,583.93 598.43,583.93 596.59,584.24 596.28,584.55 595.37,585.77 594.14,588.56 594.14,590.09 594.14,591.93  595.06,593.77 595.67,594.38 605.79,597.44 606.4,599.59 605.48,599.9 603.64,600.51 "
        />
      </svg>
    </div>
  )
}

export default Guapota