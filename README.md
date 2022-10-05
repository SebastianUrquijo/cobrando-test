# cobrando-test

Microservicio para tabla Empleado:

Capacidad CRUD para departamento y empleado



Rutas Departamento:

CREAR DEPARTAMENTO (POST)
-http://localhost:1234/department/create
    Body:
    {
"code":12346,
"name":"Finanzas",
"budget":500000
}

EDITAR DEPARTAMENTO (PUT)
-http://localhost:1234/department/edit
    Body:
    {
"code":12346,
"name":"Finanzas y Contabilidad",
"budget":420000
}

ELIMINAR DEPARTAMENTO (DELETE)
-http://localhost:1234/department/delete
    Body:
    {
"code":"12346"
}

CONSULTAR DEPARTAMENTOS (GET)
-http://localhost:1234/department/

CONSULTAR UN SOLO DEPARTAMENTO (GET)
-http://localhost:1234/department/12346
    toma code  a traves de params



Rutas Empleado:

CREAR EMPLEADO (POST)
-http://localhost:1234/employee/create
    Body:
    {
"id":44477,
"nif": "polea",
"name": "Andres",
"lastname1": "Perea",
"lastname2": "Correa",
"code": 12346
}

EDITAR EMPLEADO (PUT) ===> Se debe crear otro departamento primero con code "1235"
-http://localhost:1234/employee/edit
    Body:
    {
"id":44477,
"nif": "polea",
"name": "Andres",
"lastname1": "Torres",
"lastname2": "Martinez",
"code": 1235
}

ELIMINAR EMPLEADO (DELETE)
-http://localhost:1234/employee/delete
    Body:
    {
"id":"44477"
}

CONSULTAR EMPLEADOS (GET)
-http://localhost:1234/employee/

CONSULTAR UN SOLO EMPLEADO (GET)
-http://localhost:1234/employee/44477
    toma id a traves de params