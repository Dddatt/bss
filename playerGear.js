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
        }
        
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
                stats.redBeeAbilityRate*=1.2
                stats.blueBeeAbilityRate*=1.2
                stats.whiteBeeAbilityRate*=1.2
                stats.bluePollen*=1.35
                stats.whitePollen*=1.35
                stats.redPollen*=1.35
                stats.whitePollen*=1.5
                stats.pollenFromBees*=1.5
                stats.pollenFromTools*=1.5
                stats.honeyFromTokens*=1.5
                stats.convertRate*=1.75
                stats.defense+=0.3
                player.addEffect('gummyMorphPassive')
                player.addEffect('coinScatterPassive')

            }
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
                stats.blueFieldCapacity*=1.5
                stats.bluePollen*=1.75
                stats.convertRate*=100
                stats.honeyAtHive*=1.1
                stats.bubblePollen*=1.25
                stats.blueBombPollen*=1.25
                stats.redBeeAbilityRate*=1.2
                stats.blueBeeAbilityRate*=1.2
                stats.whiteBeeAbilityRate*=1.2
                stats.defense+=0.3
                player.addEffect('diamondDrainPassive')
                player.addEffect('bubbleBombsPassive')
            }
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
                stats.redBeeAttack+=2
                stats.whiteBeeAttack+=1
                stats.blueBeeAttack+=1
                stats.instantFlameConversion=window.applyPercentage(stats.instantFlameConversion,0.5)
                stats.flamePollen*=2
                stats.redBeeAbilityRate*=1.2
                stats.blueBeeAbilityRate*=1.2
                stats.whiteBeeAbilityRate*=1.2
                stats.beeEnergy*=1.25
                stats.defense+=0.35
                player.addEffect('xFlamePassive')
                player.addEffect('ignitePassive')
            }
        },
    },
    
    belt:{
        
        none:{mesh:function(){},applyStats:function(){}},
        
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
                stats.capacityMultiplier*=1.25
                stats.lootLuck+=1
                stats.convertRate*=1.75
                stats.honeyFromTokens*=1.5
                stats.whiteBeeAttack++
                stats.whiteBombPollen*=1.3
                stats.beeEnergy*=1.15
            }
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
                stats.capacityMultiplier*=1.5
                stats.lootLuck+=1
                stats.convertRate*=1.8
                stats.honeyFromTokens*=1.5
                stats.whiteBeeAttack++
                stats.whiteBombPollen*=1.5
                stats.beeEnergy*=1.25
                player.addEffect('petalStormPassive')
            }
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
            }
        },

        jar:{
            
            mesh:function(box,cylinder,sphere){
                
                cylinder(0,0,-0.6,0.4,0.75,15,0.9*1.3,0.7*1.3,0.3*1.3,90,0,0)
                cylinder(0,0.15,-0.6,0.38,0.75,15,0.6,0.6,0.6,90,0,0)
            },
            
            applyStats:function(stats,player){
                
                stats.capacity+=750
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
                
                stats.capacity+=350000
                stats.convertRate*=2.5
                stats.instantRedConversion=window.applyPercentage(stats.instantRedConversion,0.1)
                stats.redPollen*=1.1
                stats.redBeeAttack+=1
            }
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
                
                stats.capacity+=350000
                stats.convertRate*=2.5
                stats.instantBlueConversion=window.applyPercentage(stats.instantBlueConversion,0.1)
                stats.bluePollen*=1.1
                stats.blueBeeAttack+=1
            }
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
                
                stats.capacity+=750000
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
            }
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
                
                stats.capacity+=2000000
                stats.convertRate*=5
                stats.instantRedConversion=window.applyPercentage(stats.instantRedConversion,0.15)
                stats.instantBlueConversion=window.applyPercentage(stats.instantBlueConversion,0.15)
                stats.instantWhiteConversion=window.applyPercentage(stats.instantWhiteConversion,0.25)
                stats.whitePollen*=1.25
                stats.whitePollen*=1.25
                stats.redPollen*=1.25
                stats.bluePollen*=1.25
                stats.whiteBeeAttack+=1
                stats.redBeeAttack+=1
                stats.blueBeeAttack+=1
                stats.defense+=0.1
                stats.honeyAtHive*=1.1
                player.addEffect('inspireCoconutsPassive')
                player.addEffect('emergencyCoconutShieldPassive')
            }
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
            }
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
                
                stats.movementCollection+=8
                stats.movespeed*=1.225
                stats.jumpPower*=1.35
                stats.pollenFromBees*=1.25
            }
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
            }
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
            }
        },
    }
}
