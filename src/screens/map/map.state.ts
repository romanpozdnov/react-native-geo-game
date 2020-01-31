import React, { useState, useEffect } from 'react';

import { getItemCoordinates } from './map.api';

import { LatLng, Region } from 'react-native-maps';

import navigator from '@react-native-community/geolocation';
interface IMapState {
  userCoordinates: LatLng;
  region: Region;
  itemCoordinates: LatLng;
}

const DEFAULT_STATE: IMapState = {
  itemCoordinates: {
    latitude: 0,
    longitude: 0,
  },
  region: {
    latitude: 0,
    latitudeDelta: 0,
    longitude: 0,
    longitudeDelta: 0,
  },
  userCoordinates: {
    latitude: 0,
    longitude: 0,
  },
};

export const useMapState = () => {
  const [state, setState] = useState<IMapState>(DEFAULT_STATE);
  // * Watch user coordinates
  useEffect(() => {
    navigator.watchPosition(
      (position) => {
        const { coords } = position;
        const { latitude, longitude } = coords;
        setState({
          ...state,
          userCoordinates: {
            latitude,
            longitude,
          },
        });
      },
      (error) =>
        setState({ ...state, userCoordinates: DEFAULT_STATE.userCoordinates }),
      { timeout: 1000 }
    );
  }, [state.userCoordinates]);
  // * Watch item coordinates
  useEffect(() => {
    const getCoordinates = async () => {
      const userCoordinates = await getItemCoordinates();
      setState({ ...state, userCoordinates });
    };
  }, [state.itemCoordinates]);

  const setRegion = (region: Region) => setState({ ...state, region });

  return {
    state,
    setRegion,
  };
};
