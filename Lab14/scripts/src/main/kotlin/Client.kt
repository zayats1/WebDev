import kotlinx.browser.document
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLImageElement

const val PHOTOS_COUNT = 3;

fun showPhoto(index:Int) {
    val currentPhoto = document.getElementById("current-photo") as HTMLImageElement
    currentPhoto.src = "pictures/$index.jpg"
}

fun main() {
    val button = document.getElementById("show-next-photo") as HTMLButtonElement

    var currentPhotoIndex = 1;

    button.addEventListener("click", {
        currentPhotoIndex++;

        if (currentPhotoIndex > PHOTOS_COUNT) {
            currentPhotoIndex = 1;
        }

        document.title = "hello"
        console.log("button was clicked")
        showPhoto(currentPhotoIndex)
    })
}

