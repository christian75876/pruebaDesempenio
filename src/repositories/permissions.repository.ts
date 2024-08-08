import { injectable } from "tsyringe";
import { Permission } from "../model";


@injectable()
export class PermissionRepository {
  async findPermision(
    roleId: number,
    entityId: number
  ): Promise<Permission | null> {
    return await Permission.findOne({ where: { roleId, entityId } });
  }
}
