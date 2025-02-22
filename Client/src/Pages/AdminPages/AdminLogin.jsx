import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const { admin, Adminlogin } = useContext(AuthContext);

    useEffect(() => {
        if (admin) {
            navigate("/admin/admindashboard"); // Redirect if already logged in
        }
    }, [admin, navigate]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Adminlogin(form);
            setForm({ email: "", password: "" });
            navigate("/admin/admindashboard"); // Redirect to dashboard
        } catch (error) {
            setMessage(error.response?.data?.message || "Error logging in.");
        }
    };

    return (
        <div className=" w-full h-screen bg-[#1E2A38]">
            <div className="max-w-md mx-auto w-full h-screen pt-60 flex items-center flex-col">
                <h2 className="text-2xl font-bold mb-4 text-white">
                    Admin Please Login here
                </h2>
                {message && <p>{String(message)}</p>}
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="p-2 w-full border rounded text-white"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="p-2 w-full border rounded text-white"
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 text-white p-2 w-full rounded"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
