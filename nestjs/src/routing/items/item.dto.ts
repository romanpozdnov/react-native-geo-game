import { IItemField } from "./item.types";

export class CreateItemDto implements Readonly<IItemField> {
  readonly coordinates: {
    latitude: number;
    longitude: number;
  };
  readonly idUser: string;
  readonly isFound: boolean;
  readonly name: string;
}
