var Libro = Backbone.Model.extend({
    // initialize:function() {
    //     console.log("Se ha creado una nueva instancia");
    // },
    // defaults:{
    //     autor:"Desconocido",
    // },
    validate:function(atributos){
        if (!atributos.titulo) {
            // return "Debe tener titulo";
            console.log("Debe tener titulo")
        }
    },
    // para guardar en el servidor
    urlRoot:"/libros"

});

var Autor = Backbone.Model.extend({
    initialize:function(){
        console.log("Se creado un author");
    },
    defaults:{
        nacionalidad:"Peruano",
    }
})