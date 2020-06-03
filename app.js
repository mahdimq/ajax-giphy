//  API Key: KgVlcl4mO2h8IhXaPUsUN2Y2BFKlonmY
const getImage = async (search) => {
  const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=KgVlcl4mO2h8IhXaPUsUN2Y2BFKlonmY&limit=25`)
  const randIndex = Math.floor(Math.random() * (res.data.data).length)
  const urls = res.data.data[ randIndex ].images.original.url
  const images = $("<img>").attr({ src: urls })
  $(images).appendTo(".col")
}

// form logic
$('#search-form').submit((e) => {
  e.preventDefault()
  $(".btn").on("click", () => {
    getImage($("#search").val())
    $("#search").val("")
  })
})

// delete all images
$(".delete-btn").on("click", () => {
  $('.col').empty()
})