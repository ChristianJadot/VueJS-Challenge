<template>
  <div class="contact">
    <h2>Contactez nous</h2>
    <p>Adresse : {{ address }}</p>
    <p>Téléphone : {{ phone }}</p>
    <p>Email : {{ email }}</p>
    <p>Horaires :</p>
    <ul>
      <li>L-V: 06:00 à 16:00</li>
      <li>Samedi: 07:00 à 14:00</li>
      <li>Dimanche: 07:00 à 12:00</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
			adresse: "Rue à la Folle Cuisine 9, 1000 Bruxelles",
			telephone: "+32 2 999 99 99",
			email: "info@becool.com",
    };
  },
};
</script>

