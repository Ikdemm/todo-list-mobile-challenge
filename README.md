# Todo List Mobile Challenge 🚀

Congratulations on making it through the first challenge! 🎉 This second challenge will be very similar but it is going to be a mobile version. It is designed to help you get familiar with the technologies we use, notably React Native. You'll be building a simple **Todo List App** in four stages:

## 🚀 Technologies to Use

- **React Native** (Mobile development)
- **Expo** (Development environment)
- **TypeScript** (Static typing)
- **React Hook Form** (Form management)
- **Zod** (Schema validation)
- **Tailwind CSS** (Styling)
- **React Context API** (State management)

## 📌 Stages

### **1️⃣ Basic Mode: React Native & TypeScript**

**Goal:** Get something functional using only **React** and **TypeScript**.

✅ Tasks:

- [ ] Set up your local development environment following the [Expo Documentation](https://docs.expo.dev/get-started/set-up-your-environment/).
- [ ] Set up a new **React Native** project using **Expo** following the [Expo Documentation](https://docs.expo.dev/tutorial/create-your-first-app/).
- [ ] Create a simple todo list component.
- [ ] Allow users to add and remove tasks.
- [ ] Store tasks in **React state**.
- [ ] Display the list of tasks.
- [ ] Mark tasks as completed.

---

### **2️⃣ Advanced Mode: React Hook Form & Zod**

**Goal:** Improve form handling using **React Hook Form** & **Zod**.

✅ Tasks:

- [ ] Replace the input field with a **React Hook Form**-controlled form.
- [ ] Use **Zod** for form validation:
  - [ ] Task name should not be empty.
  - [ ] Task should be at least **3 characters long**.
- [ ] Display validation messages.
- [ ] Ensure submission only happens if validation passes.

---

### **3️⃣ Extra Mode: Tailwind CSS**

**Goal:** Style the todo list using **Tailwind CSS**.

✅ Tasks:

- [ ] Add basic **responsive styling** to the UI.
- [ ] Highlight completed tasks.
- [ ] Improve form appearance.
- [ ] Use **hover effects**, **padding**, and **margin** for better spacing.

---

### **4️⃣ Nightmare Mode: React Context API**

**Goal:** Implement global state management using **React Context API**.

✅ Tasks:

- [ ] Create a **context provider** to manage tasks globally.
- [ ] Use **useContext** in components to access tasks.
- [ ] Ensure tasks persist across different components.
- [ ] Implement actions like **add, remove, and toggle completion** using context.
- [ ] Improve performance with **useMemo and useCallback** where necessary.

---

## 📂 Project Structure (Suggested)

```
/todo-list
 ├── src/
 │   ├── components/
 │   │   ├── TodoItem.tsx
 │   │   ├── TodoList.tsx
 │   │   ├── TodoForm.tsx
 │   ├── context/
 │   │   ├── TodoContext.tsx
 │   ├── App.tsx
 │   ├── main.tsx
 ├── public/
 ├── package.json
 ├── tsconfig.json
 ├── tailwind.config.js
 ├── vite.config.js
```

## 🛠 Setup & Installation

```sh
git clone [repo-url]
cd todo-list
pnpm install
pnpm run dev
```

PS: You can use `npm` or `yarn` if you prefer. But we recommend using `pnpm` for faster installs.

## ✅ Submission Guidelines

- [ ] Each task will be managed through the **Trello Board**.
- [ ] Pick a ticket from the board, work on it, and push your changes.
- [ ] **Open a Pull Request (PR)** for every completed ticket.
- [ ] Assign a reviewer to your PR and wait for approval before merging.
- [ ] Follow best practices for commit messages and PR descriptions.

Happy coding! 🚀
