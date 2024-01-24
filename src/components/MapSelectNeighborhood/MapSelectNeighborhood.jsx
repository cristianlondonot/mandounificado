/* // src/components/MapSelectNeighborhood/index.js
import React, { useEffect, useState } from 'react';

const MapSelectNeighborhood = ({ municipio, vereda, markerCoordinates }) => {
  const [SelectedMapComponent, setSelectedMapComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      const componentName = getComponentName(municipio, vereda);
      try {
        const module = await import(`./Barrancabermeja/AguasNegras.jsx`);
        setSelectedMapComponent(module.default);
        console.log(componentName)
      } catch (error) {
        console.error('Error al cargar el componente:', error);
        // Trata el error según tus necesidades
      }
    };

    loadComponent();
  }, [municipio, vereda]);

  return (
    <div className={`w-full ${!vereda ? 'off' : 'on'} ${markerCoordinates ? 'hidden' : ''}`} id='mapNeighborhoodSelect'>
      {SelectedMapComponent ? <SelectedMapComponent /> : null}
    </div>
  );
};

export default MapSelectNeighborhood;

function getComponentName(municipio, vereda) {
  return `${vereda.charAt(0).toUpperCase()}${vereda.slice(1)}`;
}
 */


import React from 'react';
import AguaBlanca from './Floridablanca/AguaBlanca/AguaBlanca';
import Vericute from './Floridablanca/Vericute/Vericute';
import Helechales from './Floridablanca/Helechales/Helechales';
import Alsacia from './Floridablanca/Alsacia/Alsacia';
import Casiano from './Floridablanca/Casiano/Casiano';
import Guayanas from './Floridablanca/Guayanas/Guayanas';
import RioFrio from './Floridablanca/RioFrio/RioFrio';
import Ruitoque from './Floridablanca/Ruitoque/Ruitoque';
import ZonaUrbana from './Floridablanca/ZonaUrbana/ZonaUrbana';
import './MapSelectNeighborhood.sass'
import AguasNegras from './Barrancabermeja/AguasNegras';
import CienagaDelOpon from './Barrancabermeja/CienagaDelOpon';
import SanRafaelDelChucuri from './Barrancabermeja/SanRafaelDelChucuri';
import LaColorada from './Barrancabermeja/LaColorada';
import LaUnion from './Barrancabermeja/LaUnion';
import IslasDelRioMagdalena from './Barrancabermeja/IslasDelRioMagdalena';
import Tapazon from './Barrancabermeja/Tapazon';
import Capote from './Barrancabermeja/Capote';
import SanLuis from './Barrancabermeja/SanLuis';
import CapoGalan from './Barrancabermeja/CapoGalan';
import CampoGala from './Barrancabermeja/CampoGala';
import SanSilvestre from './Barrancabermeja/SanSilvestre';
import LlanitoAlto from './Barrancabermeja/LlanitoAlto';
import Sogamoso from './Barrancabermeja/Sogamoso';
import LaArenosa from './Barrancabermeja/LaArenosa';
import RioSogamoso from './Barrancabermeja/RioSogamoso';
import Yacaranda from './Barrancabermeja/Yacaranda';
import Peroles from './Barrancabermeja/Peroles';
import MesetaDeSanRafael from './Barrancabermeja/MesetaDeSanRafael';
import LaFortuna from './Barrancabermeja/LaFortuna';
import ElZarzal from './Barrancabermeja/ElZarzal';
import Comuneros from './Barrancabermeja/Comuneros';
import CienagaBrava from './Barrancabermeja/CienagaBrava';
import LaForest from './Barrancabermeja/LaForest';
import TierraAdentro from './Barrancabermeja/TierraAdentro';
import Campo5 from './Barrancabermeja/Campo5';
import Campo16 from './Barrancabermeja/Campo16';
import Campo25 from './Barrancabermeja/Campo25';
import Campo23 from './Barrancabermeja/Campo23';
import Tenerife from './Barrancabermeja/Tenerife';
import campo32 from './Barrancabermeja/campo32';
import LaLegia from './Barrancabermeja/LaLegia';
import Campo6 from './Barrancabermeja/Campo6';
import Campo38 from './Barrancabermeja/Campo38';
import Campo45 from './Barrancabermeja/Campo45';
import VaraSanta from './Barrancabermeja/VaraSanta';
import CuatroBocas from './Barrancabermeja/CuatroBocas';
import SantoDomingo from './Barrancabermeja/SantoDomingo';
import LaRaiz from './Barrancabermeja/LaRaiz';
import LlanitoBajo from './Barrancabermeja/LlanitoBajo';
import Oponcito from './Barrancabermeja/Oponcito';
import Campo13 from './Barrancabermeja/Campo13';
import Campo14 from './Barrancabermeja/Campo14';
import Centro from './Barrancabermeja/Centro';
import PlantaNueva from './Barrancabermeja/PlantaNueva';
import Quemadero from './Barrancabermeja/Quemadero';
import ElCretaceo from './Barrancabermeja/ElCretaceo';
import Aguacate from './Albania/Aguacate';
import Altamira from './Albania/Altamira';
import Ayacucho from './Albania/Ayacucho';
import Canoas from './Albania/Canoas';
import Canutillo from './Albania/Canutillo';
import Carretero from './Albania/Carretero';
import Chebre from './Albania/Chebre';
import Corcondilla from './Albania/Corcondilla';
import ElHatillo from './Albania/ElHatillo';
import ElTablon from './Albania/ElTablon';
import Guacos from './Albania/Guacos';
import Guayabal from './Albania/Guayabal';
import Honda from './Albania/Honda';
import LaMesa from './Albania/LaMesa';
import Medios from './Albania/Medios';
import MesaGrande from './Albania/MesaGrande';
import Mochila from './Albania/Mochila';
import PanDeAzucar from './Albania/PanDeAzucar';
import Pantanos from './Albania/Pantanos';
import Playas from './Albania/Playas';
import Potreros from './Albania/Potreros';
import Poveda from './Albania/Poveda';
import PuebloViejo from './Albania/PuebloViejo';
import Sabaneta from './Albania/Sabaneta';
import Salitre from './Albania/Salitre';
import SanPablo from './Albania/SanPablo';
import SantaRita from './Albania/SantaRita';
import Utapa from './Albania/Utapa';
import Uvales from './Albania/Uvales';


const mapComponents = {
  'agua-blanca': AguaBlanca,
  'vericute': Vericute,
  'helechales': Helechales,
  'alsacia': Alsacia,
  'casiano': Casiano,
  'guayanas': Guayanas,
  'rio-frio': RioFrio,
  'ruitoque': Ruitoque,
  'zona-urbana': ZonaUrbana,
  'aguas-negras': AguasNegras,
  'cienaga-del-opon': CienagaDelOpon,
  'san-rafael-del-chucuri': SanRafaelDelChucuri,
  'la-colorada': LaColorada,
  'la-union': LaUnion,
  'islas-del-rio-magdalena': IslasDelRioMagdalena,
  'tapazon': Tapazon,
  'capote': Capote,
  'san-luis': SanLuis,
  'capo-galan': CapoGalan,
  'campo-gala': CampoGala,
  'san-silvestre': SanSilvestre,
  'llanito-alto': LlanitoAlto,
  'llanito-bajo': LlanitoBajo,
  'sogamoso': Sogamoso,
  'la-arenosa': LaArenosa,
  'rio-sogamoso': RioSogamoso,
  'yacaranda': Yacaranda,
  'peroles': Peroles,
  'meseta-de-san-rafael': MesetaDeSanRafael,
  'la-fortuna': LaFortuna,
  'el-zarzal': ElZarzal,
  'comuneros': Comuneros,
  'cienaga-brava': CienagaBrava,
  'la-forest': LaForest,
  'tierra-adentro': TierraAdentro,
  'campo-5': Campo5,
  'campo-13': Campo13,
  'campo-14': Campo14,
  'campo-16': Campo16,
  'campo-25': Campo25,
  'campo-23': Campo23,
  'campo32': campo32,
  'tenerife': Tenerife,
  'la-legia': LaLegia,
  'campo-6': Campo6,
  'campo-38': Campo38,
  'campo-45': Campo45,
  'vara-santa': VaraSanta,
  'cuatro-bocas': CuatroBocas,
  'santo-domingo': SantoDomingo,
  'la-raiz': LaRaiz,
  'oponcito': Oponcito,
  'el-centro': Centro,
  'planta-nueva': PlantaNueva,
  'quemadero': Quemadero,
  'el-cretaceo': ElCretaceo,
  //Albania
  'aguacate': Aguacate,
  'altamira': Altamira,
  'ayacucho': Ayacucho,
  'canoas': Canoas,
  'canutillo': Canutillo,
  'carretero': Carretero,
  'chebre': Chebre,
  'corcondilla': Corcondilla,
  'el-hatillo': ElHatillo,
  'el-tablon': ElTablon,
  'guacos': Guacos,
  'guayabal': Guayabal,
  'honda': Honda,
  'la-mesa': LaMesa,
  'medios': Medios,
  'mesa-grande': MesaGrande,
  'mochila': Mochila,
  'pan-de-azucar': PanDeAzucar,
  'pantanos': Pantanos,
  'playas': Playas,
  'potreros': Potreros,
  'poveda': Poveda,
  'pueblo-viejo': PuebloViejo,
  'sabaneta': Sabaneta,
  'salitre': Salitre,
  'san-pablo': SanPablo,
  'santa-rita': SantaRita,
  'utapa': Utapa,
  'uvales': Uvales,

  
  // Agrega más mapeos de municipios a componentes según sea necesario
};

const MapSelectNeighborhood = ({ vereda, markerCoordinates }) => {


  const SelectedMapComponent = mapComponents[vereda] || null;

  return (
    <div className={`w-full ${!vereda ? 'off' : 'on'} ${markerCoordinates ? 'hidden' : ''}`} id='mapNeighborhoodSelect'>
      {SelectedMapComponent ? <SelectedMapComponent /> : <p>Mapa no encontrado</p>}
    </div>
  );
};

export default MapSelectNeighborhood;
