import { CmdCode, EventCode } from '../code/index';
import { CmdSignModel,${table.upperCamelName}Model } from '../models/index';
import { AHttpCmd } from './base.cmd';

export class ${table.upperCamelName}GetCmd extends AHttpCmd {
    constructor(private id: number) {
        super();
    }

    req(): CmdSignModel {
        let model:${table.upperCamelName}Model = new ${table.upperCamelName}Model();
        model.id = this.id;
        return super.buildCmdSign(model);
    }

    resp(data: any): void {
    }

    error(model: CmdSignModel): void {
    }

    getCmdCode(): string {
        return CmdCode.${table.upperTableName}_GET;
    }
}
