import { ACmd } from "../base.cmd";
import { CmdSignModel, ${table.upperCamelName}Model } from "../../models/index";
import { CmdCode, RespCode } from "../../code/index";
import { ${table.upperCamelName}Dao } from "../../dao/index";

export default class ${table.upperCamelName}ListCmd extends ACmd {
    async execute(reqCmdSign: CmdSignModel): Promise<CmdSignModel> {
        let respSign: CmdSignModel = new CmdSignModel(reqCmdSign);
        let model: ${table.upperCamelName}Model = <${table.upperCamelName}Model>reqCmdSign.source;
        let result = await ${table.upperCamelName}Dao.find({});
        if (result.length) {
            respSign.source = result;
        }
        return respSign;
    }

    getCmdCode(): string {
        return CmdCode.${table.upperTableName}_LIST;
    }

}
