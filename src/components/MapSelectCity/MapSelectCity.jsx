import React from 'react';
import Bucaramanga from './Bucaramanga/Bucaramanga';
import Floridablanca from './Floridablanca/Floridablanca';
import Albania from './Albania/Albania';
import './MapSelectCity.sass';
import Barrancabermeja from './Barrancabermeja/Barrancabermeja';
import Aratoca from './Aratoca/Aratoca';
import Barichara from './Barichara/Barichara';
import Betulia from './Betulia/Betulia';
import Bolivar from './Bolivar/Bolivar';
import Cabrera from './Cabrera/Cabrera';
import California from './California/California';
import Capitanejo from './Capitanejo/Capitanejo';
import Carcasi from './Carcasi/Carcasi';
import Cepita from './Cepita/Cepita';
import Cerrito from './Cerrito/Cerrito';
import Charala from './Charala/Charala';
import Charta from './Charta/Charta';
import Chima from './Chima/Chima';
import Chipata from './Chipata/Chipata';
import Cimitarra from './Cimitarra/Cimitarra';
import Concepcion from './Concepcion/Concepcion';
import Confines from './Confines/Confines';
import Contratacion from './Contratacion/Contratacion';
import Coromoro from './Coromoro/Coromoro';
import Curiti from './Curiti/Curiti';
import ElFlorian from './ElFlorian/ElFlorian';
import ElGuacamayo from './ElGuacamayo/ElGuacamayo';
import ElPlayon from './ElPlayon/ElPlayon';
import Encino from './Encino/Encino';
import Enciso from './Enciso/Enciso';
import Galan from './Galan/Galan';
import Gambita from './Gambita/Gambita';
import Giron from './Giron/Giron';
import Guaca from './Guaca/Guaca';
import Guadalupe from './Guadalupe/Guadalupe';
import Guapota from './Guapota/Guapota';
import Guavata from './Guavata/Guavata';
import Guepsa from './Guepsa/Guepsa';
import Hato from './Hato/Hato';
import JesusMaria from './JesusMaria/JesusMaria';
import Jordan from './Jordan/Jordan';
import CarmenDelChucuri from './CarmenDelChucuri/CarmenDelChucuri';
import Landazuri from './Landazuri/Landazuri';
import LaPaz from './LaPaz/LaPaz';
import LaBelleza from './LaBelleza/LaBelleza';
import Lebrija from './Lebrija/Lebrija';
import LosSantos from './LosSantos/LosSantos';
import Macaravita from './Macaravita/Macaravita';
import Malaga from './Malaga/Malaga';
import Matanza from './Matanza/Matanza';
import Mogotes from './Mogotes/Mogotes';
import Molagavita from './Molagavita/Molagavita';
import Ocamonte from './Ocamonte/Ocamonte';
import Oiba from './Oiba/Oiba';
import Onza from './Onzaga/Onzaga';
import Palmar from './Palmar/Palmar';
import PalmasDeSocorro from './PalmasDeSocorro/PalmasDeSocorro';
import Paramo from './Paramo/Paramo';
import Piedecuesta from './Piedecuesta/Piedecuesta';
import Pinchote from './Pinchote/Pinchote';
import PuenteNacional from './PuenteNacional/PuenteNacional';
import PuertoParra from './PuertoParra/PuertoParra';
import PuertoWilches from './PuertoWilches/PuertoWilches';
import Rionegro from './Rionegro/Rionegro';
import SabanaDeTorres from './SabanaDeTorres/SabanaDeTorres';
import SanAndres from './SanAndres/SanAndres';
import SanBenito from './SanBenito/SanBenito';
import Sangil from './SanGil/Sangil';
import SanJoaquin from './SanJoaquin/SanJoaquin';
import SanJoseDeMiranda from './SanJoseDeMiranda/SanJoseDeMiranda';
import SanMiguel from './SanMiguel/SanMiguel';
import SantaBarbara from './SantaBarbara/SantaBarbara';
import SantaHelenaDelOpon from './SantaHelenaDelOpon/SantaHelenaDelOpon';
import SanVicenteDeChucuri from './SanVicenteDeChucuri/SanVicenteDeChucuri';
import Simacota from './Simacota/Simacota';
import Socorro from './Socorro/Socorro';
import Suaita from './Suaita/Suaita';
import Sucre from './Sucre/Sucre';
import Surata from './Surata/Surata';
import Tona from './Tona/Tona';
import ValleDeSanJose from './ValleDeSanJose/ValleDeSanJose';
import Velez from './Velez/Velez';
import Vetas from './Vetas/Vetas';
import Villanueva from './Villanueva/Villanueva';
import Zapatoca from './Zapatoca/Zapatoca';
import Aguada from './Aguada/Aguada';
import ElPeñon from './ElPeñon/ElPeñon';
import Barbosa from './Barbosa/Barbosa';

const mapComponents = {
  bucaramanga: Bucaramanga,
  floridablanca: Floridablanca,
  albania: Albania,
  barrancabermeja: Barrancabermeja,
  barbosa: Barbosa,
  aratoca: Aratoca,
  barichara: Barichara,
  betulia: Betulia,
  bolivar: Bolivar,
  cabrera: Cabrera,
  california: California,
  capitanejo: Capitanejo,
  carcasi: Carcasi,
  cepita: Cepita,
  cerrito: Cerrito,
  charala: Charala,
  charta: Charta,
  chima: Chima,
  chipata: Chipata,
  cimitarra: Cimitarra,
  concepcion: Concepcion,
  confines: Confines,
  contratacion: Contratacion,
  coromoro: Coromoro,
  curiti: Curiti,
  'carmen-del-chucuri': CarmenDelChucuri,
  'el-florian': ElFlorian,
  'el-guacamayo': ElGuacamayo,
  'el-playon': ElPlayon,
  'el-peñon': ElPeñon,
  encino: Encino,
  enciso: Enciso,
  galan: Galan,
  gambita: Gambita,
  giron: Giron,
  guaca: Guaca,
  guadalupe: Guadalupe,
  guapota: Guapota,
  guavata: Guavata,
  guepsa: Guepsa,
  hato: Hato,
  'jesus-maria': JesusMaria,
  jordan: Jordan,
  aguada: Aguada,
  'la-belleza': LaBelleza,
  landazuri: Landazuri,
  'la-paz': LaPaz,
  lebrija: Lebrija,
  'los-santos': LosSantos,
  macaravita: Macaravita,
  malaga: Malaga,
  matanza: Matanza,
  mogotes: Mogotes,
  molagavita: Molagavita,
  ocamonte: Ocamonte,
  oiba: Oiba,
  onzaga: Onza,
  palmar: Palmar,
  'palmas-de-socorro': PalmasDeSocorro,
  paramo: Paramo,
  piedecuesta: Piedecuesta,
  pinchote: Pinchote,
  'puente-nacional': PuenteNacional,
  'puerto-parra': PuertoParra,
  'puerto-wilches': PuertoWilches,
  rionegro: Rionegro,
  'sabana-de-torres': SabanaDeTorres,
  'san-andres': SanAndres,
  'san-benito': SanBenito,
  'san-gil': Sangil,
  'san-joaquin': SanJoaquin,
  'san-jose-de-miranda': SanJoseDeMiranda,
  'san-miguel': SanMiguel,
  'santa-barbara': SantaBarbara,
  'santa-helena-del-opon': SantaHelenaDelOpon,
  'san-vicente-de-chucuri': SanVicenteDeChucuri,
  simacota: Simacota,
  socorro: Socorro,
  suaita: Suaita,
  sucre: Sucre,
  surata: Surata,
  tona: Tona,
  'valle-de-san-jose': ValleDeSanJose,
  velez: Velez,
  vetas: Vetas,
  villanueva: Villanueva,
  zapatoca: Zapatoca



  // Agrega más mapeos de municipios a componentes según sea necesario
};

const MapSelectCity = ({filterMap, departamento, municipio, getColorByCarencias }) => {

  const municipioLowerCase = municipio ? municipio.toLowerCase() : '';

  const SelectedMapComponent = mapComponents[municipioLowerCase] || null;

  //console.log(municipioLowerCase)

  return (
    <div className={`w-full h-full`} id='mapCitySelect'>
      {SelectedMapComponent ? (
        <SelectedMapComponent filterMap={filterMap} departamento={departamento} municipio={municipio} getColorByCarencias={getColorByCarencias}/>
      ) : (
        <p>Mapa no encontrado</p>
      )}
    </div>
  );
};

export default MapSelectCity;
