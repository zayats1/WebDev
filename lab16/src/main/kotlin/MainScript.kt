import kotlinx.browser.document
import org.w3c.dom.*


fun main() {
    val myForm = document.getElementById("my-form") as HTMLFormElement
    myForm.addEventListener("submit", {
        it.preventDefault()
        val name = document.getElementById("name") as HTMLInputElement
        console.log(name.value)

        val cars = document.getElementById("cars") as HTMLSelectElement
        val car = cars.selectedOptions[0] as HTMLOptionElement
        console.log(car.value)

        val yourWorstEnemies = document.getElementsByName("worst-enemy")
        for (i in 0 until yourWorstEnemies.length) {
            val enemy = yourWorstEnemies[i] as HTMLInputElement
            if (enemy.checked) {
                console.log(enemy.value)
            }
        }

        val yourVehicles = document.getElementsByName("vehicles")
        for (i in 0 until yourVehicles.length) {
            val yourVehicle = yourVehicles[i] as HTMLInputElement
            if (yourVehicle.checked) {
                console.log(yourVehicle.value)
            }
        }

        val yourOrientation = document.getElementById("orientation") as HTMLInputElement
        if (yourOrientation.checked) {
            console.log(yourOrientation.value)
        }

        val yourKissel = document.getElementById("kissel") as HTMLInputElement
        if (yourKissel.checked) {
            console.log(yourKissel.value)
        }
    })
}


