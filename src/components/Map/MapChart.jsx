import React, { memo, useRef, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import useOutsideClick from '../../helpers/useOutsideClick';
import {
  getCovidStatistics,
  getFlightMinPrice,
  getTravelAdvisories,
} from '../../helpers/data';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const MapChart = ({ setModalContent }) => {
  const ref = useRef();
  const ref2 = useRef();

  useEffect(() => (ref.current = document.getElementById('geo')), []);
  useEffect(() => (ref2.current = document.getElementById('mySidenav')), []);

  const getData = async ({ NAME, ISO_A2, POP_EST }) => {
    const covid = await getCovidStatistics(NAME);
    const minFlightPrice = await getFlightMinPrice(ISO_A2);
    const advisory = await getTravelAdvisories(ISO_A2);

    setModalContent({
      country: NAME,
      population: POP_EST,
      covid,
      minFlightPrice,
      advisory,
    });
    openModal();
  };

  const openModal = () => {
    document.getElementById('mySidenav').style.width = '350px';
    document.getElementById('main').style.marginRight = '350px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  };

  useOutsideClick(ref, ref2, () => {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginRight = '0';
    document.body.style.backgroundColor = 'white';
  });

  return (
    <>
      <ComposableMap
        data-tip=''
        projectionConfig={{ scale: 50 }}
        width='400'
        height='200'
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl} id='geo'>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    getData(geo.properties);
                  }}
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      outline: 'none',
                    },
                    hover: {
                      fill: 'rgb(0, 173, 152)',
                      outline: 'none',
                    },
                    pressed: {
                      fill: 'rgb(0, 173, 152)',
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
