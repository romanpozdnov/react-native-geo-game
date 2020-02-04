import { useEffect, useState } from 'react';
import { Region, LatLng } from 'react-native-maps';
import navigator from '@react-native-community/geolocation';

import { fetchAddressByCoordinates } from '@services/geocoder';
import { CreateItemApi } from './create-item.api';

import { ROUTES } from '@constants/routes';

interface ICreateItemState {
  region: Region;
  idUser: string;

  name: string;
  isValidName: boolean;

  itemCoordinates: LatLng;
  userCoordinates: LatLng;

  address: string;
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
  address: '',
};

const checkIsOnlyString = (value: string): boolean => {
  const onlyWord: RegExp = /^(\w| ){6,30}$/;
  return onlyWord.test(value);
};

export const useCreteItem = () => {
  const [state, setState] = useState<ICreateItemState>(initialState);

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
        }));
      },
      () => {
        const { region, userCoordinates, itemCoordinates } = initialState;
        setState((currentState) => ({
          ...currentState,
          itemCoordinates,
          userCoordinates,
          region,
        }));
      }
    );
  }, []);

  // * get user id
  useEffect(() => {
    const fetchIdUser = async () => {
      try {
        const idUser: string = (await CreateItemApi.fetchUserId()) ?? '';
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

  // * set region coordinate to user coordinates
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

  // * Set address
  const setAddress = () => {
    const set = async () => {
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
        const { address } = initialState;
        setState((currentState) => ({
          ...currentState,
          address,
        }));
      }
    };
    set();
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
      CreateItemApi.createItem(item);
      navigation.navigate(ROUTES.ItemList);
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
