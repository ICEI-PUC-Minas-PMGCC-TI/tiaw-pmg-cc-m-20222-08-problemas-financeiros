var dbInicial = {
    dados: 
      {
        contas: [
        {
            id: 1,
            email: "Leanne.Graham@email.com",
            login: "leanneG",
            senha: "123",
            nome: "Leanne Graham",
            cidade: "Belo Horizonte",
            categoria: "amigos",
            email: "Sincere@april.biz",
            telefone: "1-770-736-8031"
        },
        {
            id: 2,
            email: "ervin@email.com",
            login: "ervin",
            senha: "123",
            nome: "Ervin Howell",
            cidade: "Betim",
            categoria: "familia",
            email: "Shanna@melissa.tv",
            telefone: "010-692-6593"
        },
        {
            id: 3,
            email: "clementine@email.com",
            login: "clementine",
            senha: "123",
            nome: "Clementine Bauch",
            cidade: "Rio de Janeiro",
            categoria: "trabalho",
            email: "Nathan@yesenia.net",
            telefone: "1-463-123-4447"
        },
        {
            id: 4,
            email: "patricia@email.com",
            login: "patricia",
            senha: "123",
            nome: "Patricia Lebsack",
            cidade: "Betim",
            categoria: "trabalho",
            email: "Julianne.OConner@kory.org",
            telefone: "493-170-9623 x156"
        },
        {
            id: 5,
            email: "chelsey@email.com",
            login: "chelsey",
            senha: "123",
            nome: "Chelsey Dietrich",
            cidade: "São Paulo",
            categoria: "familia",
            email: "Lucio_Hettinger@annie.ca",
            telefone: "(254)954-1289"
        },
        {
            id: 6,
            email: "dennis@email.com",
            login: "dennis",
            senha: "123",
            nome: "Mrs. Dennis Schulist",
            cidade: "Rio de Janeiro",
            categoria: "trabalho",
            email: "Karley_Dach@jasper.info",
            telefone: "1-477-935-8478"
        },
        {
            id: 7,
            email: "kurtis@email.com",
            login: "kurtis",
            senha: "123",
            nome: "Kurtis Weissnat",
            cidade: "Belo Horizonte",
            categoria: "amigos",
            email: "Telly.Hoeger@billy.biz",
            telefone: "210.067.6132"
        },
        {
            id: 8,
            email: "nicholas@email.com",
            login: "nicholas",
            senha: "123",
            nome: "Nicholas Runolfsdottir V",
            cidade: "Belo Horizonte",
            categoria: "familia",
            email: "Sherwood@rosamond.me",
            telefone: "586.493.6943"
        },
        {
            id: 9,
            email: "glenna@email.com",
            login: "glenna",
            senha: "123",
            nome: "Glenna Reichert",
            cidade: "Betim",
            categoria: "amigos",
            email: "Chaim_McDermott@dana.io",
            telefone: "(775)976-6794"
        },
        {
            id: 10,
            email: "clementina@email.com",
            login: "clementina",
            senha: "123",
            nome: "Clementina DuBuque",
            cidade: "São Paulo",
            categoria: "amigos",
            email: "Rey.Padberg@karina.biz",
            telefone: "024-648-3804"
        }],
        contasBancarias:[
        {
            nome: "Mrs. Dennis Schulist",
            id: 6,
            nBanco: 111,
            nAgencia: 1111,
            nConta: 111111
        },
        {
            nome: "Glenna Reichert",
            id: 9,
            nBanco: 333,
            nAgencia: 3333,
            nConta: 333333
        },
        {
            nome: "Kurtis Weissnat",
            id: 7,
            nBanco: 444,
            nAgencia: 4444,
            nConta: 444444
        },
        {
            nome: "Chelsey Dietrich",
            id: 5,
            nBanco: 222,
            nAgencia: 2222,
            nConta: 222222
        }],
        lancamentos:[
        {
            id: 6,
            data: {dia: 1,
                mes: 10,
                ano: 22},
            descricao: "Verdemar",
            valor: -760.73
        },
        {
            id: 6,
            data: {dia: 2,
                mes: 10,
                ano: 22},
            descricao:"Spotify",
            valor: -34.90
        },
        {
            id: 6,
            data: {dia: 3,
                mes: 10,
                ano: 22},
            descricao: "Salário do mês OUT",
            valor: 12341.61
        },
        {
            id: 5,
            data: {dia: 5,
                mes: 10,
                ano: 22},
            descricao: "Salário do mês OUT",
            valor: 2347.29
        },
        {
            id: 7,
            data: {dia: 5,
                mes: 10,
                ano: 22},
            descricao: "COPASA",
            valor: -40.69
        },
        {
            id: 6,
            data: {dia: 5,
                mes: 10,
                ano: 22},
            descricao: "Parcela OUT - PUC-MG",
            valor: -1698.87
        },
        {
            id: 7,
            data: {dia: 5,
                mes: 10,
                ano: 22},
            descricao:"Envio PIX",
            valor: -300.00
        },
        {
            id: 9,
            data: {dia: 7,
                mes: 10,
                ano: 22},
            descricao: "Salário do mês OUT",
            valor: 5891.05
        },
        {
            id: 7,
            data: {dia: 7,
                mes: 10,
                ano: 22},
            descricao: "Salário do mês OUT",
            valor: 1710.98
        },
        {
            id: 9,
            data: {dia: 8,
                mes: 10,
                ano: 22},
            descricao: "Carrefuor",
            valor: -579.83
        },
        {
            id: 7,
            data: {dia: 8,
                mes: 10,
                ano: 22},
            descricao: "Ingresso Cinema",
            valor: -12.50
        },
        {
            id: 5,
            data: {dia: 8,
                mes: 10,
                ano: 22},
            descricao: "Supermercado",
            valor: -275.57
        },
        {
            id: 9,
            data: {dia: 9,
                mes: 10,
                ano: 22},
            descricao: "Crédito PIX",
            valor: 96.00
        },
        {
            id: 9,
            data: {dia: 9,
                mes: 10,
                ano: 22},
            descricao: "Crédito PIX",
            valor: 96.00
        },
        {
            id: 9,
            data: {dia: 9,
                mes: 10,
                ano: 22},
            descricao: "Crédito PIX",
            valor: 96.00
        },
        {
            id: 9,
            data: {dia: 9,
                mes: 10,
                ano: 22},
            descricao: "Crédito PIX",
            valor: 96.00
        },
        {
            id: 9,
            data: {dia: 10,
                mes: 10,
                ano: 22},
            descricao: "Crédito PIX",
            valor: 96.00
        },
        {
            id: 9,
            data: {dia: 10,
                mes: 10,
                ano: 22},
            descricao: "Crédito PIX",
            valor: 96.00
        },
        {
            id: 9,
            data: {dia: 11,
                mes: 10,
                ano: 22},
            descricao: "CEMIG",
            valor: -48.11
        },
        {
            id: 6,
            data: {dia: 11,
                mes: 10,
                ano: 22},
            descricao: "Bancorbras",
            valor: -109.99
        },
        {
            id: 7,
            data: {dia: 14,
                mes: 10,
                ano: 22},
            descricao: "Ifood",
            valor: -47.48
        },
        {
            id: 7,
            data: {dia: 16,
                mes: 10,
                ano: 22},
            descricao: "UBER",
            valor: -16.90
        },
        {
            id: 5,
            data: {dia: 17,
                mes: 10,
                ano: 22},
            descricao: "Plano de saúde cooperativo",
            valor: 40.00
        },
        {
            id: 5,
            data: {dia: 21,
                mes: 10,
                ano: 22},
            descricao: "UBER",
            valor: -19.90
        },
        {
            id: 5,
            data: {dia: 21,
                mes: 10,
                ano: 22},
            descricao: "UBER",
            valor: -19.90
        },
        {
            id: 5,
            data: {dia: 21,
                mes: 10,
                ano: 22},
            descricao: "MILA Volkswagen",
            valor: -320.49
        },
        {
            id: 7,
            data: {dia: 22,
                mes: 10,
                ano: 22},
            descricao: "UBER",
            valor: -19.90
        },
        {
            id: 5,
            data: {dia: 25,
                mes: 10,
                ano: 22},
            descricao:"YouTube Music Premium",
            valor: -16.90
        },
        {
            id: 6,
            data: {dia: 26,
                mes: 10,
                ano: 22},
            descricao: "UBER",
            valor: -29.50
        },
        {
            id: 6,
            data: {dia: 26,
                mes: 10,
                ano: 22},
            descricao: "UBER",
            valor: -33.90
        },
        {
            id: 6,
            data: {dia: 26,
                mes: 10,
                ano: 22},
            descricao: "Volvo Euroville",
            valor: -729.89
        },
        {
            id: 9,
            data: {dia: 27,
                mes: 10,
                ano: 22},
            descricao:"Amazon",
            valor: -69.90
        },
        {
            id: 7,
            data: {dia: 27,
                mes: 10,
                ano: 22},
            descricao: "Supermercados BH",
            valor: -137.48
        },
        {
            id: 6,
            data: {dia: 2,
                mes: 11,
                ano: 22},
            descricao:"Spotify",
            valor: -34.90
        },
        {
            id: 6,
            data: {dia: 3,
                mes: 11,
                ano: 22},
            descricao: "Salário do mês NOV",
            valor: 12341.61
        },
        {
            id: 5,
            data: {dia: 4,
                mes: 11,
                ano: 22},
            descricao: "Salário do mês NOV",
            valor: 2347.29
        },
        {
            id: 9,
            data: {dia: 7,
                mes: 11,
                ano: 22},
            descricao: "Salário do mês NOV",
            valor: 5891.05
        },
        {
            id: 7,
            data: {dia: 7,
                mes: 11,
                ano: 22},
            descricao: "Salário do mês NOV",
            valor: 1710.98
        },
        {
            id: 6,
            data: {dia: 5,
                mes: 11,
                ano: 22},
            descricao: "Parcela NOV - PUC-MG",
            valor: -1698.87
        },
        {
            id: 5,
            data: {dia: 8,
                mes: 11,
                ano: 22},
            descricao: "COPASA",
            valor: -98.03
        },
        {
            id: 6,
            data: {dia: 10,
                mes: 11,
                ano: 22},
            descricao: "Verdemar",
            valor: -691.74
        },
        {
            id: 6,
            data: {dia: 11,
                mes: 11,
                ano: 22},
            descricao: "CEMIG",
            valor: -1230.81
        },
        {
            id: 6,
            data: {dia: 11,
                mes: 10,
                ano: 22},
            descricao: "Bancorbras",
            valor: -129.99
        },
        {
            id: 6,
            data: {dia: 25,
                mes: 11,
                ano: 22},
            descricao:"YouTube Music Premium",
            valor: -16.90
        }]
    }
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
db = dbInicial;
localStorage.setItem('db', JSON.stringify(db));
};