import { useState, useEffect } from 'react';
import { LatLng, Region } from 'react-native-maps';
import navigator, {
  GeolocationError,
} from '@react-native-community/geolocation';
import isPointWithinRadius from 'geolib/es/isPointWithinRadius';

import { MapAPI } from './map.api';
import { errorUtilCall } from '@services/utils';

import { TIMEOUT_POSITION_CHECK, DEFAULT_COORDINATES } from './map.constants';
import { Storage } from '@services/createStorage';

interface IMapStateData {
  userCoordinates: LatLng;
  region: Region;
  itemCoordinates: LatLng;
  error?: string;

  isClose: boolean;
}

interface IMapState extends IMapStateData {
  moveToUser: () => void;
  moveToItem: () => void;
  onShacked: (distance: number) => void;
}

const DEFAULT_STATE: IMapStateData = {
  itemCoordinates: DEFAULT_COORDINATES,
  userCoordinates: DEFAULT_COORDINATES,
  region: {
    ...DEFAULT_COORDINATES,
    latitudeDelta: 0,
    longitudeDelta: 0,
  },
  error: '',

  isClose: false,
};

export const useMapState = (): IMapState => {
  const [state, setState] = useState<IMapStateData>(DEFAULT_STATE);
  const error = (e: Error | GeolocationError) =>
    setState((state) => ({ ...state, error: e.message }));
  const removeError = () =>
    setState((state) => ({ ...state, error: undefined }));
  const errorUtil = errorUtilCall(error, removeError);

  useEffect(() => {
    const id: number = navigator.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setState((state) => ({
          ...state,
          userCoordinates: { latitude, longitude },
        }));
      },
      (e) => error(e),
      { timeout: TIMEOUT_POSITION_CHECK }
    );
    return () => navigator.clearWatch(id);
  }, []);

  useEffect(() => {
    errorUtil(async () => {
      const itemCoordinates = await MapAPI.fetchItemCoordinates();
      setState((state) => ({ ...state, itemCoordinates }));
    });
  }, []);

  const moveToCoordinate = (coordinate: LatLng) =>
    setState((state) => {
      const { region } = state;
      const { latitude, longitude } = coordinate;
      return {
        ...state,
        region: { ...region, latitude, longitude },
      };
    });

  const moveToUser = () => moveToCoordinate(state.userCoordinates);
  const moveToItem = () => moveToCoordinate(state.itemCoordinates);
  const onShacked = (distance: number) =>
    errorUtil(async () => {
      const isClose = isPointWithinRadius(
        state.userCoordinates,
        state.itemCoordinates,
        distance
      );
      setState((state) => ({ ...state, isClose }));
      if (isClose) await MapAPI.addToItemFoundList();
    });

  return {
    ...state,
    moveToUser,
    moveToItem,
    onShacked,
  };
};
