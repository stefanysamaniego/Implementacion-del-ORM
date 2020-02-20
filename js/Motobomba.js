class Motobomba {
    constructor(id, capacidad, estado = false) {
        this.id = id;
        this.capacidad = capacidad;
        this.estado = estado;
    }
    prender() {
        this.estado = true;
    }
    apagar() {
        this.estado = false;
    }
    getEstado() {
        return this.estado;
    }
    toString() {
        if (this.estado == true) {
            return (this.estado + " " + "esta prendido")
        }
        if (this.estado == false) {
            return (this.estado + " " + "estado prendido")
        }
    }
    guardar(){
        var recu= document.getElementById('id').value;
        var recu1=document.getElementById('capacidad').value;
        this.id=recu
        this.capacidad=recu1
        console.log(this.id)
        console.log(this.capacidad)
        var img=[];
        img.push("camion.jpg")
        
    }
    
}


   