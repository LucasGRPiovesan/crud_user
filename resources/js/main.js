import { UsersController } from "./controllers/UsersController";
import { FormatHelper } from "./helpers/FormatHelper";
import { ValidateHelper } from "./helpers/ValidateHelper";

let current_user;

function onListLoad() {
    $("table").addClass("d-none");
    $(".list-field").addClass("d-flex justify-content-center align-items-center");
    $(".list-field .custom-loader").removeClass("d-none");
}

function onListSuccess(response) {

    $("tbody").html("");
    $("tbody").append(response.map(user => {

        return `
            <tr 
                data-uuid="${user.uuid}"
                data-bs-toggle="modal" data-bs-target="#modalEdit"
            >
                <td>${user.name}</td>
                <td>${FormatHelper.CPF(user.cpf)}</td>
                <td>${FormatHelper.phone(user.phone)}</td>
                <td>${FormatHelper.CEP(user.cep)}</td>
                <td>${FormatHelper.date(user.updated_at)}</td>
            </tr>
        `;
    }));

    $("tbody tr").on("click", function(){
        
        const UUID = $(this).data("uuid").trim();

        UsersController.getUser(UUID, {
            onModalLoad,
            onGetUserSuccess,
            onModalComplete
        });
    });
}

function updateList() {
    
    UsersController.listUsers({
        onListLoad,
        onListSuccess,
        onListComplete
    });
}

function onModalLoad() {
    $(".modal-body__content").addClass("d-none");
    $(".modal-body").addClass("d-flex justify-content-center align-items-center");
    $(".modal-body .custom-loader").removeClass("d-none");
}

function onGetUserSuccess(user) {

    current_user = user.uuid;

    $("#editName").val(user.name);
    $("#editCpf").val(FormatHelper.CPF(user.cpf));
    $("#editBorn").val(user.born.slice(0, 10));
    $("#editPhone").val(FormatHelper.phone(user.phone));
    $("#editAddress").val(user.address);
    $("#editNumber").val(user.number);
    $("#editNeighborhood").val(user.neighborhood);
    $("#editComplement").val(user.complement);
    $("#editState").val(user.state);
    $("#editCity").val(user.city);
    $("#editCep").val(FormatHelper.CEP(user.cep));
}

$("#editUser").on("click", function() {

    if (!validateEditUserForm()) {
        return;
    }

    UsersController.editUser(current_user, {
        name: $("#editName").val(),
        cpf: $("#editCpf").cleanVal(),
        born: $("#editBorn").val(),
        phone: $("#editPhone").cleanVal(),
        address: $("#editAddress").val(),
        number: $("#editNumber").val(),
        neighborhood: $("#editNeighborhood").val(),
        complement: $("#editComplement").val(),
        state: $("#editState").val(),
        city: $("#editCity").val(),
        cep: $("#editCep").cleanVal()
    }, {
        onListLoad,
        updateList,
        onListComplete
    })
});


function onModalComplete() {
    $(".modal-body .custom-loader").addClass("d-none");
    $(".modal-body").removeClass("d-flex justify-content-center align-items-center");
    $(".modal-body__content").removeClass("d-none");
}

function validateEditUserForm() {

    if (!$("#editName").val()) {
        Swal.fire("Nome obrigatório!", 'O campo Nome é obrigatório.', "warning");
        return false;        
    }

    if (!$("#editCpf").val()) {
        Swal.fire("CPF obrigatório!", 'O campo CPF é obrigatório.', "warning");
        return false;        
    }

    if(!$("#editBorn").val()) {
        Swal.fire("Data é obrigatória!", 'O campo Data de Nascimento é obrigatório.', "warning");
        return false;        
    }

    if(!$("#editPhone").val()) {
        Swal.fire("Telefone é obrigatório!", 'O campo Telefone é obrigatório.', "warning");
        return false;        
    }

    if(!$("#editAddress").val()) {
        Swal.fire("Endereço obrigatório!", 'O campo Endereço é obrigatório.', "warning");
        return false;        
    }

    if(!$("#editNumber").val()) {
        Swal.fire("Número obrigatório!", 'O campo Número é obrigatório.', "warning");
        return false;        
    }

    if(!$("#editNeighborhood").val()) {
        Swal.fire("Bairro obrigatório!", 'O campo Bairro é obrigatório.', "warning");
        return false;        
    }

    if(!$("#editState").val()) {
        Swal.fire("Estado obrigatório!", 'O campo Estado é obrigatório.', "warning");
        return false;        
    }

    if(!$("#editCity").val()) {
        Swal.fire("Cidade obrigatório!", 'O campo Cidade é obrigatório.', "warning");
        return false;        
    }

    if(!$("#editCep").val()) {
        Swal.fire("CEP obrigatório!", 'O campo CEP é obrigatório.', "warning");
        return false;        
    }

    if (!ValidateHelper.CPF($("#editCpf").val())) {
        Swal.fire("CPF inválido!", 'Por favor, informe um CPF válido.', "warning");
        return false;
    }

    if (!ValidateHelper.phone($("#editPhone").val())) {
        Swal.fire("Telefone inválido!", 'Por favor, informe um telefone válido.', "warning");
        return false;
    }

    if (!ValidateHelper.CEP($("#editCep").val())) {
        Swal.fire("CEP inválido!", 'Por favor, informe um CEP válido.', "warning");
        return false;
    }

    if (ValidateHelper.date($("#editBorn").val())) {
        Swal.fire("Data inválida!", 'Data de nascimento não pode ser superior a data atual.', "warning");
        return false;
    }

    $('#modalEdit').modal('hide');

    return true; 
}

$("#deleteUser").on("click", function() {

    UsersController.deleteUser(current_user, {
        onListLoad,
        updateList,
        onListComplete
    });
});

function onListComplete() {
    $(".list-field .custom-loader").addClass("d-none");
    $(".list-field").removeClass("d-flex justify-content-center align-items-center");
    $("table").removeClass("d-none");
}


$("#form-create-user").on("submit", function(e) {
    
    e.preventDefault();

    if (!ValidateHelper.CPF($("#cpf").val())) {
        Swal.fire("CPF inválido!", 'Por favor, informe um CPF válido.', "warning");
        return;
    }

    if (!ValidateHelper.phone($("#phone").val())) {
        Swal.fire("Telefone inválido!", 'Por favor, informe um telefone válido.', "warning");
        return;
    }

    if (!ValidateHelper.CEP($("#cep").val())) {
        Swal.fire("CEP inválido!", 'Por favor, informe um CEP válido.', "warning");
        return;
    }

    if (ValidateHelper.date($("#born").val())) {
        Swal.fire("Data inválida!", 'Data de nascimento não pode ser superior a data atual.', "warning");
        return;
    }

    UsersController.createUser({
        name: $("#name").val(),
        cpf: $("#cpf").cleanVal(),
        born: moment($("#born").val()).format("YYYY-MM-DD HH:mm:ss"),
        phone: $("#phone").cleanVal(),
        address: $("#address").val(),
        number: $("#number").val(),
        neighborhood: $("#neighborhood").val(),
        complement: $("#complement").val(),
        state: $("#state").val(),
        city: $("#city").val(),
        cep: $("#cep").cleanVal()
    }, {
        onListLoad,
        updateList,
        onListComplete
    });

    $("input[type='text'], input[type='date'], input[type='tel'], select").val("");
});

$(document).ready(function() {

    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#editCpf').mask('000.000.000-00', {reverse: true});

    $('#cep').mask('00000-000');
    $('#editCep').mask('00000-000');

    $('#phone').mask('(00) 00000-0000');
    $('#editPhone').mask('(00) 00000-0000');

    UsersController.listUsers({
        onListLoad,
        onListSuccess,
        onListComplete
    });

});