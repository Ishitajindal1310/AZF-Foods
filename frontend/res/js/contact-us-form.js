document.getElementById("contactForm").addEventListener("submit", async (e) => {
	e.preventDefault();

	const formData = {
		name: document.getElementById("name").value,
		phone: document.getElementById("phone").value,
		date: document.getElementById("date").value,
		time: document.getElementById("time").value,
		product: document.getElementById("product").value,
		location: document.getElementById("Location").value,
		notes: document.getElementById("notes").value,
	};

	try {
		const response = await fetch("http://127.0.0.1:8000/submit-form", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		const result = await response.json();

		if (response.ok) {
			alert("Form submitted successfully!");
			// this.reset();
		} else {
			alert(`Error: ${result.error || "Failed to submit form"}`);
		}
	} catch (error) {
		console.error("Error:", error);
		alert("An error occurred while submitting the form.");
	}
});
