let agora = new Date();
let horaBrasilia = agora.toLocaleString("pt-BR", {timezone: "America/Sao Paulo"})
console.log(horaBrasilia)

console.log(agora.getUTCFullYear());
console.log(agora.getDate());
console.log(agora.getSeconds());
console.log(agora.getMinutes());
console.log(agora.getDay());
console.log(agora.getMonth());
