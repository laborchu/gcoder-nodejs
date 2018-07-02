/**
 * Created by Administrator on 2017/11/21.
 */
'use strict'
import * as Sequelize from 'sequelize';
import {${table.upperCamelName}Model} from '../models/index'
import { BaseDao, MysqlClient} from "./index";
import { DaoParams } from "../utils/params-builder.util";

let model: Sequelize.Model<Sequelize.Instance<${table.upperCamelName}Model>, ${table.upperCamelName}Model> = null;

class ${table.upperCamelName}Dao extends BaseDao {
    static getModel(): Sequelize.Model<Sequelize.Instance<${table.upperCamelName}Model>, ${table.upperCamelName}Model> {
        return model;
    }

    static count(params: any): Promise <number> {
        return new Promise<number>((resolve, reject) => {
            model.count({
                where: params,
            }).then((count: number) => {
                resolve(count);
            }).catch(reason => {
                reject(reason);
            })
        });
    }

    static find(params: DaoParams): Promise < Array < ${table.upperCamelName }Model >> {
        return new Promise<Array<${table.upperCamelName}Model>>((resolve, reject) => {
            model.findAll(params.options).then((result: Array<Sequelize.Instance<${table.upperCamelName}Model>>) => {
                resolve(JSON.parse(JSON.stringify(result)));
            }).catch(reason => {
                reject(reason);
            })
        });
    }

    static create(dataModel: ${table.upperCamelName}Model, options?: Sequelize.CreateOptions): Promise<${table.upperCamelName}Model> {
        return new Promise<${table.upperCamelName}Model>((resolve, reject) => {
            model.create(dataModel,options).then((result:Sequelize.Instance<${table.upperCamelName}Model>)=>{
                dataModel.id = result.toJSON().id;
                resolve(dataModel)
            }).catch(reason => {
                reject(reason);
            })
        });
    }

    static update(dataModel: ${table.upperCamelName}Model, options?: Sequelize.CreateOptions): Promise<${table.upperCamelName}Model> {
        return new Promise<${table.upperCamelName}Model>((resolve, reject) => {
            model.update(dataModel, {
                where: {
                    id: dataModel.id
                }
            }).then((result: any) => {
                resolve(result)
            }).catch(reason => {
                reject(reason);
            })
        });
    }

    static delete(dataModel: ${table.upperCamelName}Model, options?: Sequelize.CreateOptions): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            MysqlClient.getSequelize().query(`update ${table.tableName} set data_status=0 WHERE id=${'$'}{dataModel.id};`, options).spread((results, metadata) => {
                resolve();
            }).catch((reason: any) => {
                reject(reason);
            })
        });
    }
}


let schema = {
    <%table.fieldArray.filter(function(field){return !field.sqIgnore}).forEach(function(field){%>
        ${field.lowerCamelName}:{type: Sequelize.${field.sqType}, field: "${field.fieldName}"},//${field.comment}<%})%>

}

let modelName: string = "${table.upperCamelName}";
let tableName: string = "${table.tableName}";

let initDao = function (sequelize: Sequelize.Sequelize, DataTypes: any): Sequelize.Model<Sequelize.Instance<${table.upperCamelName}Model>, ${table.upperCamelName}Model> {
    model = sequelize.define<Sequelize.Instance<${table.upperCamelName}Model>, ${table.upperCamelName}Model>(modelName, schema, {
        createdAt: false,
        updatedAt: false,
        tableName: tableName,
        classMethods: {
            associate: function () {
            }
        }
    });
    return model;
};

export { ${table.upperCamelName}Dao, initDao, modelName }