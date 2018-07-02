import { ACmd } from "../base.cmd";
import { CmdSignModel, ${table.upperCamelName}Model } from "../../models/index";
import { CmdCode, RespCode } from "../../code/index";
import { ${table.upperCamelName}Dao } from "../../dao/index";

export default class ${table.upperCamelName}DelCmd extends ACmd {
    async execute(reqCmdSign: CmdSignModel): Promise<CmdSignModel> {
        let respSign: CmdSignModel = new CmdSignModel(reqCmdSign);
        let model: ${table.upperCamelName}Model = <${table.upperCamelName}Model>reqCmdSign.source;
        await ${table.upperCamelName}Dao.delete(model);
        return respSign;
    }

    getCmdCode(): string {
        return CmdCode.${table.upperTableName}_DEL;
    }

}
