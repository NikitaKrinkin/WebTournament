from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('home.html')


@app.route('/year-1945-1968/')
def year():
    return render_template('Y_1945_1968.html')


@app.route('/about/')
def about():
    return render_template('about.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7000)
