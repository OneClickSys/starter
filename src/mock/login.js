
export const login = req => {
    console.log(req);
    var body = JSON.parse(req.body)
    if (body.name != 'admin') {
        return {'error': 'login failed'};
    }
    return {'user_id': '2', 'name': 'super', 'token': 'user-token'};
}

