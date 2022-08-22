cds.env.odata.protectMetadata = false
const cdsapi = require('@sapmentors/cds-scp-api');
const usersurl = `/v1.0/users/`;
const groupmembersurl = `/v1.0/groups/<groupID>/members/`;
const groupsurl = `/v1.0/groups/`;
const destination = "Microsoft_Graph_User_List_API";
const error_code_blankKey = 'Bad Request';
const error_msg_blankKey = 'Key value requrl cannot be blank';

module.exports = (srv) => {
    const { users, groups } = srv.entities;

    srv.on('READ', 'users', (req) => {
    })

    srv.on('getUsersWithParams', async (req, res) => {
        var url = '';
        console.log(req.data.requrl);

        if (req.data.requrl == undefined || req.data.requrl == null || req.data.requrl == '') {
            req.error({"code":error_code_blankKey,"message":error_msg_blankKey})
            return;
        }else{
            url = req.data.requrl;
        }
        
        // if (req.data.groupID !== undefined && req.data.groupID !== null && req.data.groupID !== '') {
        //     url = groupmembersurl;
        //     url = url.replace(`<groupID>`, req.data.groupID);
        // } else {
        //     url = usersurl;
        // }

        if (req.data.reqparams !== undefined && req.data.reqparams !== null && req.data.reqparams !== '') {
            url = url.concat('?', req.data.reqparams);
        }
        console.log(url);
        // const service = await cdsapi.connect.to(destination);

        // try {

        //     const results = await service.run({
        //         url: url,
        //         method: "get",
        //     })
        //     return results;
        // }
        // catch (error) {
        //     console.log("OOPS")
        //     console.log(error.response.data.error)
        //     req.error({"code":error.response.data.error.code,"message":error.response.data.error.message})
        // }
    })
}