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

let NeuroPedagogyPageDiagram = {
  MainParent:'NeuroPedagogyPageContainer',
  MainContainers:{
 RealHeader:{
    Id:'LandingPageMainHeader',
    Type:'div',
    Style:{
        zIndex:'10',
        position:'relative',
        display:'inline-block',
        width:'100%',
           backgroundColor:['white','rgb(17,17,17)'],
        height:{"Mobile":{'Portrait':'10vh','Landscape':'15vh'},"Pc":"15vh"},
      
    },
    Childs:{
     MainLogo:{
        Id:'MainLogo',
        Type:'div',
        Style:{
            position:'relative',
        display:'flex',
        width:{'Mobile':{'Portrait':'30%','Landscape':'14%'},'Pc':'20%'},
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
            right:{'Mobile':{'Portrait':'14%','Landscape':'7%'},'Pc':'17.5%'},
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
          OldScene:'NeuroPedagogyPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
        left:{'Mobile':'0%','Pc':'85vw'},

    }
  },
  BodyContainer:{
   Id:'BodyContainer',
   Type:'div',
   Style:{
     position:'relative',
        display:'block',
        width:'100%',
        backgroundColor:['white','rgba(17,17,17,1)'],
        minHeight:{'Pc':'300%','Mobile':{'Portrait':'200%','Landscape':'400%'}},
        //border:'solid 1px black',
   },
   Childs:{
    FirstImage:{
    Id:'FirstImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'100%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'30%','Landscape':'30%'}},
      left:{'Pc':'47%','Mobile':{'Portrait':'4%','Landscape':'48%'}},
      top:{'Pc':'7%','Mobile':{'Portrait':'30%','Landscape':'7%'}},
      backgroundImage:{Pc:["url('./Images/NeuroPedagogyImage2Light.png')","url('./Images/NeuroPedagogyImage2Dark.png')"],
          Mobile:{'Portrait':["url('./Images/NeuroPedagogyImage2LightMobile.png')","url('./Images/NeuroPedagogyImage2DarkMobile.png')"],
            'Landscape':["url('./Images/NeuroPedagogyImage2Light.png')","url('./Images/NeuroPedagogyImage2Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },
    SecondImage:{
    Id:'SecondImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'70%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'20%','Landscape':'30%'}},
      left:{'Pc':'1%','Mobile':{'Portrait':'30%','Landscape':'1%'}},
      top:{'Pc':'40%','Mobile':{'Portrait':'65%','Landscape':'42%'}},
      backgroundImage:{Pc:["url('./Images/NeuroPedagogyImage3Light.png')","url('./Images/NeuroPedagogyImage3Dark.png')"],
          Mobile:{'Portrait':["url('./Images/NeuroPedagogyImage3LightMobile.png')","url('./Images/NeuroPedagogyImage3DarkMobile.png')"],
            'Landscape':["url('./Images/NeuroPedagogyImage3Light.png')","url('./Images/NeuroPedagogyImage3Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },

    TopicOneContainer:{
      Id:'TopicOneContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicOneTitle:{
          Id:'TopicOneTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'O Que é Neuropedagogia?',
        },
        TopicOneText:{
          Id:'TopicOneText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'80%','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'3%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"4%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`A neuropedagogia é uma área interdisciplinar que integra conhecimentos da educação, neurociência e psicologia para compreender como o cérebro aprende e se desenvolve.

Seu foco é identificar como cada pessoa processa informações, desenvolve habilidades cognitivas e enfrenta desafios no processo de aprendizagem, considerando aspectos emocionais, comportamentais e neurológicos.`,
        }
      }
    },
     TopicTwoContainer:{
      Id:'TopicTwoContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicTwoTitle:{
          Id:'TopicTwoTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"8%","Mobile":{'Portrait':'9%','Landscape':"8%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'Para quem é indicada?',
        },
        TopicTwoText:{
          Id:'TopicTwoText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"5%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.9rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`Crianças com dificuldades de aprendizagem

Suspeita ou diagnóstico de TDAH

Dislexia, discalculia e outras dificuldades específicas

Atrasos no desenvolvimento

Pessoas no espectro autista

Dificuldades de atenção, memória e organização

Baixo rendimento escolar sem causa aparente`,
        }
      }
    },
     TopicThreeContainer:{
      Id:'TopicThreeContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Mobile':{'Portrait':'100%','Landscape':''},'Pc':'0%'},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicThreeTitle:{
          Id:'TopicThreeTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"60%","Mobile":{'Portrait':'5%','Landscape':"60%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicThreeText'],

          },
          },
          Text:'Como funciona o atendimento?',
        },
        TopicThreeText:{
          Id:'TopicThreeText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'90%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'4%','Landscape':"60%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '600',
            fontStyle: 'normal',
          },
          
          Text:`O processo geralmente envolve:

✔ Avaliação do perfil cognitivo e de aprendizagem
✔ Identificação de dificuldades e potencialidades
✔ Plano de intervenção personalizado
✔ Estratégias práticas para escola e família
✔ Acompanhamento contínuo da evolução

Cada atendimento é individualizado, respeitando as necessidades e o ritmo de desenvolvimento de cada pessoa.`,
        }
      }
    },
     TopicFourContainer:{
      Id:'TopicFourContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        marginTop:{'Mobile':{'Portrait':'55%','Landscape':''},'Pc':'0%'},
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicFourTitle:{
          Id:'TopicFourTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'4%','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"60%","Mobile":{'Portrait':'5%','Landscape':"55%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.1rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            opacity:'0',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourTitle'],

          },
          },
          Text:'Qual o objetivo da Neuropedagogia?',
        },
        TopicFourText:{
          Id:'TopicFourText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              opacity:'0',
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'7%','Landscape':"55%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourText'],

          }
          },
          Text:`O principal objetivo é promover autonomia, segurança e qualidade no processo de aprendizagem, fortalecendo habilidades cognitivas e emocionais.

Mais do que melhorar o desempenho escolar, a neuropedagogia busca desenvolver confiança, autoestima e estratégias que acompanhem o indivíduo ao longo da vida.`,
        }
      }
    },
    TopicFiveContainer:{
      Id:'TopicFiveContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Pc':'0%','Mobile':{'Portrait':'10%','Landscape':'0%'}},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
      //  border:'solid 1px black',
      },
      Childs:{
        CTAButton:{
          Id:'CTAButton',
          Type:'div',
          Style:{
            position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            opacity:'0',
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              transform:'translate(-50%,-50%)',
              border:'solid 1px black',
              marginLeft:{'Pc':'50%','Mobile':{'Portrait':'50%','Landscape':'50%'}},
              backgroundColor:['rgb(255, 255, 255)','rgba(0, 0, 0, 0)'],
                 height:{'Pc':'16vh','Mobile':{'Portrait':'5vh','Landscape':'27vh'}},
              color:['black','white'],
                fontSize:{'Pc':'1.4rem','Mobile':'0.9rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            boxShadow:'rgba(0,0,0,0.8) 10px 10px 10px',
            fontStyle: 'normal',

            

          },
          Listener:{
  UmbraHover:{
        Style:{
        color:'orange',
        scale:'1.05',
         fontSize:{'Mobile':'11px','Pc':'1.6rem'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://wa.me/5554991841827", "_blank");},
       
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','CTAButton'],

    
   },
          },
         
          Childs:{
            CTAText:{
              Id:'CTAText',
              Type:'div',
              Style:{
                position:'absolute',
                top:'50%',
                transform:'translate(-50%,-50%)',
                left:'50%',
                pointerEvents:'none',
              },
               Text:'Agende Já Sua Consulta!',
            }
          }
        },
         TopicFiveText:{
          Id:'TopicFiveText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'-1%','Mobile':{'Portrait':'','Landscape':'-1%'}},
              textAlign:'start',
              color:['black','white'],
              marginLeft:'30%',
              paddingLeft:{'Pc':"0%","Mobile":{'Portrait':'','Landscape':"0%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.7rem','Mobile':'12px'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            opacity:'0',
            fontStyle: 'normal',
          },
          Text:`-> Clique nesse botão para ir direto ao nosso Whatsapp!`,
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFiveText'],

          }
        }
      }
       
      }
    },
    
    
  }
  
  },

  FooterContainer:{
     Id:'FooterContainer',
    Type:'div',
    Style:{
      position:'relative',
      display:'block',
      height:{'Mobile':{'Portrait':'8vh','Landscape':'20vh'},'Pc':'20vh'},
      borderTop:['solid 1px black','solid 1px black'],
       backgroundColor:['white','rgb(17,17,17)'],
      zIndex:'30'
    },

    Childs:{
       FooterLogo:{
    Id:'FooterLogo',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Mobile':{'Portrait':'25%','Landscape':'15%'},'Pc':'15%'},
      height:{'Mobile':{'Portrait':'80%','Landscape':'80%'},'Pc':'80%'},
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
  },


}


let PsicClinicPageDiagram = {
  MainParent:'PsicClinicPageContainer',
  MainContainers:{
 RealHeader:{
    Id:'LandingPageMainHeader',
    Type:'div',
    Style:{
        zIndex:'10',
        position:'relative',
        display:'inline-block',
        width:'100%',
           backgroundColor:['white','rgb(17,17,17)'],
        height:{"Mobile":{'Portrait':'10vh','Landscape':'15vh'},"Pc":"15vh"},
      
    },
    Childs:{
     MainLogo:{
        Id:'MainLogo',
        Type:'div',
        Style:{
            position:'relative',
        display:'flex',
        width:{'Mobile':{'Portrait':'30%','Landscape':'14%'},'Pc':'20%'},
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
            right:{'Mobile':{'Portrait':'14%','Landscape':'7%'},'Pc':'17.5%'},
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
          OldScene:'PsicClinicPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
        left:{'Mobile':'0%','Pc':'85vw'},

    }
  },
  BodyContainer:{
   Id:'BodyContainer',
   Type:'div',
   Style:{
     position:'relative',
        display:'block',
        width:'100%',
        backgroundColor:['white','rgba(17,17,17,1)'],
        minHeight:{'Pc':'300%','Mobile':{'Portrait':'200%','Landscape':'400%'}},
        //border:'solid 1px black',
   },
   Childs:{
    FirstImage:{
    Id:'FirstImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'100%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'30%','Landscape':'30%'}},
      left:{'Pc':'47%','Mobile':{'Portrait':'4%','Landscape':'48%'}},
      top:{'Pc':'7%','Mobile':{'Portrait':'28%','Landscape':'7%'}},
      backgroundImage:{Pc:["url('./Images/PiscClinicImage2Light.png')","url('./Images/PiscClinicImage2Dark.png')"],
          Mobile:{'Portrait':["url('./Images/PiscClinicImage2LightMobile.png')","url('./Images/PiscClinicImage2DarkMobile.png')"],
            'Landscape':["url('./Images/PiscClinicImage2Light.png')","url('./Images/PiscClinicImage2Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },
    SecondImage:{
    Id:'SecondImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'70%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'20%','Landscape':'30%'}},
      left:{'Pc':'1%','Mobile':{'Portrait':'30%','Landscape':'1%'}},
      top:{'Pc':'40%','Mobile':{'Portrait':'65%','Landscape':'42%'}},
      backgroundImage:{Pc:["url('./Images/PiscClinicImage3Light.png')","url('./Images/PiscClinicImage3Dark.png')"],
          Mobile:{'Portrait':["url('./Images/PiscClinicImage3LightMobile.png')","url('./Images/PiscClinicImage3DarkMobile.png')"],
            'Landscape':["url('./Images/PiscClinicImage3Light.png')","url('./Images/PiscClinicImage3Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },

    TopicOneContainer:{
      Id:'TopicOneContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicOneTitle:{
          Id:'TopicOneTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'O que é Psicanálise Clínica?',
        },
        TopicOneText:{
          Id:'TopicOneText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'80%','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'3%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"4%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`A psicanálise clínica é uma abordagem terapêutica que busca compreender os aspectos conscientes e inconscientes que influenciam pensamentos, emoções e comportamentos.

Por meio da escuta qualificada e do diálogo, o processo terapêutico permite que a pessoa compreenda conflitos internos, padrões repetitivos e experiências que impactam sua vida emocional e seus relacionamentos.`,
        }
      }
    },
     TopicTwoContainer:{
      Id:'TopicTwoContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicTwoTitle:{
          Id:'TopicTwoTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"8%","Mobile":{'Portrait':'9%','Landscape':"8%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'Para quem é indicada?',
        },
        TopicTwoText:{
          Id:'TopicTwoText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"5%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.9rem','Mobile':'0.6rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`A psicanálise clínica é indicada para:

Pessoas que enfrentam ansiedade, angústia ou tristeza persistente

Dificuldades nos relacionamentos

Conflitos familiares ou conjugais

Baixa autoestima ou insegurança

Processos de luto ou mudanças importantes

Dificuldades emocionais que afetam o desempenho escolar ou profissional

Quem busca autoconhecimento e desenvolvimento pessoal`,
        }
      }
    },
     TopicThreeContainer:{
      Id:'TopicThreeContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Mobile':{'Portrait':'80%','Landscape':''},'Pc':'0%'},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicThreeTitle:{
          Id:'TopicThreeTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"60%","Mobile":{'Portrait':'5%','Landscape':"60%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicThreeText'],

          },
          },
          Text:'Como funciona o atendimento?',
        },
        TopicThreeText:{
          Id:'TopicThreeText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'90%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'4%','Landscape':"60%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '600',
            fontStyle: 'normal',
          },
          
          Text:`O processo geralmente envolve:

✔ Sessões individuais em ambiente acolhedor e sigiloso
✔ Espaço de escuta livre e sem julgamentos
✔ Reflexão sobre experiências, emoções e padrões de comportamento
✔ Construção gradual de compreensão e ressignificação
✔ Acompanhamento contínuo conforme a necessidade de cada pessoa

O ritmo do processo respeita a singularidade de cada indivíduo.`,
        }
      }
    },
     TopicFourContainer:{
      Id:'TopicFourContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        marginTop:{'Mobile':{'Portrait':'55%','Landscape':''},'Pc':'0%'},
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicFourTitle:{
          Id:'TopicFourTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'4%','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"60%","Mobile":{'Portrait':'5%','Landscape':"55%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.1rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            opacity:'0',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourTitle'],

          },
          },
          Text:'Qual o objetivo da Psicanálise?',
        },
        TopicFourText:{
          Id:'TopicFourText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              opacity:'0',
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'7%','Landscape':"55%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourText'],

          }
          },
          Text:`O principal objetivo é promover autoconhecimento, equilíbrio emocional e maior consciência sobre si mesmo.

A psicanálise possibilita que a pessoa compreenda suas emoções, fortaleça sua identidade e desenvolva formas mais saudáveis de lidar com seus conflitos e relações.`,
        }
      }
    },
    TopicFiveContainer:{
      Id:'TopicFiveContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Pc':'0%','Mobile':{'Portrait':'10%','Landscape':'0%'}},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
      //  border:'solid 1px black',
      },
      Childs:{
        CTAButton:{
          Id:'CTAButton',
          Type:'div',
          Style:{
            position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            opacity:'0',
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              transform:'translate(-50%,-50%)',
              border:'solid 1px black',
              marginLeft:{'Pc':'50%','Mobile':{'Portrait':'50%','Landscape':'50%'}},
              backgroundColor:['rgb(255, 255, 255)','rgba(0, 0, 0, 0)'],
                height:{'Pc':'16vh','Mobile':{'Portrait':'5vh','Landscape':'27vh'}},
              color:['black','white'],
                fontSize:{'Pc':'1.4rem','Mobile':'0.9rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            boxShadow:'rgba(0,0,0,0.8) 10px 10px 10px',
            fontStyle: 'normal',

            

          },
          Listener:{
  UmbraHover:{
        Style:{
        color:'orange',
        scale:'1.05',
         fontSize:{'Mobile':'11px','Pc':'1.6rem'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://wa.me/5554991841827", "_blank");},
       
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','CTAButton'],

    
   },
          },
         
          Childs:{
            CTAText:{
              Id:'CTAText',
              Type:'div',
              Style:{
                position:'absolute',
                top:'50%',
                transform:'translate(-50%,-50%)',
                left:'50%',
                pointerEvents:'none',
              },
               Text:'Agende Já Sua Consulta!',
            }
          }
        },
         TopicFiveText:{
          Id:'TopicFiveText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'-1%','Mobile':{'Portrait':'','Landscape':'-1%'}},
              textAlign:'start',
              color:['black','white'],
              marginLeft:'30%',
              paddingLeft:{'Pc':"0%","Mobile":{'Portrait':'','Landscape':"0%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.7rem','Mobile':'12px'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            opacity:'0',
            fontStyle: 'normal',
          },
          Text:`-> Clique nesse botão para ir direto ao nosso Whatsapp!`,
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFiveText'],

          }
        }
      }
       
      }
    },
    
    
  }
  
  },

  FooterContainer:{
     Id:'FooterContainer',
    Type:'div',
    Style:{
      position:'relative',
      display:'block',
      height:{'Mobile':{'Portrait':'8vh','Landscape':'20vh'},'Pc':'20vh'},
      borderTop:['solid 1px black','solid 1px black'],
       backgroundColor:['white','rgb(17,17,17)'],
      zIndex:'30'
    },

    Childs:{
       FooterLogo:{
    Id:'FooterLogo',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Mobile':{'Portrait':'25%','Landscape':'15%'},'Pc':'15%'},
      height:{'Mobile':{'Portrait':'80%','Landscape':'80%'},'Pc':'80%'},
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
  },


}


let SpecialEducationPageDiagram = {
  MainParent:'SpecialEducationPageContainer',
  MainContainers:{
 RealHeader:{
    Id:'LandingPageMainHeader',
    Type:'div',
    Style:{
        zIndex:'10',
        position:'relative',
        display:'inline-block',
        width:'100%',
           backgroundColor:['white','rgb(17,17,17)'],
        height:{"Mobile":{'Portrait':'10vh','Landscape':'15vh'},"Pc":"15vh"},
      
    },
    Childs:{
     MainLogo:{
        Id:'MainLogo',
        Type:'div',
        Style:{
            position:'relative',
        display:'flex',
        width:{'Mobile':{'Portrait':'30%','Landscape':'14%'},'Pc':'20%'},
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
            right:{'Mobile':{'Portrait':'14%','Landscape':'7%'},'Pc':'17.5%'},
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
          OldScene:'SpecialEducationPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
        left:{'Mobile':'0%','Pc':'85vw'},

    }
  },
  BodyContainer:{
   Id:'BodyContainer',
   Type:'div',
   Style:{
     position:'relative',
        display:'block',
        width:'100%',
        backgroundColor:['white','rgba(17,17,17,1)'],
        minHeight:{'Pc':'300%','Mobile':{'Portrait':'200%','Landscape':'400%'}},
        //border:'solid 1px black',
   },
   Childs:{
    FirstImage:{
    Id:'FirstImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'100%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'30%','Landscape':'30%'}},
      left:{'Pc':'47%','Mobile':{'Portrait':'4%','Landscape':'48%'}},
      top:{'Pc':'7%','Mobile':{'Portrait':'27%','Landscape':'7%'}},
      backgroundImage:{Pc:["url('./Images/SpecialEducationImage2Light.png')","url('./Images/SpecialEducationImage2Dark.png')"],
          Mobile:{'Portrait':["url('./Images/SpecialEducationImage2LightMobile.png')","url('./Images/SpecialEducationImage2DarkMobile.png')"],
            'Landscape':["url('./Images/SpecialEducationImage2Light.png')","url('./Images/SpecialEducationImage2Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },
    SecondImage:{
    Id:'SecondImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'70%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'20%','Landscape':'30%'}},
      left:{'Pc':'1%','Mobile':{'Portrait':'30%','Landscape':'1%'}},
      top:{'Pc':'40%','Mobile':{'Portrait':'62%','Landscape':'42%'}},
      backgroundImage:{Pc:["url('./Images/SpecialEducationImage3Light.png')","url('./Images/SpecialEducationImage3Dark.png')"],
          Mobile:{'Portrait':["url('./Images/SpecialEducationImage3LightMobile.png')","url('./Images/SpecialEducationImage3DarkMobile.png')"],
            'Landscape':["url('./Images/SpecialEducationImage3Light.png')","url('./Images/SpecialEducationImage3Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },

    TopicOneContainer:{
      Id:'TopicOneContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicOneTitle:{
          Id:'TopicOneTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'O que é Educação Especial?',
        },
        TopicOneText:{
          Id:'TopicOneText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'80%','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'3%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"4%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`A Educação Especial é uma área dedicada ao atendimento de pessoas com necessidades educacionais específicas, promovendo inclusão, desenvolvimento e igualdade de oportunidades no processo de aprendizagem.

Seu objetivo é adaptar estratégias, recursos e metodologias para respeitar as particularidades cognitivas, emocionais e sociais de cada indivíduo, favorecendo seu desenvolvimento integral.`,
        }
      }
    },
     TopicTwoContainer:{
      Id:'TopicTwoContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicTwoTitle:{
          Id:'TopicTwoTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"8%","Mobile":{'Portrait':'9%','Landscape':"8%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'Para quem é indicada?',
        },
        TopicTwoText:{
          Id:'TopicTwoText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"5%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.9rem','Mobile':'0.6rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`A Educação Especial é indicada para:

Crianças e adolescentes com atrasos no desenvolvimento

Pessoas no espectro autista (TEA)

TDAH e dificuldades de atenção

Deficiência intelectual

Dificuldades significativas de aprendizagem

Transtornos do neurodesenvolvimento

Necessidades educacionais específicas no contexto escolar`,
        }
      }
    },
     TopicThreeContainer:{
      Id:'TopicThreeContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Mobile':{'Portrait':'90%','Landscape':'-10%'},'Pc':'0%'},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicThreeTitle:{
          Id:'TopicThreeTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"60%","Mobile":{'Portrait':'5%','Landscape':"60%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicThreeText'],

          },
          },
          Text:'Como funciona o atendimento?',
        },
        TopicThreeText:{
          Id:'TopicThreeText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'90%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'4%','Landscape':"60%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '600',
            fontStyle: 'normal',
          },
          
          Text:`O processo geralmente envolve:

✔ Avaliação das necessidades educacionais individuais
✔ Planejamento de estratégias personalizadas
✔ Adaptação de atividades e recursos pedagógicos
✔ Estímulo ao desenvolvimento cognitivo, social e emocional
✔ Orientação à família e parceria com a escola

Cada plano é estruturado de forma individualizada, respeitando o ritmo e as potencialidades de cada pessoa.`,
        }
      }
    },
     TopicFourContainer:{
      Id:'TopicFourContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        marginTop:{'Mobile':{'Portrait':'40%','Landscape':''},'Pc':'0%'},
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicFourTitle:{
          Id:'TopicFourTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'3%','Mobile':{'Portrait':'4%','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"60%","Mobile":{'Portrait':'5%','Landscape':"51%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.1rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            opacity:'0',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourTitle'],

          },
          },
          Text:'Qual o objetivo da Educação Especial?',
        },
        TopicFourText:{
          Id:'TopicFourText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              opacity:'0',
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'7%','Landscape':"55%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourText'],

          }
          },
          Text:`O principal objetivo é promover inclusão, autonomia e desenvolvimento global, garantindo que cada indivíduo tenha acesso a oportunidades de aprendizagem adequadas às suas necessidades.

Mais do que acompanhar conteúdos escolares, a Educação Especial busca fortalecer habilidades, autoestima e participação ativa na vida social e acadêmica.`,
        }
      }
    },
    TopicFiveContainer:{
      Id:'TopicFiveContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Pc':'0%','Mobile':{'Portrait':'10%','Landscape':'0%'}},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
      //  border:'solid 1px black',
      },
      Childs:{
        CTAButton:{
          Id:'CTAButton',
          Type:'div',
          Style:{
            position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            opacity:'0',
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              transform:'translate(-50%,-50%)',
              border:'solid 1px black',
              marginLeft:{'Pc':'50%','Mobile':{'Portrait':'50%','Landscape':'50%'}},
              backgroundColor:['rgb(255, 255, 255)','rgba(0, 0, 0, 0)'],
               height:{'Pc':'16vh','Mobile':{'Portrait':'5vh','Landscape':'27vh'}},
              color:['black','white'],
                fontSize:{'Pc':'1.4rem','Mobile':'0.9rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            boxShadow:'rgba(0,0,0,0.8) 10px 10px 10px',
            fontStyle: 'normal',

            

          },
          Listener:{
  UmbraHover:{
        Style:{
        color:'orange',
        scale:'1.05',
         fontSize:{'Mobile':'11px','Pc':'1.6rem'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://wa.me/5554991841827", "_blank");},
       
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','CTAButton'],

    
   },
          },
         
          Childs:{
            CTAText:{
              Id:'CTAText',
              Type:'div',
              Style:{
                position:'absolute',
                top:'50%',
                transform:'translate(-50%,-50%)',
                left:'50%',
                pointerEvents:'none',
              },
               Text:'Agende Já Sua Consulta!',
            }
          }
        },
         TopicFiveText:{
          Id:'TopicFiveText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'-1%','Mobile':{'Portrait':'','Landscape':'-1%'}},
              textAlign:'start',
              color:['black','white'],
              marginLeft:'30%',
              paddingLeft:{'Pc':"0%","Mobile":{'Portrait':'','Landscape':"0%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.7rem','Mobile':'12px'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            opacity:'0',
            fontStyle: 'normal',
          },
          Text:`-> Clique nesse botão para ir direto ao nosso Whatsapp!`,
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFiveText'],

          }
        }
      }
       
      }
    },
    
    
  }
  
  },

  FooterContainer:{
     Id:'FooterContainer',
    Type:'div',
    Style:{
      position:'relative',
      display:'block',
      height:{'Mobile':{'Portrait':'8vh','Landscape':'20vh'},'Pc':'20vh'},
      borderTop:['solid 1px black','solid 1px black'],
       backgroundColor:['white','rgb(17,17,17)'],
      zIndex:'30'
    },

    Childs:{
       FooterLogo:{
    Id:'FooterLogo',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Mobile':{'Portrait':'25%','Landscape':'15%'},'Pc':'15%'},
      height:{'Mobile':{'Portrait':'80%','Landscape':'80%'},'Pc':'80%'},
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
  },


}


let TEAPageDiagram = {
  MainParent:'TEAPageContainer',
  MainContainers:{
 RealHeader:{
    Id:'LandingPageMainHeader',
    Type:'div',
    Style:{
        zIndex:'10',
        position:'relative',
        display:'inline-block',
        width:'100%',
           backgroundColor:['white','rgb(17,17,17)'],
        height:{"Mobile":{'Portrait':'10vh','Landscape':'15vh'},"Pc":"15vh"},
      
    },
    Childs:{
     MainLogo:{
        Id:'MainLogo',
        Type:'div',
        Style:{
            position:'relative',
        display:'flex',
        width:{'Mobile':{'Portrait':'30%','Landscape':'14%'},'Pc':'20%'},
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
            right:{'Mobile':{'Portrait':'14%','Landscape':'7%'},'Pc':'17.5%'},
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
          OldScene:'TEAPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
        left:{'Mobile':'0%','Pc':'85vw'},

    }
  },
  BodyContainer:{
   Id:'BodyContainer',
   Type:'div',
   Style:{
     position:'relative',
        display:'block',
        width:'100%',
        backgroundColor:['white','rgba(17,17,17,1)'],
        minHeight:{'Pc':'300%','Mobile':{'Portrait':'200%','Landscape':'400%'}},
        //border:'solid 1px black',
   },
   Childs:{
    FirstImage:{
    Id:'FirstImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'100%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'30%','Landscape':'30%'}},
      left:{'Pc':'47%','Mobile':{'Portrait':'4%','Landscape':'48%'}},
      top:{'Pc':'7%','Mobile':{'Portrait':'30%','Landscape':'7%'}},
      backgroundImage:{Pc:["url('./Images/TEAImage2Light.png')","url('./Images/TEAImage2Dark.png')"],
          Mobile:{'Portrait':["url('./Images/TEAImage2LightMobile.png')","url('./Images/TEAImage2DarkMobile.png')"],
            'Landscape':["url('./Images/TEAImage2Light.png')","url('./Images/TEAImage2Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },
    SecondImage:{
    Id:'SecondImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'70%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'20%','Landscape':'30%'}},
      left:{'Pc':'1%','Mobile':{'Portrait':'30%','Landscape':'1%'}},
      top:{'Pc':'40%','Mobile':{'Portrait':'65%','Landscape':'42%'}},
      backgroundImage:{Pc:["url('./Images/TEAImage3Light.png')","url('./Images/TEAImage3Dark.png')"],
          Mobile:{'Portrait':["url('./Images/TEAImage3LightMobile.png')","url('./Images/TEAImage3DarkMobile.png')"],
            'Landscape':["url('./Images/TEAImage3Light.png')","url('./Images/TEAImage3Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },

    TopicOneContainer:{
      Id:'TopicOneContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicOneTitle:{
          Id:'TopicOneTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'O que é o Autismo (TEA)?',
        },
        TopicOneText:{
          Id:'TopicOneText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'80%','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'3%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"4%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`O Transtorno do Espectro Autista (TEA) é uma condição do neurodesenvolvimento que influencia a forma como a pessoa percebe o mundo, se comunica e interage socialmente.

Cada indivíduo no espectro é único, apresentando diferentes características, níveis de suporte e potencialidades. Por isso, o acompanhamento especializado é fundamental para promover desenvolvimento, autonomia e qualidade de vida.`,
        }
      }
    },
     TopicTwoContainer:{
      Id:'TopicTwoContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicTwoTitle:{
          Id:'TopicTwoTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"8%","Mobile":{'Portrait':'9%','Landscape':"1%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.1rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'Para quem é indicado o acompanhamento?',
        },
        TopicTwoText:{
          Id:'TopicTwoText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"5%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.9rem','Mobile':'0.6rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`O acompanhamento é indicado para:

Crianças com atraso na fala ou na interação social

Dificuldades na comunicação verbal e não verbal

Sensibilidade sensorial (sons, luzes, texturas)

Comportamentos repetitivos ou interesses restritos

Dificuldades de adaptação escolar

Adolescentes e adultos no espectro que buscam apoio no desenvolvimento social e emocional

Famílias que precisam de orientação e suporte`,
        }
      }
    },
     TopicThreeContainer:{
      Id:'TopicThreeContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Mobile':{'Portrait':'90%','Landscape':'-12%'},'Pc':'0%'},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicThreeTitle:{
          Id:'TopicThreeTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"60%","Mobile":{'Portrait':'5%','Landscape':"60%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicThreeText'],

          },
          },
          Text:'Como funciona o atendimento?',
        },
        TopicThreeText:{
          Id:'TopicThreeText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'90%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'4%','Landscape':"60%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '600',
            fontStyle: 'normal',
          },
          
          Text:`O processo geralmente envolve:

✔ Avaliação individual do perfil de desenvolvimento
✔ Plano de intervenção personalizado
✔ Estímulo à comunicação e habilidades sociais
✔ Desenvolvimento da autonomia e regulação emocional
✔ Orientação parental e parceria com a escola

As intervenções são estruturadas de forma individualizada, respeitando as necessidades, o ritmo e as potencialidades de cada pessoa.`,
        }
      }
    },
     TopicFourContainer:{
      Id:'TopicFourContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        marginTop:{'Mobile':{'Portrait':'50%','Landscape':''},'Pc':'0%'},
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicFourTitle:{
          Id:'TopicFourTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'4%','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'5%','Landscape':"55%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            opacity:'0',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourTitle'],

          },
          },
          Text:'Qual o objetivo do acompanhamento no TEA?',
        },
        TopicFourText:{
          Id:'TopicFourText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              opacity:'0',
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'7%','Landscape':"55%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourText'],

          }
          },
          Text:`O principal objetivo é promover desenvolvimento global, inclusão e autonomia, fortalecendo habilidades sociais, comunicativas, cognitivas e emocionais.

Mais do que trabalhar dificuldades, o foco está em valorizar potencialidades e oferecer suporte adequado para que a pessoa no espectro alcance seu máximo desenvolvimento.`,
        }
      }
    },
    TopicFiveContainer:{
      Id:'TopicFiveContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Pc':'0%','Mobile':{'Portrait':'10%','Landscape':'0%'}},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
      //  border:'solid 1px black',
      },
      Childs:{
        CTAButton:{
          Id:'CTAButton',
          Type:'div',
          Style:{
            position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            opacity:'0',
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              transform:'translate(-50%,-50%)',
              border:'solid 1px black',
              marginLeft:{'Pc':'50%','Mobile':{'Portrait':'50%','Landscape':'50%'}},
              backgroundColor:['rgb(255, 255, 255)','rgba(0, 0, 0, 0)'],
               height:{'Pc':'16vh','Mobile':{'Portrait':'5vh','Landscape':'27vh'}},
              color:['black','white'],
                fontSize:{'Pc':'1.4rem','Mobile':'0.9rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            boxShadow:'rgba(0,0,0,0.8) 10px 10px 10px',
            fontStyle: 'normal',

            

          },
          Listener:{
  UmbraHover:{
        Style:{
        color:'orange',
        scale:'1.05',
         fontSize:{'Mobile':'11px','Pc':'1.6rem'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://wa.me/5554991841827", "_blank");},
       
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','CTAButton'],

    
   },
          },
         
          Childs:{
            CTAText:{
              Id:'CTAText',
              Type:'div',
              Style:{
                position:'absolute',
                top:'50%',
                transform:'translate(-50%,-50%)',
                left:'50%',
                pointerEvents:'none',
              },
               Text:'Agende Já Sua Consulta!',
            }
          }
        },
         TopicFiveText:{
          Id:'TopicFiveText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'-1%','Mobile':{'Portrait':'','Landscape':'-1%'}},
              textAlign:'start',
              color:['black','white'],
              marginLeft:'30%',
              paddingLeft:{'Pc':"0%","Mobile":{'Portrait':'','Landscape':"0%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.7rem','Mobile':{'Portrait':'9px','Landscape':'12px'}},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            opacity:'0',
            fontStyle: 'normal',
          },
          Text:`-> Clique nesse botão para ir direto ao nosso Whatsapp!`,
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFiveText'],

          }
        }
      }
       
      }
    },
    
    
  }
  
  },

  FooterContainer:{
     Id:'FooterContainer',
    Type:'div',
    Style:{
      position:'relative',
      display:'block',
      height:{'Mobile':{'Portrait':'8vh','Landscape':'20vh'},'Pc':'20vh'},
      borderTop:['solid 1px black','solid 1px black'],
       backgroundColor:['white','rgb(17,17,17)'],
      zIndex:'30'
    },

    Childs:{
       FooterLogo:{
    Id:'FooterLogo',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Mobile':{'Portrait':'25%','Landscape':'15%'},'Pc':'15%'},
      height:{'Mobile':{'Portrait':'80%','Landscape':'80%'},'Pc':'80%'},
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
  },


}

let ABAPageDiagram = {
  MainParent:'ABAPageContainer',
  MainContainers:{
 RealHeader:{
    Id:'LandingPageMainHeader',
    Type:'div',
    Style:{
        zIndex:'10',
        position:'relative',
        display:'inline-block',
        width:'100%',
           backgroundColor:['white','rgb(17,17,17)'],
        height:{"Mobile":{'Portrait':'10vh','Landscape':'15vh'},"Pc":"15vh"},
      
    },
    Childs:{
     MainLogo:{
        Id:'MainLogo',
        Type:'div',
        Style:{
            position:'relative',
        display:'flex',
        width:{'Mobile':{'Portrait':'30%','Landscape':'14%'},'Pc':'20%'},
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
            right:{'Mobile':{'Portrait':'14%','Landscape':'7%'},'Pc':'17.5%'},
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
          OldScene:'ABAPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
        left:{'Mobile':'0%','Pc':'85vw'},

    }
  },
  BodyContainer:{
   Id:'BodyContainer',
   Type:'div',
   Style:{
     position:'relative',
        display:'block',
        width:'100%',
        backgroundColor:['white','rgba(17,17,17,1)'],
        minHeight:{'Pc':'300%','Mobile':{'Portrait':'200%','Landscape':'400%'}},
        //border:'solid 1px black',
   },
   Childs:{
    FirstImage:{
    Id:'FirstImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'100%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'30%','Landscape':'30%'}},
      left:{'Pc':'47%','Mobile':{'Portrait':'4%','Landscape':'48%'}},
      top:{'Pc':'7%','Mobile':{'Portrait':'26%','Landscape':'7%'}},
      backgroundImage:{Pc:["url('./Images/ABAImage2Light.png')","url('./Images/ABAImage2Dark.png')"],
          Mobile:{'Portrait':["url('./Images/ABAImage2LightMobile.png')","url('./Images/ABAImage2DarkMobile.png')"],
            'Landscape':["url('./Images/ABAImage2Light.png')","url('./Images/ABAImage2Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },
    SecondImage:{
    Id:'SecondImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'70%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'20%','Landscape':'30%'}},
      left:{'Pc':'1%','Mobile':{'Portrait':'30%','Landscape':'1%'}},
      top:{'Pc':'40%','Mobile':{'Portrait':'62%','Landscape':'42%'}},
      backgroundImage:{Pc:["url('./Images/ABAImage3Light.png')","url('./Images/ABAImage3Dark.png')"],
          Mobile:{'Portrait':["url('./Images/ABAImage3LightMobile.png')","url('./Images/ABAImage3DarkMobile.png')"],
            'Landscape':["url('./Images/ABAImage3Light.png')","url('./Images/ABAImage3Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },

    TopicOneContainer:{
      Id:'TopicOneContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicOneTitle:{
          Id:'TopicOneTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'O que é ABA / AT?',
        },
        TopicOneText:{
          Id:'TopicOneText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'80%','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'3%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"4%"}},
                fontSize:{'Pc':'0.9rem','Mobile':'0.55rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`A Análise do Comportamento Aplicada (ABA) é uma abordagem baseada em evidências científicas que utiliza princípios da ciência do comportamento para desenvolver habilidades e promover mudanças positivas.

O Acompanhamento Terapêutico (AT) complementa esse processo, oferecendo suporte individualizado em diferentes contextos, como escola, casa ou ambientes sociais, auxiliando na generalização das habilidades aprendidas.

Essa abordagem é amplamente utilizada no atendimento a pessoas com Transtorno do Espectro Autista (TEA) e outras condições do neurodesenvolvimento.`,
        }
      }
    },
     TopicTwoContainer:{
      Id:'TopicTwoContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicTwoTitle:{
          Id:'TopicTwoTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"8%","Mobile":{'Portrait':'9%','Landscape':"8%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'Para quem é indicada?',
        },
        TopicTwoText:{
          Id:'TopicTwoText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"5%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.9rem','Mobile':'0.6rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`A ABA / AT é indicada para:

Crianças e adolescentes no espectro autista (TEA)

Atrasos no desenvolvimento

Dificuldades de comunicação

Comportamentos desafiadores

Dificuldades de interação social

Necessidade de apoio em ambiente escolar

Desenvolvimento de autonomia e habilidades adaptativas`,
        }
      }
    },
     TopicThreeContainer:{
      Id:'TopicThreeContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Mobile':{'Portrait':'85%','Landscape':''},'Pc':'0%'},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicThreeTitle:{
          Id:'TopicThreeTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"60%","Mobile":{'Portrait':'5%','Landscape':"60%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicThreeText'],

          },
          },
          Text:'Como funciona o atendimento?',
        },
        TopicThreeText:{
          Id:'TopicThreeText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'90%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'4%','Landscape':"60%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '600',
            fontStyle: 'normal',
          },
          
          Text:`O processo geralmente envolve:

✔ Avaliação comportamental individualizada
✔ Definição de metas claras e mensuráveis
✔ Intervenções estruturadas e baseadas em evidências
✔ Ensino de habilidades sociais, comunicativas e acadêmicas
✔ Acompanhamento em diferentes ambientes (quando necessário)
✔ Orientação contínua à família

As estratégias são personalizadas, respeitando o perfil, as necessidades e o ritmo de cada indivíduo.`,
        }
      }
    },
     TopicFourContainer:{
      Id:'TopicFourContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        marginTop:{'Mobile':{'Portrait':'55%','Landscape':''},'Pc':'0%'},
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicFourTitle:{
          Id:'TopicFourTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'4%','Landscape':'2%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"60%","Mobile":{'Portrait':'5%','Landscape':"55%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.1rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            opacity:'0',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourTitle'],

          },
          },
          Text:'Qual o objetivo da ABA / AT?',
        },
        TopicFourText:{
          Id:'TopicFourText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              opacity:'0',
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'7%','Landscape':"55%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourText'],

          }
          },
          Text:`O principal objetivo é desenvolver habilidades funcionais, promover autonomia e melhorar a qualidade de vida.

A ABA busca fortalecer comportamentos positivos, ampliar repertórios de comunicação e interação social, além de reduzir comportamentos que dificultam o desenvolvimento e a inclusão.`,
        }
      }
    },
    TopicFiveContainer:{
      Id:'TopicFiveContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Pc':'0%','Mobile':{'Portrait':'10%','Landscape':'-6%'}},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
      //  border:'solid 1px black',
      },
      Childs:{
        CTAButton:{
          Id:'CTAButton',
          Type:'div',
          Style:{
            position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            opacity:'0',
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              transform:'translate(-50%,-50%)',
              border:'solid 1px black',
              marginLeft:{'Pc':'50%','Mobile':{'Portrait':'50%','Landscape':'50%'}},
              backgroundColor:['rgb(255, 255, 255)','rgba(0, 0, 0, 0)'],
               height:{'Pc':'16vh','Mobile':{'Portrait':'5vh','Landscape':'27vh'}},
              color:['black','white'],
                fontSize:{'Pc':'1.4rem','Mobile':'0.9rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            boxShadow:'rgba(0,0,0,0.8) 10px 10px 10px',
            fontStyle: 'normal',

            

          },
          Listener:{
  UmbraHover:{
        Style:{
        color:'orange',
        scale:'1.05',
         fontSize:{'Mobile':'11px','Pc':'1.6rem'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://wa.me/5554991841827", "_blank");},
       
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','CTAButton'],

    
   },
          },
         
          Childs:{
            CTAText:{
              Id:'CTAText',
              Type:'div',
              Style:{
                position:'absolute',
                top:'50%',
                transform:'translate(-50%,-50%)',
                left:'50%',
                pointerEvents:'none',
              },
               Text:'Agende Já Sua Consulta!',
            }
          }
        },
         TopicFiveText:{
          Id:'TopicFiveText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'-1%','Mobile':{'Portrait':'','Landscape':'-1%'}},
              textAlign:'start',
              color:['black','white'],
              marginLeft:'30%',
              paddingLeft:{'Pc':"0%","Mobile":{'Portrait':'','Landscape':"0%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.7rem','Mobile':'12px'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            opacity:'0',
            fontStyle: 'normal',
          },
          Text:`-> Clique nesse botão para ir direto ao nosso Whatsapp!`,
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFiveText'],

          }
        }
      }
       
      }
    },
    
    
  }
  
  },

  FooterContainer:{
     Id:'FooterContainer',
    Type:'div',
    Style:{
      position:'relative',
      display:'block',
      height:{'Mobile':{'Portrait':'8vh','Landscape':'20vh'},'Pc':'20vh'},
      borderTop:['solid 1px black','solid 1px black'],
       backgroundColor:['white','rgb(17,17,17)'],
      zIndex:'30'
    },

    Childs:{
       FooterLogo:{
    Id:'FooterLogo',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Mobile':{'Portrait':'25%','Landscape':'15%'},'Pc':'15%'},
      height:{'Mobile':{'Portrait':'80%','Landscape':'80%'},'Pc':'80%'},
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
  },


}

let TherapyPageDiagram = {
  MainParent:'TherapyPageContainer',
  MainContainers:{
 RealHeader:{
    Id:'LandingPageMainHeader',
    Type:'div',
    Style:{
        zIndex:'10',
        position:'relative',
        display:'inline-block',
        width:'100%',
           backgroundColor:['white','rgb(17,17,17)'],
        height:{"Mobile":{'Portrait':'10vh','Landscape':'15vh'},"Pc":"15vh"},
      
    },
    Childs:{
     MainLogo:{
        Id:'MainLogo',
        Type:'div',
        Style:{
            position:'relative',
        display:'flex',
        width:{'Mobile':{'Portrait':'30%','Landscape':'14%'},'Pc':'20%'},
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
            right:{'Mobile':{'Portrait':'14%','Landscape':'7%'},'Pc':'17.5%'},
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
          OldScene:'TherapyPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
        left:{'Mobile':'0%','Pc':'85vw'},

    }
  },
  BodyContainer:{
   Id:'BodyContainer',
   Type:'div',
   Style:{
     position:'relative',
        display:'block',
        width:'100%',
        backgroundColor:['white','rgba(17,17,17,1)'],
       minHeight:{'Pc':'300%','Mobile':{'Portrait':'200%','Landscape':'400%'}},
        //border:'solid 1px black',
   },
   Childs:{
    FirstImage:{
    Id:'FirstImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'100%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'30%','Landscape':'30%'}},
      left:{'Pc':'47%','Mobile':{'Portrait':'4%','Landscape':'48%'}},
      top:{'Pc':'7%','Mobile':{'Portrait':'28%','Landscape':'7%'}},
      backgroundImage:{Pc:["url('./Images/TherapyImage2Light.png')","url('./Images/TherapyImage2Dark.png')"],
          Mobile:{'Portrait':["url('./Images/TherapyImage2LightMobile.png')","url('./Images/TherapyImage2DarkMobile.png')"],
            'Landscape':["url('./Images/TherapyImage2Light.png')","url('./Images/TherapyImage2Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },
    SecondImage:{
    Id:'SecondImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'70%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'20%','Landscape':'30%'}},
      left:{'Pc':'1%','Mobile':{'Portrait':'30%','Landscape':'1%'}},
      top:{'Pc':'40%','Mobile':{'Portrait':'66%','Landscape':'42%'}},
      backgroundImage:{Pc:["url('./Images/TherapyImage3Light.png')","url('./Images/TherapyImage3Dark.png')"],
          Mobile:{'Portrait':["url('./Images/TherapyImage3LightMobile.png')","url('./Images/TherapyImage3DarkMobile.png')"],
            'Landscape':["url('./Images/TherapyImage3Light.png')","url('./Images/TherapyImage3Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },

    TopicOneContainer:{
      Id:'TopicOneContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicOneTitle:{
          Id:'TopicOneTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'O que é Terapia Comportamental?',
        },
        TopicOneText:{
          Id:'TopicOneText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'80%','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'3%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"4%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`A terapia comportamental é uma abordagem terapêutica focada na compreensão e modificação de comportamentos, pensamentos e emoções que interferem no bem-estar e na qualidade de vida.

Por meio de estratégias práticas e baseadas em evidências, a terapia auxilia no desenvolvimento de habilidades emocionais, sociais e comportamentais, promovendo mudanças positivas e duradouras.`,
        }
      }
    },
     TopicTwoContainer:{
      Id:'TopicTwoContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicTwoTitle:{
          Id:'TopicTwoTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"8%","Mobile":{'Portrait':'9%','Landscape':"8%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'Para quem é indicada?',
        },
        TopicTwoText:{
          Id:'TopicTwoText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"5%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.9rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`A terapia comportamental é indicada para:

Crianças, adolescentes e adultos

Ansiedade, estresse e dificuldades emocionais

Dificuldades de comportamento e autorregulação

Problemas de atenção e impulsividade

Dificuldades de relacionamento

Baixa autoestima e insegurança

Desafios no contexto escolar ou familiar`,
        }
      }
    },
     TopicThreeContainer:{
      Id:'TopicThreeContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Mobile':{'Portrait':'90%','Landscape':''},'Pc':'0%'},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicThreeTitle:{
          Id:'TopicThreeTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"60%","Mobile":{'Portrait':'5%','Landscape':"60%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicThreeText'],

          },
          },
          Text:'Como funciona o atendimento?',
        },
        TopicThreeText:{
          Id:'TopicThreeText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'90%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'4%','Landscape':"60%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '600',
            fontStyle: 'normal',
          },
          
          Text:`O processo geralmente envolve:

✔ Avaliação inicial do perfil emocional e comportamental
✔ Definição de objetivos terapêuticos claros
✔ Desenvolvimento de estratégias práticas para o dia a dia
✔ Treino de habilidades sociais e emocionais
✔ Acompanhamento contínuo da evolução

As intervenções são adaptadas às necessidades e ao ritmo de cada pessoa, sempre em um ambiente acolhedor e seguro.`,
        }
      }
    },
     TopicFourContainer:{
      Id:'TopicFourContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        marginTop:{'Mobile':{'Portrait':'50%','Landscape':''},'Pc':'0%'},
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicFourTitle:{
          Id:'TopicFourTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'4%','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'5%','Landscape':"46%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.1rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            opacity:'0',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourTitle'],

          },
          },
          Text:'Qual o objetivo da Terapia Comportamental?',
        },
        TopicFourText:{
          Id:'TopicFourText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              opacity:'0',
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'7%','Landscape':"55%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourText'],

          }
          },
          Text:`O principal objetivo é promover equilíbrio emocional, autonomia e qualidade de vida.

A terapia comportamental ajuda o indivíduo a desenvolver estratégias mais saudáveis para lidar com emoções, comportamentos e desafios cotidianos, fortalecendo sua confiança e bem-estar.`,
        }
      }
    },
    TopicFiveContainer:{
      Id:'TopicFiveContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Pc':'0%','Mobile':{'Portrait':'10%','Landscape':'0%'}},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
      //  border:'solid 1px black',
      },
      Childs:{
        CTAButton:{
          Id:'CTAButton',
          Type:'div',
          Style:{
            position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            opacity:'0',
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              transform:'translate(-50%,-50%)',
              border:'solid 1px black',
              marginLeft:{'Pc':'50%','Mobile':{'Portrait':'50%','Landscape':'50%'}},
              backgroundColor:['rgb(255, 255, 255)','rgba(0, 0, 0, 0)'],
                height:{'Pc':'16vh','Mobile':{'Portrait':'5vh','Landscape':'27vh'}},
              color:['black','white'],
                fontSize:{'Pc':'1.4rem','Mobile':'0.9rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            boxShadow:'rgba(0,0,0,0.8) 10px 10px 10px',
            fontStyle: 'normal',

            

          },
          Listener:{
  UmbraHover:{
        Style:{
        color:'orange',
        scale:'1.05',
         fontSize:{'Mobile':'11px','Pc':'1.6rem'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://wa.me/5554991841827", "_blank");},
       
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','CTAButton'],

    
   },
          },
         
          Childs:{
            CTAText:{
              Id:'CTAText',
              Type:'div',
              Style:{
                position:'absolute',
                top:'50%',
                transform:'translate(-50%,-50%)',
                left:'50%',
                pointerEvents:'none',
              },
               Text:'Agende Já Sua Consulta!',
            }
          }
        },
         TopicFiveText:{
          Id:'TopicFiveText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'-1%','Mobile':{'Portrait':'','Landscape':'-1%'}},
              textAlign:'start',
              color:['black','white'],
              marginLeft:'30%',
              paddingLeft:{'Pc':"0%","Mobile":{'Portrait':'','Landscape':"0%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.7rem','Mobile':{'Portrait':'9px','Landscape':'12px'}},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            opacity:'0',
            fontStyle: 'normal',
          },
          Text:`-> Clique nesse botão para ir direto ao nosso Whatsapp!`,
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFiveText'],

          }
        }
      }
       
      }
    },
    
    
  }
  
  },

  FooterContainer:{
     Id:'FooterContainer',
    Type:'div',
    Style:{
      position:'relative',
      display:'block',
      height:{'Mobile':{'Portrait':'8vh','Landscape':'20vh'},'Pc':'20vh'},
      borderTop:['solid 1px black','solid 1px black'],
       backgroundColor:['white','rgb(17,17,17)'],
      zIndex:'30'
    },

    Childs:{
       FooterLogo:{
    Id:'FooterLogo',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Mobile':{'Portrait':'25%','Landscape':'15%'},'Pc':'15%'},
      height:{'Mobile':{'Portrait':'80%','Landscape':'80%'},'Pc':'80%'},
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
  },




}


let ParentalPageDiagram = {
  MainParent:'ParentalPageContainer',
  MainContainers:{
 RealHeader:{
    Id:'LandingPageMainHeader',
    Type:'div',
    Style:{
        zIndex:'10',
        position:'relative',
        display:'inline-block',
        width:'100%',
           backgroundColor:['white','rgb(17,17,17)'],
        height:{"Mobile":{'Portrait':'10vh','Landscape':'15vh'},"Pc":"15vh"},
      
    },
    Childs:{
     MainLogo:{
        Id:'MainLogo',
        Type:'div',
        Style:{
            position:'relative',
        display:'flex',
        width:{'Mobile':{'Portrait':'30%','Landscape':'14%'},'Pc':'20%'},
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
            right:{'Mobile':{'Portrait':'14%','Landscape':'7%'},'Pc':'17.5%'},
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
          OldScene:'ParentalPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
        left:{'Mobile':'0%','Pc':'85vw'},

    }
  },
  BodyContainer:{
   Id:'BodyContainer',
   Type:'div',
   Style:{
     position:'relative',
        display:'block',
        width:'100%',
        backgroundColor:['white','rgba(17,17,17,1)'],
        minHeight:{'Pc':'300%','Mobile':{'Portrait':'200%','Landscape':'400%'}},
        //border:'solid 1px black',
   },
   Childs:{
    FirstImage:{
    Id:'FirstImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'100%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'30%','Landscape':'30%'}},
      left:{'Pc':'47%','Mobile':{'Portrait':'4%','Landscape':'48%'}},
      top:{'Pc':'7%','Mobile':{'Portrait':'27%','Landscape':'7%'}},
      backgroundImage:{Pc:["url('./Images/ParentalImage2Light.png')","url('./Images/ParentalImage2Dark.png')"],
          Mobile:{'Portrait':["url('./Images/ParentalImage2LightMobile.png')","url('./Images/ParentalImage2DarkMobile.png')"],
            'Landscape':["url('./Images/ParentalImage2Light.png')","url('./Images/ParentalImage2Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },
    SecondImage:{
    Id:'SecondImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'70%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'20%','Landscape':'30%'}},
      left:{'Pc':'1%','Mobile':{'Portrait':'30%','Landscape':'1%'}},
      top:{'Pc':'40%','Mobile':{'Portrait':'62%','Landscape':'42%'}},
      backgroundImage:{Pc:["url('./Images/ParentalImage3Light.png')","url('./Images/ParentalImage3Dark.png')"],
          Mobile:{'Portrait':["url('./Images/ParentalImage3LightMobile.png')","url('./Images/ParentalImage3DarkMobile.png')"],
            'Landscape':["url('./Images/ParentalImage3Light.png')","url('./Images/ParentalImage3Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },

    TopicOneContainer:{
      Id:'TopicOneContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicOneTitle:{
          Id:'TopicOneTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'O que é Orientação Parental?',
        },
        TopicOneText:{
          Id:'TopicOneText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'80%','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'3%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"4%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`A orientação parental é um acompanhamento voltado aos pais e responsáveis, com o objetivo de oferecer suporte, estratégias e direcionamento na condução do desenvolvimento infantil e adolescente.

Esse processo auxilia a família a compreender melhor comportamentos, emoções e necessidades da criança, fortalecendo o vínculo e promovendo um ambiente mais equilibrado e acolhedor.`,
        }
      }
    },
     TopicTwoContainer:{
      Id:'TopicTwoContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicTwoTitle:{
          Id:'TopicTwoTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"8%","Mobile":{'Portrait':'9%','Landscape':"8%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'Para quem é indicada?',
        },
        TopicTwoText:{
          Id:'TopicTwoText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"5%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.9rem','Mobile':'0.6rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`A orientação parental é indicada para:

Pais que enfrentam dificuldades no manejo de comportamentos

Famílias de crianças com TEA, TDAH ou outras condições do neurodesenvolvimento

Dúvidas sobre limites, rotina e disciplina

Desafios na adaptação escolar

Conflitos familiares frequentes

Pais que desejam aprimorar a comunicação e o vínculo com os filhos`,
        }
      }
    },
     TopicThreeContainer:{
      Id:'TopicThreeContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Mobile':{'Portrait':'85%','Landscape':'-12%'},'Pc':'0%'},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicThreeTitle:{
          Id:'TopicThreeTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"60%","Mobile":{'Portrait':'5%','Landscape':"60%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicThreeText'],

          },
          },
          Text:'Como funciona o atendimento?',
        },
        TopicThreeText:{
          Id:'TopicThreeText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'90%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'4%','Landscape':"60%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '600',
            fontStyle: 'normal',
          },
          
          Text:`O processo geralmente envolve:

✔ Escuta e compreensão das demandas familiares
✔ Análise das situações vivenciadas no dia a dia
✔ Orientações práticas e estratégias personalizadas
✔ Alinhamento entre família e escola (quando necessário)
✔ Acompanhamento contínuo da evolução familiar

As orientações são adaptadas à realidade de cada família, respeitando seus valores, rotina e necessidades.`,
        }
      }
    },
     TopicFourContainer:{
      Id:'TopicFourContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        marginTop:{'Mobile':{'Portrait':'55%','Landscape':''},'Pc':'5%'},
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicFourTitle:{
          Id:'TopicFourTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'4%','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"57%","Mobile":{'Portrait':'5%','Landscape':"50%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.1rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            opacity:'0',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourTitle'],

          },
          },
          Text:'Qual o objetivo da Orientação Parental?',
        },
        TopicFourText:{
          Id:'TopicFourText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              opacity:'0',
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'7%','Landscape':"55%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourText'],

          }
          },
          Text:`O principal objetivo é fortalecer a relação entre pais e filhos, promovendo segurança, equilíbrio emocional e desenvolvimento saudável.

A orientação parental oferece ferramentas práticas para lidar com desafios cotidianos, contribuindo para um ambiente familiar mais estruturado e harmonioso.`,
        }
      }
    },
    TopicFiveContainer:{
      Id:'TopicFiveContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Pc':'0%','Mobile':{'Portrait':'10%','Landscape':'0%'}},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
      //  border:'solid 1px black',
      },
      Childs:{
        CTAButton:{
          Id:'CTAButton',
          Type:'div',
          Style:{
            position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            opacity:'0',
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              transform:'translate(-50%,-50%)',
              border:'solid 1px black',
              marginLeft:{'Pc':'50%','Mobile':{'Portrait':'50%','Landscape':'50%'}},
              backgroundColor:['rgb(255, 255, 255)','rgba(0, 0, 0, 0)'],
          height:{'Pc':'16vh','Mobile':{'Portrait':'5vh','Landscape':'27vh'}},
              color:['black','white'],
                fontSize:{'Pc':'1.4rem','Mobile':'0.9rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            boxShadow:'rgba(0,0,0,0.8) 10px 10px 10px',
            fontStyle: 'normal',

            

          },
          Listener:{
  UmbraHover:{
        Style:{
        color:'orange',
        scale:'1.05',
         fontSize:{'Mobile':'11px','Pc':'1.6rem'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://wa.me/5554991841827", "_blank");},
       
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','CTAButton'],

    
   },
          },
         
          Childs:{
            CTAText:{
              Id:'CTAText',
              Type:'div',
              Style:{
                position:'absolute',
                top:'50%',
                transform:'translate(-50%,-50%)',
                left:'50%',
                pointerEvents:'none',
              },
               Text:'Agende Já Sua Consulta!',
            }
          }
        },
         TopicFiveText:{
          Id:'TopicFiveText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'-1%','Mobile':{'Portrait':'','Landscape':'-1%'}},
              textAlign:'start',
              color:['black','white'],
              marginLeft:'30%',
              paddingLeft:{'Pc':"0%","Mobile":{'Portrait':'','Landscape':"0%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.7rem','Mobile':{'Portrait':'9px','Landscape':'12px'}},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            opacity:'0',
            fontStyle: 'normal',
          },
          Text:`-> Clique nesse botão para ir direto ao nosso Whatsapp!`,
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFiveText'],

          }
        }
      }
       
      }
    },
    
    
  }
  
  },

  FooterContainer:{
     Id:'FooterContainer',
    Type:'div',
    Style:{
      position:'relative',
      display:'block',
      height:{'Mobile':{'Portrait':'8vh','Landscape':'20vh'},'Pc':'20vh'},
      borderTop:['solid 1px black','solid 1px black'],
       backgroundColor:['white','rgb(17,17,17)'],
      zIndex:'30'
    },

    Childs:{
       FooterLogo:{
    Id:'FooterLogo',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Mobile':{'Portrait':'25%','Landscape':'15%'},'Pc':'15%'},
      height:{'Mobile':{'Portrait':'80%','Landscape':'80%'},'Pc':'80%'},
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
  },


}


let TDAHPageDiagram = {
  MainParent:'TDAHPageContainer',
  MainContainers:{
 RealHeader:{
    Id:'LandingPageMainHeader',
    Type:'div',
    Style:{
        zIndex:'10',
        position:'relative',
        display:'inline-block',
        width:'100%',
           backgroundColor:['white','rgb(17,17,17)'],
        height:{"Mobile":{'Portrait':'10vh','Landscape':'15vh'},"Pc":"15vh"},
      
    },
    Childs:{
     MainLogo:{
        Id:'MainLogo',
        Type:'div',
        Style:{
            position:'relative',
        display:'flex',
        width:{'Mobile':{'Portrait':'30%','Landscape':'14%'},'Pc':'20%'},
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
            right:{'Mobile':{'Portrait':'14%','Landscape':'7%'},'Pc':'17.5%'},
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
          OldScene:'TDAHPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
        left:{'Mobile':'0%','Pc':'85vw'},

    }
  },
  BodyContainer:{
   Id:'BodyContainer',
   Type:'div',
   Style:{
     position:'relative',
        display:'block',
        width:'100%',
        backgroundColor:['white','rgba(17,17,17,1)'],
        minHeight:{'Pc':'300%','Mobile':{'Portrait':'200%','Landscape':'400%'}},
        //border:'solid 1px black',
   },
   Childs:{
    FirstImage:{
    Id:'FirstImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'100%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'30%','Landscape':'30%'}},
      left:{'Pc':'47%','Mobile':{'Portrait':'4%','Landscape':'48%'}},
      top:{'Pc':'7%','Mobile':{'Portrait':'26%','Landscape':'7%'}},
      backgroundImage:{Pc:["url('./Images/TDAHImage2Light.png')","url('./Images/TDAHImage2Dark.png')"],
          Mobile:{'Portrait':["url('./Images/TDAHImage2LightMobile.png')","url('./Images/TDAHImage2DarkMobile.png')"],
            'Landscape':["url('./Images/TDAHImage2Light.png')","url('./Images/TDAHImage2Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },
    SecondImage:{
    Id:'SecondImage',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Pc':'50%','Mobile':{'Portrait':'70%','Landscape':'50%'}},
      height:{'Pc':'30%','Mobile':{'Portrait':'20%','Landscape':'30%'}},
      left:{'Pc':'1%','Mobile':{'Portrait':'30%','Landscape':'1%'}},
      top:{'Pc':'40%','Mobile':{'Portrait':'62%','Landscape':'42%'}},
      backgroundImage:{Pc:["url('./Images/TDAHImage3Light.png')","url('./Images/TDAHImage3Dark.png')"],
          Mobile:{'Portrait':["url('./Images/TDAHImage3LightMobile.png')","url('./Images/TDAHImage3DarkMobile.png')"],
            'Landscape':["url('./Images/TDAHImage3Light.png')","url('./Images/TDAHImage3Dark.png')"]
          },
        },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{Pc:'cover',Mobile:'cover'},
        pointerEvents:'none',
    }
    },

    TopicOneContainer:{
      Id:'TopicOneContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicOneTitle:{
          Id:'TopicOneTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'O que é TDAH?',
        },
        TopicOneText:{
          Id:'TopicOneText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'80%','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'3%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"4%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`O Transtorno do Déficit de Atenção e Hiperatividade (TDAH) é uma condição do neurodesenvolvimento caracterizada por dificuldades persistentes de atenção, impulsividade e, em alguns casos, hiperatividade.

Essas características podem impactar o desempenho escolar, profissional, social e emocional, tornando importante a identificação e o acompanhamento adequados.`,
        }
      }
    },
     TopicTwoContainer:{
      Id:'TopicTwoContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicTwoTitle:{
          Id:'TopicTwoTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'3%','Landscape':"2%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.2rem','Mobile':'1.0rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Text:'Para quem é indicado o acompanhamento?',
        },
        TopicTwoText:{
          Id:'TopicTwoText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'40%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'5%','Landscape':'4%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"5%","Mobile":{'Portrait':'5%','Landscape':"5%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.9rem','Mobile':'0.6rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Text:`O acompanhamento é indicado para:

Crianças com dificuldade de concentração

Esquecimento frequente de tarefas e compromissos

Impulsividade e dificuldade em esperar a vez

Agitação excessiva ou inquietação constante

Dificuldades de organização e planejamento

Baixo rendimento escolar sem causa aparente

Adolescentes e adultos com dificuldades de foco e produtividade`,
        }
      }
    },
     TopicThreeContainer:{
      Id:'TopicThreeContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Mobile':{'Portrait':'85%','Landscape':'-10%'},'Pc':'0%'},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicThreeTitle:{
          Id:'TopicThreeTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"60%","Mobile":{'Portrait':'5%','Landscape':"60%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1.2rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicThreeText'],

          },
          },
          Text:'Como funciona o atendimento?',
        },
        TopicThreeText:{
          Id:'TopicThreeText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'90%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'4%','Landscape':"60%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
           
            fontWeight: '600',
            fontStyle: 'normal',
          },
          
          Text:`O processo geralmente envolve:

✔ Avaliação do perfil atencional e comportamental
✔ Identificação de dificuldades e potencialidades
✔ Plano de intervenção personalizado
✔ Desenvolvimento de estratégias de organização e foco
✔ Orientação à família e, quando necessário, parceria com a escola

O acompanhamento é individualizado, respeitando as necessidades e o contexto de cada pessoa.`,
        }
      }
    },
     TopicFourContainer:{
      Id:'TopicFourContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        marginTop:{'Mobile':{'Portrait':'55%','Landscape':'2%'},'Pc':'3%'},
        width:'100%',
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'','Landscape':''}},
       // border:'solid 1px black',
      },
      Childs:{
        TopicFourTitle:{
          Id:'TopicFourTitle',
          Type:'div',
          Style:{
            position:'relative',
            width:"100%",
            display:"block",
            marginTop:{'Pc':'0%','Mobile':{'Portrait':'4%','Landscape':'0%'}},
              textAlign:'Start',
               paddingLeft:{'Pc':"53%","Mobile":{'Portrait':'5%','Landscape':"49%"}},
              color:['black','white'],
                fontSize:{'Pc':'1.3rem','Mobile':'1rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            opacity:'0',
            fontWeight: '800',
            fontStyle: 'normal',
            

          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourTitle'],

          },
          },
          Text:'Qual o objetivo do acompanhamento no TDAH?',
        },
        TopicFourText:{
          Id:'TopicFourText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'2%','Mobile':{'Portrait':'3%','Landscape':'2%'}},
              textAlign:'start',
              color:['black','white'],
              opacity:'0',
              paddingLeft:{'Pc':"55%","Mobile":{'Portrait':'7%','Landscape':"55%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'1rem','Mobile':'0.7rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
          },
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFourText'],

          }
          },
          Text:`O principal objetivo é promover autonomia, organização e melhor desempenho nas atividades diárias.

Mais do que reduzir dificuldades, o foco está em fortalecer habilidades, autoestima e estratégias que auxiliem no desenvolvimento acadêmico, profissional e social.`,
        }
      }
    },
    TopicFiveContainer:{
      Id:'TopicFiveContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
        width:'100%',
        marginTop:{'Pc':'0%','Mobile':{'Portrait':'10%','Landscape':'0%'}},
         backgroundColor:'rgba(0,0,0,0)',
        height:{'Pc':'20%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
      //  border:'solid 1px black',
      },
      Childs:{
        CTAButton:{
          Id:'CTAButton',
          Type:'div',
          Style:{
            position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'70%','Landscape':'35%'}},
            display:"block",
            opacity:'0',
            marginTop:{'Pc':'5%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
              textAlign:'center',
              transform:'translate(-50%,-50%)',
              border:'solid 1px black',
              marginLeft:{'Pc':'50%','Mobile':{'Portrait':'50%','Landscape':'50%'}},
              backgroundColor:['rgb(255, 255, 255)','rgba(0, 0, 0, 0)'],
           height:{'Pc':'16vh','Mobile':{'Portrait':'5vh','Landscape':'27vh'}},
              color:['black','white'],
                fontSize:{'Pc':'1.4rem','Mobile':'0.9rem'},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '800',
            boxShadow:'rgba(0,0,0,0.8) 10px 10px 10px',
            fontStyle: 'normal',

            

          },
          Listener:{
  UmbraHover:{
        Style:{
        color:'orange',
        scale:'1.05',
         fontSize:{'Mobile':'11px','Pc':'1.6rem'},
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://wa.me/5554991841827", "_blank");},
       
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','CTAButton'],

    
   },
          },
         
          Childs:{
            CTAText:{
              Id:'CTAText',
              Type:'div',
              Style:{
                position:'absolute',
                top:'50%',
                transform:'translate(-50%,-50%)',
                left:'50%',
                pointerEvents:'none',
              },
               Text:'Agende Já Sua Consulta!',
            }
          }
        },
         TopicFiveText:{
          Id:'TopicFiveText',
          Type:'div',
          Style:{
         position:'relative',
            width:{'Pc':'35%','Mobile':{'Portrait':'','Landscape':'35%'}},
            display:"block",
            marginTop:{'Pc':'-1%','Mobile':{'Portrait':'','Landscape':'-1%'}},
              textAlign:'start',
              color:['black','white'],
              marginLeft:'30%',
              paddingLeft:{'Pc':"0%","Mobile":{'Portrait':'','Landscape':"0%"}},
               paddingBottom:{'Pc':"5%","Mobile":{'Portrait':'','Landscape':"5%"}},
                fontSize:{'Pc':'0.7rem','Mobile':{'Portrait':'9px','Landscape':'12px'}},
           fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            opacity:'0',
            fontStyle: 'normal',
          },
          Text:`-> Clique nesse botão para ir direto ao nosso Whatsapp!`,
          Listener:{
             UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','TopicFiveText'],

          }
        }
      }
       
      }
    },
    
    
  }
  
  },

  FooterContainer:{
     Id:'FooterContainer',
    Type:'div',
    Style:{
      position:'relative',
      display:'block',
      height:{'Mobile':{'Portrait':'8vh','Landscape':'20vh'},'Pc':'20vh'},
      borderTop:['solid 1px black','solid 1px black'],
       backgroundColor:['white','rgb(17,17,17)'],
      zIndex:'30'
    },

    Childs:{
       FooterLogo:{
    Id:'FooterLogo',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Mobile':{'Portrait':'25%','Landscape':'15%'},'Pc':'15%'},
      height:{'Mobile':{'Portrait':'80%','Landscape':'80%'},'Pc':'80%'},
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
  },


}



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
        backgroundColor:['white','rgb(17,17,17)'],
        height:{"Mobile":{'Portrait':'10vh','Landscape':'15vh'},"Pc":"15vh"},
    },
    Childs:{
     MainLogo:{
        Id:'MainLogo',
        Type:'div',
        Style:{
            position:'relative',
        display:'flex',
        width:{'Mobile':{'Portrait':'30%','Landscape':'14%'},'Pc':'20%'},
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
            right:{'Mobile':{'Portrait':'14%','Landscape':'7%'},'Pc':'17.5%'},
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
        width:{'Mobile':{'Portrait':'42vw','Landscape':'20vw'},'Pc':'20%'},
        height:{'Mobile':{'Portrait':'130%','Landscape':'260%'},'Pc':'100%'},
        marginLeft:{'Mobile':{'Portrait':'-4%','Landscape':'2%'},'Pc':'-5%'},
          marginTop:{'Mobile':{'Portrait':'-14%','Landscape':'-10%'},'Pc':'0%'},
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
         display:{'Pc':'flex','Mobile':'none'},
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
     // border:'solid 1px black',
      height:{'Mobile':{'Portrait':'200vh','Landscape':'130vh'},'Pc':'80vh'},
     
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
          width:{'Mobile':{'Portrait':'90%','Landscape':'100%'},'Pc':'100%'},
          height:{'Mobile':{'Portrait':'50%','Landscape':'90%'},'Pc':'100%'},
          zIndex:'3',
           backgroundImage:{'Pc':"url('./Images/LogoBackground.png')",'Mobile':{'Portrait':"url('./Images/LogoBackgroundMobile.png')",'Landscape':"url('./Images/LogoBackground.png')"}},
           marginTop:{'Pc':'-5%','Mobile':{'Portrait':'-8%','Landscape':'-5%'}},
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
          top:{'Mobile':{'Portrait':'7%','Landscape':'10%'},'Pc':'10%'},
          left:{'Mobile':{'Portrait':'10%','Landscape':'10%'},'Pc':'5%'},
          fontFamily: "'Delius', cursive",
          fontWeight: '600',
          fontStyle: 'normal',
          color:['black','white'],
          cursor:'default',
          width:{'Mobile':{'Portrait':'70%','Landscape':'36%'},'Pc':'45%'},
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
      marginTop:{'Pc':'0%','Mobile':{'Portrait':'-190%','Landscape':'-0%'}},
     // border:'solid 1px black',
      height:{'Mobile':{'Portrait':'200vh','Landscape':'150vh'},'Pc':'110vh'},
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
      marginBottom:{'Mobile':{'Portrait':'0vh','Landscape':'0vh'},'Pc':'10vh'},
      //border:'solid 1px black',
        textAlign:'center',
        paddingLeft:'5%',
        fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '700',
            fontStyle: 'normal',
          fontStyle: 'normal',
        fontSize:{'Mobile':{'Portrait':'1.3rem','Lanscape':'1.3rem'},'Pc':'2rem'},
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
              width:{'Pc':'40%','Mobile':'80%'},
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
        width:{'Mobile':{'Portrait':'50%','Landscape':'25%'},'Pc':'25%'},
        top:{'Pc':'70%','Mobile':{'Portrait':'55%','Landscape':'57%'}},
        height:{'Mobile':{'Portrait':'10%','Landscape':'40%'},'Pc':'50%'},
         zIndex:'10',
           backgroundImage:{'Pc':"url('./Images/DecorationNew2.png')",'Mobile':{'Portrait':"url('./Images/DecorationNew2Mobile.png')",'Landscape':"url('./Images/DecorationNew2.png')"}},
           left:{'Pc':'-3%','Mobile':{'Portrait':'65%','Landscape':'-3%'}},
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
        width:{'Mobile':{'Portrait':'52%','Landscape':'20%'},'Pc':'20%'},
        top:{'Mobile':{'Portrait':'7%','Landscape':'3%'},'Pc':'2%'},
        transform:'translate(-50%,-50%)',
        height:{'Mobile':{'Portrait':'7%','Landscape':'8%'},'Pc':'18%'},
         zIndex:'10',
           backgroundImage:"url('./Images/LineDecoration1.png')",
           left:{'Pc':'61%','Mobile':{'Portrait':'65%','Landscape':'61%'}},
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
          height:{'Mobile':{'Portrait':'60%','Landscape':'62%'},'Pc':'78%'},
          zIndex:'3',
           backgroundImage:{'Pc':["url('./Images/TeamBackgroundDeise.png')","url('./Images/TeamBackgroundDeise2.png')"],
            'Mobile':{'Portrait':["url('./Images/TeamBackgroundDeiseMobile.png')","url('./Images/TeamBackgroundDeise2Mobile.png')"],
              'Landscape':["url('./Images/TeamBackgroundDeise.png')","url('./Images/TeamBackgroundDeise2.png')"]
            }},
           
           left:'0%',
           marginTop:{'Pc':'5%','Mobile':{'Portrait':'-8%','Landscape':'5%'}},
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
        fontSize:{'Mobile':{'Portrait':'1.4rem','Landscape':'1.4rem'},'Pc':'2rem'},
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
             borderBottom:{'Pc':['solid 1px black','solid 1px white'],'Mobile':{'Portrait':'none','Landscape':['solid 1px black','solid 1px white']}},
             paddingBottom:'0%',
              left:{'Pc':'15%','Mobile':{'Portrait':'30%','Landscape':'20%'}},
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
       zIndex:'20',
        marginTop:{'Pc':'5%','Mobile':{'Portrait':'65%','Landscape':'5%'}},
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
                top:{'Mobile':{'Portrait':'2%','Landscape':'-15%'},'Pc':'-15%'},
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
              left:{'Pc':'30%','Mobile':{'Portrait':'4%','Landscape':'30%'}},
              opacity:'0',
              fontSize:{'Mobile':{'Portrait':'0.7rem','Landscape':'0.6rem'},'Pc':'1.1rem'},
              paddingLeft:'3%',
              top:{'Pc':'-5%','Mobile':{'Portrait':'5%','Landscape':'0%'}},
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
             top:{'Pc':'10%','Mobile':{'Portrait':'35%','Landscape':'-10%'}},
            // color:'rgb(42, 96, 212)',
             fontSize:{'Mobile':'1.1rem','Pc':'1.5rem'},
             left:{'Pc':'85%','Mobile':{'Portrait':'30%','Landscape':'85%'}},
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
             top:{'Pc':'27%','Mobile':{'Portrait':'46%','Landscape':'8%'}},
             textAlign:'start',
             left:{'Pc':'85%','Mobile':{'Portrait':'42%','Landscape':'75%'}},
             width:{'Pc':'40%','Mobile':{'Portrait':'55%','Landscape':'30%'}},
             opacity:'0',
             lineHeight:'2',
             transform:'translate(-50%,-50%)',
              fontSize:{'Mobile':'0.7rem','Pc':'0.9rem'},

           
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
      marginTop:{'Pc':'10%','Mobile':{'Portrait':'-100%','Landscape':'0%'}},
     // border:'solid 1px black',
      height:{'Mobile':{'Portrait':'90vh','Landscape':'90vh'},'Pc':'110vh'},
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
          height:{'Mobile':{'Portrait':'90%','Landscape':'90%'},'Pc':'70%'},
          zIndex:'3',
           backgroundImage:{'Pc':["url('./Images/TeamBackgroundTais.png')","url('./Images/TeamBackgroundTais2.png')"],
            'Mobile':{'Portrait':["url('./Images/TeamBackgroundTaisMobile.png')","url('./Images/TeamBackgroundTais2Mobile.png')"],
              'Landscape':["url('./Images/TeamBackgroundTais.png')","url('./Images/TeamBackgroundTais2.png')"]
            }
           },
           left:'0%',
           marginTop:{'Pc':'5%','Mobile':{'Portrait':'10%','Landscape':'5%'}},
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
        fontSize:{'Mobile':{'Portrait':'1.4rem','Landscape':'1.4rem'},'Pc':'2rem'},
        },
        Childs:{
          
          SecondLetter:{
            Id:'SecondLetter',
            Type:'div',
            Style:{
              position:'absolute',
              top:'50%',
              zIndex:'30',
              left:{'Pc':'75%','Mobile':{'Portrait':'50%','Landscape':'75%'}},
             // color:'rgb(109, 37, 116)',
              width:'100%',
              opacity:'0',
              borderBottom:{'Pc':['solid 1px black','solid 1px white'],'Mobile':{'Portrait':'none','Landscape':['solid 1px black','solid 1px white']}},
             
              
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
      marginTop:{'Pc':'0%','Mobile':{'Portrait':'60%','Landscape':'0%'}},
     // border:'solid 1px black',
        textAlign:'start',
        paddingLeft:'5%',
       fontFamily: '"Google Sans Code", monospace',
            fontOpticalSizing: 'auto',
            fontWeight: '600',
            fontStyle: 'normal',
        fontSize:{'Mobile':{'Portrait':'0.7rem','Landscape':'1rem'},'Pc':'1rem'},
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
                  left:{'Pc':'40%','Mobile':{'Portrait':'15%','Landscape':'40%'}},
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
              left:{'Pc':'40%','Mobile':{'Portrait':'10%','Landscape':'40%'}},
              marginTop:'5%',
              top:{'Pc':'0%','Mobile':{'Portrait':'5%','Landscape':'0%'}},
              opacity:'0',
              fontSize:{'Mobile':{'Portrait':'0.7rem','Landscape':'0.7rem'},'Pc':'0.9rem'},
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
             top:{'Pc':'55%','Mobile':{'Portrait':'45%','Landscape':'55%'}},
             // color:'rgb(42, 96, 212)',
                fontSize:{'Mobile':'1.1rem','Pc':'1.5rem'},
             left:{'Pc':'51%','Mobile':{'Portrait':'40%','Landscape':'25%'}},
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
             top:{'Pc':'60%','Mobile':{'Portrait':'50%','Landscape':'60%'}},
             left:{'Pc':'51%','Mobile':{'Portrait':'42%','Landscape':'25%'}},
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
      height:{'Mobile':{'Portrait':'20vh','Landscape':'45vh'},'Pc':'30vh'},
     

    },
    Childs:{
        Decoration5:{
      Id:'Decoration5',
      Type:'div',
      Style:{
        position:'absolute',
        top:'10%',
        height:{'Mobile':{'Portrait':'85%','Landscape':'66%'},'Pc':'70%'},
         zIndex:'10',
         width:'100%',
         backgroundImage:{'Pc':"url('./Images/DecorationNew4.png')",'Mobile':{'Portrait':"url('./Images/DecorationNew4Mobile.png')",'Landscape':"url('./Images/DecorationNew4.png')"}},
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
        width:{'Mobile':{'Portrait':'100%','Landscape':'25%'},'Pc':'10%'},
        top:{'Pc':'-2000%','Mobile':{'Portrait':'0%','Landscape':'-2000%'}},
        transform:'translate(-50%,-50%)',
        height:{'Mobile':{'Portrait':'70%','Landscape':'50%'},'Pc':'70%'},
         zIndex:'100',
           backgroundImage:{'Pc':"url('./Images/DecorationNew4.png')",'Mobile':{'Portrait':"url('./Images/DecorationNew4Mobile.png')",'Landscape':"url('./Images/DecorationNew4.png')"}},
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
      marginTop:{'Pc':'0%','Mobile':{'Portrait':'0%','Landscape':'5%'}},
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
            top:{'Pc':'0%','Mobile':{'Portrait':'0%','Landscape':'400%'}},
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
        fontSize:{'Mobile':{'Portrait':'1rem','Landscape':'1rem'},'Pc':'2rem'},
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
      height:{'Mobile':{'Portrait':'8vh','Landscape':'20vh'},'Pc':'20vh'},
      borderTop:['solid 1px black','solid 1px white'],
       backgroundColor:['white','rgb(17,17,17)'],
      zIndex:'30'
    },

    Childs:{
       FooterLogo:{
    Id:'FooterLogo',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Mobile':{'Portrait':'25%','Landscape':'15%'},'Pc':'15%'},
      height:{'Mobile':{'Portrait':'80%','Landscape':'80%'},'Pc':'80%'},
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
         opacity:'0',
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
             opacity:'0',
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
             opacity:'0',
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
             opacity:'0',
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
             opacity:'0',
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
            'Mobile':{'Portrait':["url('./Images/HeroBackgroundMobile.png')","url('./Images/HeroBackgroundMobile2.png')"],
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
    minHeight:{'Mobile':{'Portrait':'120%','Landscape':'250%'},'Pc':'120%'},
    backgroundColor:['white','rgb(17,17,17)'],
   },
   Childs:{
    GeneralDescriptionContainerDecoration1:{
     Id:'GeneralDescriptionContainerDecoration1',
     Type:'div',
     Style:{
      position:'absolute',
            display:{'Pc':'flex','Mobile':'none'},
      left:{'Mobile':'26%','Pc':'28%'},
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
            position:'relative',
            display:'block',
            textAlign:'center',
            marginTop:{'Mobile':{'Portrait':'5%','Landscape':'2%'},'Pc':'5%'},
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

    
    MainDescText:{
    Id:'MainDescText',
    Type:'div',
    Style:{
      position:'relative',
      fontSize:{'Mobile':'1rem','Pc':'22px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':{'Portrait':'80%','Landscape':'40%'},'Pc':'35%'},
       fontFamily: '"Delius", cursive',
        marginTop:'5%',
      marginLeft:{'Pc':'7%','Mobile':{'Portrait':'5%','Landscape':'7%'}},
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
      position:'relative',
      opacity:'0',
      display:'block',
      marginTop:'0%',
      marginLeft:{'Pc':'7%','Mobile':{'Portrait':'5%','Landscape':'7%'}},
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
    },
    MoreAboutButton:{
      Id:'MoreAboutButton',
      Type:'div',
     
      Style:{
      
               boxShadow:'rgba(0,0,0,0.2) 2px 10px 10px',
               width:{'Pc':'20%','Mobile':{'Portrait':'30%','Landscape':'20%'}},
               height:{'Pc':'7vh','Mobile':{'Portrait':'5vh','Landscape':'13vh'}},
               position:'relative',
               display:'inline-block',
               opacity:'0',
                marginTop:{'Pc':'0%','Mobile':{'Portrait':'25%','Landscape':'0%'}},
           marginLeft:{'Pc':'50%','Mobile':{'Portrait':'50%','Landscape':'51%'}},
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
              transform:{'Pc':'translate(-50%,-50%)','Mobile':'translate(-50%,-50%)'},
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
         position:'relative',
            marginTop:{'Mobile':'0%','Pc':'5%'},
            marginBottom:{'Mobile':'10%','Pc':'10%'},
            display:'block',
             textAlign:'center',
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
         display:'inline-block',
      marginLeft:{'Mobile':{'Portrait':'0%','Landscape':'22%'},'Pc':'29%'},
      top:{'Mobile':{'Portrait':'-10%','Landscape':'-6%'},'Pc':'2%'},
      backgroundImage:"url('./Images/FlowersAsset1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{'Mobile':'contain','Pc':'contain'},
        width:{'Mobile':{'Portrait':'21%','Landscape':'13%'},'Pc':'10vw'},
        height:{'Mobile':{'Portrait':'21%','Landscape':'13%'},'Pc':'30vh'},
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
    NeuroPedagogyContainer:{
      Id:'NeuroPedagogyContainer',
      Type:'div',
      Style:{
        marginBottom: '0 auto',
     minHeight:{'Pc':'50vh','Mobile':{'Portrait':'50vh','Landscape':'150vh'}},
      },
     Childs:{
    NeuroPedagogyLetter:{
      Id:'NeuroPedagogyLetter',
      Type:'div',
      Text:'Neuropedagogia',
      Style:{
      color:['black','white'],
      fontSize:{'Mobile':{'Portrait':'12px','Landscape':'18px'},'Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            //textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'relative',
            display:'block',
            
            marginLeft:{'Mobile':'20%','Pc':'25%'},
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
         position:'relative',
      marginLeft:{'Mobile':{'Portrait':'16%','Landscape':'13%'},'Pc':'19%'},
      marginTop:{'Mobile':'3%','Pc':'-6%'},
      backgroundImage:"url('./Images/NeuroPedagogyAsset1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:{'Mobile':{'Portrait':'4vh','Landscape':'20vh'},'Pc':'7vw'},
        height:{'Mobile':{'Portrait':'4vh','Landscape':'20vh'},'Pc':'14vh'},
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

     NeuroPedagogyText:{
    Id:'NeuroPedagogyText',
    Type:'div',
    Style:{
      position:'relative',
      display:'block',
      marginTop:{'Mobile':'6%','Pc':'1%'},
      borderLeft:['solid 1px black','solid 1px white'],
      marginLeft:{'Mobile':'13%','Pc':'24%'},
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
    NeuroPedagogyImage:{
      Id:'NeuroPedagogyImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':'65%',Pc:'40%'},
        height:{'Mobile':{'Portrait':'32vh','Landscape':'105vh'},Pc:'80vh'},
        marginTop:{'Mobile':'-20%',Pc:'-10%'},
        marginLeft:{'Mobile':'35%',Pc:'55%'},
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
  
    NeuroPedagogyMoreAboutButton:{
      Id:'NeuroPedagogyMoreAboutButton',
      Type:'div',
      Style:{
        boxShadow:'rgba(0,0,0,0.2) 2px 10px 10px',
               width:{'Pc':'14%','Mobile':{'Portrait':'17%','Landscape':'18%'}},
               height:{'Pc':'4vh','Mobile':{'Portrait':'4vh','Landscape':'8vh'}},
               position:'relative',
               opacity:'0',
               marginTop:{'Pc':'10%','Mobile':{'Portrait':'6%','Landscape':'14%'}},
               marginLeft:{'Pc':'35%','Mobile':{'Portrait':'18%','Landscape':'27%'}},
               
              
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
        
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','NeuroPedagogyMoreAboutButton'],

    },
   
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        },
        SceneTransition:{
          OldScene:'LandingPageMinimalistMainScene',
          NewScene:'NeuroPedagogyPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
  
    },
  },
    },
    ClinicPsicContainer:{
      Id:'ClinicPsicContainer',
      Type:'div',
      Style:{
        position:'relative',
        display:'block',
     minHeight:{'Pc':'100vh','Mobile':{'Portrait':'50vh','Landscape':'130vh'}},
      },
     Childs:{
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
     SceneTransition:{
          OldScene:'LandingPageMinimalistMainScene',
          NewScene:'PsicClinicPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
      }
    },
   
   }
  },
},
  },
  SpecsContainer2:{
   Id:'SpecsContainer2',
   Type:'div',
   Style:{
    position:'relative',
    left:'0%',
   // top:{'Mobile':{'Portrait':'152%','Landscape':'291%'},'Pc':'306%'},
    width:'100%',
     backgroundColor:['white','rgb(17,17,17)'],

    zIndex:'11',
    // backgroundImage:{Pc:["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
    //  Mobile:{'Portrait':["url('./Images/GradientMinimalistLightMobile.png')","url('./Images/GradientMinimalistDarkMobile.png')"],'Landscape':["url('./Images/GradientMinimalistLightMobile.png')","url('./Images/GradientMinimalistDarkMobile.png')"]}
    // },
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',


   
   },
   Childs:{
   
      SpecialEducationContainer:{
      Id:'SpecialEducationContainer',
      Type:'div',
      Style:{
     minHeight:{'Pc':'100vh','Mobile':{'Portrait':'50vh','Landscape':'130vh'}},
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
      SceneTransition:{
          OldScene:'LandingPageMinimalistMainScene',
          NewScene:'SpecialEducationPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
      }
    },
  },
},

  TEAContainer:{
      Id:'TEAContainer',
      Type:'div',
      Style:{
     minHeight:{'Pc':'100vh','Mobile':{'Portrait':'50vh','Landscape':'130vh'}},
      },
     Childs:{
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
     SceneTransition:{
          OldScene:'LandingPageMinimalistMainScene',
          NewScene:'TEAPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
      }
    },
  }
  },
},
  },
   SpecsContainer3:{
   Id:'SpecsContainer3',
   Type:'div',
   Style:{
    position:'relative',
    left:'0%',
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
    SceneTransition:{
          OldScene:'LandingPageMinimalistMainScene',
          NewScene:'ABAPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
       SceneTransition:{
          OldScene:'LandingPageMinimalistMainScene',
          NewScene:'TherapyPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
    SceneTransition:{
          OldScene:'LandingPageMinimalistMainScene',
          NewScene:'ParentalPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
    SceneTransition:{
          OldScene:'LandingPageMinimalistMainScene',
          NewScene:'TDAHPage',
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
      width:{'Mobile':{'Portrait':'100%','Landscape':'50vw'},'Pc':'50%'},
      height:{'Mobile':{'Portrait':'44%','Landscape':'100vh'},'Pc':'50%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        pointerEvents:'none',
        transform:{'Pc':'translate(-60%,-50%)','Mobile':{'Portrait':'translate(-70%,-50%)','Landscape':'translate(-70%,-50%)'}},
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
       marginTop:{'Pc':'-18%','Mobile':{'Portrait':'-150%','Landscape':'-150%'}},
    left:'0%',
   //top:{'Mobile':'154%','Pc':'760%'},
    height:{'Mobile':{'Portrait':'210%','Landscape':'210vh'},'Pc':'260%'},
    width:'100%',
    zIndex:'13',
    backgroundColor:[`white`,'rgb(17,17,17)'],
   
    
    //boxShadow:['rgba(0,0,0,0.4) 10px -10px 10px','rgba(0, 0, 0, 0.8) 10px -10px 10px'],
    display:{'Mobile':'flex','Pc':'flex'},
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
      fontSize:{'Mobile':'1.4rem','Pc':'40px'},
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
      left:{'Mobile':{'Portrait':'13%','Landscape':'30%'},'Pc':'5%'},
      top:{'Mobile':{'Portrait':'-1%','Landscape':'0%'},'Pc':'2%'},
      backgroundImage:["url('./Images/WhoIAmDecoration.png')","url('./Images/WhoIAmDecoration.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
       width:{'Mobile':{'Portrait':'15%','Landscape':'7%'},'Pc':'5%'},
        height:{'Mobile':{'Portrait':'3.1%','Landscape':'7%'},'Pc':'5%'},
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
        width:{'Mobile':{'Portrait':'100%','Landscape':'100%'},Pc:'100%'},
        height:{'Mobile':{'Portrait':'36%','Landscape':'50%'},Pc:'33%'},
        top:{'Mobile':'0%',Pc:'10%'},
        left:{'Mobile':'0%',Pc:'0%'},
        backgroundColor:['white','rgb(17,17,17)'],
         backgroundImage:{'Pc':["url('./Images/SelfImage.png')","url('./Images/SelfImage2.png')"],
          'Mobile':{'Portrait':["url('./Images/SelfImage1Mobile.png')","url('./Images/SelfImage2Mobile.png')"],'Landscape':["url('./Images/SelfImage.png')","url('./Images/SelfImage2.png')"]}
         },
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
            fontSize:{'Mobile':{'Portrait':'0.9rem','Landscape':'0.8rem'},'Pc':'1.3rem'},
            lineHeight:{'Mobile':'1.1','Pc':'1.1'},
          fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: { 'Pc':'600','Mobile':'800'},
      fontStyle: 'normal',
          position:'absolute',
          fontStyle: 'normal',
          color:['black','white'],
          left:{'Mobile':{'Portrait':'15%','Landscape':'15%'},'Pc':'20%'},
          top:{'Mobile':{'Portrait':'36%','Landscape':'19%'},'Pc':'18%'},
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
   
    NameLetter:{
      Id:'NameLetter',
      Type:'div',
      Text:'Deisi Dillenburg',
      Style:{
        position:'absolute',
        display:'flex',
        color:['black','white'],
        fontSize:{'Mobile':'1.2rem','Pc':'2rem'},
         fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '800',
      fontStyle: 'normal',
       opacity:'0',
      fontStyle: 'normal',
      left:{'Mobile':{'Portrait':'30%','Landscape':'50%'},'Pc':'25%'},
      transform:'translate(-50%,0%)',
      top:{'Mobile':{'Portrait':'5%','Landscape':'5%'},'Pc':'13%'},
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
      fontSize:{'Mobile':'1.4rem','Pc':'2.5rem'},
      color:['black','white'],
     whiteSpace: 'pre-wrap',
        fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '700',
      fontStyle: 'normal',
       opacity:'0',
      fontStyle: 'normal',
      left:{'Mobile':{'Portrait':'5%','Landscape':'30%'},'Pc':'15%'},
      top:{'Mobile':{'Portrait':'56%','Landscape':'56%'},'Pc':'46%'},
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
      fontSize:{'Mobile':'0.7rem','Pc':'1.2'},
       whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'1.5','Pc':'1.5'},
      fontFamily: "'Delius', cursive",
      fontWeight: '600',
      fontStyle: 'normal',
       opacity:'0',
      left:{'Mobile':{'Portrait':'5%','Landscape':'5%'},'Pc':'10%'},
      width:{'Pc':'60%','Mobile':{'Portrait':'95%','Landscape':'95%'}},
      top:{'Mobile':{'Portrait':'60%','Landscape':'61%'},'Pc':'53%'},

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
        display:{'Pc':'flex','Mobile':{'Portrait':'none','Landscape':'none'}},
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
    height:{'Mobile':{'Portrait':'100vh','Landscape':'170vh'},'Pc':'250%'},
    width:'100%',
    zIndex:'14',
    backgroundColor:['white','rgb(17,17,17)'],
    display:{'Mobile':'flex','Pc':'flex'},
    //backgroundImage:["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
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
        top:{'Mobile':{'Portrait':'-12%','Landscape':'23%'},Pc:'-22%'},
        left:{'Mobile':{'Portrait':'0%','Landscape':'0%'},Pc:'0%'},
        display:{'Pc':'flex','Mobile':{'Portrait':'flex','Landscape':'none'}},
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
      fontSize:{'Mobile':'1.4rem','Pc':'2.2rem'},
      color:['black','white'],
     whiteSpace: 'pre-wrap',
       fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
       width:'100%',
       textAlign:'center',
      fontWeight: '800',
      fontStyle: 'normal',
      opacity:'0',
      transform:'translate(-50%,0%)',
      fontStyle: 'normal',
      left:{'Mobile':'50%','Pc':'65%'},
      top:{'Mobile':{'Portrait':'2%','Landscape':'5%'},'Pc':'5%'},
      },
      Text:'Agende Sua Consulta!',
      Listener:{
    UmbraViewportLogic:{
      Action:UmbraAnimations.Active,
      Params:['SlideForRightAnimation','ContactLetter'],

    }
   },

    },
     
    LocalLetter:{
      Id:'LocalLetter',
      Type:'div',
      Text:'Endereço da clínica',
      Style:{
         position:'absolute',
      fontSize:{'Mobile':'1.1rem','Pc':'1.8rem'},
      color:['black','white'],
     whiteSpace: 'pre-wrap',
     opacity:'0',
        fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '800',
      fontStyle: 'normal',
      transform:'translate(-50%,0%)',
      fontStyle: 'normal',
      left:{'Mobile':{'Portrait':'31%','Landscape':'15%'},'Pc':'58%'},
      top:{'Mobile':{'Portrait':'7%','Landscape':'12%'},'Pc':'12%'},
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
Rua Padre Valentim Rumpel, 272 - Sala 102
Centro - (em frente ao ginâsio Nenão)
`,
     Style:{
       position:'absolute',
      color:['black','white'],
      fontSize:{'Mobile':'0.9rem','Pc':'1.5'},
       whiteSpace: 'pre-wrap',
       opacity:'0',
      lineHeight:{'Mobile':'2','Pc':'1.5'},
        fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: {'Pc':'600','Mobile':{'Portrait':'600','Landscape':'800'}},
      fontStyle: 'normal',
      left:{'Mobile':{'Portrait':'5%','Landscape':'5%'},'Pc':'47%'},
      top:{'Mobile':{'Portrait':'10%','Landscape':'15%'},'Pc':'14.7%'},
     
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
      top:{Mobile:{'Portrait':'32%','Landscape':'18%'},Pc:"50%"},
      left:{Mobile:{'Portrait':"15%",'Landscape':'50%'},Pc:'28%'},
      opacity:'0',
      width:{Mobile:{'Portrait':'70%','Landscape':'40%'},Pc:"60%"},
      height:{Mobile:{'Portrait':'15%','Landscape':'23%'},Pc:'29%'},
      border:[`solid 3px black`,`solid 1px white`],
      },
      Src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.625192007345!2d-52.81937202577039!3d-28.46071287575896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd493a75b28651%3A0xf8999cf2fbab63ed!2sR.%20Padre%20Valentim%20Rumpel%2C%20272%20-%20Centro%2C%20N%C3%A3o-Me-Toque%20-%20RS%2C%2099470-000!5e0!3m2!1spt-BR!2sbr!4v1771033514004!5m2!1spt-BR!2sbr",
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
      fontSize:{'Mobile':'1.1rem','Pc':'2rem'},
      color:['black','white'],
     whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'0.8'},
    fontFamily: '"Google Sans Code", monospace',
       fontOpticalSizing: 'auto',
      fontWeight: '600',
      fontStyle: 'normal',
      transform:'translate(-50%,0%)',
      left:{'Mobile':{'Portrait':'25%','Landscape':'70%'},'Pc':'72%'},
      top:{'Mobile':{'Portrait':'52%','Landscape':'45%'},'Pc':'26%'},
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
      left:{'Mobile':{'Portrait':'12%','Landscape':'70%'},'Pc':'64%'},
      top:{'Mobile':{'Portrait':'58%','Landscape':'55%'},'Pc':'30%'},
      cursor:'pointer'
      
     
},
  Listener:{
      UmbraHover:{
        Style:{
        color:'blue',
      
        }
      },
      UseFn:true,
      Fn:()=>{window.open("https://www.instagram.com/dheisedill/")},
     
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
      left:{'Mobile':{'Portrait':'12%','Landscape':'67%'},'Pc':'64%'},
      top:{'Mobile':{'Portrait':'66%','Landscape':'65%'},'Pc':'42.5%'},
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
      left:{'Mobile':{'Portrait':'12%','Landscape':'70%'},'Pc':'64%'},
      top:{'Mobile':{'Portrait':'76%','Landscape':'75%'},'Pc':'36.4%'},
      
     
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
    left:{'Pc':'60%','Mobile':{'Portrait':'5%','Landscape':'64%'}},
    top:{'Pc':'32%','Mobile':{'Portrait':'57%','Landscape':'55%'}},
    width:{'Pc':'2%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
    opacity:'0',
    height:{'Pc':'2%','Mobile':{'Portrait':'5%','Landscape':'5%'}},
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
    left:{'Pc':'58.9%','Mobile':{'Portrait':'2%','Landscape':'62%'}},
    top:{'Pc':'38%','Mobile':{'Portrait':'72%','Landscape':'73%'}},
    width:{'Pc':'5%','Mobile':{'Portrait':'10%','Landscape':'10%'}},
    height:{'Pc':'3%','Mobile':{'Portrait':'10%','Landscape':'10%'}},
    opacity:'0',
    zIndex:'10',
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
    left:{'Pc':'59%','Mobile':{'Portrait':'2%','Landscape':'59%'}},
    top:{'Pc':'44%','Mobile':{'Portrait':'63%','Landscape':'63%'}},
    width:{'Pc':'5%','Mobile':{'Portrait':'10%','Landscape':'10%'}},
    height:{'Pc':'3%','Mobile':{'Portrait':'10%','Landscape':'10%'}},
    opacity:'0',
    zIndex:'10',
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
         backgroundImage:{'Pc':["url('./Images/ContactBackground.png')","url('./Images/ContactBackground2.png')"],'Mobile':{
          'Portrait':["url('./Images/ContactBackgroundMobile.png')","url('./Images/ContactBackground2Mobile.png')"],
           'Landscape':["url('./Images/ContactBackground.png')","url('./Images/ContactBackground2.png')"]}},
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        opacity:'0',
        position:'absolute',
        width:{'Mobile':'100%','Pc':'100%'},
        height:{'Mobile':{'Portrait':'100%','Landscape':'100%'},'Pc':'40%'},
        top:{'Mobile':'0%','Pc':'5%'},
        left:{'Mobile':'0%','Pc':'0%'},
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
    Id:'FooterContainer',
    Type:'div',
    Style:{
      position:'relative',
      display:'block',
      height:{'Mobile':{'Portrait':'8vh','Landscape':'20vh'},'Pc':'20vh'},
      borderTop:['solid 1px black','solid 1px white'],
         backgroundColor:['white','rgb(17,17,17)'],
      zIndex:'30'
    },

    Childs:{
       FooterLogo:{
    Id:'FooterLogo',
    Type:'div',
    Style:{
      position:'absolute',
      width:{'Mobile':{'Portrait':'25%','Landscape':'15%'},'Pc':'15%'},
      height:{'Mobile':{'Portrait':'80%','Landscape':'80%'},'Pc':'80%'},
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
  
},

 


}
//Funções
document.addEventListener("DOMContentLoaded",()=>{
UmbraScenes.New("LandingPageMainScene");
UmbraScenes.New("GeneralMoreAboutScene",GeneralMoreAboutBluePrint,{
  position:'relative',
  width:'100%',
  overflowX:'hidden',
    backgroundColor:['white','rgb(17, 17, 17)'],
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
        overflowX:'hidden',
        backgroundColor:['rgb(255, 255, 255)','rgb(17, 17, 17)']});
UmbraScenes.Active("LandingPageMinimalistMainScene");

UmbraScenes.New("NeuroPedagogyPage",NeuroPedagogyPageDiagram,{
  position:"absolute",
    width:'100%',
    height:'100%',
    overflowX:'hidden',
    left:'0px',
    top:'0px',
    backgroundColor:['rgb(255, 255, 255)','rgb(17, 17, 17)']
});


UmbraScenes.New("PsicClinicPage",PsicClinicPageDiagram,{
  position:"absolute",
    width:'100%',
    height:'100%',
    overflowX:'hidden',
    left:'0px',
    top:'0px',
    backgroundColor:['rgb(255, 255, 255)','rgb(17, 17, 17)']
});



UmbraScenes.New("SpecialEducationPage",SpecialEducationPageDiagram,{
  position:"absolute",
    width:'100%',
    height:'100%',
    overflowX:'hidden',
    left:'0px',
    top:'0px',
    backgroundColor:['rgb(255, 255, 255)','rgb(17, 17, 17)']
});

UmbraScenes.New("TEAPage",TEAPageDiagram,{
  position:"absolute",
    width:'100%',
    height:'100%',
    overflowX:'hidden',
    left:'0px',
    top:'0px',
    backgroundColor:['rgb(255, 255, 255)','rgb(17, 17, 17)']
});

UmbraScenes.New("ABAPage",ABAPageDiagram,{
  position:"absolute",
    width:'100%',
    height:'100%',
    overflowX:'hidden',
    left:'0px',
    top:'0px',
    backgroundColor:['rgb(255, 255, 255)','rgb(17, 17, 17)']
});

UmbraScenes.New("TherapyPage",TherapyPageDiagram,{
  position:"absolute",
    width:'100%',
    height:'100%',
    overflowX:'hidden',
    left:'0px',
    top:'0px',
    backgroundColor:['rgb(255, 255, 255)','rgb(17, 17, 17)']
});

UmbraScenes.New("ParentalPage",ParentalPageDiagram,{
  position:"absolute",
    width:'100%',
    height:'100%',
    overflowX:'hidden',
    left:'0px',
    top:'0px',
    backgroundColor:['rgb(255, 255, 255)','rgb(17, 17, 17)']
});
UmbraScenes.New("TDAHPage",TDAHPageDiagram,{
  position:"absolute",
    width:'100%',
    height:'100%',
    overflowX:'hidden',
    left:'0px',
    top:'0px',
    backgroundColor:['rgb(255, 255, 255)','rgb(17, 17, 17)']
});







let SlideForRightAnimationBluePrint = {
  Id:'SlideForRightAnimation',
  Pc:{
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
  },
  Mobile:{
 Properties:{
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
  }

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
   
};



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



