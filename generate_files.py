import os

# Definer indholdet for hver fil
html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app"></div>
    <script src="script.js"></script>
</body>
</html>
"""

css_content = """
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

#app {
    margin: 50px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
}
"""

js_content = """
document.getElementById('app').innerHTML = `
    <h1>Hello, world!</h1>
    <div>
        <a href="data.csv" download>Download Data</a>
    </div>
`;
"""

csv_content = """
ID,Name,Age,Location
1,John Doe,25,New York
2,Jane Smith,30,Los Angeles
3,Michael Johnson,35,Chicago
"""

# Definer stier til filer
html_path = 'index.html'
css_path = 'styles.css'
js_path = 'script.js'
csv_path = 'data.csv'
bundle_path = 'bundle.txt'

# Opret og skriv til filer
paths_and_contents = {
    html_path: html_content,
    css_path: css_content,
    js_path: js_content,
    csv_path: csv_content
}

for path, content in paths_and_contents.items():
    with open(path, 'w') as file:
        file.write(content)

# Opret en samlet fil
bundle_content = f"""
===== HTML =====
{html_content}

===== CSS =====
{css_content}

===== JavaScript =====
{js_content}

===== CSV =====
{csv_content}
"""

with open(bundle_path, 'w') as file:
    file.write(bundle_content)

print("Filer og samlet fil er blevet genereret.")
