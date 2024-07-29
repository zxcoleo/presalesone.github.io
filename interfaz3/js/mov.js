document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    // Define CSS keyframes for falling and rotating animations
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes falling {
            to { top: ${window.innerHeight + 500}px; }
        }
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styleSheet);

    // Select the existing image element from HTML
    const originalImg = document.getElementById('juice-box');

    // Function to create and animate a juice box
    function createAndAnimateJuiceBox() {
        // Clone the original image element
        const img = originalImg.cloneNode(true);
        
        img.style.display = 'block'; // Ensure it's visible
        img.style.position = 'fixed';
        img.style.maxWidth = '50px';
        img.style.height = 'auto';
        img.style.zIndex = '15';
        img.style.pointerEvents = 'none';

        // Generate a random starting position
        const startX = Math.random() * window.innerWidth;
        img.style.left = `${startX}px`;

        // Adjust initial top position to start further off-screen
        img.style.top = '-150px'; // Start further above the screen

        // Append the cloned image to the body
        body.appendChild(img);

        // Add animation for falling and rotating with random durations
        const fallingDuration = 4 + Math.random() * 2; // between 4 and 6 seconds
        const rotateDuration = 5 + Math.random(); // between 5 and 6 seconds
        img.style.animation = `falling ${fallingDuration}s linear forwards, rotate ${rotateDuration}s linear infinite`;

        // Remove the cloned image after it has fallen out of view to clean up DOM
        setTimeout(() => {
            img.remove();
        }, fallingDuration * 1000); // Match the timeout to the falling duration
    }

    // Create initial set of juice boxes
    for (let i = 0; i < 9; i++) {
        createAndAnimateJuiceBox();
    }

    // Continuously create new juice boxes at random intervals
    setInterval(createAndAnimateJuiceBox, 1000); // Adjust interval as needed
});



  // Lista de URLs de imágenes

  document.addEventListener("DOMContentLoaded", function() {
    var index = 0; // Índice de la imagen actual
    var images = document.querySelectorAll('.side-image'); // Obtener todas las imágenes

    function changeImage() {
      images[index].style.display = 'none'; // Ocultar la imagen actual
      index = (index + 1) % images.length; // Cambiar al siguiente índice circularmente
      images[index].style.display = 'block'; // Mostrar la siguiente imagen
    }

    setInterval(changeImage, 2000); // Cambiar cada 3 segundos (3000 milisegundos)
  });









  document.addEventListener('DOMContentLoaded', () => {
    function getRandomColor() {
        const colors = [
// Rojo Mate a Naranja Mate
'linear-gradient(90deg, rgba(204, 51, 51, 1) 0%, rgba(255, 153, 51, 1) 100%)',  

// Naranja Mate a Verde Suave
'linear-gradient(90deg, rgba(255, 153, 51, 1) 0%, rgba(102, 153, 51, 1) 100%)',

// Verde Suave a Azul Pastel
'linear-gradient(90deg, rgba(102, 153, 51, 1) 0%, rgba(51, 153, 255, 1) 100%)',

// Azul Pastel a Violeta Suave
'linear-gradient(90deg, rgba(51, 153, 255, 1) 0%, rgba(153, 102, 204, 1) 100%)',

// Violeta Suave a Rosa Suave
'linear-gradient(90deg, rgba(153, 102, 204, 1) 0%, rgba(255, 182, 193, 1) 100%)',

// Rosa Suave a Rojo Mate
'linear-gradient(90deg, rgba(255, 182, 193, 1) 0%, rgba(204, 51, 51, 1) 100%)',

// Rojo Mate a Cian Suave
'linear-gradient(90deg, rgba(204, 51, 51, 1) 0%, rgba(102, 255, 255, 1) 100%)',

// Cian Suave a Verde Suave
'linear-gradient(90deg, rgba(102, 255, 255, 1) 0%, rgba(102, 153, 51, 1) 100%)',

// Verde Suave a Naranja Mate
'linear-gradient(90deg, rgba(102, 153, 51, 1) 0%, rgba(255, 153, 51, 1) 100%)',

// Naranja Mate a Violeta Suave
'linear-gradient(90deg, rgba(255, 153, 51, 1) 0%, rgba(153, 102, 204, 1) 100%)',

        ];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    // Seleccionar el primer elemento con la clase .purchase-interface
    const purchaseInterfaces = document.querySelectorAll('.purchase-interface');
    if (purchaseInterfaces.length > 0) {
        // Cambiar el fondo de cada elemento con la clase .purchase-interface
        purchaseInterfaces.forEach(element => {
            element.style.background = getRandomColor();
        });
    } else {
        console.error('Elemento con la clase "purchase-interface" no encontrado.');
    }
});







// Función para preparar el enlace según el botón presionado
function prepareLink(buttonId) {
    var baseUrl = 'https://cwallet.com/t/';
    var uniqueCode = ''; // Aquí irá el código único según el botón

    switch (buttonId) {
        case 'btn1':
            uniqueCode = 'W6OP76ZJ';
            break;
        case 'btn2':
            uniqueCode = 'DTTA4KSV';
            break;
        case 'btn3':
            uniqueCode = 'QDIVJ8RO';
            break;
        case 'btn4':
            uniqueCode = 'XZT827YC';
            break;
        case 'btn5':
            uniqueCode = 'DV4CVJV2';
            break;
        case 'btn6':
            uniqueCode = 'LS4BMMSF';
            break;
        case 'btn7':
            uniqueCode = 'DXZ3SB13';
            break;
        default:
            console.error('Button ID not recognized');
            return;
    }

    return baseUrl + uniqueCode;
}

// Función para abrir el enlace preparado
function openPreparedLink() {
    var link = prepareLink(selectedButtonId); // selectedButtonId debe ser una variable global que mantenga el último botón seleccionado
    if (link) {
        window.open(link, '_blank');
    } else {
        console.error('No link prepared');
    }
}

// Función para seleccionar el botón y almacenar su ID
function selectTab(button) {
    // Deseleccionar todos los botones primero
    var buttons = document.getElementsByClassName('btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
    
    // Seleccionar el botón clicado
    button.classList.add('selected');
    
    selectedButtonId = button.id;
}
