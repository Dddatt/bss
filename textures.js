window.textures_effects=function(tex_ctx){

    tex_ctx.textBaseline='middle'
    tex_ctx.clearRect(0,0,2048,2048)
    tex_ctx.fillStyle='rgb(235,235,235)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(130,130,130)'
    tex_ctx.strokeStyle='rgb(130,130,130)'
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.arc(64+8,9*128/30,3.5*128/30,0,8)
    tex_ctx.moveTo(53+8,96)
    tex_ctx.lineTo(61+8,53)
    tex_ctx.moveTo(53+8,96)
    tex_ctx.lineTo(39+8,116)
    tex_ctx.moveTo(53+8,96)
    tex_ctx.lineTo(71+8,116)
    tex_ctx.moveTo(36+8,54)
    tex_ctx.lineTo(59+8,64)
    tex_ctx.moveTo(86+8,61)
    tex_ctx.lineTo(59+8,64)
    tex_ctx.closePath()
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(45,33)
    tex_ctx.lineTo(15,33)
    tex_ctx.moveTo(35,62)
    tex_ctx.lineTo(7,62)
    tex_ctx.moveTo(35,91)
    tex_ctx.lineTo(12,91)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgba(130,130,130,0.5)'
    tex_ctx.stroke()
    
    tex_ctx.fillStyle='rgb(0,200,0)'
    tex_ctx.fillRect(128,0,128,128)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(118+128/6,128/2)
    tex_ctx.bezierCurveTo(128-20+128/2,0,20+128+128/2,0,138+128*5/6,128/2)
    tex_ctx.moveTo(118+128/6,128/2)
    tex_ctx.bezierCurveTo(128-20+128/2,128,20+128+128/2,128,138+128*5/6,128/2)
    tex_ctx.closePath()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,200,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(128+128/2,20+128/2)
    tex_ctx.bezierCurveTo(108+128/2,(128/2)+10,108+128/2,(128/2)-10,128+128/2,(128/2)-20)
    tex_ctx.moveTo(128+128/2,20+128/2)
    tex_ctx.bezierCurveTo(148+128/2,(128/2)+10,148+128/2,(128/2)-10,128+128/2,(128/2)-20)
    tex_ctx.closePath()
    tex_ctx.fill()
    
    tex_ctx.lineCap='round'
    tex_ctx.lineJoin='round'
    tex_ctx.fillStyle='rgb(245,245,245)'
    tex_ctx.fillRect(256,0,128,128)
    tex_ctx.translate(-5,0)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=10
    tex_ctx.beginPath()
    tex_ctx.ellipse(290,93,15,9,-0.2,0,7)
    tex_ctx.ellipse(349,84,15,9,-0.2,0,7)
    tex_ctx.closePath()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(300,90)
    tex_ctx.lineTo(305,34)
    tex_ctx.moveTo(306,33)
    tex_ctx.lineTo(361,25)
    tex_ctx.moveTo(364,25)
    tex_ctx.lineTo(359,78)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.translate(5,0)
    
    tex_ctx.fillStyle='rgb(245,245,245)'
    tex_ctx.fillRect(256+128,0,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=7
    tex_ctx.beginPath()
    
    for(let i=0,inc=Math.PI*2;i<inc;i+=inc/6){
        
        tex_ctx.moveTo(256+128*1.5+Math.sin(i)*25,128*0.5+Math.cos(i)*25*0.8)
        tex_ctx.lineTo(256+128*1.5+Math.sin(i)*55,128*0.5+Math.cos(i)*55*0.8)
        
    }
    
    tex_ctx.closePath()
    tex_ctx.stroke()
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(256+256,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*2+128/2,128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.fill()
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(256+256+128,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(255,0,0)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*2.5+128/2,128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.fill()
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(256+256+256,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(0,0,255)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*3+128/2,128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.fill()
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(256+256+256+128,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*3.5+128/2,128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(36,27)
    tex_ctx.lineTo(36,47)
    tex_ctx.moveTo(26,37)
    tex_ctx.lineTo(46,37)
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*4/16,_i++){
        
        if(_i===1) continue
        
        let r=42,r2=55
        tex_ctx.moveTo(Math.cos(i)*r2,Math.sin(i)*r2)
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    tex_ctx.lineWidth=6
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(255, 0, 0)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(128*0.5,128+128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(36,27)
    tex_ctx.lineTo(36,47)
    tex_ctx.moveTo(26,37)
    tex_ctx.lineTo(46,37)
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*4/16,_i++){
        
        if(_i===1) continue
        
        let r=42,r2=55
        tex_ctx.moveTo(Math.cos(i)*r2,Math.sin(i)*r2)
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    tex_ctx.lineWidth=6
    tex_ctx.strokeStyle='rgb(255,0,0)'
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(128,128,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(0,0,255)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(128+128*0.5,128+128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(36,27)
    tex_ctx.lineTo(36,47)
    tex_ctx.moveTo(26,37)
    tex_ctx.lineTo(46,37)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*4/16,_i++){
        
        if(_i===1) continue
        
        let r=42,r2=55
        tex_ctx.moveTo(Math.cos(i)*r2,Math.sin(i)*r2)
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.lineWidth=6
    tex_ctx.strokeStyle='rgb(0,0,255)'
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(150,255,150)'
    tex_ctx.fillRect(128*2,128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(78, 135, 242)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256+128*0.5,128+128/2)
    tex_ctx.scale(1.2,1.2)
    
    for(let i=0;i<4;i++){
        
        tex_ctx.rotate(Math.PI*0.5)
        tex_ctx.moveTo(-8,0)
        tex_ctx.bezierCurveTo(-40,-60,40,-60,8,0)
    }
    
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(0,10)
    tex_ctx.moveTo(-10,0)
    tex_ctx.lineTo(10,0)
    tex_ctx.lineWidth=4
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(150,255,150)'
    tex_ctx.fillRect(128*3,128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(237, 82, 73)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*1.5+128*0.5,128+128/2)
    tex_ctx.scale(1.2,1.2)
    
    for(let i=0;i<4;i++){
        
        tex_ctx.rotate(Math.PI*0.5)
        tex_ctx.moveTo(-8,0)
        tex_ctx.bezierCurveTo(-40,-60,40,-60,8,0)
    }
    
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(0,10)
    tex_ctx.moveTo(-10,0)
    tex_ctx.lineTo(10,0)
    tex_ctx.lineWidth=4
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(150,255,150)'
    tex_ctx.fillRect(128*4,128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(200,200,200)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*2+128*0.5,128+128/2)
    tex_ctx.scale(1.2,1.2)
    
    for(let i=0;i<4;i++){
        
        tex_ctx.rotate(Math.PI*0.5)
        tex_ctx.moveTo(-8,0)
        tex_ctx.bezierCurveTo(-40,-60,40,-60,8,0)
    }
    
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(0,10)
    tex_ctx.moveTo(-10,0)
    tex_ctx.lineTo(10,0)
    tex_ctx.lineWidth=4
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(224, 0, 0)'
    tex_ctx.fillRect(128*5,128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255, 98, 0)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*2.5+128*0.5,128+128/2)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(247, 56, 3)'
    tex_ctx.beginPath()
    tex_ctx.scale(0.6,0.6)
    tex_ctx.translate(0,20)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(232, 232, 232)'
    tex_ctx.fillRect(128*6,128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0,0.8)'
    tex_ctx.fillStyle='rgb(255, 234, 117)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128*6,128)
    tex_ctx.beginPath()
    tex_ctx.arc(128/2,128/2,45,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.translate(128/2,128/2)
    
    for(let i=Math.PI*0.25;i<Math.PI;i+=Math.PI*2/4){
        
        tex_ctx.moveTo(Math.sin(i)*45,Math.cos(i)*45)
        tex_ctx.lineTo(Math.sin(i)*-45,Math.cos(i)*-45)
    }
    
    tex_ctx.stroke()
    tex_ctx.scale(0.46,0.46)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.strokeStyle='rgb(0,0,0,0.4)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(232, 232, 232)'
    tex_ctx.fillRect(128*7,128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0,0.8)'
    tex_ctx.fillStyle='rgb(255, 234, 117)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128*7,128)
    tex_ctx.beginPath()
    tex_ctx.arc(128/2,128/2,45,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.translate(128/2,128/2)
    
    for(let i=Math.PI*0.25;i<Math.PI;i+=Math.PI*2/4){
        
        tex_ctx.moveTo(Math.sin(i)*45,Math.cos(i)*45)
        tex_ctx.lineTo(Math.sin(i)*-45,Math.cos(i)*-45)
    }
    
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.fillStyle='rgb(255, 206, 8)'
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(224, 0, 0)'
    tex_ctx.fillRect(0,128*2,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255, 98, 0)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.scale(0.4,0.4)
    tex_ctx.translate(85,782)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.translate(134,0)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.translate(-65,-68)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.translate(0,129)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(247, 56, 3)'
    tex_ctx.beginPath()
    tex_ctx.scale(0.6,0.6)
    tex_ctx.translate(0,20)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.translate(-115,-102)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.translate(115,-110)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.translate(105,106)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(214, 0, 0)'
    tex_ctx.fillRect(128,256,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(20,0,0)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(128+128*0.5,256+128/2)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(100,0,0)'
    tex_ctx.beginPath()
    tex_ctx.scale(0.6,0.6)
    tex_ctx.translate(0,20)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(130,130,130)'
    tex_ctx.fillRect(128*2,256,128,128)
    tex_ctx.strokeStyle='rgb(130,130,130)'
    tex_ctx.fillStyle='rgb(200,200,200)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128*2+128*0.5,256+128/2)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,30,0,6)
    tex_ctx.rect(-5,0,10,64)
    tex_ctx.rect(-10,-50,20,7)
    tex_ctx.rect(-3,-56,7,20)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.lineTo(20,20)
    tex_ctx.moveTo(20,-20)
    tex_ctx.lineTo(-20,20)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(47, 201, 75)'
    tex_ctx.fillRect(128*3,256,128,128)
    tex_ctx.fillStyle='rgb(22, 94, 25)'
    tex_ctx.translate(128*3+128*0.5,256+128/2)
    tex_ctx.beginPath()
    tex_ctx.rect(-44,4,32,30)
    tex_ctx.rect(-3,11,32,17)
    tex_ctx.rect(-33,-28,51,49)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(10,-35,15,15)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(19,-33,5,5)
    tex_ctx.rotate(-0.5)
    tex_ctx.fillStyle='rgb(255,40,40)'
    tex_ctx.fillRect(18,3,28,5)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(255,255,0)'
    tex_ctx.fillRect(128*4,256,128,128)
    tex_ctx.fillStyle='rgb(0,0,255)'
    tex_ctx.translate(128*4+128*0.5,256+128*0.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,10)
    tex_ctx.bezierCurveTo(-36,-1,-36,-45,-9,-50)
    tex_ctx.moveTo(0,10)
    tex_ctx.bezierCurveTo(35,-1,21,-54,-9,-50)
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(200,200,200)'
    tex_ctx.lineWidth=9
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,10)
    tex_ctx.bezierCurveTo(-11,22,-5,41,9,30)
    tex_ctx.bezierCurveTo(57,22,-5,61,9,51)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255,255,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-38)
    tex_ctx.lineTo(8,-25)
    tex_ctx.lineTo(-17,-25)
    tex_ctx.rect(-9,-25,10,20)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(255,255,0)'
    tex_ctx.fillRect(128*5,256,128,128)
    tex_ctx.fillStyle='rgb(0,100,255)'
    tex_ctx.translate(128*5+128*0.5,256+128*0.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,35)
    tex_ctx.lineTo(36,18)
    tex_ctx.lineTo(20,-20)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(10,255,100)'
    tex_ctx.beginPath()
    tex_ctx.arc(14,0,6,0,6)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(190, 10, 255)'
    tex_ctx.beginPath()
    tex_ctx.arc(-1,12,5,0,6)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255, 190, 10)'
    tex_ctx.beginPath()
    tex_ctx.arc(-15,22,3,0,6)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(10, 255, 239)'
    tex_ctx.beginPath()
    tex_ctx.arc(17,17,3,0,6)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(222, 60, 95)'
    tex_ctx.fillRect(-32,-28,8,8)
    tex_ctx.fillStyle='rgb(37, 222, 145)'
    tex_ctx.fillRect(39,-49,8,8)
    tex_ctx.fillStyle='rgb(20, 102, 168)'
    tex_ctx.fillRect(39,-10,8,8)
    tex_ctx.fillStyle='rgb(255, 3, 3)'
    tex_ctx.fillRect(-6,-44,8,8)
    tex_ctx.fillStyle='rgb(216, 216, 232)'
    tex_ctx.fillRect(-35,-1,8,8)
    tex_ctx.fillStyle='rgb(173, 60, 181)'
    tex_ctx.fillRect(21,34,8,8)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(30,255,100)'
    tex_ctx.fillRect(128*6,256,128,128)
    tex_ctx.fillStyle='rgb(255,50,255)'
    tex_ctx.translate(128*6+128*0.5,256+128*0.5)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,21,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(-18,-18,13,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(-3,-18,8,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(20,-6,13,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(15,11,10,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(-9,14,15,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(17,-18,13,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(-24,-1,13,0,6)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(30,255,100)'
    tex_ctx.fillRect(128*7,256,128,128)
    tex_ctx.fillStyle='rgb(255,50,255)'
    tex_ctx.strokeStyle='rgb(255,50,255)'
    tex_ctx.lineWidth=3
    tex_ctx.translate(128*7+128*0.5,256+128*0.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.arc(0,20,22,0,7)
    tex_ctx.moveTo(-15,-10)
    tex_ctx.lineTo(-15,-47)
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(0,-58)
    tex_ctx.moveTo(15,-10)
    tex_ctx.lineTo(15,-47)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(0,256+128,128,128)
    tex_ctx.fillStyle='rgb(255,150,0)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(+128*0.5,256+128*1.5)
    tex_ctx.rotate(15*Math.PI/180)
    tex_ctx.lineWidth=5
    tex_ctx.strokeRect(-3,-37,10,20)
    tex_ctx.fillRect(-3,-37,10,20)
    tex_ctx.lineWidth=25
    tex_ctx.strokeRect(-9,-10,20,40)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.strokeRect(-7,-8,16,36)
    tex_ctx.fillStyle='rgb(255,50,255)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(11,-10)
    tex_ctx.lineTo(-11,-10)
    tex_ctx.lineTo(-11,25)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(30,255,100)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(11,-10)
    tex_ctx.lineTo(11,25)
    tex_ctx.lineTo(-11,25)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128,256+128,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128+128*0.5,256+128*1.5+12)
    tex_ctx.scale(1.195,1.15)
    // tex_ctx.rotate(15*Math.PI/180)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,20)
    tex_ctx.bezierCurveTo(-23,20,-20,0,-21,-2)
    tex_ctx.bezierCurveTo(-24,-24,-7,-14,-5,-37)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(0,20)
    tex_ctx.bezierCurveTo(-23,20,-20,0,-21,-2)
    tex_ctx.bezierCurveTo(-24,-24,-7,-14,-5,-37)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,20)
    tex_ctx.lineTo(-5,-37)
    tex_ctx.lineTo(5,-37)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,20)
    tex_ctx.bezierCurveTo(-23,20,-20,0,-19,-2)
    tex_ctx.lineTo(19,-2)
    tex_ctx.bezierCurveTo(20,20,3,19,0,20)
    tex_ctx.fillStyle='rgb(225,225,150)'
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(100,55,0)'
    tex_ctx.lineWidth=5
    tex_ctx.strokeRect(-6,-45,12,7)
    tex_ctx.fillRect(-6,-45,12,7)
    tex_ctx.fillStyle='rgb(200,100,40)'
    tex_ctx.fillRect(-21,-9,40,7)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    tex_ctx.arc(0,-4,9,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*2,256+128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*2+128*0.5,256+128*1.5+12)
    tex_ctx.lineWidth=3
    tex_ctx.fillStyle='rgb(100,255,100)'
    tex_ctx.translate(-3,-13)
    tex_ctx.rotate(35)
    tex_ctx.beginPath()
    tex_ctx.translate(-25,0)
    tex_ctx.moveTo(-25,10)
    tex_ctx.bezierCurveTo(-25,-5,25,-5,25,10)
    tex_ctx.lineTo(25,17)
    tex_ctx.bezierCurveTo(25,35,-25,35,-25,17)
    tex_ctx.lineTo(-25,10)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255,255,80)'
    tex_ctx.rotate(-35)
    tex_ctx.beginPath()
    tex_ctx.translate(-34,-18)
    tex_ctx.moveTo(-25,10)
    tex_ctx.bezierCurveTo(-25,-5,25,-5,25,10)
    tex_ctx.lineTo(25,17)
    tex_ctx.bezierCurveTo(25,35,-25,35,-25,17)
    tex_ctx.lineTo(-25,10)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.translate(20,11)
    tex_ctx.scale(0.6,0.4)
    tex_ctx.beginPath()
    tex_ctx.translate(-34,-18)
    tex_ctx.moveTo(-25,10)
    tex_ctx.bezierCurveTo(-25,-5,25,-5,25,10)
    tex_ctx.lineTo(25,17)
    tex_ctx.bezierCurveTo(25,35,-25,35,-25,17)
    tex_ctx.lineTo(-25,10)
    tex_ctx.fill()
    tex_ctx.translate(44,-32)
    tex_ctx.rotate(35.235)
    tex_ctx.beginPath()
    tex_ctx.translate(-34,-18)
    tex_ctx.moveTo(-25,10)
    tex_ctx.bezierCurveTo(-25,-5,25,-5,25,10)
    tex_ctx.lineTo(25,17)
    tex_ctx.bezierCurveTo(25,35,-25,35,-25,17)
    tex_ctx.lineTo(-25,10)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*3,256+128,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*3+128*0.5,256+128*1.5+12)
    tex_ctx.scale(1.195,1.15)
    // tex_ctx.rotate(15*Math.PI/180)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(1,26)
    tex_ctx.lineTo(-15,16)
    tex_ctx.lineTo(-1,-29)
    tex_ctx.lineTo(24,-23)
    tex_ctx.lineTo(19,21)
    tex_ctx.lineTo(1,26)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(200,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(1,25)
    tex_ctx.lineTo(-13,16)
    tex_ctx.lineTo(-7,-5)
    tex_ctx.lineTo(21,2)
    tex_ctx.lineTo(18,21)
    tex_ctx.lineTo(1,25)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(100,100,100)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-2,-31)
    tex_ctx.lineTo(1,-41)
    tex_ctx.lineTo(27,-35)
    tex_ctx.lineTo(26,-23)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(1,25)
    tex_ctx.lineTo(15,-38)
    tex_ctx.lineTo(27,-34)
    tex_ctx.lineTo(21,2)
    tex_ctx.lineTo(18,21)
    tex_ctx.lineTo(1,25)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*4,256+128,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*4+128*0.5,256+128*1.5+12)
    tex_ctx.scale(1.195,1.15)
    // tex_ctx.rotate(15*Math.PI/180)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(1,26)
    tex_ctx.lineTo(-15,16)
    tex_ctx.lineTo(-1,-29)
    tex_ctx.lineTo(24,-23)
    tex_ctx.lineTo(19,21)
    tex_ctx.lineTo(1,26)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,200)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(1,25)
    tex_ctx.lineTo(-13,16)
    tex_ctx.lineTo(-7,-5)
    tex_ctx.lineTo(21,2)
    tex_ctx.lineTo(18,21)
    tex_ctx.lineTo(1,25)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(100,100,100)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-2,-31)
    tex_ctx.lineTo(1,-41)
    tex_ctx.lineTo(27,-35)
    tex_ctx.lineTo(26,-23)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(1,25)
    tex_ctx.lineTo(15,-38)
    tex_ctx.lineTo(27,-34)
    tex_ctx.lineTo(21,2)
    tex_ctx.lineTo(18,21)
    tex_ctx.lineTo(1,25)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*5,256+128,128,128)
    tex_ctx.fillStyle='rgb(163, 90, 18)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*5+128*0.5,256+128*1.5+12)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,-5)
    tex_ctx.bezierCurveTo(-40,45,40,45,40,-5)
    tex_ctx.bezierCurveTo(40,-35,-40,-35,-40,-5)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.lineWidth=1.75
    tex_ctx.fillStyle='rgb(255,255,200)'
    tex_ctx.translate(0,-2.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-32,-5)
    tex_ctx.bezierCurveTo(-32,15,32,15,32,-5)
    tex_ctx.bezierCurveTo(32,-25,-32,-25,-32,-5)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(227, 82, 208)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(21,6)
    tex_ctx.lineTo(28,-45)
    tex_ctx.lineTo(45,-55)
    tex_ctx.lineTo(42,-59)
    tex_ctx.lineTo(23,-47)
    tex_ctx.lineTo(15,8)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*6,256+128,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*6+128*0.5,256+128*1.5+12)
    tex_ctx.rotate(15*Math.PI/180)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-25,22)
    tex_ctx.lineTo(25,22)
    tex_ctx.lineTo(5,-35)
    tex_ctx.lineTo(5,-50)
    tex_ctx.lineTo(-5,-50)
    tex_ctx.lineTo(-5,-35)
    tex_ctx.lineTo(-25,22)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(200,0,200)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-24,21)
    tex_ctx.lineTo(24,21)
    tex_ctx.lineTo(14,-4)
    tex_ctx.lineTo(-14,-4)
    tex_ctx.fill()
    tex_ctx.lineWidth=3.5
    tex_ctx.fillStyle='rgb(94, 50, 13)'
    tex_ctx.strokeRect(-8,-56,15,8)
    tex_ctx.fillRect(-8,-56,15,8)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*7,256+128,128,128)
    let s=tex_ctx.createLinearGradient(0,-25,0,25)
    s.addColorStop(0,'rgb(0,0,0,0.3)')
    s.addColorStop(0.4,'rgb(0,0,0,0.3)')
    s.addColorStop(0.4,'rgb(255,0,50)')
    s.addColorStop(0.6,'rgb(255,0,50)')
    s.addColorStop(0.6,'rgb(50,255,50)')
    tex_ctx.fillStyle=s
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*7+128*0.5-10,256+128*1.5+9)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,30)
    tex_ctx.bezierCurveTo(-20,40,20,40,20,30)
    tex_ctx.bezierCurveTo(60,30,60,-30,20,-30)
    tex_ctx.bezierCurveTo(20,-40,-20,-40,-20,-30)
    tex_ctx.bezierCurveTo(-30,-30,-30,30,-20,30)
    tex_ctx.moveTo(-20,-30)
    tex_ctx.bezierCurveTo(-20,-20,20,-20,20,-30)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(25,20)
    tex_ctx.bezierCurveTo(50,20,50,-20,25,-20)
    tex_ctx.lineTo(25,20)
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.rotate(-0.4)
    s=tex_ctx.createLinearGradient(0,-52,0,-6)
    s.addColorStop(0,'rgb(255,0,0)')
    s.addColorStop(0.15,'rgb(255,0,0)')
    s.addColorStop(0.15,'rgb(255,255,255)')
    s.addColorStop(0.3,'rgb(255,255,255)')
    s.addColorStop(0.3,'rgb(255,0,0)')
    s.addColorStop(0.45,'rgb(255,0,0)')
    s.addColorStop(0.45,'rgb(255,255,255)')
    s.addColorStop(0.6,'rgb(255,255,255)')
    s.addColorStop(0.6,'rgb(255,0,0)')
    s.addColorStop(0.75,'rgb(255,0,0)')
    s.addColorStop(0.75,'rgb(255,255,255)')
    s.addColorStop(0.9,'rgb(255,255,255)')
    s.addColorStop(0.9,'rgb(255,0,0)')
    tex_ctx.fillStyle=s
    tex_ctx.fillRect(-3,-60,5,55)
    tex_ctx.rotate(0.4)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-30)
    tex_ctx.bezierCurveTo(-20,-20,20,-20,20,-30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255,0,50)'
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,10,0,7)
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(2,-5)
    tex_ctx.bezierCurveTo(-4,-5,-4,0,0,0)
    tex_ctx.bezierCurveTo(2,0,2,5,-2,5)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*0,256+256,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(138, 88, 18)'
    tex_ctx.translate(128*0+128*0.5,256+128*2.5+9)
    tex_ctx.scale(0.9*1.5,1.5)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,2)
    tex_ctx.bezierCurveTo(-46,-23,-33,-30,-20,-15)
    tex_ctx.bezierCurveTo(-7,-38,-11,-38,9,-15)
    tex_ctx.bezierCurveTo(37,-36,32,-6,20,4)
    tex_ctx.bezierCurveTo(23,19,15,31,-7,12)
    tex_ctx.bezierCurveTo(-35,31,-29,12,-30,-5)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-12)
    tex_ctx.lineTo(-10,-5)
    tex_ctx.moveTo(-2,-12)
    tex_ctx.lineTo(0,-5)
    tex_ctx.moveTo(-9,2)
    tex_ctx.lineTo(-2,5)
    tex_ctx.lineTo(4,1)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*1,256+256,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(95, 49, 232)'
    tex_ctx.translate(128*1+128*0.5,256+128*2.5+9)
    tex_ctx.scale(0.9*1.5,1.5)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,0,30,25,-0.2,0,7)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(78, 48, 171)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-3,-12,15,8,-0.2,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*2,256+256,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255,0,25)'
    tex_ctx.translate(128*2+128*0.5,256+128*2.5+9)
    tex_ctx.scale(0.9*1.5,1.5)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-14)
    tex_ctx.lineTo(13,-20)
    tex_ctx.bezierCurveTo(28,-23,21,13,9,20)
    tex_ctx.bezierCurveTo(-54,-20,-4,-14,-20,-14)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(0,200,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-1,-17)
    tex_ctx.bezierCurveTo(-9,-28,-6,-29,-14,-31)
    tex_ctx.moveTo(-1,-17)
    tex_ctx.bezierCurveTo(2,-28,2,-29,-1,-33)
    tex_ctx.moveTo(-1,-17)
    tex_ctx.bezierCurveTo(12,-28,0,-29,10,-31)
    tex_ctx.moveTo(-1,-17)
    tex_ctx.bezierCurveTo(-9,-17,-6,-29,-20,-24)
    tex_ctx.stroke()
    tex_ctx.lineWidth=1.9
    tex_ctx.strokeStyle='rgb(250,170,100)'
    tex_ctx.beginPath()
    tex_ctx.arc(-11,-9,1,0,7)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(10,-9,1,0,7)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(15,-1,1,0,7)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,-6,1,0,7)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(2,3,1,0,7)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(10,11,1,0,7)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(247, 204, 32)'
    tex_ctx.fillRect(128*3,256+256,128,128)
    tex_ctx.fillStyle='rgb(222, 186, 42)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*3+128*0.5,256+128*2.5+9)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,30)
    tex_ctx.bezierCurveTo(-36,31,-21,-5,-14,-12)
    tex_ctx.bezierCurveTo(10,-32,-19,-41,-9,-39)
    tex_ctx.bezierCurveTo(40,-17,18,31,0,30)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(143, 0, 232)'
    tex_ctx.fillRect(128*4,256+256,128,128)
    tex_ctx.fillStyle='rgb(222, 186, 42)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*4+128*0.5,256+128*2.5)
    tex_ctx.lineWidth=9
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-20)
    tex_ctx.lineTo(0,25)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,-7,30,20,0,3.5,5.9)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(255,200,0)'
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,56,0.2,Math.PI*0.5-0.2)
    tex_ctx.stroke()
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,56,0.2,Math.PI*0.5-0.2)
    tex_ctx.stroke()
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,56,0.2,Math.PI*0.5-0.2)
    tex_ctx.stroke()
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,56,0.2,Math.PI*0.5-0.2)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(143, 0, 232)'
    tex_ctx.fillRect(128*5,256+256,128,128)
    tex_ctx.fillStyle='rgb(222, 186, 42)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*5+128*0.5,256+128*2.5)
    tex_ctx.lineWidth=9
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-20)
    tex_ctx.lineTo(0,25)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,-7,30,20,0,3.5,5.9)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(143, 0, 232)'
    tex_ctx.fillRect(128*6,256+256,128,128)
    tex_ctx.fillStyle='rgb(222, 186, 42)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*6+128*0.5,256+128*2.5)
    tex_ctx.lineWidth=9
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-20)
    tex_ctx.lineTo(0,25)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,-7,30,20,0,3.5,5.9)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6,256*2)
    tex_ctx.fillStyle='rgb(255, 149, 125)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(255, 20, 0)'
    tex_ctx.fillStyle='rgb(255, 20, 0)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-45,-30)
    tex_ctx.bezierCurveTo(-45,-40,-20,-40,-13,-23)
    tex_ctx.moveTo(-19,40)
    tex_ctx.bezierCurveTo(-34,7,32,8,32,40)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(-45,-30)
    tex_ctx.bezierCurveTo(-45,-40,-20,-40,-13,-23)
    tex_ctx.stroke()
    tex_ctx.scale(-1,1)
    tex_ctx.beginPath()
    tex_ctx.ellipse(-24,-11,7,10,0,0,7)
    tex_ctx.ellipse(24,-11,7,10,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255, 149, 125)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-28,-5,2,4,0,0,7)
    tex_ctx.ellipse(21,-5,2,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7,256*2)
    tex_ctx.fillStyle='rgb(200,200,200)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(0, 0, 0)'
    s=tex_ctx.createLinearGradient(0,48,0,-39)
    s.addColorStop(0,'rgb(255,255,0)')
    s.addColorStop(1,'rgb(255,255,255)')
    tex_ctx.fillStyle=s
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,-40)
    tex_ctx.lineTo(40,-40)
    tex_ctx.lineTo(0,40)
    tex_ctx.lineTo(-40,-40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(0,128*5)
    tex_ctx.fillStyle='rgb(166, 114, 30)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(235, 208, 89)'
    tex_ctx.lineWidth=10
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-50,-40)
    tex_ctx.bezierCurveTo(-28,0,20,-58,50,-40)
    tex_ctx.translate(0,30)
    tex_ctx.moveTo(-50,-40)
    tex_ctx.bezierCurveTo(-28,0,20,-58,50,-40)
    tex_ctx.translate(0,30)
    tex_ctx.moveTo(-50,-40)
    tex_ctx.bezierCurveTo(-28,0,20,-58,50,-40)
    tex_ctx.translate(0,-60)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    tex_ctx.lineWidth=8
    
    for(let i=0;i<10;i++){
        
        let x=(i*120410.12425+122.099)%1000,y=(i*42930.95050+628.852)%1000
        
        x*=0.001
        y*=0.001
        
        x-=0.5
        y-=0.5
        
        x*=120
        y*=120
        tex_ctx.moveTo(x-10,y+20)
        tex_ctx.lineTo(x-10,y+20)
    }
    
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillRect(128,256*2+128,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(122, 52, 2)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(128+128/2,256*2.5+128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,40,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*2,256+256*1.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255,255,25)'
    tex_ctx.translate(128*2+128*0.5,256+128*3.5)
    tex_ctx.scale(1.2,1.3)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-9,-25)
    tex_ctx.lineTo(15,-15)
    tex_ctx.lineTo(35,10)
    tex_ctx.bezierCurveTo(20,30,0,30,-6,29)
    tex_ctx.lineTo(-30,20)
    tex_ctx.lineTo(-9,-25)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'    
    tex_ctx.beginPath()
    tex_ctx.moveTo(15,-15)
    tex_ctx.lineTo(35,10)
    tex_ctx.bezierCurveTo(20,30,0,30,-6,29)
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(0,0,0,0.2)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-3,-15)
    tex_ctx.lineTo(-7,-6)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,24)
    tex_ctx.lineTo(-13+3,24-6)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(21,24)
    tex_ctx.lineTo(19,18)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(12,26)
    tex_ctx.lineTo(13,18)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(29,16)
    tex_ctx.lineTo(26,14)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(-8,-19)
    tex_ctx.lineTo(-18,1)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*3,256+256*1.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(252,231,202)'
    tex_ctx.translate(128*3+128*0.5+16,256+128*3.5+10)
    tex_ctx.scale(1.5,1.6)
    tex_ctx.rotate(0.4)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-9,-25)
    tex_ctx.bezierCurveTo(-33,-7,-38,19,-20,20)
    tex_ctx.bezierCurveTo(16,27,-4,-17,-9,-25)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.strokeStyle='rgb(98,99,90)'
    tex_ctx.moveTo(-9,-25)
    tex_ctx.bezierCurveTo(-21,-7,-25,19,-20,20)
    tex_ctx.moveTo(-9,-25)
    tex_ctx.bezierCurveTo(-6,-7,-17,19,-20,20)
    tex_ctx.moveTo(-9,-25)
    tex_ctx.bezierCurveTo(-28,-7,-25,19,-20,20)
    tex_ctx.moveTo(-9,-25)
    tex_ctx.bezierCurveTo(-6,-7,6,19,-20,20)
    tex_ctx.moveTo(-9,-25)
    tex_ctx.bezierCurveTo(-33,-7,-31,19,-20,20)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*4,256+256*1.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255,255,0)'
    tex_ctx.translate(128*4+128*0.5,256+128*3.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.7)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-28,0)
    tex_ctx.bezierCurveTo(-28,15,28,15,28,0)
    tex_ctx.lineTo(28,15)
    tex_ctx.bezierCurveTo(28,25,-28,25,-28,15)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.15)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(28,15,-28,27,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*5,256+256*1.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.translate(128*5+128*0.5,256+128*3.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(235,235,235)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-21,-12)
    tex_ctx.bezierCurveTo(-14,-11,2,-14,-3,-28)
    tex_ctx.moveTo(14,-19)
    tex_ctx.bezierCurveTo(6,6,-8,3,-24,0)
    tex_ctx.moveTo(24,1)
    tex_ctx.bezierCurveTo(6,27,-8,16,-25,15)
    tex_ctx.moveTo(22,20)
    tex_ctx.bezierCurveTo(6,36,-8,36,-20,30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(36,46,-28,32,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*6,256+256*1.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255,220,70)'
    tex_ctx.translate(128*6+128*0.5,256+128*3.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(235,205,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-21,-12)
    tex_ctx.bezierCurveTo(-14,-11,2,-14,-3,-28)
    tex_ctx.moveTo(14,-19)
    tex_ctx.bezierCurveTo(6,6,-8,3,-24,0)
    tex_ctx.moveTo(24,1)
    tex_ctx.bezierCurveTo(6,27,-8,16,-25,15)
    tex_ctx.moveTo(22,20)
    tex_ctx.bezierCurveTo(6,36,-8,36,-20,30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(36,46,-28,32,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.strokeStyle='white'
    function shinyCross(x,y,r,s){
        tex_ctx.translate(x,y)
        tex_ctx.rotate(r)
        tex_ctx.scale(s,s)
        tex_ctx.moveTo(-5,-25)
        tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
        tex_ctx.moveTo(-26,-25)
        tex_ctx.bezierCurveTo(-2,-25,-11,-15,-5,-12)
        tex_ctx.translate(-x,-y)
        tex_ctx.rotate(-r)
        tex_ctx.scale(1/s,1/s)
    }
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-25)
    tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
    tex_ctx.stroke()
    tex_ctx.lineWidth='3'
    tex_ctx.beginPath()
    shinyCross(16,0,0,0.5)
    shinyCross(-20,0,10,0.5)
    shinyCross(20,40,1.5,0.6)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*7,256+256*1.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(200,255,255)'
    tex_ctx.translate(128*7+128*0.5,256+128*3.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(36,46,-28,32,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.strokeStyle='white'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-25)
    tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.125)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.bezierCurveTo(-10,-10,-10,20,0,20)
    tex_ctx.moveTo(0,-10)
    tex_ctx.bezierCurveTo(10,-10,10,20,0,20)
    tex_ctx.fill()
    tex_ctx.lineWidth='3'
    tex_ctx.beginPath()
    shinyCross(16,0,0,0.5)
    shinyCross(-20,0,10,0.5)
    shinyCross(26,36,102,0.5)
    shinyCross(-25,20,0,0.25)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*0,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(163, 91, 218)'
    tex_ctx.translate(128*0+128*0.5,256+128*4.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.7)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-28,0)
    tex_ctx.bezierCurveTo(-28,15,28,15,28,0)
    tex_ctx.lineTo(28,15)
    tex_ctx.bezierCurveTo(28,25,-28,25,-28,15)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.15)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(28,15,-28,27,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(255,255,255,0.5)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-25)
    tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
    tex_ctx.stroke()
    tex_ctx.lineWidth='2'
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    shinyCross(16,0,0,0.2)
    shinyCross(-20,0,10,0.22)
    shinyCross(20,40,1.5,0.26)
    shinyCross(-28,-46,15,0.22)
    shinyCross(17,45,-1.5,0.21)
    shinyCross(-5,-30,1,0.2)
    shinyCross(25,-20,1.5,0.26)
    tex_ctx.stroke()
    tex_ctx.scale(1,0.8)
    tex_ctx.textAlign='center'
    tex_ctx.font='25px cursive'
    tex_ctx.lineWidth='6'
    tex_ctx.strokeStyle='black'
    tex_ctx.strokeText('M',4,44)
    tex_ctx.strokeStyle='white'
    tex_ctx.font='25px cursive'
    tex_ctx.fillStyle='white'
    tex_ctx.fillText('M',4,44)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(255,0,0)'
    tex_ctx.fillRect(128*1,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(163, 91, 218)'
    tex_ctx.translate(128*1+128*0.5,256+128*4.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(14,43)
    tex_ctx.lineTo(-29,14)
    tex_ctx.lineTo(0,-2)
    tex_ctx.lineTo(-25,-15)
    tex_ctx.bezierCurveTo(-52,-34,-15,-56,3,-35)
    tex_ctx.lineTo(32,-5)
    tex_ctx.lineTo(1,16)
    tex_ctx.lineTo(14,43)
    tex_ctx.strokeStyle='white'
    tex_ctx.lineWidth=10
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,255)'
    tex_ctx.fillRect(128*2,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(0,0,255)'
    tex_ctx.fillStyle='rgb(163, 91, 218)'
    tex_ctx.translate(128*2+128*0.5,256+128*4.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(14,43)
    tex_ctx.lineTo(-29,14)
    tex_ctx.lineTo(0,-2)
    tex_ctx.lineTo(-25,-15)
    tex_ctx.bezierCurveTo(-52,-34,-15,-56,3,-35)
    tex_ctx.lineTo(32,-5)
    tex_ctx.lineTo(1,16)
    tex_ctx.lineTo(14,43)
    tex_ctx.strokeStyle='white'
    tex_ctx.lineWidth=10
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(128*3,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(255,0,0)'
    tex_ctx.fillStyle='rgb(163, 91, 218)'
    tex_ctx.translate(128*3+128*0.5,256+128*4.5)
    tex_ctx.beginPath()
    tex_ctx.arc(0,15,36,0,7)
    tex_ctx.rect(-20,-24,40,10)
    tex_ctx.fillStyle=tex_ctx.strokeStyle='red'
    tex_ctx.lineWidth=5
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-25)
    tex_ctx.bezierCurveTo(0,-50,23,-23,30,-44)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(10,-24)
    tex_ctx.bezierCurveTo(-20,0,23,28,-16,47)
    tex_ctx.bezierCurveTo(27,69,54,7,20,-15)
    tex_ctx.lineTo(20,-24)
    tex_ctx.fillStyle='white'
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(128*4,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(255,0,0)'
    tex_ctx.fillStyle='rgb(163, 91, 218)'
    tex_ctx.translate(128*4+128*0.5,256+128*4.5)
    tex_ctx.beginPath()
    tex_ctx.arc(0,15,36,0,7)
    tex_ctx.rect(-20,-24,40,10)
    tex_ctx.fillStyle=tex_ctx.strokeStyle='blue'
    tex_ctx.lineWidth=5
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-25)
    tex_ctx.bezierCurveTo(0,-50,23,-23,30,-44)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(10,-24)
    tex_ctx.bezierCurveTo(-20,0,23,28,-16,47)
    tex_ctx.bezierCurveTo(27,69,54,7,20,-15)
    tex_ctx.lineTo(20,-24)
    tex_ctx.fillStyle='white'
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(128*5,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(255,255,0)'
    tex_ctx.translate(128*5+128*0.5,256+128*4.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-34,-57)
    tex_ctx.lineTo(-34,24)
    tex_ctx.moveTo(-16,-57)
    tex_ctx.lineTo(-16,12)
    tex_ctx.moveTo(-1,-57)
    tex_ctx.lineTo(-1,21)
    tex_ctx.moveTo(16,-57)
    tex_ctx.lineTo(16,-3)
    tex_ctx.moveTo(34,-57)
    tex_ctx.lineTo(34,29)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(150,150,200)'
    tex_ctx.fillRect(128*6,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=3
    tex_ctx.translate(128*6+128*0.5,256+128*4.5)
    tex_ctx.beginPath()
    tex_ctx.ellipse(0-5,-30+5,20,20,0,0,7)
    tex_ctx.ellipse(-20-5,-25+5,15,15,0,0,7)
    tex_ctx.ellipse(18-5,-40+5,15,15,0,0,7)
    tex_ctx.ellipse(25-5,-25+5,20,20,0,0,7)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.translate(-19,6)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-3,12)
    tex_ctx.translate(20,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-3,12)
    tex_ctx.translate(21,6)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-3,12)
    tex_ctx.translate(-18,19)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-3,12)
    tex_ctx.translate(-38,-2)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-4,12)
    tex_ctx.translate(15,13)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-3,12)
    tex_ctx.translate(35,6)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-3,12)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(150,150,200)'
    tex_ctx.fillRect(128*7,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=3
    tex_ctx.translate(128*7+128*0.5,256+128*4.5)
    function e(x,y,w,h){
        tex_ctx.beginPath()
        tex_ctx.ellipse(x,y,w,h,0,0,7)
        tex_ctx.fill()
    }
    for(let i=9;i>=0;i--){
        tex_ctx.fillStyle=i%2===0?'rgb(150,150,200)':'rgb(255,255,255)'
        e(Math.sin(i*0.5)*10,i*8-35,20+(8-i)*4,13)
    }
    
    tex_ctx.fillStyle='rgb(255,255,255)'
    e(0,-37,35,7)
    
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*0,256+256*2.5,128,128)
    tex_ctx.lineWidth=3
    tex_ctx.translate(128*0+128*0.5,256+128*5.5)
    let a=new Path2D('M 35 39 C 68 14 77 80 33 48')
    tex_ctx.fillStyle='rgb(251, 237, 255)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-59,-69)
    tex_ctx.scale(1.8*0.9,2.04*0.9)
    tex_ctx.fill(a)
    tex_ctx.fillStyle='rgb(204, 228, 255)'
    tex_ctx.translate(-25,29)
    tex_ctx.rotate(5.6)
    a=new Path2D('M 29 21 C 55 23 41 39 50 50C 53 68 33 51 37 54C 33 44 8 37 29 21')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.fillStyle='rgb(251, 237, 255)'
    tex_ctx.rotate(-5.6)
    tex_ctx.translate(18,-29)
    a=new Path2D('M 43 43 C 68 14 77 80 43 48')
    tex_ctx.fill(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.fillStyle='rgb(247, 222, 111)'
    tex_ctx.translate(128*0+128*0.5,256+128*5.5)
    e(23,0,2,2)
    e(33,15,2,2)
    e(11,12,2,2)
    e(20,27,2,2)
    tex_ctx.fillStyle='rgb(225, 177, 242)'
    e(22,12,2,2)
    e(34,23,2,2)
    e(7,21,2,2)
    e(29,0,2,2)
    tex_ctx.strokeStyle='rgb(181, 139, 49)'
    tex_ctx.lineWidth=6
    tex_ctx.beginPath()
    tex_ctx.moveTo(4,-12)
    tex_ctx.bezierCurveTo(-6,-11,-9,29,-25,27)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(250, 239, 142)'
    tex_ctx.lineWidth=8
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-22)
    tex_ctx.bezierCurveTo(-46,-12,-31,6,-29,5)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*1,256+256*2.5,128,128)
    tex_ctx.lineWidth=2
    tex_ctx.translate(128*1+128*0.5,256+128*5.5)
    a=new Path2D('M30 60C 26 25 64 25 60 60C55 67 35 67 30 60')
    tex_ctx.fillStyle='rgb(255,100,255)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-43,-74)
    tex_ctx.scale(1.3,1.3)
    tex_ctx.fill(a)
    tex_ctx.stroke(a)
    a=new Path2D('M30 60C 26 25 64 25 60 60C55 67 35 67 30 60')
    tex_ctx.fillStyle='rgb(0,255,100)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-21,10)
    tex_ctx.fillStyle='rgb(0,255,100)'
    tex_ctx.fill(a)
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*1+128*0.5,256+128*5.5)
    e(-3,0,2,2)
    e(-20,16,2,2)
    e(-5,13,2,2)
    e(-14,5,2,2)
    e(-17,-8,2,2)
    e(17,2,2,2)
    e(7,-18,2,2)
    e(23,-11,2,2)
    e(19,-21,2,2)
    e(28,0,2,2)
    e(9,-8,2,2)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*2,256+256*2.5,128,128)
    tex_ctx.lineWidth=3
    tex_ctx.translate(128*2+128*0.5,256+128*5.5)
    tex_ctx.fillStyle='rgb(160,80,20)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    e(0,0,30,30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(70,20,0)'
    e(19,-6,4,4)
    e(3,-20,4,4)
    e(1,-1,4,4)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*3,256+256*2.5,128,128)
    tex_ctx.lineWidth=2
    tex_ctx.translate(128*3+128*0.5,256+128*5.5)
    a=new Path2D('M30 20L50 50C 73 53 13 71 30 54z')
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-46,-59)
    tex_ctx.scale(1.4,1.4)
    tex_ctx.fill(a)
    tex_ctx.stroke(a)
    tex_ctx.lineWidth=1
    a=new Path2D('M 48 51 C 42 56 39 55 33 56')
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(252, 186, 3)'
    tex_ctx.fillRect(128*4,256+256*2.5,128,128)
    tex_ctx.lineWidth=4
    tex_ctx.translate(128*4+128*0.4,256+128*5.6)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,0,23,25,0.5,0,7)
    tex_ctx.translate(-7,10)
    tex_ctx.scale(1.2,1.2)
    tex_ctx.moveTo(-10,-36)
    tex_ctx.bezierCurveTo(-20,-47,-14,-55,-8,-64)
    tex_ctx.bezierCurveTo(-3,-51,2,-38,-10,-36)
    tex_ctx.rotate(0.5)
    tex_ctx.moveTo(-10,-36)
    tex_ctx.bezierCurveTo(-20,-47,-14,-55,-8,-64)
    tex_ctx.bezierCurveTo(-3,-51,2,-38,-10,-36)
    tex_ctx.rotate(0.5)
    tex_ctx.moveTo(-10,-36)
    tex_ctx.bezierCurveTo(-20,-47,-14,-55,-8,-64)
    tex_ctx.bezierCurveTo(-3,-51,2,-38,-10,-36)
    tex_ctx.rotate(0.5)
    tex_ctx.moveTo(-10,-36)
    tex_ctx.bezierCurveTo(-20,-47,-14,-55,-8,-64)
    tex_ctx.bezierCurveTo(-3,-51,2,-38,-10,-36)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(252, 186, 3)'
    tex_ctx.fillRect(128*5,256+256*2.5,128,128)
    tex_ctx.lineWidth=4
    tex_ctx.translate(128*5+128*0.5,256+128*5.5)
    tex_ctx.fillStyle='rgb(99, 73, 39)'
    tex_ctx.beginPath()
    tex_ctx.translate(-25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-30,0,-30,8,-64)
    tex_ctx.translate(25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-20,0,-20,8,-64)
    tex_ctx.translate(25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-30,0,-30,8,-64)
    tex_ctx.translate(-25,0)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.strokeStyle='rgb(17, 32, 43)'
    tex_ctx.beginPath()
    tex_ctx.translate(-25,-10)
    tex_ctx.scale(1.2,1.5)
    tex_ctx.rotate(0.15)
    tex_ctx.moveTo(-10,0)
    tex_ctx.bezierCurveTo(-8,7,8,7,10,0)
    tex_ctx.bezierCurveTo(8,-7,-8,-7,-10,0)
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*5+128*0.5,256+128*5.5)
    tex_ctx.translate(25,-10)
    tex_ctx.scale(1.2,1.5)
    tex_ctx.rotate(-0.15)
    tex_ctx.moveTo(-10,0)
    tex_ctx.bezierCurveTo(-8,7,8,7,10,0)
    tex_ctx.bezierCurveTo(8,-7,-8,-7,-10,0)
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*5+128*0.5,256+128*5.5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-7,10)
    tex_ctx.bezierCurveTo(-5,13,5,13,7,10)
    tex_ctx.moveTo(0,13)
    tex_ctx.lineTo(0,22)
    tex_ctx.moveTo(-20,20)
    tex_ctx.bezierCurveTo(-10,28,-5,28,0,20)
    tex_ctx.moveTo(20,20)
    tex_ctx.bezierCurveTo(10,28,5,28,0,20)
    tex_ctx.moveTo(-31,14)
    tex_ctx.lineTo(-62,0)
    tex_ctx.moveTo(-31,22)
    tex_ctx.lineTo(-62,27)
    tex_ctx.moveTo(31,14)
    tex_ctx.lineTo(62,0)
    tex_ctx.moveTo(31,22)
    tex_ctx.lineTo(62,27)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*6,256+256*2.5,128,128)
    tex_ctx.lineWidth=2
    tex_ctx.translate(128*6+128*0.5,256+128*5.5+14)
    a=new Path2D('M35 16C 66 23 45 50 24 50C 12 57 19 55 18 48C 9 15 27 15 35 16z')
    tex_ctx.fillStyle='rgb(179, 162, 34)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-46,-59)
    tex_ctx.scale(1.4,1.4)
    tex_ctx.fill(a)
    tex_ctx.stroke(a)
    tex_ctx.translate(6,2)
    a=new Path2D('M 35 12C 64 13 49 27 36 16C -2 11 38 3 36 12z')
    tex_ctx.fillStyle='rgb(129, 57, 82)'
    tex_ctx.fill(a)
    tex_ctx.stroke(a)
    tex_ctx.translate(-2,-1)
    a=new Path2D('M 37 13C 39 12 43 7 48 5C 50 12 48 7 43 13z')
    tex_ctx.fillStyle='rgb(129, 57, 82)'
    tex_ctx.fill(a)
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(130, 87, 23,0.5)'
    e(38,27,1.5,1.5)
    e(36,35,1.5,1.5)
    e(29,41,1.5,1.5)
    e(30,32,1.5,1.5)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*7,256+256*2.5,128,128)
    tex_ctx.lineWidth=2.5
    tex_ctx.translate(128*7+128*0.5,256+128*5.5+5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(88, 227, 88)'
    e(0,0,30,30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(225,255,225,0.5)'
    e(0,0,10,10)
    tex_ctx.lineWidth=1
    a=new Path2D('M 24 30C 28 12 41 22 40 20M 24 41C 24 49 37 50 36 48M 42 30C 47 28 46 43 39 43')
    tex_ctx.fillStyle='rgb(179, 162, 34)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-57,-48)
    tex_ctx.scale(1.7,1.4)
    tex_ctx.stroke(a)
    tex_ctx.lineWidth=2
    a=new Path2D('M 37 13C 39 12 43 7 42 5C 50 12 48 7 40 14')
    tex_ctx.fillStyle='rgb(138, 78, 18)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(12,-2)
    tex_ctx.scale(1.4/1.7,1.4)
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(232, 232, 232)'
    tex_ctx.fillRect(128*0,128*8,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0,0.8)'
    tex_ctx.fillStyle='rgb(255, 234, 117)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128*0,128*8)
    tex_ctx.beginPath()
    tex_ctx.arc(128/2,128/2,45,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.translate(128/2,128/2)
    
    for(let i=0;i<Math.PI*2;i+=Math.PI*2/4){
        
        tex_ctx.moveTo(Math.sin(i+Math.PI*0.25)*45,Math.cos(i+Math.PI*0.25)*45)
        tex_ctx.lineTo(Math.sin(i+Math.PI*0.25)*-45,Math.cos(i+Math.PI*0.25)*-45)
    }
    
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.fillStyle='rgb(143,0,236)'
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(140, 227, 244)'
    tex_ctx.fillRect(128*1,128*8,128,128)
    tex_ctx.strokeStyle='rgb(50,50,50)'
    tex_ctx.fillStyle='rgb(240, 177, 226)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128*1+64,128*8+64)
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-28)
    tex_ctx.bezierCurveTo(15,-59,51,-37,44,-5)
    tex_ctx.bezierCurveTo(37,17,10,21,0,47)
    tex_ctx.bezierCurveTo(-18,4,-26,31,-39,-8)
    tex_ctx.bezierCurveTo(-44,-25,-24,-58,0,-28)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(70,70,70)'
    e(-13,-14,4,4)
    e(15,-19,4,3.5)
    e(1,-12,2,2)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.strokeStyle='rgb(70,70,70)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-6,0)
    tex_ctx.bezierCurveTo(2,5,9,-1,11,-3)
    tex_ctx.bezierCurveTo(9,13,-2,8,-6,0)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(234, 34, 105)'
    e(-19,-2,6,3)
    e(25,-7,6,3)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,100,100)'
    tex_ctx.fillRect(128*2,128*8,128,128)
    tex_ctx.strokeStyle='rgb(255, 241, 43)'
    tex_ctx.fillStyle='rgb(255, 241, 43)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128*2+64,128*8+67)
    tex_ctx.beginPath()
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/10,_i++){
        
        let r=_i%2===0?25:50,j=i+0.314159
        tex_ctx.lineTo(Math.cos(j)*r,Math.sin(j)*r)
    }
    
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*3,128*8,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*3+128*0.5,128*8+128*0.5)
    tex_ctx.scale(1.25,1.25)
    tex_ctx.lineWidth=2.5
    tex_ctx.fillStyle='rgb(94, 235, 214)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    
    if(tex_ctx.roundRect){
        
        tex_ctx.roundRect(-22,-8,45,45,9)
        
    } else {
        
        tex_ctx.rect(-22,-6,45,45,0)
    }
    
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.font='29px Brush Script MT'
    tex_ctx.fillStyle='rgb(168, 50, 201)'
    tex_ctx.fillText('R',0,17)
    tex_ctx.fillStyle='rgb(245, 202, 12)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-19,-6)
    tex_ctx.lineTo(-20,-26)
    tex_ctx.lineTo(-10,-14)
    tex_ctx.lineTo(0,-27)
    tex_ctx.lineTo(10,-14)
    tex_ctx.lineTo(20,-26)
    tex_ctx.lineTo(19,-6)
    tex_ctx.closePath()
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(245, 229, 12)'
    tex_ctx.lineWidth=2
    e(-20,-23,4,4)
    tex_ctx.stroke()
    e(20,-23,4,4)
    tex_ctx.stroke()
    e(0,-27,5,5)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*4,128*8,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*4+128*0.5,128*8+128*0.5)
    tex_ctx.scale(1.25,1.25)
    tex_ctx.lineWidth=2.5
    tex_ctx.fillStyle='rgb(94, 235, 214)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    
    if(tex_ctx.roundRect){
        
        tex_ctx.roundRect(-22,-8,45,45,9)
        
    } else {
        
        tex_ctx.rect(-22,-6,45,45,0)
    }
    
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.font='29px Brush Script MT'
    tex_ctx.fillStyle='rgb(255, 255, 89)'
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?6:14
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+15)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+15)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.lineWidth=2.5
    tex_ctx.fillStyle='rgb(245, 202, 12)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-19,-6)
    tex_ctx.lineTo(-20,-26)
    tex_ctx.lineTo(-10,-14)
    tex_ctx.lineTo(0,-27)
    tex_ctx.lineTo(10,-14)
    tex_ctx.lineTo(20,-26)
    tex_ctx.lineTo(19,-6)
    tex_ctx.closePath()
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(245, 229, 12)'
    tex_ctx.lineWidth=2
    e(-20,-23,4,4)
    tex_ctx.stroke()
    e(20,-23,4,4)
    tex_ctx.stroke()
    e(0,-27,5,5)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*5,128*8,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.translate(128*5+128*0.5-2,128*8.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(235,235,235)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-21,-12)
    tex_ctx.bezierCurveTo(-14,-11,2,-14,-3,-28)
    tex_ctx.moveTo(14,-19)
    tex_ctx.bezierCurveTo(6,6,-8,3,-24,0)
    tex_ctx.moveTo(24,1)
    tex_ctx.bezierCurveTo(6,27,-8,16,-25,15)
    tex_ctx.moveTo(22,20)
    tex_ctx.bezierCurveTo(6,36,-8,36,-20,30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(36,46,-28,32,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255, 255, 48)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?9:18
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*6,256+256*3,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255,220,70)'
    tex_ctx.translate(128*6+128*0.5,256+128*6.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(235,205,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-21,-12)
    tex_ctx.bezierCurveTo(-14,-11,2,-14,-3,-28)
    tex_ctx.moveTo(14,-19)
    tex_ctx.bezierCurveTo(6,6,-8,3,-24,0)
    tex_ctx.moveTo(24,1)
    tex_ctx.bezierCurveTo(6,27,-8,16,-25,15)
    tex_ctx.moveTo(22,20)
    tex_ctx.bezierCurveTo(6,36,-8,36,-20,30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(36,46,-28,32,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.strokeStyle='white'
    function shinyCross(x,y,r,s){
        tex_ctx.translate(x,y)
        tex_ctx.rotate(r)
        tex_ctx.scale(s,s)
        tex_ctx.moveTo(-5,-25)
        tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
        tex_ctx.moveTo(-26,-25)
        tex_ctx.bezierCurveTo(-2,-25,-11,-15,-5,-12)
        tex_ctx.translate(-x,-y)
        tex_ctx.rotate(-r)
        tex_ctx.scale(1/s,1/s)
    }
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-25)
    tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
    tex_ctx.stroke()
    tex_ctx.lineWidth='3'
    tex_ctx.beginPath()
    shinyCross(16,0,0,0.5)
    shinyCross(-20,0,10,0.5)
    shinyCross(20,40,1.5,0.6)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255, 255, 48)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-22,-20)
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?9:18
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*7,256+256*3,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(200,255,255)'
    tex_ctx.translate(128*7+128*0.5,256+128*6.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(36,46,-28,32,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.strokeStyle='white'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-25)
    tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.125)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.bezierCurveTo(-10,-10,-10,20,0,20)
    tex_ctx.moveTo(0,-10)
    tex_ctx.bezierCurveTo(10,-10,10,20,0,20)
    tex_ctx.fill()
    tex_ctx.lineWidth='3'
    tex_ctx.beginPath()
    shinyCross(16,0,0,0.5)
    shinyCross(-20,0,10,0.5)
    shinyCross(26,36,102,0.5)
    shinyCross(-25,20,0,0.25)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255, 255, 48)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-3,-30)
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?9:18
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*0,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(163, 91, 218)'
    tex_ctx.translate(128*0+128*0.5,256+128*7.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.7)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-28,0)
    tex_ctx.bezierCurveTo(-28,15,28,15,28,0)
    tex_ctx.lineTo(28,15)
    tex_ctx.bezierCurveTo(28,25,-28,25,-28,15)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.15)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(28,15,-28,27,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(255,255,255,0.5)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-25)
    tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
    tex_ctx.stroke()
    tex_ctx.lineWidth='2'
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    shinyCross(16,0,0,0.2)
    shinyCross(-20,0,10,0.22)
    shinyCross(20,40,1.5,0.26)
    shinyCross(-28,-46,15,0.22)
    shinyCross(17,45,-1.5,0.21)
    shinyCross(-5,-30,1,0.2)
    shinyCross(25,-20,1.5,0.26)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255, 255, 48)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(4,24)
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?9:18
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*1,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.translate(128*1+128*0.5,256+128*7.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.15)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(28,15,-28,27,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255, 255, 48)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(1,0)
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?9:18
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*2,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.translate(128*2+128*0.5,256+128*7.5)
    tex_ctx.scale(1.7,1.7)
    tex_ctx.translate(-38,-36)
    a=new Path2D('M 54 54 C 48 64 23 58 23 52C 20 45 28 49 25 42C 23 40 27 32 29 33C 31 33 27 27 32 25C 45 21 25 23 47 25C 54 30 49 26 53 32C 48 39 57 34 52 42C 58 49 53 44 54 54')
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth='3.5'
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='#fbefb8'
    tex_ctx.fill(a)
    a=new Path2D('M 47 47 C 48 50 42 53 38 50M 32 49 C 26 52 43 53 37 50M 42 42 C 48 40 42 48 33 41M 39 35 C 41 40 34 39 33 34')
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth='2'
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    e(40,29,6,3)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(0,-3)
    tex_ctx.lineWidth='6'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth='3'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*1,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.translate(128*1+128*0.5,256+128*7.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.15)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(28,15,-28,27,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255, 255, 48)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(1,0)
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?9:18
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*3,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.translate(128*3+128*0.5,256+128*7.5)
    tex_ctx.scale(1.65,1.65)
    tex_ctx.translate(-38,-34)
    tex_ctx.scale(0.9,0.9)
    tex_ctx.translate(4,4)
    a=new Path2D('M 56 54 L 49 58L 33 58L 25 54L 25 42L 28 35L 28 23L 38 15L 46 18L 52 24L 52 35L 56 47L 56 53')
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth='3.5'
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='#e26a3a'
    tex_ctx.fill(a)
    tex_ctx.translate(-4,-4)
    tex_ctx.scale(1/0.9,1/0.9)
    a=new Path2D('M 33 56 L 33 44M 46 48 L 46 33M 38 40 L 38 30')
    tex_ctx.strokeStyle='rgb(0,0,0,0.2)'
    tex_ctx.lineWidth='2'
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    e(40,24,7,3.5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(0,-8)
    tex_ctx.lineWidth='6'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth='3'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*4,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.translate(128*4+128*0.5,256+128*7.5)
    tex_ctx.scale(1.65,1.65)
    tex_ctx.translate(-35,-34)
    tex_ctx.scale(0.9,0.9)
    tex_ctx.translate(4,4)
    a=new Path2D('M 54 54 C 48 64 23 58 23 52C 23 45 28 49 25 37C 23 31 28 28 27 26C 23 18 49 16 50 26C 48 36 54 31 53 40C 53 50 58 44 54 54')
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth='3.5'
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='#7cec88'
    tex_ctx.fill(a)
    tex_ctx.translate(-6,-2)
    tex_ctx.scale(1/0.9,1/0.9)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    e(40,24,7,3.5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(0,-8)
    tex_ctx.lineWidth='6'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth='3'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(205, 242, 41)'
    e(33,55,3,3)
    e(42,48,3,3)
    e(48,57,3,3)
    e(33,40,2,2)
    e(47,38,2,2)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*5,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.translate(128*5+128*0.5,256+128*7.5)
    tex_ctx.scale(1.55,1.55)
    tex_ctx.translate(-35,-35)
    a=new Path2D('M 54 54 C 31 64 23 58 24 52C 24 43 28 49 25 37C 23 31 28 28 27 26C 23 18 49 16 50 26C 48 36 54 31 51 40C 53 50 57 44 54 54')
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth='3.5'
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(255,255,120)'
    tex_ctx.fill(a)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    e(38,24,7,3.5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-2,-8)
    tex_ctx.lineWidth='6'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth='3'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(205, 242, 41)'
    tex_ctx.translate(2,13)
    a=new Path2D('M 33 54 C 26 51 30 44 32 46C 40 48 31 51 33 50')
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth='2'
    tex_ctx.stroke(a)
    tex_ctx.scale(1.5,1.5)
    tex_ctx.translate(-26,41)
    tex_ctx.rotate(-1.3)
    a=new Path2D('M 33 54 C 26 51 30 44 32 46C 40 48 31 51 33 50')
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth='1.5'
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='#050407'
    tex_ctx.fillRect(128*6,256+256*3.5,128,128)
    tex_ctx.fillStyle='#c5fffd'
    tex_ctx.translate(128*6+128*0.5,256+128*7.5)
    tex_ctx.scale(0.75,1)
    tex_ctx.beginPath()
    tex_ctx.scale(2.3,2.3)
    tex_ctx.translate(2,-16)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(10,30)
    tex_ctx.bezierCurveTo(10,37,-10,37,-10,30)
    tex_ctx.scale(0.5,0.5)
    tex_ctx.translate(37,-11)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(10,30)
    tex_ctx.bezierCurveTo(10,37,-10,37,-10,30)
    tex_ctx.scale(1.5,1.5)
    tex_ctx.translate(-54,2)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(10,30)
    tex_ctx.bezierCurveTo(10,37,-10,37,-10,30)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(128*7,256+256*3.5,128,128)
    tex_ctx.fillStyle='rgb(255, 0, 200)'
    tex_ctx.translate(128*7+128*0.5,256+128*7.5)
    tex_ctx.font='204px arial'
    tex_ctx.fillText('☺',0.5,-5)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(128*0,256+256*4,128,128)
    tex_ctx.fillStyle='rgb(255, 0, 0)'
    tex_ctx.translate(128*0+128*0.5,256+128*8.5)
    tex_ctx.font='204px arial'
    tex_ctx.fillText('☺',0.5,-5)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(22, 2, 201)'
    tex_ctx.fillRect(128*1,256+256*4,128,128)
    tex_ctx.fillStyle='rgb(255, 0, 251)'
    tex_ctx.translate(128*1+128*0.5,256+128*8.5)
    tex_ctx.font='204px arial'
    tex_ctx.fillText('☺',0.5,-5)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(128*2,256+256*4,128,128)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.translate(128*2+128*0.5,256+128*8.5)
    tex_ctx.font='204px arial'
    tex_ctx.fillText('☺',0.5,-5)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*3,256+256*4,128,128)
    tex_ctx.translate(128*3+128*0.5,256+128*8.5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=8
    tex_ctx.fillStyle='rgb(255, 200, 5)'
    tex_ctx.scale(1,0.6)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-40)
    tex_ctx.bezierCurveTo(-32,-32,-32,-32,-40,-30)
    tex_ctx.lineTo(-40,30)
    tex_ctx.bezierCurveTo(-32,32,-32,32,-30,40)
    tex_ctx.lineTo(30,40)
    tex_ctx.bezierCurveTo(32,32,32,32,40,30)
    tex_ctx.lineTo(40,-30)
    tex_ctx.bezierCurveTo(32,-32,32,-32,30,-40)
    tex_ctx.lineTo(-30,-40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(255,10,0)'
    tex_ctx.lineWidth=1
    function rect(x,y,w,h){tex_ctx.fillRect(x-w*0.5,y-h*0.5,w,h);tex_ctx.strokeRect(x-w*0.5,y-h*0.5,w,h)}
    rect(0,0,65,50)
    rect(0,0,50,50)
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(-8,-4)
    tex_ctx.lineTo(-8,-15)
    tex_ctx.moveTo(8,-4)
    tex_ctx.lineTo(8,-15)
    tex_ctx.moveTo(-5,6)
    tex_ctx.lineTo(0,16)
    tex_ctx.lineTo(5,6)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(100,100,100)'
    rect(-29,17,0.5,3)
    rect(-29,-17,0.5,3)
    rect(29,17,0.5,3)
    rect(29,-17,0.5,3)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*4,256+256*4,128,128)
    tex_ctx.translate(128*4+128*0.5,256+128*8.5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=6
    tex_ctx.fillStyle='rgb(255, 255, 160)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-35,-25)
    tex_ctx.lineTo(25,-25)
    tex_ctx.lineTo(35,-15)
    tex_ctx.lineTo(35,15)
    tex_ctx.lineTo(25,25)
    tex_ctx.lineTo(-35,25)
    tex_ctx.lineTo(-35,-25)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(0,150,0)'
    tex_ctx.lineWidth=7
    tex_ctx.beginPath()
    tex_ctx.moveTo(-32,-22)
    tex_ctx.lineTo(-32,22)
    tex_ctx.moveTo(23,-22)
    tex_ctx.lineTo(32,-13)
    tex_ctx.lineTo(32,13)
    tex_ctx.lineTo(23,22)
    tex_ctx.moveTo(-14,-7)
    tex_ctx.lineTo(7,-7)
    tex_ctx.lineTo(2,-13)
    tex_ctx.lineTo(-9,-13)
    tex_ctx.lineTo(-14,-7)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(50,50,50,0)'
    tex_ctx.fillStyle='rgb(50,50,50)'
    rect(-3,4,26,22)
    tex_ctx.fillStyle='rgb(255,40,40)'
    e(-9,0,3,3)
    e(5,0,3,3)
    tex_ctx.strokeStyle='rgb(50,50,50)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-11,-12)
    tex_ctx.lineTo(-16,-18)
    tex_ctx.moveTo(4,-12)
    tex_ctx.lineTo(9,-18)
    tex_ctx.lineWidth=3
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*5,256+256*4,128,128)
    tex_ctx.translate(128*5+128*0.5,256+128*8.5)
    tex_ctx.scale(1.6,1.5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=1.75
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.lineTo(20,-20)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(-20,-20)
    tex_ctx.lineTo(-00,-30)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.075)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(-20,-20)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.2)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(20,-20)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.fill()
    let matrix=tex_ctx.getTransform()
    tex_ctx.translate(1,-20)
    tex_ctx.rotate(0.76)
    tex_ctx.scale(0.7,0.9)
    tex_ctx.scale(0.7,0.7)
    tex_ctx.fillStyle='rgb(171, 90, 24)'
    tex_ctx.fillRect(-2,4,4,8)
    tex_ctx.fillStyle='rgb(0,150,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(5,-5)
    tex_ctx.lineTo(-5,-5)
    tex_ctx.moveTo(0,-7)
    tex_ctx.lineTo(8,1)
    tex_ctx.lineTo(-8,1)
    tex_ctx.moveTo(0,-1)
    tex_ctx.lineTo(10,7)
    tex_ctx.lineTo(-10,7)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix)
    tex_ctx.translate(-9,-2)
    tex_ctx.rotate(0.2)
    tex_ctx.scale(0.6,0.8)
    tex_ctx.strokeStyle='rgb(0,150,0)'
    tex_ctx.lineWidth=2
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-2,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(5,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(1,-6)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255,40,40)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.bezierCurveTo(-11,-1,-8,5,0,13)
    tex_ctx.moveTo(0,0)
    tex_ctx.bezierCurveTo(11,-1,8,5,0,13)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix)
    tex_ctx.translate(9,1)
    tex_ctx.rotate(-0.1)
    tex_ctx.scale(0.6,0.7)
    tex_ctx.fillStyle='rgb(0,85,255)'
    tex_ctx.beginPath()
    
    for(let i=0;i<Math.PI*2;i+=Math.PI*2/5){
        
        tex_ctx.rotate(Math.PI*2/5)
        tex_ctx.moveTo(-3,0)
        tex_ctx.bezierCurveTo(-7,-15,7,-15,3,0)
    }
    
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,255,20)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,0,4,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*6,256+256*4,128,128)
    tex_ctx.translate(128*6+128*0.5,256+128*8.5)
    let matrix2=tex_ctx.getTransform()
    tex_ctx.translate(22,2)
    tex_ctx.rotate(-0.2)
    tex_ctx.scale(1.6,1.5)
    tex_ctx.scale(0.8,0.8)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=1.75
    tex_ctx.fillStyle='rgb(255,255,170)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.lineTo(20,-20)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(-20,-20)
    tex_ctx.lineTo(-00,-30)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.075)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(-20,-20)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.2)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(20,-20)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.fill()
    matrix=tex_ctx.getTransform()
    tex_ctx.translate(1,-20)
    tex_ctx.rotate(0.76)
    tex_ctx.scale(0.7,0.9)
    tex_ctx.scale(0.7,0.7)
    tex_ctx.fillStyle='rgb(171, 90, 24)'
    tex_ctx.fillRect(-2,4,4,8)
    tex_ctx.fillStyle='rgb(0,150,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(5,-5)
    tex_ctx.lineTo(-5,-5)
    tex_ctx.moveTo(0,-7)
    tex_ctx.lineTo(8,1)
    tex_ctx.lineTo(-8,1)
    tex_ctx.moveTo(0,-1)
    tex_ctx.lineTo(10,7)
    tex_ctx.lineTo(-10,7)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix)
    tex_ctx.translate(-9,-2)
    tex_ctx.rotate(0.2)
    tex_ctx.scale(0.6,0.8)
    tex_ctx.strokeStyle='rgb(0,150,0)'
    tex_ctx.lineWidth=2
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-2,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(5,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(1,-6)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255,40,40)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.bezierCurveTo(-11,-1,-8,5,0,13)
    tex_ctx.moveTo(0,0)
    tex_ctx.bezierCurveTo(11,-1,8,5,0,13)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix)
    tex_ctx.translate(9,1)
    tex_ctx.rotate(-0.1)
    tex_ctx.scale(0.6,0.7)
    tex_ctx.fillStyle='rgb(0,85,255)'
    tex_ctx.beginPath()
    
    for(let i=0;i<Math.PI*2;i+=Math.PI*2/5){
        
        tex_ctx.rotate(Math.PI*2/5)
        tex_ctx.moveTo(-3,0)
        tex_ctx.bezierCurveTo(-7,-15,7,-15,3,0)
    }
    
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,255,20)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,0,4,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix2)
    tex_ctx.translate(-21,14)
    tex_ctx.rotate(0.1)
    tex_ctx.scale(1.6,1.5)
    tex_ctx.scale(0.8,0.8)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=1.75
    tex_ctx.fillStyle='rgb(186, 217, 255)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.lineTo(20,-20)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(-20,-20)
    tex_ctx.lineTo(-00,-30)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.075)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(-20,-20)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.2)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(20,-20)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.fill()
    matrix=tex_ctx.getTransform()
    tex_ctx.translate(1,-20)
    tex_ctx.rotate(0.76)
    tex_ctx.scale(0.7,0.9)
    tex_ctx.scale(0.7,0.7)
    tex_ctx.fillStyle='rgb(171, 90, 24)'
    tex_ctx.fillRect(-2,4,4,8)
    tex_ctx.fillStyle='rgb(0,150,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(5,-5)
    tex_ctx.lineTo(-5,-5)
    tex_ctx.moveTo(0,-7)
    tex_ctx.lineTo(8,1)
    tex_ctx.lineTo(-8,1)
    tex_ctx.moveTo(0,-1)
    tex_ctx.lineTo(10,7)
    tex_ctx.lineTo(-10,7)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix)
    tex_ctx.translate(-9,-2)
    tex_ctx.rotate(0.2)
    tex_ctx.scale(0.6,0.8)
    tex_ctx.strokeStyle='rgb(0,150,0)'
    tex_ctx.lineWidth=2
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-2,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(5,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(1,-6)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255,40,40)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.bezierCurveTo(-11,-1,-8,5,0,13)
    tex_ctx.moveTo(0,0)
    tex_ctx.bezierCurveTo(11,-1,8,5,0,13)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix)
    tex_ctx.translate(9,1)
    tex_ctx.rotate(-0.1)
    tex_ctx.scale(0.6,0.7)
    tex_ctx.fillStyle='rgb(0,85,255)'
    tex_ctx.beginPath()
    
    for(let i=0;i<Math.PI*2;i+=Math.PI*2/5){
        
        tex_ctx.rotate(Math.PI*2/5)
        tex_ctx.moveTo(-3,0)
        tex_ctx.bezierCurveTo(-7,-15,7,-15,3,0)
    }
    
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,255,20)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,0,4,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix2)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*7,256+256*4,128,128)
    tex_ctx.translate(128*7+128*0.5,256+128*8.5)
    matrix2=tex_ctx.getTransform()
    tex_ctx.translate(24,-5)
    tex_ctx.rotate(-0.2)
    tex_ctx.scale(1.6,1.5)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=1.75
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.lineTo(20,-20)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(-20,-20)
    tex_ctx.lineTo(-00,-30)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.075)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(-20,-20)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.2)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(20,-20)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.fill()
    matrix=tex_ctx.getTransform()
    tex_ctx.translate(1,-20)
    tex_ctx.rotate(0.76)
    tex_ctx.scale(0.7,0.9)
    tex_ctx.scale(0.7,0.7)
    tex_ctx.fillStyle='rgb(171, 90, 24)'
    tex_ctx.fillRect(-2,4,4,8)
    tex_ctx.fillStyle='rgb(0,150,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(5,-5)
    tex_ctx.lineTo(-5,-5)
    tex_ctx.moveTo(0,-7)
    tex_ctx.lineTo(8,1)
    tex_ctx.lineTo(-8,1)
    tex_ctx.moveTo(0,-1)
    tex_ctx.lineTo(10,7)
    tex_ctx.lineTo(-10,7)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix)
    tex_ctx.translate(-9,-2)
    tex_ctx.rotate(0.2)
    tex_ctx.scale(0.6,0.8)
    tex_ctx.strokeStyle='rgb(0,150,0)'
    tex_ctx.lineWidth=2
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-2,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(5,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(1,-6)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255,40,40)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.bezierCurveTo(-11,-1,-8,5,0,13)
    tex_ctx.moveTo(0,0)
    tex_ctx.bezierCurveTo(11,-1,8,5,0,13)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix)
    tex_ctx.translate(9,1)
    tex_ctx.rotate(-0.1)
    tex_ctx.scale(0.6,0.7)
    tex_ctx.fillStyle='rgb(0,85,255)'
    tex_ctx.beginPath()
    
    for(let i=0;i<Math.PI*2;i+=Math.PI*2/5){
        
        tex_ctx.rotate(Math.PI*2/5)
        tex_ctx.moveTo(-3,0)
        tex_ctx.bezierCurveTo(-7,-15,7,-15,3,0)
    }
    
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,255,20)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,0,4,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix2)
    tex_ctx.translate(-15,-1)
    tex_ctx.rotate(0.1)
    tex_ctx.scale(1.6,1.5)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=1.75
    tex_ctx.fillStyle='rgb(150,150,150)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.lineTo(20,-20)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(-20,-20)
    tex_ctx.lineTo(-00,-30)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.075)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(-20,-20)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.2)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(20,-20)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.fill()
    matrix=tex_ctx.getTransform()
    tex_ctx.translate(1,-20)
    tex_ctx.rotate(0.76)
    tex_ctx.scale(0.7,0.9)
    tex_ctx.scale(0.7,0.7)
    tex_ctx.fillStyle='rgb(171, 90, 24)'
    tex_ctx.fillRect(-2,4,4,8)
    tex_ctx.fillStyle='rgb(0,150,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(5,-5)
    tex_ctx.lineTo(-5,-5)
    tex_ctx.moveTo(0,-7)
    tex_ctx.lineTo(8,1)
    tex_ctx.lineTo(-8,1)
    tex_ctx.moveTo(0,-1)
    tex_ctx.lineTo(10,7)
    tex_ctx.lineTo(-10,7)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix)
    tex_ctx.translate(-9,-2)
    tex_ctx.rotate(0.2)
    tex_ctx.scale(0.6,0.8)
    tex_ctx.strokeStyle='rgb(0,150,0)'
    tex_ctx.lineWidth=2
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-2,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(5,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(1,-6)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255,40,40)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.bezierCurveTo(-11,-1,-8,5,0,13)
    tex_ctx.moveTo(0,0)
    tex_ctx.bezierCurveTo(11,-1,8,5,0,13)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix)
    tex_ctx.translate(9,1)
    tex_ctx.rotate(-0.1)
    tex_ctx.scale(0.6,0.7)
    tex_ctx.fillStyle='rgb(0,85,255)'
    tex_ctx.beginPath()
    
    for(let i=0;i<Math.PI*2;i+=Math.PI*2/5){
        
        tex_ctx.rotate(Math.PI*2/5)
        tex_ctx.moveTo(-3,0)
        tex_ctx.bezierCurveTo(-7,-15,7,-15,3,0)
    }
    
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,255,20)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,0,4,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix2)
    tex_ctx.translate(10,14)
    tex_ctx.rotate(-0.15)
    tex_ctx.scale(1.6,1.5)
    tex_ctx.scale(0.675,0.675)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=1.75
    tex_ctx.fillStyle='rgb(30,30,30)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.lineTo(20,-20)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(-20,-20)
    tex_ctx.lineTo(-00,-30)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.075)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(-20,-20)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.2)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(20,-20)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,20)
    tex_ctx.fill()
    matrix=tex_ctx.getTransform()
    tex_ctx.translate(1,-20)
    tex_ctx.rotate(0.76)
    tex_ctx.scale(0.7,0.9)
    tex_ctx.scale(0.7,0.7)
    tex_ctx.fillStyle='rgb(171, 90, 24)'
    tex_ctx.fillRect(-2,4,4,8)
    tex_ctx.fillStyle='rgb(0,150,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(5,-5)
    tex_ctx.lineTo(-5,-5)
    tex_ctx.moveTo(0,-7)
    tex_ctx.lineTo(8,1)
    tex_ctx.lineTo(-8,1)
    tex_ctx.moveTo(0,-1)
    tex_ctx.lineTo(10,7)
    tex_ctx.lineTo(-10,7)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix)
    tex_ctx.translate(-9,-2)
    tex_ctx.rotate(0.2)
    tex_ctx.scale(0.6,0.8)
    tex_ctx.strokeStyle='rgb(0,150,0)'
    tex_ctx.lineWidth=2
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-2,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(5,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(1,-6)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255,40,40)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.bezierCurveTo(-11,-1,-8,5,0,13)
    tex_ctx.moveTo(0,0)
    tex_ctx.bezierCurveTo(11,-1,8,5,0,13)
    tex_ctx.fill()
    tex_ctx.setTransform(matrix)
    tex_ctx.translate(9,1)
    tex_ctx.rotate(-0.1)
    tex_ctx.scale(0.6,0.7)
    tex_ctx.fillStyle='rgb(0,85,255)'
    tex_ctx.beginPath()
    
    for(let i=0;i<Math.PI*2;i+=Math.PI*2/5){
        
        tex_ctx.rotate(Math.PI*2/5)
        tex_ctx.moveTo(-3,0)
        tex_ctx.bezierCurveTo(-7,-15,7,-15,3,0)
    }
    
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,255,20)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,0,4,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*0,256+256*4.5,128,128)
    tex_ctx.translate(128*0+128*0.5-36,256+128*9.5+16)
    tex_ctx.scale(0.825,0.825)
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=3.5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-20)
    tex_ctx.bezierCurveTo(-10,-10,-10,10,0,20)
    tex_ctx.lineTo(15,20)
    tex_ctx.bezierCurveTo(5,10,5,-10,15,-20)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.lineWidth=1.5
    e(15,0,10,20)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,240,0)'
    tex_ctx.lineWidth=3
    tex_ctx.scale(0.8,0.8)
    tex_ctx.translate(19,0)
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-20)
    tex_ctx.bezierCurveTo(-10,-10,-10,10,0,20)
    tex_ctx.translate(41,0)
    tex_ctx.lineTo(15,20)
    tex_ctx.bezierCurveTo(5,10,5,-10,15,-20)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.translate(15,0)
    tex_ctx.scale(1/0.8,1/0.8)
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-20)
    tex_ctx.bezierCurveTo(-10,-10,-10,10,0,20)
    tex_ctx.lineTo(15,20)
    tex_ctx.bezierCurveTo(5,10,5,-10,15,-20)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.lineWidth=2
    e(15,0,10,20)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(90,90,90)'
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(17,0)
    tex_ctx.lineTo(10,-45)
    tex_ctx.lineTo(-57,-45)
    tex_ctx.lineTo(-68,0)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(0, 230, 255)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-57,-45)
    tex_ctx.lineTo(-57+5,-45-6)
    tex_ctx.lineTo(-57+10,-45+6)
    tex_ctx.lineTo(-57+15,-45-6)
    tex_ctx.lineTo(-57+20,-45+6)
    tex_ctx.lineTo(-57+25,-45-6)
    tex_ctx.lineTo(-57+30,-45+6)
    tex_ctx.lineTo(-57+35,-45-6)
    tex_ctx.lineTo(-57+40,-45+6)
    tex_ctx.lineTo(-57+45,-45-6)
    tex_ctx.lineTo(-57+50,-45+6)
    tex_ctx.lineTo(-57+55,-45-6)
    tex_ctx.lineTo(-57+60,-45+6)
    tex_ctx.lineTo(-57+65,-45-6)
    tex_ctx.lineTo(-57+70,-45)
    tex_ctx.stroke()
    tex_ctx.scale(0.4,0.4)
    tex_ctx.translate(-52,-106)
    tex_ctx.lineWidth=5
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255,190,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,30)
    tex_ctx.bezierCurveTo(-36,31,-21,-5,-14,-12)
    tex_ctx.bezierCurveTo(10,-32,-19,-41,-9,-39)
    tex_ctx.bezierCurveTo(40,-17,18,31,0,30)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*1,256+256*4.5,128,128)
    tex_ctx.translate(128*1+128*0.5+7,256+128*9.5+6)
    tex_ctx.scale(0.8,0.8)
    tex_ctx.strokeStyle='rgb(0,170,0)'
    tex_ctx.lineWidth=6
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,30)
    tex_ctx.bezierCurveTo(18,5,13,-1,0,-10)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255,230,0)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.bezierCurveTo(-18,0,-35,-9,-42,-20)
    tex_ctx.bezierCurveTo(-28,-26,-10,-25,0,-10)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.rotate(0.5)
    tex_ctx.translate(-5,0)
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.bezierCurveTo(-18,0,-35,-9,-42,-20)
    tex_ctx.bezierCurveTo(-28,-26,-10,-25,0,-10)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.rotate(0.5)
    tex_ctx.translate(-5,0)
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.bezierCurveTo(-18,0,-35,-9,-42,-20)
    tex_ctx.bezierCurveTo(-28,-26,-10,-25,0,-10)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(190,170,0)'
    tex_ctx.lineWidth=6
    tex_ctx.beginPath()
    tex_ctx.moveTo(-46,22)
    tex_ctx.bezierCurveTo(-32,23,-21,-2,-24,5)
    tex_ctx.moveTo(-52,-11)
    tex_ctx.bezierCurveTo(-54,-13,-21,-7,-24,5)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*2,256+256*4.5,128,128)
    tex_ctx.translate(128*2+128*0.5+5,256+128*9.5)
    tex_ctx.strokeStyle='rgb(49, 133, 49)'
    tex_ctx.lineWidth=6
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,30)
    tex_ctx.bezierCurveTo(6,29,6,14,0,8)
    tex_ctx.stroke()
    tex_ctx.lineWidth=4
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(105, 67, 14)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,8)
    tex_ctx.bezierCurveTo(-60,-53,-36,14,0,8)
    tex_ctx.moveTo(0,8)
    tex_ctx.bezierCurveTo(11,-83,27,14,0,8)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*3,256+256*4.5,128,128)
    tex_ctx.translate(128*3+128*0.5+-1,256+128*9.5+4)
    tex_ctx.scale(1.6,1.6)
    tex_ctx.rotate(-0.1)
    tex_ctx.translate(18,6)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(205, 212, 72)'
    tex_ctx.lineWidth=3
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 9 -3 -8 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.7)'
    a=new Path2D('M-11 -7 C -15 -14 -5 -16 -8 -11M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.rotate(4.7)
    tex_ctx.translate(16,-17)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255, 54, 54)'
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 9 -3 -8 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.7)'
    a=new Path2D('M-11 -7 C -15 -14 -5 -16 -8 -11M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.rotate(1.4)
    tex_ctx.translate(5,23)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(56, 139, 255)'
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 9 -3 -8 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.7)'
    a=new Path2D('M-11 -7 C -15 -14 -5 -16 -8 -11M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(234,102,102)'
    tex_ctx.fillRect(128*4,256+256*4.5,128,128)
    tex_ctx.translate(128*4+128*0.5+-1,256+128*9.5+4)
    tex_ctx.scale(2.3,2.3)
    tex_ctx.translate(7,5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(230, 32, 32)'
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 9 -3 -8 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.3)'
    a=new Path2D('M-13 -7 C -15 -14 -9 -16 -8 -12M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(234,102,102)'
    tex_ctx.fillRect(128*4,256+256*4.5,128,128)
    tex_ctx.translate(128*4+128*0.5+-1,256+128*9.5+4)
    tex_ctx.scale(2.3,2.3)
    tex_ctx.translate(7,5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(230, 32, 32)'
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 9 -3 -8 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.3)'
    a=new Path2D('M-13 -7 C -15 -14 -9 -16 -8 -12M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(222,222,222)'
    tex_ctx.fillRect(128*5,256+256*4.5,128,128)
    tex_ctx.translate(128*5+128*0.5+-1,256+128*9.5+4)
    tex_ctx.scale(2.3,2.3)
    tex_ctx.translate(7,5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(190,190,190)'
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 9 -3 -8 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.3)'
    a=new Path2D('M-13 -7 C -15 -14 -9 -16 -8 -12M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(222,222,222)'
    tex_ctx.fillRect(128*5,256+256*4.5,128,128)
    tex_ctx.translate(128*5+128*0.5+-1,256+128*9.5+4)
    tex_ctx.scale(2.3,2.3)
    tex_ctx.translate(7,5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(190,190,190)'
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 9 -3 -8 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.3)'
    a=new Path2D('M-13 -7 C -15 -14 -9 -16 -8 -12M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(103, 174, 245)'
    tex_ctx.fillRect(128*6,256+256*4.5,128,128)
    tex_ctx.translate(128*6+128*0.5+-1,256+128*9.5+4)
    tex_ctx.scale(2.3,2.3)
    tex_ctx.translate(7,5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(49, 82, 247)'
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 9 -3 -8 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.3)'
    a=new Path2D('M-13 -7 C -15 -14 -9 -16 -8 -12M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(255, 178, 238)'
    tex_ctx.fillRect(128*7,256+256*4.5,128,128)
    tex_ctx.translate(128*7+128*0.5+-1,256+128*9.5+4)
    tex_ctx.scale(2.3,2.3)
    tex_ctx.translate(7,5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(227, 88, 195)'
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 9 -3 -8 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.3)'
    a=new Path2D('M-13 -7 C -15 -14 -9 -16 -8 -12M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(222, 144, 60)'
    tex_ctx.fillRect(128*0,256+256*5,128,128)
    tex_ctx.translate(128*0+128*0.5+-1,256+128*10.5+4)
    tex_ctx.scale(2.3,2.3)
    tex_ctx.translate(7,5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(140, 83, 23)'
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 9 -3 -8 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.3)'
    a=new Path2D('M-13 -7 C -15 -14 -9 -16 -8 -12M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(118, 207, 93)'
    tex_ctx.fillRect(128*1,256+256*5,128,128)
    tex_ctx.translate(128*1+128*0.5+-1,256+128*10.5+4)
    tex_ctx.scale(2.3,2.3)
    tex_ctx.translate(7,5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(48, 145, 19)'
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 9 -3 -8 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.3)'
    a=new Path2D('M-13 -7 C -15 -14 -9 -16 -8 -12M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(148, 148, 148)'
    tex_ctx.fillRect(128*2,256+256*5,128,128)
    tex_ctx.translate(128*2+128*0.5+-1,256+128*10.5+4)
    tex_ctx.scale(2.3,2.3)
    tex_ctx.translate(7,5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(50,50,50)'
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 9 -3 -8 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.3)'
    a=new Path2D('M-13 -7 C -15 -14 -9 -16 -8 -12M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(245, 222, 108)'
    tex_ctx.fillRect(128*3,256+256*5,128,128)
    tex_ctx.translate(128*3+128*0.5+-1,256+128*10.5+4)
    tex_ctx.scale(2.3,2.3)
    tex_ctx.translate(7,5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255, 230, 0)'
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 9 -3 -8 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.6)'
    a=new Path2D('M-13 -7 C -15 -14 -9 -16 -8 -12M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*4,256+256*5,128,128)
    tex_ctx.translate(128*4+128*0.5+-1,256+128*10.5+4)
    tex_ctx.scale(-2.1,1.75)
    tex_ctx.translate(5,8)
    tex_ctx.lineWidth=3
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(40, 212, 71)'
    a=new Path2D('M-16 -11 C -15 -24 -18 -26 -14 -28C -5 -34 -1 -29 3 -21L -4 -24L 2 -19C -5 -15 -11 -19 -12 -21L -11 -10')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.translate(-1,5)
    a=new Path2D('M-15 -15 C -20 4 4 8 5 0C 8 -3 -1 -24 -15 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(255,255,255,0.6)'
    tex_ctx.fillStyle='rgb(255,255,255,0.6)'
    e(8,-11,2*0.75,2.5*0.75)
    e(-8,0,2*0.75,2.5*0.75)
    e(-17,-23,2*0.75,2.5*0.75)
    e(-3,-32,2*0.75,2.5*0.75)
    a=new Path2D('M-11 -7 C -15 -14 -5 -16 -8 -11M-5 0 C 1 1 4 0 0 -6')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*5,256+256*5,128,128)
    tex_ctx.translate(128*5+128*0.5,256+128*10.5)
    tex_ctx.scale(1.6,1.6)
    tex_ctx.rotate(-0.1)
    tex_ctx.lineWidth=1.75
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(0,0,0,0.25)'
    a=new Path2D('M-10 -15L10 -15C10 -1 15 -14 15 15C15 25 -15 25 -15 15C-15 -15 -10 -1 -10 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(181, 120, 60)'
    tex_ctx.fillRect(-11,-20,22,6)
    tex_ctx.strokeRect(-11,-20,22,6)
    tex_ctx.translate(-3,8)
    tex_ctx.fillStyle='rgb(255,255,255)'
    e(0,0,5,5)
    tex_ctx.fillStyle='rgb(0,0,0,0.2)'
    e(0.5,1,4,4)
    tex_ctx.fillStyle='rgb(255,255,255)'
    e(-1,-1,3.5,3.5)
    tex_ctx.translate(7,-1)
    tex_ctx.fillStyle='rgb(255,255,255)'
    e(0,0,5,5)
    tex_ctx.fillStyle='rgb(0,0,0,0.2)'
    e(0.5,1,4,4)
    tex_ctx.fillStyle='rgb(255,255,255)'
    e(-1,-1,3.5,3.5)
    tex_ctx.translate(-7,-4)
    tex_ctx.scale(0.9,0.9)
    tex_ctx.fillStyle='rgb(255,255,255)'
    e(0,0,5,5)
    tex_ctx.fillStyle='rgb(0,0,0,0.2)'
    e(0.5,1,4,4)
    tex_ctx.fillStyle='rgb(255,255,255)'
    e(-1,-1,3.5,3.5)
    tex_ctx.translate(6,8)
    tex_ctx.fillStyle='rgb(255,255,255)'
    e(0,0,5,5)
    tex_ctx.fillStyle='rgb(0,0,0,0.2)'
    e(0.5,1,4,4)
    tex_ctx.fillStyle='rgb(255,255,255)'
    e(-1,-1,3.5,3.5)
    tex_ctx.translate(-1,-9)
    tex_ctx.fillStyle='rgb(255,255,255)'
    e(0,0,5,5)
    tex_ctx.fillStyle='rgb(0,0,0,0.2)'
    e(0.5,1,4,4)
    tex_ctx.fillStyle='rgb(255,255,255)'
    e(-1,-1,3.5,3.5)
    tex_ctx.translate(-2,-3)
    tex_ctx.lineWidth=2
    tex_ctx.strokeStyle='rgb(40, 74, 128)'
    a=new Path2D('M-12 -6C-12 -5 12 -5 12 -6M6 -6C 16 2 1 0 11 7')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*6,256+256*5,128,128)
    tex_ctx.translate(128*6+128*0.5,256+128*10.5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=6
    tex_ctx.fillStyle='rgb(255, 255, 160)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-35,-25)
    tex_ctx.lineTo(25,-25)
    tex_ctx.lineTo(35,-15)
    tex_ctx.lineTo(35,15)
    tex_ctx.lineTo(25,25)
    tex_ctx.lineTo(-35,25)
    tex_ctx.lineTo(-35,-25)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(130,160,130)'
    tex_ctx.fillStyle='rgb(130,160,130)'
    tex_ctx.lineWidth=7
    tex_ctx.beginPath()
    tex_ctx.moveTo(-32,-22)
    tex_ctx.lineTo(-32,22)
    tex_ctx.moveTo(23,-22)
    tex_ctx.lineTo(32,-13)
    tex_ctx.lineTo(32,13)
    tex_ctx.lineTo(23,22)
    tex_ctx.stroke()
    tex_ctx.scale(1.2,1.2)
    e(0,0,8,8)
    tex_ctx.fillRect(-3,-11,6,22)
    tex_ctx.rotate(Math.PI*0.25)
    tex_ctx.fillRect(-3,-11,6,22)
    tex_ctx.rotate(Math.PI*0.25)
    tex_ctx.fillRect(-3,-11,6,22)
    tex_ctx.rotate(Math.PI*0.25)
    tex_ctx.fillRect(-3,-11,6,22)
    tex_ctx.rotate(Math.PI*0.25)
    tex_ctx.fillStyle='rgb(255, 255, 160)'
    e(0,0,4,4)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(90, 255, 255)'
    tex_ctx.fillRect(128*7,256+256*5,128,128)
    tex_ctx.translate(128*7+128*0.5,256+128*10.5)
    tex_ctx.translate(-33,-26)
    tex_ctx.rotate(-0.4)
    tex_ctx.scale(2.25,2.25)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=2.5
    tex_ctx.fillStyle='rgb(255, 255, 160)'
    a=new Path2D('M 22 26C -7 39 -4 -3 19 8C 13 5 5 25 22 26')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*0,256+256*5.5,128,128)
    tex_ctx.translate(128*0+128*0.5,256+128*11.5)
    tex_ctx.scale(1.6,1.6)
    tex_ctx.lineWidth=4
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(186, 128, 41)'
    tex_ctx.scale(0.9,1)
    a=new Path2D('M-10 -15L10 -15C 21 -9 19 -4 15 15C15 25 -15 25 -15 15C-19 -4 -21 -9 -10 -15')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.scale(1/0.9,1)
    tex_ctx.lineWidth=2
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(138, 138, 138)'
    tex_ctx.fillRect(-11,-24,22,8)
    tex_ctx.strokeRect(-11,-24,22,8)
    tex_ctx.lineWidth=5
    tex_ctx.strokeStyle='rgb(200,0,0)'
    a=new Path2D('M -15 0 C -10 3 10 3 15 0')
    tex_ctx.stroke(a)
    tex_ctx.lineWidth=3
    tex_ctx.strokeStyle='rgb(255,180,0)'
    a=new Path2D('M -5 -3 C -10 3 8 -8 5 -2M 0 -3 C 0 5 3 -2 -1 9')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*1,256+256*5.5,128,128)
    tex_ctx.translate(128*1+128*0.5,256+128*11.5)
    tex_ctx.translate(-59,-52)
    tex_ctx.scale(1.4,1.4)
    tex_ctx.lineWidth=4
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(204, 163, 51)'
    a=new Path2D('M 26 40C 14 39 4 12 30 28C 35 1 45 12 50 26C 68 10 73 31 60 41C 67 58 51 74 41 52C 37 58 2 74 26 40')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.lineWidth=2
    tex_ctx.translate(41,24)
    tex_ctx.scale(0.9,0.9)
    tex_ctx.rotate(-0.075)
    tex_ctx.fillStyle='rgb(255, 212, 38)'
    a=new Path2D('M5.71,16.85L8.23,26.33L0.00,21.00L-8.23,26.33L-5.71,16.85L-13.31,10.67L-3.53,10.15L-0.00,1.00L3.53,10.15L13.31,10.67L5.71,16.85z')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.scale(1.2,1.2)
    tex_ctx.translate(-32,-22)
    tex_ctx.strokeStyle='rgb(230,230,100)'
    a=new Path2D('M 31 14L 32 21M 52 23L 46 28M 44 52L 42 45M 16 50L 22 43M 13 25L 19 29')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*2,256+256*5.5,128,128)
    tex_ctx.translate(128*2+128*0.5,256+128*11.5)
    tex_ctx.translate(-59,-52)
    tex_ctx.scale(1.4,1.4)
    tex_ctx.lineWidth=4
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(123, 179, 88)'
    a=new Path2D('M 26 40C 14 39 4 12 30 28C 35 1 45 12 50 26C 68 10 73 31 60 41C 67 58 51 74 41 52C 37 58 2 74 26 40')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.strokeStyle='rgb(181, 33, 33)'
    tex_ctx.fillStyle='rgb(0,0,0,0)'
    tex_ctx.rotate(-0.1)
    tex_ctx.scale(1/1.3,1/1.3)
    tex_ctx.lineWidth=3
    tex_ctx.translate(50,55)
    e(0,0,17,7)
    tex_ctx.stroke()
    tex_ctx.rotate(60*(Math.PI/180))
    e(0,0,17,7)
    tex_ctx.stroke()
    tex_ctx.rotate(60*(Math.PI/180))
    e(0,0,17,7)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(230,230,230)'
    e(-7,0,3,3)
    e(6,5,3,3)
    e(2,-10,3,3)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3.5,256+256*5.75)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.scale(0.95,0.95)
    tex_ctx.translate(0,-4)
    tex_ctx.fillStyle='rgb(123, 105, 65)'
    e(-13,-23,6,6)
    e(13,-23,6,6)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,20)
    tex_ctx.bezierCurveTo(-66,-49,-18,-56,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,20)
    tex_ctx.bezierCurveTo(66,-49,18,-56,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    g=tex_ctx.createLinearGradient(0,0,0,64)
    g.addColorStop(0,'rgb(33, 35, 37)')
    g.addColorStop(0.6,'rgb(123, 105, 65)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.moveTo(-11,-25)
    tex_ctx.bezierCurveTo(-11,49,-30,40,-11,64)
    tex_ctx.moveTo(11,-25)
    tex_ctx.bezierCurveTo(11,49,30,40,11,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-12,-11,24,75)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(20,20,20)'
    e(-19,-13,5,9)
    e(19,-13,5,9)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(16,-16,2,3)
    e(-22,-16,2,3)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(235,255,50)'
    tex_ctx.translate(128*4,256+256*5.5)
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.strokeStyle='white'
    tex_ctx.lineWidth=7
    tex_ctx.beginPath()
    tex_ctx.moveTo(-60,-20)
    tex_ctx.bezierCurveTo(0,-64,0,0,60,-60)
    tex_ctx.moveTo(-60,44)
    tex_ctx.bezierCurveTo(0,-5,13,46,60,33)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    function ellipse(x,y,w,h,r=0){
        tex_ctx.beginPath()
        tex_ctx.ellipse(x,y,w,h,r,0,6)
        tex_ctx.fill()
    }
    tex_ctx.fillStyle='#FFE089'
    tex_ctx.translate(128*5,256+256*5.5)
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(7+128/2,128/2)
    tex_ctx.scale(0.95,0.95)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='#FFE089'
    tex_ctx.fillStyle='rgb(209, 167, 113)'
    tex_ctx.strokeStyle='rgb(209, 167, 113)'
    ellipse(-42,0-5,22,22)
    ellipse(-33,-8-5,20,20)
    ellipse(-27,-16-5,20,20)
    ellipse(-35,-9-5,24,24)
    tex_ctx.lineWidth=7
    tex_ctx.beginPath()
    tex_ctx.moveTo(13,-40)
    tex_ctx.bezierCurveTo(15,-42,29,-43,32,-35)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(50,50,50)'
    tex_ctx.strokeStyle='rgb(50,50,50)'
    ellipse(-19,-19,6,7)
    ellipse(19,-19,6,7)
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,25+3)
    tex_ctx.bezierCurveTo(5,33,20,33,20,19+5)
    tex_ctx.moveTo(0,25+3)
    tex_ctx.bezierCurveTo(-5,33,-20,33,-20,19+5)
    tex_ctx.stroke()
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,3)
    tex_ctx.bezierCurveTo(-3,7,3,7,5,3)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6,256+256*5.5)
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.scale(128/30,128/30)
    canvg(tex_ctx.canvas,"<svg><rect fill='rgb(0,255,0)' x='0' y='0' width='30' height='30'></rect><g transform='translate(4,3) scale(1,1)' fill='rgb(180,0,0)'><path d='M21.426,10.665l-1.062-0.25c1.281-2.281-0.222-3.743-1.687-4C16.039,5.953,14,7.71,11.993,7.682 c0.621-0.35,1.328-1.127,1.88-2.144c0.889-1.631,1.047-3.258,0.354-3.635c-0.606-0.331-1.666,0.41-2.516,1.695 c-0.055-0.164-0.104-0.327-0.173-0.492C10.616,0.91,8.81-0.425,7.503,0.124C6.199,0.672,5.889,2.896,6.812,5.093 c0.47,1.117,1.168,2.006,1.912,2.543C6.998,6.931,5.362,5.413,3.504,5.705C1.582,6.008,1.362,8.883,0.551,8.758l0.438,2.375 c1.812,0.03,1.875-3.032,3.688-3.25c2.526-0.305,4.315,1.04,5.906,0.315c0.227-0.103,0.387-0.17,0.467-0.221 c0.041,0,0.074,0.004,0.116,0.002c0.604,0.716,4.229-0.659,6.67-0.031c1.207,0.31,0.857,2.559,0.652,3.747L21.426,10.665z M10.621,7.537c-0.098,0.041-0.201,0.063-0.306,0.072c-0.006,0.001-0.013,0.002-0.019,0.004C9.513,7.665,8.57,6.864,8.058,5.644 c-0.586-1.395-0.389-2.808,0.44-3.156c0.829-0.348,1.977,0.499,2.563,1.895c0.034,0.081,0.056,0.16,0.084,0.241 c-0.544,1.173-0.697,2.272-0.418,2.847C10.69,7.491,10.661,7.52,10.621,7.537z M11.044,7.185c-0.175-0.375-0.068-1.092,0.294-1.85 C11.47,6.092,11.361,6.768,11.044,7.185z M11.587,7.434c0.473-0.706,0.597-1.824,0.341-3.046c0.484-0.596,1.017-0.908,1.343-0.729 c0.439,0.239,0.34,1.273-0.225,2.309C12.613,6.764,12.033,7.325,11.587,7.434z'/><rect x='6.519' y='13.446' width='2.438' height='8.531'/><rect x='4.957' y='13.446' width='1' height='8.531'/><rect x='9.519' y='13.446' width='2.875' height='8.531'/><rect x='15.957' y='13.446' width='1' height='8.531'/><rect x='12.957' y='13.446' width='2.438' height='8.531'/><rect x='4.457' y='8.977' width='13' height='4'/></g>")
    tex_ctx.setTransform(1,0,0,1,0,0)
}

window.textures_bees=function(tex_ctx){

    tex_ctx.fillStyle='rgb(100,100,100,0)'
    tex_ctx.fillRect(0,0,2048,2048)
    
    tex_ctx.fillStyle='rgb(33, 20, 1)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(220,220,220)'
    tex_ctx.lineWidth=9
    tex_ctx.lineCap='round'
    tex_ctx.lineJoin='round'
    tex_ctx.beginPath()
    tex_ctx.moveTo((128/2)-(128/5),30)
    tex_ctx.lineTo((128/2)-(128/5),50)
    tex_ctx.moveTo((128/2)+(128/5),30)
    tex_ctx.lineTo((128/2)+(128/5),50)
    tex_ctx.closePath()
    tex_ctx.moveTo(128/2,100)
    tex_ctx.lineTo((128/2)-(128/5),80)
    tex_ctx.moveTo(128/2,100)
    tex_ctx.lineTo((128/2)+(128/5),80)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(237, 233, 9)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(33, 20, 1)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    
    tex_ctx.fillStyle='rgb(0,200,60)'
    tex_ctx.fillRect(128,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=18
    tex_ctx.beginPath()
    tex_ctx.moveTo((128/2)-(128/5)+128,30)
    tex_ctx.lineTo((128/2)-(128/5)+128,50)
    tex_ctx.moveTo((128/2)+(128/5)+128,30)
    tex_ctx.lineTo((128/2)+(128/5)+128,50)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=9
    tex_ctx.beginPath()
    tex_ctx.moveTo((128/2)-(128/5)+124,45)
    tex_ctx.lineTo((128/2)-(128/5)+124,53)
    tex_ctx.moveTo((128/2)-(128/5)+173,45)
    tex_ctx.lineTo((128/2)-(128/5)+173,53)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(128,128,128,128)
    tex_ctx.fillStyle='rgb(0,200,60)'
    tex_ctx.fillRect(128,128-1,128,128/3|0)
    tex_ctx.fillRect(128,213,128,128/3|0+1)
    
    tex_ctx.fillStyle='rgb(10,10,10)'
    tex_ctx.fillRect(128*2,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(0,-13)
    tex_ctx.beginPath()
    tex_ctx.moveTo((128/2)-(128/5)+123*2,86)
    tex_ctx.lineTo((128/2)-(128/5)+125*2,53)
    tex_ctx.moveTo((128/2)-(128/5)+125*2,53)
    tex_ctx.lineTo((128/2)-(128/5)+128*2,62)
    tex_ctx.moveTo((128/2)-(128/5)+159.5*2,59)
    tex_ctx.lineTo((128/2)-(128/5)+161*2,27)
    tex_ctx.moveTo((128/2)-(128/5)+161*2,27)
    tex_ctx.lineTo((128/2)-(128/5)+164*2,39)
    tex_ctx.moveTo((128/2)-(128/5)+128*2,94)
    tex_ctx.bezierCurveTo((128/2)-(128/5)+135*2,114,(128/2)-(128/5)+157*2,109,(128/2)-(128/5)+155*2,74)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(279,89,8,6,-0.2,0,7)
    tex_ctx.ellipse(352,59,8,6,-0.2,0,7)
    tex_ctx.moveTo(0,0)
    tex_ctx.ellipse(365,62,2,2,-0.2,0,7)
    tex_ctx.closePath()
    tex_ctx.translate(0,13)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(128*2,128,128,128)
    tex_ctx.fillStyle='rgb(10,10,10)'
    tex_ctx.fillRect(128*2,128-1,128,128/3|0)
    tex_ctx.fillRect(128*2,213,128,128/3|0+1)
    
    tex_ctx.translate(128*3,0)
    tex_ctx.fillStyle='rgb(190,0,0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(235, 66, 9)'
    tex_ctx.fillStyle='rgb(235, 66, 9)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.translate(63,-5)
    tex_ctx.moveTo(128/2-40+10,55-5)
    tex_ctx.lineTo(128/2-40-5+10,40-5)
    tex_ctx.moveTo(128/2-40-5-5+10,55-5)
    tex_ctx.lineTo(128/2-40-5+10,40-5)
    tex_ctx.moveTo(128/2-40-5-5,55-5)
    tex_ctx.bezierCurveTo(128/2-40-5-5,71-5,128/2-40-5-5+20,71-5,128/2-40-5-5+20,55-5)
    tex_ctx.arc(20,29,0,0,6)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(128/2-40+10,55-5)
    tex_ctx.lineTo(128/2-40-5+10,40-5)
    tex_ctx.moveTo(128/2-40-5-5+10,55-5)
    tex_ctx.lineTo(128/2-40-5+10,40-5)
    tex_ctx.moveTo(128/2-40-5-5,55-5)
    tex_ctx.bezierCurveTo(128/2-40-5-5,71-5,128/2-40-5-5+20,71-5,128/2-40-5-5+20,55-5)
    tex_ctx.arc(20,29,0,0,6)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.scale(-1,1)
    tex_ctx.translate(-65,5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.stroke()
    tex_ctx.translate(-58,0)
    tex_ctx.fillStyle='rgb(235, 66, 9)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(190,0,0)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*4,0)
    tex_ctx.fillStyle='rgb(70, 183, 240)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(15, 136, 212)'
    tex_ctx.lineWidth=10
    tex_ctx.beginPath()
    tex_ctx.moveTo(128*0.5-35,59)
    tex_ctx.bezierCurveTo(56,62,44,39,128*0.5-35,28)
    tex_ctx.translate(55,0)
    tex_ctx.moveTo(128*0.5-35,59)
    tex_ctx.bezierCurveTo(56,62,44,39,128*0.5-35,28)
    tex_ctx.translate(-55,0)
    tex_ctx.moveTo(128*0.5+-10,104)
    tex_ctx.bezierCurveTo(89,110,69,86,128*0.5+-5,86)
    tex_ctx.bezierCurveTo(40,85,45,102,128*0.5+-11,104)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(15, 136, 212)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(70, 183, 240)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5,0)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=3.5
    tex_ctx.beginPath()
    tex_ctx.translate(4,0)
    tex_ctx.moveTo(36,30)
    tex_ctx.bezierCurveTo(25,17,15,47,30,56)
    tex_ctx.bezierCurveTo(50,55,36,32,33,45)
    tex_ctx.translate(50,0)
    tex_ctx.moveTo(36,30)
    tex_ctx.bezierCurveTo(25,17,15,47,30,56)
    tex_ctx.bezierCurveTo(50,55,36,32,33,45)
    tex_ctx.translate(-54,0)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(215,215,0)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6,0)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.ellipse(128*0.5-30,40,15,13,0,0,7)
    tex_ctx.rect(0,35,128,8)
    tex_ctx.ellipse(128*0.5+30,40,15,13,0,0,7)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(220,220,220)'
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(128*0.5-30,32)
    tex_ctx.bezierCurveTo(128*0.5-36,35,128*0.5-35,32,128*0.5-40,40)
    tex_ctx.translate(61,0)
    tex_ctx.moveTo(128*0.5-30,32)
    tex_ctx.bezierCurveTo(128*0.5-36,35,128*0.5-35,32,128*0.5-40,40)
    tex_ctx.translate(-61,0)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(20,20,20)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7,0)
    tex_ctx.fillStyle='rgb(176, 128, 74)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(125, 78, 24)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.translate(32,20)
    
    for(let i=-0.71,j=0,inc=Math.PI*2/34;i<Math.PI*2*0.18;i+=inc,j++){
        
        let ri=(j-1)%2===0?25:28,r=j%2===0?22:31
        tex_ctx.moveTo(Math.sin(i-inc)*ri,Math.cos(i-inc)*ri)
        tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
    }
    
    tex_ctx.translate(60,0)
    
    for(let i=-0.71,j=0,inc=Math.PI*2/34;i<Math.PI*2*0.18;i+=inc,j++){
        
        let ri=(j-1)%2===0?25:28,r=j%2===0?22:31
        tex_ctx.moveTo(Math.sin(i-inc)*ri,Math.cos(i-inc)*ri)
        tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
    }
    
    tex_ctx.stroke()
    tex_ctx.translate(-32,60)
    tex_ctx.beginPath()
    
    for(let i=-0.74,j=0,inc=Math.PI*2/39;i<Math.PI*2*0.17;i+=inc,j++){
        
        let ri=(j-1)%2===0?25:28,r=j%2===0?22:31
        tex_ctx.moveTo(Math.sin(i-inc)*ri*1.5,Math.cos(i-inc)*ri)
        tex_ctx.lineTo(Math.sin(i)*r*1.5,Math.cos(i)*r)
    }
    
    tex_ctx.lineWidth=5
    tex_ctx.stroke()
    tex_ctx.translate(-32-28,-80)
    tex_ctx.fillStyle='rgb(176, 128, 74)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillRect(0,128-1,128,(128/3|0))
    tex_ctx.fillRect(0,213,128,(128/3|0)+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*8,0)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(205,205,205)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(2,20)
    tex_ctx.bezierCurveTo(128/2,128/2-40,128/2,128/2-40,126,20)
    tex_ctx.moveTo(128/2-25,45)
    tex_ctx.lineTo(128/2-25,60)
    tex_ctx.moveTo(128/2+25,45)
    tex_ctx.lineTo(128/2+25,60)
    tex_ctx.moveTo(128/2-30,100)
    tex_ctx.bezierCurveTo(128/2,128/2+30,128/2,128/2+30,128/2+30,100)
    tex_ctx.moveTo(128/2-23-10,95)
    tex_ctx.lineTo(128/2-19-10,106)
    tex_ctx.moveTo(128/2+23+10,95)
    tex_ctx.lineTo(128/2+19+10,106)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(175,175,175)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*9,0)
    tex_ctx.fillStyle='rgb(200,0,0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(80,0,0)'
    tex_ctx.fillStyle='rgb(80,0,0)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128/2,128/2+-5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,-41)
    tex_ctx.lineTo(-35,4)
    tex_ctx.lineTo(-26,20)
    tex_ctx.lineTo(-23,-32)
    tex_ctx.lineTo(-32,-23)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(-40,-41)
    tex_ctx.lineTo(-35,4)
    tex_ctx.lineTo(-26,20)
    tex_ctx.lineTo(-23,-32)
    tex_ctx.lineTo(-32,-23)
    tex_ctx.fill()
    tex_ctx.translate(0,4)
    tex_ctx.beginPath()
    tex_ctx.moveTo(54,16)
    tex_ctx.lineTo(44,30)
    tex_ctx.moveTo(-54,16)
    tex_ctx.lineTo(-44,30)
    tex_ctx.moveTo(-19,37)
    tex_ctx.lineTo(-10,40)
    tex_ctx.lineTo(0,50)
    tex_ctx.lineTo(10,40)
    tex_ctx.lineTo(18,37)
    tex_ctx.stroke()
    tex_ctx.translate(0,2)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(80,0,0)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(200,0,0)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(1280,0)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(120,120,120)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-128/2,-128/2)
    tex_ctx.bezierCurveTo(-28,-58,0,0,0,10)
    tex_ctx.bezierCurveTo(0,0,-28+128/2,-58,128/2,-128/2)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-18)
    tex_ctx.lineTo(-13,-6)
    tex_ctx.moveTo(20,-18)
    tex_ctx.lineTo(13,-6)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(120,120,120)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*11,0)
    tex_ctx.fillStyle='rgb(27, 219, 145)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(58, 125, 166)'
    tex_ctx.strokeStyle='rgb(58, 125, 166)'
    tex_ctx.lineWidth=7
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-35)
    tex_ctx.bezierCurveTo(-40,-20,-40,-15,-30,-20)
    tex_ctx.bezierCurveTo(-20,-2,-20,-35,-30,-35)
    tex_ctx.moveTo(-30,-35)
    tex_ctx.lineTo(-34,-11)
    tex_ctx.lineTo(-25,-30)
    tex_ctx.lineTo(-37,-23)
    tex_ctx.moveTo(30,-35)
    tex_ctx.bezierCurveTo(40,-20,40,-15,30,-20)
    tex_ctx.bezierCurveTo(20,-2,20,-35,30,-35)
    tex_ctx.moveTo(30,-35)
    tex_ctx.lineTo(34,-11)
    tex_ctx.lineTo(25,-30)
    tex_ctx.lineTo(37,-23)
    for(let i=-0.74,j=0,inc=Math.PI*2/39;i<Math.PI*2*0.17;i+=inc,j++){
        
        let r=29+Math.sin(i*183)*3
        tex_ctx.moveTo(Math.sin(i-inc)*r,Math.cos(i-inc)*r)
        tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
    }
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(27, 219, 145)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-30)
    tex_ctx.bezierCurveTo(-30,-33,-34,-20,-31,-20)
    tex_ctx.moveTo(30,-30)
    tex_ctx.bezierCurveTo(30,-33,34,-20,31,-20)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(29, 133, 72)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(27, 219, 145)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*12,0)
    tex_ctx.fillStyle='rgb(23, 118, 235)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(23, 197, 255)'
    tex_ctx.strokeStyle='rgb(23, 197, 255)'
    tex_ctx.lineWidth=13
    tex_ctx.scale(0.3,0.3)
    tex_ctx.translate(-92,-62)
    function ellipse(x,y,w,h,r=0){
        tex_ctx.beginPath()
        tex_ctx.ellipse(x,y,w,h,r,0,6)
        tex_ctx.fill()
    }
    function bezier(a,b,c,d,e,f,g,h,fill,stroke){
        tex_ctx.beginPath()
        tex_ctx.moveTo(a,b)
        tex_ctx.bezierCurveTo(c,d,e,f,g,h)
        
        if(fill)
        tex_ctx.fill()
        if(stroke)
        tex_ctx.stroke()
    }
    function line(a,b,c,d){
        tex_ctx.beginPath()
        tex_ctx.moveTo(a,b)
        tex_ctx.lineTo(c,d)
        tex_ctx.stroke()
    }
    
    tex_ctx.fillStyle='rgb(12, 168, 240)'
    ellipse(186,172,18,18)
    ellipse(413,135,18,18)
    tex_ctx.fillStyle='rgb(23, 197, 255)'
    ellipse(315,261,33,33)
    bezier(159,238,181,223,187,216,233,227,false,true)
    bezier(178,212,225,223,187,216,233,227,false,true)
    tex_ctx.translate(0,25)
    bezier(406,211,496,190,382,104,431,198,true,true)
    tex_ctx.lineWidth=20
    bezier(273,325,276,416,422,355,369,299,true,true)
    bezier(250,311,289,343,378,301,373,295,false,true)
    tex_ctx.beginPath()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(23, 118, 235)'
    ellipse(416,182,19*0.5,31*0.5)
    tex_ctx.translate(92,38)
    tex_ctx.scale(1/0.3,1/0.3)
    tex_ctx.fillStyle='rgb(242, 255, 0)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(23, 118, 235)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*13,0)
    tex_ctx.fillStyle='rgb(255,50,255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(30,255,100)'
    tex_ctx.lineWidth=11
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-30)
    tex_ctx.bezierCurveTo(-28,-44,-12,-10,-32,-11)
    tex_ctx.moveTo(16,-34)
    tex_ctx.bezierCurveTo(39,-26,5,-17,25,-14)
    tex_ctx.moveTo(-29,23)
    tex_ctx.bezierCurveTo(-14,22,-19,37,0,32)
    tex_ctx.bezierCurveTo(25,22,-8,25,28,22)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(30,255,100)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(255,50,255)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*14,0)
    tex_ctx.fillStyle='rgb(219, 72, 92)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(100,0,0)'
    tex_ctx.fillStyle='rgb(100,0,0)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillRect(-128*0.5,-128*0.5,128*0.5,128)
    tex_ctx.beginPath()
    tex_ctx.moveTo(30,-10)
    tex_ctx.lineTo(30,-25)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(30,-24,10,5,0,-3.0,-12.7)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(219,72,92)'
    tex_ctx.fillStyle='rgb(219,72,92)'
    tex_ctx.fillRect(-128*0.5,128*0.5,128,129)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-10)
    tex_ctx.lineTo(-30,-25)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(-30,-24,10,5,0,-3.0,-12.7)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(100,0,0)'
    tex_ctx.translate(0,128)
    tex_ctx.beginPath()
    tex_ctx.moveTo(128*0.5,0)
    tex_ctx.lineTo(0,128*0.5)
    tex_ctx.lineTo(128*0.5,128)
    tex_ctx.lineTo(128,128*0.5)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*15,0)
    tex_ctx.fillStyle='rgb(255, 149, 125)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(255, 20, 0)'
    tex_ctx.fillStyle='rgb(255, 20, 0)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-45,-30)
    tex_ctx.bezierCurveTo(-45,-40,-20,-40,-13,-23)
    tex_ctx.moveTo(-19,40)
    tex_ctx.bezierCurveTo(-34,7,32,8,32,40)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(-45,-30)
    tex_ctx.bezierCurveTo(-45,-40,-20,-40,-13,-23)
    tex_ctx.stroke()
    tex_ctx.scale(-1,1)
    tex_ctx.beginPath()
    tex_ctx.ellipse(-24,-11,7,10,0,0,7)
    tex_ctx.ellipse(24,-11,7,10,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255, 149, 125)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-28,-5,2,4,0,0,7)
    tex_ctx.ellipse(21,-5,2,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(245, 123, 95)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(255, 149, 125)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillStyle='rgb(214, 60, 26)'
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*0,256)
    tex_ctx.fillStyle='rgb(255,0,0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(255, 255, 255)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,-32)
    tex_ctx.lineTo(-32,-64)
    tex_ctx.bezierCurveTo(5,0,-5,0,32,-64)
    tex_ctx.lineTo(64,-32)
    tex_ctx.lineTo(64,64)
    tex_ctx.bezierCurveTo(-25,0,25,0,-64,64)
    tex_ctx.moveTo(-20,45-8)
    tex_ctx.bezierCurveTo(-10,60-8,10,60-8,20,45-8)
    tex_ctx.bezierCurveTo(10,55-8,-10,55-8,-20,45-8)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.ellipse(-25,0,4,3,0,0,7)
    tex_ctx.rect(-33,0,10,1)
    tex_ctx.moveTo(25,0)
    tex_ctx.ellipse(25,0,4,3,0,0,7)
    tex_ctx.rect(23,0,10,1)
    tex_ctx.fillStyle=tex_ctx.strokeStyle='rgb(255, 0, 0)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(255,0,0)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1,256)
    tex_ctx.fillStyle='rgb(0,0,255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(255, 255, 255)'
    tex_ctx.lineWidth=5
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,-64)
    tex_ctx.lineTo(0,-25)
    tex_ctx.lineTo(64,-64)
    tex_ctx.lineTo(64,-64+20)
    tex_ctx.lineTo(50,-64+30)
    tex_ctx.lineTo(64,-64+40)
    tex_ctx.lineTo(64,-64+60)
    tex_ctx.lineTo(50,-64+70)
    tex_ctx.lineTo(64,-64+90)
    tex_ctx.lineTo(15,-64+90)
    tex_ctx.bezierCurveTo(15,10,-15,10,-15,-64+90)
    tex_ctx.lineTo(-64,-64+90)
    tex_ctx.lineTo(-50,-64+70)
    tex_ctx.lineTo(-64,-64+60)
    tex_ctx.lineTo(-64,-64+40)
    tex_ctx.lineTo(-50,-64+30)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,45)
    tex_ctx.lineTo(-20,55)
    tex_ctx.lineTo(20,55)
    tex_ctx.lineTo(30,45)
    tex_ctx.moveTo(-30+3,45-3)
    tex_ctx.lineTo(-30-3,45+3)
    tex_ctx.moveTo(30-3,45-3)
    tex_ctx.lineTo(30+3,45+3)
    tex_ctx.strokeStyle='rgb(255, 255, 255)'
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(0,0,255)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*2,256)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-45,-40)
    tex_ctx.lineTo(-45,40)
    tex_ctx.moveTo(-30,-40)
    tex_ctx.lineTo(-30,40)
    tex_ctx.moveTo(-15,-40)
    tex_ctx.lineTo(-15,40)
    tex_ctx.moveTo(0,-40)
    tex_ctx.lineTo(0,40)
    tex_ctx.moveTo(45,-40)
    tex_ctx.lineTo(45,40)
    tex_ctx.moveTo(30,-40)
    tex_ctx.lineTo(30,40)
    tex_ctx.moveTo(15,-40)
    tex_ctx.lineTo(15,40)
    tex_ctx.fillStyle='rgb(255,255,0)'
    tex_ctx.strokeStyle='rgb(255,255,0)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,-64)
    tex_ctx.lineTo(-64,-40)
    tex_ctx.bezierCurveTo(-39,-15,39,-15,64,-40)
    tex_ctx.lineTo(64,-64)
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,10)
    tex_ctx.bezierCurveTo(-39,25,39,25,64,10)
    tex_ctx.lineTo(64,64)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-15,40)
    tex_ctx.lineTo(0,55)
    tex_ctx.lineTo(15,40)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(255,255,0)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3,256)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.strokeStyle='rgb(59, 142, 209)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-26,-29,6,8,9.2,7,15)
    tex_ctx.ellipse(26,-29,7,9,-9.2,7,15)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,-2,5,5,-9.2,7,15)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-26,23)
    tex_ctx.bezierCurveTo(-10,38,24,31,29,21)
    tex_ctx.moveTo(-25,13)
    tex_ctx.bezierCurveTo(-23,21,-29,30,-36,28)
    tex_ctx.moveTo(31,12)
    tex_ctx.bezierCurveTo(28,21,34,30,40,28)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*4,256)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(243, 73, 45)'
    tex_ctx.strokeStyle='rgb(243, 73, 45)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-43+7,-20)
    tex_ctx.bezierCurveTo(-35+7,-28,-22+7,-19,-25+7,-16)
    tex_ctx.moveTo(43-7,-20)
    tex_ctx.bezierCurveTo(35-7,-28,22-7,-19,25-7,-16)
    tex_ctx.stroke()
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(-26,23)
    tex_ctx.bezierCurveTo(-11,40,16,32,26,21)
    tex_ctx.bezierCurveTo(13,58,-20,32,-26,23)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(243, 73, 45)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5,256)
    tex_ctx.fillStyle='rgb(59, 94, 157)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=4
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(182, 220, 248)'
    tex_ctx.strokeStyle='rgb(182, 220, 248)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,-25)
    tex_ctx.bezierCurveTo(-16,-9,-41,-6,-39,-26)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-26)
    tex_ctx.bezierCurveTo(-24,-23,-13,-20,-8,-29)
    tex_ctx.stroke()
    tex_ctx.translate(51,0)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,-25)
    tex_ctx.bezierCurveTo(-16,-9,-41,-6,-39,-26)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-26)
    tex_ctx.bezierCurveTo(-24,-23,-13,-20,-8,-29)
    tex_ctx.stroke()
    tex_ctx.scale(1.45,1.45)
    tex_ctx.translate(-12,35)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,-25)
    tex_ctx.bezierCurveTo(-16,-9,-41,-6,-39,-26)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-26)
    tex_ctx.bezierCurveTo(-24,-23,-13,-20,-8,-29)
    tex_ctx.stroke()
    tex_ctx.translate(12,-35)
    tex_ctx.scale(1/1.45,1/1.45)
    tex_ctx.translate(-51,0)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(59, 94, 157)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6,256)
    tex_ctx.fillStyle='rgb(241,241,241)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(243, 73, 45)'
    tex_ctx.strokeStyle='rgb(243, 73, 45)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-16,29)
    tex_ctx.bezierCurveTo(-5,42,0,37,10,35)
    tex_ctx.stroke()
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(-49,-25)
    tex_ctx.bezierCurveTo(-11,-13,23,-25,45,-36)
    tex_ctx.bezierCurveTo(45,19,22,13,2,-11)
    tex_ctx.bezierCurveTo(-10,22,-36,13,-49,-25)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(243, 73, 45)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(241,241,241)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7,256)
    tex_ctx.fillStyle='rgb(160,160,160)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-41,-35)
    tex_ctx.bezierCurveTo(-41,-32,-22,-25,-18,-28)
    tex_ctx.moveTo(41,-35)
    tex_ctx.bezierCurveTo(41,-32,22,-25,18,-28)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-15,40-8)
    tex_ctx.bezierCurveTo(5,24-8,-5,24-8,15,40-8)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(-28,-14,7,9,0,0,7)
    tex_ctx.ellipse(28,-14,7,9,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillRect(-53.5,11.4,23,9)
    tex_ctx.fillRect(53.5-23,11.4,23,9)
    tex_ctx.fillStyle='rgb(160,160,160)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-32,-12,3,5,0,0,7)
    tex_ctx.ellipse(24,-12,3,5,0,0,7)
    tex_ctx.fill()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(240,240,240)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(160,160,160)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*8,256)
    tex_ctx.fillStyle='rgb(242, 255, 255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.strokeStyle='rgb(100,100,150)'
    tex_ctx.beginPath()
    tex_ctx.translate(-65,-52)
    tex_ctx.moveTo(35,15)
    tex_ctx.bezierCurveTo(25,22,15,41,30,49)
    tex_ctx.bezierCurveTo(52,54,43,18,33,37)
    tex_ctx.translate(65*2,-9)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(35,15)
    tex_ctx.bezierCurveTo(25,22,15,41,30,49)
    tex_ctx.bezierCurveTo(52,54,43,18,33,37)
    tex_ctx.scale(-1,1)
    tex_ctx.translate(-65,9+53)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(7+4,11)
    tex_ctx.bezierCurveTo(4,40,-10+4,35,-12+4,31)
    tex_ctx.bezierCurveTo(-13+4,12,-1+4,22,7+4,11)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(242, 255, 255)'
    tex_ctx.fillRect(0,128-1,128,128.5)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*9,256)
    tex_ctx.fillStyle='rgb(242, 255, 255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.strokeStyle='rgb(100,100,150)'
    tex_ctx.beginPath()
    tex_ctx.translate(-65,-52)
    tex_ctx.moveTo(35,15)
    tex_ctx.bezierCurveTo(25,22,15,41,30,49)
    tex_ctx.bezierCurveTo(52,54,43,18,33,37)
    tex_ctx.translate(65*2,-9)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(35,15)
    tex_ctx.bezierCurveTo(25,22,15,41,30,49)
    tex_ctx.bezierCurveTo(52,54,43,18,33,37)
    tex_ctx.scale(-1,1)
    tex_ctx.translate(-65,9+53)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(7+4,11)
    tex_ctx.bezierCurveTo(4,40,-10+4,35,-12+4,31)
    tex_ctx.bezierCurveTo(-13+4,12,-1+4,22,7+4,11)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128-1,128,128.5)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*9,256)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.strokeStyle='rgb(59, 142, 209)'
    tex_ctx.translate(0,10)
    tex_ctx.beginPath()
    tex_ctx.moveTo(64,0+5)
    tex_ctx.lineTo(48,10+2.5)
    tex_ctx.lineTo(60,20)
    tex_ctx.lineTo(48,30-2.5)
    tex_ctx.lineTo(64,40-5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,0+5)
    tex_ctx.lineTo(-48,10+2.5)
    tex_ctx.lineTo(-60,20)
    tex_ctx.lineTo(-48,30-2.5)
    tex_ctx.lineTo(-64,40-5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(43,-45)
    tex_ctx.lineTo(14,-40)
    tex_ctx.moveTo(-39,-44)
    tex_ctx.lineTo(-11,-40)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(26,-30,10,13,0,0,7)
    tex_ctx.ellipse(-20,-30,10,13,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(19,-28,6,8,0,0,7)
    tex_ctx.ellipse(-26,-27,6,8,0,0,7)
    tex_ctx.fill()
    tex_ctx.translate(0,-10)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.translate(-31,51)
    tex_ctx.scale(-1.4,1.4)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,-25)
    tex_ctx.bezierCurveTo(-16,-9,-41,-6,-39,-26)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-26)
    tex_ctx.bezierCurveTo(-24,-23,-13,-20,-8,-29)
    tex_ctx.stroke()
    tex_ctx.scale(1/-1.4,1/1.4)
    tex_ctx.translate(31,-51)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*10,256)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=5
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(243,73,45)'
    tex_ctx.strokeStyle=' rgb(243,73,45)'
    tex_ctx.translate(0,10)
    tex_ctx.beginPath()
    tex_ctx.moveTo(64,0+5)
    tex_ctx.lineTo(48,10+2.5)
    tex_ctx.lineTo(60,20)
    tex_ctx.lineTo(48,30-2.5)
    tex_ctx.lineTo(64,40-5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,0+5)
    tex_ctx.lineTo(-48,10+2.5)
    tex_ctx.lineTo(-60,20)
    tex_ctx.lineTo(-48,30-2.5)
    tex_ctx.lineTo(-64,40-5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(43,-45)
    tex_ctx.lineTo(14,-40)
    tex_ctx.moveTo(-39,-44)
    tex_ctx.lineTo(-11,-40)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(26,-30,10,13,0,0,7)
    tex_ctx.ellipse(-20,-30,10,13,0,0,7)
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(17, 32, 43)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(39,-29)
    tex_ctx.lineTo(0,-22)
    tex_ctx.lineTo(-39,-29)
    tex_ctx.stroke()
    tex_ctx.translate(0,-10)
    tex_ctx.strokeStyle='rgb(243,73,45)'
    tex_ctx.translate(-31,51)
    tex_ctx.scale(-1.4,1.4)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-21)
    tex_ctx.bezierCurveTo(-12,-14,-31,-12,-36,-17)
    tex_ctx.stroke()
    tex_ctx.scale(1/-1.4,1/1.4)
    tex_ctx.translate(31,-51)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(243,73,45)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*11,256)
    tex_ctx.fillStyle='rgb(50, 190, 71)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.strokeStyle='rgb(17, 32, 43)'
    tex_ctx.translate(0,10)
    tex_ctx.beginPath()
    tex_ctx.ellipse(22,-30,7,9,0,0,7)
    tex_ctx.ellipse(-22,-30,7,9,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillRect(-41,-44,30,10)
    tex_ctx.fillRect(41-30,-44,30,10)
    tex_ctx.fillStyle='rgb(50, 190, 71)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,10)
    tex_ctx.lineTo(-36,14)
    tex_ctx.lineTo(-40,18)
    tex_ctx.moveTo(40,10)
    tex_ctx.lineTo(36,14)
    tex_ctx.lineTo(40,18)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(18,-28,4,5,0,0,7)
    tex_ctx.ellipse(-26,-28,4,5,0,0,7)
    tex_ctx.fill()
    tex_ctx.translate(0,-10)
    tex_ctx.lineWidth=6
    tex_ctx.beginPath()
    tex_ctx.moveTo(-15,20)
    tex_ctx.lineTo(0,30)
    tex_ctx.lineTo(15,20)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(50, 190, 71)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*12,256)
    tex_ctx.fillStyle='rgb(240, 211, 24)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.strokeStyle='rgb(17, 32, 43)'
    tex_ctx.translate(0,7)
    tex_ctx.beginPath()
    tex_ctx.ellipse(-26-6,-29,9,9,0,0,7)
    tex_ctx.ellipse(26-5,-29,9,9,0,0,7)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-34)
    tex_ctx.bezierCurveTo(-28,-46,-19,-38,-14,-32)
    tex_ctx.moveTo(-42+55,-34)
    tex_ctx.bezierCurveTo(-28+55,-46,-19+55,-38,-14+55,-32)
    tex_ctx.translate(0,-16)
    tex_ctx.moveTo(-37,23)
    tex_ctx.bezierCurveTo(-10,38,24,31,42,21)
    tex_ctx.moveTo(-36,15)
    tex_ctx.bezierCurveTo(-36,21,-35,28,-44,29)
    tex_ctx.moveTo(44,12)
    tex_ctx.bezierCurveTo(40,21,46,30,48,28)
    tex_ctx.stroke()
    tex_ctx.translate(0,10)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(240, 211, 24)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*13,256)
    tex_ctx.fillStyle='rgb(252, 186, 3)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=4
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(99, 73, 39)'
    tex_ctx.beginPath()
    tex_ctx.translate(-25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-30,0,-30,8,-64)
    tex_ctx.translate(25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-20,0,-20,8,-64)
    tex_ctx.translate(25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-30,0,-30,8,-64)
    tex_ctx.translate(-25,0)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.strokeStyle='rgb(17, 32, 43)'
    tex_ctx.beginPath()
    tex_ctx.translate(-25,-10)
    tex_ctx.scale(1.2,1.5)
    tex_ctx.rotate(0.15)
    tex_ctx.moveTo(-10,0)
    tex_ctx.bezierCurveTo(-8,7,8,7,10,0)
    tex_ctx.bezierCurveTo(8,-7,-8,-7,-10,0)
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*13+128/2,256+128/2)
    tex_ctx.translate(25,-10)
    tex_ctx.scale(1.2,1.5)
    tex_ctx.rotate(-0.15)
    tex_ctx.moveTo(-10,0)
    tex_ctx.bezierCurveTo(-8,7,8,7,10,0)
    tex_ctx.bezierCurveTo(8,-7,-8,-7,-10,0)
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*13+128/2,256+128/2)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-7,10)
    tex_ctx.bezierCurveTo(-5,13,5,13,7,10)
    tex_ctx.moveTo(0,13)
    tex_ctx.lineTo(0,22)
    tex_ctx.moveTo(-20,20)
    tex_ctx.bezierCurveTo(-10,28,-5,28,0,20)
    tex_ctx.moveTo(20,20)
    tex_ctx.bezierCurveTo(10,28,5,28,0,20)
    tex_ctx.moveTo(-31,14)
    tex_ctx.lineTo(-62,0)
    tex_ctx.moveTo(-31,22)
    tex_ctx.lineTo(-62,27)
    tex_ctx.moveTo(31,14)
    tex_ctx.lineTo(62,0)
    tex_ctx.moveTo(31,22)
    tex_ctx.lineTo(62,27)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(99, 73, 39)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(252, 186, 3)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*14,256)
    tex_ctx.fillStyle='rgb(117, 184, 235)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=8
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    tex_ctx.translate(0,17)
    tex_ctx.moveTo(-20,0)
    tex_ctx.lineTo(0,15)
    tex_ctx.lineTo(20,0)
    tex_ctx.translate(0,-14)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.scale(0.4*0.9,0.6*0.9)
    tex_ctx.translate(-75,-37)
    tex_ctx.moveTo(0,40)
    tex_ctx.bezierCurveTo(10,10,10,10,40,0)
    tex_ctx.bezierCurveTo(10,-10,10,-10,0,-40)
    tex_ctx.bezierCurveTo(-10,-10,-10,-10,-40,0)
    tex_ctx.bezierCurveTo(-10,10,-10,10,0,40)
    tex_ctx.translate(75*2,0)
    tex_ctx.moveTo(0,40)
    tex_ctx.bezierCurveTo(10,10,10,10,40,0)
    tex_ctx.bezierCurveTo(10,-10,10,-10,0,-40)
    tex_ctx.bezierCurveTo(-10,-10,-10,-10,-40,0)
    tex_ctx.bezierCurveTo(-10,10,-10,10,0,40)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*14,256)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(117, 184, 235)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*15,256)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(243, 73, 45)'
    tex_ctx.strokeStyle='rgb(243, 73, 45)'
    tex_ctx.beginPath()
    tex_ctx.translate(0,10)
    tex_ctx.moveTo(-37,-47)
    tex_ctx.bezierCurveTo(-26,-36,-12,-45,-20,-36)
    tex_ctx.moveTo(37,-47)
    tex_ctx.bezierCurveTo(26,-36,12,-45,20,-36)
    tex_ctx.moveTo(-25,-37)
    tex_ctx.ellipse(-21,-31,6,10,0,0,7)
    tex_ctx.moveTo(25,-37)
    tex_ctx.ellipse(21,-31,6,10,3.141592,0,7)
    tex_ctx.translate(0,-3)
    
    for(let i=-1.2,j=0,inc=Math.PI*2/15;i<Math.PI-1.0;i+=inc,j++){
        
        let ri=(j-1)%2===0?15:30,r=j%2===0?15:30
        
        tex_ctx.moveTo(Math.sin(i-inc)*ri*1.25,Math.cos(i-inc)*ri+10)
        tex_ctx.lineTo(Math.sin(i)*r*1.25,Math.cos(i)*r+10)
    }
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*15,256)
    tex_ctx.fillStyle='rgb(243, 73, 45)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*0,256*2)
    tex_ctx.fillStyle='rgb(150, 106, 85)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=6
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-37,-10)
    tex_ctx.bezierCurveTo(-35,-55,-4,-29,-15,-10)
    tex_ctx.bezierCurveTo(-16,-5,-36,-5,-37,-10)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-7)
    tex_ctx.bezierCurveTo(-32,-22,-15,-22,-15,-10)
    tex_ctx.bezierCurveTo(-16,-5,-36,-5,-30,-7)
    tex_ctx.fill()
    tex_ctx.scale(-1,1)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-37,-10)
    tex_ctx.bezierCurveTo(-35,-55,-4,-29,-15,-10)
    tex_ctx.bezierCurveTo(-16,-5,-36,-5,-37,-10)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-7)
    tex_ctx.bezierCurveTo(-32,-22,-15,-22,-15,-10)
    tex_ctx.bezierCurveTo(-16,-5,-36,-5,-30,-7)
    tex_ctx.fill()
    tex_ctx.fillRect(30.6,1.6,25,12)
    tex_ctx.beginPath()
    tex_ctx.ellipse(1,2,4,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-19,21)
    tex_ctx.bezierCurveTo(-6,34,9,32,19,21)
    tex_ctx.lineWidth=4
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(255, 200, 18)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(150, 106, 85)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1,256*2)
    tex_ctx.fillStyle='rgb(229, 178, 56)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-26,-21,8,12,0,0,7)
    tex_ctx.ellipse(26,-21,8,12,0,0,7)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,-38)
    tex_ctx.lineTo(-21,-33)
    tex_ctx.moveTo(40,-38)
    tex_ctx.lineTo(21,-33)
    tex_ctx.moveTo(0,3)
    tex_ctx.lineTo(0,32)
    tex_ctx.bezierCurveTo(0,40,-26,40,-26,32)
    tex_ctx.moveTo(0,32)
    tex_ctx.bezierCurveTo(0,40,26,40,26,32)
    tex_ctx.stroke()
    ellipse(0,3,8,5,0,0,7)
    ellipse(24,10,3,3,0,0,7)
    ellipse(32,21,3,3,0,0,7)
    ellipse(16,21,3,3,0,0,7)
    ellipse(0,3,8,5,0,0,7)
    ellipse(-24,10,3,3,0,0,7)
    ellipse(-32,21,3,3,0,0,7)
    ellipse(-16,21,3,3,0,0,7)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(229, 207, 56)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(229, 178, 56)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*2,256*2)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(68, 152, 213)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,-50)
    tex_ctx.bezierCurveTo(-34,-24,34,-24,64,-50)
    tex_ctx.lineTo(64,-8)
    tex_ctx.bezierCurveTo(44,20,-44,20,-64,-8)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    ellipse(-27,-13,12,7,0.3)
    ellipse(27,-13,12,7,-0.3)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3,256*2)
    tex_ctx.fillStyle='rgb(159, 159, 159)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=3
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(255,0,0)'
    ellipse(-24,-23,5,5)
    ellipse(24,-23,5,5)
    tex_ctx.beginPath()
    tex_ctx.translate(-41,0)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-5,5)
    tex_ctx.moveTo(0+7,0)
    tex_ctx.lineTo(-5+7,5)
    tex_ctx.moveTo(0+7+7,0)
    tex_ctx.lineTo(-5+7+7,5)
    tex_ctx.translate(70,0)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-5,5)
    tex_ctx.moveTo(0+7,0)
    tex_ctx.lineTo(-5+7,5)
    tex_ctx.moveTo(0+7+7,0)
    tex_ctx.lineTo(-5+7+7,5)
    tex_ctx.translate(-29,0)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(159, 159, 159)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*4,256*2)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(229, 207, 56)'
    tex_ctx.fillRect(-10,-20,20,10)
    tex_ctx.fillRect(-64,-40,35,50)
    ellipse(-64+35,-15,25,25)
    tex_ctx.fillRect(64-35,-40,35,50)
    ellipse(64-35,-15,25,25)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    ellipse(-27,-15,8,12)
    ellipse(27,-15,8,12)
    tex_ctx.fillStyle='rgb(229, 207, 56)'
    ellipse(21,-16,4,6)
    ellipse(-32,-16,4,6)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(229, 207, 56)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5,256*2)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2-8)
    tex_ctx.lineWidth=6
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.strokeStyle='rgb(241, 241, 241)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-11,-33)
    tex_ctx.bezierCurveTo(-19,-26,-18,-20,-38,-16)
    tex_ctx.moveTo(6,-33)
    tex_ctx.bezierCurveTo(9,-26,11,-20,30,-16)
    tex_ctx.stroke()
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,40)
    tex_ctx.bezierCurveTo(-3,39,6,39,13,40)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(159, 159, 159)'
    tex_ctx.strokeStyle='rgb(159, 159, 159)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-4)
    tex_ctx.bezierCurveTo(-15,23,-41,14,-37,-3)
    tex_ctx.lineTo(-12,-4)
    tex_ctx.moveTo(12,-4)
    tex_ctx.bezierCurveTo(8,27,40,12,34,-3)
    tex_ctx.lineTo(12,-4)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.strokeStyle='rgb(241, 241, 241)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-4)
    tex_ctx.bezierCurveTo(-22,13,-32,3,-37,-3)
    tex_ctx.lineTo(-12,-4)
    tex_ctx.moveTo(12,-4)
    tex_ctx.bezierCurveTo(19,13,32,3,34,-3)
    tex_ctx.lineTo(12,-4)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2+8)
    tex_ctx.fillStyle='rgb(159, 159, 159)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6,256*2)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2-15)
    tex_ctx.lineWidth=6
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.strokeStyle='rgb(241, 241, 241)'
    ellipse(-20,-13,5,10)
    ellipse(20,-13,5,10)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-5)
    tex_ctx.bezierCurveTo(-25,-7,-29,-7,-34,-3)
    tex_ctx.moveTo(-20,-5)
    tex_ctx.bezierCurveTo(-25,1,-29,-7,-24,-3)
    tex_ctx.moveTo(20,-5)
    tex_ctx.bezierCurveTo(25,-7,29,-7,34,-3)
    tex_ctx.moveTo(20,-5)
    tex_ctx.bezierCurveTo(25,1,29,-7,24,-3)
    tex_ctx.moveTo(-10,50)
    tex_ctx.bezierCurveTo(-10,16,10,15,10,50)
    tex_ctx.bezierCurveTo(2,49,3,46,-10,50)
    tex_ctx.stroke()
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-2,24)
    tex_ctx.bezierCurveTo(-5,55,1,15,2,25)
    tex_ctx.moveTo(5,29)
    tex_ctx.bezierCurveTo(1,58,2,15,7,30)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2+15)
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7,256*2)
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2-5)
    tex_ctx.lineWidth=3.5
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.strokeStyle='rgb(241, 241, 241)'
    ellipse(-22,-20,9,12)
    ellipse(22,-20,9,12)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-32,-20)
    tex_ctx.lineTo(0,-18)
    tex_ctx.lineTo(32,-20)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-2)
    tex_ctx.lineTo(0,13)
    tex_ctx.lineTo(32,5)
    tex_ctx.fill()
    for(let i=0.18;i<Math.PI;i+=Math.PI/8){
        
        ellipse(Math.cos(i)*40,Math.sin(i)*30+15,6,6)
    }
    tex_ctx.translate(-128/2,-128/2+4)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*8,256*2)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2-5)
    tex_ctx.lineWidth=4
    tex_ctx.fillStyle='rgb(245, 139, 222)'
    ellipse(-30,6,8,6)
    ellipse(30,6,8,6)
    tex_ctx.fillStyle='rgb(230,230,230)'
    ellipse(-20,-11,5,5)
    ellipse(20,-11,5,5)
    ellipse(0,4,3,3)
    tex_ctx.strokeStyle='rgb(230,230,230)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-9,19)
    tex_ctx.bezierCurveTo(0,24,0,23,9,20)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2+4)
    tex_ctx.fillStyle='rgb(136, 220, 232)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*9,256*2)
    tex_ctx.fillStyle='#0E141E'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2+7)
    tex_ctx.lineWidth=6
    tex_ctx.fillStyle='#bde5ea'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-53,-50)
    tex_ctx.bezierCurveTo(-47,-24,-28,1,-16,-5)
    tex_ctx.bezierCurveTo(-30,-12,-38,-29,-53,-50)
    tex_ctx.moveTo(56,-55)
    tex_ctx.bezierCurveTo(45,-7,29,-4,16,-1)
    tex_ctx.bezierCurveTo(30,-12,23,-5,56,-55)
    tex_ctx.scale(0.75,1)
    tex_ctx.moveTo(-22,23)
    tex_ctx.bezierCurveTo(-16,34,5,48,31,22)
    tex_ctx.bezierCurveTo(14,28,6,45,-16,23)
    tex_ctx.fill()
    ellipse(-24,23,9,3,0.1)
    tex_ctx.scale(1/0.75,1)
    tex_ctx.translate(-128/2,-128/2-7)
    tex_ctx.fillStyle='#2F4E66'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#0E141E'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*10,256*2)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='#e6a363'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,20)
    tex_ctx.bezierCurveTo(-66,-49,-18,-56,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,20)
    tex_ctx.bezierCurveTo(66,-49,18,-56,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    tex_ctx.fillStyle='#e6a363'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-25)
    tex_ctx.bezierCurveTo(-11,49,-30,40,-12,64)
    tex_ctx.moveTo(12,-25)
    tex_ctx.bezierCurveTo(11,49,30,40,12,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-12,-11,24,75)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    ellipse(0,49,10,8)
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    ellipse(0,52,5,3)
    tex_ctx.fillStyle='rgb(20,20,20)'
    ellipse(-19,-9,5,12)
    ellipse(19,-9,5,12)
    tex_ctx.fillStyle='#e6a363'
    ellipse(16,-12,2,3)
    ellipse(-22,-12,2,3)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(140, 84, 43)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#e6a363'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*11,256*2)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='#FFE089'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(209, 167, 113)'
    tex_ctx.strokeStyle='rgb(209, 167, 113)'
    ellipse(-42,0-5,22,22)
    ellipse(-33,-8-5,20,20)
    ellipse(-27,-16-5,20,20)
    ellipse(-35,-9-5,24,24)
    tex_ctx.lineWidth=7
    tex_ctx.beginPath()
    tex_ctx.moveTo(13,-40)
    tex_ctx.bezierCurveTo(15,-42,29,-43,32,-35)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(50,50,50)'
    tex_ctx.strokeStyle='rgb(50,50,50)'
    ellipse(-19,-19,6,7)
    ellipse(19,-19,6,7)
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,25+3)
    tex_ctx.bezierCurveTo(5,33,20,33,20,19+5)
    tex_ctx.moveTo(0,25+3)
    tex_ctx.bezierCurveTo(-5,33,-20,33,-20,19+5)
    tex_ctx.stroke()
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,3)
    tex_ctx.bezierCurveTo(-3,7,3,7,5,3)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(140, 84, 43)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#FFE089'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*12,256*2)
    tex_ctx.fillStyle='#ad2222'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2+18)
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(255,255,255,0.3)'
    tex_ctx.strokeStyle='rgb(250, 218, 218)'
    tex_ctx.beginPath()
    tex_ctx.translate(-25,-23)
    tex_ctx.moveTo(-1,-3)
    tex_ctx.bezierCurveTo(3,0,4,0,8,8)
    tex_ctx.bezierCurveTo(-2,5,-1,5,-6,8)
    tex_ctx.translate(50,0)
    tex_ctx.moveTo(-1,-3)
    tex_ctx.bezierCurveTo(3,0,4,0,8,8)
    tex_ctx.bezierCurveTo(-2,5,-1,5,-6,8)
    tex_ctx.stroke()
    tex_ctx.translate(-25,23)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(-10,15)
    tex_ctx.bezierCurveTo(-7,23,2,23,10,15)
    tex_ctx.stroke()
    ellipse(-36,3,6,6)
    ellipse(36,3,6,6)
    tex_ctx.fillStyle='#ad2222'
    ellipse(23,-21,5,4)
    ellipse(-27,-21,5,4)
    tex_ctx.translate(-128/2,-128/2-18)
    tex_ctx.fillStyle='#227d3d'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#cd4242'
    tex_ctx.fillRect(0,0,5,5)
    tex_ctx.fillStyle='#ad2222'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*13,256*2)
    tex_ctx.fillStyle='#12471a'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='#baf893'
    function rect(x,y,w,h){tex_ctx.fillRect(x-w*0.5,y-h*0.5,w,h)}
    
    for(let x=-2;x<2;x++){
        
        for(let y=-2;y<2;y++){
            
            if(!(x===-2&&y===-2||x===1&&y===1||x===-2&&y===1||x===1&&y===-2)){
                
                rect(x*7-25,y*7+-24,5,5)
                rect(x*7+31,y*7+-24,5,5)
            }
        }
    }
    
    for(let x=-7;x<7;x++){
        
        for(let y=-3;y<3;y++){
            
            if(!(y<3-Math.abs(x+0.5)&&y<0||y>3-Math.abs((x+0.5)*0.5)||y===2)&&y!==-3){
                
                rect(x*7+5,y*7+28,5,5)
            }
        }
    }
    
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='#BAB088'
    tex_ctx.fillRect(0,127,128,128)
    tex_ctx.fillStyle='rgb(0,255,0)'
    tex_ctx.fillRect(0,128-1,128,128/3|0|0)
    tex_ctx.fillStyle='#717779'
    tex_ctx.fillRect(0,213,128,128/3|0|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    //@
    let pi2=Math.PI*2,side=pi2/10
    
    function star(c,x=0,y=0){
        
        let bx=64+x,by=128+64+y,ex=0
        tex_ctx.fillStyle=c
        tex_ctx.beginPath()
        
        for(let i=0,j=0;i<Math.PI*2;i+=side,j++){
            
            let srad=j%2===0?20:45
            
            if(j===0){
                
                tex_ctx.moveTo(Math.sin(i+ex)*srad+bx,Math.cos(i+ex)*srad*0.6666667+by)
                
            } else {
                
                tex_ctx.lineTo(Math.sin(i+ex)*srad+bx,Math.cos(i+ex)*srad*0.6666667+by)
            }
        }
        
        tex_ctx.fill()
    }
    
    tex_ctx.translate(0,768)
    tex_ctx.fillStyle='rgb(21, 27, 43)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(220,220,220)'
    tex_ctx.lineWidth=9
    tex_ctx.lineCap='round'
    tex_ctx.lineJoin='round'
    tex_ctx.beginPath()
    tex_ctx.moveTo((128/2)-(128/5),30)
    tex_ctx.lineTo((128/2)-(128/5),50)
    tex_ctx.moveTo((128/2)+(128/5),30)
    tex_ctx.lineTo((128/2)+(128/5),50)
    tex_ctx.closePath()
    tex_ctx.moveTo(128/2,100)
    tex_ctx.lineTo((128/2)-(128/5),80)
    tex_ctx.moveTo(128/2,100)
    tex_ctx.lineTo((128/2)+(128/5),80)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(150, 145, 49)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(21, 27, 43)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(255,255,0)')
    
    tex_ctx.fillStyle='rgb(26, 255, 0)'
    tex_ctx.fillRect(128,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=18
    tex_ctx.beginPath()
    tex_ctx.moveTo((128/2)-(128/5)+128,30)
    tex_ctx.lineTo((128/2)-(128/5)+128,50)
    tex_ctx.moveTo((128/2)+(128/5)+128,30)
    tex_ctx.lineTo((128/2)+(128/5)+128,50)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=9
    tex_ctx.beginPath()
    tex_ctx.moveTo((128/2)-(128/5)+124,45)
    tex_ctx.lineTo((128/2)-(128/5)+124,53)
    tex_ctx.moveTo((128/2)-(128/5)+173,45)
    tex_ctx.lineTo((128/2)-(128/5)+173,53)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(22, 217, 0)'
    tex_ctx.fillRect(128,128,128,128)
    tex_ctx.fillStyle='rgb(26, 255, 0)'
    tex_ctx.fillRect(128,128-1,128,128/3|0)
    tex_ctx.fillRect(128,213,128,128/3|0+1)
    star('rgb(29, 133, 0)',128)
    
    tex_ctx.fillStyle='rgb(41, 40, 34)'
    tex_ctx.fillRect(128*2,0,128,128)
    tex_ctx.strokeStyle='rgb(232, 232, 232)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(0,-13)
    tex_ctx.beginPath()
    tex_ctx.moveTo((128/2)-(128/5)+123*2,86)
    tex_ctx.lineTo((128/2)-(128/5)+125*2,53)
    tex_ctx.moveTo((128/2)-(128/5)+125*2,53)
    tex_ctx.lineTo((128/2)-(128/5)+128*2,62)
    tex_ctx.moveTo((128/2)-(128/5)+159.5*2,59)
    tex_ctx.lineTo((128/2)-(128/5)+161*2,27)
    tex_ctx.moveTo((128/2)-(128/5)+161*2,27)
    tex_ctx.lineTo((128/2)-(128/5)+164*2,39)
    tex_ctx.moveTo((128/2)-(128/5)+128*2,94)
    tex_ctx.bezierCurveTo((128/2)-(128/5)+135*2,114,(128/2)-(128/5)+157*2,109,(128/2)-(128/5)+155*2,74)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(279,89,8,6,-0.2,0,7)
    tex_ctx.ellipse(352,59,8,6,-0.2,0,7)
    tex_ctx.moveTo(0,0)
    tex_ctx.ellipse(365,62,2,2,-0.2,0,7)
    tex_ctx.closePath()
    tex_ctx.translate(0,13)
    tex_ctx.fillStyle='rgb(232, 232, 232)'
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(133, 133, 133)'
    tex_ctx.fillRect(128*2,128,128,128)
    tex_ctx.fillStyle='rgb(41, 40, 34)'
    tex_ctx.fillRect(128*2,128-1,128,128/3|0)
    tex_ctx.fillRect(128*2,213,128,128/3|0+1)
    star('rgb(232, 232, 232)',128*2)
    
    tex_ctx.translate(128*3,0)
    tex_ctx.fillStyle='#f64800'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(235, 212, 35)'
    tex_ctx.fillStyle='rgb(235, 212, 35)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.translate(63,-5)
    tex_ctx.moveTo(128/2-40+10,55-5)
    tex_ctx.lineTo(128/2-40-5+10,40-5)
    tex_ctx.moveTo(128/2-40-5-5+10,55-5)
    tex_ctx.lineTo(128/2-40-5+10,40-5)
    tex_ctx.moveTo(128/2-40-5-5,55-5)
    tex_ctx.bezierCurveTo(128/2-40-5-5,71-5,128/2-40-5-5+20,71-5,128/2-40-5-5+20,55-5)
    tex_ctx.arc(20,29,0,0,6)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(128/2-40+10,55-5)
    tex_ctx.lineTo(128/2-40-5+10,40-5)
    tex_ctx.moveTo(128/2-40-5-5+10,55-5)
    tex_ctx.lineTo(128/2-40-5+10,40-5)
    tex_ctx.moveTo(128/2-40-5-5,55-5)
    tex_ctx.bezierCurveTo(128/2-40-5-5,71-5,128/2-40-5-5+20,71-5,128/2-40-5-5+20,55-5)
    tex_ctx.arc(20,29,0,0,6)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.scale(-1,1)
    tex_ctx.translate(-65,5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.stroke()
    tex_ctx.translate(-58,0)
    tex_ctx.fillStyle='rgb(255, 153, 0)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#f64800'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(255,255,0)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(0,768)
    tex_ctx.translate(128*4,0)
    tex_ctx.fillStyle='#65feec'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(11, 183, 189)'
    tex_ctx.lineWidth=10
    tex_ctx.beginPath()
    tex_ctx.moveTo(128*0.5-35,59)
    tex_ctx.bezierCurveTo(56,62,44,39,128*0.5-35,28)
    tex_ctx.translate(55,0)
    tex_ctx.moveTo(128*0.5-35,59)
    tex_ctx.bezierCurveTo(56,62,44,39,128*0.5-35,28)
    tex_ctx.translate(-55,0)
    tex_ctx.moveTo(128*0.5+-10,104)
    tex_ctx.bezierCurveTo(89,110,69,86,128*0.5+-5,86)
    tex_ctx.bezierCurveTo(40,85,45,102,128*0.5+-11,104)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(25, 189, 230)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#65feec'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(18, 156, 161)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(0,768)
    tex_ctx.translate(128*5,0)
    tex_ctx.fillStyle='#fffeb1'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(70, 71, 40)'
    tex_ctx.lineWidth=3.5
    tex_ctx.beginPath()
    tex_ctx.translate(4,0)
    tex_ctx.moveTo(36,30)
    tex_ctx.bezierCurveTo(25,17,15,47,30,56)
    tex_ctx.bezierCurveTo(50,55,36,32,33,45)
    tex_ctx.translate(50,0)
    tex_ctx.moveTo(36,30)
    tex_ctx.bezierCurveTo(25,17,15,47,30,56)
    tex_ctx.bezierCurveTo(50,55,36,32,33,45)
    tex_ctx.translate(-54,0)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(176, 171, 113)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#fffeb1'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(97, 96, 87)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(0,768)
    tex_ctx.translate(128*6,0)
    tex_ctx.fillStyle='rgb(247, 247, 247)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(168, 168, 168)'
    tex_ctx.fillStyle='rgb(168, 168, 168)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.ellipse(128*0.5-30,40,15,13,0,0,7)
    tex_ctx.rect(0,35,128,8)
    tex_ctx.ellipse(128*0.5+30,40,15,13,0,0,7)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(247, 247, 247)'
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(128*0.5-30,32)
    tex_ctx.bezierCurveTo(128*0.5-36,35,128*0.5-35,32,128*0.5-40,40)
    tex_ctx.translate(61,0)
    tex_ctx.moveTo(128*0.5-30,32)
    tex_ctx.bezierCurveTo(128*0.5-36,35,128*0.5-35,32,128*0.5-40,40)
    tex_ctx.translate(-61,0)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(186, 186, 186)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(247, 247, 247)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(97, 96, 87)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(0,768)
    tex_ctx.translate(128*7,0)
    tex_ctx.fillStyle='rgb(255, 250, 145)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(186, 145, 98)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.translate(32,20)
    
    for(let i=-0.71,j=0,inc=Math.PI*2/34;i<Math.PI*2*0.18;i+=inc,j++){
        
        let ri=(j-1)%2===0?25:28,r=j%2===0?22:31
        tex_ctx.moveTo(Math.sin(i-inc)*ri,Math.cos(i-inc)*ri)
        tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
    }
    
    tex_ctx.translate(60,0)
    
    for(let i=-0.71,j=0,inc=Math.PI*2/34;i<Math.PI*2*0.18;i+=inc,j++){
        
        let ri=(j-1)%2===0?25:28,r=j%2===0?22:31
        tex_ctx.moveTo(Math.sin(i-inc)*ri,Math.cos(i-inc)*ri)
        tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
    }
    
    tex_ctx.stroke()
    tex_ctx.translate(-32,60)
    tex_ctx.beginPath()
    
    for(let i=-0.74,j=0,inc=Math.PI*2/39;i<Math.PI*2*0.17;i+=inc,j++){
        
        let ri=(j-1)%2===0?25:28,r=j%2===0?22:31
        tex_ctx.moveTo(Math.sin(i-inc)*ri*1.5,Math.cos(i-inc)*ri)
        tex_ctx.lineTo(Math.sin(i)*r*1.5,Math.cos(i)*r)
    }
    
    tex_ctx.lineWidth=5
    tex_ctx.stroke()
    tex_ctx.translate(-32-28,-80)
    tex_ctx.fillStyle='rgb(255, 250, 145)'
    tex_ctx.fillRect(0,128-1,128,(128/3|0)*3+3)
    star('rgb(89, 255, 233)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(0,768)
    tex_ctx.translate(128*8,0)
    tex_ctx.fillStyle='rgb(242, 142, 242)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(163, 91, 163)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(2,20)
    tex_ctx.bezierCurveTo(128/2,128/2-40,128/2,128/2-40,126,20)
    tex_ctx.moveTo(128/2-25,45)
    tex_ctx.lineTo(128/2-25,60)
    tex_ctx.moveTo(128/2+25,45)
    tex_ctx.lineTo(128/2+25,60)
    tex_ctx.moveTo(128/2-30,100)
    tex_ctx.bezierCurveTo(128/2,128/2+30,128/2,128/2+30,128/2+30,100)
    tex_ctx.moveTo(128/2-23-10,95)
    tex_ctx.lineTo(128/2-19-10,106)
    tex_ctx.moveTo(128/2+23+10,95)
    tex_ctx.lineTo(128/2+19+10,106)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(189, 113, 189)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(242, 142, 242)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(114, 64, 135)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(0,768)
    tex_ctx.translate(128*9,0)
    tex_ctx.fillStyle='rgb(255, 0, 0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(100,0,0)'
    tex_ctx.fillStyle='rgb(100,0,0)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,-41)
    tex_ctx.lineTo(-35,4)
    tex_ctx.lineTo(-26,20)
    tex_ctx.lineTo(-23,-32)
    tex_ctx.lineTo(-32,-23)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(-40,-41)
    tex_ctx.lineTo(-35,4)
    tex_ctx.lineTo(-26,20)
    tex_ctx.lineTo(-23,-32)
    tex_ctx.lineTo(-32,-23)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(54,16)
    tex_ctx.lineTo(44,30)
    tex_ctx.moveTo(-54,16)
    tex_ctx.lineTo(-44,30)
    tex_ctx.moveTo(-19,37)
    tex_ctx.lineTo(-10,40)
    tex_ctx.lineTo(0,50)
    tex_ctx.lineTo(10,40)
    tex_ctx.lineTo(18,37)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(242, 71, 56)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(255, 0, 0)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(23, 255, 35)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(1280,768)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(199, 199, 199)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-128/2,-128/2)
    tex_ctx.bezierCurveTo(-28,-58,0,0,0,10)
    tex_ctx.bezierCurveTo(0,0,-28+128/2,-58,128/2,-128/2)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-18)
    tex_ctx.lineTo(-13,-6)
    tex_ctx.moveTo(20,-18)
    tex_ctx.lineTo(13,-6)
    tex_ctx.strokeStyle='rgb(199, 199, 199)'
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(255, 255, 0)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(0,255,0)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*11,768)
    tex_ctx.fillStyle='#79d29b'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(29, 145, 128)'
    tex_ctx.lineWidth=7
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-35)
    tex_ctx.bezierCurveTo(-40,-20,-40,-15,-30,-20)
    tex_ctx.bezierCurveTo(-20,-2,-20,-35,-30,-35)
    tex_ctx.moveTo(-30,-35)
    tex_ctx.lineTo(-34,-11)
    tex_ctx.lineTo(-25,-30)
    tex_ctx.lineTo(-37,-23)
    tex_ctx.moveTo(30,-35)
    tex_ctx.bezierCurveTo(40,-20,40,-15,30,-20)
    tex_ctx.bezierCurveTo(20,-2,20,-35,30,-35)
    tex_ctx.moveTo(30,-35)
    tex_ctx.lineTo(34,-11)
    tex_ctx.lineTo(25,-30)
    tex_ctx.lineTo(37,-23)
    for(let i=-0.74,j=0,inc=Math.PI*2/39;i<Math.PI*2*0.17;i+=inc,j++){
        
        let r=29+Math.sin(i*183)*3
        tex_ctx.moveTo(Math.sin(i-inc)*r,Math.cos(i-inc)*r)
        tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
    }
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(27, 219, 145)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-30)
    tex_ctx.bezierCurveTo(-30,-33,-34,-20,-31,-20)
    tex_ctx.moveTo(30,-30)
    tex_ctx.bezierCurveTo(30,-33,34,-20,31,-20)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(80, 171, 117)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#79d29b'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(16, 89, 77)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*12,768)
    tex_ctx.fillStyle='rgb(108, 0, 255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(178, 133, 242)'
    tex_ctx.lineWidth=13
    tex_ctx.scale(0.3,0.3)
    tex_ctx.translate(-92,-62)
    function ellipse(x,y,w,h,r=0){
        tex_ctx.beginPath()
        tex_ctx.ellipse(x,y,w,h,r,0,6)
        tex_ctx.fill()
    }
    function bezier(a,b,c,d,e,f,g,h,fill,stroke){
        tex_ctx.beginPath()
        tex_ctx.moveTo(a,b)
        tex_ctx.bezierCurveTo(c,d,e,f,g,h)
        
        if(fill)
        tex_ctx.fill()
        if(stroke)
        tex_ctx.stroke()
    }
    function line(a,b,c,d){
        tex_ctx.beginPath()
        tex_ctx.moveTo(a,b)
        tex_ctx.lineTo(c,d)
        tex_ctx.stroke()
    }
    
    tex_ctx.fillStyle='rgb(155, 105, 255)'
    ellipse(186,172,18,18)
    ellipse(413,135,18,18)
    tex_ctx.fillStyle='rgb(178, 133, 242)'
    ellipse(315,261,33,33)
    bezier(159,238,181,223,187,216,233,227,false,true)
    bezier(178,212,225,223,187,216,233,227,false,true)
    tex_ctx.translate(0,25)
    bezier(406,211,496,190,382,104,431,198,true,true)
    tex_ctx.lineWidth=20
    bezier(273,325,276,416,422,355,369,299,true,true)
    bezier(250,311,289,343,378,301,373,295,false,true)
    tex_ctx.beginPath()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(108, 0, 255)'
    ellipse(416,182,19*0.5,31*0.5)
    tex_ctx.translate(92,38)
    tex_ctx.scale(1/0.3,1/0.3)
    tex_ctx.fillStyle='rgb(134, 113, 227)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(108, 0, 255)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(255,255,0)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*13,768)
    tex_ctx.fillStyle='rgb(32, 189, 160)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(242, 145, 255)'
    tex_ctx.lineWidth=11
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-30)
    tex_ctx.bezierCurveTo(-28,-44,-12,-10,-32,-11)
    tex_ctx.moveTo(16,-34)
    tex_ctx.bezierCurveTo(39,-26,5,-17,25,-14)
    tex_ctx.moveTo(-29,23)
    tex_ctx.bezierCurveTo(-14,22,-19,37,0,32)
    tex_ctx.bezierCurveTo(25,22,-8,25,28,22)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(191, 94, 255)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(32, 189, 160)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(242, 145, 255)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*14,768)
    tex_ctx.fillStyle='rgb(84, 0, 14)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(227, 111, 111)'
    tex_ctx.fillStyle='rgb(245, 147, 147)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillRect(-128*0.5,-128*0.5,128*0.5,128)
    tex_ctx.beginPath()
    tex_ctx.moveTo(30,-10)
    tex_ctx.lineTo(30,-25)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(30,-24,10,5,0,-3.0,-12.7)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(84, 0, 14)'
    tex_ctx.fillStyle='rgb(84, 0, 14)'
    tex_ctx.fillRect(-128*0.5,128*0.5,128,129)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-10)
    tex_ctx.lineTo(-30,-25)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(-30,-24,10,5,0,-3.0,-12.7)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(245, 147, 147)'
    tex_ctx.translate(0,128)
    tex_ctx.beginPath()
    tex_ctx.moveTo(128*0.5,0)
    tex_ctx.lineTo(0,128*0.5)
    tex_ctx.lineTo(128*0.5,128)
    tex_ctx.lineTo(128,128*0.5)
    tex_ctx.fill()
    star('rgb(207, 72, 72)',0,-128)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*15,768)
    tex_ctx.fillStyle='#ff3326'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(0,255,0)'
    tex_ctx.fillStyle='rgb(0,255,0)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-45,-30)
    tex_ctx.bezierCurveTo(-45,-40,-20,-40,-13,-23)
    tex_ctx.moveTo(-19,40)
    tex_ctx.bezierCurveTo(-34,7,32,8,32,40)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(-45,-30)
    tex_ctx.bezierCurveTo(-45,-40,-20,-40,-13,-23)
    tex_ctx.stroke()
    tex_ctx.scale(-1,1)
    tex_ctx.beginPath()
    tex_ctx.ellipse(-24,-11,7,10,0,0,7)
    tex_ctx.ellipse(24,-11,7,10,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillStyle='#ff3326'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-28,-5,2,4,0,0,7)
    tex_ctx.ellipse(21,-5,2,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='#ff3326'
    tex_ctx.fillRect(0,128,128,128/3)
    tex_ctx.fillRect(0,214,128,128/3|0+1)
    tex_ctx.fillStyle='rgb(199, 0, 0)'
    tex_ctx.fillRect(0,128+128/3|0,128,128/3|0+5)
    star('rgb(97, 0, 0)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*0,256+768)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(255, 0, 0)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,-32)
    tex_ctx.lineTo(-32,-64)
    tex_ctx.bezierCurveTo(5,0,-5,0,32,-64)
    tex_ctx.lineTo(64,-32)
    tex_ctx.lineTo(64,64)
    tex_ctx.bezierCurveTo(-25,0,25,0,-64,64)
    tex_ctx.moveTo(-20,45-8)
    tex_ctx.bezierCurveTo(-10,60-8,10,60-8,20,45-8)
    tex_ctx.bezierCurveTo(10,55-8,-10,55-8,-20,45-8)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.ellipse(-25,0,4,3,0,0,7)
    tex_ctx.rect(-33,0,10,1)
    tex_ctx.moveTo(25,0)
    tex_ctx.ellipse(25,0,4,3,0,0,7)
    tex_ctx.rect(23,0,10,1)
    tex_ctx.fillStyle=tex_ctx.strokeStyle='rgb(255, 255, 255)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(255, 173, 173)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(255, 0, 0)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1,256+768)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(0,0, 255)'
    tex_ctx.lineWidth=5
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,-64)
    tex_ctx.lineTo(0,-25)
    tex_ctx.lineTo(64,-64)
    tex_ctx.lineTo(64,-64+20)
    tex_ctx.lineTo(50,-64+30)
    tex_ctx.lineTo(64,-64+40)
    tex_ctx.lineTo(64,-64+60)
    tex_ctx.lineTo(50,-64+70)
    tex_ctx.lineTo(64,-64+90)
    tex_ctx.lineTo(15,-64+90)
    tex_ctx.bezierCurveTo(15,10,-15,10,-15,-64+90)
    tex_ctx.lineTo(-64,-64+90)
    tex_ctx.lineTo(-50,-64+70)
    tex_ctx.lineTo(-64,-64+60)
    tex_ctx.lineTo(-64,-64+40)
    tex_ctx.lineTo(-50,-64+30)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,45)
    tex_ctx.lineTo(-20,55)
    tex_ctx.lineTo(20,55)
    tex_ctx.lineTo(30,45)
    tex_ctx.moveTo(-30+3,45-3)
    tex_ctx.lineTo(-30-3,45+3)
    tex_ctx.moveTo(30-3,45-3)
    tex_ctx.lineTo(30+3,45+3)
    tex_ctx.strokeStyle='rgb(0, 0, 255)'
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(161, 161, 255)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(0,0, 255)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*2,256+769)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-45,-40)
    tex_ctx.lineTo(-45,40)
    tex_ctx.moveTo(-30,-40)
    tex_ctx.lineTo(-30,40)
    tex_ctx.moveTo(-15,-40)
    tex_ctx.lineTo(-15,40)
    tex_ctx.moveTo(0,-40)
    tex_ctx.lineTo(0,40)
    tex_ctx.moveTo(45,-40)
    tex_ctx.lineTo(45,40)
    tex_ctx.moveTo(30,-40)
    tex_ctx.lineTo(30,40)
    tex_ctx.moveTo(15,-40)
    tex_ctx.lineTo(15,40)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,-64)
    tex_ctx.lineTo(-64,-40)
    tex_ctx.bezierCurveTo(-39,-15,39,-15,64,-40)
    tex_ctx.lineTo(64,-64)
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,10)
    tex_ctx.bezierCurveTo(-39,25,39,25,64,10)
    tex_ctx.lineTo(64,64)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-15,40)
    tex_ctx.lineTo(0,55)
    tex_ctx.lineTo(15,40)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(200,200,80)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(117, 101, 0)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3,256+768)
    tex_ctx.fillStyle='rgb(0, 72, 255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(0, 219, 208)'
    tex_ctx.strokeStyle='rgb(0, 219, 208)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-26,-29,6,8,9.2,7,15)
    tex_ctx.ellipse(26,-29,7,9,-9.2,7,15)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,-2,5,5,-9.2,7,15)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-26,23)
    tex_ctx.bezierCurveTo(-10,38,24,31,29,21)
    tex_ctx.moveTo(-25,13)
    tex_ctx.bezierCurveTo(-23,21,-29,30,-36,28)
    tex_ctx.moveTo(31,12)
    tex_ctx.bezierCurveTo(28,21,34,30,40,28)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(0, 155, 227)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(0, 72, 255)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(0, 219, 208)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*4,256+768)
    tex_ctx.fillStyle='rgb(87, 10, 0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(255, 153, 0)'
    tex_ctx.strokeStyle='rgb(255, 153, 0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-43+7,-20)
    tex_ctx.bezierCurveTo(-35+7,-28,-22+7,-19,-25+7,-16)
    tex_ctx.moveTo(43-7,-20)
    tex_ctx.bezierCurveTo(35-7,-28,22-7,-19,25-7,-16)
    tex_ctx.stroke()
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(-26,23)
    tex_ctx.bezierCurveTo(-11,40,16,32,26,21)
    tex_ctx.bezierCurveTo(13,58,-20,32,-26,23)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(176, 62, 0)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(87, 10, 0)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(255, 153, 0)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5,256+768)
    tex_ctx.fillStyle='#2966ad'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=4
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(19, 0, 191)'
    tex_ctx.strokeStyle='rgb(19, 0, 191)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,-25)
    tex_ctx.bezierCurveTo(-16,-9,-41,-6,-39,-26)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-26)
    tex_ctx.bezierCurveTo(-24,-23,-13,-20,-8,-29)
    tex_ctx.stroke()
    tex_ctx.translate(51,0)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,-25)
    tex_ctx.bezierCurveTo(-16,-9,-41,-6,-39,-26)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-26)
    tex_ctx.bezierCurveTo(-24,-23,-13,-20,-8,-29)
    tex_ctx.stroke()
    tex_ctx.scale(1.45,1.45)
    tex_ctx.translate(-12,35)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,-25)
    tex_ctx.bezierCurveTo(-16,-9,-41,-6,-39,-26)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-26)
    tex_ctx.bezierCurveTo(-24,-23,-13,-20,-8,-29)
    tex_ctx.stroke()
    tex_ctx.translate(12,-35)
    tex_ctx.scale(1/1.45,1/1.45)
    tex_ctx.translate(-51,0)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(0, 74, 158)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#2966ad'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(19, 0, 191)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6,256+768)
    tex_ctx.fillStyle='#f6bca6'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(107, 0, 0)'
    tex_ctx.strokeStyle='rgb(107, 0, 0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-16,29)
    tex_ctx.bezierCurveTo(-5,42,0,37,10,35)
    tex_ctx.stroke()
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(-49,-25)
    tex_ctx.bezierCurveTo(-11,-13,23,-25,45,-36)
    tex_ctx.bezierCurveTo(45,19,22,13,2,-11)
    tex_ctx.bezierCurveTo(-10,22,-36,13,-49,-25)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(201, 84, 66)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#f6bca6'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(107, 0, 0)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7,256+768)
    tex_ctx.fillStyle='#6badae'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-41,-35)
    tex_ctx.bezierCurveTo(-41,-32,-22,-25,-18,-28)
    tex_ctx.moveTo(41,-35)
    tex_ctx.bezierCurveTo(41,-32,22,-25,18,-28)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-15,40-8)
    tex_ctx.bezierCurveTo(5,24-8,-5,24-8,15,40-8)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(-28,-14,7,9,0,0,7)
    tex_ctx.ellipse(28,-14,7,9,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillRect(-53.5,11.4,23,9)
    tex_ctx.fillRect(53.5-23,11.4,23,9)
    tex_ctx.fillStyle='#6badae'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-32,-12,3,5,0,0,7)
    tex_ctx.ellipse(24,-12,3,5,0,0,7)
    tex_ctx.fill()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(111, 206, 217)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#6badae'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(204, 234, 255)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*8,256+768)
    tex_ctx.fillStyle='rgb(242, 255, 255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.strokeStyle='rgb(100,100,150)'
    tex_ctx.beginPath()
    tex_ctx.translate(-65,-52)
    tex_ctx.moveTo(35,15)
    tex_ctx.bezierCurveTo(25,22,15,41,30,49)
    tex_ctx.bezierCurveTo(52,54,43,18,33,37)
    tex_ctx.translate(65*2,-9)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(35,15)
    tex_ctx.bezierCurveTo(25,22,15,41,30,49)
    tex_ctx.bezierCurveTo(52,54,43,18,33,37)
    tex_ctx.scale(-1,1)
    tex_ctx.translate(-65,9+53)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(7+4,11)
    tex_ctx.bezierCurveTo(4,40,-10+4,35,-12+4,31)
    tex_ctx.bezierCurveTo(-13+4,12,-1+4,22,7+4,11)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(242, 255, 255)'
    tex_ctx.fillRect(0,128-1,128,128.5)
    star('rgb(255, 211, 196)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*9,256+768)
    tex_ctx.fillStyle='#04058b'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(64, 235, 235)'
    tex_ctx.strokeStyle='rgb(64, 235, 235)'
    tex_ctx.translate(0,10)
    tex_ctx.beginPath()
    tex_ctx.moveTo(64,0+5)
    tex_ctx.lineTo(48,10+2.5)
    tex_ctx.lineTo(60,20)
    tex_ctx.lineTo(48,30-2.5)
    tex_ctx.lineTo(64,40-5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,0+5)
    tex_ctx.lineTo(-48,10+2.5)
    tex_ctx.lineTo(-60,20)
    tex_ctx.lineTo(-48,30-2.5)
    tex_ctx.lineTo(-64,40-5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(43,-45)
    tex_ctx.lineTo(14,-40)
    tex_ctx.moveTo(-39,-44)
    tex_ctx.lineTo(-11,-40)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(26,-30,10,13,0,0,7)
    tex_ctx.ellipse(-20,-30,10,13,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillStyle='#04058b'
    tex_ctx.beginPath()
    tex_ctx.ellipse(19,-28,6,8,0,0,7)
    tex_ctx.ellipse(-26,-27,6,8,0,0,7)
    tex_ctx.fill()
    tex_ctx.translate(0,-10)
    tex_ctx.fillStyle='rgb(64, 235, 235)'
    tex_ctx.translate(-31,51)
    tex_ctx.scale(-1.4,1.4)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,-25)
    tex_ctx.bezierCurveTo(-16,-9,-41,-6,-39,-26)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-26)
    tex_ctx.bezierCurveTo(-24,-23,-13,-20,-8,-29)
    tex_ctx.stroke()
    tex_ctx.scale(1/-1.4,1/1.4)
    tex_ctx.translate(31,-51)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(33, 154, 184)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#04058b'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(64, 235, 235)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*10,256+768)
    tex_ctx.fillStyle='#8d0e00'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=5
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(255, 64, 0)'
    tex_ctx.strokeStyle='rgb(255, 64, 0)'
    tex_ctx.translate(0,10)
    tex_ctx.beginPath()
    tex_ctx.moveTo(64,0+5)
    tex_ctx.lineTo(48,10+2.5)
    tex_ctx.lineTo(60,20)
    tex_ctx.lineTo(48,30-2.5)
    tex_ctx.lineTo(64,40-5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,0+5)
    tex_ctx.lineTo(-48,10+2.5)
    tex_ctx.lineTo(-60,20)
    tex_ctx.lineTo(-48,30-2.5)
    tex_ctx.lineTo(-64,40-5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(43,-45)
    tex_ctx.lineTo(14,-40)
    tex_ctx.moveTo(-39,-44)
    tex_ctx.lineTo(-11,-40)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(26,-30,10,13,0,0,7)
    tex_ctx.ellipse(-20,-30,10,13,0,0,7)
    tex_ctx.fill()
    tex_ctx.strokeStyle='#8d0e00'
    tex_ctx.beginPath()
    tex_ctx.moveTo(39,-29)
    tex_ctx.lineTo(0,-22)
    tex_ctx.lineTo(-39,-29)
    tex_ctx.stroke()
    tex_ctx.translate(0,-10)
    tex_ctx.strokeStyle='rgb(255, 64, 0)'
    tex_ctx.translate(-31,51)
    tex_ctx.scale(-1.4,1.4)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-21)
    tex_ctx.bezierCurveTo(-12,-14,-31,-12,-36,-17)
    tex_ctx.stroke()
    tex_ctx.scale(1/-1.4,1/1.4)
    tex_ctx.translate(31,-51)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(196, 54, 6)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#8d0e00'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(255, 64, 0)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*11,256+768)
    tex_ctx.fillStyle='rgb(50, 190, 71)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.strokeStyle='rgb(17, 32, 43)'
    tex_ctx.translate(0,10)
    tex_ctx.beginPath()
    tex_ctx.ellipse(22,-30,7,9,0,0,7)
    tex_ctx.ellipse(-22,-30,7,9,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillRect(-41,-44,30,10)
    tex_ctx.fillRect(41-30,-44,30,10)
    tex_ctx.fillStyle='rgb(50, 190, 71)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,10)
    tex_ctx.lineTo(-36,14)
    tex_ctx.lineTo(-40,18)
    tex_ctx.moveTo(40,10)
    tex_ctx.lineTo(36,14)
    tex_ctx.lineTo(40,18)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(18,-28,4,5,0,0,7)
    tex_ctx.ellipse(-26,-28,4,5,0,0,7)
    tex_ctx.fill()
    tex_ctx.translate(0,-10)
    tex_ctx.lineWidth=6
    tex_ctx.beginPath()
    tex_ctx.moveTo(-15,20)
    tex_ctx.lineTo(0,30)
    tex_ctx.lineTo(15,20)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(30, 133, 28)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(50, 190, 71)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(2, 79, 15)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*12,256+768)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(255,255,0)'
    tex_ctx.strokeStyle='rgb(255,255,0)'
    tex_ctx.translate(0,7)
    tex_ctx.beginPath()
    tex_ctx.ellipse(-26-6,-29,9,9,0,0,7)
    tex_ctx.ellipse(26-5,-29,9,9,0,0,7)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-34)
    tex_ctx.bezierCurveTo(-28,-46,-19,-38,-14,-32)
    tex_ctx.moveTo(-42+55,-34)
    tex_ctx.bezierCurveTo(-28+55,-46,-19+55,-38,-14+55,-32)
    tex_ctx.translate(0,-16)
    tex_ctx.moveTo(-37,23)
    tex_ctx.bezierCurveTo(-10,38,24,31,42,21)
    tex_ctx.moveTo(-36,15)
    tex_ctx.bezierCurveTo(-36,21,-35,28,-44,29)
    tex_ctx.moveTo(44,12)
    tex_ctx.bezierCurveTo(40,21,46,30,48,28)
    tex_ctx.stroke()
    tex_ctx.translate(0,10)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(125,125,0)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(255,255,0)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*13,256+768)
    tex_ctx.fillStyle='rgb(20,20,20)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=4
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(150,150,150)'
    tex_ctx.beginPath()
    tex_ctx.translate(-25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-30,0,-30,8,-64)
    tex_ctx.translate(25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-20,0,-20,8,-64)
    tex_ctx.translate(25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-30,0,-30,8,-64)
    tex_ctx.translate(-25,0)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    tex_ctx.translate(-25,-10)
    tex_ctx.scale(1.2,1.5)
    tex_ctx.rotate(0.15)
    tex_ctx.moveTo(-10,0)
    tex_ctx.bezierCurveTo(-8,7,8,7,10,0)
    tex_ctx.bezierCurveTo(8,-7,-8,-7,-10,0)
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*13+128/2,256+768+128/2)
    tex_ctx.translate(25,-10)
    tex_ctx.scale(1.2,1.5)
    tex_ctx.rotate(-0.15)
    tex_ctx.moveTo(-10,0)
    tex_ctx.bezierCurveTo(-8,7,8,7,10,0)
    tex_ctx.bezierCurveTo(8,-7,-8,-7,-10,0)
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*13+128/2,256+768+128/2)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-7,10)
    tex_ctx.bezierCurveTo(-5,13,5,13,7,10)
    tex_ctx.moveTo(0,13)
    tex_ctx.lineTo(0,22)
    tex_ctx.moveTo(-20,20)
    tex_ctx.bezierCurveTo(-10,28,-5,28,0,20)
    tex_ctx.moveTo(20,20)
    tex_ctx.bezierCurveTo(10,28,5,28,0,20)
    tex_ctx.moveTo(-31,14)
    tex_ctx.lineTo(-62,0)
    tex_ctx.moveTo(-31,22)
    tex_ctx.lineTo(-62,27)
    tex_ctx.moveTo(31,14)
    tex_ctx.lineTo(62,0)
    tex_ctx.moveTo(31,22)
    tex_ctx.lineTo(62,27)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(130,130,130)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(20,20,20)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(255,255,255)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*14,256+768)
    tex_ctx.fillStyle='#0e78fd'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=8
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    tex_ctx.translate(0,17)
    tex_ctx.moveTo(-20,0)
    tex_ctx.lineTo(0,15)
    tex_ctx.lineTo(20,0)
    tex_ctx.translate(0,-14)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.scale(0.4*0.9,0.6*0.9)
    tex_ctx.translate(-75,-37)
    tex_ctx.moveTo(0,40)
    tex_ctx.bezierCurveTo(10,10,10,10,40,0)
    tex_ctx.bezierCurveTo(10,-10,10,-10,0,-40)
    tex_ctx.bezierCurveTo(-10,-10,-10,-10,-40,0)
    tex_ctx.bezierCurveTo(-10,10,-10,10,0,40)
    tex_ctx.translate(75*2,0)
    tex_ctx.moveTo(0,40)
    tex_ctx.bezierCurveTo(10,10,10,10,40,0)
    tex_ctx.bezierCurveTo(10,-10,10,-10,0,-40)
    tex_ctx.bezierCurveTo(-10,-10,-10,-10,-40,0)
    tex_ctx.bezierCurveTo(-10,10,-10,10,0,40)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*14,256+768)
    tex_ctx.fillStyle='rgb(161, 206, 255)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#0e78fd'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(255,255,255)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*15,256+768)
    tex_ctx.fillStyle='#563625'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.strokeStyle='rgb(255,0,0)'
    tex_ctx.beginPath()
    tex_ctx.translate(0,10)
    tex_ctx.moveTo(-37,-47)
    tex_ctx.bezierCurveTo(-26,-36,-12,-45,-20,-36)
    tex_ctx.moveTo(37,-47)
    tex_ctx.bezierCurveTo(26,-36,12,-45,20,-36)
    tex_ctx.moveTo(-25,-37)
    tex_ctx.ellipse(-21,-31,6,10,0,0,7)
    tex_ctx.moveTo(25,-37)
    tex_ctx.ellipse(21,-31,6,10,3.141592,0,7)
    tex_ctx.translate(0,-3)
    
    for(let i=-1.2,j=0,inc=Math.PI*2/15;i<Math.PI-1.0;i+=inc,j++){
        
        let ri=(j-1)%2===0?15:30,r=j%2===0?15:30
        
        tex_ctx.moveTo(Math.sin(i-inc)*ri*1.25,Math.cos(i-inc)*ri+10)
        tex_ctx.lineTo(Math.sin(i)*r*1.25,Math.cos(i)*r+10)
    }
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*15,256+768)
    tex_ctx.fillStyle='rgb(148, 59, 43)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#563625'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(255,0,0)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*0,256*2+768)
    tex_ctx.fillStyle='#e9e7aa'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=6
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-37,-10)
    tex_ctx.bezierCurveTo(-35,-55,-4,-29,-15,-10)
    tex_ctx.bezierCurveTo(-16,-5,-36,-5,-37,-10)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-7)
    tex_ctx.bezierCurveTo(-32,-22,-15,-22,-15,-10)
    tex_ctx.bezierCurveTo(-16,-5,-36,-5,-30,-7)
    tex_ctx.fill()
    tex_ctx.scale(-1,1)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-37,-10)
    tex_ctx.bezierCurveTo(-35,-55,-4,-29,-15,-10)
    tex_ctx.bezierCurveTo(-16,-5,-36,-5,-37,-10)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-7)
    tex_ctx.bezierCurveTo(-32,-22,-15,-22,-15,-10)
    tex_ctx.bezierCurveTo(-16,-5,-36,-5,-30,-7)
    tex_ctx.fill()
    tex_ctx.fillRect(30.6,1.6,25,12)
    tex_ctx.beginPath()
    tex_ctx.ellipse(1,2,4,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-19,21)
    tex_ctx.bezierCurveTo(-6,34,9,32,19,21)
    tex_ctx.lineWidth=4
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(181, 155, 69)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#e9e7aa'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(82, 77, 41)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1,256*2+768)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-26,-21,8,12,0,0,7)
    tex_ctx.ellipse(26,-21,8,12,0,0,7)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,-38)
    tex_ctx.lineTo(-21,-33)
    tex_ctx.moveTo(40,-38)
    tex_ctx.lineTo(21,-33)
    tex_ctx.moveTo(0,3)
    tex_ctx.lineTo(0,32)
    tex_ctx.bezierCurveTo(0,40,-26,40,-26,32)
    tex_ctx.moveTo(0,32)
    tex_ctx.bezierCurveTo(0,40,26,40,26,32)
    tex_ctx.stroke()
    ellipse(0,3,8,5,0,0,7)
    ellipse(24,10,3,3,0,0,7)
    ellipse(32,21,3,3,0,0,7)
    ellipse(16,21,3,3,0,0,7)
    ellipse(0,3,8,5,0,0,7)
    ellipse(-24,10,3,3,0,0,7)
    ellipse(-32,21,3,3,0,0,7)
    ellipse(-16,21,3,3,0,0,7)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(170,170,170)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(90,90,90)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*2,256*2+768)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(0, 200, 255)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,-50)
    tex_ctx.bezierCurveTo(-34,-24,34,-24,64,-50)
    tex_ctx.lineTo(64,-8)
    tex_ctx.bezierCurveTo(44,20,-44,20,-64,-8)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,255,255)'
    ellipse(-27,-13,12,7,0.3)
    ellipse(27,-13,12,7,-0.3)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,128,128,128)
    star('rgb(0, 200, 255)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3,256*2+768)
    tex_ctx.fillStyle='#312f30'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=3
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='#f65535'
    ellipse(-24,-23,5,5)
    ellipse(24,-23,5,5)
    tex_ctx.beginPath()
    tex_ctx.translate(-41,0)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-5,5)
    tex_ctx.moveTo(0+7,0)
    tex_ctx.lineTo(-5+7,5)
    tex_ctx.moveTo(0+7+7,0)
    tex_ctx.lineTo(-5+7+7,5)
    tex_ctx.translate(70,0)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-5,5)
    tex_ctx.moveTo(0+7,0)
    tex_ctx.lineTo(-5+7,5)
    tex_ctx.moveTo(0+7+7,0)
    tex_ctx.lineTo(-5+7+7,5)
    tex_ctx.translate(-29,0)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='#312f30'
    tex_ctx.fillRect(0,128,128,128)
    star('#f65535')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*4,256*2+768)
    tex_ctx.fillStyle='rgb(240,240,240)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(40,40,40)'
    tex_ctx.fillRect(-10,-20,20,10)
    tex_ctx.fillRect(-64,-40,35,50)
    ellipse(-64+35,-15,25,25)
    tex_ctx.fillRect(64-35,-40,35,50)
    ellipse(64-35,-15,25,25)
    tex_ctx.fillStyle='rgb(240,240,240)'
    ellipse(-27,-15,8,12)
    ellipse(27,-15,8,12)
    tex_ctx.fillStyle='rgb(40,40,40)'
    ellipse(21,-16,4,6)
    ellipse(-32,-16,4,6)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(138, 138, 138)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(240,240,240)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(40,40,40)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5,256*2+768)
    tex_ctx.fillStyle='#9f7aa9'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2-8)
    tex_ctx.lineWidth=6
    tex_ctx.fillStyle='rgb(40,40,40)'
    tex_ctx.strokeStyle='rgb(40,40,40)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-11,-33)
    tex_ctx.bezierCurveTo(-19,-26,-18,-20,-38,-16)
    tex_ctx.moveTo(6,-33)
    tex_ctx.bezierCurveTo(9,-26,11,-20,30,-16)
    tex_ctx.stroke()
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,40)
    tex_ctx.bezierCurveTo(-3,39,6,39,13,40)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.5)'
    tex_ctx.strokeStyle='rgb(0,0,0,0.5)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-4)
    tex_ctx.bezierCurveTo(-10,28,-45,14,-37,-3)
    tex_ctx.lineTo(-12,-4)
    tex_ctx.moveTo(12,-4)
    tex_ctx.bezierCurveTo(5,29,45,13,34,-3)
    tex_ctx.lineTo(12,-4)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(40,40,40)'
    tex_ctx.strokeStyle='rgb(40,40,40)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-4)
    tex_ctx.bezierCurveTo(-22,13,-32,3,-37,-3)
    tex_ctx.lineTo(-12,-4)
    tex_ctx.moveTo(12,-4)
    tex_ctx.bezierCurveTo(19,13,32,3,34,-3)
    tex_ctx.lineTo(12,-4)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2+8)
    tex_ctx.fillStyle='rgb(118, 76, 130)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#9f7aa9'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(40,40,40)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6,256*2+768)
    tex_ctx.fillStyle='#765235'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2-15)
    tex_ctx.lineWidth=6
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.strokeStyle='rgb(241, 241, 241)'
    ellipse(-20,-13,5,10)
    ellipse(20,-13,5,10)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-5)
    tex_ctx.bezierCurveTo(-25,-7,-29,-7,-34,-3)
    tex_ctx.moveTo(-20,-5)
    tex_ctx.bezierCurveTo(-25,1,-29,-7,-24,-3)
    tex_ctx.moveTo(20,-5)
    tex_ctx.bezierCurveTo(25,-7,29,-7,34,-3)
    tex_ctx.moveTo(20,-5)
    tex_ctx.bezierCurveTo(25,1,29,-7,24,-3)
    tex_ctx.moveTo(-10,50)
    tex_ctx.bezierCurveTo(-10,16,10,15,10,50)
    tex_ctx.bezierCurveTo(2,49,3,46,-10,50)
    tex_ctx.stroke()
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-2,24)
    tex_ctx.bezierCurveTo(-5,55,1,15,2,25)
    tex_ctx.moveTo(5,29)
    tex_ctx.bezierCurveTo(1,58,2,15,7,30)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2+15)
    tex_ctx.fillStyle='rgb(191, 160, 128)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#765235'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(255,255,255)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7,256*2+768)
    tex_ctx.fillStyle='#edfeda'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2-5)
    tex_ctx.lineWidth=3.5
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.strokeStyle='#edfeda'
    ellipse(-22,-20,9,12)
    ellipse(22,-20,9,12)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-32,-20)
    tex_ctx.lineTo(0,-18)
    tex_ctx.lineTo(32,-20)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-2)
    tex_ctx.lineTo(0,13)
    tex_ctx.lineTo(32,5)
    tex_ctx.fill()
    for(let i=0.18;i<Math.PI;i+=Math.PI/8){
        
        ellipse(Math.cos(i)*40,Math.sin(i)*30+15,6,6)
    }
    tex_ctx.translate(-128/2,-128/2+4)
    tex_ctx.fillStyle='rgb(168, 217, 224)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#edfeda'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(59, 142, 209)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*8,256*2+768)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2-5)
    tex_ctx.lineWidth=4
    tex_ctx.fillStyle='rgb(245, 139, 222)'
    ellipse(-30,6,8,6)
    ellipse(30,6,8,6)
    tex_ctx.fillStyle='rgb(230,230,230)'
    ellipse(-20,-11,5,5)
    ellipse(20,-11,5,5)
    ellipse(0,4,3,3)
    tex_ctx.strokeStyle='rgb(230,230,230)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-9,19)
    tex_ctx.bezierCurveTo(0,24,0,23,9,20)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2+4)
    tex_ctx.fillStyle='rgb(139, 91, 140)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(239, 120, 255)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*9,256*2+768)
    tex_ctx.fillStyle='#0E141E'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2+7)
    tex_ctx.lineWidth=6
    tex_ctx.fillStyle='#ebed7f'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-53,-50)
    tex_ctx.bezierCurveTo(-47,-24,-28,1,-16,-5)
    tex_ctx.bezierCurveTo(-30,-12,-38,-29,-53,-50)
    tex_ctx.moveTo(56,-55)
    tex_ctx.bezierCurveTo(45,-7,29,-4,16,-1)
    tex_ctx.bezierCurveTo(30,-12,23,-5,56,-55)
    tex_ctx.scale(0.75,1)
    tex_ctx.moveTo(-22,23)
    tex_ctx.bezierCurveTo(-16,34,5,48,31,22)
    tex_ctx.bezierCurveTo(14,28,6,45,-16,23)
    tex_ctx.fill()
    ellipse(-24,23,9,3,0.1)
    tex_ctx.scale(1/0.75,1)
    tex_ctx.translate(-128/2,-128/2-8)
    tex_ctx.fillStyle='#0f4d58'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#0E141E'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('#196a6f')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*10,256*2+768)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='#d0b265'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,20)
    tex_ctx.bezierCurveTo(-66,-49,-18,-56,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,20)
    tex_ctx.bezierCurveTo(66,-49,18,-56,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    tex_ctx.fillStyle='#d0b265'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-25)
    tex_ctx.bezierCurveTo(-11,49,-30,40,-12,64)
    tex_ctx.moveTo(12,-25)
    tex_ctx.bezierCurveTo(11,49,30,40,12,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-12,-11,24,75)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    ellipse(0,49,10,8)
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    ellipse(0,52,5,3)
    tex_ctx.fillStyle='rgb(20,20,20)'
    ellipse(-19,-9,5,12)
    ellipse(19,-9,5,12)
    tex_ctx.fillStyle='#d0b265'
    ellipse(16,-12,2,3)
    ellipse(-22,-12,2,3)
    tex_ctx.translate(-128/2,-128/2-1)
    tex_ctx.fillStyle='#a98a5c'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#d0b265'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('#5f4424')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*11,256*2+768)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='#a1a4a1'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='#717471'
    tex_ctx.strokeStyle='#717471'
    ellipse(-42,0-5,22,22)
    ellipse(-33,-8-5,20,20)
    ellipse(-27,-16-5,20,20)
    ellipse(-35,-9-5,24,24)
    tex_ctx.lineWidth=7
    tex_ctx.beginPath()
    tex_ctx.moveTo(13,-40)
    tex_ctx.bezierCurveTo(15,-42,29,-43,32,-35)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(50,50,50)'
    tex_ctx.strokeStyle='rgb(50,50,50)'
    ellipse(-19,-19,6,7)
    ellipse(19,-19,6,7)
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,25+3)
    tex_ctx.bezierCurveTo(5,33,20,33,20,19+5)
    tex_ctx.moveTo(0,25+3)
    tex_ctx.bezierCurveTo(-5,33,-20,33,-20,19+5)
    tex_ctx.stroke()
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,3)
    tex_ctx.bezierCurveTo(-3,7,3,7,5,3)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.translate(-128/2,-128/2-1)
    tex_ctx.fillStyle='rgb(61, 145, 93)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#a1a4a1'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    star('rgb(0,255,100)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*12,256*2+768)
    tex_ctx.fillStyle='#ad2222'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2+18)
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(255,255,255,0.3)'
    tex_ctx.strokeStyle='rgb(250, 218, 218)'
    tex_ctx.beginPath()
    tex_ctx.translate(-25,-23)
    tex_ctx.moveTo(-1,-3)
    tex_ctx.bezierCurveTo(3,0,4,0,8,8)
    tex_ctx.bezierCurveTo(-2,5,-1,5,-6,8)
    tex_ctx.translate(50,0)
    tex_ctx.moveTo(-1,-3)
    tex_ctx.bezierCurveTo(3,0,4,0,8,8)
    tex_ctx.bezierCurveTo(-2,5,-1,5,-6,8)
    tex_ctx.stroke()
    tex_ctx.translate(-25,23)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(-10,15)
    tex_ctx.bezierCurveTo(-7,23,2,23,10,15)
    tex_ctx.stroke()
    ellipse(-36,3,6,6)
    ellipse(36,3,6,6)
    tex_ctx.fillStyle='#ad2222'
    ellipse(23,-21,5,4)
    ellipse(-27,-21,5,4)
    tex_ctx.translate(-128/2,-128/2-18)
    tex_ctx.fillStyle='rgb(245, 144, 144)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='#ad2222'
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.fillStyle='rgb(255,235,50)'
    tex_ctx.fillRect(0,0,5,5)
    star('rgb(252, 221, 221)')
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*13,256*2+768)
    tex_ctx.fillStyle='rgb(0,0,255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(0, 247, 255)'
    function rect(x,y,w,h){tex_ctx.fillRect(x-w*0.5,y-h*0.5,w,h)}
    
    for(let x=-2;x<2;x++){
        
        for(let y=-2;y<2;y++){
            
            if(!(x===-2&&y===-2||x===1&&y===1||x===-2&&y===1||x===1&&y===-2)){
                
                rect(x*7-25,y*7+-24,5,5)
                rect(x*7+31,y*7+-24,5,5)
            }
        }
    }
    
    for(let x=-7;x<7;x++){
        
        for(let y=-3;y<3;y++){
            
            if(!(y<3-Math.abs(x+0.5)&&y<0||y>3-Math.abs((x+0.5)*0.5)||y===2)&&y!==-3){
                
                rect(x*7+5,y*7+28,5,5)
            }
        }
    }
    
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(100,100,100)'
    tex_ctx.fillRect(0,127,128,128)
    tex_ctx.fillStyle='rgb(255,0,255)'
    tex_ctx.fillRect(0,128-1,128,128/3|0|0)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(0,213,128,128/3|0|0+1)
    star('rgb(217, 28, 201)')
    tex_ctx.setTransform(1,0,0,1,0,0)

    tex_ctx.translate(128*14,256*2+768)
    tex_ctx.fillStyle='rgb(255, 255, 99)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0,0.2)'
    tex_ctx.lineWidth=11
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-30)
    tex_ctx.bezierCurveTo(-28,-44,-12,-10,-32,-11)
    tex_ctx.moveTo(16,-34)
    tex_ctx.bezierCurveTo(39,-26,5,-17,25,-14)
    tex_ctx.moveTo(-29,23)
    tex_ctx.bezierCurveTo(-14,22,-19,37,0,32)
    tex_ctx.bezierCurveTo(25,22,-8,25,28,22)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillRect(0,128-1,128,128/3|0)
    tex_ctx.fillRect(0,213,128,128/3|0+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
}

window.textures_flowers=function(tex_ctx){

    let _COLORS={
        
        blue:'rgb(20,84,196)',
        red:'rgb(255, 35, 0)',
        white:'rgb(255,255,255)',
        blueArr:[20,84,186],
        redArr:[255,0,0],
        whiteArr:[255,255,255]
        
    }
    
    tex_ctx.fillStyle='rgb(0,153,0)'
    tex_ctx.fillRect(0,0,1024,1024)
    
    tex_ctx.translate(128,128)
    tex_ctx.scale(0.7,0.7)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3,128)
    tex_ctx.scale(0.7,0.7)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5,128)
    tex_ctx.scale(0.7,0.7)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7-51,108)
    tex_ctx.rotate(1)
    tex_ctx.scale(0.6,0.6)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*7+40,147)
    tex_ctx.rotate(-0.6)
    tex_ctx.scale(0.6,0.6)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128-51,87+256)
    tex_ctx.rotate(1)
    tex_ctx.scale(0.6,0.6)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(40+128,128*2+129)
    tex_ctx.rotate(-0.6)
    tex_ctx.scale(0.6,0.6)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3-51,87+256)
    tex_ctx.rotate(1)
    tex_ctx.scale(0.6,0.6)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(40+128*3,128*2+129)
    tex_ctx.rotate(-0.6)
    tex_ctx.scale(0.6,0.6)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5-55,87+263)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(-6+128*5,128*2+179)
    tex_ctx.rotate(-1.5)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(58+128*5,128*2+101)
    tex_ctx.rotate(-1.5)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7-45,87+261)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(12+128*7,128*2+177)
    tex_ctx.rotate(-1.5)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(66+128*7,128*2+91)
    tex_ctx.rotate(0.1)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128-63,128*3+235)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(2+121,128*4+189)
    tex_ctx.rotate(-1.6)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(17+166,128*4+111)
    tex_ctx.rotate(-1.5)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128+256,128+256*2)
    tex_ctx.scale(0.92,0.92)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.scale(0.9,0.9)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128+256*2,128+256*2)
    tex_ctx.scale(0.92,0.92)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.scale(0.9,0.9)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128+256*3,128+256*2)
    tex_ctx.scale(0.92,0.92)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.scale(0.9,0.9)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128,128+256*3)
    tex_ctx.scale(0.92,0.92)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    
    for(let i=0,j=0;i<Math.PI*2;i+=Math.PI*2/10,j++){
        
        let r=j%2===0?20:50
        
        if(j===0){
            
            tex_ctx.moveTo(Math.sin(i)*r,Math.cos(i)*r)
            
        } else {
            
            tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
        }
    }
    
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(255, 255,58)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128+256*1,128+256*3)
    tex_ctx.scale(0.92,0.92)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    
    for(let i=0,j=0;i<Math.PI*2;i+=Math.PI*2/10,j++){
        
        let r=j%2===0?20:50
        
        if(j===0){
            
            tex_ctx.moveTo(Math.sin(i)*r,Math.cos(i)*r)
            
        } else {
            
            tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
        }
    }
    
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(255, 255,58)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128+256*2,128+256*3)
    tex_ctx.scale(0.92,0.92)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    
    for(let i=0,j=0;i<Math.PI*2;i+=Math.PI*2/10,j++){
        
        let r=j%2===0?20:50
        
        if(j===0){
            
            tex_ctx.moveTo(Math.sin(i)*r,Math.cos(i)*r)
            
        } else {
            
            tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
        }
    }
    
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(255, 255,58)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
}

window.textures_decals=function(tex_ctx){

    function e(x,y,w,h,r=0,a=7){
        tex_ctx.beginPath()
        tex_ctx.ellipse(x,y,w,h,r,-Math.PI*0.5,a-Math.PI*0.5)
        tex_ctx.fill()
    }
    
    function r(x,y,w,h){
        tex_ctx.fillRect(x,y,w,h)
        tex_ctx.strokeRect(x,y,w,h)
    }
    
    tex_ctx.clearRect(0,0,1024,1024)
    // tex_ctx.fillStyle='rgb(100,100,100)'
    // tex_ctx.fillRect(0,0,1024,1024)
    
    tex_ctx.lineCap='butt'
    tex_ctx.lineJoin='butt'
    tex_ctx.translate(128*0+128*0.5,128*0+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(255,80,40)'
    e(0,0,20,20)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(255,255,255)'
    e(0,0,4,4)
    let s=0.1
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,0,13,13,0,-s,s+Math.PI*2/6)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.rotate(Math.PI*2*2/6)
    tex_ctx.ellipse(0,0,13,13,0,-s,s+Math.PI*2/6)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.rotate(Math.PI*2*2/6)
    tex_ctx.ellipse(0,0,13,13,0,-s,s+Math.PI*2/6)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1,128*0)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*2+128*0.5,128*0+128*0.5)
    tex_ctx.font='44px arial'
    tex_ctx.fillText('🌺',-33,15)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3,128*0)
    let g=tex_ctx.createRadialGradient(128*0.5,128*0.5,0,128*0.5,128*0.5,128*0.5)
    tex_ctx.globalAlpha=0.5
    g.addColorStop(0,'rgb(255,255,255)')
    g.addColorStop(1,'rgb(255,255,255,0)')
    tex_ctx.fillStyle=g
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.globalAlpha=1
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.lineWidth=2.5
    tex_ctx.translate(128*4+128*0.5,128*0.5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(88, 227, 88)'
    tex_ctx.lineWidth=1.5
    a=new Path2D('M-14 7L10 6C15 6 15 -5 10 -5L 8 -3C12 -3 12 3 8 3z')
    let _s=tex_ctx.createLinearGradient(-9,-4,17,7)
    _s.addColorStop(0,'rgb(255,0,0)')
    _s.addColorStop(0.15,'rgb(255,0,0)')
    _s.addColorStop(0.15,'rgb(255,255,255)')
    _s.addColorStop(0.3,'rgb(255,255,255)')
    _s.addColorStop(0.3,'rgb(255,0,0)')
    _s.addColorStop(0.45,'rgb(255,0,0)')
    _s.addColorStop(0.45,'rgb(255,255,255)')
    _s.addColorStop(0.6,'rgb(255,255,255)')
    _s.addColorStop(0.6,'rgb(255,0,0)')
    _s.addColorStop(0.75,'rgb(255,0,0)')
    _s.addColorStop(0.75,'rgb(255,255,255)')
    _s.addColorStop(0.9,'rgb(255,255,255)')
    _s.addColorStop(0.9,'rgb(255,0,0)')
    tex_ctx.fillStyle=_s
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-5,-9)
    tex_ctx.scale(3,3)
    tex_ctx.rotate(-0.2)
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5+128*0.5,128*0.5)
    tex_ctx.strokeStyle='rgb(0,180,0)'
    tex_ctx.lineWidth=5
    tex_ctx.strokeRect(-18,-18,40,30)
    tex_ctx.fillStyle='rgb(19, 93, 212)'
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth=2.5
    r(-29,-6,60,35)
    tex_ctx.fillStyle='rgb(251, 255, 0)'
    e(-11,8,8,8)
    tex_ctx.stroke()
    e(13,8,8,8)
    tex_ctx.stroke()
    tex_ctx.fillStyle='black'
    e(13,8,2,2)
    e(-11,8,2,2)
    tex_ctx.fillStyle='rgb(255,0,255)'
    tex_ctx.fillRect(-9,19,7,4)
    tex_ctx.fillStyle='rgb(255,0,0)'
    tex_ctx.fillRect(3,19,7,4)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6+128*0.5,128*0.5-7)
    tex_ctx.rotate(0.3)
    tex_ctx.fillStyle='rgb(86, 252, 136)'
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth=2
    r(-5,-21,10,55)
    tex_ctx.fillStyle='rgb(250, 110, 147)'
    r(-5,-33,10,10)
    tex_ctx.fillStyle='rgb(170,170,170)'
    r(-5,-25,10,5)
    tex_ctx.fillStyle='rgb(214, 193, 101)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,35)
    tex_ctx.lineTo(5,35)
    tex_ctx.lineTo(0,48)
    tex_ctx.closePath()
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0)'
    e(0,44,2,2)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7+128*0.5,128*0.5+28)
    tex_ctx.fillStyle='rgb(255, 204, 0)'
    tex_ctx.strokeStyle='black'
    let aa=tex_ctx.textAlign
    tex_ctx.textAlign='center'
    tex_ctx.lineWidth=3
    tex_ctx.font='95px arial'
    tex_ctx.fillText('!',0,0)
    tex_ctx.strokeText('!',0,0)
    tex_ctx.textAlign=aa
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*0+128*0.5,128*1+128*0.5)
    tex_ctx.scale(1.2,1.2)
    g=tex_ctx.createRadialGradient(0,0,5,0,0,45)
    g.addColorStop(0.1,'rgb(255,255,255,0.2)')
    g.addColorStop(1,'rgb(255,255,255,0.05)')
    tex_ctx.fillStyle=g
    e(0,0,5,5)
    e(33,14,4,4)
    e(-17,24,2,2)
    e(7,-26,3,3)
    for(let i=0;i<6.2831853;i+=6.2831853/7){
        
        tex_ctx.rotate(i)
        e(35,0,16+Math.sin(i*3.6)*15,Math.cos(i*8.5)+2)
        tex_ctx.rotate(-i)
    }
    
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth=3
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1+128*0.5,128*1+128*0.5)
    tex_ctx.lineWidth=8
    tex_ctx.fillStyle='rgb(0,0,0,0)'
    tex_ctx.strokeStyle='rgb(255,255,255)'
    e(0,0,55,55)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.lineCap='round'
    tex_ctx.translate(128*2+128*0.5,128*1+128*0.5)
    tex_ctx.lineWidth=8
    tex_ctx.strokeStyle='rgb(255,255,255)'
    e(0,0,55,55,0,Math.PI*0.25)
    tex_ctx.stroke()
    tex_ctx.lineCap='miter'
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3+128*0.5,128*1+128*0.5)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.font='175px arial'
    tex_ctx.textBaseline='middle'
    tex_ctx.textAlign='center'
    tex_ctx.fillText('☺',2,-5)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*4+128*0.5,128*1+128*0.5-10)
    tex_ctx.scale(1.6,1.6)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=3
    tex_ctx.fillStyle='rgb(100,100,100)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,0)
    tex_ctx.lineTo(0,-15)
    tex_ctx.lineTo(20,-0)
    tex_ctx.lineTo(0,15)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(85,85,85)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,0)
    tex_ctx.lineTo(-19,10)
    tex_ctx.lineTo(0,25)
    tex_ctx.lineTo(0,15)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(70,70,70)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,0)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,25)
    tex_ctx.lineTo(0,15)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,220,50,0.9)'
    tex_ctx.fillRect(-19,8,4,8)
    tex_ctx.fillRect(-13,11,4,8)
    tex_ctx.fillRect(-7,14,4,8)
    tex_ctx.lineWidth=7
    tex_ctx.strokeStyle='rgb(155,0,0)'
    tex_ctx.fillStyle='rgb(0,0,0,0)'
    e(0,-1,8,8*0.75)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(255,0,0)'
    e(0,-4,8,8*0.75)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5+128*0.5,128*1+128*0.5-10)
    tex_ctx.scale(1.6,1.6)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=3
    tex_ctx.fillStyle='rgb(100,100,100)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,0)
    tex_ctx.lineTo(0,-15)
    tex_ctx.lineTo(20,-0)
    tex_ctx.lineTo(0,15)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(85,85,85)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,0)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(0,25)
    tex_ctx.lineTo(0,15)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(70,70,70)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,0)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,25)
    tex_ctx.lineTo(0,15)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,220,50,0.9)'
    tex_ctx.fillRect(-19,8,4,8)
    tex_ctx.fillRect(-13,11,4,8)
    tex_ctx.fillRect(-7,14,4,8)
    tex_ctx.lineWidth=7
    tex_ctx.strokeStyle='rgb(175,175,175)'
    tex_ctx.fillStyle='rgb(0,0,0,0)'
    e(0,-1,8,8*0.75)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(255,255,255)'
    e(0,-4,8,8*0.75)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6+128*0.5,128*1+128*0.5-10)
    tex_ctx.scale(1.6,1.6)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=3
    tex_ctx.fillStyle='rgb(100,100,100)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,0)
    tex_ctx.lineTo(0,-15)
    tex_ctx.lineTo(20,-0)
    tex_ctx.lineTo(0,15)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(85,85,85)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,0)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(0,25)
    tex_ctx.lineTo(0,15)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(70,70,70)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,0)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,25)
    tex_ctx.lineTo(0,15)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,220,50,0.9)'
    tex_ctx.fillRect(-19,8,4,8)
    tex_ctx.fillRect(-13,11,4,8)
    tex_ctx.fillRect(-7,14,4,8)
    tex_ctx.lineWidth=7
    tex_ctx.strokeStyle='rgb(0,0,155)'
    tex_ctx.fillStyle='rgb(0,0,0,0)'
    e(0,-1,8,8*0.75)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(0,0,255)'
    e(0,-4,8,8*0.75)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7+128*0.5,128*1+128*0.5-10)
    tex_ctx.scale(1.6,1.6)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=3
    tex_ctx.fillStyle='rgb(100,100,100)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,0)
    tex_ctx.lineTo(0,-15)
    tex_ctx.lineTo(20,-0)
    tex_ctx.lineTo(0,15)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(85,85,85)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,0)
    tex_ctx.lineTo(-20,10)
    tex_ctx.lineTo(0,25)
    tex_ctx.lineTo(0,15)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(70,70,70)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,0)
    tex_ctx.lineTo(20,10)
    tex_ctx.lineTo(0,25)
    tex_ctx.lineTo(0,15)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,220,50,0.9)'
    tex_ctx.fillRect(-19,8,4,8)
    tex_ctx.fillRect(-13,11,4,8)
    tex_ctx.fillRect(-7,14,4,8)
    tex_ctx.lineWidth=7
    tex_ctx.translate(-2,1)
    tex_ctx.strokeStyle='rgb(181, 181, 0,0.5)'
    tex_ctx.fillStyle='rgb(0,0,0,0)'
    e(0,-1,8,8*0.75)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(255,255,0,0.5)'
    e(0,-4,8,8*0.75)
    tex_ctx.stroke()
    tex_ctx.translate(4,0)
    tex_ctx.strokeStyle='rgb(190,80,190,0.4)'
    tex_ctx.fillStyle='rgb(0,0,0,0)'
    e(0,-1,8,8*0.75)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(237, 102, 237,0.4)'
    e(0,-4,8,8*0.75)
    tex_ctx.stroke()
    tex_ctx.translate(-2,-2)
    tex_ctx.strokeStyle='rgb(0,190,190,0.3)'
    tex_ctx.fillStyle='rgb(0,0,0,0)'
    e(0,-1,8,8*0.75)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(0,255,255,0.3)'
    e(0,-4,8,8*0.75)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(-3,128*2+24)
    tex_ctx.scale(1.75,1.75)
    canvg(tex_ctx.canvas,"<svg><path stroke='black' stroke-width='1.5' fill='rgb(209, 151, 57)' d='M 21 44L 37 50 L 53 44 L 53 11L 38 3L 21 11z'></path><path fill='rgb(0,0,0,0.1)' d='M 37 50 L 53 44 L 53 11L 38 3z'></path><path stroke='black' stroke-width='1' fill='rgb(89, 62, 19)' d='M 21 12L 38 3 L 53 11 L 38 19z'></path><circle stroke='black' stroke-width='1' cx='50' cy='4' r='9' fill='rgb(0,190,50)' transform='scale(0.75,1)'></circle><path stroke='rgb(153, 109, 38)' stroke-width='2' fill='rgb(0,0,0,0)' d='M 38 26L 22 20M 52 19L 38 26M 45 22L 39 48M 45 22L 52 44M 30 22L 38 50M 30 22L 22 45'></path></svg>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(117,128*2+4)
    tex_ctx.scale(1.85,1.9)
    canvg(tex_ctx.canvas,"<svg><path stroke='black' stroke-width='1.5' fill='rgb(240, 240, 45)' d='M 55 50 C 45 56 26 53 27 48L 24 30L 24 23C 31 16 47 13 58 22L 58 34z'></path><circle cx='42' cy='59' r='11' fill='rgb(0,0,0,0.3)' transform='scale(1,0.4)'></circle><path stroke='rgb(0,0,0,0.1)' fill='rgb(0,0,0,0)' stroke-width='3' d='M 25 33 C 36 37 38 40 57 35'></path>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(117+128,128*2+4)
    tex_ctx.scale(1.85,1.9)
    canvg(tex_ctx.canvas,"<svg><path stroke='black' stroke-width='1.5' fill='rgb(255, 145, 250)' d='M 55 50 C 45 56 26 53 27 48L 24 30L 24 23C 31 16 47 13 58 22L 58 34z'></path><circle cx='42' cy='59' r='11' fill='rgb(0,0,0,0.3)' transform='scale(1,0.4)'></circle><path stroke='rgb(0,0,0,0.1)' fill='rgb(0,0,0,0)' stroke-width='3' d='M 25 33 C 36 37 38 40 57 35'></path><path stroke='rgb(255,255,255)' fill='rgb(0,0,0,0)' stroke-width='3.5' d='M 27 47 C 34 46 41 42 41 39M 34 52 C 56 44 49 42 51 38'></path><circle cx='30' cy='30' r='2.5' fill='rgb(0,205,0)'></circle><circle cx='38' cy='33' r='2.5' fill='rgb(255,255,0)'></circle><circle cx='48' cy='32' r='2.5' fill='rgb(0,105,255)'></circle><circle cx='54' cy='28' r='2' fill='rgb(255,0,0)'></circle>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(117+128*2,128*2+4)
    tex_ctx.scale(1.85,1.9)
    canvg(tex_ctx.canvas,"<svg><path stroke='black' stroke-width='1.5' fill='rgb(255, 69, 69)' d='M 55 50 C 45 56 26 53 27 48L 24 30L 24 23C 31 16 47 13 58 22L 58 34z'></path><circle cx='42' cy='59' r='11' fill='rgb(0,0,0,0.3)' transform='scale(1,0.4)'></circle><path stroke='rgb(0,0,0,0.1)' fill='rgb(0,0,0,0)' stroke-width='3' d='M 25 33 C 36 37 38 40 57 35'></path><circle cx='33' cy='43' r='2' fill='rgb(0,0,0,0.3)'></circle><circle cx='42' cy='46' r='2' fill='rgb(0,0,0,0.3)'></circle><circle cx='51' cy='43' r='2' fill='rgb(0,0,0,0.3)'></circle></circle>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(117+128*3,128*2+4)
    tex_ctx.scale(1.85,1.9)
    canvg(tex_ctx.canvas,"<svg><path stroke='black' stroke-width='1.5' fill='rgb(89, 71, 255)' d='M 55 50 C 45 56 26 53 27 48L 24 30L 24 23C 31 16 47 13 58 22L 58 34z'></path><circle cx='42' cy='59' r='11' fill='rgb(0,0,0,0.3)' transform='scale(1,0.4)'></circle><path stroke='rgb(0,0,0,0.1)' fill='rgb(0,0,0,0)' stroke-width='3' d='M 25 33 C 36 37 38 40 57 35'></path><circle cx='33' cy='43' r='2' fill='rgb(0,0,0,0.3)'></circle><circle cx='42' cy='46' r='2' fill='rgb(0,0,0,0.3)'></circle><circle cx='51' cy='43' r='2' fill='rgb(0,0,0,0.3)'></circle>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128+128*4,128*2+-1)
    tex_ctx.scale(1.8,1.8)
    canvg(tex_ctx.canvas,"<svg><circle cx='35' cy='46' r='16' stroke='black' stroke-width='1.5' fill='rgb(188, 222, 153)' ></circle><path stroke='black' stroke-width='1.5' fill='rgb(250,250,250)' d='M 21 33 C 20 39 50 39 49 33L49 25C49 16 21 16 21 25z'></path><circle cx='35' cy='60' r='10' fill='rgb(0,0,0,0.4)' transform='scale(1,0.4)'></circle><path stroke='rgb(225,225,0)' stroke-width='4' fill='rgb(0,0,0,0)' d='M 26 36 L 26 27M 35 36 L 35 29M 44 36 L 44 27'></path><path stroke='rgb(255,120,0)' stroke-width='3' fill='rgb(0,0,0,0)' d='M 26 59 L 35 38M 44 59 L 35 38'></path><path stroke='rgb(0,100,240)' stroke-width='3' fill='rgb(0,0,0,0)' d='M 21 38 L 35 62M 35 62 L 49 38'></path><circle cx='35' cy='25' r='1.5' fill='rgb(220,0,0)' transform='scale(1,2)'></circle><circle cx='23' cy='25' r='1' fill='rgb(220,0,0)' transform='scale(1,2)'></circle><circle cx='47' cy='25' r='1' fill='rgb(220,0,0)' transform='scale(1,2)'></circle>");
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(153+128*5,128*2+38)
    tex_ctx.scale(1.8,1.8)
    canvg(tex_ctx.canvas,"<svg><path stroke='black' stroke-width='1.5' fill='rgb(84, 222, 98)' d='M20 40 C 25 45 45 45 50 40L60 30L50 18C45 10 25 10 20 18L10 30z' transform='scale(0.6,1)'></path><path  fill='rgb(0,0,0,0.2)' d='M20 40 C 25 45 45 45 50 40L60 30C 44 38 30 41 10 30z' transform='scale(0.6,1)'></path><g transform='translate(2,-18) scale(0.9,0.9)'><path stroke='black' stroke-width='1.5' fill='rgb(84, 222, 98)' d='M20 40 C 25 45 45 45 50 40L60 30L50 18C45 10 25 10 20 18L10 30z' transform='scale(0.6,1)'></path><path  fill='rgb(0,0,0,0.2)' d='M20 40 C 25 45 45 45 50 40L60 30C 44 38 30 41 10 30z' transform='scale(0.6,1)'></path></g><path stroke='rgb(84, 222, 98)' stroke-width='3' fill='rgb(0,0,0,0)' d='M21 18 C 25 24 45 23 49 18' transform='scale(0.6,1)'></path><path stroke='black' stroke-width='1' fill='rgb(255,255,0)' d='M 22 23 L 28 32L 16 32z'></path><path stroke='black' stroke-width='1.5' fill='rgb(0,0,0,0)' d='M 22 26 L 22 28M 19 30.5 L 20.5 29.5M 25.5 30.5 L 23.5 29.5'></path><circle fill='rgb(0,0,0)' cx='22' cy='29.25' r='0.8'></circle><g transform='translate(2,-18) scale(0.9,0.9)'><path stroke='black' stroke-width='1' fill='rgb(255,255,0)' d='M 22 23 L 28 32L 16 32z'></path><path stroke='black' stroke-width='1.5' fill='rgb(0,0,0,0)' d='M 22 26 L 22 28M 19 30.5 L 20.5 29.5M 25.5 30.5 L 23.5 29.5'></path><circle fill='rgb(0,0,0)' cx='22' cy='29.25' r='0.8'></circle></g><circle fill='rgb(0,0,0,0.3)' cx='21' cy='-4' r='5' transform='scale(1,0.6)'></circle>");
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(134+128*6,128*2+0)
    tex_ctx.scale(1.75,1.75)
    canvg(tex_ctx.canvas,"<svg><circle cx='35' cy='49' r='16' stroke='black' stroke-width='1.5' fill='rgb(240, 240, 178)' ></circle><path stroke='black' stroke-width='1.5' fill='rgb(240, 240, 178)' d='M 21 33 C 20 39 50 39 49 33L49 25C49 16 21 16 21 25z'></path><circle cx='35' cy='60' r='10' fill='rgb(0,0,0,0.4)' transform='scale(1,0.4)'></circle><circle cx='35' cy='42' r='3' fill='rgb(0,200,80)' transform='scale(1,1.25)'></circle><circle cx='25' cy='42' r='2' fill='rgb(255,255,0)' transform='scale(1,1.25)'></circle><circle cx='45' cy='42' r='2' fill='rgb(255,255,0)' transform='scale(1,1.25)'></circle><path stroke='black' stroke-width='1' fill='rgb(255,255,255)' d='M 30 30 C 22 45 30 37 35 47C 37 37 44 45 40 30' transform='translate(-7,-8) scale(1.2,1.2)'></path><path stroke='black' stroke-width='1' fill='rgb(255,255,255)' d='M 30 30 C 22 45 30 37 35 47C 37 37 44 45 40 30' transform='translate(8,-26) scale(1.2,1.2) rotate(30)'></path><path stroke='black' stroke-width='1' fill='rgb(255,255,255)' d='M 30 30 C 22 45 30 37 35 47C 37 37 44 45 40 30' transform='translate(-11,16) scale(1.2,1.2) rotate(-30)'></path>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(8+128*0,128*3+9)
    tex_ctx.scale(1.75,1.75)
    canvg(tex_ctx.canvas,"<svg><path stroke='black' stroke-width='1.5' fill='rgb(255, 210, 0)' d='M 25 51 C 20 54 40 54 40 50C 37 46 35 42 37 33C 44 34 51 27 51 20C 42 9 14 14 13 20C 13 27 19 35 25 33C 31 36 28 51 24 52'></path><path stroke='black' stroke-width='1.5' fill='rgb(0,0,0,0)' d='M 14 23C 5 18 6 36 17 31M 50 23C 60 18 55 37 46 31'></path><path stroke='rgb(255,0,0)' stroke-width='3' fill='rgb(0,0,0,0)' d='M 15 27C 22 25 20 29 31 26'></path><path stroke='rgb(0,0,255)' stroke-width='3' fill='rgb(0,0,0,0)' d='M 49 26C 49 25 42 29 32 26'></path><text x='33' y='30' fill='rgb(255,255,255)' stroke='rgb(0,255,0)' stroke-width='0.9' style='font-family:cursive;font-size:17px;'>P</text><circle cx='32' cy='36' r='13' stroke-width='7' stroke='rgb(102, 179, 242)' fill='rgb(135, 110, 0)' transform='scale(1,0.4)'></circle>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1-5,128*3)
    tex_ctx.scale(2,2)
    canvg(tex_ctx.canvas,"<svg><path fill='rgb(255,255,0)' stroke='rgb(0,0,0)' stroke-width='1.5' d='M35 15C 20 17 10 55 35 55M35 15C 50 17 60 55 35 55'></path><path fill='rgb(0,0,0)' d='M20 30 C 20 40 50 40 50 30L50 40C50 50 20 50 20 40'></path><path fill='rgb(0,0,0,0.3)' d='M47 25C 57 56 35 60 23 50C 32 48 41 50 50 35'></path>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*2-5,128*3)
    tex_ctx.scale(2,2)
    canvg(tex_ctx.canvas,"<svg><g transform='scale(1.1,1.1) translate(-6,-6)'><rect x='25' y='30' width='25' height='25' rx='6' fill='rgb(94, 235, 214)' stroke='black' stroke-width='1.5'></rect><path stroke='rgb(168, 50, 201)' stroke-width='2' fill='rgb(0,0,0,0)' d='M 33 49L 35 36C 45 39 39 44 34 43L40 48'></path><path stroke='black' stroke-width='1.5' fill='rgb(245, 202, 12)' d='M 26 32L 25 22L 33 27L 37 17L 41 27L 48 22L 48 32z'></path><circle cx='25' cy='23' r='3' fill='rgb(245, 229, 12)' stroke='black' stroke-width='1.5'></circle><circle cx='48' cy='23' r='3' fill='rgb(245, 229, 12)' stroke='black' stroke-width='1.5'></circle><circle cx='37' cy='15' r='3.5' fill='rgb(245, 229, 12)' stroke='black' stroke-width='1.5'></circle></g>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3-5,128*3)
    tex_ctx.scale(2,2)
    canvg(tex_ctx.canvas,"<svg><path fill='rgb(255,100,255)' stroke='black' stroke-width='2' d='M30 60C 26 25 64 25 60 60C55 67 35 67 30 60' transform='translate(10,-6) scale(0.75,0.75)'></path><path fill='rgb(0,255,100)' stroke='black' stroke-width='2' d='M30 60C 26 25 64 25 60 60C55 67 35 67 30 60' transform='translate(-7,3) scale(0.75,0.75)'></path>")
    tex_ctx.fillStyle='white'
    e(41,33,1,1)
    e(49,38,1,1)
    e(50,28,1,1)
    e(44,25,1,1)
    e(26,33,1,1)
    e(21,40,1,1)
    e(24,47,1,1)
    e(31,39,1,1)
    e(34,47,1,1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*4-5,128*3)
    tex_ctx.scale(2,2)
    canvg(tex_ctx.canvas,"<svg><g transform='translate(0,-2) scale(0.9,0.9)'><path stroke='black' stroke-width='2' fill='rgb(255,255,255)' d='M30 20L50 50C 73 53 13 71 30 54z'></path><path stroke='black' stroke-width='1' fill='rgb(0,0,0,0)' d='M 48 51 C 42 56 39 55 33 56'></path><path stroke='rgb(0,0,0,0.1)' stroke-width='6' fill='rgb(255,255,255,0)' d='M 31 24L33 55L26 60'></path><path stroke='black' stroke-width='1' fill='rgb(0,0,0,0)' d='M 48 51 C 42 56 39 55 33 56'></path></g>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5-5,128*3)
    tex_ctx.scale(2,2)
    canvg(tex_ctx.canvas,"<svg><g transform='translate(29,46) scale(-1.2,1.1) rotate(-8)'><path stroke='black' stroke-width='1.5' fill='rgb(40, 212, 71)' d='M-16 -11 C -15 -24 -18 -26 -14 -28C -5 -34 -1 -29 3 -21L -4 -24L 2 -19C -5 -15 -11 -19 -12 -21L -11 -10' transform='translate(4,-1) scale(1.2,1)'></path><path stroke='black' stroke-width='1.5' fill='rgb(40, 212, 71)' d='M-15 -15 C -20 4 4 8 5 0C 8 -3 -1 -24 -15 -15'></path><path stroke='rgb(255,255,255,0.8)' stroke-width='2.5' fill='rgb(0,0,0,0)' d='M-11 -7 C -15 -14 -5 -16 -8 -11M-5 0 C 1 1 4 0 0 -6'></path><circle cx='-7' cy='-3' r='1.8' fill='rgb(255,255,255,0.5)'></circle><circle cx='-2' cy='0' r='1.5' fill='rgb(0,0,0,0.2)'></circle><circle cx='-10' cy='-8' r='1.5' fill='rgb(0,0,0,0.2)'></circle><circle cx='-8' cy='-27' r='1.5' fill='rgb(255,255,255,0.8)'></circle><circle cx='-3' cy='-21' r='1.5' fill='rgb(255,255,255,0.8)'></circle><circle cx='-13' cy='-21' r='1.5' fill='rgb(255,255,255,0.8)'></circle></g>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6+14,128*3+9)
    tex_ctx.scale(1.6,1.6)
    canvg(tex_ctx.canvas,"<svg><path d='M 26 40C 14 39 4 12 30 28C 35 1 45 12 50 26C 68 10 73 31 60 41C 67 58 51 74 41 52C 37 58 2 74 26 40' stroke='rgb(0,0,0)' fill='rgb(138, 88, 18)' stroke-width='2' transform='scale(0.9,0.9) translate(-5,0)'></path><path d='M 27 27L 29 34M 37 27L 39 34M 30 39 L 35 42L40 37' stroke='rgb(255,255,255)' fill='rgb(0,0,0,0)' stroke-width='2'></path>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7+14,128*3+9)
    tex_ctx.scale(1.6,1.6)
    canvg(tex_ctx.canvas,"<svg><g transform='translate(35,35)'><path fill='rgb(255, 255, 160)' stroke='black' stroke-width='2' d='M -20 -15L 15 -15L 20 -10L 20 10L 15 15L-20 15L-20 -15'></path><path fill='rgb(0,0,0,0)' stroke='rgb(0,170,0)' stroke-width='4' d='M -17 -14L -17 14M 13 -14L 18 -8L 18 8L 13 14M -8 -4L7 -4L4 -8L-4 -8L-8 -2'></path><path fill='rgb(50,50,50)' d='M -8 -4L8 -4L8 8L-8 8'></path><path stroke='rgb(50,50,50)' fill='rgb(0,0,0,0)' stroke-width='2' d='M -3 -5L-7 -10M 3 -5L7 -10'></path><circle cx='-4' cy='0' r='2' fill='rgb(255,40,40)'></circle><circle cx='4' cy='0' r='2' fill='rgb(255,40,40)'></circle></g>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*0+6,128*4+9)
    tex_ctx.scale(1.6,1.6)
    canvg(tex_ctx.canvas,"<svg><g transform='translate(35,35)'><path fill='rgb(255, 255, 160)' stroke='black' stroke-width='2' d='M -20 -15L 15 -15L 20 -10L 20 10L 15 15L-20 15L-20 -15'></path><path fill='rgb(0,0,0,0)' stroke='rgb(130,160,130)' stroke-width='4' d='M -17 -14L -17 14M 13 -14L 18 -8L 18 8L 13 14'></path><circle cx='0' cy='0' r='6' fill='rgb(100,150,100)'></circle><circle cx='0' cy='0' r='3' fill='rgb(255, 255, 160)'></circle><rect x='-2.5' y='-9' fill='rgb(100,150,100)' width='5' height='4' transform='rotate(0)'></rect><rect x='-2.5' y='-9' fill='rgb(100,150,100)' width='5' height='4' transform='rotate(45)'></rect><rect x='-2.5' y='-9' fill='rgb(100,150,100)' width='5' height='4' transform='rotate(90)'></rect><rect x='-2.5' y='-9' fill='rgb(100,150,100)' width='5' height='4' transform='rotate(135)'></rect><rect x='-2.5' y='-9' fill='rgb(100,150,100)' width='5' height='4' transform='rotate(180)'></rect><rect x='-2.5' y='-9' fill='rgb(100,150,100)' width='5' height='4' transform='rotate(220)'></rect><rect x='-2.5' y='-9' fill='rgb(100,150,100)' width='5' height='4' transform='rotate(265)'></rect><rect x='-2.5' y='-9' fill='rgb(100,150,100)' width='5' height='4' transform='rotate(310)'></rect></g>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1+2,128*4+9)
    tex_ctx.scale(1.75,1.75)
    canvg(tex_ctx.canvas,"<svg><g transform='translate(36,31) scale(0.85,0.85) rotate(-31)'><path stroke='black' stroke-width='2' fill='rgb(0,0,0,0.25)' d='M-6 -15L5 -15C 5 9 13 -1 15 11C 16 15 13 20 13 20C10 30 -10 30 -13 20C -13 20 -16 15 -15 11C -13 -1 -5 9 -5 -15'></path><rect stroke='black' stroke-width='2' fill='rgb(181, 120, 60)' x='-7' y='-22' width='14' height='9' rx='4'></rect><path fill='rgb(133, 206, 255)' d='M 7 2C 34 34 -34 34 -7 2'></path><circle cx='0' cy='3' r='6' transform='scale(1,0.55)' fill='rgb(104, 169, 212)'></circle><path stroke='black' stroke-width='2.5' fill='rgb(133, 206, 255)' d='M 15 9 C -6 36 37 34 15 9' transform='scale(0.5,0.7) translate(-22,-38) rotate(48)'></path><path stroke='black' stroke-width='2.5' fill='rgb(133, 206, 255)' d='M 15 9 C -6 36 37 34 15 9' transform='scale(0.5,0.6) translate(-43,-16) rotate(39)'></path><path fill='rgb(30,30,30)' d='M 22 26C -2 39 0 -1 19 8C 13 5 5 25 22 24' transform='translate(-5,6) scale(0.8,0.75) scale(0.65,0.65)'></path></g>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*2+2,128*4+9)
    tex_ctx.scale(1.75,1.75)
    canvg(tex_ctx.canvas,"<svg><g transform='translate(36,31) scale(0.85,0.85) rotate(-31)'><path stroke='black' stroke-width='2' fill='rgb(0,0,0,0.25)' d='M-6 -15L5 -15C 5 9 13 -1 15 11C 16 15 13 20 13 20C10 30 -10 30 -13 20C -13 20 -16 15 -15 11C -13 -1 -5 9 -5 -15'></path><rect stroke='black' stroke-width='2' fill='rgb(181, 120, 60)' x='-7' y='-22' width='14' height='9' rx='4'></rect><path fill='rgb(250, 97, 97)' d='M 7 2C 34 34 -34 34 -7 2'></path><circle cx='0' cy='3' r='6' transform='scale(1,0.55)' fill='rgb(201, 78, 78)'></circle><path stroke='black' stroke-width='2.5' fill='rgb(250, 97, 97)' d='M 15 9 C -6 36 37 34 15 9' transform='scale(0.5,0.7) translate(-22,-38) rotate(48)'></path><path stroke='black' stroke-width='2.5' fill='rgb(250, 97, 97)' d='M 15 9 C -6 36 37 34 15 9' transform='scale(0.5,0.6) translate(-43,-16) rotate(39)'></path><path fill='rgb(30,30,30)' d='M15 25 C 1 26 5 10 8 8L 12 16L15 0L18 16L 22 8C 27 12 28 27 15 25' transform='translate(-8,7) scale(0.8,0.75) scale(0.75,0.75)'></path><path stroke='rgb(250, 97, 97)' stroke-width='3' d='M15 19 L15 30' transform='translate(-8,7) scale(0.8,0.75) scale(0.75,0.75)'></path></g>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3+2,128*4+9)
    tex_ctx.scale(1.75,1.75)
    canvg(tex_ctx.canvas,"<svg><g transform='translate(36,31) scale(0.85,0.85) rotate(-31)'><path stroke='black' stroke-width='2' fill='rgb(0,0,0,0.25)' d='M-6 -15L5 -15C 5 9 13 -1 15 11C 16 15 13 20 13 20C10 30 -10 30 -13 20C -13 20 -16 15 -15 11C -13 -1 -5 9 -5 -15'></path><rect stroke='black' stroke-width='2' fill='rgb(181, 120, 60)' x='-7' y='-22' width='14' height='9' rx='4'></rect><path fill='rgb(169, 86, 252)' d='M 7 2C 34 34 -34 34 -7 2'></path><circle cx='0' cy='3' r='6' transform='scale(1,0.55)' fill='rgb(131, 67, 196)'></circle><path stroke='black' stroke-width='2.5' fill='rgb(169, 86, 252)' d='M 15 9 C -6 36 37 34 15 9' transform='scale(0.5,0.7) translate(-22,-38) rotate(48)'></path><path stroke='black' stroke-width='2.5' fill='rgb(169, 86, 252)' d='M 15 9 C -6 36 37 34 15 9' transform='scale(0.5,0.6) translate(-43,-16) rotate(39)'></path><g transform='translate(-11,2) scale(0.75,0.75)'><path fill='rgb(30,30,30)' d='M 10 20 C 0 1 30 0 20 20'></path><rect fill='rgb(30,30,30)' x='10' y='22' width='10' height='4' rx='2'></rect><path stroke='rgb(169, 86, 252)' fill='rgb(0,0,0,0)' stroke-width='2' d='M 11 15 L 13 12L 15 15L 17 12L19 15'></path></g></g>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*4+2,128*4+9)
    tex_ctx.scale(1.75,1.75)
    canvg(tex_ctx.canvas,"<svg><g transform='translate(36,31) scale(0.85,0.85) rotate(-31)'><path stroke='black' stroke-width='2' fill='rgb(0,0,0,0.25)' d='M-6 -15L5 -15C 5 9 13 -1 15 11C 16 15 13 20 13 20C10 30 -10 30 -13 20C -13 20 -16 15 -15 11C -13 -1 -5 9 -5 -15'></path><rect stroke='black' stroke-width='2' fill='rgb(181, 120, 60)' x='-7' y='-22' width='14' height='9' rx='4'></rect><path fill='rgb(87, 232, 76)' d='M 7 2C 34 34 -34 34 -7 2'></path><circle cx='0' cy='3' r='6' transform='scale(1,0.55)' fill='rgb(71, 179, 61)'></circle><path stroke='black' stroke-width='2.5' fill='rgb(87, 232, 76)' d='M 15 9 C -6 36 37 34 15 9' transform='scale(0.5,0.7) translate(-22,-38) rotate(48)'></path><path stroke='black' stroke-width='2.5' fill='rgb(87, 232, 76)' d='M 15 9 C -6 36 37 34 15 9' transform='scale(0.5,0.6) translate(-43,-16) rotate(39)'></path><g transform='scale(0.65,0.65) translate(-14,7)'><path fill='rgb(30,30,30)' d='M 15 9 C -6 36 37 34 15 9' transform='scale(1.25,1.25) translate(-3,-5)'></path><path fill='rgb(87, 232, 76)' d='M 15 9 C -6 36 37 34 15 9' transform='scale(0.3,0.3) translate(36,60)'></path><path fill='rgb(87, 232, 76)' d='M 15 9 C -6 36 37 34 15 9' transform='scale(0.3,-0.3) translate(36,-72)'></path></g></g>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5+2,128*4+9)
    tex_ctx.scale(1.75,1.75)
    canvg(tex_ctx.canvas,"<svg><g transform='translate(36,31) scale(0.85,0.85) rotate(-31)'><path stroke='black' stroke-width='2' fill='rgb(0,0,0,0.25)' d='M-6 -15L5 -15C 5 9 13 -1 15 11C 16 15 13 20 13 20C10 30 -10 30 -13 20C -13 20 -16 15 -15 11C -13 -1 -5 9 -5 -15'></path><rect stroke='black' stroke-width='2' fill='rgb(181, 120, 60)' x='-7' y='-22' width='14' height='9' rx='4'></rect><path fill='rgb(255, 135, 185)' d='M 7 2C 34 34 -34 34 -7 2'></path><circle cx='0' cy='3' r='6' transform='scale(1,0.55)' fill='rgb(199, 105, 144)'></circle><path stroke='black' stroke-width='2.5' fill='rgb(255, 135, 185)' d='M 15 9 C -6 36 37 34 15 9' transform='scale(0.5,0.7) translate(-22,-38) rotate(48)'></path><path stroke='black' stroke-width='2.5' fill='rgb(255, 135, 185)' d='M 15 9 C -6 36 37 34 15 9' transform='scale(0.5,0.6) translate(-43,-16) rotate(39)'></path><g transform='scale(0.65,0.65) translate(-14,7)'><circle cx='15' cy='15' r='10' fill='rgb(30,30,30)'></circle><path stroke='rgb(255, 135, 185)' stroke-width='3' fill='rgb(0,0,0,0)' d='M 19 4 C 4 25 26 3 11 27'></path></g></g>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6+-4,128*4+-9)
    tex_ctx.scale(2,2.2)
    canvg(tex_ctx.canvas,"<svg><g transform='translate(35,35) scale(1,0.6)'> <path fill='rgb(255, 200, 5)' stroke='black' stroke-width='2' d='M -15 -20L 15 -20C16 -15 15 -15 20 -15L20 15C15 15 15 15 15 20L-15 20C-15 15 -15 15 -20 15L-20 -15C-15 -15 -15 -15 -15 -20'></path> <path stroke='rgb(255,0,0)' fill='rgb(0,0,0,0)' stroke-width='1' d='M-15 -11L15 -11L15 11L-15 11L-15 -11M11 -11L11 11M-11 -11L-11 11'></path> <path stroke='rgb(255,0,0)' fill='rgb(0,0,0,0)' stroke-width='2' d='M-3 -7L-3 -0M3 -7L3 -0M-3 3L0 7L3 3'></path> </g>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7,128*4+-2)
    tex_ctx.scale(2,2)
    canvg(tex_ctx.canvas,"<svg><path fill='rgb(255,220,70)' stroke='rgb(0,0,0)' stroke-width='1.5' d='M35 15C 20 17 10 55 35 55M35 15C 50 17 60 55 35 55'></path><path stroke='rgb(235,205,0)' stroke-width='2' fill='rgb(0,0,0,0)' d='M 25 25C 25 25 40 25 40 18M 22 34C 25 35 40 35 47 28M 22 44C 25 45 40 45 49 38M 28 52C 25 53 40 53 47 47'></path><path stroke='rgb(255,255,255)' stroke-width='3' fill='rgb(0,0,0,0)' d='M 35 18C 30 20 28 22 27 26'></path><path stroke='rgb(255,255,255)' stroke-width='3' fill='rgb(0,0,0,0)' d='M 35 18C 30 20 28 22 27 26M 25 16C 30 20 28 22 37 26' transform='translate(52,17) rotate(100) scale(0.5,0.5)'></path><path stroke='rgb(255,255,255)' stroke-width='3' fill='rgb(0,0,0,0)' d='M 35 18C 30 20 28 22 27 26M 25 16C 30 20 28 22 37 26' transform='translate(20,22) rotate(28) scale(0.5,0.5)'></path><path stroke='rgb(255,255,255)' stroke-width='3' fill='rgb(0,0,0,0)' d='M 35 18C 30 20 28 22 27 26M 25 16C 30 20 28 22 37 26' transform='translate(57,52) rotate(168) scale(0.5,0.5)'></path><path fill='rgb(0,0,0,0.2)' d='M47 25C 57 56 35 60 23 50C 32 48 41 50 50 35'></path>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*0+8,128*5+12)
    tex_ctx.scale(1.6,1.6)
    canvg(tex_ctx.canvas,"<svg><path d='M 26 40C 14 39 4 12 30 28C 35 1 45 12 50 26C 68 10 73 31 60 41C 67 58 51 74 41 52C 37 58 2 74 26 40' stroke='rgb(0,0,0)' fill='rgb(186, 157, 54)' stroke-width='2' transform='scale(0.9,0.9) translate(-2,0)'></path><path fill='rgb(255, 255, 110)' d='M5.71,16.85L8.23,26.33L0.00,21.00L-8.23,26.33L-5.71,16.85L-13.31,10.67L-3.53,10.15L-0.00,1.00L3.53,10.15L13.31,10.67L5.71,16.85z' transform='translate(34,23) scale(0.75,0.75) rotate(-7)' stroke='black' stroke-width='1.5'></path><path d='M 31 14L 32 21M 52 23L 46 28M 44 52L 42 45M 16 50L 22 43M 13 25L 19 29' stroke='rgb(240, 255, 145)' fill='rgb(0,0,0,0)' stroke-width='2' transform='translate(2,0)'></path>")
    tex_ctx.setTransform(1,0,0,1,0,0)

    tex_ctx.translate(128*1+8,128*5+5)
    tex_ctx.scale(1.6,1.6)
    canvg(tex_ctx.canvas,"<svg><circle cx='38' cy='38' r='20' fill='black'></circle><circle cx='35' cy='35' r='20' fill='black'></circle><circle cx='38' cy='38' r='18' fill='rgb(207, 162, 48)'></circle><circle cx='35' cy='35' r='18' fill='rgb(255, 203, 61)'></circle><circle cx='28' cy='28' r='1.5' fill='black'></circle><circle cx='41' cy='28' r='1.5' fill='black'></circle><path fill='rgb(0,0,0,0)' stroke='black' stroke-width='1' d='M 42 37 C 41 39 30 41 29 37'></path><rect fill='white' x='35' y='39' width='3' height='4' stroke='black' stroke-width='1'></rect>")
    tex_ctx.setTransform(1,0,0,1,0,0)

    tex_ctx.translate(128*2+8,128*5+5)
    tex_ctx.scale(1.6,1.6)
    canvg(tex_ctx.canvas,"<svg><path d='M20 45C20 55 50 55 50 45C65 45 65 20 50 20C50 10 20 10 20 20Z' fill='rgb(255,255,255)' stroke='rgb(0,0,0)' stroke-width='1.5' transform='translate(0,3)'></path><path d='M50 40 C 60 40 60 25 50 25M50 40 L 50 25' fill='rgb(225,225,225)' stroke='rgb(0,0,0)' stroke-width='1.5' transform='translate(0,3)'></path><path d='M50 20C50 25 20 25 20 20' fill='rgb(0,0,0,0)' stroke='rgb(0,0,0)' stroke-width='1.5' transform='translate(0,3)'></path><circle cx='35' cy='53' r='8' fill='rgb(0,0,0,0.2)' transform='scale(1,0.4)'></circle><path d='M 27 36L 30 40L 33 37L 35 41L 38 36L 42 42' fill='rgb(0,0,0,0)' stroke='rgb(0,0,0,0.7)' stroke-width='1.5'></path></svg>")
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3+8,128*5+5)
    tex_ctx.scale(1.6,1.6)
    canvg(tex_ctx.canvas,"<svg><g transform='rotate(-15) translate(-30,-5)'><rect fill='rgb(242, 141, 119)' x='35' y='35' width='20' height='27' stroke='black' stroke-width='1.5' rx='2'></rect><path fill='rgb(0,0,0,0)' stroke='rgb(222, 199, 151)' stroke-width='7' d='M 35 47C 41 45 47 42 47 35'></path><path fill='rgb(0,0,0,0)' stroke='rgb(207, 119, 101)' stroke-width='2' d='M 38 47L 39 44L 43 44L 43 40L 48 40L 43 40'></path></g><g transform='rotate(20) translate(12,-27)'><rect fill='rgb(217, 159, 0)' x='35' y='35' width='20' height='27' stroke='black' stroke-width='1.5' rx='2'></rect><path fill='rgb(0,0,0,0)' stroke='rgb(0,0,0,0.1)' stroke-width='4' d='M 40 63L 45 47L 50 63'></path><path fill='rgb(0,0,0,0)' stroke='rgb(0,0,0,0.15)' stroke-width='1.5' d='M 39 42L 42 39L 44 41L 47 39L 51 42'></path></g></svg>")
    tex_ctx.setTransform(1,0,0,1,0,0)
}

window.textures_bear=function(tex_ctx){

    function e(x,y,w,h,r=0){
        tex_ctx.beginPath()
        tex_ctx.ellipse(x,y,w,h,r,0,7)
        tex_ctx.fill()
    }
    
    function r(x,y,w,h){
        tex_ctx.fillRect(x,y,w,h)
        tex_ctx.strokeRect(x,y,w,h)
    }
    
    tex_ctx.clearRect(0,0,1024,1024)
    
    tex_ctx.lineCap='butt'
    tex_ctx.lineJoin='butt'
    
    tex_ctx.translate(128*0+128*0.5,256*0+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(123, 105, 65)'
    e(-13,-23,6,6)
    e(13,-23,6,6)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,20)
    tex_ctx.bezierCurveTo(-66,-49,-18,-56,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,20)
    tex_ctx.bezierCurveTo(66,-49,18,-56,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    let g=tex_ctx.createLinearGradient(0,0,0,64)
    g.addColorStop(0,'rgb(33, 35, 37)')
    g.addColorStop(0.6,'rgb(123, 105, 65)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-25)
    tex_ctx.bezierCurveTo(-11,49,-30,40,-12,64)
    tex_ctx.moveTo(12,-25)
    tex_ctx.bezierCurveTo(11,49,30,40,12,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-12,-11,24,75)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(20,20,20)'
    e(-19,-13,5,9)
    e(19,-13,5,9)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(16,-16,2,3)
    e(-22,-16,2,3)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1+128*0.5,256*0+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(240,240,240)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(200,200,200)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,20)
    tex_ctx.bezierCurveTo(-66,-49,-18,-56,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,20)
    tex_ctx.bezierCurveTo(66,-49,18,-56,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    g=tex_ctx.createLinearGradient(0,0,0,64)
    g.addColorStop(0,'rgb(240,240,240)')
    g.addColorStop(0.6,'rgb(170,170,170)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-25)
    tex_ctx.bezierCurveTo(-11,49,-30,40,-12,64)
    tex_ctx.moveTo(12,-25)
    tex_ctx.bezierCurveTo(11,49,30,40,12,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-12,-11,24,75)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(20,20,20)'
    e(-19,-13,5,9)
    e(19,-13,5,9)
    tex_ctx.fillStyle='rgb(200,200,200)'
    e(16,-16,2,3)
    e(-22,-16,2,3)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*2+128*0.5,256*0+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(115, 84, 48)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(97, 69, 39)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,20)
    tex_ctx.bezierCurveTo(-66,-49,-18,-56,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,20)
    tex_ctx.bezierCurveTo(66,-49,18,-56,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    g=tex_ctx.createLinearGradient(0,0,0,64)
    g.addColorStop(0.1,'rgb(115, 84, 48)')
    g.addColorStop(1,'rgb(156, 118, 75)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.fill()
    tex_ctx.fillRect(-12,-11,24,75)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(20,20,20)'
    e(-19,-13,5,9)
    e(19,-13,5,9)
    tex_ctx.fillStyle='rgb(99, 73, 41)'
    e(16,-16,2,3)
    e(-22,-16,2,3)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3+128*0.5,256*0+128*0.5)
    tex_ctx.scale(0.9,0.9)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(52, 135, 63)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(45, 99, 52)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,20)
    tex_ctx.bezierCurveTo(-66,-49,-18,-56,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,20)
    tex_ctx.bezierCurveTo(66,-49,18,-56,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    g=tex_ctx.createLinearGradient(0,0,0,64)
    g.addColorStop(0,'rgb(52, 135, 63)')
    g.addColorStop(0.6,'rgb(70, 181, 83)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.moveTo(-11,-25)
    tex_ctx.bezierCurveTo(-11,49,-30,40,-11,64)
    tex_ctx.moveTo(11,-25)
    tex_ctx.bezierCurveTo(11,49,30,40,11,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-12,-11,24,75)
    tex_ctx.fillStyle='rgb(56, 117, 55)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(24, 71, 23)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(120, 247, 108)'
    e(-19,-13,5,9)
    e(19,-13,5,9)
    tex_ctx.fillStyle='rgb(45, 99, 52)'
    e(16,-16,2,3)
    e(-22,-16,2,3)
    tex_ctx.scale(1/0.9,1/0.9)
    tex_ctx.fillStyle='rgb(100,100,100)'
    tex_ctx.fillRect(-64,-64,11,128)
    tex_ctx.fillRect(64-11,-64,11,128)
    tex_ctx.fillRect(-64,-64,128,11)
    tex_ctx.fillRect(-64,64-11,128,11)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*4+128*0.5,256*0+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(230,230,230)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    g=tex_ctx.createRadialGradient(-22,-14,27,-22,-14,28)
    g.addColorStop(0,'rgb(50,50,50)')
    g.addColorStop(1,'rgb(200,200,200)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,-13)
    tex_ctx.bezierCurveTo(-36,18,-29,-72,-10,-20)
    tex_ctx.lineTo(-10,64)
    tex_ctx.fill()
    g=tex_ctx.createRadialGradient(22,-14,27,22,-14,28)
    g.addColorStop(0,'rgb(50,50,50)')
    g.addColorStop(1,'rgb(200,200,200)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,-13)
    tex_ctx.bezierCurveTo(36,18,29,-72,10,-20)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(230,230,230)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-9,-12)
    tex_ctx.bezierCurveTo(-11,5,-30,56,-9,64)
    tex_ctx.moveTo(9,-12)
    tex_ctx.bezierCurveTo(11,5,30,56,9,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-10,-11,20,75)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(0,0,0)'
    e(-16,-13,5,9)
    e(16,-13,5,9)
    tex_ctx.fillStyle='rgb(70,70,70)'
    e(13,-16,2,3)
    e(-19,-16,2,3)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5+128*0.5,256*0+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(199, 198, 177)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(173, 166, 173)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,-13)
    tex_ctx.bezierCurveTo(-66,-24,-12,-64,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,-13)
    tex_ctx.bezierCurveTo(66,-24,12,-64,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    g=tex_ctx.createLinearGradient(0,0,0,64)
    g.addColorStop(0,'rgb(199, 198, 177)')
    g.addColorStop(0.6,'rgb(224, 221, 184)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.moveTo(-11,-25)
    tex_ctx.bezierCurveTo(-11,49,-30,40,-11,64)
    tex_ctx.moveTo(11,-25)
    tex_ctx.bezierCurveTo(11,49,30,40,11,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-11,-11,22,75)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'
    e(-22,-11,9,7)
    e(22,-11,9,7)
    tex_ctx.strokeStyle='rgb(40,40,40)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-29,-11)
    tex_ctx.bezierCurveTo(-23,-14,-21,-15,-16,-13)
    tex_ctx.moveTo(29,-11)
    tex_ctx.bezierCurveTo(23,-14,21,-15,16,-13)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64+15,64-10)
    tex_ctx.lineTo(-64,64-20)
    tex_ctx.lineTo(-64+21,64-30)
    tex_ctx.lineTo(-64,64-40)
    tex_ctx.lineTo(-64+13,64-50)
    tex_ctx.lineTo(-64,64-60)
    tex_ctx.lineTo(-64+9,64-70)
    tex_ctx.lineTo(-64,64-80)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64+15,64-10)
    tex_ctx.lineTo(-64,64-20)
    tex_ctx.lineTo(-64+21,64-30)
    tex_ctx.lineTo(-64,64-40)
    tex_ctx.lineTo(-64+13,64-50)
    tex_ctx.lineTo(-64,64-60)
    tex_ctx.lineTo(-64+9,64-70)
    tex_ctx.lineTo(-64,64-80)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6+128*0.5,256*0+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(176, 147, 118)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(153, 125, 97)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,-14)
    tex_ctx.bezierCurveTo(-50,2,-7,-69,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,-14)
    tex_ctx.bezierCurveTo(50,2,7,-69,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    g=tex_ctx.createLinearGradient(0,0,0,64)
    g.addColorStop(0,'rgb(176, 147, 118)')
    g.addColorStop(0.6,'rgb(189, 162, 134)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.moveTo(-10,-25)
    tex_ctx.bezierCurveTo(-11,49,-30,40,-10,64)
    tex_ctx.moveTo(10,-25)
    tex_ctx.bezierCurveTo(11,49,30,40,10,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-10,-11,20,75)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(20,20,20)'
    e(-19,-13,6,7)
    e(19,-13,6,7)
    e(19,-19,5,3)
    e(-19,-19,5,3)
    tex_ctx.fillStyle='rgb(153, 125, 97)'
    e(15,-16,2,3)
    e(-23,-16,2,3)
    tex_ctx.fillStyle='rgb(205,50,50,0.07)'
    e(-41,19,10,10)
    e(41,19,10,10)
    tex_ctx.fillStyle='rgb(69, 62, 51)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-9,-64)
    tex_ctx.bezierCurveTo(-5,-56,-13,-53,-19,-55)
    tex_ctx.bezierCurveTo(-6,-36,6,-45,10,-49)
    tex_ctx.bezierCurveTo(15,-52,16,-61,13,-64)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7+128*0.5,256*0+128*0.5)
    tex_ctx.fillStyle='rgb(56, 75, 125)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(196, 114, 96)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-15,-64)
    tex_ctx.lineTo(-29,64)
    tex_ctx.lineTo(29,64)
    tex_ctx.lineTo(15,-64)
    tex_ctx.fill()
    tex_ctx.lineWidth=4
    tex_ctx.strokeStyle='rgb(0,0,0,0.2)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-15,-64)
    tex_ctx.lineTo(-29,64)
    tex_ctx.moveTo(15,-64)
    tex_ctx.lineTo(29,64)
    tex_ctx.stroke()
    tex_ctx.fillStyle='white'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-15,-64)
    tex_ctx.lineTo(-11,-50)
    tex_ctx.lineTo(-64,-64)
    tex_ctx.moveTo(15,-64)
    tex_ctx.lineTo(10,-50)
    tex_ctx.lineTo(64,-64)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.lineWidth=1.2
    tex_ctx.strokeStyle='white'
    tex_ctx.fillStyle='rgb(227, 227, 107)'
    e(-31,-27,6,6)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(145, 194, 103)'
    e(-35,3,6,6)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(252, 81, 81)'
    e(-38,33,6,6)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*0+128*0.5,256*0+128*1.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(194, 149, 43)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(176, 126, 39)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,20)
    tex_ctx.bezierCurveTo(-66,-49,-18,-56,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,20)
    tex_ctx.bezierCurveTo(66,-49,18,-56,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    g=tex_ctx.createLinearGradient(0,0,0,64)
    g.addColorStop(0,'rgb(194, 149, 43)')
    g.addColorStop(0.6,'rgb(214, 173, 79)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-25)
    tex_ctx.bezierCurveTo(-11,49,-30,40,-12,64)
    tex_ctx.moveTo(12,-25)
    tex_ctx.bezierCurveTo(11,49,30,40,12,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-12,-11,24,75)
    tex_ctx.fillStyle='rgb(190,190,190,0.6)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-50,-25)
    tex_ctx.bezierCurveTo(-50,-30,50,-30,50,-25)
    tex_ctx.lineTo(50,-20)
    tex_ctx.bezierCurveTo(50,10,5,10,5,-12)
    tex_ctx.lineTo(-5,-12)
    tex_ctx.bezierCurveTo(-5,10,-50,10,-50,-20)
    tex_ctx.lineTo(-50,-25)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(20,20,20)'
    e(-19,-13,5,9)
    e(19,-13,5,9)
    tex_ctx.fillStyle='rgb(186, 161, 115)'
    e(16,-16,2,3)
    e(-22,-16,2,3)
    tex_ctx.fillStyle='rgb(255,255,255,0.5)'
    e(-45,-21,2,4)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1+128*0.5,256*0.5+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(235, 210, 96)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(209, 189, 102)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,-10)
    tex_ctx.bezierCurveTo(-50,-31,-10,-55,-10,-8)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,-10)
    tex_ctx.bezierCurveTo(50,-31,10,-55,10,-8)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    g=tex_ctx.createLinearGradient(0,0,0,64)
    g.addColorStop(0,'rgb(235, 210, 96)')
    g.addColorStop(0.6,'rgb(250, 233, 163)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.moveTo(-10,-25)
    tex_ctx.bezierCurveTo(-11,49,-30,40,-10,64)
    tex_ctx.moveTo(10,-25)
    tex_ctx.bezierCurveTo(11,49,30,40,10,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-10,-11,20,75)
    tex_ctx.fillStyle='rgb(87, 59, 30)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(51, 34, 18)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(20,20,20)'
    e(-19,-13,6,7)
    e(19,-13,6,7)
    e(21,-19,5,2)
    e(-22,-19,5,2)
    tex_ctx.fillStyle='rgb(209, 189, 102)'
    e(15,-14,2,3)
    e(-23,-14,2,3)
    tex_ctx.fillStyle='rgb(255, 166, 166,0.4)'
    e(-41,19,10,10)
    e(41,19,10,10)
    tex_ctx.setTransform(1,0,0,1,0,0)

    tex_ctx.translate(128*2+128*0.5,256*0.5+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-16,10)
    tex_ctx.bezierCurveTo(-20,39,20,39,16,10)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0)'
    e(-22,-20,3,6)
    e(22,-20,3,6)
    tex_ctx.setTransform(1,0,0,1,0,0)

    tex_ctx.translate(128*3+128*0.5,256*0.5+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(242, 102, 242)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    e(13,-23,6,6)
    tex_ctx.fillStyle='rgb(119, 252, 183)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,20)
    tex_ctx.bezierCurveTo(-66,-49,-18,-56,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,20)
    tex_ctx.bezierCurveTo(66,-49,18,-56,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(242, 102, 242)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-25)
    tex_ctx.bezierCurveTo(-11,49,-30,40,-12,64)
    tex_ctx.moveTo(12,-25)
    tex_ctx.bezierCurveTo(11,49,30,40,12,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-12,-11,24,75)
    tex_ctx.fillStyle='rgb(50,255,150)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(49, 224, 134)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(255, 255, 255)'
    e(-19,-13,5,9)
    e(19,-13,5,9)
    tex_ctx.fillStyle='rgb(50,255,150)'
    e(16,-16,2,3)
    e(-22,-16,2,3)
    tex_ctx.setTransform(1,0,0,1,0,0)
}
