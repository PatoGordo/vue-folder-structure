export default `
  <nav class="app-navbar">
    <h1 @click="$router.push('/')">VueCleanCode</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
`;
