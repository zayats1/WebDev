
let gallery = document.getElementById("gallery") as HTMLDivElement
let images = gallery.getElementsByTagName("img") as HTMLCollection

for (let elem of images as any) {
  elem.addEventListener("click", () => {
    openFulscreen(elem)
  })
}

function openFulscreen(elem: any) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  }
}
