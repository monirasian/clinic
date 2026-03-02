<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>clinic API Swagger</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />
  <style>
    body { margin: 0; }
    #swagger-ui { height: 100vh; }
  </style>
</head>
<body>
  <div id="swagger-ui"></div>

  <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
  <script>
    window.onload = function () {
      const ui = SwaggerUIBundle({
        url: 'swagger.json',
        dom_id: '#swagger-ui',
        deepLinking: true,
        persistAuthorization: true,
        presets: [SwaggerUIBundle.presets.apis],
        layout: 'BaseLayout'
      });
      window.ui = ui;
    };
  </script>
</body>
</html>
