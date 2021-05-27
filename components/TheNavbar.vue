<template>
  <div class="container mx-auto bg-blue-400 p-5">
    <nav class="flex justify-between">
      <div>
        <NuxtLink to="/">Logo</NuxtLink>
      </div>
      <ul class="flex flex-row">
        <li class="pr-5">
          <NuxtLink to="/tandemfliegen">Tandemfliegen</NuxtLink>
        </li>
        <li class="pr-5"><NuxtLink to="/ausbildung">Ausbildung</NuxtLink></li>
        <li class="pr-5"><NuxtLink to="/team">Team</NuxtLink></li>
        <li><NuxtLink to="/kontakt">Kontakt</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>
