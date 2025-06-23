from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    with open('visits.txt', 'a') as f:
        f.write("Visit recorded\n")
    return render_template('index.html')

@app.route('/skills')
def skills():
    return "<h2>Skills Coming Soon!</h2><p>Check back or post your own skill.</p>"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
