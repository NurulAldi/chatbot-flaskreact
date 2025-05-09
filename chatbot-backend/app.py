from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def index():
    return "Chatbot Flask is running!"

@app.route("/chat", methods=["GET", "POST"])
def chat():
    if request.method == "POST":
        data = request.get_json()
        user_message = data.get("message", "")
        # dummy answer
        return jsonify({"reply": f"Anda mengatakan: {user_message}"})
    else :
        return "Silahkan gunakan metode POST untuk chat.", 200

if __name__ == "__main__":
    app.run(debug=True)