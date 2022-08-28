using userListService as uls from '../db/data-model';

service uls_listService @(
    // requires : 'system-user',
    path     : 'API'
) {
    @cds.persistence.skip
    entity users  as projection on uls.users;

    @cds.persistence.skip
    entity groups as projection on uls.groups;

    //to be renamed
    function getUsersWithParams(requrl : String, reqparams : String) returns String;

    //action
    action getUsers(requrl: String, reqparams : String) returns String;
}
