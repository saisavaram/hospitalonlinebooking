// Simple login functionality with hardcoded user
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "hospital.html";
      } else {
        alert("Invalid email or password");
      }
    });

    const signupLink = document.getElementById("signupLink");
    if (signupLink) {
      signupLink.addEventListener("click", () => {
        window.location.href = "signup.html";
      });
    }
  }

  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find(u => u.email === email);
      if (existingUser) {
        alert("User already exists");
        return;
      }

      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful. Please login.");
      window.location.href = "index.html";
    });
  }
});

// Booking Logic
function bookAppointment(doctorName, hospitalName, slot) {
  const patientName = prompt("Enter Patient Name:");
  const patientAge = prompt("Enter Age:");
  const gender = prompt("Enter Gender (M/F/O):");

  if (!patientName || !patientAge || !gender) {
    alert("All details are required.");
    return;
  }

  const appointment = {
    hospital: hospitalName,
    doctor: doctorName,
    slot,
    patientName,
    patientAge,
    gender,
    bookedAt: new Date().toLocaleString()
  };

  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.push(appointment);
  localStorage.setItem("appointments", JSON.stringify(appointments));
  alert("Appointment booked successfully!");
}
