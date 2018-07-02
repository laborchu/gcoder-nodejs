<%tables.forEach(function(table){%>
export * from './${table.hyphenTableName}.model';<%})%>
    