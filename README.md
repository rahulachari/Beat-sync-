# 🎵 Beat Sync

> **Real-time synchronized music playback — across all your devices, in perfect harmony.**

---

## 📌 Overview

**Beat Sync** is a web-based music synchronization platform that allows multiple devices to play the same MP3 track simultaneously — with millisecond-level precision. Whether you're syncing music across a room, a party, or a local network, Beat Sync keeps every device locked in together.

Built with a lightweight **Flask** backend and a fully responsive UI, Beat Sync handles song browsing, media controls, and real-time sync — all in one seamless experience.

---

## ✨ Features

- 🔄 **Real-Time Multi-Device Sync** — Synchronized MP3 playback across all connected devices on the same network
- ⏱️ **Timestamp-Based Precision** — Low-latency sync logic using precise server-side timestamps for consistent playback alignment
- 🎧 **Song Browsing UI** — Clean, intuitive interface to browse and select tracks
- ▶️ **Full Media Controls** — Play, pause, seek, and volume controls with smooth, responsive interactions
- 📱 **Responsive Design** — Works seamlessly on desktop, tablet, and mobile browsers
- ⚡ **Optimized Streaming** — Reduced playback inconsistencies through efficient multi-device audio delivery

---

## 🛠️ Tech Stack

| Layer        | Technology          |
|--------------|---------------------|
| Backend      | Python, Flask       |
| Audio        | HTML5 Audio API     |
| Frontend     | HTML, CSS, JavaScript |
| Sync Logic   | Timestamp-based real-time synchronization |
| Transport    | HTTP / Flask streaming |

---

## 📁 Project Structure

```
Beat-sync/
├── app.py                  # Flask application entry point
├── static/
│   ├── css/
│   │   └── style.css       # Responsive UI styles
│   ├── js/
│   │   └── sync.js         # Client-side sync logic
│   └── songs/              # MP3 files directory
├── templates/
│   └── index.html          # Main UI template
├── requirements.txt        # Python dependencies
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- A modern web browser

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/rahulachari/Beat-sync-.git
cd Beat-sync-
```

**2. Create and activate a virtual environment** *(recommended)*

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

**3. Install dependencies**

```bash
pip install -r requirements.txt
```

**4. Add your MP3 files**

Place your `.mp3` files inside the `static/songs/` directory.

**5. Run the server**

```bash
python app.py
```

The app will start on `http://0.0.0.0:5000` by default.

---

## 🌐 Multi-Device Usage

1. Ensure all devices are connected to the **same local network (Wi-Fi)**
2. Find your machine's local IP address:
   - **Windows:** `ipconfig` → look for IPv4 Address
   - **macOS/Linux:** `ifconfig` or `ip a`
3. On each device, open a browser and navigate to:
   ```
   http://<your-local-ip>:5000
   ```
4. Press **Play** on any device — all connected clients will sync automatically.

---

## 🔧 How Sync Works

Beat Sync uses a **server-authoritative timestamp model**:

1. The Flask server maintains the current playback position and state.
2. When a client connects or requests sync, the server responds with the current track, timestamp, and playback status.
3. Each client calculates the offset between server time and local time to align playback precisely.
4. Periodic sync checks correct any drift, keeping all devices in lockstep.

This approach minimizes latency and eliminates playback desynchronization even as new devices join mid-session.

---

## 🔮 Roadmap

- [ ] WebSocket-based push sync for even lower latency
- [ ] Playlist queue management
- [ ] User rooms / session isolation
- [ ] Volume normalization across tracks
- [ ] Docker support for easy deployment

---

## 🤝 Contributing

Contributions are welcome! To get started:

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "Add: your feature description"
git push origin feature/your-feature-name
# Open a Pull Request
```

Please follow clean commit message conventions and test your changes before submitting.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use, modify, and distribute.

---

## 👨‍💻 Author

**Rahul Achari**  
GitHub: [github.com/rahulachari](https://github.com/rahulachari)

---

> *"Music is better together — Beat Sync makes that possible."*
