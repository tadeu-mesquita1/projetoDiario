from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route("/login", methods=['POST'])
def login():

    return jsonify({"mensagem": "Dados recebidos com sucesso!"})
