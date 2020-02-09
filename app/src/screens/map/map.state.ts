import { useState, useEffect } from 'react';
import { LatLng, Region } from 'react-native-maps';
import navigator from '@react-native-community/geolocation';
import isPointWithinRadius from 'geolib/es/isPointWithinRadius';

import { MapAPI } from './map.api';
import { errorUtilCall } from '@services/utils';

interface IMapState {
  userCoordinates: LatLng;
  region: Region;
  itemCoordinates: LatLng;

  isClose: boolean;
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
  isClose: false,
};

export const useMapState = () => {
  const [state, setState] = useState<IMapState>(DEFAULT_STATE);
  const error = () => setState((state) => ({ ...state, isError: true }));
  const errorUtil = errorUtilCall(error);

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
    errorUtil(async () => {
      const itemCoordinates = await MapAPI.fetchItemCoordinates();
      setState({ ...state, itemCoordinates });
    });
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

  const checkIsClose = (distance: number) =>
    setState((state) => ({
      ...state,
      isClose: isPointWithinRadius(
        state.userCoordinates,
        state.itemCoordinates,
        distance
      ),
    }));

  const addToFoundList = () =>
    errorUtil(async () => {
      if (state.isClose) await MapAPI.addToItemFoundList();
    });

  const moveToUser = () => moveToCoordinate(state.userCoordinates);
  const moveToItem = () => moveToCoordinate(state.itemCoordinates);
  const onShacked = (distance: number) =>
    errorUtil(async () => {
      await checkIsClose(distance);
      await addToFoundList();
    });

  return {
    ...state,
    checkIsClose,
    moveToUser,
    moveToItem,
    addToFoundList,
    onShacked,
  };
};
