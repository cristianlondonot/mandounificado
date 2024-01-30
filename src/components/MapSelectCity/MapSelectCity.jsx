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
import Cerritos from './Cerritos/Cerritos';
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
import ElCarmenDelChucuri from './ElCarmenDelChucuri/ElCarmenDelChucuri';
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

const mapComponents = {
  bucaramanga: Bucaramanga,
  floridablanca: Floridablanca,
  albania: Albania,
  barrancabermeja: Barrancabermeja,
  aratoca: Aratoca,
  barichara: Barichara,
  betulia: Betulia,
  bolivar: Bolivar,
  cabrera: Cabrera,
  california: California,
  capitanejo: Capitanejo,
  carcasi: Carcasi,
  cepita: Cepita,
  cerritos: Cerritos,
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
  'el-carmen-del-chucuri': ElCarmenDelChucuri,
  'el-florian': ElFlorian,
  'el-guacamayo': ElGuacamayo,
  'el-playon': ElPlayon,
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
  jordan: Jordan


  // Agrega más mapeos de municipios a componentes según sea necesario
};

const MapSelectCity = ({departamento, municipio }) => {

  const municipioLowerCase = municipio ? municipio.toLowerCase() : '';

  const SelectedMapComponent = mapComponents[municipioLowerCase] || null;

  return (
    <div className={`w-full h-full`} id='mapCitySelect'>
      {SelectedMapComponent ? (
        <SelectedMapComponent departamento={departamento} municipio={municipio} />
      ) : (
        <p>Mapa no encontrado</p>
      )}
    </div>
  );
};

export default MapSelectCity;
