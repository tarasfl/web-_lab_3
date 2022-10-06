from flask import Flask, render_template, request, redirect, url_for, flash

from flask_sqlalchemy import SQLAlchemy
import uuid

app = Flask(__name__) 
db = SQLAlchemy()

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.sqlite3'
app.config['SECRET_KEY'] = "ss"

db.init_app(app)


class Book(db.Model):
    id = db.Column(db.String(20), primary_key = True)
    amount_of_pages = db.Column(db.Integer)
    author = db.Column(db.String(100))
    price = db.Column(db.Float)

    def __init__(self, id, amount_of_pages, author, price):
        self.amount_of_pages = amount_of_pages
        self.id = id
        self.author = author
        self.price = price


@app.route("/create.html")
def render_creator():
    return render_template('create.html')

@app.route("/edit.html/<string:id>")
def render_editor(id):
    books = Book.query.filter_by(id = id).all()
    return render_template('edit.html', books=books)

@app.route('/', methods = ['GET'])
def Index():
    books = Book.query.all()
    return render_template('index.html', books = books)

@app.route("/create.html/insert", methods = ['POST'])
def insert():
    if request.method == "POST":
        print(request)
        amount_of_pages = int(request.form['amount_of_pages'])
        author = str(request.form['author'])
        price = float(request.form['price'])
        id = str(uuid.uuid4())
        book = Book(id=id, amount_of_pages= amount_of_pages, author= author, price= price)
        db.session.add(book) 

        db.session.commit()
        return redirect(url_for('Index'))

@app.route('/delete/<string:id>', methods = ['GET'])
def delete(id):
    book = Book.query.filter_by(id = id).first()
    db.session.delete(book)
    db.session.commit()
    return redirect(url_for('Index'))

@app.route('/edit.html/update',methods=['POST','GET'])
def update():

    if request.method == 'POST':
        amount_of_pages = request.form['amount_of_pages']
        author = request.form['author']
        price = request.form['price']
        id = request.form['book_id']
        book = Book.query.filter_by(id = id).first()
        book.amount_of_pages = amount_of_pages
        book.author = author
        book.price = price
        db.session.commit()
        return redirect(url_for('Index'))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.secret_key = 'super secret key'
    app.debug = True
    app.run(host = '0.0.0.0', port = 5000)