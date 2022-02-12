<template>
  <div class="pt-16">
    <div class="w-full py-8 md:py-6 bg-gray-200">
      <div class="max-w-90 w-full mx-auto text-md sm:text-xs">
        <div class="flex flex-wrap md:flex-nowrap items-center justify-between">
          <div class="relative flex-shrink-0 w-full md:w-auto mb-8 md:mb-0">
            <nuxt-link
              to="/"
              class="block outline-none w-24 whitespace-nowrap"
              exact
            >
              &#169; fly-tirol.com
            </nuxt-link>
          </div>
          <div class="flex flex-wrap sm:flex-nowrap justify-between w-full">
            <div class="flex flex-wrap w-full md:justify-center mb-8 sm:mb-0">
              <a
                href="mailto:info@fly-tirol.com"
                class="underline whitespace-nowrap"
              >
                info@fly-tirol.com
              </a>
              <a
                href="tel:00436766422088"
                class="underline ml-8 sm:ml-4 md:ml-6 whitespace-nowrap"
              >
                +43 676 6422088
              </a>
              <span
                class="hidden lg:block underline ml-8 sm:ml-4 md:ml-6 whitespace-nowrap"
              >
                Bergliftstraße 22, 6363 Westendorf
              </span>
            </div>
            <div class="flex w-full sm:w-auto sm:ml-4">
              <nuxt-link to="/dsgvo" class="underline">
                <span>DSGVO</span>
              </nuxt-link>
              <nuxt-link to="/impressum" class="underline ml-8 sm:ml-4 md:ml-6">
                <span>Impressum</span>
              </nuxt-link>
              <a
                href="https://www.kitzbueheler-alpen.com/de/kam/corona.html"
                target="_blank"
                class="underline ml-8 sm:ml-4 md:ml-6"
                rel="noopener noreferrer"
              >
                COVID-19
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
