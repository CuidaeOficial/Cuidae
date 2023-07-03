from flask import Flask, request
import pandas as pd

app = Flask(__name__)

@app.route('/salvar', methods=['POST'])
def salvar():
    dados = request.get_json()
    nome = dados['nome']
    email = dados['email']
    senha = dados['senha']
    cpf = dados['cpf']
    dt_nasc = dados['dt_nasc']
    celular = dados['celular']
    rua = dados['rua']
    nacionalidade = dados['nacionalidade']
    cidade = dados['cidade']
    bairro = dados['bairro']
    cep = dados['cep']

    cabecalho = ["NOME", "E-MAIL", "SENHA", "CPF", "CELULAR", "DT_NASC", "RUA", "NACIONALIDADE", "CIDADE", "BAIRRO", "CEP"]
    cadastro_pessoa = nome + '_cadastro'
    valor = [nome, email,senha,cpf,celular,dt_nasc,rua,nacionalidade,cidade,bairro,cep]     
    dff = pd.DataFrame([valor], columns=cabecalho)
    dff.to_csv(f'{cadastro_pessoa}.csv', index=False)

    return '', 200

if __name__ == '__main__':
    app.run()