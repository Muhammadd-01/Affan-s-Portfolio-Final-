const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
        name,
        email,
        message
    };

    try {
        const res = await fetch("https://server-4z1oylqgw-muhammadd-01s-projects.vercel.app/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.ok) {
            alert("Message sent successfully!");
        } else {
            alert("Error: " + data.error);
        }
    } catch (error) {
        alert("Something went wrong. Please try again.");
    }
};
