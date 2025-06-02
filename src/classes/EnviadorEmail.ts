interface EnviadorDeEmail {
  enviar(destino: string, mensagem: string): void;
}

class ServicoDeEmail implements EnviadorDeEmail {
  enviar(destino: string, mensagem: string): void {
    console.log(`Email enviado para ${destino}, ${mensagem}`);
  }
}

class CadastroDeUsuario {
  private ServicoDeEmail: EnviadorDeEmail;
  constructor(ServicoDeEmail: EnviadorDeEmail) {
    this.ServicoDeEmail = ServicoDeEmail;
  }

  cadastrar(nome: string, email: string) {
    console.log(`Usuário: ${nome} cadastrado!`);
    this.ServicoDeEmail.enviar(email, "Bem vindo(a)!");
  }
}

const user = new CadastroDeUsuario(new ServicoDeEmail());
user.cadastrar("Ana", "ana@gmail.com");
