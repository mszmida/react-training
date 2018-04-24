export default function healthCheck(req, res, next) {

    return res.json({
        status: 'OK'
    });
}
