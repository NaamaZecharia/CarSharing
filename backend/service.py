from flask import Flask, url_for
from markupsafe import escape
from flask import request
from dataAccess import dataAccess
from flask import Flask, jsonify, request, json
from flask_cors import CORS
import json


app = Flask(__name__)
app.debug = True
CORS(app)
print(__name__)



@app.route('/getAllUsers', methods=['GET', 'POST'])
def getAllUsers():
    data = dataAccess()
    results = data.getAllUsers()
    return  jsonify(results)

@app.route('/signin/<user>/<password>/<name>/<phone>/<is_owner>', methods=['GET', 'POST'])
def signin(user, password, name, phone, is_owner):
    data = dataAccess()
    print('servic - signin')
    return jsonify(data.signin(user, password, name, phone, is_owner))

    # data = dataAccess()
    # results = data.signin()
    # return  jsonify(results)


if __name__ == "__main__":
    app.run(port = 5000)