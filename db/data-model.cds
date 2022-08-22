namespace userListService;

entity groups{
    key id: String;
    name: String;
}

entity users{
    key mailNickname: String;
    displayName : String;
    mail : String;
}

type orderby{
    ref: many String;
    sort: String;
}

type reqparams{
    groupID : String;
    top: String;
    skiptoken: String;
    orderby: many orderby;
    filter: String;
}
