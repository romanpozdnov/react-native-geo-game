import { useState, useEffect } from 'react';
import { LatLng, Region } from 'react-native-maps';
import navigator from '@react-native-community/geolocation';

import { MapAPI } from './map.api';

interface IMapState {
  userCoordinates: LatLng;
  region: Region;
  itemCoordinates: LatLng;

  isError: boolean;
}

const DEFAULT_COORDINATES: LatLng = {
  latitude: 0,
  longitude: 0,
};

const DEFAULT_STATE: IMapState = {
  itemCoordinates: DEFAULT_COORDINATES,
  userCoordinates: DEFAULT_COORDINATES,
  region: {
    ...DEFAULT_COORDINATES,
    latitudeDelta: 0,
    longitudeDelta: 0,
  },
  isError: false,
};

export const useMapState = () => {
  const [state, setState] = useState<IMapState>(DEFAULT_STATE);
  const error = () => setState((state) => ({ ...state, isError: true }));
  // * Watch user coordinates
  useEffect(() => {
    // * Start watch user coordinates
    const id: number = navigator.watchPosition(
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
      () => error(),
      { timeout: 1000 }
    );
    // * Stop watch
    return () => navigator.clearWatch(id);
  }, []);

  // * Get item coordinates
  useEffect(() => {
    const getCoordinates = async () => {
      try {
        const itemCoordinates = await MapAPI.fetchItemCoordinates();
        setState({ ...state, itemCoordinates });
      } catch {
        error();
      }
    };
    getCoordinates();
  }, []);

  const moveToCoordinate = (coordinate: LatLng) =>
    setState((currentState) => {
      const { region } = currentState;
      const { latitude, longitude } = coordinate;
      return {
        ...currentState,
        region: {
          ...region,
          latitude,
          longitude,
        },
      };
    });

  const moveToUser = () => moveToCoordinate(state.userCoordinates);
  const moveToItem = () => moveToCoordinate(state.itemCoordinates);

  return {
    ...state,
    moveToUser,
    moveToItem,
  };
};
