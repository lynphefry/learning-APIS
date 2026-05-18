fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    console.log(data);
});

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {

    data.forEach(user => {

        document.getElementById("users").innerHTML += `
            <p>${user.name}</p>
        `;

    });

});



$(document).ready(function () {

    // Hide loading text first
    $("#loading").hide();

    // Function to fetch users
    function fetchUsers() {

        $("#loading").show();

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())

        .then(users => {

            $("#loading").hide();

            // Clear container before adding users
            $("#userContainer").html("");

            users.forEach(user => {

                $("#userContainer").append(`

                    <div class="col-md-4 mb-4">

                        <div class="card shadow p-3 h-100">

                            <h4>${user.name}</h4>

                            <p><strong>Email:</strong> ${user.email}</p>

                            <p><strong>Phone:</strong> ${user.phone}</p>

                            <p><strong>City:</strong> ${user.address.city}</p>

                            <button class="btn btn-danger w-100">
                                View Profile
                            </button>

                        </div>

                    </div>

                `);

            });

        })

        .catch(error => {

            $("#loading").html("Failed to load users");

            console.log(error);

        });

    }

    // Run function
    fetchUsers();

    // Hide cards
    $("#hideBtn").click(function () {

        $("#userContainer").slideUp();

    });

    // Show cards
    $("#showBtn").click(function () {

        $("#userContainer").slideDown();

    });

});
