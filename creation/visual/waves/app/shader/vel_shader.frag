varying vec2 UV;
uniform sampler2D pos_texture;
uniform sampler2D vel_texture;
uniform vec2 size;

uniform float init;
uniform float time;

uniform vec2 actor;
uniform vec3 mover;

#define mapsize 5
#define halfmapsize 2
#define PI 3.141592658979

vec4 pos(vec2 UV){
    vec4 pos = texture2D(pos_texture, UV);
    pos.xyz = normalize(pos.xyz-.5) * pos.w * 2.0;
    return pos;
}

void main(){
    
    vec4 color = vec4(1);

    vec2 dx = vec2(1.0/size.x, 0);
    vec2 dy = vec2(0, 1.0/size.y);

    color.rg = UV.xy;

    vec4 vel = texture2D(vel_texture, UV);
    vel.xyz = normalize(vel.xyz-.5) * vel.w * 2.0;

    
    vec4 center = vec4(0);
    float total = 0.0;


    for(int i=0;i<mapsize;i++){
        for(int j=0;j<mapsize;j++){
            if(i!=halfmapsize||j!=halfmapsize){
                vec2 p = dx*float(i-halfmapsize)+dy*float(j-halfmapsize);
                float m = 1./(length(p)+1.);
                vec4 pos2=pos(UV+p)*m;
                center+=pos2*m;
                total+=m;
            }
        }
    }
    center/=total;



    vec4 pos1 = pos(UV);
    vec4 posx = pos(UV+dx)+dx.xyyy*20.;
    vec4 posy = pos(UV+dy)+dy.xyxx*20.;
    vec3 normal = normalize(cross(
        (posx.xyz-pos1.xyz)/dx.x,
        (posy.xyz-pos1.xyz)/dy.y
    ));

    float moverl = length(mover.xy);
    float influence = max(0.0, moverl-length((UV-actor)*size)) / moverl;
    vel -= influence * vec4(mover,0) *0.01;



    vel+=(center*.99-pos1)*.4;

    vel.xyz+=(normal) * dot(normal, 
        vec3(
            sin(UV.y*4.+time*PI*2.),
            cos(UV.x*4.+time*PI*2.),
            cos(time*PI*6.)
        )
    )*.0025;

    vel=vel*.99;


    vel.w = length(vel.xyz) * 0.5;
    vel.xyz = normalize(vel.xyz)*.5+.5;
    
    gl_FragColor = mix(vel, vec4(.5,.5,.5,.0), init);
}

