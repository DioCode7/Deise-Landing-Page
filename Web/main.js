//Imports

import { UmbraRender, UmbraScenes } from "./Umbra/Umbra.js";

//Variáveis 
let LandingPageBluePrint = {
MainParent:"LandingPageMainSceneContainer",
MainContainers:{
  MainHeader:{
    Id:'LandingPageMainHeader',
    Type:'div',
    Style:{
        position:'absolute',
        width:'100%',
        backgroundColor:['rgb(112, 71, 71)','rgb(112, 69, 69)'],
        height:{"Mobile":'20%',"Pc":"34%"},
        boxShadow:"0px 6px 6px rgba(0,0,0,0.8)",
    },
    Childs:{
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