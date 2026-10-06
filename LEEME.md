# Reto: Debug del ciclo for

## Alcance del paquete

Esta es una base independiente para el ejercicio 4 descrito en JS2-RetoFor.pdf.
El enunciado pide continuar con la carpeta ejercicios_for utilizada en clase.
Como los archivos anteriores no se adjuntaron, este paquete no los incluye.
Conserva tus ejercicios anteriores: no reemplaces toda tu carpeta con esta base.

El diseño en estilos.css es opcional; el PDF no exige un estilo determinado.
El archivo videos.txt es una plantilla y NO contiene un video ni un enlace real.
Grabar, publicar el video y enviar la captura son pasos pendientes de tu entrega.

## Archivos

- index.html: página con un botón que llama a ejecutar(4).
- estilos.css: presentación de la página.
- script.js: ejecutar y listarImpares.
- videos.txt: espacio para el enlace real de tu video.
- LEEME.md: esta guía de uso y entrega.

No necesitas instalar dependencias, configurar un servidor ni usar npm.
Extrae el ZIP antes de abrir index.html.

## 1. Conserva tu carpeta y haz la primera subida a Git

Abre tu carpeta ejercicios_for en Visual Studio Code. Si comienzas de cero,
puedes usar la carpeta extraída de este paquete como base funcional.

El PDF exige un repositorio Git. GitHub es una opción para alojarlo, no un
servicio obligatorio indicado en la tarea. La tarea sí pide acceso público
al enlace del video; no especifica la visibilidad del repositorio.

En GitHub crea un repositorio llamado ejercicios_for. Si vas a subir una
carpeta local con los comandos siguientes, crea el repositorio vacío, sin
agregar README, licencia ni .gitignore desde GitHub. Da acceso al docente
según las indicaciones de tu clase.

Abre Terminal > Nueva terminal en Visual Studio Code y comprueba Git:

```bash
git --version
```

Si el comando no se reconoce, instala Git desde su sitio oficial y vuelve
a abrir Visual Studio Code. No necesitas ninguna versión específica para
los comandos básicos de esta guía.

Para una carpeta que todavía NO tiene repositorio Git ni remoto configurado:

```bash
git init
git config user.name "TU NOMBRE O ALIAS"
git config user.email "TU CORREO DE GIT"
git add .
git commit -m "Subir ejercicios iniciales del ciclo for"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/ejercicios_for.git
git push -u origin main
```

Sustituye los tres datos de ejemplo por los tuyos. Para no exponer tu correo
personal, puedes usar el correo de privacidad que muestra tu cuenta de GitHub.
Completa la autenticación que solicite GitHub; nunca guardes contraseñas ni
tokens dentro del repositorio. Revisa el contenido antes de usar git add .

Si ya tienes un repositorio con remoto, no vuelvas a añadir origin. Conserva
la configuración y rama que ya usas. Para subir cambios basta con git add .,
git commit y git push.

## 2. Agrega el ejercicio sin borrar los anteriores

### Para probar esta base independiente

Abre index.html en Chrome o Edge. Presiona F12 para abrir las herramientas
de desarrollo y selecciona Console / Consola. Pulsa Ejecutar ejercicio 4.

La consola debe mostrar, cada número en una línea:

```text
1
3
5
7
```

La salida requerida está en la consola, no en un cuadro de la página.
Cada clic ejecuta de nuevo la función, por lo que repetir el clic repetirá
los cuatro números. Puedes limpiar manualmente la consola entre pruebas.

### Para integrarlo en tu página de clase

1. Conserva tus HTML, CSS y JavaScript existentes.
2. Añade este botón dentro del body de tu HTML:

```html
<button type="button" onclick="ejecutar(4)">
    Ejecutar ejercicio 4
</button>
```

3. Copia solo la función listarImpares de script.js a tu JavaScript actual.
4. Agrega la opción 4 a la función ejecutar que ya tienes. No declares otra
   función ejecutar con el mismo nombre y no cambies los casos 1, 2 y 3.

Si tu función utiliza switch, añade este caso dentro de ese switch:

```javascript
case 4:
    listarImpares();
    break;
```

Si utiliza if / else if, añade una condición equivalente para la opción 4,
utilizando el nombre real de su parámetro y sin alterar las opciones previas.
El número enviado por el botón es 4, no la cadena "4".

No cargues el script.js de esta base además de otro archivo que ya defina
ejecutar: podría reemplazar la función que usan tus ejercicios anteriores.

## 3. Revisa cómo funciona el ciclo

```javascript
function listarImpares() {
    for (let i = 1; i <= 7; i = i + 2) {
        console.log(i);
    }
}
```

- let i = 1 inicializa la variable una sola vez, al empezar el ciclo.
- i <= 7 se comprueba antes de cada vuelta.
- console.log(i) imprime el valor de i cuando la condición es verdadera.
- i = i + 2 aumenta el valor en dos después de imprimir.

El recorrido es 1, 3, 5 y 7. Después de imprimir 7, i aumenta a 9. Como
9 <= 7 es falso, termina el ciclo y 9 no se imprime. Empezar en 1 y avanzar
de dos en dos evita los valores pares.

## 4. Ejecuta en modo debug

Los nombres de las pestañas pueden variar con el idioma del navegador.
Estas indicaciones son para las herramientas de desarrollo de Chrome o Edge.

1. Abre la página y las herramientas con F12.
2. Selecciona Sources / Fuentes (u Orígenes, según la traducción).
3. Busca script.js. En esta base, console.log(i); está en la línea 22.
   Si integraste el código en otro archivo, abre ese archivo y encuentra
   la misma instrucción; el número de línea será distinto.
4. Haz clic en el número de línea de console.log(i); para crear un punto
   de interrupción o breakpoint.
5. Pulsa Esc desde Sources para mostrar también el panel de la consola.
6. Regresa al botón de la página y haz clic una vez. La ejecución quedará
   detenida ANTES de imprimir el primer valor.
7. Revisa i en Scope / Ámbito. También puedes pasar el puntero sobre la
   variable. En la primera pausa su valor debe ser 1.
8. Usa F10 o el botón Step over / Paso a paso por procedimientos para
   avanzar. La primera ejecución de console.log(i) imprime el 1.
9. Continúa avanzando con F10. Observa las siguientes pausas con i igual a
   3, 5 y 7. Explica la condición y el incremento de dos en dos.
10. Avanza después de imprimir 7 y explica la comprobación final con 9,
    que hace falsa la condición. El ciclo termina sin imprimir 9.

El navegador puede agrupar la condición y el incremento en la misma línea
del for; no tiene por qué detenerse por separado en cada expresión.
Continúa hasta llegar de nuevo al cuerpo del ciclo. Al salir del ciclo,
i deja de estar disponible porque se declaró con let dentro del for.

Para recorrer también la llamada inicial, puedes poner un breakpoint en
listarImpares(); dentro de ejecutar y usar F11 (Step into / Entrar) para
entrar en la función. Es opcional: el breakpoint en console.log(i) basta
para observar el ciclo.

Si no se detiene, verifica que el breakpoint esté habilitado, que estés
abriendo el archivo correcto y que guardaste los cambios antes de recargar.

## 5. Graba el video con tu explicación

Oculta datos personales, cierra otras pestañas y evita mostrar notificaciones.
Acopla las herramientas de desarrollo a la ventana del navegador para que
el código, los valores de las variables y la consola se vean en la grabación.

Usa el grabador de pantalla que tengas disponible y activa el micrófono.
En Windows, Windows + Alt + R inicia o detiene la grabación cuando Xbox
Game Bar está habilitada y admite la ventana seleccionada. También puedes
usar otro grabador disponible en tu equipo. Prueba antes que capture el
navegador y tu voz correctamente.

Durante el video:

1. Muestra el botón y su llamada ejecutar(4).
2. Muestra que la opción 4 llama a listarImpares.
3. Explica las tres partes del for y la instrucción console.log(i).
4. Repite la depuración real con el breakpoint y F10.
5. Muestra la salida completa 1, 3, 5 y 7 al terminar.

El PDF no fija duración ni exige un programa concreto para grabar. Pide
explicar la ejecución paso a paso como en el video de clase, que no está
incluido en el material adjunto.

Guion de apoyo para explicar con tus palabras:

"El botón envía el número 4 a ejecutar. Esa opción llama a listarImpares.
El ciclo comienza con i igual a 1. Se verifica si i es menor o igual que 7.
Como es verdadero, se imprime 1. Después se suma 2 y se obtiene 3. Se vuelve
a comprobar la condición y se imprime 3. Se repite con 5 y con 7. Tras
imprimir 7, la variable aumenta a 9. La condición es falsa y el ciclo termina.
Por eso la consola muestra únicamente 1, 3, 5 y 7."

## 6. Publica el video y completa videos.txt

En Google Drive, o una plataforma equivalente, sube tu grabación y espera
a que se pueda reproducir. Abre sus opciones de compartir y habilita acceso
de lectura para cualquier persona que tenga el enlace. Los nombres de las
opciones pueden variar según el idioma y el tipo de cuenta.

Copia el enlace y compruébalo en una ventana privada sin iniciar sesión:
debe abrirse y permitir reproducir el video sin pedir autorización.

Si tu cuenta de la institución impide enlaces públicos, consulta al docente
o utiliza otra plataforma permitida por la tarea. No intentes evadir las
restricciones de la cuenta.

En videos.txt sustituye la línea PENDIENTE por tu enlace real. Puede quedar:

```text
Reto: Debug del ciclo for
Función: listarImpares

Enlace del video:
AQUI VA EL ENLACE REAL DE TU VIDEO
```

Ese texto es un ejemplo: no entregues el marcador en lugar de una dirección.
El PDF pide incluir el enlace; no exige subir el archivo de video al repositorio.

## 7. Sube los cambios finales y envía la captura

Guarda todos los archivos y, dentro de la carpeta del repositorio, ejecuta:

```bash
git status
git add .
git commit -m "Agregar listarImpares y enlace del video de depuracion"
git push
```

Abre el repositorio y comprueba que aparecen el código actualizado y
videos.txt con el enlace correcto.

Para la captura, vuelve a ejecutar con el breakpoint y detente, por ejemplo,
con i igual a 5, antes de ejecutar console.log(i). En ese momento la consola
ya debería mostrar 1 y 3. Incluye en la captura el código del for, la línea
detenida, el valor de i y la consola. Envía esa captura real al grupo de
WhatsApp que indique tu docente.

La captura debe demostrar depuración, no solo los cuatro números impresos.
Una imagen de esta base sin depurar no reemplaza la evidencia solicitada.

## Comprobación final

- Carpeta ejercicios_for subida a un repositorio Git, sin perder ejercicios previos.
- Función listarImpares y botón que invoca ejecutar(4).
- Salida por consola: 1, 3, 5, 7.
- Video real con explicación y ejecución en modo debug.
- Enlace del video accesible sin solicitar permiso.
- videos.txt con el enlace real dentro del repositorio.
- Cambios finales subidos y captura real enviada al grupo indicado.
