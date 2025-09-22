from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route("/login", methods=['POST'])
def login():
    dados = request.get_json()

    print(dados)

    return jsonify({"mensagem": "Dados recebidos com sucesso!"})