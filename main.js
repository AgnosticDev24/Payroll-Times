        function checkPassword() {
            const password = document.getElementById('passwordInput').value;
            const errorMessage = document.getElementById('errorMessage');

            const regex = /^P\d{8}$/;

            if (regex.test(password)) {
                document.getElementById('passwordForm').style.display = 'none';
                document.getElementById('content').style.display = 'block';
            } else {
                errorMessage.style.display = 'block';
            }
        }