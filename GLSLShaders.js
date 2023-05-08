window.glsl_static_geometry_vsh = `#version 300 es

    precision highp float;
    
    in vec3 vertPos;
    in vec4 vertColor;
    in vec3 vertUV;
    
    out float pixFog;
    out vec4 pixColor;
    out vec3 pixUV;
    
    uniform mat4 viewMatrix;
    
    void main(){
        
        vec4 pos=viewMatrix*vec4(vertPos,1);
        pixColor=vertColor;
        pixUV=vertUV;
        pixFog=pos.z;
        gl_Position=pos;
    }
`
window.glsl_static_geometry_fsh = `#version 300 es
    
    precision highp float;
    
    in float pixFog;
    in vec4 pixColor;
    in vec3 pixUV;
    
    out vec4 fragColor;
    
    uniform sampler2D tex;
    uniform float isNight;
    
    void main(){
        
        vec4 t=texture(tex,pixUV.xy);
        
        fragColor=vec4(mix(mix(mix(pixColor.rgb,t.rgb,t.a),pixColor.rgb,pixUV.z),vec3(1,1,0.7),smoothstep(20.0,120.0,pixFog)*0.7)*isNight,pixColor.w);
        
    }
`
window.glsl_dynamic_geometry_vsh = `#version 300 es

    precision highp float;
    
    in vec3 vertPos;
    in vec3 vertColor;
    in vec3 vertNormal;
    
    out vec3 pixColor;
    out vec3 pixNormal;
    
    uniform mat4 viewMatrix;
    uniform mat4 modelMatrix;
    
    void main(){
        
        vec4 pos=viewMatrix*modelMatrix*vec4(vertPos,1);
        pixColor=vertColor;
        pixNormal=mat3(modelMatrix)*vertNormal;
        gl_Position=pos;
    }
`
window.glsl_dynamic_geometry_fsh = `#version 300 es
    
    precision highp float;
    
    in vec3 pixColor;
    in vec3 pixNormal;
    
    out vec4 fragColor;
    
    uniform float isNight;
    
    void main(){
        
        vec3 normal=normalize(pixNormal);
        float shade=dot(normal,LIGHT_DIR)*0.5+0.55;
        fragColor=vec4(pixColor*shade*isNight,1.0);
    }
`
window.glsl_token_geometry_vsh = `#version 300 es

    precision highp float;
    
    in vec3 vertPos;
    in vec2 vertUV;
    
    in vec4 instance_pos;
    in vec4 instance_uv;
    
    out vec3 pixUV;
    
    uniform mat4 viewMatrix;
    
    void main(){
        
        pixUV=vec3(vertUV,0)+instance_uv.xyz;
        
        vec3 vp=vertPos*instance_uv.w;
        float s=sin(instance_pos.w);
        float c=cos(instance_pos.w);
        
        vp=vec3(vp.x*s-vp.z*c,vp.y,vp.x*c+vp.z*s);
        
        gl_Position=viewMatrix*vec4(vp+instance_pos.xyz,1);
    }
`

window.glsl_token_geometry_fsh = `#version 300 es
    
    precision highp float;
    
    in vec3 pixUV;
    
    out vec4 fragColor;
    
    uniform sampler2D tex;
    uniform float isNight;
    
    void main(){
        
        fragColor=vec4(texture(tex,pixUV.xy).rgb*isNight,pixUV.z);
    }
`
window.glsl_flower_geometry_vsh = `#version 300 es

    precision highp float;
    
    in vec3 vertPos;
    in vec4 vertUV;
    in float vertGoo;
    
    out vec4 pixUV;
    out float pixFog;
    out float goo;
    
    uniform mat4 viewMatrix;
    
    void main(){
        
        vec4 pos=viewMatrix*vec4(vertPos,1);
        pixUV=vertUV;
        goo=vertGoo;
        pixFog=smoothstep(20.0,120.0,pos.z)*0.7;
        gl_Position=pos;
    }
`

window.glsl_flower_geometry_fsh = `#version 300 es
    
    precision highp float;
    
    in vec4 pixUV;
    in float pixFog;
    in float goo;
    
    out vec4 fragColor;
    
    uniform sampler2D tex;
    uniform float isNight;
    
    void main(){
        
        vec3 c=mix(vec3(0,0.6,0),texture(tex,pixUV.xy).rgb*min(pixUV.w,1.0),pixUV.z);
        
        c=c.g<=0.1?vec3(0,0.35,0):c;

        fragColor=vec4(mix(goo<0.0?mix(c,vec3(0.1,1,0.5),-goo):mix(c,vec3(1,0.2,1),goo),vec3(1,1,0.7),pixFog)*isNight,1.0);
    }
`
window.glsl_bee_geometry_vsh = `#version 300 es

    precision highp float;
    
    in vec3 vertPos;
    in vec4 vertUV;
    
    in vec4 instance_pos;
    in vec4 instance_rotation;
    in vec3 instance_uv;
    
    out vec3 pixUV;
    out float pixFog;
    
    uniform mat4 viewMatrix;

    vec4 computePos(){

        vec3 vp=vertPos*instance_pos.w;

        vec3 del=normalize(instance_rotation.xyz);
        
        float pitch=asin(-del.y)*0.5;
        float yaw=atan(del.x,del.z)*0.5;
        float roll=instance_rotation.w*0.5;
        
        vec3 s=vec3(sin(pitch),sin(yaw),sin(roll));
        vec3 c=vec3(cos(pitch),cos(yaw),cos(roll));
        
        vec4 quaternion=vec4(s.x*c.y,c.x*s.y,-s.x*s.y,c.x*c.y);
        
        quaternion=vec4(quaternion.x*c.z+quaternion.y*s.z,quaternion.y*c.z-quaternion.x*s.z,quaternion.z*c.z+quaternion.w*s.z,(quaternion.w*c.z-quaternion.z*s.z)*2.0);
        
        vec3 u=vec3(quaternion.y*vp.z-quaternion.z*vp.y,quaternion.z*vp.x-quaternion.x*vp.z,quaternion.x*vp.y-quaternion.y*vp.x);
        
        vec3 uu=vec3(quaternion.y*u.z-quaternion.z*u.y,quaternion.z*u.x-quaternion.x*u.z,quaternion.x*u.y-quaternion.y*u.x);
        
        vec4 pos=viewMatrix*vec4(vp+u*quaternion.w+uu*2.0+instance_pos.xyz,1);
        pixFog=smoothstep(20.0,120.0,pos.z)*0.7;

        return pos;
    }
    
    void main(){

        pixUV=vertUV.xyz+vec3(instance_uv.xy,0);

        gl_Position=instance_uv.z!=vertUV.w&&vertUV.w!=0.0?vec4(9999999,9999999,9999999,1):computePos();
    }
`
window.glsl_bee_geometry_fsh = `#version 300 es
    
    precision highp float;
    
    in vec3 pixUV;
    in float pixFog;
    
    out vec4 fragColor;
    
    uniform sampler2D tex;
    uniform float isNight;
    
    void main(){
        
        fragColor=pixUV.z>0.1?vec4(mix(texture(tex,pixUV.xy).rgb*pixUV.z,vec3(1,1,0.7),pixFog)*isNight,1):vec4(mix(vec3(0.1,0.4,1),vec3(1,1,0.7),pixFog)*isNight,0.4);
    }
`

window.glsl_particle_renderer_vsh = `#version 300 es
    
    precision highp float;
    
    uniform mat4 viewMatrix;
    
    in vec3 vertPos;
    in vec4 vertColor;
    in float vertSize;
    in float vertRot;
    
    out float particleSize;
    out vec2 particlePos;
    out vec4 pixColor;
    out vec2 particleRot;
    
    void main(){
        
        vec4 pos=viewMatrix*vec4(vertPos,1);
        pixColor=vertColor;
        particlePos=pos.xy/pos.w;
        gl_Position=pos;
        float projSize=(vertSize/pos.z)*SCREEN_CHANGE;
        gl_PointSize=projSize;
        particleSize=projSize*0.5;
        particleRot=vec2(sin(vertRot),cos(vertRot));
        
    }
`

window.glsl_particle_renderer_fsh = `#version 300 es
    
    precision highp float;
    
    in float particleSize;
    in vec2 particlePos;
    in vec4 pixColor;
    in vec2 particleRot;
    
    out vec4 fragColor;
    
    void main(){
        
        vec2 ssPos=(gl_FragCoord.xy-vec2(HALF_WIDTH,HALF_HEIGHT))*vec2(INV_HALF_WIDTH,INV_HALF_HEIGHT);
        
        vec2 del=particlePos-ssPos;
        
        del.x*=ASPECT;
        
        del=vec2(
            
            del.x*particleRot.x-del.y*particleRot.y,
            del.x*particleRot.y+del.y*particleRot.x
            
        );
        
        if(abs(del.x)+abs(del.y)>particleSize*INV_AVG_HALF_WIDTH_HEIGHT)
            discard;
        
        fragColor=pixColor;
    }
`

window.glsl_explosion_renderer_vsh = `#version 300 es

    precision highp float;
    
    in vec3 vertPos;
    
    in vec3 instance_pos;
    in vec4 instance_color;
    in vec2 instance_scale;
    
    out vec4 pixColor;
    
    uniform mat4 viewMatrix;
    
    void main(){
        
        pixColor=instance_color;
        gl_Position=viewMatrix*vec4(vertPos*instance_scale.x*vec3(1,instance_scale.y,1)+instance_pos,1);
    }
`
window.glsl_explosion_renderer_fsh = `#version 300 es
    
    precision highp float;
    
    in vec4 pixColor;
    
    out vec4 fragColor;
    
    void main(){
        
        fragColor=pixColor;
    }
`
window.glsl_text_renderer_vsh = `#version 300 es
    
    precision highp float;
    
    uniform mat4 viewMatrix;
    
    in vec2 vertPos;
    in vec2 vertUV;
    
    in vec3 instance_origin;
    in vec2 instance_offset;
    in vec2 instance_uv;
    in vec3 instance_color;
    in vec3 instance_info;
    
    out vec3 pixColor;
    out vec2 pixUV;
    out float fogAmount;
    
    void main(){
        
        pixUV=vertUV+instance_uv;
        
        vec4 originPos=viewMatrix*vec4(instance_origin,1);
        
        float s=sin(instance_info.z);
        float c=cos(instance_info.z);
        
        vec2 vp=(vertPos+instance_offset)*instance_info.xy;
        
        vp=vec2((vp.x*c-vp.y*s)*INV_ASPECT,vp.x*s+vp.y*c);
        
        vec4 pos=originPos+vec4(vp,0,0);
        
        gl_Position=pos.w<1.0&&pos.w>0.0?vec4(pos.xyz,1.0):pos;

        pixColor=instance_color;
        fogAmount=smoothstep(20.0,120.0,originPos.z)*0.7;
    }
`
window.glsl_text_renderer_fsh = `#version 300 es
    
    precision highp float;
    
    uniform sampler2D tex;
    
    in vec2 pixUV;
    in vec3 pixColor;
    in float fogAmount;
    
    out vec4 fragColor;
    
    void main(){

        vec4 c=texture(tex,pixUV);

        vec3 col=mix(c.xyz,vec3(1,1,0.7),fogAmount)*pixColor;

        if(c.a<0.01)
            discard;

        fragColor=vec4(col,c.a);
    }
`
window.glsl_mob_renderer_vsh = `#version 300 es

    precision highp float;
    
    in vec3 vertPos;
    in vec3 vertColor;
    
    out vec4 pixColor;
    
    uniform mat4 viewMatrix;
    uniform vec4 instance_info1;
    uniform vec2 instance_info2;
    uniform float isNight;
    
    void main(){
        
        pixColor=vec4(vertColor*isNight,instance_info2.y);
        
        float s=sin(instance_info1.w);
        float c=cos(instance_info1.w);
        
        gl_Position=viewMatrix*vec4(vec3(vertPos.x*c-vertPos.z*s,vertPos.y,vertPos.x*s+vertPos.z*c)*instance_info2.x+instance_info1.xyz,1);
    }
`
window.glsl_mob_renderer_fsh = `#version 300 es
    
    precision highp float;
    
    in vec4 pixColor;
    
    out vec4 fragColor;
    
    void main(){
        
        fragColor=pixColor;
    }
`
window.glsl_trail_renderer_vsh = `#version 300 es

    precision highp float;
    
    in vec3 vertPos;
    in vec4 vertCol;
    
    out vec4 pixColor;
    
    uniform mat4 viewMatrix;
    uniform float isNight;
    
    void main(){
        
        pixColor=vec4(vertCol.xyz*isNight,vertCol.w);
        gl_Position=viewMatrix*vec4(vertPos,1);
    }
`
window.glsl_trail_renderer_fsh = `#version 300 es
    
    precision highp float;
    
    in vec4 pixColor;
    
    out vec4 fragColor;
    
    void main(){
        
        fragColor=pixColor;
    }
`
