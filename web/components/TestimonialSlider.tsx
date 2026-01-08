'use client';

export default function TestimonialSlider() {
  const testimonials = [
    { 
      id: 1, 
      text: "Reversed my diabetes in 90 days!", 
      name: "Ramesh, 58 – Hyderabad", 
      photo: "/images/testimonials/ramesh.jpg.jpg",
      gender: "male"
    },
    { 
      id: 2, 
      text: "Lost 18kg without pills", 
      name: "Anita, 34 – Gachibowli", 
      photo: "/images/testimonials/anita.jpg.png",
      gender: "female"
    },
    { 
      id: 3, 
      text: "PCOS gone – now pregnant!", 
      name: "Sneha, 29 – Telangana", 
      photo: "/images/testimonials/sneha.jpg.jpg",
      gender: "female"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      {testimonials.map(t => (
        <div key={t.id} className="bg-green-50 p-6 rounded-lg mb-4 flex gap-4 items-start">
          {/* Photo placeholder - replace with actual photos */}
          <div className="flex-shrink-0">
            <img 
              src={t.photo} 
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-green-300 shadow-md"
              onError={(e) => {
                // Fallback to gender-appropriate avatar if image doesn't exist
                const name = t.name.split(',')[0].trim();
                const gender = t.gender || 'male';
                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=10b981&color=fff&size=80&bold=true`;
              }}
            />
          </div>
          <div className="flex-1">
            <p className="italic text-gray-800 mb-2">"{t.text}"</p>
            <p className="text-gray-700 font-medium">— {t.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

