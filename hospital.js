// Dummy hospital data
const hospitals = [
  {
    id: 1,
    name: "Sunrise Multispeciality Hospital",
    address: "123 Green Street, Hyderabad",
    logo: "https://via.placeholder.com/80x80.png?text=Sunrise",
    doctors: [
      { name: "Dr. Priya Sharma", specialty: "Cardiologist", timings: "10:00 AM - 1:00 PM" },
      { name: "Dr. Rajiv Verma", specialty: "Neurologist", timings: "2:00 PM - 5:00 PM" }
    ]
  },
  {
    id: 2,
    name: "Rainbow Childcare Clinic",
    address: "456 Pink Avenue, Secunderabad",
    logo: "https://via.placeholder.com/80x80.png?text=Rainbow",
    doctors: [
      { name: "Dr. Sneha Reddy", specialty: "Pediatrician", timings: "9:00 AM - 12:00 PM" },
      { name: "Dr. Vikram Rao", specialty: "Orthopedic", timings: "1:00 PM - 4:00 PM" }
    ]
  }
];

function loadHospitals() {
  const container = document.getElementById("hospitalContainer");
  hospitals.forEach(hospital => {
    const card = document.createElement("div");
    card.className = "hospital-card";
    card.innerHTML = `
      <img src="${hospital.logo}" alt="Logo" style="width:60px;height:60px;border-radius:50%;display:block;margin:0 auto 10px;">
      <h3 style="text-align:center;">${hospital.name}</h3>
      <p style="text-align:center;color:#666;">${hospital.address}</p>
    `;
    card.onclick = () => showDoctors(hospital.doctors);
    container.appendChild(card);
  });
}

function showDoctors(doctors) {
  const doctorList = document.getElementById("doctorList");
  doctorList.innerHTML = "";
  doctors.forEach((doc, index) => {
    const docCard = document.createElement("div");
    docCard.className = "doctor-card";
    docCard.innerHTML = `
      <h4>${doc.name}</h4>
      <p><strong>Specialty:</strong> ${doc.specialty}</p>
      <p><strong>Timings:</strong> ${doc.timings}</p>
      <button class="book-btn" onclick="bookDoctor('${doc.name}', '${doc.specialty}', '${doc.timings}')">Book Appointment</button>
    `;
    doctorList.appendChild(docCard);
  });
}

function bookDoctor(name, specialty, time) {
  // Store in localStorage for use in appointment page
  localStorage.setItem("selectedDoctor", JSON.stringify({ name, specialty, time }));
  alert(`Selected Dr. ${name}. Proceeding to appointment page.`);
  window.location.href = "appointments.html";
}

window.onload = loadHospitals;
