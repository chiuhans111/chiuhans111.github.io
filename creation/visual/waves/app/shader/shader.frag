varying vec2 UV;
uniform sampler2D pos_texture;
uniform sampler2D vel_texture;
uniform vec2 size;
uniform vec2 res;

vec3 pos(vec2 UV){
    vec4 pos = texture2D(pos_texture, UV);
    return (normalize(pos.xyz-.5) * pos.w * 2.0)*.2;
}


vec3 getColor(vec2 UV){
    vec2 g = step(.02, fract(UV.xy*res/100.));
    return mix(
        vec3(1),
        vec3(1,.7,.5),
        step(.98,fract((UV.y*size.y+UV.x*size.x)*.02))
    );
}

void main(){
    vec2 dx = vec2(2.0/size.x, 0);
    vec2 dy = vec2(0, 2.0/size.y);
    vec2 ddx = vec2(1.0/res.x, 0);
    vec2 ddy = vec2(0, 1.0/res.y);

    vec3 p = pos(UV);
    vec2 ST = (vec3(UV.xy,0)+p*.5).xy;

    vec3 p2 = pos(ST);
    vec3 px = pos(ST+dx)+dx.xyy*5.;
    vec3 py = pos(ST+dy)+dy.xyx*5.;
    vec3 normal = normalize(cross(
        (px-p2),
        (py-p2)
    ));
    
    float light1 = max(0.0,dot(normal, normalize(vec3(.1,-.1,1)) ));
    float light2 = max(0.0,dot(normal, normalize(vec3(-.1,.1,-.1)) ));
    float light = (light1+light2)*.3+.7;

    vec3 color = (getColor(ST)+getColor(ST+ddx)+getColor(ST+ddy)+getColor(ST+ddx+ddy))*.25;

    color*=light;


    // color = texture2D(pos_texture, UV).www;
    // color = vec3(light);

    gl_FragColor = vec4(color,1);
}

