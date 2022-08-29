service uls_listService @(
    requires : 'system-user',
    path     : 'API'
) {
    //action
    action getUsers(requrl: String, reqparams : String) returns String;
}
