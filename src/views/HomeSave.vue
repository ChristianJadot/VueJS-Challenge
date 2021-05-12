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

    <aside class="shopping-cart">
      <h2>Panier d'achat : {{ shoppingCart }} articles</h2>
    </aside>
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
          name: "Croissant",
          image: {
            source: "./images/croissant.jpg",
            alt: "Un croissant",
          },
          inStock: true,
          quantity: 1,
          price: 2.99,
        },
        {
          name: "Baguette de pain",
          image: {
            source: "./images/french-baguette.jpeg",
            alt: "Quatre baguettes de pain",
          },
          inStock: true,
          quantity: 1,
          price: 3.99,
        },
        {
          name: "Éclair",
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
  methods: {
    addToShoppingCart(payload) {
      this.shoppingCart += payload.amount;
    },
  },
  beforeCreate() {
    console.log("Je ne suis pas encore créé");
  },
  created() {
    console.log("Je suis créé !");
  },
  beforeMount() {
    console.log("Je vais bientôt être monté sur le DOM!");
  },
  mounted() {
    console.log("Je suis monté sur le DOM!");
  },
  beforeDestroy() {
    console.log("Je suis sur le point de disparaître du DOM !");
  },
  destroyed() {
    console.log("Je suis supprimé");
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
