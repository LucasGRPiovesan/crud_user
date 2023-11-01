export class FormatHelper
{
    static CPF(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    static CEP(cep) {
        return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
    }

    static phone(phone) {
        return phone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }

    static date(date) {
        return moment(date).format("DD/MM/YYYY [às] HH:mm");
    }
}