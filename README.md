### 🧑‍🎨 UI/UX Improvements
- 🎯 **Emojis** used throughout the interface to improve visual hierarchy and readability.
- 🎠 Replaced grid layout with an interactive **carousel** for better content flow.
- 🔘 Added **"Back"** and **"Continue"** buttons for smoother navigation.
- 🪟 Moved selected item information from the footer to a **modal** for focused visibility.
- 🔍 Implemented a **filter features** for easier and faster search.
- 📂 Introduced an **expandable area** for enhanced item details.
- 🧭 Added **navigation bar** for:
  - Returning to home 🏠
  - Opening the main menu 📂
- 💅 Built with **pure CSS** (no frameworks) since it's a single-page app.
- 📱 **Fully responsive** across devices.
- ⏳ Added **loading skeletons** to provide visual feedback and show users what to expect while data loads.

### 🧠 Architectural Decisions
- 🪝 **State Management**:
  - Prevented **prop drilling** by lifting shared state and using React context.
- ⚙️ **Axios Context**:
  - Centralized Axios instance to easily inject headers (auth tokens, etc.) across the app.
- 📊 **Data Context**:
  - Created a global data context to make API data easily accessible from any component.
- ♻️ **Reusable Hooks**:
  - Built custom hooks like `useScreenSize` to reuse logic across components efficiently.
  - Added **data-fetching hooks with caching** to avoid redundant API calls and improve performance.
- 🧠 **Performance Optimizations**:
  - Used `React.memo` to prevent unnecessary re-renders and keep components lightweight.
