export class ValidateHelper
{
    static CPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, ''); 
        
        if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false;
        
        var sum = 0;
        var remainder;
        
        for (var i = 1; i <= 9; i++) {
            sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        
        remainder = (sum * 10) % 11;
        
        if (remainder === 10 || remainder === 11) {
            remainder = 0;
        }
        
        if (remainder !== parseInt(cpf.substring(9, 10))) {
            return false;
        }
        
        sum = 0;
        
        for (i = 1; i <= 10; i++) {
            sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        
        remainder = (sum * 10) % 11;
        
        if (remainder === 10 || remainder === 11) {
            remainder = 0;
        }
        
        if (remainder !== parseInt(cpf.substring(10, 11))) {
            return false;
        }
        
        return true;
    }

    static CEP(cep) {

        cep = cep.replace(/\D/g, '');

        if (cep.length !== 8) {
          return false;
        }
      
        return /^[0-9]{5}-?[0-9]{3}$/.test(cep);
    }

    static phone(phone) {
        
        phone = phone.replace(/\D/g, '').trim();
    
        if (phone.length < 10 || phone.length > 11) {
            return false;
        }
    
        return /^[1-9]{2}[0-9]{4,5}[0-9]{4}$/.test(phone);
    }

    static date(date) {
        return moment(date) > moment();
    }
}