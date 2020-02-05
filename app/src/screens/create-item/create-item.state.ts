import { useEffect, useState } from 'react';
import { Region, LatLng } from 'react-native-maps';
import navigator from '@react-native-community/geolocation';

import { fetchAddressByCoordinates } from '@services/geocoder';
import { CreateItemAPI } from './create-item.api';

import { ROUTES } from '@constants/routes';

interface ICreateItemState {
  name: string;
  idUser: string;
  address: string;

  region: Region;
  itemCoordinates: LatLng;
  userCoordinates: LatLng;

  isValidName: boolean;
  isError: boolean;
}

const DEFAULT_COORDINATES: LatLng = {
  latitude: 0,
  longitude: 0,
};

const initialState: ICreateItemState = {
  region: { ...DEFAULT_COORDINATES, latitudeDelta: 0, longitudeDelta: 0 },
  itemCoordinates: DEFAULT_COORDINATES,
  userCoordinates: DEFAULT_COORDINATES,
  idUser: '',
  name: '',
  address: '',
  isValidName: false,
  isError: false,
};

const checkIsOnlyString = (value: string): boolean => {
  const onlyWord: RegExp = /^(\w| ){6,30}$/;
  return onlyWord.test(value);
};

export const useCreteItem = () => {
  const [state, setState] = useState<ICreateItemState>(initialState);
  const error = () => setState((state) => ({ ...state, isError: true }));
  // ! Set user coordinates and region
  useEffect(() => {
    navigator.getCurrentPosition(
      (position) => {
        const { coords } = position;
        const { latitude, longitude } = coords;
        const coordinates: LatLng = {
          latitude,
          longitude,
        };

        setState((currentState) => ({
          ...currentState,
          userCoordinates: coordinates,
          itemCoordinates: coordinates,
          region: { ...coordinates, latitudeDelta: 1, longitudeDelta: 0.5 },
          isError: false,
        }));
      },
      () => error()
    );
  }, []);

  // * get user id
  useEffect(() => {
    const fetchIdUser = async () => {
      try {
        const idUser: string = (await CreateItemAPI.fetchUserId()) ?? '';
        setState((currentState) => ({
          ...currentState,
          idUser,
          isError: false,
        }));
      } catch {
        error();
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

  // * set region coordinate to user coordinates
  const setUserRegion = () =>
    setState((state) => {
      const { userCoordinates, region } = state;
      const { latitude, longitude } = userCoordinates;
      const { latitudeDelta, longitudeDelta } = region;
      return {
        ...state,
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
    setState((state) => {
      const { name } = state;
      const isValidName: boolean = checkIsOnlyString(name);
      return {
        ...state,
        name: newName,
        isValidName,
      };
    });
  };

  // * Set address
  const setAddress = async () => {
    try {
      const { itemCoordinates } = state;
      const { address } = initialState;
      const newAddress: string = await fetchAddressByCoordinates(
        itemCoordinates,
        address
      );
      setState((currentState) => {
        return {
          ...currentState,
          address: newAddress,
        };
      });
    } catch {
      error();
    }
  };

  const onSubmit = async (navigation: any) => {
    try {
      const { isValidName, itemCoordinates, name, idUser } = state;
      if (isValidName) {
        const item: IItemField = {
          coordinates: itemCoordinates,
          name,
          idUser,
          isFound: false,
        };
        await CreateItemAPI.createItem(item);
        navigation.navigate(ROUTES.ItemList);
      }
    } catch {
      error();
    }
  };

  return {
    ...state,
    setName,
    setUserRegion,
    setRegion,
    onSubmit,
    setAddress,
  };
};
