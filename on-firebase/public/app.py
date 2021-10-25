from flask import Flask,render_template
app = Flask(__name__)

@app.route('/')
def top():
    html=render_template("top.html")
    return html

@app.route("/signup")
def signup():
    html=render_template("signup.html")
    return html

@app.route("/signin")
def signin():
    html=render_template("signin.html")
    return html


if __name__ == "__main__":
    app.run(debug=True)