export default function Settings() {
  return (
    <div className="p-10 space-y-6">

      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="max-w-md space-y-4">

        <input
          className="border p-2 w-full rounded"
          placeholder="Name"
        />

        <input
          className="border p-2 w-full rounded"
          placeholder="Email"
        />

        <button className="bg-black text-white p-2 rounded">
          Save Changes
        </button>

      </div>

    </div>
  );
}