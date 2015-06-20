# Image Stream Service

Service that streams image as either binary or base64 encoded data.

# Group Image API

# image [/image]

Image Stream endpoint.

## Image Stream [GET]

+ Request (application/json)
    + Body
            {
              "url": "http://www.redhat.com/profiles/rh/themes/redhatdotcom/img/logo.png",
              "base64" : "true|false - default = false"
            }

+ Response 200 (application/octet-stream)
    + Body
            Image in either binary or base64 encoded format
