'use strict';
var gcoder = require('gcoder');

var MysqlTsTypeMapFilterPlugin = module.exports = gcoder.Plugin.extend({
    constructor: function () {
    }
});

MysqlTsTypeMapFilterPlugin.prototype.do = function (tables,config) {
    MysqlTsTypeMapFilterPlugin.__super__.do();
    let splitChat = config.splitChat || "_";
    let tsTypeMap = {
        "int":"number",
        "tinyint":"number",
        "smallint":"number",
        "bigint":"number",
        "int unsigned":"number",
        "varchar":"string",
        "float":"number",
        "double":"number",
        "date":"Date",
        "datetime":"Date",
        "text":"string",
    }
    let sqTypeMap = {
        "int":"NUMERIC",
        "tinyint":"NUMERIC",
        "smallint":"NUMERIC",
        "bigint":"NUMERIC",
        "int unsigned":"NUMERIC",
        "varchar":"STRING",
        "float":"NUMERIC",
        "double":"NUMERIC",
        "date":"DATEONLY",
        "datetime":"DATE",
        "text":"STRING",
    }
    for(let table of tables){
        for(let field of table.fieldArray){
            field.tsType = tsTypeMap[field.fieldType];
            if(!field.tsType){
                console.log(`${field.fieldType} not map tsType`);
            }
            field.sqType = sqTypeMap[field.fieldType];
            if(!field.sqType){
                console.log(`${field.fieldType} not map sqType`);
            }
        }
    }
};
