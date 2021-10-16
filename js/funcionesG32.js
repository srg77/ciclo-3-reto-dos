function consultar(){

    $.ajax( 

        {
            
            url: 'https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/bike/bike',
            type: 'GET',
            dataType: 'json',

            success : function(json){
                $("#idResConsulta").empty();
                $("#idResConsultaDet").empty();
                $("#idResConsultaDet").append("No ha seleccionado elementos");
                $("#sec-actualizar > div").remove();
                mostrarRespuesta(json.items);
                console.log(json)
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
                },

            complete : function(xhr, status) {
                alert('Petición realizada');
                }

        }
        
    );
}
function consultarClientes(){

    $.ajax( 

        {
            
            url: 'https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
            type: 'GET',
            dataType: 'json',

            success : function(json){
                $("#idResConsulta").empty();
                $("#idResConsultaDet").empty();
                $("#idResConsultaDet").append("No ha seleccionado elementos");
                $("#sec-actualizar > div").remove();
                mostrarRespuestaClientes(json.items);
                console.log(json)
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
                },

            complete : function(xhr, status) {
                alert('Petición realizada');
                }

        }
        
    );
}
function consultarMensajes(){

    $.ajax( 

        {
            
            url: 'https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
            type: 'GET',
            dataType: 'json',

            success : function(json){
                $("#idResConsulta").empty();
                $("#idResConsultaDet").empty();
                $("#idResConsultaDet").append("No ha seleccionado elementos");
                $("#sec-actualizar > div").remove();
                mostrarRespuestaMensajes(json.items);
                console.log(json)
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
                },

            complete : function(xhr, status) {
                alert('Petición realizada');
                }

        }
        
    );
}
function consultarById(id) {

    
    $.ajax( 

        {
            
            url: 'https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/bike/bike/'+id,
            type: 'GET',
            dataType: 'json',

            success : function(json){
                $("#idResConsultaDet").empty();
                mostrarRespuestaDetalle(json.items);
                console.log(json)
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
                },

            complete : function(xhr, status) {
                alert('Petición realizada');
                }

        }
        
    );
}
function consultarClientById(id) {

    
    $.ajax( 

        {
            
            url: 'https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client/'+id,
            type: 'GET',
            dataType: 'json',

            success : function(json){
                $("#idResConsultaDet").empty();
                mostrarRespuestaDetalleCliente(json.items);
                console.log(json)
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
                },

            complete : function(xhr, status) {
                alert('Petición realizada');
                }

        }
        
    );
}
function consultarMessageById(id) {

    
    $.ajax( 

        {
            
            url: 'https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message/'+id,
            type: 'GET',
            dataType: 'json',

            success : function(json){
                $("#idResConsultaDet").empty();
                mostrarRespuestaDetalleMensaje(json.items);
                // console.log(json)
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
                },

            complete : function(xhr, status) {
                alert('Petición realizada');
                }

        }
        
    );
}
function llenarCamposBici(bicicleta){
    $("#sec-actualizar > div").remove();
    
    let keyNames = Object.keys(bicicleta);
    let contenedorCampos = "<div>";

    for (let i = 0; i < keyNames.length; i++) {
        let value = bicicleta[keyNames[i]];
        console.log(value);
        contenedorCampos += "<div class='campos'>";
        contenedorCampos +=
            "<label for='txtAc" + keyNames[i] + "'>" + keyNames[i] + "</label>";
        
            if(keyNames[i] === "id"){
                console.log("parametro id");
                contenedorCampos +=
            "<input id='txtAc" + keyNames[i] + "' type='text' readonly value='"+value+"'>";
            }else{
                contenedorCampos +=
                "<input id='txtAc" + keyNames[i] + "' type='text' value='"+value+"'>";
            }
        
        $("#txtAcid").attr('readonly', true);
        contenedorCampos += "</div>";
        
        // $("#txtAcid").val("hola");
    }
    contenedorCampos += "<div class='campos'> <button onclick='actualizar()'>Guardar Cambios</button></div>";
    contenedorCampos += "</div>";
   

    $("#sec-actualizar").append(contenedorCampos);
}

function llenarCamposCliente(cliente){
    
    $("#sec-actualizar > div").remove();
    
    let keyNames = Object.keys(cliente);
    let contenedorCampos = "<div>";

    for (let i = 0; i < keyNames.length; i++) {
        let value = cliente[keyNames[i]];
        console.log(value);
        contenedorCampos += "<div class='campos'>";
        contenedorCampos +=
            "<label for='txtAc" + keyNames[i] + "'>" + keyNames[i] + "</label>";
        
            if(keyNames[i] === "id"){
                console.log("parametro id");
                contenedorCampos +=
            "<input id='txtAc" + keyNames[i] + "' type='text' readonly value='"+value+"'>";
            }else{
                contenedorCampos +=
                "<input id='txtAc" + keyNames[i] + "' type='text' value='"+value+"'>";
            }
        
        $("#txtAcid").attr('readonly', true);
        contenedorCampos += "</div>";
        
        // $("#txtAcid").val("hola");
    }
    contenedorCampos += "<div class='campos'> <button onclick='actualizarClient()'>Guardar Cambios</button></div>";
    contenedorCampos += "</div>";
   

    $("#sec-actualizar").append(contenedorCampos);

}
function llenarCamposMensaje(mensaje){

    $("#sec-actualizar > div").remove();
    console.log(mensaje);
    let keyNames = Object.keys(mensaje);
    let contenedorCampos = "<div>";

    for (let i = 0; i < keyNames.length; i++) {
        let value = mensaje[keyNames[i]];
        console.log(value);
        contenedorCampos += "<div class='campos'>";
        contenedorCampos +=
            "<label for='txtAc" + keyNames[i] + "'>" + keyNames[i] + "</label>";
        
            if(keyNames[i] === "id"){
                console.log("parametro id");
                contenedorCampos +=
            "<input id='txtAc" + keyNames[i] + "' type='text' readonly value='"+value+"'>";
            }else{
                contenedorCampos +=
                "<input id='txtAc" + keyNames[i] + "' type='text' value='"+value+"'>";
            }
        
        $("#txtAcid").attr('readonly', true);
        contenedorCampos += "</div>";
        
        // $("#txtAcid").val("hola");
    }
    contenedorCampos += "<div class='campos'> <button onclick='actualizarMensaje()'>Guardar Cambios</button></div>";
    contenedorCampos += "</div>";
   

    $("#sec-actualizar").append(contenedorCampos);


}

function mostrarRespuestaDetalle(items){

    var keyNames = Object.keys(items[0]);
    let myTable = "<table>";

    myTable+= "<tr>";
    myTable+= "<th>"+keyNames[0]+"</th>";
    myTable+= "<th>"+keyNames[1]+"</th>";
    myTable+= "<th>"+keyNames[2]+"</th>";
    myTable+= "<th>"+keyNames[3]+"</th>";
    myTable+= "<th>"+keyNames[4]+"</th>";
    myTable+= " </tr>";

    for (let i = 0; i < items.length; i++) {

        var idTemp = items[i].id;
        var brandTemp = items[i].brand;
        var modelTemp = items[i].model;
        var categoryTemp = items[i].category_id;
        var nameTemp = items[i].name;

        myTable+= "<tr>";
        myTable+= "<td>"+idTemp+"</td>";
        myTable+= "<td>"+brandTemp+"</td>";
        myTable+= "<td>"+items[i].model+"</td>";
        myTable+= "<td>"+items[i].category_id+"</td>";
        myTable+= "<td>"+items[i].name+"</td>";
        myTable+= "<td><button id='btn-actu'>actualizar</button></td>";
        $("#btn-actu").on("click", llenarCamposBici(items[i]));
        myTable+= "<td>"+"<button onclick=\"borrar("+items[i].id+")\">"+"Eliminar"+"</button>"+"</td>";
        myTable+= " </tr>";
        
    }
    myTable+="</table>";

    $("#idResConsultaDet").append(myTable);
}
function mostrarRespuestaDetalleCliente(items){

    var keyNames = Object.keys(items[0]);
    let myTable = "<table>";

    myTable+= "<tr>";
    myTable+= "<th>"+keyNames[0]+"</th>";
    myTable+= "<th>"+keyNames[1]+"</th>";
    myTable+= "<th>"+keyNames[2]+"</th>";
    myTable+= "<th>"+keyNames[3]+"</th>";
    myTable+= " </tr>";

    for (let i = 0; i < items.length; i++) {

        var idTemp = items[i].id;
        var nameTemp = items[i].name;
        var emailTemp = items[i].email;
        var ageTemp = items[i].age;

        myTable+= "<tr>";
        myTable+= "<td>"+idTemp+"</td>";
        myTable+= "<td>"+nameTemp+"</td>";
        myTable+= "<td>"+emailTemp+"</td>";
        myTable+= "<td>"+ageTemp+"</td>";
        myTable+= "<td><button id='btn-actu'>actualizar</button></td>";
        $("#btn-actu").on("click", llenarCamposCliente(items[i]));
        // myTable+= "<td>"+"<button onclick=\"borrarCliente("+items[i].id+")\">"+"Eliminar"+"</button>"+"</td>";
        myTable+= " </tr>";
        
    }
    myTable+="</table>";

    $("#idResConsultaDet").append(myTable);
}
function mostrarRespuestaDetalleMensaje(items){

    var keyNames = Object.keys(items[0]);
    let myTable = "<table>";


    myTable+= "<tr>";
    myTable+= "<th>"+keyNames[0]+"</th>";
    myTable+= "<th>"+keyNames[1]+"</th>";
    myTable+= " </tr>";
    // console.log(items.length);
    for (let i = 0; i < items.length; i++) {
        // console.log(JSON.stringify(items[i]));
        var idTemp = items[i].id;
        var mensajeTemp = items[i].messagetext;

        myTable+= "<tr>";
        myTable+= "<td>"+idTemp+"</td>";
        myTable+= "<td>"+mensajeTemp+"</td>";

        // myTable+= "<td>"+"<button onclick=\"llenarCamposMensaje("+idTemp+",'"+items[i]+"')\">"+"actualizar"+"</button>"+"</td>";
        // myTable+= "<td><button id='btn-actu' onclick=\"llenarCamposMensaje('" +JSON.stringify(items[i])+ "')\">actualizar</button></td>"
        myTable+= "<td><button id='btn-actu'>actualizar</button></td>";
        // $("#btn-actu").on("click",llenarCamposMensaje(items[i]));
        $("#btn-actu").on("click", llenarCamposMensaje(items[i]));
        myTable+= "<td>"+"<button onclick=\"borrarMensaje("+items[i].id+")\">"+"Eliminar"+"</button>"+"</td>";
        myTable+= " </tr>";
        
    }
    myTable+="</table>";

    $("#idResConsultaDet").append(myTable);
}

function mostrarRespuesta(items){

    if(items[0] != null){
        var keyNames = Object.keys(items[0]);
    let myTable = "<table>";

    myTable+= "<tr>";
    myTable+= "<th>"+keyNames[0]+"</th>";
    myTable+= "<th>"+keyNames[4]+"</th>";
    myTable+= " </tr>";

    for (let i = 0; i < items.length; i++) {

        myTable+= "<tr>";
        myTable+= "<td>"+items[i].id+"</td>";
        myTable+= "<td>"+items[i].name+"</td>";
        myTable+= "<td>"+"<a href=\"#\" onclick=\"consultarById("+ items[i].id +")\" >"+"Detalle"+"</a>"+"</td>";
        myTable+= " </tr>";
        
    }
    myTable+="</table>";

    $("#idResConsulta").append(myTable);
    }
    
}
function mostrarRespuestaClientes(items){

    if(items[0] != null){
        var keyNames = Object.keys(items[0]);
        let myTable = "<table>";
    
        myTable+= "<tr>";
        myTable+= "<th>"+keyNames[0]+"</th>";
        myTable+= "<th>"+keyNames[1]+"</th>";
        myTable+= " </tr>";
    
        for (let i = 0; i < items.length; i++) {
    
            myTable+= "<tr>";
            myTable+= "<td>"+items[i].id+"</td>";
            myTable+= "<td>"+items[i].name+"</td>";
            myTable+= "<td>"+"<a href=\"#\" onclick=\"consultarClientById("+ items[i].id +")\" >"+"Detalle"+"</a>"+"</td>";
            myTable+= " </tr>";
            
        }
        myTable+="</table>";
    
        $("#idResConsulta").append(myTable);
    }else{
        console.log("no hay que listar")
    }
   
}
function mostrarRespuestaMensajes(items){

    if (items[0] != null) {
      var keyNames = Object.keys(items[0]);
      let myTable = "<table>";

      myTable += "<tr>";
      myTable += "<th>" + keyNames[0] + "</th>";
      myTable += "<th>" + keyNames[1] + "</th>";
      myTable += " </tr>";

      for (let i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable +=
          "<td>" +
          '<a href="#" onclick="consultarMessageById(' +
          items[i].id +
          ')" >' +
          "Detalle" +
          "</a>" +
          "</td>";
        myTable += " </tr>";
      }
      myTable += "</table>";

      $("#idResConsulta").append(myTable);
    }
    
}
function insertar(){

    var bicicleta = {
        id: $("#txtId").val(),
        brand: $("#txtMarca").val(),
        model: $("#txtModelo").val(),
        category_id: $("#txtCategoria").val(),
        name: $("#txtNombre").val()        
    }
    // datosEnvio = JSON.stringify(bicicleta);
    $.ajax( 

        {
            url: 'https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/bike/bike',
            type: 'POST',
            data:  bicicleta,
            dataType: 'json',
            success : function(json){
                console.log(json)
                alert('Petición realizada');

                $("#txtId").val("");
                $("#txtMarca").val("");
                $("#txtModelo").val("");
                $("#txtCategoria").val("");
                $("#txtNombre").val("");
                
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
                $("#txtId").val("");
                $("#txtMarca").val("");
                $("#txtModelo").val("");
                $("#txtCategoria").val("");
                $("#txtNombre").val("");
                }
        }
        
    );
}
function insertarCliente(){

    var cliente = {
        id: $("#txtId").val(),
        name: $("#txtNombre").val(),
        email: $("#txtEmail").val(),
        age: $("#txtEdad").val()       
    }
    // datosEnvio = JSON.stringify(bicicleta);
    $.ajax( 

        {
            url: 'https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
            type: 'POST',
            data:  cliente,
            dataType: 'json',
            success : function(json){
                console.log(json)
                alert('Petición realizada');
                $("#txtId").val("");
                $("#txtNombre").val("");
                $("#txtEmail").val("");
                $("#txtEdad").val("");   
                
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
                $("#txtId").val("");
                $("#txtNombre").val("");
                $("#txtEmail").val("");
                $("#txtEdad").val("");  
                }
        }
        
    );
}
function insertarMensaje(){

    var mensaje = {
        id: $("#txtId").val(),
        messagetext: $("textarea#txtMensaje").val()       
    }
    // datosEnvio = JSON.stringify(bicicleta);
    $.ajax( 

        {
            url: 'https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
            type: 'POST',
            data:  mensaje,
            dataType: 'json',
            success : function(json){
                console.log(json)
                alert('Petición realizada');
                $("#txtId").val("");
                $("textarea#txtMensaje").val("");
                
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
                $("#txtId").val("");
                $("textarea#txtMensaje").val("");
                }
        }
        
    );
}

function borrar(id) {

    var bicicleta;
    bicicleta = {
        id: id,      
    }
    datosEnvio   = JSON.stringify(bicicleta);

    $.ajax({
      url: "https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/bike/bike",
      type: "DELETE",
      data: datosEnvio,
      contentType: "application/json",

      success: function (response) {
        $("#idResConsulta").empty();  
        $("#idResConsultaDet").empty();
        $("#idResConsultaDet").append("No ha seleccionado");

        console.log(response);
      },
      error: function (xhr, status) {
        console.log(xhr);
      },
      complete: function (xhr, status) {
        alert("Petición realizada");
      }
    });

}
function borrarCliente(id) {

    var cliente;
    cliente = {
        id: id,      
    }
    datosEnvio   = JSON.stringify(cliente);

    $.ajax({
      url: "https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
      type: "DELETE",
      data: datosEnvio,
      contentType: "application/json",

      success: function (response) {
        $("#idResConsulta").empty();  
        $("#idResConsultaDet").empty();
        $("#idResConsultaDet").append("No ha seleccionado");

        console.log(response);
      },
      error: function (xhr, status) {
        console.log(xhr);
      },
      complete: function (xhr, status) {
        alert("Petición realizada");
      }
    });

}
function borrarMensaje(id) {

    var mensaje;
    mensaje = {
        id: id,      
    }
    datosEnvio   = JSON.stringify(mensaje);

    $.ajax({
      url: "https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
      type: "DELETE",
      data: datosEnvio,
      contentType: "application/json",

      success: function (response) {
        $("#idResConsulta").empty();  
        $("#idResConsultaDet").empty();
        $("#idResConsultaDet").append("No ha seleccionado");

        console.log(response);
      },
      error: function (xhr, status) {
        console.log(xhr);
      },
      complete: function (xhr, status) {
        alert("Petición realizada");
      }
    });

}
function actualizar() {

    var bicicleta;
    bicicleta = {
        id: $("#txtAcid").val(),
        brand: $("#txtAcbrand").val(),
        model: $("#txtAcmodel").val(),
        category_id: $("#txtAccategory_id").val(),
        name: $("#txtAcname").val()        
    }
    datosEnvio   = JSON.stringify(bicicleta);


    $.ajax({
      url: "https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/bike/bike",
      type: "PUT",
      data: datosEnvio,
      contentType: "application/json",

      success: function (response) {
        
        console.log(response);
      },
      error: function (xhr, status) {
        console.log(xhr);
      },
      complete: function (xhr, status) {

        alert("Petición realizada");
        $("#idResConsulta").empty();  
        $("#idResConsultaDet").empty();
        $("#idResConsultaDet").append("No ha seleccionado");

        $("#txtAcid").val("");
        $("#txtAcbrand").val("");
        $("#txtAcmodel").val("");
        $("#txtAccategory_id").val("");
        $("#txtAcname").val("") 
      }
    });

}
function actualizarClient() {

    var cliente;
    cliente = {
        id: $("#txtAcid").val(),
        name: $("#txtAcname").val(),
        email: $("#txtAcemail").val(),
        age: $("#txtAcage").val()    
    }
    datosEnvio   = JSON.stringify(cliente);


    $.ajax({
      url: "https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
      type: "PUT",
      data: datosEnvio,
      contentType: "application/json",

      success: function (response) {
        
        console.log(response);
      },
      error: function (xhr, status) {
        console.log(xhr);
      },
      complete: function (xhr, status) {

        alert("Petición realizada");
        $("#idResConsulta").empty();  
        $("#idResConsultaDet").empty();
        $("#idResConsultaDet").append("No ha seleccionado");

        $("#txtAcid").val("");
        $("#txtAcname").val("");
        $("#txtAcemail").val("");
        $("#txtAcage").val("");
      }
    });

}
function actualizarMensaje() {

    var mensaje;
    mensaje = {
        id: $("#txtAcid").val(),
        messagetext: $("#txtAcmessagetext").val()      
    }
    datosEnvio   = JSON.stringify(mensaje);


    $.ajax({
      url: "https://gab50dca9e64afe-db202109241326.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
      type: "PUT",
      data: datosEnvio,
      contentType: "application/json",

      success: function (response) {
        
        console.log(response);
      },
      error: function (xhr, status) {
        console.log(xhr);
      },
      complete: function (xhr, status) {

        alert("Petición realizada");
        $("#idResConsulta").empty();  
        $("#idResConsultaDet").empty();
        $("#idResConsultaDet").append("No ha seleccionado");

        $("#txtAcid").val("");
        $("#txtAcmessagetext").val("");
        
      }
    });

}

