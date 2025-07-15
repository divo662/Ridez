import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SESSION_KEY = "user_session";

const Account = () => {
  const [user, setUser] = useState<any>(null);
  const [form, setForm] = useState({ username: "", password: "" });
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem(SESSION_KEY);
    setUser(stored ? JSON.parse(stored) : null);
    if (stored) {
      navigate("/");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo, just save username
    localStorage.setItem(SESSION_KEY, JSON.stringify({ username: form.username }));
    setUser({ username: form.username });
    navigate("/");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo, just save username
    localStorage.setItem(SESSION_KEY, JSON.stringify({ username: form.username }));
    setUser({ username: form.username });
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  if (user) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.username}!</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h1 className="text-3xl font-bold mb-8 text-center">{isRegister ? "Register" : "Login"}</h1>
      <form onSubmit={isRegister ? handleRegister : handleLogin} className="space-y-6">
        <Input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full">{isRegister ? "Register" : "Login"}</Button>
      </form>
      <div className="text-center mt-4">
        <Button variant="link" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
        </Button>
      </div>
    </div>
  );
};

export default Account; 