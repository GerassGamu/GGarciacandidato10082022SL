// <reference path="SubCategoriaCRUD.js" />
$(document).ready(function () {
    GetAll();
});

//function GetAll() {
//    $.ajax({
//        type: 'GET',
//        url: '/AlumnoController/Get',
//        success: function (result) {//200 OK
//            $('#tblAlumno tbody').empty();
//            $.each(result.Objects, function (i, alumno) {
//                var filas =
//                    '<tr>'
//                    + '<td class="text-center"> '
//                    + '<a class="glyphicon glyphicon-edit" href="#" onclick="GetById(' + alumno.IdAlumno + ')">'

//                    + '</a> '
//                    + '</td>'
//                    + "<td  id='id' class='text-center'>" + alumno.IdAlumno + "</td>"
//                    + "<td class='text-center'>" + empleado.Nombre + "</td>"
//                    + "<td class='text-center'>" + empleado.ApellidoPaterno + "</td>"
//                    + "<td class='text-center'>" + empleado.ApellidoMaterno + "</td>"

//                    + '<td class="text-center"> <button class="btn btn-danger" onclick="Eliminar(' + alumno.IdAlumno + ')"><span class="glyphicon glyphicon-trash" style="color:#FFFFFF"></span></button></td>'

//                    + "</tr>";


//                $("#tblAlumno tbody").append(filas);

//                //CreteRow(empleado);
//            });
//        },
//        error: function (result) {
//            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);

//        }
//    });
//}

function GetAll() {
    $.ajax({
        type: 'GET',
        url: '/AlumnoController/GetAll1',
        success: function (result) { //200 OK
            $('#tblAlumno tbody').empty();
            $.each(result.Objects, function (i, alumno) {
                var filas = '<tr>' + '<td class="text-center"> <button class="btn btn-primary" onclick="GetById(' + alumno.IdAlumno + ')"><span class="glyphicon glyphicon-retweet"" style="color:#FFFFFF"></span></button></td>' + '</a> '
                    + '</td>' + "<td  id='id' class='text-center'>" + alumno.IdAlumno + "</td>"
                    + "<td class='text-center'>" + alumno.Nombre + "</td>"
                    + "<td class='text-center'>" + alumno.ApellidoPaterno + "</td>"
                    + "<td class='text-center'>" + alumno.ApellidoMaterno + "</td>"
               

                    + '<td class="text-center"> <button class="btn btn-primary" onclick="Eliminar(' + alumno.IdAlumno + ')"><span class="glyphicon glyphicon-trash" style="color:#FFFFFF"></span></button></td>'

                    + "</tr>";
                $("#tblAlumno tbody").append(filas);
            });
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
};


function Add(empleado) {

    $.ajax({
        type: 'POST',
        url: 'http://localhost:10038/api/empleado/add',
        dataType: 'json',
        data: alumno,
        success: function (result) {
            $('#ModalForm').modal('hide');
            $('#myModal').modal();

        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
}

function GetById(IdAlumno) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:10038/api/empleado/' + IdEmpleado,
        success: function (result) {
            $('#txtIdAlumno').val(result.Object.IdEmpleado);
            $('#txtNombre').val(result.Object.Nombre);
            $('#txtApellidoPaterno').val(result.Object.ApellidoPaterno);
            $('#txtApellidoMaterno').val(result.Object.ApellidoMaterno);

            $('#ModalForm').modal('show');
            $('#lblTitulo').modal('Modificar Alumno');
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }

    });

}

//function test() {

//    $(".boton").click(function () {

//        var valores = "";

//        // Obtenemos todos los valores contenidos en los <td> de la fila

//        // seleccionada

//        $(this).parents("tr").find("td").each(function () {

//            valores += $(this).html() + "\n";

//        });

//        //alert(valores);
//        CatEntidadFederativaGetAll();

//        $('#ModalForm').modal('show',valores);
//        $('#lblTitulo').modal('Modificar Empleado');

//    });
//}

//function Mostrar() {


//    var IdEmpleado = $('#tblIdEmpleado');
//    var NumeroNomina = $('#tblNumeroNomina');
//    var Nombre = $('#tblNombre');
//    var ApellidoPaterno = $('#tblApellidoPaterno');
//    var ApellidoMaterno = $('#tblApellidoMaterno');
//    var IdEstado = $('#tblIdEstado');

//    $(this).parents("tr").find("td").each(function () {
//        $('#txtIdEmpleado').val(IdEmpleado);
//        $('#txtNumeroNomina').val(NumeroNomina);
//        $('#txtNombre').val(Nombre);
//        $('#txtApellidoPaterno').val(ApellidoPaterno);
//        $('#txtApellidoMaterno').val(ApellidoMaterno);
//        $('#ddlEstados').val(IdEstado);
//    });

//        //CreteRow(empleado);
   
//    CatEntidadFederativaGetAll();

//    $('#ModalForm').modal('show');
//    $('#lblTitulo').modal('Modificar Empleado');
//}

//function CreteRow(empleado) {
//    var filas =
//        '<tr>'
//        + '<td class="text-center boton" > '
//        + '<a class="glyphicon glyphicon-edit" href="#" onclick="Mostrar()">'
//        + '</a> '
//        + '</td>'
//        + "<td id='tblIdEmpleado' class='text-center'>" + empleado.IdEmpleado + "</td>"
//        + "<td id='tblNumeroNomina' class='text-center'>" + empleado.NumeroNomina + "</td>"
//        + "<td id='tblNombre' class='text-center'>" + empleado.Nombre + "</td>"
//        + "<td id='tblApellidoPaterno' class='text-center'>" + empleado.ApellidoPaterno + "</td>"
//        + "<td id='tblApellidoMaterno' class='text-center'>" + empleado.ApellidoMaterno + "</td>"
//        + "<td id='tblIdEstado'class='text-center'>" + empleado.Estado.IdEstado + "</td>"

//        + '<td class="text-center"> <button class="btn btn-danger" onclick="Eliminar(' + empleado.IdEmpleado + ')"><span class="glyphicon glyphicon-trash" style="color:#FFFFFF"></span></button></td>'

//        + "</tr>";

//    $("#tblEmpleado tbody").append(filas);

//}

function InitializeControls() {

    $('#txtIdEmpleado').val('');
    $('#txtNombre').val('');
    $('#txtApellidoPaterno').val('');
    $('#txtApellidoMaterno').val('');
    $('#ModalForm').modal('show');

}

function ShowModal() {

    $('#ModalForm').modal('show');


    InitializeControls();
    $('#lblTitulo').modal('Agregar Alumno');

}

function Update(alumno) {

    $.ajax({
        type: 'PUT',
        url: 'http://localhost:10038/api/empleado/update/',
        dataType: 'json',
        data: alumno,
        success: function (result) {

            $('#ModalForm').modal();
            $('#myModal').modal();

            Console(respond);
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });

};

function Guardar() {

    var alumno = {
        IdAlumno: $('#txtIdAlumno').val(),
        Nombre: $('#txtNombre').val(),
        ApellidoPaterno: $('#txtApellidoPaterno').val(),
        ApellidoMaterno: $('#txtApellidoMaterno').val(),
      
    }
    if ($('#txtIdAlumno').val() == "") {
        Add(alumno);
    }
    else {
        Update(alumno);
    }

}

function Eliminar(IdAlumno) {

    if (confirm("¿Estas seguro de eliminar al Empleado seleccionado?")) {
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:10038/api/empleado/' + IdAlumno,
            success: function (result) {
                $('#myModal').modal();
                GetAll();
            },
            error: function (result) {
                alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
            }
        });

    };
};