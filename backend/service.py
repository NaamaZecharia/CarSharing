from flask import Flask, url_for
from markupsafe import escape
from flask import request
from dataAccess import dataAccess
from flask import Flask, jsonify, request, json

app = Flask(__name__)


@app.route('/getAllUsers', methods=['GET', 'POST'])
def getAllUsers():
    data = dataAccess()
    results = data.getAllUsers()
    return  jsonify(results)



if __name__ == "__main__":
    app.run(port = 5000)