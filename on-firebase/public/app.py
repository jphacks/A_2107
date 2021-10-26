from flask import Flask,render_template
import firebase
db=firebase.initialize()

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

@app.route("/userpage/<uid>")
def userpage(uid):
    list=[]
    docs =db.collection("article").where('username', '==', uid).stream()
    for doc in docs:
        list.append(doc.to_dict())
    html=render_template("serchtag.html",list=list)
    return html

@app.route("/serch/<content>")
def serchtag(content):
    list=[]
    for i in range(5):
        docs =db.collection("article").where(f'tag{str(i+1)}', '==', content).stream()
        for doc in docs:
            list.append(doc.to_dict())
    html=render_template("serchtag.html",list=list)
    return html

@app.route("/makearticle")
def makearticle():
    html=render_template("makearticle.html")
    return html


if __name__ == "__main__":
    app.run(debug=True)