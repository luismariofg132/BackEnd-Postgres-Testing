const app = require('../index')
const request = require('supertest');

describe('GET /instituciones-educativas', () => {
    test('Retornar un status 200', async () => {
        const response = await request(app).get('/api/instituciones-educativas').send();
        // console.log(response.headers);
        expect(response.statusCode).toBe(200);
    })

    test("Retorne un array de instituciones educativas", async () => {
        const response = await request(app).get('/api/instituciones-educativas').send();
        expect(response.body).toBeInstanceOf(Array);
    })
})

describe("GET /actores", () => {
    const user = {
        correo: "oscarmesa.elpoli@elpoli.edu.co",
        contrasena: "34c958e8afa723e3806b37fffa2d64d2ee0ceef9"
    }

    const newUser = [{
        apellidos: "Pati¤o",
        contrasena: "f3812ab06e685886f615b6a8c38533f11fc0311b",
        correo: "dianapati¤o@outlook.co",
        documento: "83974732638",
        estado_actor_id: 1,
        fecha_actualizacion: null,
        fecha_creacion: "2020-10-09T06:25:53.000Z",
        fecha_nacimiento: "2003-03-29T05:00:00.000Z",
        genero: "mujer",
        id: 5,
        institucion_id: 1,
        nombres: "Diana",
        numero_expediente: "KI-EDU900-PAT",
        telefono_celular: "3012938475",
        tipo_actor_id: 1,
        tipo_documento: "TI"
    }]


    test("Retornar el usuario", async () => {
        const response = await request(app).get(`/api/actor?user=${user.correo}&password=${user.contrasena}`);
        expect(response.body).toBeInstanceOf(Array);
    })
    test('Devuelve el usuario pasandole el id', async () => {
        const response = await request(app).get(`/api/actor/${newUser[0].id}`);
        expect(response.body).toEqual(expect.objectContaining(newUser));
    })
})