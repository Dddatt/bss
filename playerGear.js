window.applyPercentage=function(x,m){
    
    return (x-1)*(1-m)+1
}

window.playerGear={
    
    bronzeStarAmulet:{
        
        mesh:function(box,cylinder,sphere,star){
            
            star(0,1.5,0,0.075,0.15,0.025,0.05,0.5*6.5,0.25*6.5,0.07*6.5)
        }
    },

    silverStarAmulet:{
        
        mesh:function(box,cylinder,sphere,star){
            
            star(0,1.5,0,0.075,0.15,0.025,0.05,5.5,5.5,5.5)
        }
    },

    goldStarAmulet:{
        
        mesh:function(box,cylinder,sphere,star){
            
            star(0,1.5,0,0.075,0.15,0.025,0.05,9,8,0)
        }
    },

    diamondStarAmulet:{
        
        mesh:function(box,cylinder,sphere,star){
            
            star(0,1.5,0,0.075,0.15,0.025,0.05,0,10,10)
        }
    },

    supremeStarAmulet:{
        
        mesh:function(box,cylinder,sphere,star){
            
            star(0,1.5,0,0.075,0.15,0.025,0.05,0,10,0)
        }
    },

    bronzeCogAmulet:{
        
        mesh:function(box,cylinder,sphere,star){
            
            cylinder(0,1.5,0,0.14,0.075,10,0.7,0.35,0.12)
            box(0,1.5,0,0.09,0.37,0.075,false,[0.7,0.35,0.12])
            box(0,1.5,0,0.09,0.37,0.075,[0,0,60],[0.7,0.35,0.12])
            box(0,1.5,0,0.09,0.37,0.075,[0,0,120],[0.7,0.35,0.12])
        }
    },

    silverCogAmulet:{
        
        mesh:function(box,cylinder,sphere,star){
            
            cylinder(0,1.5,0,0.14,0.075,10,0.9,0.9,0.9)
            box(0,1.5,0,0.09,0.37,0.075,false,[0.9,0.9,0.9])
            box(0,1.5,0,0.09,0.37,0.075,[0,0,60],[0.9,0.9,0.9])
            box(0,1.5,0,0.09,0.37,0.075,[0,0,120],[0.9,0.9,0.9])
        }
    },

    goldCogAmulet:{
        
        mesh:function(box,cylinder,sphere,star){
            
            cylinder(0,1.5,0,0.14,0.075,10,1.7,1.6,0)
            box(0,1.5,0,0.09,0.37,0.075,false,[1.7,1.6,0])
            box(0,1.5,0,0.09,0.37,0.075,[0,0,60],[1.7,1.6,0])
            box(0,1.5,0,0.09,0.37,0.075,[0,0,120],[1.7,1.6,0])
        }
    },

    diamondCogAmulet:{
        
        mesh:function(box,cylinder,sphere,star){
            
            cylinder(0,1.5,0,0.14,0.075,10,0,1.6,1.7)
            box(0,1.5,0,0.09,0.37,0.075,false,[0,1.6,1.7])
            box(0,1.5,0,0.09,0.37,0.075,[0,0,60],[0,1.6,1.7])
            box(0,1.5,0,0.09,0.37,0.075,[0,0,120],[0,1.6,1.7])
        }
    },

    supremeCogAmulet:{
        
        mesh:function(box,cylinder,sphere,star){

            cylinder(0,1.5,0,0.14,0.075,10,0,1.5,0.3)
            box(0,1.5,0,0.09,0.37,0.075,false,[0,1.5,0.3])
            box(0,1.5,0,0.09,0.37,0.075,[0,0,60],[0,1.5,0.3])
            box(0,1.5,0,0.09,0.37,0.075,[0,0,120],[0,1.5,0.3])
        }
    },

    bronzeAntAmulet:{
        
        mesh:function(box,cylinder,sphere,star){

            box(0,1.525,0.075,0.13,0.13,0.13,false,[0.7,0.35,0.12])
            box(0,1.475,-0.06,0.12,0.12,0.2,false,[0.7,0.35,0.12])
            box(0.05,1.585,0.12,0.15,0.035,0.035,[0,-30,45],[0.7,0.35,0.12])
            box(-0.05,1.585,0.12,0.15,0.035,0.035,[0,30,-45],[0.7,0.35,0.12])
            box(-0.05,1.43,-0.01,0.15,0.035,0.035,[0,0,55],[0.7,0.35,0.12])
            box(-0.05,1.43,-0.11,0.15,0.035,0.035,[0,0,55],[0.7,0.35,0.12])
            box(0.05,1.43,-0.01,0.15,0.035,0.035,[0,0,-55],[0.7,0.35,0.12])
            box(0.05,1.43,-0.11,0.15,0.035,0.035,[0,0,-55],[0.7,0.35,0.12])
        }
    },

    silverAntAmulet:{
        
        mesh:function(box,cylinder,sphere,star){

            box(0,1.525,0.075,0.13,0.13,0.13,false,[0.9,0.9,0.9])
            box(0,1.475,-0.06,0.12,0.12,0.2,false,[0.9,0.9,0.9])
            box(0.05,1.585,0.12,0.15,0.035,0.035,[0,-30,45],[0.9,0.9,0.9])
            box(-0.05,1.585,0.12,0.15,0.035,0.035,[0,30,-45],[0.9,0.9,0.9])
            box(-0.05,1.43,-0.01,0.15,0.035,0.035,[0,0,55],[0.9,0.9,0.9])
            box(-0.05,1.43,-0.11,0.15,0.035,0.035,[0,0,55],[0.9,0.9,0.9])
            box(0.05,1.43,-0.01,0.15,0.035,0.035,[0,0,-55],[0.9,0.9,0.9])
            box(0.05,1.43,-0.11,0.15,0.035,0.035,[0,0,-55],[0.9,0.9,0.9])
        }
    },

    goldAntAmulet:{
        
        mesh:function(box,cylinder,sphere,star){

            box(0,1.525,0.075,0.13,0.13,0.13,false,[1.7,1.6,0])
            box(0,1.475,-0.06,0.12,0.12,0.2,false,[1.7,1.6,0])
            box(0.05,1.585,0.12,0.15,0.035,0.035,[0,-30,45],[1.7,1.6,0])
            box(-0.05,1.585,0.12,0.15,0.035,0.035,[0,30,-45],[1.7,1.6,0])
            box(-0.05,1.43,-0.01,0.15,0.035,0.035,[0,0,55],[1.7,1.6,0])
            box(-0.05,1.43,-0.11,0.15,0.035,0.035,[0,0,55],[1.7,1.6,0])
            box(0.05,1.43,-0.01,0.15,0.035,0.035,[0,0,-55],[1.7,1.6,0])
            box(0.05,1.43,-0.11,0.15,0.035,0.035,[0,0,-55],[1.7,1.6,0])
        }
    },

    diamondAntAmulet:{
        
        mesh:function(box,cylinder,sphere,star){

            box(0,1.525,0.075,0.13,0.13,0.13,false,[0,1.6,1.7])
            box(0,1.475,-0.06,0.12,0.12,0.2,false,[0,1.6,1.7])
            box(0.05,1.585,0.12,0.15,0.035,0.035,[0,-30,45],[0,1.6,1.7])
            box(-0.05,1.585,0.12,0.15,0.035,0.035,[0,30,-45],[0,1.6,1.7])
            box(-0.05,1.43,-0.01,0.15,0.035,0.035,[0,0,55],[0,1.6,1.7])
            box(-0.05,1.43,-0.11,0.15,0.035,0.035,[0,0,55],[0,1.6,1.7])
            box(0.05,1.43,-0.01,0.15,0.035,0.035,[0,0,-55],[0,1.6,1.7])
            box(0.05,1.43,-0.11,0.15,0.035,0.035,[0,0,-55],[0,1.6,1.7])
        }
    },

    supremeAntAmulet:{
        
        mesh:function(box,cylinder,sphere,star){

            box(0,1.525,0.075,0.13,0.13,0.13,false,[0,1.5,0.3])
            box(0,1.475,-0.06,0.12,0.12,0.2,false,[0,1.5,0.3])
            box(0.05,1.585,0.12,0.15,0.035,0.035,[0,-30,45],[0,1.5,0.3])
            box(-0.05,1.585,0.12,0.15,0.035,0.035,[0,30,-45],[0,1.5,0.3])
            box(-0.05,1.43,-0.01,0.15,0.035,0.035,[0,0,55],[0,1.5,0.3])
            box(-0.05,1.43,-0.11,0.15,0.035,0.035,[0,0,55],[0,1.5,0.3])
            box(0.05,1.43,-0.01,0.15,0.035,0.035,[0,0,-55],[0,1.5,0.3])
            box(0.05,1.43,-0.11,0.15,0.035,0.035,[0,0,-55],[0,1.5,0.3])
        }
    },

    moonAmulet:{
        
        mesh:function(box,cylinder,sphere,star){

            box(-0.08,1.5,0.075,0.12,0.19,0.07,false,[1.5,1.5,0.4])
            box(-0.06,1.6,0.075,0.09,0.16,0.07,[0,0,-35],[1.5,1.5,0.4])
            box(-0.06,1.4,0.075,0.09,0.16,0.07,[0,0,35],[1.5,1.5,0.4])
            box(0,1.35,0.075,0.1,0.08,0.07,[0,0,80],[1.5,1.5,0.4])
            box(0,1.65,0.075,0.1,0.08,0.07,[0,0,100],[1.5,1.5,0.4])
        }
    },
    
    glider:{
        
        none:{mesh:function(){},applyStats:function(){}},
        
        glider:{
            
            mesh:function(box,cylinder,sphere,star,applyFinalRotation){
                
                box(0,2,0,1,0.2,1.501,false,[1.4,1.4,0])
                box(-0.9,1.85,0,1,0.2,1.5,[0,0,20],[0.15,0.15,0.15])
                box(0.9,1.85,0,1,0.2,1.5,[0,0,-20],[0.15,0.15,0.15])
                box(-1.675,1.3,0,1,0.2,1.501,[0,0,50],[1.4,1.4,0])
                box(1.675,1.3,0,1,0.2,1.501,[0,0,-50],[1.4,1.4,0])
            },
            
            applyStats:function(stats,player){
                
                stats.gliderSpeed=18
                stats.gliderFall=-5
            }
        },
        desc:'Floats much faster than the Parachute, allowing you to fly through the sky!<br><br>Press jump while in the air to open. ',
        cost:['5000000 honey'],
        
    },
    
    mask:{
        
        none:{
            
            mesh:function(box){
                
                box(-0.1,0.3,0.225,0.05,0.1,0.1,false,[0,0,0])
                box(0.1,0.3,0.225,0.05,0.1,0.1,false,[0,0,0])
                box(0,0.15,0.225,0.2,0.05,0.1,false,[0,0,0])
                box(0,0.5,0,0.55,0.1,0.55,false,[0,0,0])
            },applyStats:function(){}
        },

        helmet:{
            
            mesh:function(box,cylinder,sphere){
                
                box(-0.1,0.3,0.225,0.05,0.1,0.1,false,[0,0,0])
                box(0.1,0.3,0.225,0.05,0.1,0.1,false,[0,0,0])
                box(0,0.15,0.225,0.2,0.05,0.1,false,[0,0,0])
                box(0,0.5,0,0.55,0.1,0.55,false,[0,0,0])

                cylinder(0,0.625,0.045,0.26*1.414,0.15,10,1.3,1.3,0,90,0,0,0.26*1.414*0.9)
                cylinder(0,0.625+0.15,0.045,0.26*1.414*0.9,0.15,10,1.3,1.3,0,90,0,0,0.26*1.414*0.6)
                cylinder(0,0.625+0.15+0.075*1.5,0.045,0.26*1.414*0.6,0.075,10,1.3,1.3,0,90,0,0,0.26*1.414*0.2)

                box(0.28,0.4,0.2,0.05,0.4,0.05,[-30,0,0],[1.3,1.3,0])
                box(-0.28,0.4,0.2,0.05,0.4,0.05,[-30,0,0],[1.3,1.3,0])
                box(0,0.4-Math.cos(-30*0.01745329251)*0.2,0.2-Math.sin(-30*0.01745329251)*0.2,0.28*2+0.05,0.05,0.05,[-30,0,0],[1.3,1.3,0])
            },
            
            applyStats:function(stats,player){
                
                stats.bluePollen*=1.1
                stats.whitePollen*=1.1
                stats.redPollen*=1.1
                stats.defense+=0.1

            },
            desc:'A hard hat that grants bonus pollen and helps prevent head injuries.<br><br>x1.1 pollen<br>+10% defense',
            cost:['30000 honey','3 pineapple'],
        },

        propellerHat:{
            
            mesh:function(box,cylinder,sphere){
                
                box(-0.1,0.3,0.225,0.05,0.1,0.1,false,[0,0,0])
                box(0.1,0.3,0.225,0.05,0.1,0.1,false,[0,0,0])
                box(0,0.15,0.225,0.2,0.05,0.1,false,[0,0,0])
                box(0,0.5,0,0.55,0.1,0.55,false,[0,0,0])

                cylinder(0+0.03,0.625,0.045+0.03,0.26*1.414,0.15,10,1.45,0.8,0.1,90,0,0,0.26*1.414*0.9)
                cylinder(0+0.03,0.625+0.15,0.045+0.03,0.26*1.414*0.9,0.15,10,1.45,0.8,0.1,90,0,0,0.26*1.414*0.6)
                cylinder(0+0.03,0.625+0.15+0.075*1.5,0.045+0.03,0.26*1.414*0.6,0.075,10,1.45,0.8,0.1,90,0,0,0.26*1.414*0.2)

                cylinder(0-0.03,0.625+0.01,0.045+0.03,0.26*1.414,0.15,10,1.45,0,0,90,0,0,0.26*1.414*0.9)
                cylinder(0-0.03,0.625+0.15+0.01,0.045+0.03,0.26*1.414*0.9,0.15,10,1.45,0,0,90,0,0,0.26*1.414*0.6)
                cylinder(0-0.03,0.625+0.15+0.075*1.5+0.01,0.045+0.03,0.26*1.414*0.6,0.075,10,1.45,0,0,90,0,0,0.26*1.414*0.2)
                
                cylinder(0+0.03,0.625+0.02,0.045-0.03,0.26*1.414,0.15,10,0,1.45,0,90,0,0,0.26*1.414*0.9)
                cylinder(0+0.03,0.625+0.15+0.02,0.045-0.03,0.26*1.414*0.9,0.15,10,0,1.45,0,90,0,0,0.26*1.414*0.6)
                cylinder(0+0.03,0.625+0.15+0.075*1.5+0.02,0.045-0.03,0.26*1.414*0.6,0.075,10,0,1.45,0,90,0,0,0.26*1.414*0.2)

                cylinder(0-0.03,0.625+0.03,0.045-0.03,0.26*1.414,0.15,10,0,0,1.45,90,0,0,0.26*1.414*0.9)
                cylinder(0-0.03,0.625+0.15+0.03,0.045-0.03,0.26*1.414*0.9,0.15,10,0,0,1.45,90,0,0,0.26*1.414*0.6)
                cylinder(0-0.03,0.625+0.15+0.075*1.5+0.03,0.045-0.03,0.26*1.414*0.6,0.075,10,0,0,1.45,90,0,0,0.26*1.414*0.2)
                
                cylinder(0,0.625+0.15+0.075*1.5+0.03,0.045,0.26*1.414*0.2,0.1,10,0.3,0.3,0.3,90,0,0,0.26*1.414*0.2)

                
                box(0,0.625+0.15+0.075*1.5+0.1,0.045,0.05,0.2,0.05,false,[0,0,0])

                box(0,0.625+0.15+0.075*1.5+0.2,0.045,0.4,0.03,0.04,[0,35,0],[0.7,0.7,0.7])
                box(0,0.625+0.15+0.075*1.5+0.2,0.045,0.4,0.03,0.04,[0,35+90,0],[0.7,0.7,0.7])

            },
            
            applyStats:function(stats,player){
                
                stats.bluePollen*=1.15
                stats.whitePollen*=1.15
                stats.redPollen*=1.15
                stats.jumpPower*=1.1
                stats.redBeeAbilityRate*=1.05
                stats.blueBeeAbilityRate*=1.05
                stats.whiteBeeAbilityRate*=1.05
                stats.defense+=0.1

            },
            desc:'A playful hat that keeps the sun out of your eyes.<br><br>x1.15 pollen<br>x1.05 bee ability rate<br>+10% defense<br>x1.1 jump power',
            cost:['2500000 honey','15 gumdrops','10 pineapples','1 moonCharm'],
        },
        
        gummyMask:{
            
            mesh:function(box,cylinder,sphere){
                
                sphere(0,0.5,0,0.5*1.414,2,1.6,0.4,1.6)
                cylinder(0,0.65,0,0.26*1.414,0.075,10,0.6,20,2,90,0,0)
                cylinder(0,0.85,0,0.15,0.2,10,0.2,2,1,90,0,0)
                cylinder(0,0.35,0,0.52*0.5*1.415,0.45,10,1.6,0.4,1.6,90,0,0)
                box(-0.1,0.4,0.32,0.05,0.1,0.1,false,[0.2,2,1])
                box(0.1,0.4,0.32,0.05,0.1,0.1,false,[0.2,2,1])
                box(0,0.25,0.32,0.2,0.05,0.1,false,[0.2,2,1])
                
            },
            
            applyStats:function(stats,player){
                
                stats.capacityMultiplier*=2
                stats.whiteFieldCapacity*=1.75
                stats.goo*=1.75
                stats.instantWhiteConversion=window.applyPercentage(stats.instantWhiteConversion,0.25)
                stats.redBeeAbilityRate*=1.2
                stats.blueBeeAbilityRate*=1.2
                stats.whiteBeeAbilityRate*=1.2
                stats.bluePollen*=1.35
                stats.whitePollen*=1.35
                stats.redPollen*=1.35
                stats.whitePollen*=1.5
                stats.honeyFromTokens*=1.5
                stats.convertRate*=1.75
                stats.defense+=0.3
                player.addEffect('gummyMorphPassive')
                player.addEffect('coinScatterPassive')

            },
            desc:'The offical mask of a gummy soldier.<br><br>x1.75 goo<br>x2 capacity<br>x1.75 white field capacity<br>x1.5 white pollen<br>x1.35 pollen<br>+25% instant white conversion<br>x1.5 honey from tokens<br>x1.75 convert rate<br>+30% defense<br>x1.2 bee ability rate<br>+Passive: Gummy Morph<br>+Passive: Coin Scatter',
            cost:['5000000000 honey','250 glue','100 enzymes','100 oil','100 glitter'],
        },
        
        diamondMask:{
            
            mesh:function(box,cylinder,sphere){
                
                sphere(0,0.6,0,0.5*1.414,2,0.3*1.1,1*1.1,2*1.1)
                cylinder(0,0.65,0,0.28*1.414,0.095,10,100,100,100,90,0,0)
                cylinder(0,0.35,0,0.52*0.5*1.415,0.45,10,0.3*1.1,1*1.1,2*1.1,90,0,0)
                box(-0.1,0.4,0.32,0.05,0.1,0.1,false,[100,100,100])
                box(0.1,0.4,0.32,0.05,0.1,0.1,false,[100,100,100])
                box(0,0.25,0.32,0.2,0.05,0.1,false,[100,100,100])
                box(0.2,0.8,0.35,0.05,0.35,0.05,[0,0,15],[100,100,100])
                box(-0.2,0.8,0.35,0.05,0.35,0.05,[0,0,-15],[100,100,100])
                box(-0.1,0.8,0.35,0.05,0.35,0.05,[0,0,15],[100,100,100])
                box(0.1,0.8,0.35,0.05,0.35,0.05,[0,0,-15],[100,100,100])
                box(0,0.85,0.35,0.3,0.05,0.05,false,[100,100,100])
            },
            
            applyStats:function(stats,player){
                
                stats.capacityMultiplier*=3
                stats.blueFieldCapacity*=1.75
                stats.bluePollen*=1.75
                stats.instantBlueConversion=window.applyPercentage(stats.instantBlueConversion,0.25)
                stats.convertRate*=100
                stats.honeyAtHive*=1.1
                stats.bubblePollen*=1.5
                stats.redBeeAbilityRate*=1.2
                stats.blueBeeAbilityRate*=1.2
                stats.whiteBeeAbilityRate*=1.2
                stats.defense+=0.3
                player.addEffect('diamondDrainPassive')
                player.addEffect('bubbleBombsPassive')
            },
            desc:'Proudly show off your extreme wealth to the world. Shine so brightly that others will complain.<br><br>x3 capacity<br>x1.75 blue field capacity<br>x1.75 blue pollen<br>+25% instant blue conversion<br>x2 convert rate<br>x1.1 honey at hive<br>x1.5 bubble pollen<br>+30% defense<br>x1.2 bee ability rate<br>+Passive: Diamond Drain<br>+Passive: Bubble Bombs',
            cost:['5000000000 honey','250 blueExtract','1 diamondEgg','100 glitter','150 oil'],
        },
        
        demonMask:{
            
            mesh:function(box,cylinder,sphere){
                
                sphere(0,0.6,0,0.5*1.414,2,0.25,0,0)
                cylinder(0,0.65,0,0.28*1.414,0.095,10,1.1,0,0,90,0,0)
                cylinder(0,0.35,0,0.525*0.5*1.415,0.45,10,0.25,0,0,90,0,0)
                box(-0.1,0.4,0.32,0.05,0.1,0.1,false,[1.1,0,0])
                box(0.1,0.4,0.32,0.05,0.1,0.1,false,[1.1,0,0])
                box(0,0.25,0.32,0.2,0.05,0.1,false,[1.1,0,0])
                
                box(-0.3,0.9,0.1,0.13,0.4,0.13,[0,0,20],[1.1,0,0])
                box(0.3,0.9,0.1,0.13,0.4,0.13,[0,0,-20],[1.1,0,0])
            },
            
            applyStats:function(stats,player){
                
                stats.capacityMultiplier*=2
                stats.redFieldCapacity*=1.75
                stats.redPollen*=1.75
                stats.beeAttack*=1.25
                stats.instantFlameConversion=window.applyPercentage(stats.instantFlameConversion,0.5)
                stats.flamePollen*=2
                stats.redBeeAbilityRate*=1.2
                stats.blueBeeAbilityRate*=1.2
                stats.whiteBeeAbilityRate*=1.2
                stats.defense+=0.35
                player.addEffect('xFlamePassive')
                player.addEffect('ignitePassive')
            },
            desc:'Embrace hate to take on the form of a Demon Bee. Become both extremely unpleasant and powerful.<br><br>x2 capacity<br>x1.75 red field capacity<br>x1.75 red pollen<br>+50% instant flame conversion<br>x2 flame pollen<br>x1.25 bee attack<br>+35% defense<br>+20% bee ability rate<br>+Passive: X Flame<br>+Passive: Ignite',
            cost:['5000000000 honey','500 stinger','250 redExtract','150 enzymes','100 glue'],
        },
    },
    
    belt:{
        
        none:{mesh:function(){},applyStats:function(){}},

        beltPocket:{
            
            mesh:function(box,cylinder,sphere){
                
                box(0,-0.2,0.25,0.3,0.2,0.3,false,[0.7*1.2,0.5*1.2,0.2*1.2])
                box(0,-0.27,0.25,0.295,0.2,0.2,false,[0.7,0.5,0.2])
                box(0,-0.26,0.25,0.12,0.09,0.305,false,[0.4,0.4,0.4])
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=5000
                stats.lootLuck+=0.25
                stats.convertRate*=1.1
            },
            desc:'Attaches to your waist to expand the size of your container.<br><br>+5,000 capacity<br>+25% loot luck<br>x1.1 convert rate',
            cost:['14000 honey','1 sunflowerSeed'],
        },

        beltBag:{
            
            mesh:function(box,cylinder,sphere){
                
                box(0,-0.2,0.25,0.3*1.4,0.18,0.3,false,[1.3,1.3,1.3])
                box(0,-0.26,0.25,0.295*1.4,0.2,0.2,false,[1.1,1.1,1.1])
                box(0,-0.26,0.25,0.29*1.4,0.04,0.305,false,[0.4,0.4,0.4])
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=25000
                stats.lootLuck+=0.5
                stats.convertRate*=1.3
            },
            desc:'A convenient pouch designed for easy access.<br><br>+25,000 capacity<br>+50% loot luck<br>x1.3 convert rate',
            cost:['400000 honey','10 pineapple','10 sunflowerSeed','1 stinger'],
        },

        mondoBeltBag:{
            
            mesh:function(box,cylinder,sphere){
                
                box(0,-0.2,0.25,0.3*1.4,0.18,0.3,false,[1.3,1.3,1.3])
                box(0,-0.26,0.25,0.295*1.4,0.2,0.2,false,[1.1,1.1,1.1])
                box(0,-0.26,0.25,0.29*1.4,0.04,0.305,false,[0.4,0.4,0.4])
                
                box(0.27,-0.18,0.33,0.3,0.09,0.05,[0,15,10],[0,0,1.4])
                box(0.27,-0.26,0.33,0.2,0.06,0.05,[0,15,-15],[0,0,1.4])
                box(-0.27,-0.18,0.33,0.3,0.09,0.05,[0,-15,-10],[1.4,0,0])
                box(-0.27,-0.26,0.33,0.2,0.06,0.05,[0,-15,15],[1.4,0,0])
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=100000
                stats.lootLuck+=0.75
                stats.convertRate*=1.5
            },
            desc:'A highly-embellished belt bag imported from a lost land, as big as a tambourine.<br><br>+25,000 capacity<br>+50% loot luck<br>x1.3 convert rate',
            cost:['12500000 honey','50 pineapple','50 sunflowerSeed','3 stinger'],
        },
        
        honeycombBelt:{
            
            mesh:function(box,cylinder,sphere){
                
                box(0,-0.1,0,0.55,0.085,0.55,false,[1.5,1.4,0])
                box(0-0.075,-0.1+0.065,0.285,0.1,0.1,0.05,[0,0,20],[5,5,5])
                box(0+0.075,-0.1+0.065,0.285,0.1,0.1,0.05,[0,0,-20],[5,5,5])
                box(0,-0.1-0.065,0.285,0.1,0.1,0.05,false,[5,5,5])
                box(0-0.075,-0.1+0.065,0.265,0.15,0.15,0.05,[0,0,20],[5,5,0])
                box(0+0.075,-0.1+0.065,0.265,0.15,0.15,0.05,[0,0,-20],[5,5,0])
                box(0,-0.1-0.065,0.265,0.15,0.15,0.05,false,[5,5,0])
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=200000
                stats.capacityMultiplier*=1.75
                stats.lootLuck+=1
                stats.convertRate*=1.75
                stats.honeyFromTokens*=1.5
                stats.whiteBeeAttack++
                stats.whiteBombPollen*=1.3
                stats.beeEnergy*=1.15
            },
            desc:'A luxurious faux honeycombs you can wear as a belt to greatly enhance your pollen capacity.<br><br>+200,000 capacity<br>x1.75 capacity<br>+100% loot luck<br>x1.75 convert rate<br>x1.5 honey from tokens<br>+1 white bee attack<br>x1.3 white bomb pollen<br>x1.15 bee energy',
            cost:['75000000 honey','50 glue','35 enzymes','25 oil'],
        },
        
        petalBelt:{
            
            mesh:function(box,cylinder,sphere){
                
                // box(0,-0.1,0,0.55,0.05,0.55,false,[0,1.25,0])
                box(-0.075*1.5,-0.1+0.05*1.5,0.3,0.2,0.2,0.05,[0,0,30],[1.25,1.25,1.25])
                box(0.075*1.5,-0.1+0.025*1.5,0.3,0.2,0.2,0.05,[0,0,60],[1.25,1.25,1.25])
                box(0,-0.1-0.05*1.5,0.3,0.2,0.2,0.05,false,[1.25,1.25,1.25])
                box(0,-0.1,0.35,0.1,0.1,0.1,[45,45,0],[1.5,1.5,0.2])
                box(-0.075*1.5,-0.1+0.04*1.5,0.25,0.25,0.25,0.05,[0,0,80],[0,1.25,0])
                box(0.075*1.5,-0.1+0.025*1.5,0.25,0.25,0.25,0.05,[0,0,20],[0,1.25,0])
                box(0,-0.1-0.05*1.5,0.25,0.25,0.25,0.05,[0,0,30],[0,1.25,0])
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=300000
                stats.capacityMultiplier*=2
                stats.lootLuck+=1
                stats.convertRate*=1.8
                stats.honeyFromTokens*=1.5
                stats.whiteBeeAttack++
                stats.whiteBombPollen*=1.5
                stats.beeEnergy*=1.25
                player.addEffect('petalStormPassive')
            },
            desc:'Drape these petals about your waist to harness unlimited flower power.<br><br>+300,000 capacity<br>x2 capacity<br>+100% loot luck<br>x1.8 convert rate<br>x1.5 honey from tokens<br>+1 white bee attack<br>x1.5 white bomb pollen<br>x1.25 bee energy<br>+Passive: Petal Storm',
            cost:['15000000000 honey','15 starJelly','50 glitter','100 glue'],
        }
    },
    
    backpack:{
        
        none:{mesh:function(){},applyStats:function(){}},
        
        pouch:{
            
            mesh:function(box,cylinder,sphere){
                
                sphere(0,0,-0.5,0.6,2,0.9,0.7,0.3)
                sphere(0,0.3,-0.5,0.2,2,0.9*0.7,0.7*0.7,0.3*0.7)
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=200
            },
            desc:'A small bag.<br><br>+200 capacity',
            cost:['0 honey'],
        },

        jar:{
            
            mesh:function(box,cylinder,sphere){
                
                cylinder(0,0,-0.6,0.4,0.75,15,0.9*1.3,0.7*1.3,0.3*1.3,90,0,0)
                cylinder(0,0.33,-0.6,0.43,0.25,15,0.6,0.6,0.6,90,0,0)
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=750
            },
            desc:'A durable plastic jar. Holds much more than the Pouch!<br><br>+750 capacity',
            cost:['600 honey'],
        },

        backpack:{
            
            mesh:function(box,cylinder,sphere){
                
                box(0,0,-0.4,0.55,0.7,0.35,false,[0.2,0.8,0.2])
                box(0.13,0.1,-0.41,0.2,0.2,0.35,false,[0,0.5,0])
                box(-0.13,0.1,-0.41,0.2,0.2,0.35,false,[0,0.5,0])
                box(0,-0.15,-0.41,0.48,0.2,0.35,false,[1.3,1,0])
                cylinder(0,0.7*0.5,-0.4,0.35*0.5,0.55,15,0.2,0.8,0.2,90,0,90)
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=3500
            },
            desc:'A heavy-duty backpack.<br><br>+350 capacity',
            cost:['5000 honey'],
        },

        canister:{
            
            mesh:function(box,cylinder,sphere){
                
                cylinder(0,-0.15,-0.6,0.4,0.5,11,1.3,1.3,1.3,90,0,0)
                cylinder(0,0.1,-0.6,0.2,0.5,11,0.7,1,1.3,90,0,0)
                cylinder(0,0.3,-0.6,0.333,0.2,11,1.3,1.3,1.3,90,0,0)
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=10000
                stats.convertRate*=1.3
            },
            desc:'A high-tech container that improves honey conversion speed.<br><br>+10000 capacity<br>x1.3 convert rate',
            cost:['22000 honey'],
        },

        megaJug:{
            
            mesh:function(box,cylinder,sphere){
                
                cylinder(0,-0.1,-0.7,0.45,0.85,11,0.9*1.4,0.7*1.4,0.4*1.4,90,0,0)
                cylinder(0,-0.1,-0.7,0.451,0.2,11,0,0.45,0,90,0,0)
                sphere(0,-0.1+0.85*0.5,-0.7,0.4*2,2,0,0.4,0)
                cylinder(0,0.6,-0.7,0.1,0.5,5,0,0.5,0,90,0,0)
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=25000
                stats.convertRate*=1.4
            },
            desc:'A humongous jug!<br><br>+25000 capacity<br>x1.4 convert rate',
            cost:['50000 honey'],
        },

        compressor:{
            
            mesh:function(box,cylinder,sphere){
                
                cylinder(0.2,-0.1,-0.5,0.2,0.9,10,1.25,1.25,1.25,90,0,0)
                cylinder(-0.2,-0.1,-0.5,0.2,0.9,10,1.25,1.25,1.25,90,0,0)
                sphere(0.2,-0.1+0.9*0.5,-0.5,0.2*2,2,1.25,1.25,1.25)
                sphere(-0.2,-0.1+0.9*0.5,-0.5,0.2*2,2,1.25,1.25,1.25)
                box(0,0,-0.5,0.95,0.3,0.4,false,[0.4,0.4,0.4])
                box(0.35,-0.4,-0.6,0.25,0.5,0.2,[10,-30,0],[0.9,0.9,0.9])
                box(-0.35,-0.4,-0.6,0.25,0.5,0.2,[10,30,0],[0.9,0.9,0.9])
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=50000
                stats.convertRate*=1.55
            },
            desc:'A machine which packs pollen down to increase storage.<br><br>+50000 capacity<br>x1.55 convert rate',
            cost:['160000 honey'],
        },

        eliteBarrel:{
            
            mesh:function(box,cylinder,sphere){
                
                cylinder(0,0.4*0.5,-0.6,0.4,0.4,15,0.9*0.5,0.6*0.5,0.3*0.5,90,0,0,0.3)
                cylinder(0,-0.4*0.5,-0.6,0.3,0.4,15,0.9*0.5,0.6*0.5,0.3*0.5,90,0,0,0.4)
                cylinder(0,0,-0.6,0.401,0.1,15,0.1,0.1,0.1,90,0,0)
                cylinder(0,0.2+0.2,-0.6,0.29,0.1,15,0.1,0.1,0.1,90,0,0)
                cylinder(0,-0.2-0.2,-0.6,0.29,0.1,15,0.1,0.1,0.1,90,0,0)
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=125000
                stats.convertRate*=1.7
            },
            desc:"The world's most advanced barrel.<br><br>+125000 capacity<br>x1.7 convert rate",
            cost:['650000 honey'],
        },

        portOHive:{
            
            mesh:function(box,cylinder,sphere){
                
                cylinder(0,0,-0.7,0.5,0.15,10,1.5,1.4,1,90,0,0)
                cylinder(0,0.2,-0.675,0.43,0.10,15,1.5,1.4,1,90,0,0)
                cylinder(0,0.35,-0.6,0.25,0.15,10,1.5,1.4,1,90,0,0)
                cylinder(0,-0.2,-0.675,0.43,0.10,15,1.5,1.4,1,90,0,0)
                cylinder(0,-0.35,-0.6,0.25,0.10,15,1.5,1.4,1,90,0,0)
                sphere(0,0,-0.65,0.9,1,1.5,1.4,1)
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=250000
                stats.convertRate*=2
                stats.instantRedConversion=window.applyPercentage(stats.instantRedConversion,0.05)
                stats.instantBlueConversion=window.applyPercentage(stats.instantBlueConversion,0.05)
                stats.instantWhiteConversion=window.applyPercentage(stats.instantWhiteConversion,0.05)
            },
            desc:'A miniature hive you can wear on your back! Instantly converts some pollen to honey.<br>+250,000 capacity<br>x2 convert rate<br>+5% instant conversion',
            cost:['1250000 honey'],
        },

        redPortOHive:{
            
            mesh:function(box,cylinder,sphere){
                
                cylinder(0,0,-0.7,0.5,0.15,10,1.4,0,0,90,0,0)
                cylinder(0,0.2,-0.675,0.43,0.10,15,1.4,0,0,90,0,0)
                cylinder(0,0.35,-0.6,0.25,0.15,10,1.4,0,0,90,0,0)
                cylinder(0,-0.2,-0.675,0.43,0.10,15,1.4,0,0,90,0,0)
                cylinder(0,-0.35,-0.6,0.25,0.10,15,1.4,0,0,90,0,0)
                sphere(0,0,-0.65,0.9,1,1.4,0,0)
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=450000
                stats.convertRate*=2.5
                stats.instantRedConversion=window.applyPercentage(stats.instantRedConversion,0.1)
                stats.redPollen*=1.1
                stats.redBeeAttack+=1
            },
            desc:'A Port-O-Hive dipped in shiny red pain. Works best for red bees and red pollen.<br>+450,000 capacity<br>x2.5 convert rate<br>+10% instant red conversion<br>x1.1 red pollen<br>+1 red bee attack',
            cost:['12500000 honey'],
        },

        bluePortOHive:{
            
            mesh:function(box,cylinder,sphere){
                
                cylinder(0,0,-0.7,0.5,0.15,10,0,0,1.4,90,0,0)
                cylinder(0,0.2,-0.675,0.43,0.10,15,0,0,1.4,90,0,0)
                cylinder(0,0.35,-0.6,0.25,0.15,10,0,0,1.4,90,0,0)
                cylinder(0,-0.2,-0.675,0.43,0.10,15,0,0,1.4,90,0,0)
                cylinder(0,-0.35,-0.6,0.25,0.10,15,0,0,1.4,90,0,0)
                sphere(0,0,-0.65,0.9,1,0,0,1.4)
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=450000
                stats.convertRate*=2.5
                stats.instantBlueConversion=window.applyPercentage(stats.instantBlueConversion,0.1)
                stats.bluePollen*=1.1
                stats.blueBeeAttack+=1
            },
            desc:'A Port-O-Hive dipped in shiny blue paint. Works best for blue bees and blue pollen.<br>+450,000 capacity<br>x2.5 convert rate<br>+10% instant blue conversion<br>x1.1 blue pollen<br>+1 blue bee attack',
            cost:['12500000 honey'],
        },

        PorcelainPortOHive:{
            
            mesh:function(box,cylinder,sphere){
                
                cylinder(0,0,-0.7,0.5,0.15,10,1.3,1.3,1.3,90,0,0)
                cylinder(0,0.2,-0.675,0.43,0.10,15,1.3,1.3,1.3,90,0,0)
                cylinder(0,0.35,-0.6,0.25,0.15,10,1.3,1.3,1.3,90,0,0)
                cylinder(0,-0.2,-0.675,0.43,0.10,15,1.3,1.3,1.3,90,0,0)
                cylinder(0,-0.35,-0.6,0.25,0.10,15,1.3,1.3,1.3,90,0,0)
                sphere(0,0,-0.65,0.9,1,1.3,1.3,1.3)
                box(0.4,0.1,-0.6,0.1,0.2,0.6,[0,25,20],[0,0,1.45])
                box(0.4,-0.1,-0.6,0.1,0.2,0.4,[0,25,-10],[0,0,1.45])
                box(-0.4,0.1,-0.6,0.1,0.2,0.6,[0,-25,20],[1.45,0,0])
                box(-0.4,-0.1,-0.6,0.1,0.2,0.4,[0,-25,-10],[1.45,0,0])
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=150000
                stats.convertRate*=3.5
                stats.instantRedConversion=window.applyPercentage(stats.instantRedConversion,0.1)
                stats.instantBlueConversion=window.applyPercentage(stats.instantBlueConversion,0.1)
                stats.instantWhiteConversion=window.applyPercentage(stats.instantWhiteConversion,0.1)
                stats.whitePollen*=1.5
                stats.bluePollen*=1.1
                stats.redPollen*=1.1
                stats.redBeeAttack+=1
                stats.blueBeeAttack+=1
                stats.whiteBeeAttack+=1
            },
            desc:'A Port-O-Hive dipped in shiny blue paint. Works best for blue bees and blue pollen.<br>+450,000 capacity<br>x2.5 convert rate<br>+10% instant blue conversion<br>x1.1 blue pollen<br>+1 blue bee attack',
            cost:['250000000 honey'],
        },
        
        coconutCanister:{
            
            mesh:function(box,cylinder,sphere){
                
                sphere(0,0,-0.6,1.3,2,0.4,0.2,0)
                sphere(-0.3,0.45,-0.6,0.4,1,0.1,0.05,0)
                sphere(-0.15,0.4,-0.9,0.4,1,0.1,0.05,0)
                sphere(0.05,0.5,-0.6,0.4,1,0.1,0.05,0)
                cylinder(0,0,-0.6,0.3,1.3,10,1.2,1.2,1.2,90,0,90)
                cylinder(-0.425,0,-0.6,0.2,0.57,10,100,0,0,90,0,90)
                cylinder(0.425,0,-0.6,0.2,0.57,10,0,0,100,90,0,90)
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=3500000
                stats.convertRate*=5
                stats.instantRedConversion=window.applyPercentage(stats.instantRedConversion,0.15)
                stats.instantBlueConversion=window.applyPercentage(stats.instantBlueConversion,0.15)
                stats.instantWhiteConversion=window.applyPercentage(stats.instantWhiteConversion,0.15)
                stats.instantWhiteConversion=window.applyPercentage(stats.instantWhiteConversion,0.1)
                stats.whitePollen*=1.25
                stats.whitePollen*=1.25
                stats.redPollen*=1.25
                stats.bluePollen*=1.25
                stats.whiteBeeAttack+=2
                stats.redBeeAttack+=2
                stats.blueBeeAttack+=2
                stats.defense+=0.1
                stats.honeyAtHive*=1.1
                player.addEffect('inspireCoconutsPassive')
                player.addEffect('emergencyCoconutShieldPassive')
            },
            desc:'A back-mounted coconut that protects you during emergencies.<br><br>+2,500,000 capacity<br>x5 convert rate<br>+15% instant conversion<br>+10% instant white conversion<br>x1.25 pollen<br>x1.25 white pollen<br>+2 bee attack<br>+10% defense<br>x1.1 honey at hive<br>+Passive: Emergengy Shield<br>+Passive: Inspire Coconuts',
            cost:['25000000000 honey','150 tropicalDrink','250 redExtract','250 blueExtract'],
        }
    },
    
    boots:{
        
        none:{mesh:function(){},applyStats:function(){}},
        
        gummyBoots:{
            
            mesh:function(box,cylinder,sphere){
                
                box(-0.2,-0.5,0.04,0.36,0.15,0.73,false,[0.1*1.75,1*1.75,0.5*1.75])
                box(0.2,-0.5,0.04,0.36,0.15,0.73,false,[0.1*1.75,1*1.75,0.5*1.75])
                box(-0.2,-0.35,0,0.325,0.2,0.6,false,[1*1.75,0.2*1.75,1*1.75])
                box(0.2,-0.35,0,0.325,0.2,0.6,false,[1*1.75,0.2*1.75,1*1.75])
                box(-0.2,-0.35,0.2,0.15,0.05,0.25,false,[0.1*1.75,1*1.75,0.5*1.75])
                box(0.2,-0.35,0.2,0.15,0.05,0.25,false,[0.1*1.75,1*1.75,0.5*1.75])
            },
            
            applyStats:function(stats,player){
                
                stats.movementCollection+=15
                stats.movespeed*=1.275
                stats.jumpPower*=1.4
                stats.pollenFromCoconuts*=2
                stats.goo*=1.25
                stats.beeSpeed*=1.2
                stats.honeyFromTokens*=1.25
                stats.redPollen*=1.1
                stats.bluePollen*=1.1
                stats.whitePollen*=1.1
                stats.beeAttack*=1.1
                stats.convertRateAtHive*=2
            },
            desc:'Squishy boots that leave a trail of Goo wherever you go.<br><br>+15 movement collection<br>x1.25 goo<br>x1.2 bee speed<br>x1.25 honey from tokens<br>x1.1 pollen<br>x1.1 bee attack<br>x2 pollen from coconuts<br>x1.275 movespeed<br>x1.4 jump power',
            cost:['100000000000 honey','500 glue','250 glitter','250 redExtract','250 blueExtract'],
        },
        
        mondoBoots:{
            
            mesh:function(box,cylinder,sphere){
                
                box(-0.2,-0.5,0.04,0.36,0.15,0.73,false,[0,0,1.5])
                box(0.2,-0.5,0.04,0.36,0.15,0.73,false,[1.5,0,0])
                box(-0.2,-0.35,0,0.325,0.2,0.6,false,[1.35,1.35,1.35])
                box(0.2,-0.35,0,0.325,0.2,0.6,false,[1.35,1.35,1.35])
                box(-0.2,-0.35,0.2,0.15,0.05,0.25,false,[0,0,1.5])
                box(0.2,-0.35,0.2,0.15,0.05,0.25,false,[1.5,0,0])
            },
            
            applyStats:function(stats,player){
                
                stats.movementCollection+=10
                stats.movespeed*=1.225
                stats.jumpPower*=1.35
                stats.pollenFromBees*=1.25
            },
            desc:'Practical and stylish boots that aid in the beekeeping process.<br><br>+10 movement collection<br>x1.25 pollen from bees<br>x1.225 movespeed<br>x1.35 jump power',
            cost:['15000000 honey','5 oil','3 redExtract','3 blueExtract'],
        },
    },
    
    leftGuard:{
        
        none:{mesh:function(){},applyStats:function(){}},
        
        crimsonGuard:{
            
            mesh:function(box,cylinder,sphere){
                
                box(0.35,0.05,0.1,0.2,0.2,0.2,[0,25,30],[1.5,0,0])
                box(0.575,0.2,0,0.7,0.08,0.08,[0,25,36],[1.5,1.5,1.5])
                box(0.5,0.03,0.07,0.4,0.06,0.06,[0,25,-30],[1.5,1.5,1.5])
            },
            
            applyStats:function(stats,player){
                
                stats.convertRate*=1.4
                stats.redPollen*=1.35
                stats.capacity+=300000
                stats.instantRedConversion+=0.1
                stats.redBombPollen*=1.5
                stats.redBeeAttack+=2
                stats.whiteBeeAttack+=1
                stats.criticalPower+=0.75
                player.addEffect('focusPulserPassive')
            },
            desc:'A guard bestowed with the heroic power of Crimson Bee - Defender of the Red Bees.<br><br>+300000 capacity<br>x1.35 red pollen<br>x1.4 convert rate<br>+10% instant red conversion<br>x1.5 red bomb pollen<br>+2 red attack<br>+1 white bee attack<br>+75% critical power<br>+Passive: Focus Pulser',
            cost:['200000000 honey','100 redExtract','100 stinger','50 oil','25 glitter'],
        },
    },
    
    rightGuard:{
        
        none:{mesh:function(){},applyStats:function(){}},
        
        cobaltGuard:{
            
            mesh:function(box,cylinder,sphere){
                
                box(-0.35,0.05,0.1,0.2,0.2,0.2,[0,-25,-30],[0,0,1.5])
                box(-0.575,0.2,0,0.7,0.08,0.08,[0,-25,-36],[1.5,1.5,1.5])
                box(-0.5,0.03,0.07,0.4,0.06,0.06,[0,-25,30],[1.5,1.5,1.5])
            },
            
            applyStats:function(stats,player){
                
                stats.convertRate*=1.4
                stats.capacity+=300000
                stats.bluePollen*=1.35
                stats.instantBlueConversion+=0.1
                stats.blueBombPollen*=1.5
                stats.blueBeeAttack+=2
                stats.whiteBeeAttack+=1
                stats.criticalChance+=0.15
                player.addEffect('hastePulserPassive')
            },
            desc:'A guard bestowed with the heroic power of Cobalt Bee - Defender of the Blue Bees.<br><br>+300000 capacity<br>x1.35 red pollen<br>x1.4 convert rate<br>+10% instant blue conversion<br>x1.5 blue bomb pollen<br>+2 blue attack<br>+1 white bee attack<br>+15% critical chance<br>+Passive: Haste Pulser',
            cost:['200000000 honey','100 blueExtract','100 stinger','50 enzymes','25 glitter'],
        },
    }
}
