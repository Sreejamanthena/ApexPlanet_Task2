function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = taskText;

  const doneBtn = document.createElement("button");
  doneBtn.innerText = "✔️";
  doneBtn.title = "Mark as done";
  doneBtn.onclick = () => {
    li.classList.add("completed");
    setTimeout(() => li.remove(), 600);
  };

  li.appendChild(span);
  li.appendChild(doneBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";

  // 🎉 Trigger confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}


function toggleContact() {
  const contactForm = document.getElementById("contactFormWrapper");
  contactForm.style.display =
    contactForm.style.display === "block" ? "none" : "block";
}

function handleContactSubmit() {
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || !email.match(emailPattern)) {
    message.style.color = "red";
    message.innerText = "Please enter a valid name and email.";
    return false;
  }

  message.style.color = "green";
  message.innerText = "Submitted successfully!";
  setTimeout(() => {
    message.innerText = "";
    toggleContact(); // hide form
    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
  }, 1500);

  return false; // prevent real form submission
}
