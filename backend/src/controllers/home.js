export default {
  getHomePage: (req, res) => {
    res.render("home", { title: "etherand" })
  }
}
