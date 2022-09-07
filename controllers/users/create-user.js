const createUser = (req, res) => {
    
    res.send({
        status: 200,
        message: 'user created',
        data: {
            name: 'simar',
            email: 'simar@test.com'
        }
    })
};
export default createUser;