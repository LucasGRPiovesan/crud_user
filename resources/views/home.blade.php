<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>CRUD de Usuários | by Lucas</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    </head>
    <body class="d-flex justify-content-evenly align-items-center" style="height: 100vh !important">
        <div class="form-field">
            <form id="form-create-user" action="">
                <legend>Cadastre um novo usuário</legend>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="name" required>
                    <label for="floatingInput">Nome</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="cpf" required>
                    <label for="floatingPassword">CPF</label>
                </div>
                <div class="form-floating">
                    <input type="tel" class="form-control" id="phone" required>
                    <label for="floatingPassword">Telefone</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="cep" required>
                    <label for="floatingPassword">CEP</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="address" required>
                    <label for="floatingPassword">Endereço</label>
                </div>
                <div class="form-floating">
                    <select class="form-control" name="state" id="state" required>
                        <option value="">Selecione o estado</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                      </select> 
                    <label for="floatingPassword">Estado</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="city" required>
                    <label for="floatingPassword">Cidade</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="neighborhood" required>
                    <label for="floatingPassword">Bairro</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="number" required>
                    <label for="floatingPassword">Nº</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="complement">
                    <label for="floatingPassword">Complemento</label>
                </div>
                <div class="form-floating">
                    <input type="date" class="form-control" id="born" required>
                    <label for="floatingPassword">Data Nascimento</label>
                </div>
                <input id="createUser" type="submit" value="Cadastrar" class="btn btn-primary">
            </form>
        </div>

        <div class="list-field">
            <div class="custom-loader d-none"></div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">CEP</th>
                        <th scope="col">Última Atualização</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>

        @include('modals.modal-edit')
  
        @include('modals.modal-delete')
  
        <script type="module" src="{{ asset('js/main.js') }}"></script>
    </body>
</html>
