const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('./database/data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }else{console.log('Connected to the in-memory SQlite database.');}
});

/*
//crear tabla
    db.run('CREATE TABLE IF NOT EXISTS players (id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL,ph INTEGER NOT NULL, lvl INTEGER NOT NULL, coins INTEGER NOT NULL, weaponID TEXT, armorID TEXT, skill1 TEXT,skill2 TEXT,skill3 TEXT, atk INTEGER NOT NULL, def INTEGER NOT NULL, bagID TEXT NOT NULL)', (err) => {
    if (err) {
        console.log('ERROR!', err)
    }
})

//insertar datos a la tabla
    db.run('INSERT INTO players (id, name, lvl, coins, atk, def) VALUES (?, ?, ?, ?, ?, ?)', ['001', 'tomas', 1, 0, 5, 5], (err) => {
        if (err) {
            console.log('ERROR!', err)
        }
    })

//obtener datos de tabla
    db.get(`SELECT * FROM players WHERE id='001'`,function (err, row) {
                // If row not found, create it
                if (err) {
                    console.log(`error: `+ err);
                }
                else
                    console.log(`id:  ${row.id}\nname:  ${row.name}\nlvl:  ${row.lvl}\ncoins:  ${row.coins}\natack:  ${row.atk}\ndefence:  ${row.def}\n`);
            });
    

//update data in player
    db.get(`SELECT * FROM players WHERE id='001'`, function (err, row) {
        // If row not found, create it
        if (err) {
            console.log(`error: ` + err);
        }
        else
            db.run(`UPDATE players SET coins=${row.coins + 1} WHERE id='001'`);
        console.log('player updated, coins: ' + (row.coins+1) )
    });

db.run('DELETE FROM players WHERE id="764295482078920734"');
//eliminar tabla
    db.run('DROP TABLE players')
    
*/


db.run('CREATE TABLE IF NOT EXISTS players (id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL, deaths INTEGER NOT NULL, wins INTEGER NOT NULL, ph INTEGER NOT NULL, lvl INTEGER NOT NULL, coins INTEGER NOT NULL, weaponID TEXT, armorID TEXT, skill1 TEXT,skill2 TEXT,skill3 TEXT, atk INTEGER NOT NULL, def INTEGER NOT NULL, bagID TEXT NOT NULL)', (err) => {
    if (err) {
        console.log('ERROR!', err)
    }
}) 





// close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }else{ console.log('Close the database connection.');}
});
