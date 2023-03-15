const app = Vue.createApp({
  data() {
    return {
      apiUrl: "/boolean_php/php-dischi-json/API/get_records.php",
      recordList: [],
      tabContent: {},
      showTab: false,
    };
  },
  methods: {
    fetchRecords(apiUrl) {
      axios.get(apiUrl).then((response) => {
        this.recordList = response.data;
      });
    },

    showDetails(record) {
      this.showTab = true;
      this.tabContent = record;
    },
  },

  created() {
    this.fetchRecords(this.apiUrl);
  },
});
app.mount("#app");
