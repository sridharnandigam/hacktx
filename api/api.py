import time
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

import retrieveimage

app = Flask(__name__)
CORS(app)

@app.route('/flask', methods=['GET'])
def index():
    return "Flask server"

@app.route('/test', methods=['GET', 'POST'])
def testfn():
    if request.method == 'GET':
        message = {'greeting': 'Hello from Flask'}
        response = jsonify(message)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    if request.method == 'POST':
        print(request.get_json())  # parse as JSON
        return 'Sucesss', 200

@app.route('/getimage', methods=['POST'])
def getImage():
    if request.method == 'POST':
        savedAt = retrieveimage.retrieveObject(request.form['object'])
        message = {'image': savedAt}
        return jsonify(message)


if __name__ == "__main__":
    app.run(port=5000, debug=True)