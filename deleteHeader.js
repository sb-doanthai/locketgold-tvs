const headers = $request.headers;
delete headers["X-RevenueCat-ETag"];
delete headers["x-revenuecat-etag"];
delete headers["If-None-Match"];
delete headers["if-none-match"];
$done({ headers });
