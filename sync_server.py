# sync_server.py
from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*", async_mode="threading")

@app.route('/')
def index():
    return render_template('client.html')

@socketio.on('connect')
def on_connect():
    print('Client connected')

@socketio.on('play_audio')
def play_audio():
    emit('play_now', broadcast=True)

if __name__ == '__main__':
    socketio.run(app, host='192.168.29.35', port=8080, allow_unsafe_werkzeug=True)
