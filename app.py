from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    with open('visits.txt', 'a') as f:
        f.write("Visit recorded\n")
    return render_template('index.html')
