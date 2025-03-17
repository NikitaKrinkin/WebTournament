from flask import Flask, render_template


app = Flask(__name__)

"""
Ниже -- пример функции для добавления новой страницы на сайт
@app.route('/') -- в качестве аргумента указываете путь, на котором доступна ваша страница
для вывода html-файла, используйте функцию render_template
"""
@app.route('/')
def index():
    return render_template('home.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7000)
