const express = require("express"); //express package initiated
const app = express(); // express instance has been created and will be access by app variable

// load environment variables from a .env file into the Node.js process environment.
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;

// including the db.js
const connection = require("./config/db");

// for handling incoming request bodies
const bodyParser = require("body-parser");

// setting the view engine for ejs
app.set("view engine", "ejs");

// Parse incoming request bodies as JSON
app.use(express.urlencoded({ extended: false }));  // for parsing URL-encoded data or form data
app.use(express.json());    // for parsing JSON data


app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

const path = require('path');
const publicPath = path.join(__dirname, 'public');


/******************************************************************************************** */

app.get("/", (req, res) => {
    res.render('home');
});

app.get("/home", (req, res) => {
    res.render('home');
});


app.get("/contact", (req, res) => {
    res.render('contact');
});

app.get("/about", (req, res) => {
    res.render('about');
});



// B-TECH
//read operation which will be passing value to ejs engine
app.get("/btech", async (req, res) => {

    try {

        const sql = "SELECT * FROM BTECH";

        // await keyword ensures that the query is awaited before proceeding.
        await connection.query(sql, (err, rows) => {

            if (err) {
                console.log(err);
                res.redirect('home');   // it will not read until you mention app.use(express.static(__dirname + "/views"));
            } else {
                console.log('No. of records found: ', rows.length);

                connection.query('SELECT DISTINCT City FROM Btech', (err1, rows1) => {
                    if (err1) {
                        console.log(err1);

                        res.redirect('home');
                    } else {

                        connection.query('SELECT DISTINCT States FROM Btech', (err2, rows2) => {
                            if (err2) {
                                console.log(err2);

                                res.redirect('home');
                            } else {

                                connection.query('SELECT DISTINCT Exams FROM Btech', (err3, rows3) => {
                                    if (err3) {
                                        console.log(err3);

                                        res.redirect('home');
                                    } else {
                                        //console.log(rows);
                                        //console.log(rows1.length);
                                        //console.log(rows2.length);
                                        //console.log(rows3.length);
                                        let total = rows.length;
                                        res.render("btech.ejs", { result: rows, result1: rows1, result2: rows2, result3: rows3, tot: total });
                                    }
                                });
                            }
                        });
                    }

                });

            }

        });
    }

    catch (err) {
        console.log(err)
    }
});


app.post('/show_btech', async (req, res) => {

    try {

        const city = req.body.city;
        const state = req.body.state;
        //console.log(city);
        //console.log(state);

        const order = req.body.order;
        //console.log(order);

        const exam = req.body.exam;
       // console.log(exam);

        let sql = "SELECT * FROM BTECH WHERE CITY LIKE '%" + city + "%' AND STATES LIKE '%" + state + "%' AND EXAMS LIKE '%" + exam + "%' ORDER BY FEES " + order + " "

        await connection.query(sql, (err, rows) => {

            if (err) {
                console.log(err);
                res.redirect('home');
            } else {

                console.log('No. of records found: ', rows.length);

                connection.query('SELECT DISTINCT City FROM Btech', (err1, rows1) => {
                    if (err1) {
                        console.log(err1);

                        res.redirect('home');
                    } else {

                        connection.query('SELECT DISTINCT States FROM Btech', (err2, rows2) => {
                            if (err2) {
                                console.log(err2);

                                res.redirect('home');
                            } else {

                                connection.query('SELECT DISTINCT Exams FROM Btech', (err3, rows3) => {
                                    if (err3) {
                                        console.log(err3);

                                        res.redirect('home');
                                    } else {
                                        // console.log(rows1)
                                       // console.log(rows1.length);
                                       // console.log(rows2.length);
                                       // console.log(rows3.length);
                                        let total = rows.length;
                                        res.render("btech.ejs", { result: rows, result1: rows1, result2: rows2, result3: rows3, tot: total });
                                    }
                                });
                            }
                        });
                    }

                });

            }
        });


    }

    catch (err) {
        console.log(err)
    }

});




// M-TECH
//read operation which will be passing value to ejs engine
app.get("/mtech", async (req, res) => {

    try {

        const sql = "SELECT * FROM MTECH";

        await connection.query(sql, (err, rows) => {

            if (err) {
                console.log(err);
                res.redirect('home');     // it will not read until you mention app.use(express.static(__dirname + "/views"));
            } else {
                console.log('No. of records found: ', rows.length);

                connection.query('SELECT DISTINCT City FROM Mtech', (err1, rows1) => {
                    if (err1) {
                        console.log(err1);

                        res.redirect('home');
                    } else {

                        connection.query('SELECT DISTINCT States FROM Mtech', (err2, rows2) => {
                            if (err2) {
                                console.log(err2);

                                res.redirect('home');
                            } else {

                                connection.query('SELECT DISTINCT Exams FROM Mtech', (err3, rows3) => {
                                    if (err3) {
                                        console.log(err3);

                                        res.redirect('home');
                                    } else {
                                      
                                        //console.log(rows1.length);
                                        //console.log(rows2.length);
                                        //console.log(rows3.length);
                                        let total = rows.length;
                                        res.render("mtech.ejs", { result: rows, result1: rows1, result2: rows2, result3: rows3, tot: total });
                                    }
                                });
                            }
                        });
                    }

                });

            }

        });


    }
    catch (err) {
        console.log(err)
    }
});




app.post('/show_mtech', async (req, res) => {

    try {

        const city = req.body.city;
        const state = req.body.state;
        //console.log(city);
        //console.log(state);

        const order = req.body.order;
       // console.log(order);

        const exam = req.body.exam;
        //console.log(exam);

        let sql = "SELECT * FROM MTECH WHERE CITY LIKE '%" + city + "%' AND STATES LIKE '%" + state + "%' AND EXAMS LIKE '%" + exam + "%' ORDER BY fees " + order + " "

        await connection.query(sql, (err, rows) => {

            if (err) {
                console.log(err);
                res.redirect('home');
            } else {

                console.log('No. of records found: ', rows.length);

                connection.query('SELECT DISTINCT City FROM Mtech', (err1, rows1) => {
                    if (err1) {
                        console.log(err1);

                        res.redirect('home');
                    } else {

                        connection.query('SELECT DISTINCT States FROM Mtech', (err2, rows2) => {
                            if (err2) {
                                console.log(err2);

                                res.redirect('home');
                            } else {

                                connection.query('SELECT DISTINCT Exams FROM Mtech', (err3, rows3) => {
                                    if (err3) {
                                        console.log(err3);

                                        res.redirect('home');
                                    } else {
                                        // console.log(rows1)
                                        //console.log(rows1.length);
                                        //console.log(rows2.length);
                                        //console.log(rows3.length);
                                        let total = rows.length;
                                        res.render("mtech.ejs", { result: rows, result1: rows1, result2: rows2, result3: rows3, tot: total });
                                    }
                                });
                            }
                        });
                    }

                });

            }
        });

    }
    catch (err) {
        console.log(err)
    }

});




// BBA
//read operation which will be passing value to ejs engine
app.get("/bba", async (req, res) => {

    try {

        const sql = "SELECT * FROM BBA";

        await connection.query(sql, (err, rows) => {

            if (err) {
                console.log(err);
                res.redirect('home');   // it will not read until you mention app.use(express.static(__dirname + "/views"));
            } else {
                
                console.log('No. of records found: ', rows.length);

                connection.query('SELECT DISTINCT City FROM BBA', (err1, rows1) => {
                    if (err1) {
                        console.log(err1);

                        res.redirect('home');
                    } else {

                        connection.query('SELECT DISTINCT States FROM BBA', (err2, rows2) => {
                            if (err2) {
                                console.log(err2);

                                res.redirect('home');
                            } else {

                                connection.query('SELECT DISTINCT Exams FROM BBA', (err3, rows3) => {
                                    if (err3) {
                                        console.log(err3);

                                        res.redirect('home');
                                    } else {
                                        //console.log(rows)
                                        //console.log(rows1.length);
                                        //console.log(rows2.length);
                                        //console.log(rows3.length);
                                        let total = rows.length;
                                        res.render("bba.ejs", { result: rows, result1: rows1, result2: rows2, result3: rows3, tot: total });
                                    }
                                });
                            }
                        });
                    }

                });

            }

        });


    }
    catch (err) {
        console.log(err)
    }

});



app.post('/show_bba', async (req, res) => {

    try {

        const city = req.body.city;
        const state = req.body.state;
        //console.log(city);
        //console.log(state);

        const order = req.body.order;
        //console.log(order);

        const exam = req.body.exam;
        //console.log(exam);

        let sql = "SELECT * FROM BBA WHERE CITY LIKE '%" + city + "%' AND STATES LIKE '%" + state + "%' AND EXAMS LIKE '%" + exam + "%' ORDER BY fees " + order + " "

        await connection.query(sql, (err, rows) => {

            if (err) {
                console.log(err);
                res.redirect('home');
            } else {

                console.log('No. of records found: ', rows.length);

                connection.query('SELECT DISTINCT City FROM BBA', (err1, rows1) => {
                    if (err1) {
                        console.log(err1);

                        res.redirect('home');
                    } else {

                        connection.query('SELECT DISTINCT States FROM BBA', (err2, rows2) => {
                            if (err2) {
                                console.log(err2);

                                res.redirect('home');
                            } else {

                                connection.query('SELECT DISTINCT Exams FROM BBA', (err3, rows3) => {
                                    if (err3) {
                                        console.log(err3);

                                        res.redirect('home');
                                    } else {
                                        // console.log(rows1)
                                        //console.log(rows1.length);
                                        //console.log(rows2.length);
                                        //console.log(rows3.length);
                                        let total = rows.length;
                                        res.render("bba.ejs", { result: rows, result1: rows1, result2: rows2, result3: rows3, tot: total });
                                    }
                                });
                            }
                        });
                    }

                });

            }
        });


    }
    catch (err) {
        console.log(err)
    }

});






// MBA
//read operation which will be passing value to ejs engine
app.get("/mba", async (req, res) => {

    const sql = "SELECT * FROM MBA";

    try {

        await connection.query(sql, (err, rows) => {

            if (err) {
                console.log(err);
                res.redirect('home');      // it will not read until you mention app.use(express.static(__dirname + "/views"));
            } else {
                
                console.log('No. of records found: ', rows.length);

                connection.query('SELECT DISTINCT City FROM MBA', (err1, rows1) => {
                    if (err1) {
                        console.log(err1);

                        res.redirect('home');
                    } else {

                        connection.query('SELECT DISTINCT States FROM MBA', (err2, rows2) => {
                            if (err2) {
                                console.log(err2);

                                res.redirect('home');
                            } else {

                                connection.query('SELECT DISTINCT Exams FROM MBA', (err3, rows3) => {
                                    if (err3) {
                                        console.log(err3);

                                        res.redirect('home');
                                    } else {
                                        //console.log(rows)
                                        //console.log(rows1.length);
                                        //console.log(rows2.length);
                                        //console.log(rows3.length);
                                        let total = rows.length;
                                        res.render("mba.ejs", { result: rows, result1: rows1, result2: rows2, result3: rows3, tot: total });
                                    }
                                });
                            }
                        });
                    }

                });

            }

        });


    }

    catch (err) {
        console.log(err)
    }

});



app.post('/show_mba', async (req, res) => {

    try {

        const city = req.body.city;
        const state = req.body.state;
        //console.log(city);
        //console.log(state);

        const order = req.body.order;
        //console.log(order);

        const exam = req.body.exam;
        //console.log(exam);

        let sql = "SELECT * FROM MBA WHERE CITY LIKE '%" + city + "%' AND STATES LIKE '%" + state + "%' AND EXAMS LIKE '%" + exam + "%' ORDER BY fees " + order + " "

        await connection.query(sql, (err, rows) => {

            if (err) {
                console.log(err);
                res.redirect('home');
            } else {

                console.log('No. of records found: ', rows.length);

                connection.query('SELECT DISTINCT City FROM MBA', (err1, rows1) => {
                    if (err1) {
                        console.log(err1);

                        res.redirect('home');
                    } else {

                        connection.query('SELECT DISTINCT States FROM MBA', (err2, rows2) => {
                            if (err2) {
                                console.log(err2);

                                res.redirect('home');
                            } else {

                                connection.query('SELECT DISTINCT Exams FROM MBA', (err3, rows3) => {
                                    if (err3) {
                                        console.log(err3);

                                        res.redirect('home');
                                    } else {
                                  
                                        //console.log(rows1.length);
                                        //console.log(rows2.length);
                                        //console.log(rows3.length);
                                        let total = rows.length;
                                        res.render("mba.ejs", { result: rows, result1: rows1, result2: rows2, result3: rows3, tot: total });
                                    }
                                });
                            }
                        });
                    }

                });

            }
        });


    }

    catch (err) {
        console.log(err)
    }

});






app.listen(port, (error) => {
    if (error) throw error;
    console.log(`Server is running on port ${port}`);
});

