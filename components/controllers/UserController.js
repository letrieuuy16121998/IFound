
exports.login = (email, password) => {
    const user = data.filter(i => i.email == email)[0]
    console.log('user', user)
    if(user && user.password === password) {
        return user;
    }
    return null;
}

var data = [
    {id: 1, email: 'admin@gmail.com', password: '123', name: 'abc'}
]

