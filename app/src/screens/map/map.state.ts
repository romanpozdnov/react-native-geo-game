import { useState, useEffect } from 'react';
import { LatLng, Region } from 'react-native-maps';
import navigator from '@react-native-community/geolocation';
import isPointWithinRadius from 'geolib/es/isPointWithinRadius';

import { MapAPI } from './map.api';
import { errorUtilCall } from '@services/utils';

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

const DEFAULT_COORDINATES: LatLng = {
  latitude: 0,
  longitude: 0,
};

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
  const error = (e: Error) =>
    setState((state) => ({ ...state, error: e.message }));
  const removeError = () =>
    setState((state) => ({ ...state, error: undefined }));
  const errorUtil = errorUtilCall(error, removeError);

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
      (e) => setState((state) => ({ ...state, error: e.message })),
      { timeout: 1000 }
    );
    return () => navigator.clearWatch(id);
  }, []);

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

  const moveToUser = () => moveToCoordinate(state.userCoordinates);
  const moveToItem = () => moveToCoordinate(state.itemCoordinates);
  const onShacked = (distance: number) =>
    errorUtil(async () => {
      const isClose = isPointWithinRadius(
        state.userCoordinates,
        state.itemCoordinates,
        distance
      );
      setState((state) => ({
        ...state,
        isClose,
      }));
      if (state.isClose) await MapAPI.addToItemFoundList();
    });

  return {
    ...state,
    moveToUser,
    moveToItem,
    onShacked,
  };
};
