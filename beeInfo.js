window.beeInfo={
    
    basic:{
        
        u:0,v:0,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:14,convertSpeed:4,convertAmount:80,attack:1,energy:20,favoriteTreat:'sunflowerSeed',rarity:'common',color:'white',description:'An ordinary bee. Well rounded and hard working!',giftedHiveBonus:{oper:'*',stat:'redPollen,bluePollen,whitePollen',num:1.2}
    },
    
    looker:{
        
        u:128/2048,v:0,meshPartId:0,gatherSpeed:4,gatherAmount:13,speed:14,tokens:['focus'],convertSpeed:4,convertAmount:160,attack:1,attackTokens:['focus'],energy:162,favoriteTreat:'sunflowerSeed',rarity:'rare',color:'white',description:'This silent bee is always watching and gaining valuable insights.',giftedHiveBonus:{oper:'+',stat:'criticalPower',num:0.25}
        
    },
    
    music:{
        
        u:256/2048,v:0,meshPartId:5,gatherSpeed:4,gatherAmount:16,speed:16.1,tokens:['focus','melody','link'],convertSpeed:4,convertAmount:240,attack:1,attackTokens:['focus','melody','link'],energy:20,favoriteTreat:'blueberry',rarity:'legendary',color:'white',description:"This bee's buzz is so beautiful it can bring anyone to tears. It uses this gift to motivate others.",giftedHiveBonus:{oper:'*',stat:'pollenFromBees',num:1.25}
        
    },
    
    fire:{
        
        u:(256+128)/2048,v:0,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:11.5,gatheringPassive:function(bee){if(Math.random()<(bee.gifted?0.5:0.35)){objects.explosions.push(new Explosion({col:[1,0.5,0],pos:[Math.round(bee.pos[0]),bee.pos[1]-0.225,Math.round(bee.pos[2])],life:0.5,size:1.5,speed:0.5,aftershock:0.01,height:0.01}));objects.flames.push(new Flame(player.fieldIn,bee.flowerCollecting[0],bee.flowerCollecting[1]))}},particles:function(bee){ParticleRenderer.add({x:bee.pos[0],y:bee.pos[1],z:bee.pos[2],vx:MATH.random(-0.3,0.3),vy:MATH.random(-0.3,0.3),vz:MATH.random(-0.3,0.3),grav:0,size:MATH.random(80,120),col:[player.isNight,MATH.random(0.4,0.7)*player.isNight,0],life:1.5,rotVel:MATH.random(-3,3),alpha:2.5})},convertSpeed:4,convertAmount:80,attack:4,tokens:['redBomb'],energy:25,favoriteTreat:'pineapple',rarity:'epic',color:'red',description:'As an egg, this bee was accidentally left in the trunk of a car in the middle of the summer for over 3 days!',giftedHiveBonus:{oper:'*',stat:'flamePollen',num:1.5}
    },
    
    bubble:{
        
        u:(256+256)/2048,v:0,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:16.1,gatheringPassive:function(bee){if(Math.random()<(bee.gifted?0.5:0.35)){objects.bubbles.push(new Bubble(player.fieldIn,bee.flowerCollecting[0],bee.flowerCollecting[1]))}},particles:function(bee){ParticleRenderer.add({x:bee.pos[0],y:bee.pos[1],z:bee.pos[2],vx:MATH.random(-0.3,0.3),vy:MATH.random(-0.3,0.3),vz:MATH.random(-0.3,0.3),grav:0,size:MATH.random(35,70),col:[MATH.random(0.1,0.3)*player.isNight,MATH.random(0.4,0.6)*player.isNight,MATH.random(0.8,1)*player.isNight],life:1.5,rotVel:MATH.random(-3,3),alpha:2.5})},convertSpeed:4,convertAmount:160,attack:3,tokens:['blueBomb'],energy:20,favoriteTreat:'blueberry',rarity:'epic',color:'blue',description:'As a larva, this bee lived in the ocean. It loves Blue flowers cause they remind it of home.',giftedHiveBonus:{oper:'*',stat:'bubblePollen',num:1.5}
    },
    
    hasty:{
        
        u:128*5/2048,v:0,meshPartId:0,gatherSpeed:3,gatherAmount:10,speed:19.6,tokens:['haste'],convertSpeed:3,convertAmount:80,attack:1,attackTokens:['haste'],energy:20,favoriteTreat:'pineapple',rarity:'rare',color:'white',description:'A quick bee who always zips arounds. Sometimes it even makes YOU move faster.',giftedHiveBonus:{oper:'*',stat:'walkSpeed',num:1.1}
        
    },
    
    bomber:{
        
        u:128*6/2048,v:0,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:15.4,tokens:['whiteBomb'],convertSpeed:4,convertAmount:120,attack:2,energy:20,favoriteTreat:'sunflowerSeed',rarity:'rare',color:'white',description:'This crafty bee makes bombs which collect pollen from all nearby flowers.',giftedHiveBonus:{oper:'*',stat:'redBombPollen,blueBombPollen,whiteBombPollen',num:1.25}
        
    },
    
    fuzzy:{
        
        u:128*7/2048,v:0,meshPartId:7,gatherSpeed:6,gatherAmount:100,speed:11.9,convertSpeed:6,convertAmount:40,attack:3,energy:50,gatheringPassive:function(bee){
            
            let fs=[
                
                [0,0],[-1,-1],[1,-1],[1,1],[-1,1],[0,1],[0,-1],[1,0],[-1,0],[0,2],[2,0],[0,-2],[-2,0]
                
            ]
            
            let f=fieldInfo[player.fieldIn]
            
            for(let i=0,l=MATH.random(-1+(bee.level*0.05),6);i<l;i++){
                
                let r=(Math.random()*fs.length)|0
                let x=fs[r][0]+bee.flowerCollecting[0],z=fs[r][1]+bee.flowerCollecting[1]
                
                fs.splice(r,1)
                
                if(x>=0&&x<f.width&&z>=0&&z<f.length){
                    
                    updateFlower(player.fieldIn,x,z,function(f){
                        
                        if(f.level<5){
                            
                            f.level++
                            f.pollinationTimer=1
                            
                        } else {
                            
                            f.height=1
                        }
                        
                    },true,false,true)
                    
                    for(let j=0;j<6;j++){
                        
                        ParticleRenderer.add({x:x+f.x,y:f.y+0.5,z:z+f.z,vx:MATH.random(-1,1),vy:Math.random()*2,vz:MATH.random(-1,1),grav:-3,size:100,col:[player.isNight,player.isNight,MATH.random(0.6,1)*player.isNight],life:2.5,rotVel:MATH.random(-3,3),alpha:2})
                    }
                }
            }
            
        },particles:function(bee){ParticleRenderer.add({x:bee.pos[0],y:bee.pos[1],z:bee.pos[2],vx:MATH.random(-1,1),vy:MATH.random(0.5,1.4),vz:MATH.random(-1,1),grav:-3,size:MATH.random(25,60),col:[player.isNight,player.isNight,MATH.random(0.6,1)*player.isNight],life:0.75,rotVel:MATH.random(-3,3),alpha:10})},tokens:['pollenHaze*','fuzzBomb','whiteBomb_'],favoriteTreat:'pineapple',rarity:'mythic',color:'white',description:'This unkempt ball of fluff is actually a bee. Its fur aids in the pollination of flowers.',giftedHiveBonus:{oper:'*',stat:'whiteBombPollen',num:1.1}
        
    },
    
    stubborn:{
        
        u:128*8/2048,v:0,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:11.9,tokens:['pollenMarkToken'],convertSpeed:3,convertAmount:80,attack:2,energy:20,favoriteTreat:'strawberry',rarity:'rare',color:'white',description:"A hardheaded bee who can't be bossed around. It tells others where to go.",giftedHiveBonus:{oper:'*',stat:'tokenLifespan',num:1.25}
        
    },
    
    spicy:{
        
        u:128*9/2048,v:0,meshPartId:4,gatherSpeed:4,gatherAmount:14,speed:14,convertSpeed:2,convertAmount:200,tokens:['inferno','flameFuel*'],attack:5,attackTokens:['inferno','flameFuel*','rage'],energy:20,particles:function(bee){if(player.flameHeatStack){ParticleRenderer.add({x:bee.pos[0],y:bee.pos[1],z:bee.pos[2],vx:MATH.random(-0.7,0.7),vy:MATH.random(-0.3,0.3),vz:MATH.random(-0.7,0.7),grav:1.25,size:110,col:[player.isNight,player.isNight,player.isNight],life:1.5,rotVel:MATH.random(-3,3),alpha:(player.flameHeatStack-1)*2})}},favoriteTreat:'strawberry',rarity:'mythic',color:'red',description:'Some like it hot - this bee likes it scorching. Even the honey it makes is spicy.',giftedHiveBonus:{oper:'*',stat:'flameLife',num:1.25}
        
    },
    
    vector:{
        
        u:1280/2048,v:0,meshPartId:2,gatherSpeed:4,gatherAmount:18,speed:16.24,convertSpeed:2.72,convertAmount:144,tokens:['pollenMarkToken','markSurge*','triangulate'],attack:5,energy:45.6,favoriteTreat:'pineapple',rarity:'mythic',color:'white',description:'A bee brought to life by an extremely complex trigonometric equation.',giftedHiveBonus:{oper:'*',stat:'markDuration',num:1.15}
        
    },
    
    tadpole:{
        
        u:128*11/2048,v:0,meshPartId:0,gatherSpeed:6,gatherAmount:10,speed:11.2,convertSpeed:4,convertAmount:120,tokens:['summonFrog','blueBoost','babyLove*'],attack:0.5,energy:10,gatheringPassive:function(bee){if(Math.random()<(bee.gifted?0.75:0.55)){objects.bubbles.push(new Bubble(player.fieldIn,bee.flowerCollecting[0],bee.flowerCollecting[1]))}},favoriteTreat:'blueberry',rarity:'mythic',color:'blue',description:'A tiny amphibious bee who wants to become a frog when it grows up.',giftedHiveBonus:{oper:'*',stat:'bluePollen',num:1.1},trails:[{length:8,size:0.15,color:[29/215, 133/215, 72/215,1],skipFrame:3,skipAdd:3,vertical:true}]
    },
    
    buoyant:{
        
        u:128*12/2048,v:0,meshPartId:3,gatherSpeed:5,gatherAmount:15,speed:14,convertSpeed:3,convertAmount:150,tokens:['inflateBalloons','surpriseParty*','blueBomb_'],attack:3,energy:60,favoriteTreat:'blueberry',rarity:'mythic',color:'blue',description:"Just like a balloon, nothing can keep this bee down. It's always ready to party.",giftedHiveBonus:{oper:'*',stat:'capacityMultiplier',num:1.2}
        
    },
    
    gummy:{
        
        u:128*13/2048,v:0,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:14,convertSpeed:4,convertAmount:700,tokens:['gummyBlob','gummyBarrage','whiteBoost'],attack:3,energy:50,rarity:'event',color:'white',description:"A squishy bee who's sweet as sugar. Covers flowers in goo to grant you bonus honey!",giftedHiveBonus:{oper:'+',stat:'honeyPerPollen',num:1.05}
        
    },
    
    precise:{
        
        u:128*14/2048,v:0,meshPartId:1,gatherSpeed:4,gatherAmount:20,speed:11.2,convertSpeed:4,convertAmount:130,tokens:['targetPractice','redBomb_'],attack:8,energy:40,attackTokens:['targetPractice'],favoriteTreat:'sunflowerSeed',rarity:'mythic',color:'red',description:'This sharpshooting bee is always on point and expects the same of you.',giftedHiveBonus:{oper:'+',stat:'superCritChance',num:0.05},trails:[{length:4,size:0.25,triangle:true,color:[219/255,72/255,92/255,1],skipFrame:3,skipAdd:3}]
    },
    
    rage:{
        
        u:128*15/2048,v:0,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:15.4,convertSpeed:4,convertAmount:80,attack:4,tokens:['link'],energy:20,attackTokens:['rage','link'],favoriteTreat:'strawberry',rarity:'epic',color:'red',description:'A very angry bee who has been wronged its whole life. It harnesses its rage to become more powerful.',giftedHiveBonus:{oper:'+',stat:'whiteBeeAttack,redBeeAttack,blueBeeAttack',num:1}
    },
    
    crimson:{
        
        u:128*0/2048,v:256/2048,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:18.2,convertSpeed:3,convertAmount:120,tokens:['redPulse','redBombSync'],attack:6,energy:35,rarity:'event',color:'red',description:"A superhero and defender of all things Red! Together with Cobalt Bee it works to unite bees of all colors.",giftedHiveBonus:{oper:'+',stat:'instantRedConversion',num:0.1},trails:[{length:7,size:0.2,triangle:true,color:[1,0,0,1],skipFrame:3,skipAdd:3,beeOffset:-0.05},{length:7,size:0.075,triangle:true,color:[1,1,1,1],skipFrame:3,skipAdd:3,beeOffset:0.05}]
        
    },
    
    cobalt:{
        
        u:128*1/2048,v:256/2048,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:18.2,convertSpeed:3,convertAmount:120,tokens:['bluePulse','blueBombSync'],attack:6,energy:35,rarity:'event',color:'blue',description:"A superhero and defender of all things Blue! Together with Crimson Bee it works to unite bees of all colors.",giftedHiveBonus:{oper:'+',stat:'instantBlueConversion',num:0.1},trails:[{length:7,size:0.2,triangle:true,color:[0,0,1,1],skipFrame:3,skipAdd:3,beeOffset:-0.05},{length:7,size:0.075,triangle:true,color:[1,1,1,1],skipFrame:3,skipAdd:3,beeOffset:0.05}]
        
    },
    
    photon:{
        
        u:128*2/2048,v:256/2048,meshPartId:6,gatherSpeed:2,gatherAmount:20,speed:21,convertSpeed:2,convertAmount:240,tokens:['beamStorm','haste','whiteBoost'],attackTokens:['haste'],attack:3,energy:Infinity,rarity:'event',color:'white',description:"An entity made of pure light temporarily taking on the form of a bee.",giftedHiveBonus:{oper:'+',stat:'instantWhiteConversion,instantBlueConversion,instantRedConversion',num:0.05},trails:[{length:10,size:0.25,color:[1,1,0,0.5],skipFrame:2,skipAdd:2}]
    },
    
    bumble:{
        
        u:128*3/2048,v:256/2048,meshPartId:0,gatherSpeed:4,gatherAmount:18,speed:10.5,tokens:['blueBomb'],convertSpeed:4,convertAmount:80,attack:1,attackTokens:[],energy:50,favoriteTreat:'blueberry',rarity:'rare',color:'blue',description:'A mellow fellow who moves a little slow, but works harder and longer than others.',giftedHiveBonus:{oper:'*',stat:'capacityMultiplier',num:1.1}
        
    },
    
    rascal:{
        
        u:128*4/2048,v:256/2048,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:16.1,tokens:['redBomb'],convertSpeed:4,convertAmount:80,attack:3,attackTokens:[],energy:20,favoriteTreat:'strawberry',rarity:'rare',color:'red',description:'A mischevious bee who moves quick and hits hard. Keep an eye out on this one!',giftedHiveBonus:{oper:'*',stat:'redBombPollen',num:1.3}
        
    },
    
    cool:{
        
        u:128*5/2048,v:256/2048,meshPartId:0,gatherSpeed:3,gatherAmount:10,speed:14,tokens:['blueBoost'],convertSpeed:4,convertAmount:80,attack:2,attackTokens:[],energy:20,favoriteTreat:'blueberry',rarity:'rare',color:'blue',description:"A sarcastic bee who's a little better than the others. Sometimes boosts pollen from Blue flowers.",giftedHiveBonus:{oper:'*',stat:'bluePollen',num:1.15}
        
    },
    
    rad:{
        
        u:128*6/2048,v:256/2048,meshPartId:0,gatherSpeed:4,gatherAmount:13,speed:14,tokens:['redBomb'],convertSpeed:3,convertAmount:80,attack:1,attackTokens:[],energy:20,favoriteTreat:'strawberry',rarity:'rare',color:'red',description:'A stylish bee with a taste for red flowers. Everyone wants to be this bee.',giftedHiveBonus:{oper:'*',stat:'redPollen',num:1.15}
        
    },
    
    brave:{
        
        u:128*7/2048,v:256/2048,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:16.8,convertSpeed:4,convertAmount:200,attack:5,energy:30,favoriteTreat:'pineapple',rarity:'rare',color:'white',description:'This loyal bee will do anything to protect its owner.',giftedHiveBonus:{oper:'+',stat:'whiteBeeAttack,redBeeAttack,blueBeeAttack',num:1}
    },
    
    windy:{
        
        u:128*8/2048,v:256/2048,meshPartId:0,gatherSpeed:3,gatherAmount:10,speed:19.6,convertSpeed:2,convertAmount:180,tokens:['whiteBoost','rainCloud','tornado'],attackTokens:[],attack:3,energy:20,rarity:'event',color:'white',description:"An entity made of pure light temporarily taking on the form of a bee.",giftedHiveBonus:{oper:'+',stat:'instantWhiteConversion',num:0.1},trails:[{length:15,size:0.4,color:[0.5,0.5,0.5,0.4],skipFrame:4,skipAdd:4},{length:15,size:0.4,color:[0.5,0.5,0.5,0.4],skipFrame:4,skipAdd:4,vertical:true}]
    },
    
    bucko:{
        
        u:128*9/2048,v:256/2048,meshPartId:8,gatherSpeed:4,gatherAmount:17,speed:15.4,convertSpeed:3,convertAmount:80,attack:5,energy:30,tokens:['blueBoost'],favoriteTreat:'blueberry',rarity:'epic',color:'blue',description:"Leader of the Blue bees, and a long time rival of Riley Bee. It's tenacity is it's greatest strength.",giftedHiveBonus:{oper:'*',stat:'blueFieldCapacity',num:1.25}
    },
    
    riley:{
        
        u:128*10/2048,v:256/2048,meshPartId:8,gatherSpeed:2,gatherAmount:10,speed:15.4,convertSpeed:4,convertAmount:140,attack:5,energy:25,tokens:['redBoost'],favoriteTreat:'strawberry',rarity:'epic',color:'red',description:"Leader of the Red bees, and a long time rival of Bucko Bee. It's fiery nature has elevated it above the rest.",giftedHiveBonus:{oper:'*',stat:'redFieldCapacity',num:1.25}
    },
    
    commander:{
        
        u:128*11/2048,v:256/2048,meshPartId:9,gatherSpeed:4,gatherAmount:15,speed:14,convertSpeed:4,convertAmount:80,attack:4,energy:30,tokens:['focus','whiteBomb'],attackTokens:['focus'],favoriteTreat:'sunflowerSeed',rarity:'epic',color:'white',description:"A strong, no-nonsense bee who stays level headed when things get rough.",giftedHiveBonus:{oper:'+',stat:'criticalChance',num:0.03}
    },
    
    honey:{
        
        u:128*12/2048,v:256/2048,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:14,convertSpeed:2,convertAmount:360,attack:1,energy:20,tokens:['honeyMarkToken'],favoriteTreat:'sunflowerSeed',rarity:'epic',color:'white',description:"A satisfied bee always full with the finest honey. If you're lucky it will share some.",giftedHiveBonus:{oper:'*',stat:'honeyFromTokens',num:1.5}
    },
    
    tabby:{
        
        u:128*13/2048,v:256/2048,meshPartId:10,gatherSpeed:4,gatherAmount:10,speed:16.1,convertSpeed:3,convertAmount:160,attack:4,energy:28,tokens:['scratch','tabbyLove'],rarity:'event',color:'white',description:"This affectionate bee was raised by cats. It becomes a better worker as it warms up to you",giftedHiveBonus:{oper:'+',stat:'criticalPower',num:0.5}
    },
    
    diamond:{
        
        u:128*14/2048,v:256/2048,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:14,convertSpeed:4,convertAmount:1000,attack:1,energy:20,tokens:['blueBomb_'],rarity:'legendary',color:'blue',description:"This affectionate bee was raised by cats. It becomes a better worker as it warms up to you",giftedHiveBonus:{oper:'*',stat:'convertRate',num:1.5},particles:function(bee){ParticleRenderer.add({x:bee.pos[0]+MATH.random(-0.5,0.5),y:bee.pos[1]+MATH.random(-0.5,0.5),z:bee.pos[2]+MATH.random(-0.5,0.5),vx:0,vy:0,vz:0,grav:0,size:MATH.random(15,70),col:[1,1,1],life:0.25,rotVel:MATH.random(-6,6),alpha:1})},favoriteTreat:'blueberry'
    },
    
    demon:{
        
        u:128*15/2048,v:256/2048,meshPartId:11,gatherSpeed:4,gatherAmount:35,speed:10.5,convertSpeed:4,convertAmount:60,attack:8,energy:20,tokens:['redBomb','redBomb_'],rarity:'legendary',color:'red',description:"A powerful bee with magical powers fueled by pure hatred.",giftedHiveBonus:{oper:'+',stat:'instantBombConversion',num:0.15},gatheringPassive:function(bee){if(Math.random()<(bee.gifted?0.75:0.55)){objects.explosions.push(new Explosion({col:[1,0.5,0],pos:[Math.round(bee.pos[0]),bee.pos[1]-0.225,Math.round(bee.pos[2])],life:0.5,size:1.5,speed:0.5,aftershock:0.01,height:0.01}));objects.flames.push(new Flame(player.fieldIn,bee.flowerCollecting[0],bee.flowerCollecting[1]))}},particles:function(bee){ParticleRenderer.add({x:bee.pos[0],y:bee.pos[1],z:bee.pos[2],vx:MATH.random(-0.3,0.3),vy:MATH.random(-0.3,0.3),vz:MATH.random(-0.3,0.3),grav:0,size:MATH.random(80,130),col:[1,MATH.random(0.4,0.7),0],life:1.5,rotVel:MATH.random(-3,3),alpha:2.5})},favoriteTreat:'pineapple'
    },
    
    carpenter:{
        
        u:128*0/2048,v:256*2/2048,meshPartId:12,gatherSpeed:3,gatherAmount:10,speed:11.2,convertSpeed:4,convertAmount:120,attack:4,energy:25,tokens:['pollenMarkToken','honeyMarkToken'],rarity:'legendary',color:'white',description:"A bee with a knack for construction. It built its own body out of wood.",giftedHiveBonus:{oper:'*',stat:'pollenFromTools',num:1.25},favoriteTreat:'sunflowerSeed'
    },
    
    lion:{
        
        u:128*1/2048,v:256*2/2048,meshPartId:13,gatherSpeed:4,gatherAmount:20,speed:19.6,convertSpeed:2,convertAmount:160,attack:9,energy:60,tokens:['whiteBomb_'],rarity:'legendary',color:'white',description:"Half lion, half bee. This is the king of both the jungle and bee hive.",giftedHiveBonus:{oper:'+',stat:'whiteBeeAttack',num:2},favoriteTreat:'pineapple'
    },
    
    ninja:{
        
        u:128*2/2048,v:256*2/2048,meshPartId:0,gatherSpeed:2,gatherAmount:10,speed:21,convertSpeed:2,convertAmount:80,attack:4,energy:20,tokens:['haste','blueBomb_'],rarity:'legendary',color:'white',description:"This bee trained vigorously for years to become the swiftest bee that has ever lived.",giftedHiveBonus:{oper:'*',stat:'beeSpeed',num:1.05},favoriteTreat:'sunflowerSeed'
    },
    
    shy:{
        
        u:128*3/2048,v:256*2/2048,meshPartId:0,gatherSpeed:2,gatherAmount:10,speed:18.2,convertSpeed:4,convertAmount:320,attack:2,energy:40,tokens:['redBoost','redBomb_'],rarity:'legendary',color:'white',description:"This talented bee doesn't like to socialize, it just wants to work and be left alone.",giftedHiveBonus:{oper:'*',stat:'redBeeAbilityRate',num:1.15},favoriteTreat:'sunflowerSeed',particles:function(bee){if(Math.random()<0.2){ParticleRenderer.add({x:bee.pos[0],y:bee.pos[1],z:bee.pos[2],vx:MATH.random(-0.1,0.1),vy:MATH.random(-0.1,0.1),vz:MATH.random(-0.1,0.1),grav:0,size:MATH.random(200,350),col:[0.6,0.6,0.6],life:1.5,rotVel:MATH.random(-2,2),alpha:0.25})}}
    },
    
    demo:{
        
        u:128*4/2048,v:256*2/2048,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:16.8,convertSpeed:4,convertAmount:200,attack:3,energy:20,tokens:['whiteBomb_'],rarity:'epic',color:'white',description:"An elite Bomber Bee who has worked its way up the ranks. It is an expert in explosives.",giftedHiveBonus:{oper:'*',stat:'whiteBombPollen',num:1.3},favoriteTreat:'sunflowerSeed'
    },
    
    exhausted:{
        
        u:128*5/2048,v:256*2/2048,meshPartId:0,gatherSpeed:4.6,gatherAmount:10,speed:10.5,convertSpeed:4,convertAmount:240,attack:1,energy:Infinity,tokens:['whiteBomb','link'],rarity:'epic',color:'white',description:"This bee suffers from insomnia. It moves slowly, but it never has to sleep.",giftedHiveBonus:{oper:'*',stat:'whiteFieldCapacity',num:1.2},favoriteTreat:'pineapple'
    },
    
    shocked:{
        
        u:128*6/2048,v:256*2/2048,meshPartId:0,gatherSpeed:4,gatherAmount:10,speed:19.6,convertSpeed:2,convertAmount:80,attack:2,energy:Infinity,tokens:['haste','link'],rarity:'epic',color:'white',description:"This bee is startled by everything it comes across. It has learned special talents to cope.",giftedHiveBonus:{oper:'*',stat:'whitePollen',num:1.25},favoriteTreat:'pineapple'
    },
    
    frosty:{
        
        u:128*7/2048,v:256*2/2048,meshPartId:14,gatherSpeed:4,gatherAmount:10,speed:11.2,convertSpeed:4,convertAmount:80,attack:1,energy:25,tokens:['blueBoost','blueBomb_'],rarity:'epic',color:'white',description:"A bee made of snow. It magically came to life after someone put a top hat on its head.",giftedHiveBonus:{oper:'*',stat:'blueBombPollen',num:1.3},favoriteTreat:'blueberry'
    },
    
    baby:{
        
        u:128*8/2048,v:256*2/2048,meshPartId:0,gatherSpeed:5,gatherAmount:10,speed:10.5,convertSpeed:5,convertAmount:80,attack:0,energy:15,tokens:['babyLove'],rarity:'legendary',color:'white',description:"This little bee isn't very good at bee tasks yet, but it's guaranteed to bring you joy (and luck).",giftedHiveBonus:{oper:'+',stat:'lootLuck',num:0.25},favoriteTreat:'strawberry'
    },
}
