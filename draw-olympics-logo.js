function draw() {
    var canvas = document.getElementById("olympics");
    var context = canvas.getContext("2d");
    canvas.height = 800;
    canvas.width = 800;
    context.beginPath();
    context.arc(300, 300, 100, Math.PI, 0);
    context.lineWidth = 15;
    context.strokeStyle = "#fab12e";
    context.stroke();

    context.beginPath();
    context.arc(520, 300, 100, Math.PI, 0);
    context.lineWidth = 15;
    context.strokeStyle = "#30a753";
    context.stroke();

    context.beginPath();
    context.arc(200, 200, 100, 0, 2 * Math.PI);
    context.lineWidth = 15;
    context.strokeStyle = "#0b78b0";
    context.stroke();

    context.beginPath();
    context.arc(420, 200, 100, 0, 2 * Math.PI);
    context.lineWidth = 15;
    context.strokeStyle = "#000000";
    context.stroke();

    context.beginPath();
    context.arc(640, 200, 100, 0, 2 * Math.PI);
    context.lineWidth = 15;
    context.strokeStyle = "#f41b2c";
    context.stroke();

    context.beginPath();
    context.arc(300, 300, 100, -0.1 * Math.PI, 1.1 * Math.PI);
    context.lineWidth = 15;
    context.strokeStyle = "#fab12e";
    context.stroke();

    context.beginPath();
    context.arc(520, 300, 100, -0.1 * Math.PI, 1.1 * Math.PI);
    context.lineWidth = 15;
    context.strokeStyle = "#30a753";
    context.stroke();
}
