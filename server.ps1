$port = 3000
$prefix = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "Server running at $prefix"

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".svg"   = "image/svg+xml"
    ".json"  = "application/json"
    ".woff2" = "font/woff2"
    ".woff"  = "font/woff"
    ".ttf"   = "font/ttf"
}

try {
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            $localPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath)
            if ($localPath -eq "/") { $localPath = "/index.html" }
            
            $filePath = Join-Path (Get-Location) $localPath.TrimStart('/')
            
            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                if ($mimeTypes.ContainsKey($ext)) {
                    $response.ContentType = $mimeTypes[$ext]
                } else {
                    $response.ContentType = "application/octet-stream"
                }
                
                # Allow CORS for local dev preview
                $response.Headers.Add("Access-Control-Allow-Origin", "*")
                
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
                $statusBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $localPath")
                $response.OutputStream.Write($statusBytes, 0, $statusBytes.Length)
            }
            $response.Close()
        } catch {
            Write-Host "Request error: $_"
        }
    }
} catch {
    Write-Host "Server fatal error: $_"
} finally {
    $listener.Stop()
}
