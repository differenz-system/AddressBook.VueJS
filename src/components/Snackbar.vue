<script>
export default {
  name: "Snackbar",
  data() {
    return {
      message: "default message"
    }
  },
  methods: {
    openSnackbar(msg) {
      this.message = msg
      let x = document.getElementById("snackbar")
      x.className = "show"
      x.innerHTML = this.message
      setTimeout(function() {
        x.className = x.className.replace("show", "")
      }, 750)
    }
  }
}
</script>