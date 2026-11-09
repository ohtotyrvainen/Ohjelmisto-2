from flask import Flask, jsonify
app = Flask(__name__)


@app.route("/hello/<name>")
def hello(name):
    return jsonify({"message": f"Hello {name}"})

@app.route("/leap_year/<int:year>")
def is_leap_year(year):
    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
        return jsonify({"Vuosi": f"{year} on karkausvuosi"})
    else:
        return jsonify({"Vuosi": f"{year} ei ole karkausvuosi"})

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)