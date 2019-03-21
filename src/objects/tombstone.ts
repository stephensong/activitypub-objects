import { ActivityObject, Objects } from "./object";

export class Tombstone implements ActivityObject {
  public readonly type = Objects.TOMBSTONE;
  constructor(
    public readonly name: string,
    public readonly id: URL,
    public readonly formerType: Objects,
    public readonly deleted: Date,
  ) { }
}
