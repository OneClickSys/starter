

export const getUserInfo = req => {
    console.log(req)
    return {
        name: 'admin',
        user_id: '2',
        access: ['admin'],
        token: 'admin'
    }
}
