function algoritmo() {

    var radio = parseFloat(document.formulario1.radio.value);
    var area = (Math.PI * radio * radio).toFixed(2);

    alert(`El resultado del área es: ${area}`);

}
