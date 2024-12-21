precision mediump float;

uniform vec2 iResolution; // Canvas resolution (passed from JS)
uniform float iTime; // Time since start (passed from JS)

vec3 palette( float t) {
    
    vec3 a = vec3(-0.020, 0.648, 0.558);
    vec3 b = vec3(2.138, 0.351, 0.445);
    vec3 c = vec3(0.888, 1.888, 1.861);
    vec3 d = vec3(-0.450, -0.443, 1.057);

    return a + b*cos( 6.28318*(c*t+d) );
    
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);
    
    
    for( float i = 0.0; i < 5.0; i++) {
        uv = fract(uv * 1.5) - 0.5;
        
        float d = length(uv) * exp(-length(uv0));

        vec3 col = palette(length(uv0) + i*.4 + iTime *.7);

        d = sin(d*8. + iTime*.7)/8.;
        d = abs(d);

        d = pow(0.015 / d, 1.5);

        finalColor += col * d;
    }
    
    fragColor = vec4(finalColor, 1.0);
}

void main() {
    vec4 fragColor;
    mainImage(fragColor, gl_FragCoord.xy);
    gl_FragColor = fragColor;
}