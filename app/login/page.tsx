export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-6 rounded-lg shadow space-y-4">

        <h1 className="text-2xl font-bold">Login</h1>

        <input
          className="w-full border p-2 rounded"
          placeholder="Email"
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Password"
          type="password"
        />

        <button className="w-full bg-black text-white p-2 rounded">
          Sign In
        </button>

      </div>
    </div>
  );
}