import fastify from "fastify";

const app=fastify();

app.get('/', () =>{
    console.log('funciona')
    return '00000'
});

app.listen({
    port:3333,
});
