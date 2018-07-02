<%tables.forEach(function(table){%>
export * from './<%=table.hyphenTableName%>-del.cmd';
export * from './<%=table.hyphenTableName%>-get.cmd';
export * from './<%=table.hyphenTableName%>-list.cmd';
export * from './<%=table.hyphenTableName%>-post.cmd';
export * from './<%=table.hyphenTableName%>-put.cmd';
export * from './<%=table.hyphenTableName%>-patch.cmd';
<%})%>
