import { IItemField } from "./item.types";

export class ItemDTO implements Readonly<IItemField> {
  readonly coordinates: {
    latitude: number;
    longitude: number;
  };
  readonly idUser: string;
  readonly isFound: boolean;
  readonly name: string;
}
