from flask import Flask,render_template
app = Flask(__name__)

@app.route('/')
def top():
    return render_template("top.html")

@app.route('/signup')
def signup():
    return render_template("signUp.html")

@app.route('/signin')
def signin():
    return render_template("signIn.html")

if __name__ == "__main__":
    app.run(debug=True)