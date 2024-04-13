const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Подключение к базе данных
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_db'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

// Парсинг данных в формате JSON
app.use(bodyParser.json());

// Обработка запросов для регистрации
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Вставка данных в базу данных
    const sql = 'INSERT INTO users (login, pass) VALUES (?, ?)';
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            res.status(500).send('Ошибка регистрации');
            throw err;
        }
        res.status(200).send('Регистрация успешна');
    });
});

// Обработка запросов для авторизации
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Поиск пользователя в базе данных
    const sql = 'SELECT * FROM users WHERE login = ? AND pass = ?';
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            res.status(500).send('Ошибка авторизации');
            throw err;
        }
        if (result.length > 0) {
            res.status(200).send('Авторизация успешна');
        } else {
            res.status(401).send('Неверные учетные данные');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});