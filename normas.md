## Normas del ejercicio

- El ejercicio debe ser capaz de generar un password de la logitud que le establezcamos con los parámetros de los checkboxes.

- Cada checkbox incluirá los caracteres que tendrá nuestro password, es OBLIGATORIO que al menos haya uno seleccionado.

- Si sólo tenemos un checkbox seleccionado, el password se generará únicamente con ese tipo de caracteres, y si tenemos 2 o más se irán mezclando aleatoriamente.

- En la parte de STRENGTH tenemos 5 valores posibles:
  - TOO SHORT: Este valor aparecerá siempre que el password tenga 5 o menos caracteres.
- Estos valores sólo se aplican a partir de 6 caracteres.

  - TOO WEAK: Sólo hay un checkbox seleccionado.
  - WEAK: Hay dos checkbox seleccionados.
  - MEDIUM: Hay tres checkbox seleccionados.
  - STRENGTH: Los cuatro checkbox están marcados.

- El botón SÓLO se podrá pulsar cuando la longitud sea mayor de 5 y haya al menos un checkbox seleccionado.

## Pistas y pasos a seguir

- RECORDAD que existen arrays y objetos y que podéis guardar información dentro para después reutilizarla.

- Crear las 2 cajas iniciales
- Poner los textos
- Sincronizar el length del nuevo password con el input range
- Conseguir que se genere un string de esa longitud al pulsar el botón y se escriba en el primer input.
- Guardar los cuatro checkbox y que al hacer click en el botón te diga por consola cuáles has seleccionado.

## Principios Importantes para la creación de aplicaciones.

- Las funciones deben tener UNA ÚNICA responsabilidad, Es mejor tener 5 funciones con 2 líneas cada una que tener una sola función que se encargue de 5 tareas distintas.
