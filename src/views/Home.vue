<template>
  <div id="home" class="home">
    <h1>{{ restaurantName }}</h1>
    <p class="description">
      Bienvenue dans notre resto-bar "{{ restaurantName }}"!<br>
      Nous sommes réputés pour nos cocktails et notre délicieuse cuisine.<br>
      Faites vous plaisir avec le lunch de midi ou avec en prenant un apéro avec le succulent repas du soir.<br>
      Et vous verrez qu'il est difficile de ne pas revenir chez "{{ restaurantName }}".
    </p>

    <section class="menu">
      <h2>Présentation</h2>
      <MenuItem
        v-for="item in simpleMenu"
        @updateShoppingCart="addToShoppingCart"
        :key="item.name"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :quantity="item.quantity"
        :inStock="item.inStock"
      />
    </section>

    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";

export default {
  name: "Home",
  components: {
    MenuItem,
  },
  data() {
    return {
      restaurantName: "BeCool Cooking",
      shoppingCart: 0,
      simpleMenu: [
        {
          name: "Bruxelles",
          image: {
            source: "./images/croissant.jpg",
            alt: "Un croissant",
          },
          inStock: true,
          quantity: 1,
          price: 2.99,
        },
        {
          name: "Gent",
          image: {
            source: "./images/french-baguette.jpeg",
            alt: "Quatre baguettes de pain",
          },
          inStock: true,
          quantity: 1,
          price: 3.99,
        },
        {
          name: "Liège",
          image: {
            source: "./images/eclair.jpg",
            alt: "Éclair au chocolat",
          },
          inStock: false,
          quantity: 1,
          price: 4.99,
        },
      ],
    };
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();

      return `Copyright ${this.restaurantName} ${currentYear}`;
    },
  },
};
</script>

<style>
.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shopping-cart {
  position: absolute;
  right: 30px;
  top: 0;
}
.footer {
  text-align: center;
  font-style: italic;
}
</style>
