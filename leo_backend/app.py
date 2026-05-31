from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Flask Backend Running"

@app.route('/submit', methods=['GET', 'POST'])
def submit():

    if request.method == 'GET':
        return jsonify({
            "message": "Submit endpoint is working. Use POST to send data."
        })

    name = request.form.get('name')
    email = request.form.get('email')

    return jsonify({
        "status": "success",
        "name": name,
        "email": email
    })
@app.route('/process', methods=['GET', 'POST'])
def process():

    if request.method == 'GET':
        return "Process endpoint is working"

    name = request.form.get('name')
    email = request.form.get('email')

    return f"""
    <h2>Form Submitted Successfully</h2>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    """

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)