const db = require('../models/database')
const alert = require('alert')
const users = []

exports.addUser = (req, res, next) => {
    res.render('add-user', {
        docTitle: 'Add a User',
        path: 'add-user'
    })
}

exports.selectUser = (req, res, next) => {
    let command = 'SELECT * FROM customers'
    db.query(command, (err, data, fields) => {
        if(err) throw err
        res.render('homepage', {
            docTitle: 'Users',
            userData: data
        })
    })
}

exports.postUser = (req, res, next) => {
    let post = {
        name: req.body.username,
        username: req.body.pass
    }
    
    let command = `SELECT name FROM customers WHERE name = ?`
    db.query(command, post.name , (err, data) => {
        if (err) throw err
        if (data.length === 0) {
            db.query('INSERT INTO customers SET ?', post, (err) => {
                if(err) throw err
                res.redirect('/')
                console.log('It has been added successfully')
            })
        } else {
            alert('It has been used already')
        }
    })
}

exports.signIn = (req, res, next) => {
    res.render('sign-in', {
        docTitle: 'Sign in',
        path: 'sign-in',
    })
}

exports.getUser = (req, res, next) => {
    let command = 'SELECT name FROM customers WHERE name = ?'
    let check = req.body.username
    db.query(command, check, (err, data) => {
        if(err) {
            throw err
        }
        if(data.length === 0) {
            alert('Username is invalid')
        } else {
            res.redirect('/')
        }
        
    })
}

