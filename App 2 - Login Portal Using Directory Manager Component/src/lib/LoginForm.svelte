<script lang="ts">
  let username = "";
  let password = "";
  let showLoginForm = true;
  let isInvalidCredentials = false;

  const validateUser = (e) => {
    e.preventDefault();
    if (username === "testuser" && password === "123456") {
      displayInputForm();
      showLoginForm = false;
    } else {
      isInvalidCredentials = true;
    }
  };

  const handleUsernameChange = (e) => {
    username = e.target.value;
  };

  const handlePasswordChange = (e) => {
    password = e.target.value;
  };

  const displayInputForm = () => {
    const inputFormContainer = document.getElementById("input-form-container");
    console.log(inputFormContainer);
    const inputFormTag = document.createElement("input-form");
    inputFormContainer.appendChild(inputFormTag);
  };
</script>

<main style={`display: ${!showLoginForm ? "none" : "inherit"}`}>
  <div class="login-form-container">
    <form class="login-form" on:submit={validateUser}>
      <h2 class="pb-2">Welcome to Directory Manager</h2>
      <div class="input-row">
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          value={username}
          on:change={handleUsernameChange}
          required={true}
        />
      </div>
      <div class="input-row">
        <input
          type="text"
          id="password"
          placeholder="Enter Password"
          value={password}
          on:change={handlePasswordChange}
          required={true}
        />
      </div>

      {#if isInvalidCredentials}
        <span style="color: red; font-size: 14px">credentials are invalid</span>
      {/if}

      <div class="submit-row">
        <button class="btn" type="submit">Submit</button>
      </div>
    </form>
  </div>
</main>

{#if !showLoginForm}
  <div style="display: flex; justify-content: end; padding: 1rem">
    <h3>Hi, {username}</h3>
  </div>
{/if}
