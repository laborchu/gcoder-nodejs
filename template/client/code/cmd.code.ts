export class CmdCode {
    <%tables.forEach(function(table){%>
	public static readonly ${table.upperTableName}_GET = "${table.upperTableName}_GET";    
	public static readonly ${table.upperTableName}_POST = "${table.upperTableName}_POST";    
	public static readonly ${table.upperTableName}_DEL = "${table.upperTableName}_DEL";    
	public static readonly ${table.upperTableName}_LIST = "${table.upperTableName}_LIST";    
	public static readonly ${table.upperTableName}_PUT = "${table.upperTableName}_PUT";    
	public static readonly ${table.upperTableName}_PATCH = "${table.upperTableName}_PATCH";    
    <%})%>
}