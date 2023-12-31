const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

const app = express()

// definindo handlebars como templade engine
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

// pasta de arquivos est,aticos como css, imagens
app.use(express.static("public"))

// trabalhar com dados no formato json
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

// rotas
app.post("/register/save", (request, response) => {
    const { title, pageqty } = request.body

    const query = `
        INSERT INTO books (title, pageqty)
        VALUES ('${book.title}', '${book.pageqty}')
    `
    conn.query(query, (error) => {
        if (error) {
            console.log(error)
            return
        }

        response.redirect("/")
    })

})


app.get("/register", (request, response) => {
    response.render("home")
})

app.get("/", (request, response) => {
    response.render("home")
})

// conexão com mySQL
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodemysql",
    port: 3306
})

conn.connect((error) => {
    if (error) {
        console.log(error)
        return
    }

    console.log("Conectado ao MySQL!")

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000!")
    })
})