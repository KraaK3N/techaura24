from flask import Flask, render_template, request
from flask_cors import CORS
app = Flask(__name__)

CORS(app)

@app.route("/")
def index():
    return render_template("landing.html")

@app.route("/events")
def events():
    return render_template("events.html")

@app.route("/gallery")
def gallery():
    return render_template("gallery.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/test")
def test():
    return render_template("test1.html")

if __name__ == "__main__":
    app.run()