const app = Vue.createApp({
  data() {
    return {
      apiUrl: "/boolean_php/php-dischi-json/API/get_records.php",
      recordList: [],
    };
  },
  methods: {
    fetchRecords(apiUrl) {
      axios.get(apiUrl).then((response) => {
        this.recordList = response.data;
      });
    },
  },

  created() {
    this.fetchRecords(this.apiUrl);
  },
});
app.mount("#app");
