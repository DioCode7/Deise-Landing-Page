//Imports


import { UmbraAnimations, UmbraDOMControl, UmbraRender, UmbraScenes } from "./Umbra/Umbra.js";

//Variáveis 

let InicialAnimationsElements=[
  'MainLogo',
  'HeaderButtonAbout',
  'HeaderButtonSpecs',
  'HeaderButtonContact',
  'HeaderButtonAboutMe',
  'HeadLine',
  'SubHeadLine',
  'CTA',
  'HeroBackground'
];



let ActualConceptTheme = 'Tema Minimalista';

let GeneralMoreAboutBluePrint = {
  MainParent:'GeneralMoreAboutSceneContainer',
  MainContainers:{
    RealHeader:{
    Id:'LandingPageMainHeader',
    Type:'div',
    Style:{
        zIndex:'10',
        position:'relative',
        
        display:'inline-block',
        width:'100%',
        backgroundColor:['white','black'],
        height:{"Mobile":{'Portrait':'10vh','Landscape':'25%'},"Pc":"15vh"},
       // borderBottom:['dashed 1px black','dashed 1px white'],
        //boxShadow:"0px 6px 6px rgba(0,0,0,0.8)",
       /*  backgroundImage:{'Pc':
      ["url('./Images/Decoration4MinimalistLight.gif')","url('./Images/Decoration4MinimalistDark.gif')"]
      ,'Mobile':["url('./Images/Decoration4MinimalistLight.gif')","url('./Images/Decoration4MinimalistDark.gif')"]},
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',*/
    },
    Childs:{
     MainLogo:{
        Id:'MainLogo',
        Type:'div',
        Style:{
            position:'relative',
        display:'flex',
        width:{'Mobile':{'Portrait':'30%','Landscape':'30vh'},'Pc':'20%'},
        height:{'Pc':'140%',Mobile:{'Portrait':'100%','Landscape':'150%'}},
        left:'50%',
        top:'50%',
        transform:'translate(-50%,-50%)',
        backgroundImage:{Pc:["url('./Images/EspaçoRessignificarLetter1.png')","url('./Images/EspaçoRessignificarLetter3.png')"],
          Mobile:{'Portrait':["url('./Images/EspaçoRessignificarLetterMobile.png')","url('./Images/EspaçoRessignificarLetter3.png')"],
            'Landscape':["url('./Images/EspaçoRessignificarLetterMobile.png')","url('./Images/EspaçoRessignificarLetter3.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        },
      },
     
  /*HeaderInstagramIcon:{
    Id:"HeaderInstagramIcon",
    Type:'div',
    Style:{
    position:'absolute',
    left:{'Pc':'41%','Mobile':'38%'},
    top:{'Pc':'3%','Mobile':'4%'},
    width:{'Pc':'10%','Mobile':'6%'},
    height:{'Pc':'10%','Mobile':'6%'},
      backgroundImage:"url('./Images/InstagramIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
    },
  },
  HeaderInstagramReference:{
    Id:"HeaderInstagramReference",
    Type:'div',
    Style:{
        position:'absolute',
        top:'7%',
        left:'50%',
        color:['black','white'],
        fontSize:{'Mobile':'9px','Pc':'15px'},
         cursor:'default',
         transform:'translate(-50%,-50%)',

    },
    Text:'@dheisedill',
    Listener:{
      UmbraHover:{
        Style:{
        color:'blue',
         fontSize:{'Mobile':'11px','Pc':'17px'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://www.instagram.com/dheisedill/", "_blank")}
    }
  },*/

  /*WorkLetter:{
        Id:'WorkLetter',
        Type:'div',
        Style:{
            position:'absolute',
            top:{'Mobile':'60%','Pc':'80%'},
            left:'50%',
            transform:'translate(-50%,0%)',
            color:['black','white'],
            fontSize:{'Pc':'30px','Mobile':'19px'},
             fontFamily: "'Imperial Script', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            zIndex:'20',
            cursor:'default'

        },
        Text:'Neuropedagogia'
    },*/


  
  HeaderButtonAboutMe:{
   Id:'HeaderButtonAboutMe',
   Type:'div',
   Style:{
   color:['black','white'],
   fontSize:{'Mobile':'11px','Pc':'14px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           top:{'Mobile':'86%','Pc':'78%'},
            position:'absolute',
            right:{'Mobile':{'Portrait':'14%','Landscape':'49%'},'Pc':'17.5%'},
           // borderBottom://{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
   },
   Text:'Voltar a tela principal',
    Listener:{
          UmbraHover:{
            Style:{
              scale:'1.1'
            }
          },
           SceneTransition:{
          OldScene:'GeneralMoreAboutScene',
          NewScene:'LandingPageMinimalistMainScene',
          OnEntryAnimations:{
            AnimationGroup:{
               Animation:'SlideForRightAnimation',
               Elements:InicialAnimationsElements,
            }
            

          },
          TransitionAnimation:{
            In:'ScenesTransitionsInAnimation',
            Out:'ScenesTransitionsOutAnimation',
            NewElement:{
              Id:'TransitionAnimationsElement',
              Type:'div',
              Style:{
                position:'fixed',
                width:'10%',
                top:'0%',
                left:'0%',
                pointerEvents:'none',
                zIndex:'2000',
                maxWidth:'100vw',
                maxHeight:'100vh',
                height:'10%',
                scale:'0',
                background:['radial-gradient(circle,rgba(251, 235, 255, 0.94),rgb(246, 246, 247),rgba(255, 255, 255, 0),rgba(2, 127, 211, 0))',
                  'radial-gradient(circle,rgb(0, 0, 0),rgba(255, 255, 255, 0))'],
              }
            }
          },
          TransitionElement:{
            Id:'LogoTransitionElement',
            Type:'div',
            Style:{
               position:'fixed',
      width:{'Mobile':'3%','Pc':'50%'},
      height:{'Mobile':'1%','Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:'translate(-60%,-50%)',
        borderRadius:'100px',
        zIndex:'50000',
        opacity:'0',
        top:'50%',
        left:'50%',
            },
        InAnimation:'FadeInAnimation',
        OutAnimation:'FadeOutAnimation',
          }
        }
        }
  },
 
  },
    },
     StaticLogo:{
    Id:'StaticLogo',
    Type:'div',
    Style:{
      position:'fixed',
      display:{'Pc':'flex','Mobile':'none'},
      width:{'Mobile':'12%','Pc':'14%'},
      height:{'Mobile':'12%','Pc':'16%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        zIndex:'500',
        top:{'Mobile':'1.5%','Pc':'80vh'},
        left:{'Mobile':'0%','Pc':'85vw'}

    }
  },
  
  Header:{
    Id:'MoreAboutHeaderContainer',
    Type:'div',
    Style:{
      position:'relative',
      display:'block',
      height:'25vh',
      margin:'0px',
      width:'100vw',
    
      //background:'linear-gradient(to bottom,rgba(123, 169, 253, 0.59),rgba(255,255,255,0),rgba(255,255,255,0),rgba(255,255,255,0))',
      top:'0px',

    },
    Childs:{
      HeaderLogo:{
      Id:'MoreAboutHeaderLogo',
      Type:'div',
      Style:{
        position:'relative',
        display:'inline-block',
        width:{'Mobile':{'Portrait':'42vw','Landscape':'30vh'},'Pc':'20%'},
        height:{'Mobile':{'Portrait':'130%','Landscape':'130%'},'Pc':'100%'},
        marginLeft:'-5%',
         backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        pointerEvents:'none',
      }
      },
       HeaderLetter:{
      Id:'MoreAboutHeaderLetter',
      Type:'div',
      Style:{
        position:'absolute',
        display:'inline-block',
        width:{'Mobile':{'Portrait':'30vw','Landscape':'30vh'},'Pc':'30%'},
        color:['black','white'],
        transform:'translate(0%,-50%)',
        top:'40%',
        left:{'Mobile':{'Portrait':'34%','Landscape':'21%'},'Pc':'12%'},
          fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            cursor:'default',
        fontSize:{'Mobile':{'Portrait':'1.6rem','Lanscape':'1rem'},'Pc':'2.5rem'},
        pointerEvents:'none',
        borderBottom:['solid 1px black','solid 1px white'],
      },
      Text:`Espaço Ressignificar`,
      },
     
         
      DeiseCredits:{
        Id:'DeiseCredits',
        Type:'div',
        Style:{
         position:'fixed',
         transform:'translate(-50%,-50%)',
         left:'50vw',
         top:'2vh',
         color:['black','white',],
            textAlign:'center',
          color:['black','white'],
          fontFamily: "'Delius', cursive",
          fontWeight: '400',
          zIndex:'200000',
          fontStyle: 'normal',
          cursor:'pointer',
        fontSize:{'Mobile':{'Portrait':'1rem','Lanscape':'1rem'},'Pc':'0.9rem'},
        },
        Text:'@dheisedill',
        Listener:{
            UmbraHover:{
        Style:{
        color:'blue',
         fontSize:{'Mobile':'11px','Pc':'17px'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://www.instagram.com/dheisedill/", "_blank")},
     
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation',' ContactOptionsInstaText'],

    
   },
        }

      },
    }

  },
  FirstBodyContainer:{
    Id:'FirstBodyContainer',
    Type:'div',
    Style:{
      position:'relative',
      display:'block',
      //border:'solid 1px black',
      height:{'Mobile':{'Portrait':'200vh','Landscape':'200vw'},'Pc':'80vh'},
     
    },
    Childs:{
      FirstMainLetter:{
        Id:'FirstMainLetter',
        Type:'div',
        Style:{
        position:'relative',
        display:'inline-block',
      color:['black','white'],
      width:{'Pc':'100%','Mobile':{'Portrait':'55%','Landscape':'100%'}},
      height:'5%',
     // border:'solid 1px black',
        textAlign:'start',
        paddingLeft:'5%',
         fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '700',
            fontStyle: 'normal',
          cursor:'default',
        fontSize:{'Mobile':{'Portrait':'1.3rem','Lanscape':'1rem'},'Pc':'1.4rem'},
        },
        Text:'Do que se trata a Espaço Ressignificar?',
         Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','FirstMainsLetter'],

    }
   },
      },
      FirstImage:{
        Id:'FirstImage',
        Type:'div',
        Style:{
          position:'relative',
          display:'inline-block',
          width:{'Mobile':{'Portrait':'100%','Landscape':'100%'},'Pc':'100%'},
          height:{'Mobile':{'Portrait':'30%','Landscape':'30%'},'Pc':'100%'},
          zIndex:'3',
           backgroundImage:"url('./Images/LogoBackground.png')",
           marginTop:'-5%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        }
      },
      FirstText:{
        Id:'FirstText',
        Type:'div',
        Style:{
          position:'absolute',
          top:{'Mobile':{'Portrait':'5%','Landscape':'10%'},'Pc':'10%'},
          left:{'Mobile':{'Portrait':'10%','Landscape':'10%'},'Pc':'5%'},
          fontFamily: "'Delius', cursive",
          fontWeight: '600',
          fontStyle: 'normal',
          color:['black','white'],
          cursor:'default',
          width:{'Mobile':{'Portrait':'70%','Landscape':'10%'},'Pc':'45%'},
          borderLeft:['solid 1px black','solid 1px white'],
          padding:'3%',
        fontSize:{'Mobile':{'Portrait':'1.1rem','Lanscape':'1rem'},'Pc':'1.2rem'},

        },
        
        Text:`O Espaço Ressignificar é um ambiente especializado em promover a transformação e o desenvolvimento cognitivo e emocional,
        com uma abordagem neuropsicopedagógica, nossa missão é proporcionar apoio e acompanhamento  a crianças e adultos para superar desafios e alcançar seu potencial pleno.
        
        Atualmento possuimos dois anos de atendimento, nesse espaço pensado com carrinho para atender crianças, adolescentes e adultos.`
      }
    }
  },
  SecondBodyContainer:{
    Id:'SecondBodyContainer',
    Type:'div',
    Style:{
       position:'relative',
      display:'block',
      
      //border:'solid 1px black',
      height:{'Mobile':{'Portrait':'200vh','Landscape':'200vw'},'Pc':'110vh'},
    },
    Childs:{
     
      SecondMainLetterContainer:{
        Id:'SecondMainLetterContainer',
        Type:'div',
        Style:{
        position:'relative',
        display:'inline-block',
      color:['rgb(0, 0, 0)','white'],
      width:'100%',
      height:'16%',
      marginBottom:'10vh',
      //border:'solid 1px black',
        textAlign:'center',
        paddingLeft:'5%',
        fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '700',
            fontStyle: 'normal',
          fontStyle: 'normal',
        fontSize:{'Mobile':{'Portrait':'1rem','Lanscape':'1rem'},'Pc':'2rem'},
        },
        Childs:{
            Decoration3:{
      Id:'Decoration3',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':{'Portrait':'25%','Landscape':'25%'},'Pc':'10%'},
        top:'-20%',
        display:"none",
        transform:'translate(-50%,-50%)',
        height:{'Mobile':{'Portrait':'50%','Landscape':'50%'},'Pc':'200%'},
         zIndex:'10',
           backgroundImage:"url('./Images/DecorationNew3.png')",
           left:'50%',
           opacity:'0',
           marginTop:'5%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
      },
       Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','Decoration3'],

    }
   },
      },
          SecondMainLetter:{
            Id:'SecondMainLetter',
            Type:'div',
            Style:{
              position:'absolute',
              top:'50%',
              
              //borderBottom:['solid 1px black','solid 1px white'],
              width:'40%',
              left:'50%',
              opacity:'0',
                // textShadow:'rgba(0,0,0,0.8) 5px 5px 5px',
             // boxShadow:'10px 10px 10px rgba(0,0,0,0.5)',
              transform:'translate(-50%,-50%)'
            },
            Text:'Conheça nossa equipe!',
             Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SecondMainLetter'],

    }
   },

          }
        }
      },
       Decoration2:{
      Id:'Decoration2',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':{'Portrait':'25%','Landscape':'25%'},'Pc':'25%'},
        top:'70%',
        height:{'Mobile':{'Portrait':'50%','Landscape':'50%'},'Pc':'50%'},
         zIndex:'10',
           backgroundImage:"url('./Images/DecorationNew2.png')",
           left:'-3%',
           marginTop:'15%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        opacity:'0',
        pointerEvents:'none',
      },
       Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','Decoration2'],

    }
   },
      },
       Decoration4:{
      Id:'Decoration4',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':{'Portrait':'25%','Landscape':'25%'},'Pc':'20%'},
        top:'2%',
        transform:'translate(-50%,-50%)',
        height:{'Mobile':{'Portrait':'50%','Landscape':'50%'},'Pc':'18%'},
         zIndex:'10',
           backgroundImage:"url('./Images/LineDecoration1.png')",
           left:'61%',
           marginTop:'5%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        opacity:'0',
        pointerEvents:'none',
      },
       Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','Decoration4'],

    }
   },
      },
      SecondImage:{
        Id:'SecondImage',
        Type:'div',
        Style:{
            position:'absolute',
          width:{'Mobile':{'Portrait':'100%','Landscape':'100%'},'Pc':'100%'},
          height:{'Mobile':{'Portrait':'30%','Landscape':'30%'},'Pc':'78%'},
          zIndex:'3',
           backgroundImage:["url('./Images/TeamBackgroundDeise.png')","url('./Images/TeamBackgroundDeise2.png')"],
           left:'0%',
           marginTop:'5%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        opacity:'0',
        pointerEvents:'none',
        },
         Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SecondImage'],

    }
   },
      },
      FirstLetterContainer:{
        Id:'FirstLetterContainer',
        Type:'div',
        Style:{
           position:'relative',
        display:'inline-block',
      color:['black','white'],
      width:'100%',
      height:'9%',
      //border:'solid 1px black',
        textAlign:'center',
        paddingLeft:'5%',
      fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '700',
            fontStyle: 'normal',
        fontSize:{'Mobile':{'Portrait':'1rem','Landscape':'1rem'},'Pc':'2rem'},
        },
        Childs:{
          FirstLetter:{
            Id:'FirstLetter',
            Type:'div',
            Style:{
              position:'absolute',
              top:'0%',
              //color:'rgb(21, 0, 114)',
                 width:'100%',
             borderBottom:['solid 1px black','solid 1px white'],
             paddingBottom:'0%',
              left:'15%',
              opacity:'0',
                // textShadow:'rgba(0,0,0,0.8) 5px 5px 5px',
              transform:'translate(-50%,-50%)'
              
            },
            Text:'Deise Dillenburg',
             Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','FirstLetter'],

    }
   },
          }
        },
      },
      SecondTextContainer:{
        Id:'SecondTextContainer',
        Type:'div',
        Style:{
           position:'relative',
        display:'inline-block',
      color:['black','white'],
      width:'100%',
      height:'60%',
      //border:'solid 1px black',
        textAlign:'start',
        paddingLeft:'5%',
      
        marginTop:'5%',
       fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
        fontSize:{'Mobile':{'Portrait':'1rem','Lanscape':'1rem'},'Pc':'1rem'},
        },
        Childs:{
           SecondTextTitle:{
            Id:'SecondTextTitle',
            Type:'div',
            Text:'Especializações',
            Style:{
              position:'absolute',
              opacity:'0',
                   fontWeight: '800',
                fontSize:{'Mobile':{'Portrait':'1rem','Lanscape':'1rem'},'Pc':'1.5rem'},
                top:{'Mobile':{'Portrait':'2%','Lanscape':'2%'},'Pc':'-15%'},
                  left:'35%',
            },
               Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SecondTextTitle'],

    }
   },
          },
          SecondText:{
            Id:'SecondText',
            Type:'div',
            Style:{
              position:'absolute',
              left:'30%',
              opacity:'0',
              fontSize:{'Mobile':{'Portrait':'1rem','Lanscape':'1rem'},'Pc':'1.1rem'},
              paddingLeft:'3%',
              top:'-5%',
              paddingRight:'2%',
              
              

            },
             Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SecondText'],

    }
   },
            Text:`- Psicanalista;

          - Psicanalista especialista em 
            ansiedade e TDAH;

          - Neuropscicopedagoga Clínca;

          - Pós-Graduada em Autismo e ABA;

          - Especialista em educação inclusiva, 
            Alfabetização e letramento;,

          - Orientadora Parental e Consteladora Familiar;

          - Tarapeuta Comportamental;`
          },
            ThirdLetter:{
            Id:'ThirdLetter1',
            Type:'div',
            Style:{
             position:'absolute',
             top:'10%',
            // color:'rgb(42, 96, 212)',
             fontSize:{'Mobile':'1.1rem','Pc':'1.5rem'},
             left:'85%',
             width:'40%',
             transform:'translate(-50%,-50%)',
             //borderBottom:'solid 1px black',
             paddingBottom:'0%',
             fontWeight:'800',
             opacity:'0',
                //textShadow:'rgba(0,0,0,0.8) 5px 5px 5px',
            },
            Text:'Horários De Atendimento',
             Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ThirdLetter1'],

    }
   },
          },
            FourText:{
            Id:'FourText1',
            Type:'div',
            Style:{
               position:'absolute',
             top:'27%',
             textAlign:'start',
             left:'85%',
             width:'40%',
             opacity:'0',
             lineHeight:'2',
             transform:'translate(-50%,-50%)',
              fontSize:{'Mobile':'1.1rem','Pc':'0.9rem'},

           
            },
            Text:`Turno Manhã:    Alguns Horários Dísponiveis.
            Turno Tarde:      Agenda Lotada(Com Espera).`,
             Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','FourText1'],

    }
   },
          }
        }

      },
      
     
    }
  },
  
   ThirdBodyContainer:{
    Id:'ThirdBodyContainer',
    Type:'div',
    Style:{
       position:'relative',
      display:'block',
      marginTop:'10%',
      //border:'solid 1px black',
      height:{'Mobile':{'Portrait':'200vh','Landscape':'200vw'},'Pc':'110vh'},
    },
    Childs:{
      BackgroundDecoration:{
      Id:'SecondBackgroundDecoration',
      Type:'div',
      Style:{
        position:'absolute',
        width:'100%',
        height:'100%',
          //background:['linear-gradient(to left,rgb(255,255,255),rgb(255,255,255),rgba(49, 65, 214, 0.66))'],
      }
      },
      Decoration1:{
      Id:'Decoration1',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':{'Portrait':'25%','Landscape':'25%'},'Pc':'25%'},
        top:'20%',
        height:{'Mobile':{'Portrait':'50%','Landscape':'50%'},'Pc':'50%'},
         zIndex:'3',
         display:'none',
           backgroundImage:"url('./Images/DecorationNew1.png')",
           left:'0%',
           opacity:'0',
           marginTop:'5%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
      },
       Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','Decoration1'],

    }
   },
      },
      
      ThirdImage:{
        Id:'ThirdImage',
        Type:'div',
        Style:{
            position:'absolute',
          width:{'Mobile':{'Portrait':'100%','Landscape':'100%'},'Pc':'100%'},
          height:{'Mobile':{'Portrait':'30%','Landscape':'30%'},'Pc':'70%'},
          zIndex:'3',
           backgroundImage:["url('./Images/TeamBackgroundTais.png')","url('./Images/TeamBackgroundTais2.png')"],
           left:'0%',
           marginTop:'5%',
           opacity:'0',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        },
         Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ThirdImage'],

    }
   },
      },
      SecondLetterContainer:{
        Id:'SecondLetterContainer',
        Type:'div',
        Style:{
           position:'relative',
        display:'inline-block',
      color:['black','white'],
      width:'100%',
      height:'9%',
     // border:'solid 1px black',
        textAlign:'center',
        paddingLeft:'5%',
       fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '700',
            fontStyle: 'normal',
        fontSize:{'Mobile':{'Portrait':'1rem','Lanscape':'1rem'},'Pc':'2rem'},
        },
        Childs:{
          
          SecondLetter:{
            Id:'SecondLetter',
            Type:'div',
            Style:{
              position:'absolute',
              top:'50%',
              left:'75%',
             // color:'rgb(109, 37, 116)',
              width:'100%',
              opacity:'0',
              borderBottom:['solid 1px black','solid 1px white'],
             
              
              transform:'translate(-50%,-50%)',
            },
            Text:'Tais Oliveira Dos Santos',
             Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SecondLetter'],

    }
   },
            
          },
          
        },
      },
      ThirdTextContainer:{
        Id:'ThirdTextContainer',
        Type:'div',
        Style:{
           position:'relative',
        display:'inline-block',
      color:['black','white'],
      width:'100%',
      height:'60%',
      zIndex:'6',
     // border:'solid 1px black',
        textAlign:'start',
        paddingLeft:'5%',
       fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
        fontSize:{'Mobile':{'Portrait':'1rem','Lanscape':'1rem'},'Pc':'1rem'},
        },
        Childs:{
          ThirdTextTitle:{
            Id:'ThirdTextTitle',
            Type:'div',
            Text:'Especializações',
            Style:{
              position:'absolute',
              opacity:'0',
                   fontWeight: '800',
                fontSize:{'Mobile':{'Portrait':'1rem','Lanscape':'1rem'},'Pc':'1.5rem'},
                top:{'Mobile':{'Portrait':'2%','Lanscape':'2%'},'Pc':'3%'},
                  left:'40%',
            },
               Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ThirdTextTitle'],

    }
   },
          },
          ThirdText:{
            Id:'ThirdText',
            Type:'div',
            Style:{
              position:'absolute',
              left:'40%',
              marginTop:'5%',
              opacity:'0',
              fontSize:{'Mobile':{'Portrait':'1rem','Lanscape':'1rem'},'Pc':'0.9rem'},
              paddingLeft:'2%',
              

            },
             Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ThirdText'],

    }
   },
            Text:`- Pedagoga;

          - Pós Graduanda em ABA;

          - Atendimento a TDAH;`
          },
            FourLetter:{
            Id:'FourLetter',
            Type:'div',
            Style:{
             position:'absolute',
             top:'55%',
             // color:'rgb(42, 96, 212)',
                fontSize:{'Mobile':'1.1rem','Pc':'1.5rem'},
             left:'51%',
              fontWeight:'700',
             transform:'translate(-50%,-50%)',
             opacity:'0',
             
            },
            Text:'Horários De Atendimento',
             Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','FourLetter'],

    }
   },
          },
           FifthText:{
            Id:'FifthText',
            Type:'div',
            Style:{
               position:'absolute',
             top:'60%',
             left:'51%',
             opacity:'0',
             lineHeight:'2',
             transform:'translate(-50%,-50%)',
              
            },
             Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','FifthText'],

    }
   },
            Text:`
            Turno Tarde:       Alguns Horários Dísponiveis.`
          }
        }

      },
     
        
    }
  },
  FinalContainer:{
    Id:'FinalContainer',
    Type:'div',
    Style:{
 position:'relative',
      display:'block',
      height:{'Mobile':{'Portrait':'20vh','Landscape':'20vw'},'Pc':'30vh'},
     

    },
    Childs:{
        Decoration5:{
      Id:'Decoration5',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':{'Portrait':'25%','Landscape':'25%'},'Pc':'10%'},
        top:'10%',
        
        height:{'Mobile':{'Portrait':'50%','Landscape':'50%'},'Pc':'70%'},
         zIndex:'10',
         width:'100%',
           backgroundImage:"url('./Images/DecorationNew4.png')",
           left:'0%',
           marginTop:'5%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        opacity:'0'
      },
       Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','Decoration5'],

    }
   },
      },
        Decoration6:{
      Id:'Decoration6',
      Type:'div',
      Style:{
        position:'absolute',
        display:'none',
        width:{'Mobile':{'Portrait':'25%','Landscape':'25%'},'Pc':'10%'},
        top:'-2000%',
        transform:'translate(-50%,-50%)',
        height:{'Mobile':{'Portrait':'50%','Landscape':'50%'},'Pc':'70%'},
         zIndex:'10',
           backgroundImage:"url('./Images/DecorationNew4.png')",
           left:'18%',
           
           marginTop:'5%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        opacity:'0'
      },
       Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','Decoration6'],

    }
   },
      },
      FinalLetterContainer:{
        Id:'FinalLetterContainer',
        Type:'div',
        Style:{
            position:'relative',
        display:'inline-block',
      color:['black','white'],
      width:'100%',
      height:'9%',
        textAlign:'center',
        paddingLeft:'5%',
        fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '700',
            fontStyle: 'normal',
        fontSize:{'Mobile':{'Portrait':'1rem','Lanscape':'1rem'},'Pc':'3rem'},
        },
       Childs:{
        FinalLetter:{
          Id:'FinalLetter',
          Type:'div',
          STyle:{
            position:'absolute',
            left:'-35%',
            top:'0%',
            opacity:'0'
          
          },
          Text:'Estamos Sempre A Disposição!',
           Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','FinalLetter'],

    }
   },

        },
       }

      },
      FinalTextContainer:{
        Id:'FinalTextContainer',
        Style:{
    position:'relative',
        display:'inline-block',
      color:['black','white'],
      width:'100%',
      height:'60%',
      zIndex:'6',
        textAlign:'start',
        paddingLeft:'5%',
        fontFamily: "'Tangerine', cursive",
          fontWeight: '400',
          fontStyle: 'normal',
        fontSize:{'Mobile':{'Portrait':'1rem','Lanscape':'1rem'},'Pc':'2rem'},
        },
        Type:'div',
        Childs:{
          FinalText:{
            Id:'FinalText',
            Type:'div',
            Style:{
              position:'absolute',
              left:'50%',
              top:'60%',
              textAlign:'center',
              transform:'translate(-50%,-50%)',
              width:'40%',
              opacity:'0'
            },
             Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','FinalText'],

    }
   },
            Text:`Nosso cérebro é o melhor brinquedo já criado: Nele se encontram todos os segredos, inclusive o da felicidade!
                                                            (Charles Chaplin)`
          }
        }
      }
    }
  },
  FooterContainer:{
    Id:'FooterContainer',
    Type:'div',
    Style:{
      position:'relative',
      display:'block',
      height:{'Mobile':{'Portrait':'20vh','Landscape':'20vw'},'Pc':'20vh'},
      borderTop:['solid 1px black','solid 1px white'],
      backgroundColor:['white','black'],
      zIndex:'30'
    },

    Childs:{
       FooterLogo:{
    Id:'FooterLogo',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Mobile':'3%','Pc':'15%'},
      height:{'Mobile':'1%','Pc':'80%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        borderRadius:'100px',
        zIndex:'500',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
  },
},
CreditsFooter:{
  Id:'CreditsFooter',
  Type:'div',
  Style:{
    position:'absolute',
    color:['rgb(10, 10, 10)','rgb(174,174,174)'],
    fontSize:{'Mobile':'11px','Pc':'11px'},
    top:'90%',
    left:'1%',
    transform:'translate(0%,-50%)',
    whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'1.5'},
      fontFamily: "'Delius', cursive",
      fontWeight: '400',
      fontStyle: 'normal',
      cursor:'pointer'

  },
  Text:'DioMhwl',
   Listener:{
      UmbraHover:{
        Style:{
        color:'blue',
         fontSize:{'Mobile':'11px','Pc':'17px'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://www.instagram.com/diomhwl/", "_blank")}
    }
}
    }
  }
  }
}
let LandingPageBluePrint = {
MainParent:"LandingPageMainSceneContainer",
MainContainers:{
  StaticLogo:{
    Id:'StaticLogo',
    Type:'div',
    Style:{
      position:'fixed',
      width:{'Mobile':'12%','Pc':'14%'},
      height:{'Mobile':'12%','Pc':'14%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        zIndex:'500',
        top:{'Mobile':'1.5%','Pc':'3%'},
        left:{'Mobile':'0%','Pc':'-4%'}

    }
  },
  MainHeader:{
    Id:'LandingPageMainHeader',
    Type:'div',
    Style:{
        zIndex:'10',
        position:'absolute',
        width:'100%',
        background:[
            'linear-gradient(to right,rgb(170, 111, 57),rgb(92, 61, 61),white)',
            'rgb(112, 69, 69)'],
        height:{"Mobile":'20%',"Pc":"34%"},
        boxShadow:"0px 6px 6px rgba(0,0,0,0.8)",
         backgroundImage:{'Pc':"url('./Images/Decoration4.gif')",'Mobile':"url('./Images/Decoration4Mob.gif')"},
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',

    },
    Childs:{
      ConceptThemeSwitchButton:{
     Id:'ConceptThemeSwitchButton',
     Type:'div',
     Style:{
     fontSize:{'Mobile':'11px','Pc':'15px'},
     color:'white',
     position:'absolute',
     top:{'Mobile':'4%','Pc':'10%'},
     left:{'Mobile':'4%','Pc':'10%'},
     border:'solid 1px black',
     backgroundColor:'black',
     zIndex:'20',
     cursor:'pointer', 
     },
     Listener:{
      UseFn:true,
      Fn:ConceptThemeSwitchs,
      FnParams:()=>[['Minimalista']],
      UmbraHover:{
        Style:{
          scale:'1.2',
          
        }
      }
     },
     Text:()=>ActualConceptTheme,

      },
         HeaderMainLetter:{
    Id:'LandingPageHeaderMainLetter',
    Type:'div',
    Style:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundImage:"url('./Images/EspaçoRessignificarLetter.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        pointerEvents:'none',
    },

  },
  HeaderInstagramIcon:{
    Id:"HeaderInstagramIcon",
    Type:'div',
    Style:{
    position:'absolute',
    left:{'Pc':'41%','Mobile':'38%'},
    top:{'Pc':'3%','Mobile':'4%'},
    width:{'Pc':'10%','Mobile':'6%'},
    height:{'Pc':'10%','Mobile':'6%'},
      backgroundImage:"url('./Images/InstagramIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
    },

  },
  HeaderInstagramReference:{
    Id:"HeaderInstagramReference",
    Type:'div',
    Style:{
        position:'absolute',
        top:'7%',
        left:'50%',
        color:['white','black'],
        fontSize:{'Mobile':'9px','Pc':'15px'},
         cursor:'default',
         transform:'translate(-50%,-50%)',

    },
    Text:'@dheisedill',
     Listener:{
      UmbraHover:{
        Style:{
        color:'blue',
         fontSize:{'Mobile':'11px','Pc':'17px'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://www.instagram.com/dheisedill/", "_blank")}
    }
  },
  
  HeaderButtonAbout:{
   Id:'HeaderButtonAbout',
   Type:'div',
   Style:{
   color:'white',
   
   fontSize:{'Mobile':'11px','Pc':'14px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
             display:{'Mobile':'none','Pc':'flex'},
            zIndex:'25',
            top:{'Mobile':'80%','Pc':'5%'},
            position:'absolute',
            left:{'Mobile':'23%','Pc':'10%'},
            //borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
   },
   Text:'Saiba Mais',
   Listener:{
    UmbraHover:{
      Style:{
        scale:'1.2'
      }
    }
   },
  },

  HeaderButtonSpecs:{
   Id:'HeaderButtonSpecs',
   Type:'div',
   Style:{
   color:'white',
   fontSize:{'Mobile':'11px','Pc':'14px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            display:{'Mobile':'none','Pc':'flex'},
            zIndex:'25',
            top:{'Mobile':'80%','Pc':'5%'},
            position:'absolute',
            left:{'Mobile':'38%','Pc':'16.5%'},
            //borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
   },
   Text:'Especializações',
   Listener:{
    UmbraHover:{
      Style:{
        scale:'1.2'
      }
    }
   },
  },
  HeaderButtonAboutMe:{
   Id:'HeaderButtonAboutMe',
   Type:'div',
   Style:{
   color:'white',
   fontSize:{'Mobile':'11px','Pc':'14px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
             display:{'Mobile':'none','Pc':'flex'},
            zIndex:'25',
            top:{'Mobile':'80%','Pc':'5%'},
            position:'absolute',
            left:{'Mobile':'59%','Pc':'25.5%'},
            //borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
   },
   Text:'Sobre Mim',
   Listener:{
    UmbraHover:{
      Style:{
        scale:'1.2'
      }
    }
   },
  },
  HeaderButtonContact:{
   Id:'HeaderButtonContact',
   Type:'div',
   Style:{
   color:'white',
   fontSize:{'Mobile':'11px','Pc':'14px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
             display:{'Mobile':'none','Pc':'flex'},
            cursor:'default',
            zIndex:'25',
            top:{'Mobile':'80%','Pc':'5%'},
            position:'absolute',
            left:{'Mobile':'74%','Pc':'32%'},
            //borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
   },
   Text:'Agende Sua Consulta',
   Listener:{
    UmbraHover:{
      Style:{
        scale:'1.2'
      }
    }
   },
  },
     WorkLetter:{
        Id:'WorkLetter',
        Type:'div',
        Style:{
            position:'absolute',
            top:{'Mobile':'60%','Pc':'69%'},
            left:'50%',
            transform:'translate(-50%,0%)',
            color:['white','white'],
            fontSize:{'Pc':'21px','Mobile':'19px'},
             fontFamily: "'Imperial Script', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            zIndex:'20',
            cursor:'default'

        },
        Text:'Neuropedagogia'
    },

    }
  },
  GeneralDescriptionContainer:{
   Id:'GeneralDescriptionContainer',
   Type:'div',
   Style:{
    position:'absolute',
    top:{"Mobile":'20%',"Pc":"34%"},
    left:'0%',
    width:'100%',
    border:['solid 1px black','solid 1px white'],
    height:{'Mobile':'90%','Pc':'120%'},
   },
   Childs:{
    GeneralDescriptionContainerDecoration1:{
     Id:'GeneralDescriptionContainerDecoration1',
     Type:'div',
     Style:{
      position:'absolute',
      left:{'Mobile':'26%','Pc':'34%'},
      top:{'Mobile':'-2%','Pc':'2%'},
      backgroundImage:"url('./Images/Decoration1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:{'Mobile':'10%','Pc':'10%'},
        height:{'Mobile':'10%','Pc':'10%'},
        zIndex:'10',
        

     },
    },
     GeneralDescriptionContainerDecoration2:{
     Id:'GeneralDescriptionContainerDecoration2',
     Type:'div',
     Style:{
      position:'absolute',
      left:{'Mobile':'70%','Pc':'56%'},
      top:{'Mobile':'2%','Pc':'6%'},
      backgroundImage:"url('./Images/Decoration2.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:{'Mobile':'10%','Pc':'10%'},
        height:{'Mobile':'10%','Pc':'10%'},
        zIndex:'10',
        transform:'scale(-1,1) rotate(-40deg)',
        
        

     },
    },
      GeneralDescriptionContainerDecoration3:{
     Id:'GeneralDescriptionContainerDecoration3',
     Type:'div',
     Style:{
      position:'absolute',
      left:{'Mobile':'46%','Pc':'50%'},
      top:{'Mobile':'7%','Pc':'13%'},
      backgroundImage:"url('./Images/Decoration3.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:{'Mobile':'30%','Pc':'30%'},
        height:{'Mobile':'30%','Pc':'30%'},
        zIndex:'10',
        transform:'translate(-50%,-50%)',
        
        

     },
    },
      GeneralDescriptionContainerDecoration6:{
     Id:'GeneralDescriptionContainerDecoration6',
     Type:'div',
     Style:{
      position:'absolute',
      left:{'Mobile':'70%','Pc':'75%'},
      top:{'Mobile':'57%','Pc':'51%'},
      backgroundImage:{'Mobile':'','Pc':"url('./Images/Decoration6.gif')"},
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:{'Mobile':'45%','Pc':'40%'},
        height:{'Mobile':'45%','Pc':'40%'},
        zIndex:'5',
        transform:'translate(-50%,-50%)',
        pointerEvents:'none',
        

     },
    },
    GeneralDescriptionContainerDeco:{
    Id:"GeneralDescriptionContainerDeco",
    Type:'div',
    Style:{
     position:'absolute',
    top:"0%",
    left:'0%',
    background:[
        'linear-gradient(to bottom, rgb(78, 63, 63),rgba(68, 47, 47, 0.95))',
         'linear-gradient(to bottom, rgb(78, 63, 63),rgba(68, 47, 47, 0.95))'
    ],
    width:'100%',
     backgroundImage:{'Pc':"url('./Images/Decoration5.gif')",'Mobile':"url('./Images/Decoration5Mob.gif')"},
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
    height:{'Mobile':'70%','Pc':'69%'},
    },
    },
    GeneralDescriptionContainerDecoRight:{
    Id:"GeneralDescriptionContainerDecoRight",
    Type:'div',
    Style:{
     position:'absolute',
    top:"0%",
    left:'0%',
    background:[
        'linear-gradient(to right, rgba(78, 63, 63, 0),rgba(78, 63, 63, 0),rgba(78, 63, 63, 0),rgba(78, 63, 63, 0),rgb(255, 255, 255))',
        'linear-gradient(to right, rgba(78, 63, 63, 0),rgba(78, 63, 63, 0),rgba(78, 63, 63, 0),rgba(78, 63, 63, 0),rgb(255, 255, 255))'
    ],
    width:'100%',
    height:{'Mobile':'70%','Pc':'70%'},
    },
    },
     WhoWeAreLetter:{
        Id:' WhoWeAreLetter',
        Type:'div',
        Style:{
            position:'absolute',
            top:{'Mobile':'7%','Pc':'16%'},
            left:'50%',
            transform:'translate(-50%,0%)',
            color:'white',
            fontSize:{'Pc':'19px','Mobile':'11px'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            zIndex:'20',
            cursor:'default',
            borderBottom:['solid 1px white','solid 1px white'],

        },
        Text:'Quem Somos?'
    },
    WelcomeLetter:{
        Id:'WelcomeLetter',
        Type:'div',
        Style:{
            position:'absolute',
            top:{'Mobile':'2%','Pc':'5%'},
            left:'50%',
            transform:'translate(-50%,0%)',
            color:['white','white'],
            fontSize:{'Pc':'50px','Mobile':'31px'},
             fontFamily: "'Imperial Script', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            zIndex:'20',
            cursor:'default'

        },
        Text:'Seja Bem Vindo!'
    },
    MainDescImage:{
      Id:'MainDescImage',
      Type:'div',
      Style:{
        position:'absolute',
        border:['solid 3px black','solid 1px white'],
        width:{'Mobile':'30%','Pc':'18%'},
        height:{'Mobile':'20%','Pc':'30%'},
        zIndex:40,
        display:'flex',
        top:{'Mobile':'42%','Pc':'19%'},
        left:{'Mobile':'70%','Pc':'75%'},
         backgroundImage:"url('./Images/DescImage.jpeg')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        boxShadow:'10px 10px 40px rgba(0, 0, 0, 0.8)',
        transform:{'Mobile':'translate(-50%,0%)','Pc':''},
      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
            border:'none',
             cursor:'pointer'
          }
        }
      }
    },
    MainDescText:{
    Id:'MainDescText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'9%','Pc':'20%'},
      left:{'Mobile':'13%','Pc':'35%'},
      fontSize:{'Mobile':'12px','Pc':'17px'},
      color:['rgb(255, 255, 255)','rgb(240,240,240)'],
      width:{'Mobile':'60%','Pc':'30%'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            
         
      
    },
    Text:"Somos uma clínica de neuropedagogia especializada psicologia, pedagogia, autismo e educação especial, localizada em Não-Me-Toque/RS.",
    },
    MainDescText2:{
    Id:'MainDescText2',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'9%','Pc':'33%'},
      left:{'Mobile':'13%','Pc':'35%'},
      fontSize:{'Mobile':'12px','Pc':'17px'},
      color:['rgb(255, 255, 255)','rgb(240,240,240)'],
      width:{'Mobile':'60%','Pc':'30%'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            
         
      
    },
    Text:"Atuamos com avaliações e intervenções personalizadas, integrando educação, neurociência e psicologia para atender às necessidades individuais de cada pessoa.Nosso trabalho é voltado à promoção do desenvolvimento cognitivo, emocional e acadêmico, em um ambiente acolhedor, ético e fundamentado cientificamente.",
    },
     MoreAboutButton:{
      Id:'MoreAboutButton',
      Type:'div',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':{'Portrait':'50%','Landscape':'50%'},'Pc':'62%'},
        left:{'Mobile':{'Portrait':'75%','Landscape':'75%'},'Pc':'53%'},
        border:['solid 1px black','solid 1px white'],
        width:{'Mobile':{'Portrait':'18%','Landscape':'18%'},'Pc':'14%'},
        height:{'Mobile':{'Portrait':'4%','Landscape':'4%'},'Pc':'3%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'0.7rem'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
             backgroundImage:"url('./Images/MoreAboutButton.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
           

      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        }
      }
    },
   }
  },
 
},

}

let LandingPageMinimalistBluePrint = {
MainParent:"LandingPageMinimalistMainSceneContainer",
MainContainers:{
  StaticLogo:{
    Id:'StaticLogo',
    Type:'div',
    Style:{
      position:'fixed',
      display:{'Pc':'flex','Mobile':{Portrait:'none',Landscape:'none'}},
      width:{'Mobile':'20%','Pc':'14%'},
      height:{'Mobile':'20%','Pc':'14%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        borderRadius:'100px',
        zIndex:'500',
        top:'3%',
        left:'-4%'

    }
  },
  MainHeader:{
    Id:'LandingPageMainHeader',
    Type:'div',
    Style:{
        zIndex:'10',
        position:'relative',
        width:'100%',
        backgroundColor:['white','rgb(17,17,17)'],
        height:{"Mobile":{Portrait:'10%',Landscape:'25%'},"Pc":"15%"},
       // borderBottom:['dashed 1px black','dashed 1px white'],
        //boxShadow:"0px 6px 6px rgba(0,0,0,0.8)",
       /*  backgroundImage:{'Pc':
      ["url('./Images/Decoration4MinimalistLight.gif')","url('./Images/Decoration4MinimalistDark.gif')"]
      ,'Mobile':["url('./Images/Decoration4MinimalistLight.gif')","url('./Images/Decoration4MinimalistDark.gif')"]},
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',*/
    },
    Childs:{
     MainLogo:{
        Id:'MainLogo',
        Type:'div',
        Style:{
            position:'relative',
        display:{Mobile:'flex',Pc:'block'},
        width:{'Mobile':{'Portrait':'30vw','Landscape':'30vw'},'Pc':'20%'},
        height:{'Pc':'170%','Mobile':{'Portrait':'100%','Landscape':'150%'}},
        left:'50%',
        top:'50%',
        transform:'translate(-50%,-50%)',
         backgroundImage:{Pc:["url('./Images/EspaçoRessignificarLetter1.png')","url('./Images/EspaçoRessignificarLetter3.png')"],
          Mobile:{'Portrait':["url('./Images/EspaçoRessignificarLetterMobile.png')","url('./Images/EspaçoRessignificarLetter3.png')"],
            'Landscape':["url('./Images/EspaçoRessignificarLetterMobile.png')","url('./Images/EspaçoRessignificarLetter3.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'contain'},
        pointerEvents:'none',
        },
      },
      /*ConceptThemeSwitchButton:{
     Id:'ConceptThemeSwitchButton',
     Type:'div',
     Style:{
     fontSize:{'Mobile':'11px','Pc':'15px'},
     color:'black',
     position:'absolute',
     top:{'Mobile':'4%','Pc':'10%'},
     left:{'Mobile':'4%','Pc':'10%'},
     border:'solid 1px black',
     backgroundColor:'white',
     zIndex:'20',
     cursor:'pointer',
     },
     Listener:{
      UseFn:true,
       Fn:ConceptThemeSwitchs,
      FnParams:()=>[['Ludico']],
      UmbraHover:{
        Style:{
          scale:'1.2',
          
        }
      }
     },
     Text:()=>ActualConceptTheme,

      },
      */
  /*HeaderInstagramIcon:{
    Id:"HeaderInstagramIcon",
    Type:'div',
    Style:{
    position:'absolute',
    left:{'Pc':'41%','Mobile':'38%'},
    top:{'Pc':'3%','Mobile':'4%'},
    width:{'Pc':'10%','Mobile':'6%'},
    height:{'Pc':'10%','Mobile':'6%'},
      backgroundImage:"url('./Images/InstagramIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
    },
  },
  HeaderInstagramReference:{
    Id:"HeaderInstagramReference",
    Type:'div',
    Style:{
        position:'absolute',
        top:'7%',
        left:'50%',
        color:['black','white'],
        fontSize:{'Mobile':'9px','Pc':'15px'},
         cursor:'default',
         transform:'translate(-50%,-50%)',

    },
    Text:'@dheisedill',
    Listener:{
      UmbraHover:{
        Style:{
        color:'blue',
         fontSize:{'Mobile':'11px','Pc':'17px'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://www.instagram.com/dheisedill/", "_blank")}
    }
  },*/

  /*WorkLetter:{
        Id:'WorkLetter',
        Type:'div',
        Style:{
            position:'absolute',
            top:{'Mobile':'60%','Pc':'80%'},
            left:'50%',
            transform:'translate(-50%,0%)',
            color:['black','white'],
            fontSize:{'Pc':'30px','Mobile':'19px'},
             fontFamily: "'Imperial Script', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            zIndex:'20',
            cursor:'default'

        },
        Text:'Neuropedagogia'
    },*/

  HeaderButtonAbout:{
   Id:'HeaderButtonAbout',
   Type:'div',
   Style:{
   color:['black','white'],
   fontSize:{'Mobile':'11px','Pc':'14px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            top:{'Mobile':'86%','Pc':'78%'},
            position:'absolute',
            right:{'Mobile':'8%','Pc':'2%'},
           // borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
   },
   Text:'Saiba Mais',
   Listener:{
    UmbraHover:{
      Style:{
        scale:'1.2'
      }
    },
    UseFn:true,
    Fn:()=>{document.getElementById('GeneralDescriptionContainer').scrollIntoView({
       behavior: "smooth"
    })}
   },
  },

  HeaderButtonSpecs:{
   Id:'HeaderButtonSpecs',
   Type:'div',
   Style:{
   color:['black','white'],
   fontSize:{'Mobile':'11px','Pc':'14px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            top:{'Mobile':'86%','Pc':'78%'},
            position:'absolute',
            right:{'Mobile':{'Portrait':'25%','Landscape':'17%'},'Pc':'8.5%'},
           // borderBottom://{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
   },
   Text:'Especializações',
   Listener:{
    UmbraHover:{
      Style:{
        scale:'1.2'
      }
    },
     UseFn:true,
    Fn:()=>{document.getElementById('SpecsContainer').scrollIntoView({
       behavior: "smooth"
    })}
   },
  },
  HeaderButtonAboutMe:{
   Id:'HeaderButtonAboutMe',
   Type:'div',
   Style:{
   color:['black','white'],
   fontSize:{'Mobile':'11px','Pc':'14px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           top:{'Mobile':'86%','Pc':'78%'},
            position:'absolute',
            right:{'Mobile':{'Portrait':'49%','Landscape':'29%'},'Pc':'18%'},
           // borderBottom://{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
   },
   Text:'Sobre Mim',
   Listener:{
    UmbraHover:{
      Style:{
        scale:'1.2'
      }
    },
     UseFn:true,
    Fn:()=>{document.getElementById('AboutMeContainer').scrollIntoView({
       behavior: "smooth"
    })}
   },
  },
  HeaderButtonContact:{
   Id:'HeaderButtonContact',
   Type:'div',
   Style:{
   color:['black','white'],
   fontSize:{'Mobile':'11px','Pc':'14px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            top:{'Mobile':'86%','Pc':'78%'},
            position:'absolute',
            right:{'Mobile':{'Portrait':'66%','Landscape':'37%'},'Pc':'25%'},
            //borderBottom://{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
   },
   Text:'Agende Sua Consulta',
   Listener:{
    UmbraHover:{
      Style:{
        scale:'1.2'
      }
    },
     UseFn:true,
    Fn:()=>{document.getElementById('ContactContainer').scrollIntoView({
       behavior: "smooth"
    })}
   },
  },
    }
  },
  HeroContainer:{
    Id:'HeroContainer',
    Type:'div',
    Style:{
      position:'relative',
      height:{'Pc':'85%','Mobile':{'Portrait':'85%','Landscape':'160%'}},
    },
    Childs:{
      HeroBackground:{
        Id:'HeroBackground',
        Type:'div',
        Style:{
         position:'absolute',
         width:'100%',
         height:'100%',
         left:'0%',
         opacity:'0',
          backgroundImage:{'Pc':["url('./Images/HeroBackground.png')","url('./Images/HeroBackground2.png')"],
            'Mobile':{'Portrait':["url('./Images/HeroBackgroundMobile.png')","url('./Images/HeroBackgroundMobile.png')"],
              'Landscape':["url('./Images/HeroBackground.png')","url('./Images/HeroBackground2.png')"],
            }
          },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
         
           
        }
      },
      HeadLineContainer:{
        Id:'HeadLineContainer',
        Type:'div',
        Style:{
         position:'relative',
         //border:'solid 1px black',
         width:'100%',
         height:{'Pc':'30%','Mobile':{
          'Portrait':'10%','Landscape':'30%',
         }},
         display:'block',

        },
        Childs:{
          HeadLine:{
            Id:'HeadLine',
            Type:'div',
            Style:{
            position:'absolute',
            left:{'Pc':'44%','Mobile':{
              'Portrait':'10%','Landscape':'44%'
            }},
            width:{'Pc':'100%','Mobile':{
              'Portrait':'90%','Landscape':'100%',
            }},
            top:{'Pc':'50%','Mobile':{'Portrait':'70%','Landscape':'50%'}},
            textAlign:'start',
            color:['black','white'],
            //borderBottom:'solid 1px black',
              fontSize:{'Pc':'40px','Mobile':{'Portrait':'17px','Landscape':'20px'}},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: {'Pc':'600','Mobile':'800'},
            fontStyle: 'normal',
            opacity:'0',
           // textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            },
            Text:`Cuidando do aprender em todas 
                   as fases da vida!`,
            

  
          }
        }
      },
      SubHeadLineContainer:{
        Id:'SubHeadLineContainer',
        Type:'div',
       Style:{
         position:'relative',
       //  border:'solid 1px black',
         width:'100%',
         height:'40%',
         display:'block',

        },
        Childs:{
          SubHeadLine:{
            Id:'SubHeadLine',
            Type:'div',
            Text:'Atendimento em neuropedagogia, psicopedagogia e educação inclusiva para crianças, adolescentes e adultos.',
            Style:{
            position:'absolute',
            left:{'Pc':'71%','Mobile':{
              'Portrait':'5%',
              'Landscape':'71%',
            }},
            textAlign:'start',
            width:{'Pc':'50%','Mobile':{'Portrait':'75%','Landscape':'35%'}},
            top:{'Pc':'55%','Mobile':{
              'Portrait':'12%','Landscape':'25%',
            }},

            transform:{'Pc':'translate(-50%,-50%)','Mobile':{
              'Landscape':'translate(-50%,-50%)','Portrait':'translate(0%,0%)'
            }},
            color:['black','white'],
              fontSize:{'Pc':'20px','Mobile':{'Portrait':'16px','Landscape':'18px'}},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
            opacity:'0',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.41)',
            },
          }
        }
      },
      CTAContainer:{
        Id:'CTAContainer',
        Type:'div',
        Style:{
          position:"relative",
          display:'block',
          width:'100%',
          height:'30%',
        },
        Childs:{
          CTA:{
            Id:'CTA',
            Type:'div',
            Style:{
               boxShadow:'rgba(0,0,0,0.2) 2px 10px 10px',
               width:{'Pc':'20%','Mobile':{
                'Portrait':'40%','Landscape':'20%',
               }},
               height:'25%',
               position:'absolute',
               opacity:'0',
               top:{'Pc':'25%','Mobile':{'Portrait':'40%','Landscape':'25%'}},
               left:{'Pc':'70%','Mobile':{'Portrait':'62%','Landscape':'70%'}},
               transform:'translate(-50%,-50%)',
             background:{'Pc':'linear-gradient(to left, rgba(0,0,255,0.2),rgba(255, 37, 255, 0.2))',
                'Mobile':'linear-gradient(to left, rgb(0, 0, 255),rgb(255, 37, 255))'
               },
               

            },
             Listener:{
      UmbraHover:{
        Style:{
        color:'orange',
        scale:'1.12',
         fontSize:{'Mobile':'11px','Pc':'17px'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://wa.me/5554991841827", "_blank");},
       
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ContactOptionsWhatsText'],

    
   },
    },
            Childs:{
                 CTAText:{
            Id:'CTAText',
            Type:'div',
            Style:{
              position:'absolute',
              left:'50%',
              top:'50%',
              color:['black','white'],
              transform:'translate(-50%,-50%)',
              textAlign:'center',
                fontSize:{'Pc':'15px','Mobile':{'Portrait':'12px','Landscape':'15px'}},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
            width:'100%',
            pointerEvents:'none',
            },
            Text:'Agende Já Sua Consulta!'
          }
            }
          },
       
        }
      }
    }
  },
  GeneralDescriptionContainer:{
   Id:'GeneralDescriptionContainer',
   Type:'div',
   Style:{
    position:'relative',
    //top:{"Mobile":'20%',"Pc":"34%"},
    left:'0%',
    width:'100%',
   // borderTop:"solid 1px black",
    height:{'Mobile':{'Portrait':'120%','Landscape':'250%'},'Pc':'120%'},
    backgroundColor:['white','rgb(17,17,17)'],
   },
   Childs:{
    GeneralDescriptionContainerDecoration1:{
     Id:'GeneralDescriptionContainerDecoration1',
     Type:'div',
     Style:{
      position:'absolute',
            display:{'Pc':'flex','Mobile':'none'},
      left:{'Mobile':'26%','Pc':'34%'},
      top:{'Mobile':'-2%','Pc':'2%'},
      backgroundImage:"url('./Images/Decoration1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:{'Mobile':'10%','Pc':'10%'},
        height:{'Mobile':'10%','Pc':'10%'},
        zIndex:'10',
        opacity:'0',
        

     },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','GeneralDescriptionContainerDecoration1'],

    }
   },
    },
     GeneralDescriptionContainerDecoration2:{
     Id:'GeneralDescriptionContainerDecoration2',
     Type:'div',
     Style:{
      position:'absolute',
      display:{'Pc':'flex','Mobile':'none'},
      left:{'Mobile':'70%','Pc':'56%'},
      top:{'Mobile':'2%','Pc':'6%'},
      backgroundImage:"url('./Images/Decoration2.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:{'Mobile':'10%','Pc':'10%'},
        height:{'Mobile':'10%','Pc':'10%'},
        zIndex:'10',
        opacity:'0',
        transform:'scale(-1,1) rotate(-40deg)',
        
        

     },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','GeneralDescriptionContainerDecoration2'],

    }
   },
    },
      GeneralDescriptionContainerDecoration3:{
     Id:'GeneralDescriptionContainerDecoration3',
     Type:'div',
     Style:{
      position:'absolute',
      left:{'Mobile':'46%','Pc':'50%'},
      display:'none',
      top:{'Mobile':'7%','Pc':'13%'},
      backgroundImage:"url('./Images/Decoration3.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        opacity:'0',
        width:{'Mobile':'30%','Pc':'30%'},
        height:{'Mobile':'30%','Pc':'30%'},
        zIndex:'10',
        transform:'translate(-50%,-50%)',
        
        

     },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','GeneralDescriptionContainerDecoration3'],

    }
   },
    },
      GeneralDescriptionContainerDecoration6:{
     Id:'GeneralDescriptionContainerDecoration6',
     Type:'div',
     Style:{
      position:'absolute',
      left:{'Mobile':'70%','Pc':'75%'},
      top:{'Mobile':'57%','Pc':'51%'},
      backgroundImage:{'Mobile':'','Pc':"url('./Images/Decoration6.gif')"},
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        opacity:'0',
        width:{'Mobile':'45%','Pc':'40%'},
        height:{'Mobile':'45%','Pc':'40%'},
        zIndex:'5',
        display:"none",
        transform:'translate(-50%,-50%)',
        pointerEvents:'none',
        

     },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','GeneralDescriptionContainerDecoration6'],

    }
   },
    },
    GeneralDescriptionContainerDeco:{
    Id:"GeneralDescriptionContainerDeco",
    Type:'div',
    Style:{
     position:'absolute',
    top:"0%",
    opacity:'0',
    left:'0%',
    backgroundColor:['white','rgb(17,17,17)'],
    width:'100%',
     backgroundImage:{'Pc':
      ["url('./Images/Decoration5MinimalistLight.png')","url('./Images/Decoration5MinimalistLight.png')"],
      'Mobile':{'Portrait':["url('./Images/Decoration5MinimalistMobLight.png')","url('./Images/Decoration5MinimalistMobLight.png')"],
        'Landscape':["url('./Images/Decoration5MinimalistLight.png')","url('./Images/Decoration5MinimalistLight.png')"]}},
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{'Pc':'cover','Mobile':'cover'},
    Minheight:{'Mobile':'40vh','Pc':'none'},
    height:{'Mobile':{'Portrait':'100%','Landscape':'45vw'},'Pc':'69%'},
    },
            Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','GeneralDescriptionContainerDeco'],

    }
   },
    },
    GeneralDescriptionContainerDecoRight:{
    Id:"GeneralDescriptionContainerDecoRight",
    Type:'div',
    Style:{
     position:'absolute',
    top:"0%",
    left:'0%',
    
    width:'100%',
    height:{'Mobile':'70%','Pc':'70%'},
    },
    },

    WelcomeLetter:{
        Id:'WelcomeLetter',
        Type:'div',
        Style:{
            position:'absolute',
            top:{'Mobile':{'Portrait':'5%','Landscape':'2%'},'Pc':'5%'},
            left:{'Pc':'20%','Mobile':{'Portrait':'50%','Landscape':'20%'}},
            transform:'translate(-50%,0%)',
            color:['black','white'],
            fontSize:{'Pc':'40px','Mobile':'21px'},
           fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '700',
      fontStyle: 'normal',
            opacity:'0',
           
          //  textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            zIndex:'20',
            cursor:'default'

        },
        Text:'Seja Bem Vindo!',
         Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','WelcomeLetter'],

    }
   },
    },
    WhoWeAreLetter:{
        Id:' WhoWeAreLetter',
        Type:'div',
        Style:{
            position:'absolute',
            top:{'Mobile':'7%','Pc':'15%'},
            left:'50%',
            transform:'translate(-50%,0%)',
            opacity:'0',
            display:`none`,
            color:['black','white'],
            fontSize:{'Pc':'22px','Mobile':'11px'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
           // textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            zIndex:'20',
            cursor:'default',
            borderBottom:['solid 1px black','solid 1px black'],

        },
        Text:'Quem Somos?',
         Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','WhoWeAreLetter'],

    }
   },
    },
    MainDescImage:{
      Id:'MainDescImage',
      Type:'div',
      Style:{
        position:'absolute',
        border:['solid 3px black','solid 1px white'],
        width:{'Mobile':'30%','Pc':'18%'},
        height:{'Mobile':'20%','Pc':'30%'},
        zIndex:40,
        opacity:'0',
        display:'none',
        top:{'Mobile':'40%','Pc':'19%'},
        left:{'Mobile':'80%','Pc':'75%'},
         backgroundImage:"url('./Images/DescImage.jpeg')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        boxShadow:{'Pc':'10px 10px 40px rgba(0, 0, 0, 0.8)','Mobile':'10px 10px 40px rgba(0, 0, 0, 0)'},
        transform:{'Mobile':'translate(-50%,0%)','Pc':''},
      },
      Listener:{
     
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','MainDescImage'],

    
   },
        UmbraHover:{
          Style:{
            scale:'1.2',
            border:'none',
             cursor:'pointer'
          }
        }
      }
    },

    MoreAboutButton:{
      Id:'MoreAboutButton',
      Type:'div',
     
      Style:{
      
               boxShadow:'rgba(0,0,0,0.2) 2px 10px 10px',
               width:{'Pc':'20%','Mobile':{'Portrait':'30%','Landscape':'20%'}},
               height:'4%',
               position:'absolute',
               opacity:'0',
               top:{'Pc':'60%','Mobile':{'Portrait':'49%','Landscape':'46%'}},
               left:{'Pc':'50%','Mobile':{'Portrait':'50%','Landscape':'60%'}},
               transform:'translate(-50%,-50%)',
               background:{'Pc':'linear-gradient(to left, rgba(0,0,255,0.2),rgba(255, 37, 255, 0.2))',
                'Mobile':'linear-gradient(to left, rgb(0, 0, 255),rgb(255, 37, 255))'
               },
      },
      Listener:{
        
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','MoreAboutButton'],

    },
   
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        },
        SceneTransition:{
          OldScene:'LandingPageMinimalistMainScene',
          NewScene:'GeneralMoreAboutScene',
          TransitionAnimation:{
            In:'ScenesTransitionsInAnimation',
            Out:'ScenesTransitionsOutAnimation',
            NewElement:{
              Id:'TransitionAnimationsElement',
              Type:'div',
              Style:{
                position:'fixed',
                width:'10%',
                top:'0%',
                left:'0%',
                pointerEvents:'none',
                zIndex:'2000',
                maxWidth:'100vw',
                maxHeight:'100vh',
                height:'10%',
                scale:'0',
                background:['radial-gradient(circle,rgba(234, 221, 238, 0.94),rgb(246, 246, 247),rgba(255, 255, 255, 0),rgba(2, 127, 211, 0))',
                  'radial-gradient(circle,rgb(0, 0, 0),rgba(255, 255, 255, 0))'],
              }
            }
          },
          TransitionElement:{
            Id:'LogoTransitionElement',
            Type:'div',
            Style:{
               position:'fixed',
      width:{'Mobile':'3%','Pc':'50%'},
      height:{'Mobile':'1%','Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:'translate(-60%,-50%)',
        borderRadius:'100px',
        zIndex:'50000',
        opacity:'0',
        top:'50vh',
        left:'50vw',
            },
        InAnimation:'FadeInAnimation',
        OutAnimation:'FadeOutAnimation',
          }
        }
      },
      Childs:{
        MoreAboutText:{
          Id:`MoreAboutText`,
          Type:'div',
          Style:{
           position:'absolute',
              left:'50%',
              top:'50%',
              transform:'translate(-50%,-50%)',
              textAlign:'center',
              color:['black','white'],
                fontSize:{'Pc':'15px','Mobile':{'Portrait':'15px','Landscape':'15px'}},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
            width:'100%',
            pointerEvents:'none',
          },
          Text:`Saiba Mais`,
        }
      }
    },
    MainDescText:{
    Id:'MainDescText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':{'Portrait':'15%','Landscape':'11%'},'Pc':'18%'},
      left:{'Mobile':'13%','Pc':'5%'},
      fontSize:{'Mobile':'1rem','Pc':'22px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':{'Portrait':'80%','Landscape':'40%'},'Pc':'35%'},
       fontFamily: '"Delius", cursive',
       fontOpticalSizing: 'auto',
      fontWeight: '700',
      fontStyle: 'normal',
       opacity:'0',
            cursor:'default',
            zIndex:'25',
    },
     Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','MainDescText'],

    }
   },
    Text:"Somos uma clínica de neuropedagogia especializada psicologia, pedagogia, autismo e educação especial, localizada em Não-Me-Toque/RS.",
    },
    MainDescText2:{
    Id:'MainDescText2',
    Type:'div',
    Style:{
      position:'absolute',
      opacity:'0',
      top:{'Mobile':'23.5%','Pc':'34%'},
      left:{'Mobile':'13%','Pc':'5%'},
      fontSize:{'Mobile':'1rem','Pc':'22px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
     width:{'Mobile':{'Portrait':'80%','Landscape':'40%'},'Pc':'35%'},
        fontFamily: '"delius", cursive',
       fontOpticalSizing: 'auto',
      fontWeight: '700',
      fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            
         
      
    },
     Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','MainDescText2'],

    }
   },
    Text:"Atuamos com avaliações e intervenções personalizadas, integrando educação, neurociência e psicologia para atender às necessidades individuais de cada pessoa.Nosso trabalho é voltado à promoção do desenvolvimento cognitivo, emocional e acadêmico, em um ambiente acolhedor, ético e fundamentado cientificamente.",
    }
   }
  },
  SpecsContainer:{
   Id:'SpecsContainer',
   Type:'div',
   Style:{
    position:'relative',
    left:'0%',
     marginTop:'-18.5%',
    //top:{'Mobile':'81%','Pc':'116%'},
    height:{'Mobile':{'Portrait':'210%','Landscape':'900%'},'Pc':'210%'},
    //borderTop:"1px solid red",
    width:'100%',
    zIndex:'10',
    backgroundColor:['white','rgb(17,17,17)'],
    // backgroundImage:{'Pc':
     // ["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
     // 'Mobile':["url('./Images/GradientMinimalistLightMobile.png')","url('./Images/GradientMinimalistDarkMobile.png')"]},
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        

   
   },
   
   Childs:{
    SpecsLetter:{
      Id:'SpecsLetter',
      Type:'div',
      Text:'Especialidades',
      Style:{
         position:'absolute',
            top:{'Mobile':'0%','Pc':'5%'},
            left:'50%',
            transform:'translate(-50%,0%)',
            color:['black','white'],
            fontSize:{'Pc':'40px','Mobile':'31px'},
            fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '400',
            fontStyle: 'normal',
           // textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            zIndex:'20',
            cursor:'default',
            opacity:'0',
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SpecsLetter'],

    }
   },
    },
    SpecsLetterDecoration1:{
      Id:'SpecsLetterDecoration1',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':{'Portrait':'0%','Landscape':'22%'},'Pc':'29%'},
      top:{'Mobile':{'Portrait':'-10%','Landscape':'-6%'},'Pc':'2%'},
      backgroundImage:"url('./Images/FlowersAsset1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{'Mobile':'contain','Pc':'contain'},
        width:{'Mobile':{'Portrait':'21%','Landscape':'13%'},'Pc':'10%'},
        height:{'Mobile':{'Portrait':'21%','Landscape':'13%'},'Pc':'10%'},
        zIndex:'10',
         opacity:'0',
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SpecsLetterDecoration1'],

    }
   },
    },
    NeuroPedagogyLetter:{
      Id:'NeuroPedagogyLetter',
      type:'div',
      Text:'Neuropedagogia',
      Style:{
      color:['black','white'],
      fontSize:{'Mobile':{'Portrait':'12px','Landscape':'18px'},'Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            //textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':'4.5%','Pc':'15%'},
            left:{'Mobile':'20%','Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'60%','Pc':'60%'},
              opacity:'0',

      },
       Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','NeuroPedagogyLetter'],

    }
   },
    },
       NeuroPedagogyLetterDecoration1:{
      Id:'NeuroPedagogyLetterDecoration1',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':{'Portrait':'16%','Landscape':'13%'},'Pc':'19%'},
      top:{'Mobile':'3%','Pc':'11%'},
      backgroundImage:"url('./Images/NeuroPedagogyAsset1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:{'Mobile':'8%','Pc':'7%'},
        height:{'Mobile':'2%','Pc':'7%'},
         opacity:'0',
        zIndex:'10',
       

      },
       Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','NeuroPedagogyLetterDecoration1'],

    }
   },
    },
    NeuroPedagogyImage:{
      Id:'NeuroPedagogyImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':'65%',Pc:'40%'},
        height:{'Mobile':'16%',Pc:'40%'},
        top:{'Mobile':'6%',Pc:'16%'},
        left:{'Mobile':'35%',Pc:'55%'},
         backgroundImage:"url('./Images/NeuroPedagogyImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
         opacity:'0',
        backgroundSize:'cover',
      },
        Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','NeuroPedagogyImage'],

    }
   },
    },
   NeuroPedagogyText:{
    Id:'NeuroPedagogyText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'6%','Pc':'25%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':'13%','Pc':'30%'},
      fontSize:{'Mobile':{'Portrait':'0.7rem','Landscape':'1.2rem'},'Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'40%','Pc':'30%'},
      opacity:'0',
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','NeuroPedagogyText'],

    }
   },
    Text:"Avaliação e intervenção em dificuldades de aprendizagem, com estratégias personalizadas para o desenvolvimento cognitivo.",
    },
    NeuroPedagogyMoreAboutButton:{
      Id:'NeuroPedagogyMoreAboutButton',
      Type:'div',
      Style:{
        boxShadow:'rgba(0,0,0,0.2) 2px 10px 10px',
               width:{'Pc':'14%','Mobile':{'Portrait':'17%','Landscape':'18%'}},
               height:'2%',
               position:'absolute',
               opacity:'0',
               top:{'Pc':'40%','Mobile':{'Portrait':'14%','Landscape':'14%'}},
               left:{'Pc':'40%','Mobile':{'Portrait':'18%','Landscape':'27%'}},
               transform:'translate(-50%,-50%)',
              
      },
      Childs:{
       NeuroPedagogyMoreAboutButtonText:{
        Id:"NeuroPedagogyMoreAboutButtonText",
        Type:`div`,
        Style:{
 position:'absolute',
              left:'50%',
              top:'50%',
              color:['black','white'],
              transform:'translate(-50%,-50%)',
              textAlign:'center',
                fontSize:{'Pc':'15px','Mobile':'12px'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
            width:'100%',
            pointerEvents:'none',
        },
        Text:`Saiba Mais`,
       },
      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        },
        
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','NeuroPedagogyMoreAboutButton'],

    
   },
      }
    },
     ClinicPsicLetter:{
      Id:'ClinicPsicLetter',
      type:'div',
      Text:'Psicanálise Clínica',
      Style:{
      color:['black','white'],
      fontSize:{'Mobile':'1rem','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
           // textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            opacity:'0',
            top:{'Mobile':{'Portrait':'20%','Landscape':'20%'},'Pc':'50%'},
            left:{'Mobile':{'Portrait':'20%','Landscape':'20%'},'Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'60%','Pc':'60%'},

      },
        Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ClinicPsicLetter'],

    }
   },
    },
     ClinicPsicLetterDecoration1:{
      Id:'ClinicPsicLetterDecoration1',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':'14%','Pc':'20%'},
      top:{'Mobile':'19%','Pc':'48%'},
      backgroundImage:["url('./Images/PscikIcon1Dark.png')","url('./Images/PscikIcon1Light.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        opacity:'0',
       width:{'Mobile':{'Portrait':'8%','Landscape':'5%'},'Pc':'5%'},
        height:{'Mobile':'2%','Pc':'5%'},
        zIndex:'10',
       

      },
        Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ClinicPsicLetterDecoration1'],

    }
   },
    },

    ClinicPsicImage:{
      Id:'ClinicPsicImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':{'Portrait':'65%','Landscape':'65%'},Pc:'40%'},
        height:{'Mobile':{'Portrait':'16%','Landscape':'16%'},Pc:'40%'},
        top:{'Mobile':{'Portrait':'19%','Landscape':'19%'},Pc:'48%'},
        opacity:'0',
        left:{'Mobile':{'Portrait':'0%','Landscape':'6%'},Pc:'20%'},
         backgroundImage:"url('./Images/PisciImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      },
        Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ClinicPsicImage'],

    }
   },
    },
     ClinicPsicText:{
    Id:'ClinicPsicText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'23%','Pc':'57%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':{'Portrait':'57%','Landscape':'66%'},'Pc':'58%'},
      fontSize:{'Mobile':{'Portrait':'0.6rem','Landscape':'1.2rem'},'Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':{'Portrait':'40%','Landscape':'30%'},'Pc':'30%'},
     opacity:'0',
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ClinicPsicText'],

    }
   },
    Text:"Atendimento terapêutico focado em saúde emocional, autoconhecimento e elaboração de conflitos internos.",
    },
     ClinicPsicMoreAboutButton:{
      Id:'ClinicPsicMoreAboutButton',
      Type:'div',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':{'Portrait':'28%','Landscape':'31%'},'Pc':'67%'},
        left:{'Mobile':{'Portrait':'65%','Landscape':'71%'},'Pc':'65%'},
       // border:['solid 1px black','solid 1px white'],
        width:{'Mobile':{'Portrait':'17%','Landscape':'18%'},'Pc':'14%'},
        height:{'Mobile':{'Portrait':'2%','Landscape':'2%'},'Pc':'2%'},
        opacity:'0',
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'0.7rem'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
           // textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
       Childs:{
       ClinicPsicMoreAboutButtonText:{
        Id:"ClinicPsicMoreAboutButtonText",
        Type:`div`,
        Style:{
 position:'absolute',
              left:'50%',
              top:'50%',
              transform:'translate(-50%,-50%)',
              textAlign:'center',
              color:['black','white'],
                fontSize:{'Pc':'15px','Mobile':'12px'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
            width:'100%',
            pointerEvents:'none',
        },
        Text:`Saiba Mais`,
       },
      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        },
          
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ClinicPsicMoreAboutButton'],

    
   },
      }
    },
   
   }
  },
  SpecsContainer2:{
   Id:'SpecsContainer2',
   Type:'div',
   Style:{
    position:'relative',
    left:'0%',
   // top:{'Mobile':{'Portrait':'152%','Landscape':'291%'},'Pc':'306%'},
    height:{'Mobile':{'Portrait':'210%','Landscape':'900%'},'Pc':'210%'},
    width:'100%',
     backgroundColor:['white','rgb(17,17,17)'],
    marginTop:{'Pc':'-7%','Mobile':{'Portrait':'-270%','Landscape':'-189%'}},
    zIndex:'11',
    // backgroundImage:{Pc:["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
    //  Mobile:{'Portrait':["url('./Images/GradientMinimalistLightMobile.png')","url('./Images/GradientMinimalistDarkMobile.png')"],'Landscape':["url('./Images/GradientMinimalistLightMobile.png')","url('./Images/GradientMinimalistDarkMobile.png')"]}
    // },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',


   
   },
   Childs:{
   
    SpecialEducationLetter:{
      Id:'SpecialEducationLetter',
      type:'div',
      Text:'Educação Especial',
      Style:{
      color:['black','white'],
      fontSize:{'Mobile':'1rem','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            opacity:'0',
            fontStyle: 'normal',
           // textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':{'Portrait':'4.5%','Landscape':'0%'},'Pc':'1%'},
            left:{'Mobile':{'Portrait':'20%','Landscape':'20%'},'Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'60%','Pc':'60%'},

      },
        Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SpecialEducationLetter'],

    }
   },
    },
       SpecialEducationLetterDecoration:{
      Id:'SpecialEducationLetterDecoration',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':{'Portrait':'10%','Landscape':'11%'},'Pc':'19%'},
      top:{'Mobile':{'Portrait':'3.4%','Landscape':'-0.7%'},'Pc':'-3%'},
      backgroundImage:"url('./Images/EducationIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        opacity:'0',
        width:{'Mobile':{'Portrait':'12%','Landscape':'8%'},'Pc':'8%'},
        height:{'Mobile':{'Portrait':'3.5%','Landscape':'2%'},'Pc':'8%'},
        zIndex:'10',
       

      },
        Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SpecialEducationLetterDecoration'],

    }
   },
    },
   SpecialEducationImage:{
      Id:'SpecialEducationImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':'65%',Pc:'40%'},
        height:{'Mobile':'16%',Pc:'40%'},
        top:{'Mobile':{'Portrait':'6%','Landscape':'0%'},Pc:'-4%'},
        left:{'Mobile':{'Portrait':'35%','Landscape':'35%'},Pc:'55%'},
         backgroundImage:"url('./Images/SpecialEducationImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        opacity:'0',
      },
        Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SpecialEducationImage'],

    }
   },
    },
   SpecialEducationText:{
    Id:'SpecialEducationText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':{'Portrait':'8%','Landscape':'1.5%'},'Pc':'9%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':{'Portrait':'13%','Landscape':'13%'},'Pc':'30%'},
      fontSize:{'Mobile':{'Portrait':'0.6rem','Landscape':'1.2rem'},'Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':{'Portrait':'40%','Landscape':'27%'},'Pc':'25%'},
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            opacity:'0',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SpecialEducationText'],

    }
   },
    Text:"Avaliação e intervenção em dificuldades de aprendizagem, com estratégias personalizadas para o desenvolvimento cognitivo.",
    },
     SpecialEducationMoreAboutButton:{
      Id:'SpecialEducationMoreAboutButton1',
      Type:'div',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':{'Portrait':'15%','Landscape':'10%'},'Pc':'25%'},
        left:{'Mobile':{'Portrait':'17%','Landscape':'17%'},'Pc':'34%'},
       // border:['solid 1px black','solid 1px white'],
        width:{'Mobile':{'Portrait':'17%','Landscape':'18%'},'Pc':'14%'},
        height:{'Mobile':{'Portrait':'2%','Landscape':'2%'},'Pc':'2%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'0.7rem'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
          //  textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            opacity:'0',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
       Childs:{
       SpecialEducationMoreAboutButtonText:{
        Id:"SpecialEducationMoreAboutButtonText",
        Type:`div`,
        Style:{
 position:'absolute',
              left:'50%',
              top:'50%',
              color:['black','white'],
              transform:'translate(-50%,-50%)',
              textAlign:'center',
                fontSize:{'Pc':'15px','Mobile':'12px'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
            width:'100%',
            pointerEvents:'none',
        },
        Text:`Saiba Mais`,
       },
      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        },
          
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SpecialEducationMoreAboutButton1'],

    
   },
      }
    },

     TEALetter:{
      Id:'TEALetterLetter',
      type:'div',
      Text:'Autismo(TEA)',
      Style:{
      color:['black','white'],
      fontSize:{'Mobile':'1rem','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
          //  textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
             opacity:'0',
            top:{'Mobile':{'Portrait':'22%','Landscape':'17%'},'Pc':'32%'},
            left:{'Mobile':{'Portrait':'20%','Landscape':'20%'},'Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'40%','Pc':'60%'},

      },
        Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TEALetterLetter'],

    }
   },
    },
     TEALetterLetterDecoration1:{
      Id:'TEALetterLetterDecoration1',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':{'Portrait':'12%','Landscape':'14%'},'Pc':'20%'},
      top:{'Mobile':{'Portrait':'21.6%','Landscape':'16%'},'Pc':'30%'},
      backgroundImage:"url('./Images/AutismIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
         opacity:'0',
        backgroundSize:'cover',
        width:{'Mobile':{'Portrait':'8%','Landscape':'6%'},'Pc':'5%'},
        height:{'Mobile':{'Portrait':'2%','Landscape':'2%'},'Pc':'5%'},
        zIndex:'10',
       

      },
        Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TEALetterLetterDecoration1'],

    }
   },
    },

    TEALetterImage:{
      Id:'TEALetterImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':{'Portrait':'65%','Landscape':'60%'},Pc:'35%'},
        height:{'Mobile':{'Portrait':'16%','Landscape':'16%'},Pc:'35%'},
        top:{'Mobile':{'Portrait':'23%','Landscape':'19%'},Pc:'34%'},
         opacity:'0',
        left:{'Mobile':{'Portrait':'0%','Landscape':'0%'},Pc:'20%'},
         backgroundImage:"url('./Images/AutismImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      },
        Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TEALetterImage'],

    }
   },
    },
     TEALetterText:{
    Id:'TEALetterText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':{'Portrait':'24%','Landscape':'21%'},'Pc':'39%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':{'Portrait':'57%','Landscape':'57%'},'Pc':'58%'},
      fontSize:{'Mobile':{'Portrait':'0.7rem','Landscape':'1.2rem'},'Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'40%','Pc':'30%'},
      opacity:'0',
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TEALetterText'],

    }
   },
    Text:"Acompanhamento especializado para pessoas no espectro autista, com foco em comunicação, socialização, autonomia e aprendizagem.",
    },
    TEALetterMoreAboutButton:{
      Id:'TEALetterMoreAboutButton',
      Type:'div',
      Style:{
        position:'absolute',
        color:['black','white'],
        opacity:'0',
        top:{'Mobile':{'Portrait':'30%','Landscape':'27%'},'Pc':'52%'},
        left:{'Mobile':{'Portrait':'65%','Landscape':'65%'},'Pc':'65%'},
      //  border:['solid 1px black','solid 1px white'],
        width:{'Mobile':{'Portrait':'17%','Landscape':'18%'},'Pc':'14%'},
        height:{'Mobile':{'Portrait':'2%','Landscape':'2%'},'Pc':'2%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'0.7rem'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
          //  textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
       Childs:{
       TEAMoreAboutButtonText:{
        Id:"TEAMoreAboutButtonText",
        Type:`div`,
        Style:{
 position:'absolute',
              left:'50%',
              top:'50%',
              color:['black','white'],
              transform:'translate(-50%,-50%)',
              textAlign:'center',
                fontSize:{'Pc':'15px','Mobile':'12px'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
            width:'100%',
            pointerEvents:'none',
        },
        Text:`Saiba Mais`,
       },
      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        },
      
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TEALetterMoreAboutButton'],

    
   },
      }
    },
  }
  },

   SpecsContainer3:{
   Id:'SpecsContainer3',
   Type:'div',
   Style:{
    position:'relative',
    left:'0%',
    marginTop:{'Pc':'-25%','Mobile':{'Portrait':'-250%','Landscape':'-200%'}},
     backgroundColor:['white','rgb(17,17,17)'],
   // top:{'Mobile':{'Portrait':'233%','Landscape':'170%'},'Pc':'454%'},
    height:{'Mobile':{'Portrait':'210%','Landscape':'900%'},'Pc':'210%'},
    width:'100%',
    zIndex:'11',
   // backgroundImage:{Pc:["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
    //  Mobile:{'Portrait':["url('./Images/GradientMinimalistLightMobile.png')","url('./Images/GradientMinimalistDarkMobile.png')"],'Landscape':["url('./Images/GradientMinimalistLightMobile.png')","url('./Images/GradientMinimalistDarkMobile.png')"]}
   // },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',


   
   },
   Childs:{
   
    ABALetter:{
      Id:'ABALetter',
      type:'div',
      Text:'ABA / AT (Análise do Comportamento Aplicada)',
      Style:{
      color:['black','white'],
      fontSize:{'Mobile':'1rem','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
          //  textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':{'Portrait':'4.5%','Landscape':'4.5%'},'Pc':'1%'},
               opacity:'0',
            left:{'Mobile':{'Portrait':'20%','Landscape':'20%'},'Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'60%','Pc':'60%'},

      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ABALetter'],

    }
   },
    },
      ABALetterDecoration:{
      Id:'ABALetterDecoration',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':{'Portrait':'7%','Landscape':'11%'},'Pc':'19%'},
      top:{'Mobile':{'Portrait':'3%','Landscape':'2.5%'},'Pc':'-1%'},
      backgroundImage:"url('./Images/ABAIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
           opacity:'0',
        backgroundSize:'cover',
        width:{'Mobile':{'Portrait':'12%','Landscape':'6%'},'Pc':'5%'},
        height:{'Mobile':{'Portrait':'3.5%','Landscape':'3%'},'Pc':'5%'},
        zIndex:'10',
       

      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ABALetterDecoration'],

    }
   },
    },
   ABAImage:{
      Id:'ABAImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':{'Portrait':'65%','Landscape':'65%'},Pc:'33%'},
        height:{'Mobile':{'Portrait':'16%','Landscape':'16%'},Pc:'33%'},
        top:{'Mobile':{'Portrait':'6%','Landscape':'6%'},Pc:'4%'},
           opacity:'0',
        left:{'Mobile':{'Portrait':'35%','Landscape':'35%'},Pc:'55%'},
         backgroundImage:"url('./Images/ABAImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ABAImage'],

    }
   },
    },
   ABAText:{
    Id:'ABAText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'9%','Pc':'9%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':'13%','Pc':'30%'},
      fontSize:{'Mobile':{'Portrait':'0.6rem','Landscape':'1.2rem'},'Pc':'21px'},
      opacity:'0',
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'40%','Pc':'25%'},
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
    Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ABAText'],

    }
   },
    Text:"Intervenções baseadas em evidências para desenvolvimento de habilidades, redução de comportamentos desafiadores e fortalecimento da autonomia.",
    },
     ABAMoreAboutButton:{
      Id:'ABAMoreAboutButton1',
      Type:'div',
      Style:{
        position:'absolute',
           opacity:'0',
        color:['black','white'],
        top:{'Mobile':{'Portrait':'17%','Landscape':'15%'},'Pc':'25%'},
        left:{'Mobile':{'Portrait':'15%','Landscape':'15%'},'Pc':'34%'},
       // border:['solid 1px black','solid 1px white'],
        width:{'Mobile':{'Portrait':'17%','Landscape':'18%'},'Pc':'14%'},
        height:{'Mobile':{'Portrait':'2%','Landscape':'2%'},'Pc':'2%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'0.7rem'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
          //  textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
       Childs:{
       ABAMoreAboutButtonText:{
        Id:"ABAMoreAboutButtonText",
        Type:`div`,
        Style:{
 position:'absolute',
              left:'50%',
              top:'50%',
              color:['black','white'],
              transform:'translate(-50%,-50%)',
              textAlign:'center',
                fontSize:{'Pc':'15px','Mobile':'12px'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
            width:'100%',
            pointerEvents:'none',
        },
        Text:`Saiba Mais`,
       },
      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        },
      
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ABAMoreAboutButton1'],

    
   },
      }
    },
     TerapyLetter:{
      Id:'TerapyLetter',
      type:'div',
      Text:'Terapia Comportamental',
      Style:{
      color:['black','white'],
      fontSize:{'Mobile':'1rem','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
             opacity:'0',
           // textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':{'Portrait':'22%','Landscape':'22%'},'Pc':'32%'},
            left:{'Mobile':{'Portrait':'20%','Landscape':'20%'},'Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'60%','Pc':'60%'},

      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TerapyLetter'],

    }
   },
    },
     TerapyLetterDecoration1:{
      Id:'TerapyLetterDecoration1',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':{'Portrait':'10%','Landscape':'11%'},'Pc':'20%'},
      top:{'Mobile':{'Portrait':'21%','Landscape':'20.7%'},'Pc':'30.9%'},
      backgroundImage:"url('./Images/TerapyIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
         opacity:'0',
        backgroundSize:'cover',
        width:{'Mobile':{'Portrait':'8%','Landscape':'8%'},'Pc':'5%'},
        height:{'Mobile':{'Portrait':'2%','Landscape':'3%'},'Pc':'5%'},
        zIndex:'10',
       

      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TerapyLetterDecoration1'],

    }
   },
    },

    TerapyImage:{
      Id:'TerapyImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':{'Portrait':'65%','Landscape':'65%'},Pc:'35%'},
        height:{'Mobile':{'Portrait':'16%','Landscape':'16%'},Pc:'35%'},
        top:{'Mobile':{'Portrait':'23%','Landscape':'23%'},Pc:'34%'},
         opacity:'0',
        left:{'Mobile':{'Portrait':'0%','Landscape':'0%'},Pc:'20%'},
         backgroundImage:"url('./Images/TherapyImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TerapyImage'],

    }
   },
    },
     TerapyText:{
    Id:'TerapyText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':{'Portrait':'24%','Landscape':'24%'},'Pc':'39%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':{'Portrait':'57%','Landscape':'57%'},'Pc':'58%'},
       opacity:'0',
      fontSize:{'Mobile':{'Portrait':'0.6rem','Landscape':'1.2rem'},'Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'40%','Pc':'30%'},
     
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
    Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TerapyText'],

    }
   },
    Text:"Trabalho com emoções, comportamentos, rotina, autorregulação e habilidades sociais.",
    },
   TerapyMoreAboutButton:{
      Id:'TerapyMoreAboutButton',
      Type:'div',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':{'Portrait':'30%','Landscape':'30%'},'Pc':'52%'},
        left:{'Mobile':{'Portrait':'65%','Landscape':'65%'},'Pc':'65%'},
       // border:['solid 1px black','solid 1px white'],
         opacity:'0',
        width:{'Mobile':{'Portrait':'17%','Landscape':'18%'},'Pc':'14%'},
        height:{'Mobile':{'Portrait':'2%','Landscape':'2%'},'Pc':'2%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'0.7rem'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
          //  textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
       Childs:{
       TerapyMoreAboutButtonText:{
        Id:"TerapyMoreAboutButtonText",
        Type:`div`,
        Style:{
 position:'absolute',
              left:'50%',
              top:'50%',
              color:['black','white'],
              transform:'translate(-50%,-50%)',
              textAlign:'center',
                fontSize:{'Pc':'15px','Mobile':'12px'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
            width:'100%',
            pointerEvents:'none',
        },
        Text:`Saiba Mais`,
       },
      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        },
        
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TerapyMoreAboutButton'],

    
   },
      }
    },

  }},
  SpecsContainer4:{
   Id:'SpecsContainer4',
   Type:'div',
   Style:{
    position:'relative',
    left:'0%',
     backgroundColor:['white','rgb(17,17,17)'],
   marginTop:{'Pc':'-25%','Mobile':{'Portrait':'-250%','Landscape':'-200%'}},
   // top:{'Mobile':'311%','Pc':'596%'},
    height:{'Mobile':{'Portrait':'210%','Landscape':'900%'},'Pc':'210%'},
    width:'100%',
    opacity:{'Pc':'1','Mobile':'1'},
    zIndex:'12',
    // backgroundImage:{'Pc':
     // ["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
      //'Mobile':["url('./Images/GradientMinimalistLightMobile.png')","url('./Images/GradientMinimalistDarkMobile.png')"]},
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',


   
   },
   Childs:{
   
    ParentLetter:{
      Id:'ParentLetter',
      type:'div',
      Text:'Orientação Parental',
      Style:{
      color:['black','white'],
      fontSize:{'Mobile':'1rem','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
             opacity:'0',
            fontStyle: 'normal',
           // textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':{'Portrait':'4.5%','Landscape':'4.5%'},'Pc':'1%'},
            left:{'Mobile':{'Portrait':'20%','Landscape':'20%'},'Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'60%','Pc':'60%'},

      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ParentLetter'],

    }
   },
    },
      ParentLetterDecoration:{
      Id:'ParentLetterDecoration',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':{'Portrait':'12%','Landscape':'12%'},'Pc':'19%'},
      top:{'Mobile':{'Portrait':'3.5%','Landscape':'3.5%'},'Pc':'-1%'},
       opacity:'0',
      backgroundImage:"url('./Images/ParentIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:{'Mobile':{'Portrait':'8%','Landscape':'8%'},'Pc':'7%'},
        height:{'Mobile':{'Portrait':'2%','Landscape':'2%'},'Pc':'7%'},
        zIndex:'10',
       

      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ParentLetterDecoration'],

    }
   },
    },
   ParentImage:{
      Id:'ParentImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':{'Portrait':'65%','Landscape':'65%'},Pc:'33%'},
        height:{'Mobile':{'Portrait':'16%','Landscape':'16%'},Pc:'33%'},
        top:{'Mobile':{'Portrait':'6%','Landscape':'6%'},Pc:'4%'},
         opacity:'0',
        left:{'Mobile':{'Portrait':'35%','Landscape':'35%'},Pc:'55%'},
         backgroundImage:"url('./Images/ParentImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ParentImage'],

    }
   },
    },
   ParentText:{
    Id:'ParentText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'7%','Pc':'9%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':'13%','Pc':'30%'},
      fontSize:{'Mobile':{'Portrait':'0.7rem','Landscape':'1.2rem'},'Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'30%','Pc':'25%'},
      padding:'1%',
       opacity:'0',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
    Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ParentText'],

    }
   },
    Text:"Suporte prático para pais e responsáveis, com estratégias para o dia a dia e fortalecimento do vínculo familiar.",
    },
     ParentMoreAboutButton:{
      Id:'ParentMoreAboutButton1',
      Type:'div',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':{'Portrait':'15%','Landscape':'15%'},'Pc':'25%'},
        left:{'Mobile':{'Portrait':'15%','Landscape':'15%'},'Pc':'34%'},
       // border:['solid 1px black','solid 1px white'],
         opacity:'0',
        width:{'Mobile':{'Portrait':'17%','Landscape':'18%'},'Pc':'14%'},
        height:{'Mobile':{'Portrait':'2%','Landscape':'2%'},'Pc':'2%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'0.7rem'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
          //  textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
       Childs:{
      ParentMoreAboutButtonText:{
        Id:"ParentMoreAboutButtonText",
        Type:`div`,
        Style:{
 position:'absolute',
              left:'50%',
              top:'50%',
              color:['black','white'],
              transform:'translate(-50%,-50%)',
              textAlign:'center',
                fontSize:{'Pc':'15px','Mobile':'12px'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
            width:'100%',
            pointerEvents:'none',
        },
        Text:`Saiba Mais`,
       },
      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        },
        
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ParentMoreAboutButton1'],

    
   },
      }
    },
    TDAHLetter:{
      Id:'TDAHLetter',
      type:'div',
      Text:'TDAH',
      Style:{
      color:['black','white'],
      fontSize:{'Mobile':'1rem','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
             opacity:'0',
           // textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':{'Portrait':'22%','Landscape':'22%'},'Pc':'32%'},
            left:{'Mobile':{'Portrait':'20%','Landscape':'20%'},'Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'60%','Pc':'60%'},

      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TDAHLetter'],

    }
   },
    },
     TDAHLetterDecoration1:{
      Id:'TDAHLetterDecoration1',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':{'Portrait':'10%','Landscape':'8%'},'Pc':'17%'},
      top:{'Mobile':{'Portrait':'21%','Landscape':'20%'},'Pc':'27%'},
      backgroundImage:"url('./Images/TDAHIcon.png')",
        backgroundRepeat:'no-repeat',
         opacity:'0',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:{'Mobile':{'Portrait':'12%','Landscape':'12%'},'Pc':'9%'},
        height:{'Mobile':{'Portrait':'4%','Landscape':'4%'},'Pc':'9%'},
        zIndex:'10',
       

      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TDAHLetterDecoration1'],

    }
   },
    },

    TDAHImage:{
      Id:'TDAHImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':{'Portrait':'65%','Landscape':'65%'},Pc:'35%'},
        height:{'Mobile':{'Portrait':'16%','Landscape':'16%'},Pc:'35%'},
        top:{'Mobile':{'Portrait':'23%','Landscape':'23%'},Pc:'34%'},
        left:{'Mobile':{'Portrait':'0%','Landscape':'0%'},Pc:'20%'},
         opacity:'0',
         backgroundImage:"url('./Images/TDAHImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TDAHImage'],

    }
   },
    },
    TDAHText:{
    Id:'TDAHText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':{'Portrait':'24%','Landscape':'24%'},'Pc':'39%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':{'Portrait':'56%','Landscape':'56%'},'Pc':'58%'},
       opacity:'0',
      fontSize:{'Mobile':{'Portrait':'0.7rem','Landscape':'1.2rem'},'Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'40%','Pc':'30%'},
     
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
    Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TDAHText'],

    }
   },
    Text:"Acompanhamento especializado para atenção, organização, impulsividade e desempenho escolar.",
    },
   TDAHMoreAboutButton:{
      Id:'TDAHMoreAboutButton',
      Type:'div',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':{'Portrait':'30%','Landscape':'30%'},'Pc':'52%'},
        left:{'Mobile':{'Portrait':'75%','Landscape':'75%'},'Pc':'65%'},
       // border:['solid 1px black','solid 1px white'],
        width:{'Mobile':{'Portrait':'17%','Landscape':'18%'},'Pc':'14%'},
        height:{'Mobile':{'Portrait':'2%','Landscape':'2%'},'Pc':'2%'},
         opacity:'0',
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'0.7rem'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
           // textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
       Childs:{
       TDAHMoreAboutButtonText:{
        Id:"TDAHMoreAboutButtonText",
        Type:`div`,
        Style:{
 position:'absolute',
              left:'50%',
              top:'50%',
              transform:'translate(-50%,-50%)',
              textAlign:'center',
              color:['black','white'],
                fontSize:{'Pc':'15px','Mobile':'12px'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
            width:'100%',
            pointerEvents:'none',
        },
        Text:`Saiba Mais`,
       },
      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        },
        
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TDAHMoreAboutButton'],

    
   },
      }
    },
   TransitionDecoration:{
    Id:'TransitionDecoration1',
    Type:'div',
    Style:{
        position:'absolute',
        width:{'Mobile':{'Portrait':'100%','Landscape':'100%'},Pc:'100%'},
        height:{'Mobile':{'Portrait':'16%','Landscape':'16%'},Pc:'35%'},
        top:{'Mobile':{'Portrait':'37%','Landscape':'36%'},Pc:'53%'},
        left:{'Mobile':{'Portrait':'0%','Landscape':'0%'},Pc:'0%'},
         opacity:'0',
         zIndex:'-1',
         backgroundImage:["url('./Images/TransitionDecoration.png')","url('./Images/TransitionDecoration2.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
    },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TransitionDecoration1'],

    
   },
      }
   } 
  }},
  AboutMeContainer:{
    Id:'AboutMeContainer',
    Type:'div',
    Style:{
       position:'relative',
       marginTop:'-18%',
    left:'0%',
   //top:{'Mobile':'154%','Pc':'760%'},
    height:{'Mobile':'210%','Pc':'260%'},
    width:'100%',
    zIndex:'13',
    backgroundColor:[`white`,'rgb(17,17,17)'],
   
    //boxShadow:['rgba(0,0,0,0.4) 10px -10px 10px','rgba(0, 0, 0, 0.8) 10px -10px 10px'],
    display:{'Mobile':'none','Pc':'flex'},
    // backgroundImage:["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
    },
    Childs:{
    WhoIAmLetter:{
      Id:'WhoIAmLetter',
      Type:'div',
      Style:{
      position:'absolute',
      
      color:['black','white'],
      fontSize:{'Mobile':'11px','Pc':'40px'},
        fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '600',
      fontStyle: 'normal',
        //textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
        zIndex:'20',
        cursor:'default',
       top:{'Mobile':'0%','Pc':'5%'},
       left:{'Mobile':'50%','Pc':'22%'},
       transform:'translate(-50%,-50%)',
        // borderBottom:['solid 1px black','solid 1px white'],
         width:'55%',
         textAlign:'center',
         opacity:'0',
      },
      Text:'Quem Sou Eu?',
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','WhoIAmLetter'],

    }
   },
    },
    WhoIAmDecoration:{
     Id:'WhoIAmDecoration',
     Type:'div',
     Style:{
      display:'block',
      position:'absolute',
      zIndex:'100',
      left:{'Mobile':'23%','Pc':'5%'},
      top:{'Mobile':'20%','Pc':'2%'},
      backgroundImage:["url('./Images/WhoIAmDecoration.png')","url('./Images/WhoIAmDecoration.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
       width:{'Mobile':'8%','Pc':'5%'},
        height:{'Mobile':'2%','Pc':'5%'},
         opacity:'0',
        zIndex:'10',
     },
     Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','WhoIAmDecoration'],

    }
   },
    },
    SelfImage:{
      Id:'SelfImage',
      Type:'div',
      Style:{
        position:'relative',
        width:{'Mobile':'40%',Pc:'100%'},
        height:{'Mobile':'40%',Pc:'33%'},
        top:{'Mobile':'16%',Pc:'10%'},
        left:{'Mobile':'55%',Pc:'0%'},
        backgroundColor:['white','rgb(17,17,17)'],
         backgroundImage:["url('./Images/SelfImage.png')","url('./Images/SelfImage2.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        display:'block',
        marginBottom:'5%',
        backgroundSize:'cover',
      //  boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
       // border:'solid 1px black',
         opacity:'0',
        
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SelfImage'],

    }
   },
      
    },
    WhoIAmText:{
      Id:`WhoIAmText`,
      Type:`div`,
      Style:{
         whiteSpace:'pre-line',
            fontSize:{'Mobile':'11px','Pc':'1.3rem'},
            lineHeight:{'Mobile':'2','Pc':'1.1'},
          fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '600',
      fontStyle: 'normal',
          position:'absolute',
          fontStyle: 'normal',
          color:['black','white'],
          left:{'Mobile':'45%','Pc':'20%'},
          top:{'Mobile':'20%','Pc':'18%'},
           opacity:'0',
      },
        Text:
         `- Psicanalista;

          - Psicanalista especialista em 
            ansiedade e TDAH;

          - Neuropscicopedagoga Clínca;

          - Pós-Graduada em Autismo e ABA;

          - Especialista em educação inclusiva, 
            Alfabetização e letramento;,

          - Orientadora Parental e Consteladora Familiar;

          - Tarapeuta Comportamental;`,
            Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','WhoIAmText'],

    }
   },
    },
    SpikesDecoration:{
      Id:'SpikesDecoration',
      Type:'div',
      Style:{
        display:'none',
        backgroundImage:["url('./Images/Spikes1.png')","url('./Images/Spikes1Light.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        position:'absolute',
        
         opacity:'0',
         left:'0%',
        width:{'Mobile':'100%','Pc':'100%'},
        height:{'Mobile':'17%','Pc':'17%'},
        top:{'Mobile':'35%','Pc':'35%'},
        
      
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','SpikesDecoration'],

    }
   },
    },
    NameLetter:{
      Id:'NameLetter',
      Type:'div',
      Text:'Deisi Dillenburg',
      Style:{
        position:'absolute',
        display:'flex',
        color:['black','white'],
        fontSize:{'Mobile':'1rem','Pc':'2rem'},
         fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '800',
      fontStyle: 'normal',
       opacity:'0',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'25%'},
      transform:'translate(-50%,0%)',
      top:{'Mobile':'34%','Pc':'13%'},
       whiteSpace: 'pre-wrap',
        
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','NameLetter'],

    }
   },
    },
    MyBioLetter:{
      Id:'MyBioLetter',
      Type:'div',
      Style:{
      position:'absolute',
      fontSize:{'Mobile':'1rem','Pc':'2.5rem'},
      color:['black','white'],
     whiteSpace: 'pre-wrap',
        fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '700',
      fontStyle: 'normal',
       opacity:'0',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'15%'},
      top:{'Mobile':'34%','Pc':'46%'},
      },
      Text:`Minha Biografia!`,
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','MyBioLetter'],

    }
   },
    },
    MyBioDecoration1:{
      Id:'MyBioDecoration1',
      Type:'div',
      Style:{
         backgroundImage:["url('./Images/BioDeco1.png')","url('./Images/BioDeco1Light.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
         opacity:'0',
        position:'absolute',
        width:{'Mobile':'100%','Pc':'10%'},
        height:{'Mobile':'17%','Pc':'6%'},
        top:{'Mobile':'35%','Pc':'48%'},
        display:'none',
        transform:'rotate(10deg)',
        left:{'Mobile':'35%','Pc':'60%'},
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','MyBioDecoration1'],

    }
   },
    },
    MyBioText:{
      Id:'MyBioText',
      Type:'div',
      Text:`Quem sou eu? Me chamo Deisi Dillenburg, às vésperas de completar 49 anos, formada em Educação Especial- Licenciatura, pós Graduada em Neuropsicopedagogia, pós Graduada em Alfabetização e Letramento, pós Graduada em Autismo, pós Graduada em Educação Especial na perspectiva de uma Educação Inclusiva, pós Graduanda em Análise do Comportamento, Terapeuta Cognitiva Comportamental, Orientadora Parental, AT em ABA, além de vários cursos relacionados ao autismo e ao TDAH. 
      Mas nenhum desses títulos me deu tanta visão e tanta experiência como ser mãe do Thaigor, um autista 14 anos nível 2 de suporte, diagnosticado aos 2 anos e 8 meses como nível 3 de suporte.
      Não tenho 30 anos na educação especial, mas tenho 14 anos de práticas e tentativas, erros e acertos, não tenho mestrado, nem tão pouco doutorado, mas tenho a certeza de tudo que fiz com meu filho surtiu resultados incríveis. 
      Não tenho uma clínica chique, mas tenho um espaço acolhedor cheio de amor, compreensão, conversa que além da teoria apresenta a prática vivida.
      Não quero ser melhor ou pior, não quero o espaço de ninguém, só quero ajudar as tantas famílias que me procuram, dar a elas o suporte que não tive, o acolhimento que não recebi..
      Acompanho na consulta ao neuro sim se a família está insegura, acompanho a barbearia para auxiliar quando o corte de cabelo parece impossível, vou a escola, entro na sala de aula, converso com a direção, procuro fazer tudo que gostaria de ter recebido para meu filho, pq eu vivi na pele cada etapa desde o início, eu já passei noites chorando, já me senti culpada. 
      Faço as avaliações mas entrego mais que um relatório de avaliação diagnóstica, entrego acolhimento, me coloco a disposição se precisar conversar.
      Sou profissional, mas acima de tudo sou mãe atípica.`,
       Style:{
      position:'absolute',
      color:['black','white'],
      fontSize:{'Mobile':'1rem','Pc':'1.2'},
       whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'1.5'},
      fontFamily: "'Delius', cursive",
      fontWeight: '600',
      fontStyle: 'normal',
       opacity:'0',
      left:{'Mobile':'55%','Pc':'10%'},
      width:'60%',
      top:{'Mobile':'34%','Pc':'53%'},

    },
    Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','MyBioText'],

    }
   },
    },
    BackgroundBio:{
      Id:'BackgroundBio',
      Type:'div',
      Style:{
          backgroundImage:["url('./Images/BackgroundBio.png')","url('./Images/BackgroundBio.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        position:'absolute',
         opacity:'0',
        width:{'Mobile':'100%','Pc':'60%'},
        height:{'Mobile':'17%','Pc':'25%'},
        top:{'Mobile':'35%','Pc':'59%'},
        transform:'rotate(10deg)',
        left:{'Mobile':'35%','Pc':'70%'},
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','BackgroundBio'],

    }
   },
    },
  
    },
  },

  ContactContainer:{
   Id:'ContactContainer',
   Type:'div',
   Style:{
     position:'relative',
    left:'0%',
 
   // top:{'Mobile':'154%','Pc':'1000%'},
    height:{'Mobile':'210%','Pc':'250%'},
    width:'100%',
    zIndex:'14',
    backgroundColor:['white','rgb(17,17,17)'],
    display:{'Mobile':'none','Pc':'flex'},
    // backgroundImage:["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
   },
   Childs:{
     TransitionDecoration:{
     Id:'TransitionDecoration2',
     Type:'div',
     Style:{
        position:'absolute',
        width:{'Mobile':{'Portrait':'100%','Landscape':'100%'},Pc:'100%'},
        height:{'Mobile':{'Portrait':'16%','Landscape':'16%'},Pc:'35%'},
        top:{'Mobile':{'Portrait':'23%','Landscape':'23%'},Pc:'-22%'},
        left:{'Mobile':{'Portrait':'0%','Landscape':'0%'},Pc:'0%'},
         opacity:'0',
         zIndex:'-1',
         backgroundImage:["url('./Images/TransitionDecoration.png')","url('./Images/TransitionDecoration2.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
    },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TransitionDecoration2'],

    
   },
      }
   },
    ContactLetter:{
      Id:'ContactLetter',
      Type:'div',
      Style:{
     position:'absolute',
      fontSize:{'Mobile':'1rem','Pc':'2.2rem'},
      color:['black','white'],
     whiteSpace: 'pre-wrap',
       fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '400',
      fontStyle: 'normal',
      opacity:'0',
      transform:'translate(-50%,0%)',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'65%'},
      top:{'Mobile':'34%','Pc':'5%'},
      },
      Text:'Agende Sua Consulta!',
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ContactLetter'],

    }
   },

    },
     ContactDecoration1:{
      Id:'ContactDecoration1',
      Type:'div',
      Style:{
         backgroundImage:["url('./Images/ContactDecoration.png')","url('./Images/ContactDecoration.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        position:'absolute',
        opacity:'0',
        display:'none',
        width:{'Mobile':'100%','Pc':'5%'},
        height:{'Mobile':'17%','Pc':'3%'},
        top:{'Mobile':'35%','Pc':'4%'},
        transform:'rotate(10deg)',
        left:{'Mobile':'35%','Pc':'42%'},
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ContactDecoration1'],

    }
   },
    },
    LocalLetter:{
      Id:'LocalLetter',
      Type:'div',
      Text:'Endereço da clínica',
      Style:{
         position:'absolute',
      fontSize:{'Mobile':'1rem','Pc':'1.8rem'},
      color:['black','white'],
     whiteSpace: 'pre-wrap',
     opacity:'0',
        fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '600',
      fontStyle: 'normal',
      transform:'translate(-50%,0%)',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'58%'},
      top:{'Mobile':'34%','Pc':'12%'},
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','LocalLetter'],

    }
   },
    },
    ClinicAdressText:{
    Id:'ClinicAdressText',
    Type:'div',
    Text:`Não-Me-Toque/RS
........
........
........`,
     Style:{
       position:'absolute',
      color:['black','white'],
      fontSize:{'Mobile':'1rem','Pc':'1.5'},
       whiteSpace: 'pre-wrap',
       opacity:'0',
      lineHeight:{'Mobile':'2','Pc':'1.5'},
      fontFamily: "'Delius', cursive",
      fontWeight: '500',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'47%'},
      top:{'Mobile':'34%','Pc':'14.7%'},
     
    },
    Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ClinicAdressText'],

    }
   },
    },
    ClinicAdressMap:{
      Id:"ClinicAdressMap",
      Type:"iframe",
      Style:{
      position:`absolute`,
      top:{Mobile:'20%',Pc:"50%"},
      left:{Mobile:"15%",Pc:'28%'},
      opacity:'0',
      width:{Mobile:"30%",Pc:"60%"},
      height:{Mobile:`10%`,Pc:'29%'},
      border:[`solid 3px black`,`solid 1px white`],
      },
      Src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5846256170535!2d-52.81804822522044!3d-28.461935275758293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd4930d1aa4cb7%3A0xec4a7325745ef3cd!2sR.%20Pedro%20Augustin%20-%20N%C3%A3o-Me-Toque%2C%20RS%2C%2099470-000!5e0!3m2!1spt-BR!2sbr!4v1769355775168!5m2!1spt-BR!2sbr",
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ClinicAdressMap'],

    }
   },
    },
    ContactOptionsLetter:{
      Id:'ContactOptionsLetter',
      Type:'div',
      Text:'Meios De Contato',
      Style:{
         position:'absolute',
         opacity:'0',
      fontSize:{'Mobile':'1rem','Pc':'2rem'},
      color:['black','white'],
     whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'0.8'},
    fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '600',
      fontStyle: 'normal',
      transform:'translate(-50%,0%)',
      left:{'Mobile':'55%','Pc':'72%'},
      top:{'Mobile':'34%','Pc':'26%'},
      },
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ContactOptionsLetter'],

    }
   },
    },

    ContactOptionsInstaText:{
      Id:' ContactOptionsInstaText',
      Type:'div',
      Text:`@dheisedill`,
Style:{
position:'absolute',
      color:['black','white'],
      opacity:'0',
      fontSize:{'Mobile':'1rem','Pc':'1.4rem'},
       whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'4'},
     fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '800',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'64%'},
      top:{'Mobile':'34%','Pc':'30%'},
      cursor:'pointer'
      
     
},
  Listener:{
      UmbraHover:{
        Style:{
        color:'blue',
      
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://www.instagram.com/dheisedill/", "_blank")},
     
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation',' ContactOptionsInstaText'],

    
   },
    }

    },
     ContactOptionsEmailText:{
      Id:'ContactOptionsEmailText',
      Type:'div',
      Text:`neuroppdeisedill@gmail.com`,
Style:{
position:'absolute',
      color:['black','white'],
      fontSize:{'Mobile':'1rem','Pc':'1.4rem'},
       whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'4'},
      fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '800',
      fontStyle: 'normal',
      opacity:'0',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'64%'},
      top:{'Mobile':'34%','Pc':'42.5%'},
      cursor:'default'
      
     
},
 Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ContactOptionsEmailText'],

    }
   },
 

    },
     ContactOptionsWhatsText:{
      Id:'ContactOptionsWhatsText',
      Type:'div',
      Text:`54 99184-1827`,
Style:{
position:'absolute',
      color:['black','white'],
      pointer:'cursor',
      fontSize:{'Mobile':'1rem','Pc':'1.4rem'},
       whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'4'},
      fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '800',
      fontStyle: 'normal',
      opacity:'0',
      cursor:'pointer',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'64%'},
      top:{'Mobile':'34%','Pc':'36.4%'},
      
     
},
  Listener:{
      UmbraHover:{
        Style:{
        color:'blue',
        
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://wa.me/5554991841827", "_blank");},
       
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ContactOptionsWhatsText'],

    
   },
    }

    },
    InstagramContactIcon:{
      Id:'InstagramContactIcon',
      Type:'div',
      Style:{
         position:'absolute',
    left:{'Pc':'60%','Mobile':'60%'},
    top:{'Pc':'32%','Mobile':'32%'},
    width:{'Pc':'2%','Mobile':'4%'},
    opacity:'0',
    height:{'Pc':'2%','Mobile':'0.4%'},
      backgroundImage:"url('./Images/InstagramIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        pointerEvents:'none',
        backgroundSize:'contain',
      },
       Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','InstagramContactIcon'],

    }
   },
    },
     WhatsContactIcon:{
      Id:'WhatsContactIcon',
      Type:'div',
      Style:{
         position:'absolute',
    left:{'Pc':'58.9%','Mobile':'62%'},
    top:{'Pc':'38%','Mobile':'37%'},
    width:{'Pc':'5%','Mobile':'2%'},
    height:{'Pc':'3%','Mobile':'0.4%'},
    opacity:'0',
      backgroundImage:"url('./Images/WhatsIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        pointerEvents:'none'
      },
       Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','WhatsContactIcon'],

    }
   },
    },
     EmailContactIcon:{
      Id:'EmailContactIcon',
      Type:'div',
      Style:{
         position:'absolute',
    left:{'Pc':'59%','Mobile':'62%'},
    top:{'Pc':'44%','Mobile':'41%'},
    width:{'Pc':'5%','Mobile':'2%'},
    height:{'Pc':'3%','Mobile':'0.4%'},
    opacity:'0',
      backgroundImage:"url('./Images/EmailIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        pointerEvents:'none'
      },
       Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','EmailContactIcon'],

    }
   },
    },
    ContactBackground:{
      Id:'ContactBackground',
      Type:'div',
      Style:{
         backgroundImage:["url('./Images/ContactBackground.png')","url('./Images/ContactBackground2.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        opacity:'0',
        position:'absolute',
        width:{'Mobile':'100%','Pc':'100%'},
        height:{'Mobile':'17%','Pc':'40%'},
        top:{'Mobile':'35%','Pc':'5%'},
        left:{'Mobile':'35%','Pc':'0%'},
        pointerEvents:'none',
      },
       Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ContactBackground'],

    }
   },
    }
   

   },
  },
  FooterContainer:{
    Id:"FooterContainer",
    Type:'div',
    Style:{
    position:'relative',
    width:'100%',
    height:{'Mobile':'10%','Pc':'20%'},
    backgroundColor:['rgb(255, 255, 255)','rgb(20,20,20)'],
     boxShadow:['rgba(0,0,0,0.4) 10px -10px 10px','rgba(0, 0, 0, 0.8) 10px -10px 10px'],
   // top:'1230%',
    zIndex:'10000',
    left:'0%',

    },
    Childs:{
  FooterLogo:{
    Id:'FooterLogo',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Mobile':'3%','Pc':'15%'},
      height:{'Mobile':'1%','Pc':'80%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        borderRadius:'100px',
        zIndex:'500',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
  },
},
CreditsFooter:{
  Id:'CreditsFooter',
  Type:'div',
  Style:{
    position:'absolute',
    color:['rgb(10, 10, 10)','rgb(174,174,174)'],
    fontSize:{'Mobile':'11px','Pc':'11px'},
    top:'90%',
    left:'1%',
    transform:'translate(0%,-50%)',
    whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'1.5'},
      fontFamily: "'Delius', cursive",
      fontWeight: '400',
      fontStyle: 'normal',
      cursor:'pointer'

  },
  Text:'DioMhwl',
   Listener:{
      UmbraHover:{
        Style:{
        color:'blue',
         fontSize:{'Mobile':'11px','Pc':'17px'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://www.instagram.com/diomhwl/", "_blank")}
    }
}

},
  },
  
},

 


}
//Funções
document.addEventListener("DOMContentLoaded",()=>{
UmbraScenes.New("LandingPageMainScene");
UmbraScenes.New("GeneralMoreAboutScene",GeneralMoreAboutBluePrint,{
  position:'relative',
  width:'100%',
    backgroundColor:['white','rgb(20, 20, 20)'],
        //background:['linear-gradient(to left,rgba(106, 146, 255, 0.59),rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255))',
       //   'linear-gradient(to left,rgba(106, 146, 255, 0.59),rgb(0, 0, 0),rgb(0, 0, 0),rgb(0, 0, 0),rgb(0, 0, 0),rgb(rgb(0, 0, 0)55, 255, 255),rgb(0, 0, 0))'
       // ],
  display:'block',
  zIndex:'100'
  
});
UmbraScenes.New("LandingPageMinimalistMainScene",LandingPageMinimalistBluePrint,{
      position:'absolute',
        width:'100%',
        height:'100%',
        left:'0px',
        top:'0px',
        backgroundColor:['rgb(255, 255, 255)','rgb(17, 17, 17)']});
UmbraScenes.Active("LandingPageMinimalistMainScene");



let SlideForRightAnimationBluePrint = {
  Id:'SlideForRightAnimation',
    Properties:{
    left:{
        StartIn:-100,
        EndIn:'Actual',
        Metric:'%'
    },  
      opacity:{
      StartIn:0,
      EndIn:1,
      
    },
    scale:{
      StartIn:0,
      EndIn:1,
    }
    
},
   Repeat:0,
   Time:1000,
   FrameRate:60,
   Curve:'Ease-Out-Smooth',


};


let SlideForLeftAnimationBluePrint = {
  Id:'SlideForLeftAnimation',
    Properties:{
    left:{
        StartIn:100,
        EndIn:'Actual',
        Metric:'%'
    },  
   
  
    
},
   Repeat:0,
   Time:50,
   FrameRate:60
   //Curve:'Ease-In',


};

UmbraAnimations.New('SlideForRightAnimation',SlideForRightAnimationBluePrint);
UmbraAnimations.New('SlideForLeftAnimation',SlideForLeftAnimationBluePrint);

UmbraAnimations.GroupActive('SlideForRightAnimation',InicialAnimationsElements);

let ScenesTransitionsInAnimation = {
  Id:'ScenesTransitionsInAnimation',
  Properties:{
    scale:{
      StartIn:1000,
      EndIn:0,
    },
     opacity:{
      StartIn:1,
      EndIn:0,
    }
   
    
},
   Repeat:0,
   Time:200,
   FrameRate:60,
   Curve:'Ease-Out-Smooth'
   
}

let ScenesTransitionsOutAnimation = {
Id:'ScenesTransitionsOutAnimation',
    Properties:{
    scale:{
      StartIn:0,
      EndIn:1000,
    },
    opacity:{
      StartIn:1,
      EndIn:1,
    }
    
},
   Repeat:0,
   Time:1000,
   FrameRate:60,
   Curve:'Ease-In',
   

}

let FadeInAnimation = {
  Id:'FadeInAnimation',
    Properties:{
    opacity:{
      StartIn:0,
      EndIn:1,
    }
    
},
   Repeat:0,
   Time:500,
   FrameRate:60,
}


let FadeOutAnimation = {
  Id:'FadeInAnimation',
    Properties:{
    opacity:{
      StartIn:1,
      EndIn:0,
    },
   
    
},
   Repeat:0,
   Time:500,
   FrameRate:60,
}

UmbraAnimations.New('ScenesTransitionsOutAnimation',ScenesTransitionsOutAnimation);
UmbraAnimations.New('ScenesTransitionsInAnimation',ScenesTransitionsInAnimation);
UmbraAnimations.New('FadeInAnimation',FadeInAnimation);
UmbraAnimations.New('FadeOutAnimation',FadeOutAnimation);

if('scrollRestoration' in history){
  history.scrollRestoration = 'manual';
}


});

function ConceptThemeSwitchs(NewTheme){
if(NewTheme == 'Ludico'){
  ActualConceptTheme = 'Tema Lúdico';

UmbraScenes.TurnOff('LandingPageMinimalistMainScene');
UmbraScenes.New("LandingPageMainScene");
UmbraScenes.Active("LandingPageMainScene",{ 
   position:'absolute',
        width:'100%',
        height:'100%',
        left:'0px',
        top:'0px',
        backgroundColor:['rgb(255, 255, 255)','rgb(0,0,0)'],});
UmbraRender(LandingPageBluePrint);
} 
if(NewTheme == 'Minimalista'){
   ActualConceptTheme = 'Tema Minimalista'
UmbraDOMControl.Delete('LandingPageMainSceneContainer');
UmbraScenes.Delete('LandingPageMainScene');
UmbraScenes.Active("LandingPageMinimalistMainScene",{ 
   position:'absolute',
        width:'100%',
        height:'100%',
        left:'0px',
        top:'0px',
        backgroundColor:['rgb(255, 255, 255)','rgb(0,0,0)'],});

}
}


