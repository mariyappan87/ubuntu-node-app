const http = require('http');

const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Mariyappan DevOps App 🚀</title>
        <style>
            body {
                text-align: center;
                font-family: Arial, sans-serif;
                margin-top: 100px;
                transition: background-color 0.5s ease;
            }
            h1 {
                color: #333;
            }
            button {
                padding: 15px 30px;
                font-size: 18px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                background-color: #007BFF;
                color: white;
            }
            button:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <h1>🚀 Mariyappan DevOps Interactive App</h1>
        <p>Click the button to change background color</p>
        <button onclick="changeColor()">Change Color</button>

        <script>
            function changeColor() {
                const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#F4D03F", "#8E44AD"];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                document.body.style.backgroundColor = randomColor;
            }
        </script>
    </body>
    </html>
  `);

});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
