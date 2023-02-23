# Javier-Salafica---Servidor-con-balance-de-carga

# Comandos pm2

pm2 start server.js -- -p 8080 -m fork
pm2 start server.js -- -p 8081 -m cluster

# Comandos pm2 segunda consigna

pm2 start server.js -- -p 8080 -m fork
pm2 start server.js -- -p 8082 -m fork
pm2 start server.js -- -p 8083 -m fork
pm2 start server.js -- -p 8084 -m fork
pm2 start server.js -- -p 8085 -m fork
