export default function TestimonialSlider() {
  const testimonials = [
    { id: 1, text: "Reversed my diabetes in 90 days!", name: "Ramesh, 58 – Hyderabad" },
    { id: 2, text: "Lost 18kg without pills", name: "Anita, 34 – Gachibowli" },
    { id: 3, text: "PCOS gone – now pregnant!", name: "Sneha, 29 – Telangana" },
  ];

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      {testimonials.map(t => (
        <div key={t.id} className="bg-green-50 p-6 rounded-lg mb-4">
          <p className="italic text-gray-800">"{t.text}"</p>
          <p className="text-gray-700 mt-2 font-medium">— {t.name}</p>
        </div>
      ))}
    </div>
  );
}

