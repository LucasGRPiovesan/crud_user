<div class="modal fade" id="modalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Usuário</h1>
            </div>
            <div class="modal-body">
                <div class="custom-loader d-none"></div>
                <div class="modal-body__content">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="editName" required>
                        <label for="floatingInput">Nome</label>
                    </div>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="editCpf" required>
                        <label for="floatingPassword">CPF</label>
                    </div>
                    <div class="form-floating">
                        <input type="tel" class="form-control" id="editPhone" required>
                        <label for="floatingPassword">Telefone</label>
                    </div>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="editCep" required>
                        <label for="floatingPassword">CEP</label>
                    </div>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="editAddress" required>
                        <label for="floatingPassword">Endereço</label>
                    </div>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="editNumber" required>
                        <label for="floatingPassword">Nº</label>
                    </div>
                    <div class="form-floating">
                        <select class="form-control" name="state" id="editState" required>
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
                        <input type="text" class="form-control" id="editCity" required>
                        <label for="floatingPassword">Cidade</label>
                    </div>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="editNeighborhood" required>
                        <label for="floatingPassword">Bairro</label>
                    </div>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="editComplement" required>
                        <label for="floatingPassword">Complemento</label>
                    </div>
                    <div class="form-floating">
                        <input type="date" class="form-control" id="editBorn" required>
                        <label for="floatingPassword">Data Nascimento</label>
                    </div>
                </div>
            </div>
            <div class="modal-footer d-flex justify-content-between">
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalDelete">Deletar</button>
                <div>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" id="editUser" type="button" class="btn btn-primary">Salvar</button>
                </div>
            </div>
        </div>
    </div>
</div>
