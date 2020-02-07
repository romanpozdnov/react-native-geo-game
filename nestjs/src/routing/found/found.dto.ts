import { IFoundField } from "./found.types";

export class FoundDTO implements Readonly<IFoundField> {
  readonly idUser: string;
  readonly itemsIdList: string[];
}
