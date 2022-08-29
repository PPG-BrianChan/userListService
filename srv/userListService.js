cds.env.odata.protectMetadata = false
const cdsapi = require('@sapmentors/cds-scp-api');
const destination = "Microsoft_Graph_User_List_API";
const error_code_blankKey = 'Bad Request';
const error_msg_blankKey = 'Key value requrl cannot be blank';

module.exports = (srv) => {

    srv.on('getUsers', async(req, res) => {
        var url = '';
        if (req.data.requrl == undefined || req.data.requrl == null || req.data.requrl == '') {
            req.error({"code":error_code_blankKey,"message":error_msg_blankKey})
            return;
        }else{
            url = req.data.requrl;
        }

        if (req.data.reqparams !== undefined && req.data.reqparams !== null && req.data.reqparams !== '') {
            var reqparams = decodeURI(req.data.reqparams)
            url = url.concat('?', reqparams);
        }

        const service = await cdsapi.connect.to(destination);
        try {

            const results = await service.run({
                url: url,
                method: "get",
                headers: {
                    'ConsistencyLevel': 'Eventual'
                },
            })
            return results;
        }
        catch (error) {
            req.error({"code":error.response.data.error.code,"message":error.response.data.error.message})
        }
    })
}