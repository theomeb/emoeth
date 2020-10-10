from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/yo')
def say_my_name():
    return f"Hey {request.args.get('name', 'there')} !"


@app.route('/test')
def test():
    return "Moin'!"


if __name__ == '__main__':
    app.run()
