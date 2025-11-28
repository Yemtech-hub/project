// Initialize Supabase
const supabaseClient= supabase.createClient(
  "https://qgzaoldxkwlsowiepytk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnemFvbGR4a3dsc293aWVweXRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNTY5ODAsImV4cCI6MjA3OTgzMjk4MH0.Qfk3BydWR5p5l_xK-tRxCFx8OEJ2M10TIAdwoiuWwMM"
);

document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form inputs
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("psw").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const accountType = document.getElementById("account_type").value;

  // Password check
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Sign up user with email + password
  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username,
        account_type: accountType
      }
    }
  });

  if (error) {
    alert("Signup failed: " + error.message);
    return;
  }

  alert("Account created successfully! Check your email to verify your account.");
});
