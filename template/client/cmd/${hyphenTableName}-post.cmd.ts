import { CmdCode, EventCode } from '../code/index';
import { CmdSignModel,${table.upperCamelName}Model } from '../models/index';
import { AHttpCmd } from './base.cmd';

export class ${table.upperCamelName}PostCmd extends AHttpCmd {
    constructor(private model: ${table.upperCamelName}Model) {
        super();
    }

    req(): CmdSignModel {
        return super.buildCmdSign(this.model);
    }

    resp(data: any): void {
    }

    error(model: CmdSignModel): void {
    }

    getCmdCode(): string {
        return CmdCode.${table.upperTableName}_POST;
    }
}
