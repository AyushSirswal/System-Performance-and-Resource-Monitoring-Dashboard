System Performance & Resource Monitoring Dashboard

📌 Overview

The System Performance & Resource Monitoring Dashboard is a web-based application that provides real-time insights into system performance, including CPU usage, memory consumption, and disk utilization. The dashboard presents data through interactive charts and animated percentage indicators, making it easier to monitor system health at a glance.

🚀 Features

Real-time Performance Tracking: Monitors CPU, RAM, and Disk usage in real-time.

Animated Percentage Indicators: Displays resource utilization in an intuitive circular progress format.

Interactive Graphs: Uses Chart.js to present smooth, animated charts.

Downloadable Reports: Exports system performance data for further analysis.

Modern UI/UX: Professionally designed interface with smooth animations and hover effects.

Responsive Design: Works seamlessly on desktop and mobile devices.

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript (Chart.js, animations)

Backend: Python (Flask for API endpoints)

Styling & Animations: CSS with custom hover effects and transitions

📂 Project Structure

📁 System-Performance-Dashboard
│── 📁 static
│   ├── 📄 styles.css          # Stylesheet for UI enhancements
│   ├── 📄 script.js           # JavaScript for fetching data & updating charts
│── 📁 templates
│   ├── 📄 index.html          # Frontend UI for the dashboard
│── 📄 app.py                  # Flask backend to fetch system stats
│── 📄 requirements.txt        # Required Python packages
│── 📄 README.md               # Project Documentation

🔧 Setup Instructions

1️⃣ Prerequisites

Ensure you have Python 3.x installed on your system.

2️⃣ Installation Steps

# Clone the repository
git clone https://github.com/yourusername/System-Performance-Dashboard.git
cd System-Performance-Dashboard

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app.py

3️⃣ Access the Dashboard

Once the server is running, open your browser and visit:

http://127.0.0.1:5000

📊 API Endpoint

The backend provides an API endpoint to fetch system stats.

GET /api/stats
Response: {"cpu_usage": 25.3, "memory_usage": 68.5, "disk_usage": 55.1}

📜 License

This project is licensed under the MIT License.

🙌 Acknowledgments

Chart.js for interactive graphs

Flask for lightweight backend handling

✨ Contributions & Feedback

Feel free to fork, star, and contribute to this project! Any feedback is appreciated. 🚀

