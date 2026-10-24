const usersContainer = document.getElementById("users-container");

async function loadUsers() {
    try {
        const response = await fetch("api/users.php");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const users = await response.json();

        if (!Array.isArray(users)) {
            throw new Error("API response is not an array");
        }

        if (users.length === 0) {
            usersContainer.textContent = "No users found.";
            return;
        }

        usersContainer.innerHTML = "";

        users.forEach((user) => {
            const card = document.createElement("article");
            card.className = "user-card";

            const avatar = document.createElement("div");
            avatar.className = "avatar";
            avatar.textContent = user.name?.charAt(0) || "?";

            const name = document.createElement("h3");
            name.textContent = user.name || "Unknown User";

            const email = document.createElement("p");
            email.className = "user-email";
            email.textContent = user.email || "No email available";

            const bio = document.createElement("p");
            bio.className = "user-bio";
            bio.textContent = user.bio || "No bio available";

            card.append(avatar, name, email, bio);
            usersContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading users:", error);

        usersContainer.textContent =
            "Unable to load users. Please try again later.";

        usersContainer.classList.add("error-message");
    }
}

loadUsers();