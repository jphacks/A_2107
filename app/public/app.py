from flask import Flask,render_template
from werkzeug.utils import HTMLBuilder
import firebase
db=firebase.initialize()

app = Flask(__name__)

@app.route('/')
def top():
    title="トップ"
    page="top"
    html=render_template("top.html",title=title,page=page)
    return html

@app.route("/signup")
def signup():
    sign=False
    title="サインアップ"
    html=render_template("signup.html",title=title,sign=sign)
    return html

@app.route("/signin")
def signin():
    sign=False
    title="サインイン"
    html=render_template("signin.html",title=title,sign=sign)
    return html

@app.route("/userpage/<username>")
def userpage(username):
    title="＠検索"
    list=[]
    array=["tag1","tag2","tag3","tag4","tag5"]
    docs =db.collection("article").where('username', '==', username).stream()
    for doc in docs:
        list.append(doc.to_dict())
    html=render_template("userpage.html",list=list,title=title,array=array)
    return html

@app.route("/search/<content>")
def searchtag(content):
    title="＃検索"
    html=render_template("searchtag.html",title=title)
    return html

@app.route("/makearticle")
def makearticle():
    title="投稿"
    sign=False
    html=render_template("makearticle.html",title=title,sign=sign)
    return html

@app.route("/index")
def index():
    title="index"
    html=render_template("index.html",title=title)
    return html

@app.route("/fitway")
def fitway():
    title="fitWayについて"
    html=render_template("about_fitWay.html",title=title)
    return html

@app.route("/article/<articleID>")
def article(articleID):
    title="記事"
    doc =db.collection("article").document(articleID).get()
    if doc.exists:
        article=doc.to_dict()
    html=render_template("article.html",title=title,article=article)
    return html


if __name__ == "__main__":
    app.run(debug=True)