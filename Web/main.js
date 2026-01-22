//Imports

import { UmbraDOMControl, UmbraRender, UmbraScenes } from "./Umbra/Umbra.js";

//Variáveis 

let ActualConceptTheme = 'Estilo Lúdico';
let LandingPageBluePrint = {
MainParent:"LandingPageMainSceneContainer",
MainContainers:{
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
   color:'black',
   
   fontSize:{'Mobile':'11px','Pc':'17px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            top:{'Mobile':'80%','Pc':'82%'},
            position:'absolute',
            left:{'Mobile':'30%','Pc':'33%'},
            borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
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
   color:'black',
   fontSize:{'Mobile':'11px','Pc':'17px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            top:{'Mobile':'80%','Pc':'82%'},
            position:'absolute',
            left:{'Mobile':'5%','Pc':'41%'},
            borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
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
   color:'black',
   fontSize:{'Mobile':'11px','Pc':'17px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            top:{'Mobile':'80%','Pc':'82%'},
            position:'absolute',
            left:{'Mobile':'5%','Pc':'52%'},
            borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
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
   color:'black',
   fontSize:{'Mobile':'11px','Pc':'17px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            top:{'Mobile':'80%','Pc':'82%'},
            position:'absolute',
            left:{'Mobile':'5%','Pc':'60%'},
            borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
   },
   Text:'Contato',
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
    borderBottom:['solid 5px black','solid 5px white'],
    height:{'Mobile':'70%','Pc':'70%'},
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
      fontSize:{'Mobile':'12px','Pc':'20px'},
      color:['rgb(255, 255, 255)','rgb(240,240,240)'],
      width:{'Mobile':'60%','Pc':'30%'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            
         
      
    },
    Text:"Somos uma clínica de neuropedagogia especializada em compreender e potencializar os processos de aprendizagem. Atuamos com avaliações e intervenções personalizadas, integrando educação, neurociência e psicologia para atender às necessidades individuais de cada pessoa.Nosso trabalho é voltado à promoção do desenvolvimento cognitivo, emocional e acadêmico, em um ambiente acolhedor, ético e fundamentado cientificamente.",
    }
   }
  },
 
},

}

let LandingPageMinimalistBluePrint = {
MainParent:"LandingPageMinimalistMainSceneContainer",
MainContainers:{
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
   color:['black','white'],
   fontSize:{'Mobile':'11px','Pc':'14px'},
    fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            top:{'Mobile':'80%','Pc':'82%'},
            position:'absolute',
            left:{'Mobile':'5%','Pc':'2%'},
            borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
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
            top:{'Mobile':'80%','Pc':'82%'},
            position:'absolute',
            left:{'Mobile':'5%','Pc':'8.5%'},
            borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
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
            top:{'Mobile':'80%','Pc':'82%'},
            position:'absolute',
            left:{'Mobile':'5%','Pc':'17.5%'},
            borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
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
            top:{'Mobile':'80%','Pc':'82%'},
            position:'absolute',
            left:{'Mobile':'5%','Pc':'24%'},
            borderBottom:{'Mobile':['solid 1px black','solid 1px white'],'Pc':['solid 1px black','solid 1px white']}
   },
   Text:'Contato',
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
    border:['solid 1px black','solid 1px white'],
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
      ["url('./Images/Decoration5MinimalistLight.gif')","url('./Images/Decoration5MinimalistDark.png')"],
      'Mobile':["url('./Images/Decoration5MinimalistMobLight.png')","url('./Images/Decoration5MinimalistMobDark.png')"]},
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
    borderBottom:['solid 5px black','solid 5px white'],
    height:{'Mobile':'70%','Pc':'70%'},
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
      fontSize:{'Mobile':'12px','Pc':'20px'},
      color:['rgb(0, 0, 0)','rgb(240,240,240)'],
      width:{'Mobile':'60%','Pc':'30%'},
       fontFamily: "'Delius', cursive",
            fontWeight: '400',
            fontStyle: 'normal',
            cursor:'default',
            zIndex:'25',
            
         
      
    },
    Text:"Somos uma clínica de neuropedagogia especializada em compreender e potencializar os processos de aprendizagem. Atuamos com avaliações e intervenções personalizadas, integrando educação, neurociência e psicologia para atender às necessidades individuais de cada pessoa.Nosso trabalho é voltado à promoção do desenvolvimento cognitivo, emocional e acadêmico, em um ambiente acolhedor, ético e fundamentado cientificamente.",
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