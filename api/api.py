import time
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/flask', methods=['GET'])
def index():
    return "Flask server"

@app.route('/test', methods=['GET', 'POST'])
def testfn():
    if request.method == 'GET':
        message = {'greeting': 'Hello from Flask'}
        return jsonify(message)

    if request.method == 'POST':
        print(request.get_json())  # parse as JSON
        return 'Sucesss', 200

if __name__ == "__main__":
    app.run(port=5000, debug=True)