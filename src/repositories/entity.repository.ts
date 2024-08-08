import { injectable } from "tsyringe";
import { Entity } from "../model";


@injectable()
export class EntityRepository {
  async getEntityIdByName(name: string): Promise<number | null> {
    const entity = await Entity.findOne({ where: { name } });
    return entity ? entity.id : null;
  }
}
