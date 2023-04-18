<template>
  <div>
    <h1>Sign in</h1>
    <form @submit.prevent="login">
      <ErrorAlert :error-msg="authError" @clearError="clearError"/>
      <div>
        <label>
          <div>
            <input type="text" placeholder="Username" v-model="username"/>
          </div>
        </label>
        <label>
          <div>
            <input type="password" placeholder="Password" v-model="password"/>
          </div>
        </label>
      </div>
      <div>
        <button type="submit" :disabled="loading">
          <div :class="{loading: loading}">Sign in</div>
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{loading: loading}">
            <g fill="none" stroke-width="1.5" stroke-linecap="round" style="stroke: var(--icon-color);">
              <circle stroke-opacity=".2" cx="8" cy="8" r="6"></circle>
              <circle cx="8" cy="8" r="6"></circle>
            </g>
          </svg>
        </button>
        <RouterLink to="/forgot-password">Forgot your password?</RouterLink>
      </div>
    </form>
    <div>
      <p>Don’t have a SupaAuth account?</p>
      <RouterLink to="/register">
        <button>
          <div>Create new account</div>
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>

</script>