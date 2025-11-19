

// var btn = document.querySelector('button');
// var h1 = document.querySelector('h1');

// btn.addEventListener('click', function() {
//  setTimeout(function() {
//     h1.textContent = "Hello I am Sheriyan";
//  }, 2000);
// });


// =======
// var a = 0;
// setInterval(function() {
//     a++;
//     console.log(0);
// }, 2000);

// Program +
// var a= 0

// var int = setInterval(function() {
//     a++;
//     console.log(a); 
// }, 1000);

// setTimeout(function() {
//     clearInterval(int);
// }, 5000);



// index.js

// DOM elements
const inner = document.querySelector('.inner');
const percentText = document.querySelector('.bottom h2');
const downloadBtn = document.querySelector('.bottom button');

let intervalId = null;    // setInterval ka id (taaki clearInterval kiya ja sake)
let progress = 0;         // progress percentage (0-100)
let isDownloading = false;

function updateUI() {
  inner.style.width = progress + '%';
  percentText.textContent = Math.floor(progress) + '%';
}

// Simulate download progress using setInterval
function startDownload() {
  if (isDownloading) return; // double click se dobara start na ho
  isDownloading = true;
  downloadBtn.textContent = 'Downloading...';
  downloadBtn.disabled = true; // button disable during download

  // interval: har 150ms mein progress badhega
  intervalId = setInterval(() => {
    // progress ko thoda randomness denge taaki natural lage
    const step = Math.random() * 6 + 1; // 1 - 7% per tick approx
    progress += step;

    if (progress >= 100) {
      progress = 100;
      updateUI();

      // Jab 100% pahunch jaye to interval clear karo
      clearInterval(intervalId);
      intervalId = null;

      // setTimeout se thoda delay do (finalizing / extracting files jaise)
      setTimeout(() => {
        // Download complete UI changes
        downloadBtn.textContent = 'Open File';
        downloadBtn.disabled = false;
        isDownloading = false;

        // Optional: ek chhota animation (flash) show karwa sakte ho
        // inner.style.boxShadow = '0 0 12px rgba(76, 175, 80, 0.6)';
        // setTimeout(() => inner.style.boxShadow = 'none', 800);
      }, 700); // 700ms finalizing delay

      return;
    }

    // normal update
    updateUI();
  }, 150);
}

// Optional: reset progress (agar user chaahe to dobara download kare)
function resetDownload() {
  // agar download chal raha ho to clear it
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  progress = 0;
  updateUI();
  downloadBtn.textContent = 'Download';
  downloadBtn.disabled = false;
  isDownloading = false;
}

// Button click behavior:
// - Agar download complete hua aur button 'Open File' hai, to yahan aap file open ka logic daal sakte ho.
// - Agar normal state, to startDownload chal jaayega.
downloadBtn.addEventListener('click', (e) => {
  const text = downloadBtn.textContent.trim().toLowerCase();

  if (text === 'download') {
    // start simulated download
    startDownload();
  } else if (text === 'downloading...') {
    // agar tum chaho to "cancel" implement kar sakte ho:
    // yaha hum cancel karne ka option dete hain (reset)
    resetDownload();
  } else if (text === 'open file') {
    // file open action (demo): yahan koi real file open karne ka code daal sakte ho
    alert('File opened (demo).');
  }
});

// Initialize UI on load
updateUI();
