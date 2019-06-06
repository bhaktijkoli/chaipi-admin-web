module.exports = (req, res, next) =>{
    let user = firebase.auth().currentUser
    console.log(user)
    if(user !== null) {
        next()
    }
    return res.redirect('/')
}