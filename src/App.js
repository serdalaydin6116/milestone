import AppRouter from "./app-router/AppRouter";
import { AuthProvider } from "./contexts/AuthContext";
import { BlogProvider } from "./contexts/BlogContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <AppRouter />
        <ToastContainer />
      </BlogProvider>
    </AuthProvider>
  );
}

export default App;

