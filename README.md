# 🚮 Smart Bin Monitoring System (Safai Setu)

> Shaping a Sustainable Future through Smart Waste Management 🌱

---

## 📌 Problem Statement
Traditional waste collection systems operate on fixed schedules without real-time data, leading to:

- ❌ Overflowing bins in high-density areas  
- ❌ Unnecessary fuel consumption  
- ❌ Inefficient collection routes  
- ❌ Lack of accountability and tracking  

---

## 💡 Solution
A **Smart Bin Monitoring System** that uses IoT + real-time analytics to optimize waste collection.

- 📡 Detects bin fill levels using ultrasonic sensors  
- 🔄 Sends real-time data to backend  
- 🚛 Alerts workers for collection  
- 🗺️ Provides optimized routes  
- 📊 Tracks cleaning history  

---

## 🧠 System Architecture

### 🔌 Hardware Layer
- Ultrasonic Sensor → Measures bin fill level  
- ESP32 / Arduino → Sends data via WiFi  
- Solar Battery → Ensures energy efficiency  

---

### ⚙️ Backend Layer
- FastAPI server processes incoming data  
- Stores bin status, GPS, worker info  
- Route optimization logic (basic / extendable to AI)

---

### 🎨 Frontend Layer
- Admin Dashboard → Monitor all bins  
- Worker Interface → Assigned routes & actions  
- Role-based access (Admin / Worker)

---

## 🔄 Workflow

1. Sensor detects garbage level  
2. Data sent via ESP32 → Backend (JSON format)  
3. Backend updates database  
4. Full bins trigger alerts  
5. Worker receives optimized route  
6. Worker collects → status updated  

---

## 🚀 Features

- 📡 Real-time bin monitoring  
- 🚨 Smart alerts for full bins  
- 🗺️ Route optimization (fuel-efficient)  
- 👨‍💼 Admin dashboard  
- 🚛 Worker panel  
- 📊 Cleaning history tracking  

---

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS

### Backend
- FastAPI (Python)

### Database
- PostgreSQL

### Hardware
- ESP32 / Arduino  
- Ultrasonic Sensor  
- Solar-powered battery  

---

## 📂 Project Structure

## 📱 How to Use the Application

Follow these steps to use the Smart Bin Monitoring System:

---

### 🔐 1. Login / Signup
- Open the application in your browser
- Create a new account using the Signup page  
  OR  
- Login using your credentials

---

### 🏠 2. Dashboard (Bin Monitoring)
- After login, you will see the Dashboard
- It displays all smart bins with their current status:
  - 🟢 **OK** → Bin is empty or low
  - 🟡 **MEDIUM** → Bin is partially filled
  - 🔴 **FULL** → Bin needs immediate collection
- Click **Navigate** to view bin location (future integration with maps)

---

### 🚨 3. Alerts Section
- View bins that are **FULL or critical**
- Helps workers prioritize waste collection
- Reduces overflow and improves efficiency

---

### 👤 4. Profile Section
- View user details
- Future scope: edit profile & manage settings

---

### 🔄 5. Navigation
Use the bottom navigation bar to switch between:
- Dashboard
- Alerts
- Profile

---

### 🌐 Running the App Locally

1. Start the frontend: 
2. Open in browser:

---

### 📱 Access on Mobile (Same WiFi)

1. Run:
2. Open on phone:
