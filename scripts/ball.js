/*----------------------------------------------------
                    Trabajo Final

Asignatura: Grafos y Lenguajes Formales
Sección:    413
Profesor:   Michael Cristi
Integrantes:    - Luis Caro
                - Jorge Gallardo
                - Matías Urbina
                - Felipe Vera
----------------------------------------------------*/
class Ball{
    //----Constructor----
	constructor(x, y) {
		this.x = x
		this.y = y
		//----¿Fue visitado?----
		this.visited = false
	}
    draw(pixelSize){
        let i = this.x * pixelSize
		let j = this.y * pixelSize

		noStroke()
		fill(0,255,0)
		rect(i, j, pixelSize, pixelSize)

		stroke(0)
		strokeWeight(4)
		noFill()
    }
}