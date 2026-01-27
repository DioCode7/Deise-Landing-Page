//Imports


//Variáveis
 
  export let UmbraCoreBrute = {
    ResponsivePath:"",
    ScenesNexus:{},
    UmbraTranslations:{
    
    },
    UmbraLogic:{
     UmbraListeners:{

     },
     LogicModule:{

     },
     UmbraBrain:{
      
     }
    },
    ClientPlataform:()=>{const isMobile =
  /Mobi|Android/i.test(navigator.userAgent) ||
  window.matchMedia("(pointer: coarse)").matches;

return isMobile ? "Mobile" : "Pc";},
    ClientLanguage:()=>{
      let NavLanguage = navigator.language;
      for(let language in LanguagesObj){
        if(LanguagesObj[language].LanguageNavigator.slice(0,2) == NavLanguage.slice(0,2)){
          return LanguagesObj[language].Sigla;

        }
      }

    },
    ClientTheme:()=>{
      let IsDark = window.matchMedia('(prefers-color-scheme : dark)').matches;
      return IsDark? 'Dark' : 'Light';
    },
    UmbraTime:{
      DeltaFrameRate:60,
    },
    UmbraDOM:{

      DeclaredStyles:{},
      ComputedStyles:{},
      AbsoluteStyles:{},
      OverridesStyles:{},

      UmbraTree:{"Body":{
        
      }},
      UiModule:{},
      AnimationsNexus:{},
      ActiveAnimations:{}

    }
  }

  
let LanguagesObj = {
      'Pt-Br': {
        Sigla: 'Pt-Br',
        Idioma: 'Português',
        LanguageNavigator:'pt-BR'
    },
    'En': {
        Sigla: 'En',
        Idioma: 'English',
        LanguageNavigator:'en-Us'
    },
    'Esp': {
        Sigla: 'Esp',
        Idioma: 'Español',
        LanguageNavigator:'es-ES'
    },
    'Rus': {
        Sigla: 'Rus',
        Idioma: 'Русский',
        LanguageNavigator:'ru-RU'

    },
    'Ger': {
        Sigla: 'Ger',
        Idioma: 'Deutsch', 
        LanguageNavigator:'de-DE'
    },
    'Chi': {
        Sigla: 'Chi',
        Idioma: '中文',
        LanguageNavigator:'zh-CN'
    },
    'Jap': {
        Sigla: 'Jap',
        Idioma: '日本語',
        LanguageNavigator:'ja-JP'
    }
    
  }

//Funções

export let UmbraNexusBrute = {
  Set:SetUmbraConfig,
  Update:UpdateUmbraConfig,

};

function SetUmbraConfig(Path,Value){
  if(Array.isArray(Path)){
    let FinalPath = UmbraCoreBrute;
    let NewPath = null;
  for(let i = 0;i<Path.length;i++){
    NewPath = Path[i];
    if(Path[i + 1]){
    FinalPath = FinalPath[NewPath];
    }
  }
  FinalPath[NewPath] = Value;
  }else{
  UmbraCoreBrute[Path] = Value;
  }
}


function UpdateUmbraConfig(Path,Value){
  if(Array.isArray(Path)){
    let FinalPath = UmbraCoreBrute;
    let NewPath = null;
  for(let i = 0;i<Path.length;i++){
    NewPath = Path[i];
    if(Path[i + 1]){
    FinalPath = FinalPath[NewPath];
    }
  }

  if(typeof FinalPath[NewPath] == 'object'){
    FinalPath[NewPath] = {...FinalPath[NewPath],...Value};
  }

  }else{
  UmbraCoreBrute[Path] = {... UmbraCoreBrute[Path],...Value};;
  }

}
export function StartUmbra(){

}