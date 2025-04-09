from flask import Flask, render_template


app = Flask(__name__)


@app.route('/year-1945-1968/')
def index():
    return render_template('Y_1945_1968.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7000)
