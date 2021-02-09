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

db.run('CREATE TABLE IF NOT EXISTS players (id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL, deaths INTEGER NOT NULL, wins INTEGER NOT NULL, ph INTEGER NOT NULL, lvl INTEGER NOT NULL, coins INTEGER NOT NULL, weaponID TEXT, armorID TEXT, skill1 TEXT,skill2 TEXT,skill3 TEXT, atk INTEGER NOT NULL, def INTEGER NOT NULL, bagID TEXT NOT NULL)', (err) => {
    if (err) {
        console.log('ERROR!', err)
    }
}) 
    





--------------- INSERTAR DATOS A LA TABLA SKILLS -- IMPLEMENTAR PROPIEDADES DE HABILIDAD
var ids = ['016', '017', '018', '019', '020', '021', '022', '023', '024', '025', '026', '027', '028', '029', '030', '031', '032'];
var names = ['Infernal thunder', 'Direct thunder', 'Thunder god attack', 'Flare', 'Assasin flare', 'Final flare', 'Apocalyptic flare', 'Dark flames', 'Minimal vortex', 'Vortex attack', 'Upward vortex', 'Endless vortex', 'Gluttony', 'Dark gluttony', 'Forward storm', 'Absolute calm', 'Final punishment'];
var descs = ['Trueno infernal, Atraviesa sus escudos y quita 37 pts de daño.', 'Trueno directo, No hay escapatoria, el oponente recive 40 pts de daño.', 'Ataque del dios del trueno, Es inevitable, Golpea a tu enemigo con 50 pts de daño y parálisis por un turno.', 'Flama, Quema a tu enemigo con 35 pts y se extiende hasta el siguiente turno provocando 15 pts de daño más.', 'Flama asesina, Quema a tu enemigo con 30 pts y se extiende hasta el siguiente turno con 30 pts de daño más.', 'Última flama, Poderosa quemadura que quita 50 pts de vida al oponente.', 'Flama apocalíptica que provoca 30 pts de vida y los dos siguientes turnos quita entre 10 y 20 pts de vida.', 'Flamas oscuras, Provoca una quemadura grave que quita 60 pts de vida.', 'Vortice minimo, Daña a tu oponente con 50 pts de vida.', 'Ataque del vortice, Provoca un daño de 55 pts.', 'Vortice ascendente, Este ataque daña a tu oponente con un  daño de 50 a 70 pts.', 'Vortice interminable, Provoca 3 ataques del vortice con un daño individual de 30 a 50 pts.', 'Absorve 20% de la vida de tu oponente.', 'Absorve el 50% de la vida de tu oponente y provocas 10 pts de daño adicional.', 'Tormenta frontal, Provoca de 10 a 75 pts de daño.', 'Eres inmune a cualquier ataque por un turno.', 'Castigo final, sacrifica el 50% de tu vida y provoca un daño del 90% a tu oponente.'];
var i = 0;
while(i<ids.length){
    db.run('INSERT INTO skills (id, name, description) VALUES (?, ?, ?)', [ids[i].toString(), names[i].toString(), descs[i].toString()], (err) => {
        if (err) {
            console.log('ERROR!', err)
        }
    })
    i++;
}
*/




// close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }else{ console.log('Close the database connection.');}
});
