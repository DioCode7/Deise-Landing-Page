//Imports

import { UmbraDOMControl, UmbraRender, UmbraScenes } from "./Umbra/Umbra.js";

//Variáveis 

let ActualConceptTheme = 'Estilo Lúdico';
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
      backgroundImage:"url('./Images/EspaçoRessignificarLogo.png')",
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
    Text:'@dheisedill'
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
        top:{'Mobile':'75%','Pc':'62%'},
        left:{'Mobile':'75%','Pc':'53%'},
        border:['solid 1px black','solid 1px white'],
        width:{'Mobile':'20%','Pc':'14%'},
        height:{'Mobile':'40%','Pc':'3%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'31px'},
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
      width:{'Mobile':'3%','Pc':'14%'},
      height:{'Mobile':'1%','Pc':'14%'},
      backgroundImage:"url('./Images/EspaçoRessignificarLogo.png')",
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
        position:'absolute',
        width:'100%',
        background:[
            'linear-gradient(to right,rgb(170, 111, 57),rgb(92, 61, 61),white)',
            'rgb(112, 69, 69)'],
        height:{"Mobile":'20%',"Pc":"34%"},
        boxShadow:"0px 6px 6px rgba(0,0,0,0.8)",
         backgroundImage:{'Pc':
      ["url('./Images/Decoration4MinimalistLight.gif')","url('./Images/Decoration4MinimalistDark.gif')"]
      ,'Mobile':["url('./Images/Decoration4MinimalistLight.gif')","url('./Images/Decoration4MinimalistDark.gif')"]},
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
    Text:'@dheisedill'
  },

  WorkLetter:{
        Id:'WorkLetter',
        Type:'div',
        Style:{
            position:'absolute',
            top:{'Mobile':'60%','Pc':'80%'},
            left:'50%',
            transform:'translate(-50%,0%)',
            color:['white','white'],
            fontSize:{'Pc':'30px','Mobile':'19px'},
             fontFamily: "'Imperial Script', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            zIndex:'20',
            cursor:'default'

        },
        Text:'Neuropedagogia'
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
            zIndex:'25',
            top:{'Mobile':'86%','Pc':'82%'},
            position:'absolute',
            left:{'Mobile':'8%','Pc':'2%'},
           // borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
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
   color:['black','white'],
   fontSize:{'Mobile':'11px','Pc':'14px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            top:{'Mobile':'86%','Pc':'82%'},
            position:'absolute',
            left:{'Mobile':'25%','Pc':'8.5%'},
           // borderBottom://{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
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
   color:['black','white'],
   fontSize:{'Mobile':'11px','Pc':'14px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            top:{'Mobile':'86%','Pc':'82%'},
            position:'absolute',
            left:{'Mobile':'49%','Pc':'17.5%'},
           // borderBottom://{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
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
   color:['black','white'],
   fontSize:{'Mobile':'11px','Pc':'14px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            top:{'Mobile':'86%','Pc':'82%'},
            position:'absolute',
            left:{'Mobile':'66%','Pc':'24%'},
            //borderBottom://{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
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
   
    height:{'Mobile':'90%','Pc':'120%'},
    backgroundColor:'rgba(0,0,0,0)',
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

    width:'100%',
     backgroundImage:{'Pc':
      ["url('./Images/Decoration5MinimalistLight.png')","url('./Images/Decoration5MinimalistDark.png')"],
      'Mobile':["url('./Images/Decoration5MinimalistMobLight.png')","url('./Images/Decoration5MinimalistMobDark.png')"]},
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
    
    width:'100%',
    height:{'Mobile':'70%','Pc':'70%'},
    },
    },

    WelcomeLetter:{
        Id:'WelcomeLetter',
        Type:'div',
        Style:{
            position:'absolute',
            top:{'Mobile':'2%','Pc':'5%'},
            left:'50%',
            transform:'translate(-50%,0%)',
            color:['black','white'],
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
    WhoWeAreLetter:{
        Id:' WhoWeAreLetter',
        Type:'div',
        Style:{
            position:'absolute',
            top:{'Mobile':'7%','Pc':'15%'},
            left:'50%',
            transform:'translate(-50%,0%)',
            color:['black','white'],
            fontSize:{'Pc':'22px','Mobile':'11px'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            zIndex:'20',
            cursor:'default',
            borderBottom:['solid 1px black','solid 1px black'],

        },
        Text:'Quem Somos?'
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
      Text:'Saiba Mais',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':'75%','Pc':'62%'},
        left:{'Mobile':'75%','Pc':'53%'},
        border:['solid 1px black','solid 1px white'],
        width:{'Mobile':'20%','Pc':'14%'},
        height:{'Mobile':'40%','Pc':'3%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'31px'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
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
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
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
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'60%','Pc':'30%'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            
         
      
    },
    Text:"Atuamos com avaliações e intervenções personalizadas, integrando educação, neurociência e psicologia para atender às necessidades individuais de cada pessoa.Nosso trabalho é voltado à promoção do desenvolvimento cognitivo, emocional e acadêmico, em um ambiente acolhedor, ético e fundamentado cientificamente.",
    }
   }
  },
  SpecsContainer:{
   Id:'SpecsContainer',
   Type:'div',
   Style:{
    position:'absolute',
    left:'0%',
    top:{'Mobile':'81%','Pc':'116%'},
    height:{'Mobile':'210%','Pc':'210%'},
    width:'100%',
    zIndex:'10',
     backgroundImage:{'Pc':
      ["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
      'Mobile':["url('./Images/GradientMinimalistLightMobile.png')","url('./Images/GradientMinimalistDarkMobile.png')"]},
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
            fontSize:{'Pc':'50px','Mobile':'31px'},
             fontFamily: "'Imperial Script', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            zIndex:'20',
            cursor:'default'
      }
    },
    SpecsLetterDecoration1:{
      Id:'SpecsLetterDecoration1',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':'26%','Pc':'34%'},
      top:{'Mobile':'0%','Pc':'2%'},
      backgroundImage:"url('./Images/FlowersAsset1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:{'Mobile':'cover','Pc':'contain'},
        width:{'Mobile':'9%','Pc':'10%'},
        height:{'Mobile':'3%','Pc':'10%'},
        zIndex:'10',
      }
    },
    NeuroPedagogyLetter:{
      Id:'NeuroPedagogyLetter',
      type:'div',
      Text:'Neuropedagogia',
      Style:{
      color:['black','white'],
      fontSize:{'Mobile':'12px','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':'4.5%','Pc':'15%'},
            left:{'Mobile':'20%','Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'60%','Pc':'60%'},

      },
    },
       NeuroPedagogyLetterDecoration1:{
      Id:'NeuroPedagogyLetterDecoration1',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':'16%','Pc':'19%'},
      top:{'Mobile':'3%','Pc':'11%'},
      backgroundImage:"url('./Images/NeuroPedagogyAsset1.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:{'Mobile':'8%','Pc':'7%'},
        height:{'Mobile':'2%','Pc':'7%'},
        zIndex:'10',
       

      }
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
        backgroundSize:'cover',
      }
    },
   NeuroPedagogyText:{
    Id:'NeuroPedagogyText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'6%','Pc':'25%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':'13%','Pc':'30%'},
      fontSize:{'Mobile':'12px','Pc':'21px'},
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
    Text:"Avaliação e intervenção em dificuldades de aprendizagem, com estratégias personalizadas para o desenvolvimento cognitivo.",
    },
    NeuroPedagogyMoreAboutButton:{
      Id:'NeuroPedagogyMoreAboutButton',
      Type:'div',
      Text:'Saiba Mais',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':'15%','Pc':'41%'},
        left:{'Mobile':'17%','Pc':'34%'},
        border:['solid 1px black','solid 1px white'],
        width:{'Mobile':'18%','Pc':'14%'},
        height:{'Mobile':'1%','Pc':'2%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'11px'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        }
      }
    },
     ClinicPsicLetter:{
      Id:' ClinicPsicLetter',
      type:'div',
      Text:'Psicanálise Clínica',
      Style:{
      color:['black','white'],
      fontSize:{'Mobile':'12px','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':'20%','Pc':'50%'},
            left:{'Mobile':'20%','Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'60%','Pc':'60%'},

      },
    },
     ClinicPsicLetterDecoration1:{
      Id:'ClinicPsicLetterDecoration1',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':'23%','Pc':'20%'},
      top:{'Mobile':'20%','Pc':'48%'},
      backgroundImage:["url('./Images/PscikIcon1Dark.png')","url('./Images/PscikIcon1Light.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
       width:{'Mobile':'8%','Pc':'5%'},
        height:{'Mobile':'2%','Pc':'5%'},
        zIndex:'10',
       

      }
    },

    ClinicPsicImage:{
      Id:'ClinicPsicImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':'40%',Pc:'40%'},
        height:{'Mobile':'40%',Pc:'40%'},
        top:{'Mobile':'16%',Pc:'48%'},
        left:{'Mobile':'55%',Pc:'20%'},
         backgroundImage:"url('./Images/PisciImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      }
    },
     ClinicPsicText:{
    Id:' ClinicPsicText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'9%','Pc':'57%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':'13%','Pc':'58%'},
      fontSize:{'Mobile':'12px','Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'60%','Pc':'30%'},
     
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
    Text:"Atendimento terapêutico focado em saúde emocional, autoconhecimento e elaboração de conflitos internos.",
    },
     ClinicPsicMoreAboutButton:{
      Id:'ClinicPsicMoreAboutButton',
      Type:'div',
      Text:'Saiba Mais',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':'75%','Pc':'67%'},
        left:{'Mobile':'75%','Pc':'65%'},
        border:['solid 1px black','solid 1px white'],
        width:{'Mobile':'20%','Pc':'14%'},
        height:{'Mobile':'40%','Pc':'2%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'31px'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

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
  SpecsContainer2:{
   Id:'SpecsContainer2',
   Type:'div',
   Style:{
    position:'absolute',
    left:'0%',
    top:{'Mobile':'154%','Pc':'306%'},
    height:{'Mobile':'210%','Pc':'210%'},
    width:'100%',
    zIndex:'10',
     backgroundImage:["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
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
      fontSize:{'Mobile':'11px','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':'20%','Pc':'1%'},
            left:{'Mobile':'20%','Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'20%','Pc':'60%'},

      },
    },
       SpecialEducationLetterDecoration:{
      Id:'SpecialEducationLetterDecoration',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':'26%','Pc':'19%'},
      top:{'Mobile':'-2%','Pc':'-3%'},
      backgroundImage:"url('./Images/EducationIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:{'Mobile':'10%','Pc':'8%'},
        height:{'Mobile':'10%','Pc':'8%'},
        zIndex:'10',
       

      }
    },
   SpecialEducationImage:{
      Id:' SpecialEducationImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':'40%',Pc:'40%'},
        height:{'Mobile':'40%',Pc:'40%'},
        top:{'Mobile':'16%',Pc:'-4%'},
        left:{'Mobile':'55%',Pc:'55%'},
         backgroundImage:"url('./Images/SpecialEducationImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      }
    },
   SpecialEducationText:{
    Id:' SpecialEducationText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'9%','Pc':'9%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':'13%','Pc':'30%'},
      fontSize:{'Mobile':'12px','Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'60%','Pc':'25%'},
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
    Text:"Avaliação e intervenção em dificuldades de aprendizagem, com estratégias personalizadas para o desenvolvimento cognitivo.",
    },
     SpecialEducationMoreAboutButton:{
      Id:'SpecialEducationMoreAboutButton1',
      Type:'div',
      Text:'Saiba Mais',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':'75%','Pc':'25%'},
        left:{'Mobile':'75%','Pc':'34%'},
        border:['solid 1px black','solid 1px white'],
        width:{'Mobile':'20%','Pc':'14%'},
        height:{'Mobile':'40%','Pc':'2%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'31px'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        }
      }
    },

     TEALetter:{
      Id:'TEALetterLetter',
      type:'div',
      Text:'Autismo(TEA)',
      Style:{
      color:['black','white'],
      fontSize:{'Mobile':'11px','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':'47%','Pc':'32%'},
            left:{'Mobile':'20%','Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'20%','Pc':'60%'},

      },
    },
     TEALetterLetterDecoration1:{
      Id:'TEALetterLetterDecoration1',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':'26%','Pc':'20%'},
      top:{'Mobile':'-2%','Pc':'30%'},
      backgroundImage:"url('./Images/AutismIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:{'Mobile':'10%','Pc':'5%'},
        height:{'Mobile':'10%','Pc':'5%'},
        zIndex:'10',
       

      }
    },

    TEALetterImage:{
      Id:'TEALetterImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':'40%',Pc:'35%'},
        height:{'Mobile':'40%',Pc:'35%'},
        top:{'Mobile':'16%',Pc:'34%'},
        left:{'Mobile':'55%',Pc:'20%'},
         backgroundImage:"url('./Images/AutismImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      }
    },
     TEALetterText:{
    Id:'TEALetterText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'9%','Pc':'39%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':'13%','Pc':'58%'},
      fontSize:{'Mobile':'12px','Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'60%','Pc':'30%'},
     
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
    Text:"Acompanhamento especializado para pessoas no espectro autista, com foco em comunicação, socialização, autonomia e aprendizagem.",
    },
    TEALetterMoreAboutButton:{
      Id:'TEALetterMoreAboutButton',
      Type:'div',
      Text:'Saiba Mais',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':'75%','Pc':'52%'},
        left:{'Mobile':'75%','Pc':'65%'},
        border:['solid 1px black','solid 1px white'],
        width:{'Mobile':'20%','Pc':'14%'},
        height:{'Mobile':'40%','Pc':'2%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'31px'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

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

   SpecsContainer3:{
   Id:'SpecsContainer3',
   Type:'div',
   Style:{
    position:'absolute',
    left:'0%',
    top:{'Mobile':'154%','Pc':'454%'},
    height:{'Mobile':'210%','Pc':'210%'},
    width:'100%',
    zIndex:'10',
     backgroundImage:["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
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
      fontSize:{'Mobile':'11px','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':'20%','Pc':'1%'},
            left:{'Mobile':'20%','Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'20%','Pc':'60%'},

      },
    },
      ABALetterDecoration:{
      Id:'ABALetterDecoration',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':'26%','Pc':'19%'},
      top:{'Mobile':'-2%','Pc':'-1%'},
      backgroundImage:"url('./Images/ABAIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:{'Mobile':'10%','Pc':'5%'},
        height:{'Mobile':'10%','Pc':'5%'},
        zIndex:'10',
       

      }
    },
   ABAImage:{
      Id:' ABAImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':'40%',Pc:'33%'},
        height:{'Mobile':'40%',Pc:'33%'},
        top:{'Mobile':'16%',Pc:'4%'},
        left:{'Mobile':'55%',Pc:'55%'},
         backgroundImage:"url('./Images/ABAImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      }
    },
   ABAText:{
    Id:'SpecialEducationText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'9%','Pc':'9%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':'13%','Pc':'30%'},
      fontSize:{'Mobile':'12px','Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'60%','Pc':'25%'},
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
    Text:"Intervenções baseadas em evidências para desenvolvimento de habilidades, redução de comportamentos desafiadores e fortalecimento da autonomia.",
    },
     ABAMoreAboutButton:{
      Id:'ABAMoreAboutButton1',
      Type:'div',
      Text:'Saiba Mais',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':'75%','Pc':'25%'},
        left:{'Mobile':'75%','Pc':'34%'},
        border:['solid 1px black','solid 1px white'],
        width:{'Mobile':'20%','Pc':'14%'},
        height:{'Mobile':'40%','Pc':'2%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'31px'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
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
      fontSize:{'Mobile':'11px','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':'47%','Pc':'32%'},
            left:{'Mobile':'20%','Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'20%','Pc':'60%'},

      },
    },
     TerapyLetterDecoration1:{
      Id:'TerapyLetterDecoration1',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':'26%','Pc':'20%'},
      top:{'Mobile':'-2%','Pc':'30.9%'},
      backgroundImage:"url('./Images/TerapyIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:{'Mobile':'10%','Pc':'5%'},
        height:{'Mobile':'10%','Pc':'5%'},
        zIndex:'10',
       

      }
    },

    TerapyImage:{
      Id:'TerapyImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':'40%',Pc:'35%'},
        height:{'Mobile':'40%',Pc:'35%'},
        top:{'Mobile':'16%',Pc:'34%'},
        left:{'Mobile':'55%',Pc:'20%'},
         backgroundImage:"url('./Images/TherapyImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      }
    },
     TerapyText:{
    Id:'TerapyText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'9%','Pc':'39%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':'13%','Pc':'58%'},
      fontSize:{'Mobile':'12px','Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'60%','Pc':'30%'},
     
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
    Text:"Trabalho com emoções, comportamentos, rotina, autorregulação e habilidades sociais.",
    },
   TerapyMoreAboutButton:{
      Id:'TerapyMoreAboutButton',
      Type:'div',
      Text:'Saiba Mais',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':'75%','Pc':'52%'},
        left:{'Mobile':'75%','Pc':'65%'},
        border:['solid 1px black','solid 1px white'],
        width:{'Mobile':'20%','Pc':'14%'},
        height:{'Mobile':'40%','Pc':'2%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'31px'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        }
      }
    },

  }},
  SpecsContainer4:{
   Id:'SpecsContainer4',
   Type:'div',
   Style:{
    position:'absolute',
    left:'0%',
    top:{'Mobile':'154%','Pc':'596%'},
    height:{'Mobile':'210%','Pc':'210%'},
    width:'100%',
    zIndex:'10',
     backgroundImage:["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
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
      fontSize:{'Mobile':'11px','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':'20%','Pc':'1%'},
            left:{'Mobile':'20%','Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'20%','Pc':'60%'},

      },
    },
      ParentLetterDecoration:{
      Id:'ParentLetterDecoration',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':'26%','Pc':'19%'},
      top:{'Mobile':'-2%','Pc':'-1%'},
      backgroundImage:"url('./Images/ParentIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:{'Mobile':'10%','Pc':'7%'},
        height:{'Mobile':'10%','Pc':'7%'},
        zIndex:'10',
       

      }
    },
   ParentImage:{
      Id:' ParentImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':'40%',Pc:'33%'},
        height:{'Mobile':'40%',Pc:'33%'},
        top:{'Mobile':'16%',Pc:'4%'},
        left:{'Mobile':'55%',Pc:'55%'},
         backgroundImage:"url('./Images/ParentImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      }
    },
   ParentText:{
    Id:'ParentText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'9%','Pc':'9%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':'13%','Pc':'30%'},
      fontSize:{'Mobile':'12px','Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'60%','Pc':'25%'},
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
    Text:"Suporte prático para pais e responsáveis, com estratégias para o dia a dia e fortalecimento do vínculo familiar.",
    },
     ParentMoreAboutButton:{
      Id:'ParentMoreAboutButton1',
      Type:'div',
      Text:'Saiba Mais',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':'75%','Pc':'25%'},
        left:{'Mobile':'75%','Pc':'34%'},
        border:['solid 1px black','solid 1px white'],
        width:{'Mobile':'20%','Pc':'14%'},
        height:{'Mobile':'40%','Pc':'2%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'31px'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
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
      fontSize:{'Mobile':'11px','Pc':'25px'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            position:'absolute',
            top:{'Mobile':'47%','Pc':'32%'},
            left:{'Mobile':'20%','Pc':'25%'},
             borderBottom:['solid 1px black','solid 1px white'],
             width:{'Mobile':'20%','Pc':'60%'},

      },
    },
     TerapyLetterDecoration1:{
      Id:'TDAHLetterDecoration1',
      Type:'div',
      Style:{
         position:'absolute',
      left:{'Mobile':'26%','Pc':'17%'},
      top:{'Mobile':'-2%','Pc':'27%'},
      backgroundImage:"url('./Images/TDAHIcon.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:{'Mobile':'10%','Pc':'9%'},
        height:{'Mobile':'10%','Pc':'9%'},
        zIndex:'10',
       

      }
    },

    TDAHImage:{
      Id:'TDAHImage',
      Type:'div',
      Style:{
        position:'absolute',
        width:{'Mobile':'40%',Pc:'35%'},
        height:{'Mobile':'40%',Pc:'35%'},
        top:{'Mobile':'16%',Pc:'34%'},
        left:{'Mobile':'55%',Pc:'20%'},
         backgroundImage:"url('./Images/TDAHImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
      }
    },
    TDAHText:{
    Id:'TDAHText',
    Type:'div',
    Style:{
      position:'absolute',
      top:{'Mobile':'9%','Pc':'39%'},
      borderLeft:['solid 1px black','solid 1px white'],
      left:{'Mobile':'13%','Pc':'58%'},
      fontSize:{'Mobile':'12px','Pc':'21px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'60%','Pc':'30%'},
     
      padding:'1%',
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
           // boxShadow:'rgba(0,0,0,0.5) 5px 5px 5px'
            
         
      
    },
    Text:"Acompanhamento especializado para atenção, organização, impulsividade e desempenho escolar.",
    },
   TDAHMoreAboutButton:{
      Id:'TDAHMoreAboutButton',
      Type:'div',
      Text:'Saiba Mais',
      Style:{
        position:'absolute',
        color:['black','white'],
        top:{'Mobile':'75%','Pc':'52%'},
        left:{'Mobile':'75%','Pc':'65%'},
        border:['solid 1px black','solid 1px white'],
        width:{'Mobile':'20%','Pc':'14%'},
        height:{'Mobile':'40%','Pc':'2%'},
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
         fontSize:{'Pc':'15px','Mobile':'31px'},
             fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
            textAlign:'center',
            cursor:'pointer',
            backgroundColor:['rgba(45, 47, 51, 0)','rgba(0, 0, 0, 0)']

      },
      Listener:{
        UmbraHover:{
          Style:{
            scale:'1.2',
          }
        }
      }
    },
    
  }},
  AboutMeContainer:{
    Id:'AboutMeContainer',
    Type:'div',
    Style:{
       position:'absolute',
    left:'0%',
    top:{'Mobile':'154%','Pc':'760%'},
    height:{'Mobile':'210%','Pc':'260%'},
    width:'100%',
    zIndex:'10',
    display:{'Mobile':'none','Pc':'flex'},
     backgroundImage:["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
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
      fontSize:{'Mobile':'11px','Pc':'44px'},
       fontFamily: "'Imperial Script', cursive",
        fontWeight: '400',
        fontStyle: 'normal',
        textShadow:'2px 4px 10px rgba(0, 0, 0, 0.9)',
        zIndex:'20',
        cursor:'default',
       top:{'Mobile':'0%','Pc':'5%'},
       left:{'Mobile':'50%','Pc':'50%'},
       transform:'translate(-50%,-50%)',
         borderBottom:['solid 1px black','solid 1px white'],
         width:'55%',
         textAlign:'center'

      },
      Text:'Quem Sou Eu?',
    },
    WhoIAmDecoration:{
     Id:'WhoIAmDecoration',
     Type:'div',
     Style:{
      display:'block',
      position:'absolute',
      left:{'Mobile':'23%','Pc':'37%'},
      top:{'Mobile':'20%','Pc':'1%'},
      backgroundImage:["url('./Images/WhoIAmDecoration.png')","url('./Images/WhoIAmDecoration.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
       width:{'Mobile':'8%','Pc':'5%'},
        height:{'Mobile':'2%','Pc':'5%'},
      
        zIndex:'10',
     },
    },
    SelfImage:{
      Id:'SelfImage',
      Type:'div',
      Style:{
        position:'relative',
        width:{'Mobile':'40%',Pc:'50%'},
        height:{'Mobile':'40%',Pc:'20%'},
        top:{'Mobile':'16%',Pc:'10%'},
        left:{'Mobile':'55%',Pc:'26%'},
         backgroundImage:"url('./Images/SelfImage.png')",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        display:'block',
        marginBottom:'5%',
        backgroundSize:'cover',
        boxShadow:'rgba(0,0,0,0.6) 5px 5px 5px',
        border:'solid 1px black',
        
      },
      Childs:{
        MySpecsText:{
          Id:'MySpecsText',
          Type:'div',
          Style:{
            whiteSpace:'pre-line',
            fontSize:{'Mobile':'11px','Pc':'0.9rem'},
            lineHeight:{'Mobile':'2','Pc':'1.1'},
            fontFamily: "'Delius', cursive",
          fontWeight: '400',
          position:'absolute',
          fontStyle: 'normal',
          color:['black','white'],
          left:{'Mobile':'45%','Pc':'47%'},
          top:{'Mobile':'20%','Pc':'7%'},

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

          - Tarapeuta Comportamental;`
        }
      }
    },
    SpikesDecoration:{
      Id:'SpikesDecoration',
      Type:'div',
      Style:{
        display:'block',
        backgroundImage:["url('./Images/Spikes1.png')","url('./Images/Spikes1Light.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        position:'absolute',
        width:{'Mobile':'100%','Pc':'100%'},
        height:{'Mobile':'17%','Pc':'17%'},
        top:{'Mobile':'35%','Pc':'35%'},
        
      
      }
    },
    NameLetter:{
      Id:'NameLetter',
      Type:'div',
      Text:'Deisi Dillenburg',
      Style:{
        position:'absolute',
        display:'flex',
        color:['black','white'],
        fontSize:{'Mobile':'1rem','Pc':'2.4rem'},
        lineHeight:{'Mobile':'2','Pc':'0.8'},
      fontFamily: "'Imperial Script', cursive",
      fontWeight: '400',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'50%'},
      transform:'translate(-50%,0%)',
      top:{'Mobile':'34%','Pc':'7.5%'},
       whiteSpace: 'pre-wrap',
        
      }
    },
    MyBioLetter:{
      Id:'MyBioLetter',
      Type:'div',
      Style:{
      position:'absolute',
      fontSize:{'Mobile':'1rem','Pc':'2.5rem'},
      color:['black','white'],
     whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'0.8'},
      fontFamily: "'Imperial Script', cursive",
      fontWeight: '400',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'62%'},
      top:{'Mobile':'34%','Pc':'46%'},
      },
      Text:`Minha
      Biografia!`,
    },
    MyBioDecoration1:{
      Id:'MyBioDecoration1',
      Type:'div',
      Style:{
         backgroundImage:["url('./Images/BioDeco1.png')","url('./Images/BioDeco1Light.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        position:'absolute',
        width:{'Mobile':'100%','Pc':'10%'},
        height:{'Mobile':'17%','Pc':'6%'},
        top:{'Mobile':'35%','Pc':'48%'},
        display:'none',
        transform:'rotate(10deg)',
        left:{'Mobile':'35%','Pc':'60%'},
      }
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
      fontWeight: '400',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'37%'},
      top:{'Mobile':'34%','Pc':'53%'},

    }
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
        width:{'Mobile':'100%','Pc':'60%'},
        height:{'Mobile':'17%','Pc':'25%'},
        top:{'Mobile':'35%','Pc':'52%'},
        transform:'rotate(10deg)',
        left:{'Mobile':'35%','Pc':'0%'},
      }
    }
   
    },
  },

  ContactContainer:{
   Id:'ContactContainer',
   Type:'div',
   Style:{
     position:'absolute',
    left:'0%',
    top:{'Mobile':'154%','Pc':'1000%'},
    height:{'Mobile':'210%','Pc':'250%'},
    width:'100%',
    zIndex:'10',
    display:{'Mobile':'none','Pc':'flex'},
     backgroundImage:["url('./Images/GradientMinimalistLight.png')","url('./Images/GradientMinimalistDark.png')"],
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
   },
   Childs:{
    ContactLetter:{
      Id:'ContactLetter',
      Type:'div',
      Style:{
     position:'absolute',
      fontSize:{'Mobile':'1rem','Pc':'3.5rem'},
      color:['black','white'],
     whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'0.8'},
      fontFamily: "'Imperial Script', cursive",
      fontWeight: '400',
      transform:'translate(-50%,0%)',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'50%'},
      top:{'Mobile':'34%','Pc':'5%'},
      },
      Text:'Agende Sua Consulta!',

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
        width:{'Mobile':'100%','Pc':'8%'},
        height:{'Mobile':'17%','Pc':'5%'},
        top:{'Mobile':'35%','Pc':'2%'},
        transform:'rotate(10deg)',
        left:{'Mobile':'35%','Pc':'26%'},
      }
    },
    LocalLetter:{
      Id:'LocalLetter',
      Type:'div',
      Text:'Endereço da clínica',
      Style:{
         position:'absolute',
      fontSize:{'Mobile':'1rem','Pc':'2.6rem'},
      color:['black','white'],
     whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'0.8'},
      fontFamily: "'Imperial Script', cursive",
      fontWeight: '400',
      transform:'translate(-50%,0%)',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'36%'},
      top:{'Mobile':'34%','Pc':'12%'},
      }
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
      fontSize:{'Mobile':'1rem','Pc':'1.2'},
       whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'1.5'},
      fontFamily: "'Delius', cursive",
      fontWeight: '400',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'30%'},
      top:{'Mobile':'34%','Pc':'14.7%'},
     
    }
    },
    ClinicAdressMap:{
      Id:"ClinicAdressMap",
      Type:"iframe",
      Style:{
      position:`absolute`,
      top:{Mobile:'20%',Pc:"22%"},
      left:{Mobile:"15%",Pc:'28%'},
      width:{Mobile:"30%",Pc:"30%"},
      height:{Mobile:`10%`,Pc:'17%'},
      border:[`solid 1px black`,`solid 1px white`],
      },
      Src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5846256170535!2d-52.81804822522044!3d-28.461935275758293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd4930d1aa4cb7%3A0xec4a7325745ef3cd!2sR.%20Pedro%20Augustin%20-%20N%C3%A3o-Me-Toque%2C%20RS%2C%2099470-000!5e0!3m2!1spt-BR!2sbr!4v1769355775168!5m2!1spt-BR!2sbr",
      
    },
    ContactOptionsLetter:{
      Id:'CantactOptionsLetter',
      Type:'div',
      Text:'Meios De Contato',
      Style:{
         position:'absolute',
      fontSize:{'Mobile':'1rem','Pc':'2.6rem'},
      color:['black','white'],
     whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'0.8'},
      fontFamily: "'Imperial Script', cursive",
      fontWeight: '400',
      transform:'translate(-50%,0%)',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'72%'},
      top:{'Mobile':'34%','Pc':'23%'},
      },
    },

    ContactOptionsText:{
      Id:'ContactOptionsText',
      Type:'div',
      Text:`@dheisedill
54 99184-1827
neuroppdeisedill@gmail.com`,
Style:{
position:'absolute',
      color:['black','white'],
      fontSize:{'Mobile':'1rem','Pc':'1.2'},
       whiteSpace: 'pre-wrap',
      lineHeight:{'Mobile':'2','Pc':'4'},
      fontFamily: "'Delius', cursive",
      fontWeight: '400',
      fontStyle: 'normal',
      left:{'Mobile':'55%','Pc':'64%'},
      top:{'Mobile':'34%','Pc':'27%'},
      
     
}
    }
   

   }
  },
 
},

 


}
//Funções
document.addEventListener("DOMContentLoaded",()=>{
UmbraScenes.New("LandingPageMainScene");
UmbraScenes.Active("LandingPageMainScene");
UmbraRender(LandingPageBluePrint);
});

function ConceptThemeSwitchs(NewTheme){
if(NewTheme == 'Ludico'){
  ActualConceptTheme = 'Tema Lúdico';
UmbraDOMControl.Delete('LandingPageMinimalistMainSceneContainer');
UmbraScenes.Delete('LandingPageMinimalistMainScene');
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
UmbraScenes.New("LandingPageMinimalistMainScene");
UmbraScenes.Active("LandingPageMinimalistMainScene",{ 
   position:'absolute',
        width:'100%',
        height:'100%',
        left:'0px',
        top:'0px',
        backgroundColor:['rgb(255, 255, 255)','rgb(0,0,0)'],});
UmbraRender(LandingPageMinimalistBluePrint);
}
}

