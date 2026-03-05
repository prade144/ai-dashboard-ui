import Navbar from "../../components/navbar";

export default function Dashboard() {

  const cards = [
    { title: "Total Users", value: "1,245" },
    { title: "Revenue", value: "$12,430" },
    { title: "Active Sessions", value: "324" },
    { title: "Conversion Rate", value: "4.2%" },
  ];

  return (
    <div className="space-y-6">

      <Navbar />

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        {cards.map((card) => (

          <div
            key={card.title}
            className="bg-white rounded-xl shadow p-6 hover:shadow-md transition"
          >
            <p className="text-gray-500">
              {card.title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {card.value}
            </h2>

          </div>

        ))}

      </div>

    </div>
  );
}