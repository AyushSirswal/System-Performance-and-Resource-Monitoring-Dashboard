from flask import Flask, jsonify, render_template
import psutil
from flask_cors import CORS 


app = Flask(__name__)
CORS(app)  # Fix CORS issue

@app.route('/')
def index():
    return render_template('index.html')  # This renders index.html from templates folder

@app.route('/api/stats', methods=['GET'])
def get_stats():
    stats = {
        "cpu_usage": psutil.cpu_percent(interval=1),
        "memory_usage": psutil.virtual_memory().percent,
        "disk_usage": psutil.disk_usage('/').percent
    }
    print("📊 Sending Stats:", stats)  # Debugging Output
    return jsonify(stats)

if __name__ == '__main__':
    app.run(debug=True)
