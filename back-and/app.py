from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"]= 'sqlite:///site.db'
db =SQLAlchemy(app)
CORS(app)

@app.route("/login", methods=['POST'])
def login():
    dados = request.get_json()

    print(dados)

    usuario_validado = {
        "nome": "nome",
        "senha": "senha"
    }
    print("Dados recebidos:", dados["nome"], dados["senha"])
    print("Dados de teste:", usuario_validado["nome"], usuario_validado["senha"])

    if dados["nome"] == usuario_validado["nome"] and dados["senha"] == usuario_validado["senha"]:
    # ... o que fazer se o login estiver correto
        return jsonify({"mensagem": "Dados recebidos com sucesso!"})
    else:
    # ... o que fazer se o login estiver errado
        return jsonify({"mensagem": "Nome de usuario ou senha incorretos"})
    
    
@app.route("/cadastro", methods =["POST"])
def cadastro():
    dados_cadastro = request.get_json()