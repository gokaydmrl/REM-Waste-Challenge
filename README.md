### 🧑‍🎨 UI/UX Improvements
- 🎯 **Emojis** used throughout the interface to improve visual hierarchy and readability.
- 🎠 Replaced grid layout with an interactive **carousel** for better content flow.
- 🔘 Added **"Back"** and **"Continue"** buttons for smoother navigation.
- 🪟 Moved selected item information from the footer to a **modal** for focused visibility.
- 🔍 Implemented a **filter feature** for easier and faster search.
- 📂 Introduced an **expandable area** for enhanced task details.
- 🧭 Added **navigation bar** for:
  - Returning to home 🏠
  - Opening the main menu 📂
- 💅 Built with **pure CSS** (no frameworks) since it's a single-page app.
- 📱 **Fully responsive** across devices.

### 🧠 Architectural Decisions
- 🪝 **State Management**:
  - Prevented **prop drilling** by lifting shared state and using React context.
- ⚙️ **Axios Context**:
  - Centralized Axios instance using `createContext()` to easily inject headers (auth tokens, etc.) across the app.
- 📊 **Data Context**:
  - Created a global data context to make API data easily accessible from any component.
