<%tables.forEach(function(table) {%>
export {${table.upperCamelName}Dao} from './${table.hyphenTableName}.dao'; <%}) %>