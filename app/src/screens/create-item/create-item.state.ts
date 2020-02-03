import { ROUTES } from '@constants/routes';
import { useEffect, useState } from 'react';
import { Region, LatLng } from 'react-native-maps';
import navigator from '@react-native-community/geolocation';

import { fetchUserId, createItem } from './create-item.api';

interface ICreateItemState {
  region: Region;
  idUser: string;
  name: string;
  itemCoordinates: LatLng;
  userCoordinates: LatLng;
  isValidName: boolean;
}

const DEFAULT_COORDINATES: LatLng = {
  latitude: 0,
  longitude: 0,
};

const initialState: ICreateItemState = {
  region: { ...DEFAULT_COORDINATES, latitudeDelta: 0, longitudeDelta: 0 },
  idUser: '',
  itemCoordinates: DEFAULT_COORDINATES,
  userCoordinates: DEFAULT_COORDINATES,
  name: '',
  isValidName: false,
};

const checkIsOnlyString = (value: string): boolean => {
  const onlyWord: RegExp = /^(\w| ){6,30}$/;
  return onlyWord.test(value);
};

export const useCreteItem = () => {
  const [state, setState] = useState<ICreateItemState>(initialState);

  // * Set user and item coordinate and region
  useEffect(() => {
    navigator.getCurrentPosition(
      (position) => {
        const { coords } = position;
        const { latitude, longitude } = coords;

        setState((currentState) => ({
          ...currentState,
          userCoordinates: {
            latitude,
            longitude,
          },
          itemCoordinates: {
            latitude,
            longitude,
          },
          region: {
            latitude,
            longitude,
            latitudeDelta: 1,
            longitudeDelta: 0.5,
          },
        }));
      },
      (error) => {
        const { region, userCoordinates, itemCoordinates } = initialState;

        setState((currentState) => ({
          ...currentState,
          userCoordinates,
          itemCoordinates,
          region,
        }));
      }
    );
  }, []);

  // * get user id
  useEffect(() => {
    const fetchIdUser = async () => {
      try {
        const idUser: string = (await fetchUserId()) ?? '';
        setState((currentState) => ({
          ...currentState,
          idUser,
        }));
      } catch {
        setState((currentState) => ({
          ...currentState,
          idUser: initialState.idUser,
        }));
      }
    };

    fetchIdUser();
  });

  // * Set region
  const setRegion = (region: Region) =>
    setState((currentRegion) => ({
      ...currentRegion,
      region,
    }));

  // * move region coordinate to user coordinates
  const setUserRegion = () =>
    setState((currentState) => {
      const { userCoordinates, region } = currentState;
      const { latitude, longitude } = userCoordinates;
      const { latitudeDelta, longitudeDelta } = region;
      return {
        ...currentState,
        region: {
          latitude,
          longitude,
          longitudeDelta,
          latitudeDelta,
        },
      };
    });

  // * Check valid name and set them
  const setName = (newName: string) => {
    setState((currentState) => {
      const { name } = currentState;
      const isValidName: boolean = checkIsOnlyString(name);
      return {
        ...currentState,
        name: newName,
        isValidName,
      };
    });
  };

  const onSubmit = (navigation: any) => {
    const { isValidName, itemCoordinates, name, idUser } = state;
    if (isValidName) {
      const item: IItemField = {
        coordinates: itemCoordinates,
        name,
        idUser,
        isFound: false,
      };
      createItem(item);
      navigation.navigate(ROUTES.ItemList);
    }
  };

  return {
    ...state,
    setName,
    setUserRegion,
    setRegion,
    onSubmit,
  };
};
