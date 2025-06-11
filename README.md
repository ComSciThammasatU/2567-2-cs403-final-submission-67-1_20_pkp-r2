[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/w8H8oomW)

**รหัสโครงงาน:** 67-1_20_pkp-r2

**ชื่อโครงงาน (ไทย):** แพลตฟอร์มการจัดการงานและการทำงานร่วมกันแบบครบวงจร

**Project Title (Eng):** WEB TOOL FOR TASK AND COLLABORATION MANAGEMENT

**อาจารย์ที่ปรึกษาโครงงาน:** อ.ดร.ภัคพร เสาร์ฝั้น

**ผู้จัดทำโครงงาน:**
1. นางสาวณัฏฐ์ฐิรา อโรชพิวัฒน์ 6209610333 natthira.aro@dome.tu.ac.th
2. นางสาวภาวินี แสวานี 6209680781 phavinee.sae@dome.tu.ac.th

# 🐝 Web tool for task and collaboration managment - Hivemind Project
> Hivemind is a full-featured web application designed to help individuals and teams manage their work, studies, and collaboration efficiently. It combines **dashboard, task management**, **calendar planning**, **real-time collaboration**, and **note-taking** into a single modern platform.

## ✨ Key Features

- **Task Manager** – Create, update, and organize tasks with priorities and deadlines by kanban style
- **Calendar Integration** – Also create task and Daily/Weekly/Monthly views with drag-and-drop support
- **Team Collaboration** – Assign task to collaborators
- **Note-taking** – Notes linked to specific tasks for better context
- **Progress Dashboard** – See task status (To-do, In Progress, Done) and overall productivity
- **Authentication** – Secure login/signup with Firebase and signup with google
- **Multilingual Support** – English/Thai language toggle with `i18n`

## 🧩 Screenshots / UI
<details>
<summary>📸 Tap to see more (6 pics)</summary>
   
- **Log-in/ Sign-up**
![image](https://github.com/user-attachments/assets/a3b28ab5-d586-4f11-9b9a-3e49adc7d277)
![image](https://github.com/user-attachments/assets/5df6b0dc-ca84-4a50-a505-fb912cf159a5)

- **Focus Page**
![image](https://github.com/user-attachments/assets/02e2554a-1eb2-41ea-9f57-254a54dc0394)
- **Dashboard**
![image](https://github.com/user-attachments/assets/da19c382-48f3-4770-b1f8-d61a3631a6a5)
-  **Task Organization**
![image](https://github.com/user-attachments/assets/b2ad6d88-2385-4c32-aa95-5234c5002959)
- **My Calendar**
  <img width="1440" alt="image" src="https://github.com/user-attachments/assets/ce476470-74be-4808-90ab-1b0921809ac3" />
- **Note**
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/7b68f85a-fa2f-4f59-985f-6ac5d672454f" />
</details>

## 🛠 Installation & Setup
```
# 1. Clone the repository
git clone https://github.com/ComSciThammasatU/2567-2-cs403-final-submission-67-1_20_pkp-r2.git

# 2. Navigate into the project directory
cd hivemind-project

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev

# 5. Open in browser
http://localhost:3000
```

## 🎞️ Demo
🔗 https://github.com/ComSciThammasatU/2567-2-cs403-final-submission-67-1_20_pkp-r2/tree/main/demo

## 🚀 Built With
- Next.js – The React framework for production.
- Tailwind CSS – A utility-first CSS framework.
- TypeScript – Strongly typed JavaScript.
- Database/Authentication - Firebase.

## 📁 Project Files Directory
```
2567-2-cs403-final-submission-67-1_20_pkp-r2
├── README.md
├── demo
│   ├── 67-2_CS403_67-1_20_pkp-r2_demo.mp4
├── final_reports
│   ├── 67-2_CS403_67-1_20_pkp-r2.pdf
│   ├── 67-2_CS403_67-1_20_pkp-r2_abstract_en.txt
│   ├── 67-2_CS403_67-1_20_pkp-r2_abstract_th.txt
└── hivemind-project
    ├── app
        ├── [locale] # organize frontend pages, database
        ├── components # Reusable React components (e.g., card, navbar,sidebar..)
        ├── context # React Context that provides user data to all components
        ├── lib # Utilities/helpers (firebase.ts)
         ...
    ├── hooks # Custom React hooks
    ├── i18n # Internationalization config
    ├── messages # Translation JSON files
    ├── public # Static assets (images, fonts, favicon)
    ...
```
## 📄 Document
🔗 https://github.com/ComSciThammasatU/2567-2-cs403-final-submission-67-1_20_pkp-r2/tree/main/final_reports

## 📞 Contact
For questions or support, please contact:
- Email: phavinee.sae@dome.tu.ac.th OR natthira.aro@dome.tu.ac.th
