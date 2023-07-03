import csv
import pandas as pd

cabecalho = ["NOME","E-MAIL","SENHA","CPF","CELULAR","DT_NASC","RUA","NACIONALIDADE","CIDADE","BAIRRO","CEP"]

nome = input('nome ')
email = input('e-mail ')
senha = input('senha ')
cpf = input('cpf ')
celular = input('celular ')
dt_nasc = input('dt_nasc ')
rua = input('rua ')
nacionalidade = input('nacionalidade ')
cidade = input('cidade ')
bairro = input('bairro ')
cep = input('cep ')

cadastro_pessoa = nome + '_cadastro'
valor = [nome,email,senha,cpf,celular,dt_nasc,rua,nacionalidade,cidade,bairro,cep]

dff = pd.DataFrame([valor], columns=cabecalho)
dff.to_csv(f'{cadastro_pessoa}.csv', index=False)
