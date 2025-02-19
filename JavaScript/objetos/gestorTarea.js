//Crear un o.literal para almacenar las tareas dentro de un array
// [ {id,titulo:"Tarea1",completada:true}, {}, {}... ]
// Cada tarea tendrá un titulo y un booleano que representa si está completada o no
// Metodos para añadir tareas al array, completar la tarea,listar tareas.
let a = {nombre: "Pepe"};
a.nombre

let gestorTareas = {
    tareas: [],
    completarTarea: function (id) {
        let tarea = this.tareas.find((t) => t.id == id)
        tarea.completada = true;
        console.log(tarea);
    },
    agregarTarea: function (titulo) {
        let id = 123; //this.generarId();
        console.log(id)
        this.tareas.push({id: id,titulo:titulo,completada:false})
    },
    generarId: function() {
        return Math.floor(Math.random()*9999)
    },
    listarTareas: function () {
        this.tareas.forEach((t) => {
            console.log(t)
        })
    }

}
gestorTareas.agregarTarea("Tarea1")
console.log(gestorTareas.listarTareas());
gestorTareas.completarTarea(123);

