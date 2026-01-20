//Imports

import { UmbraCoreBrute,UmbraNexusBrute } from "./Core.js"


//Variáveis
let UmbraDeclaredStyles = UmbraCoreBrute.UmbraDOM.DeclaredStyles;
let UmbraAbsoluteStyles = UmbraCoreBrute.UmbraDOM.AbsoluteStyles;
let UmbraComputedStyles = UmbraCoreBrute.UmbraDOM.ComputedStyles;
let UmbraOverridesStyles = UmbraCoreBrute.UmbraDOM.OverridesStyles;
//Funções

export function UmbraApplyStyle(Element,Style,Type,UmbraSync = false){

    if(!UmbraSync){
    if(Type == "Overrides"){
        RegistUmbraDOM.Overrides(Element,Style);
    }
    if(Type == 'Declared'){
        let ParentTree = UmbraSimpleParentTreeMaker(Element);
        RegistUmbraDOM.Declared(Element,Style,ParentTree);
        RegistUmbraDOM.Computed(Element,Style,ParentTree);
        UmbraParentTreeMaker(Element,ParentTree);
    }
    }
    let ElementDOM;
    if(Element == 'Body'){
    ElementDOM = document.body; 
    }else if(Element == 'Document'){
        ElementDOM = document.documentElement;
    }else if(Element != 'Body' && Element != 'Document'){
     ElementDOM = document.getElementById(Element);
    }
    

    for(let Prop in Style){
        if(typeof Style[Prop] == 'object'){
            for(let PlatformProp in Style[Prop]){
              if(Array.isArray(Style[Prop][PlatformProp])){
             ElementDOM.style[Prop] = Style[Prop][UmbraCoreBrute.ClientPlataform()];
        }else if(typeof Style[Prop][PlatformProp] == 'string'){
            ElementDOM.style[Prop] = Style[Prop][UmbraCoreBrute.ClientPlataform()];
        }
            };
        }else{
        if(Array.isArray(Style[Prop])){
         let Theme = UmbraCoreBrute.UmbraDOM.UiModule.ClientTheme;
         if(Theme == 'Dark'){
           ElementDOM.style[Prop] = Style[Prop][1];
         }else if(Theme == 'Light'){
             ElementDOM.style[Prop] = Style[Prop][0];
         }
        }else if(typeof Style[Prop] == 'string'){
            ElementDOM.style[Prop] = Style[Prop];
        }
    }
}

    


  


}

let RegistUmbraDOM = {
    Declared:RegistDeclaredUmbraDOM,
    Absolute:RegistAbsoluteUmbraDOM,
    Computed:RegistComputedUmbraDOM,
    Overrides:RegistOverridesUmbraDOM,
}

function RegistDeclaredUmbraDOM(Element,Style,ParentTree){
 
   UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element] = {Style:Style,ParentTree:ParentTree};
}

function RegistAbsoluteUmbraDOM(Element,Style){
     UmbraCoreBrute.UmbraDOM.AbsoluteStyles[Element] = Style;
    
}

function RegistOverridesUmbraDOM(Element,Style){
     UmbraCoreBrute.UmbraDOM.OverridesStyles[Element] = Style;
}

function RegistComputedUmbraDOM(Element,Style,ParentTree){
     UmbraCoreBrute.UmbraDOM.ComputedStyles[Element] = {Style:Style,ParentTree:ParentTree};
}


function UmbraParentTreeMaker(Element,ParentTree){

    if(Element != "Document" && Element != "Body"){
    let ActualParent = document.getElementById(Element).parentElement;
    if(ActualParent == document.documentElement){
        ActualParent = "Document";
    }
    if(ActualParent == document.body){
        ActualParent = "Body";
    }

    let ActualTree = UmbraCoreBrute.UmbraDOM.UmbraTree;


    function ParentTreeLoop(LinearTree,Element){
        for(let i = 0;i<LinearTree.length;i++){
            if(LinearTree[i+1]){
    if(ActualTree[LinearTree[i]]){
        ActualTree = ActualTree[LinearTree[i]];
    }
    else{
   ActualTree[LinearTree[i]] = {};
   ActualTree = ActualTree[LinearTree[i]];
    }
    }else{
   ActualTree[LinearTree[i]] = {};
    };
}
}

    ParentTreeLoop(ParentTree,Element);


    }
}

function UmbraSimpleParentTreeMaker(Element){
    console.log('ID Teste:',Element);
   let ActualParent = document.getElementById(Element).parentElement;
   let ParentTreeList = [];

   
   
   function SimpleParentTreeLoop(ActualParentId){
    if(ActualParent == document.documentElement){
    ActualParentId = "Document";

   }
   else if(ActualParent == document.body){
    ActualParentId = "Body";
   }
   else if(ActualParent != document.body && ActualParent != document.documentElement){
    ActualParentId = ActualParent.id;
   }

     ParentTreeList.push(ActualParentId);
     if(document.getElementById(ActualParentId)?.parentElement){
      ActualParent = document.getElementById(ActualParentId).parentElement;
      SimpleParentTreeLoop(ActualParent);
     }

   }
   ParentTreeList.push(Element);
   SimpleParentTreeLoop(ActualParent);
   ParentTreeList.reverse();
   return ParentTreeList;
}




UmbraNexusBrute.Set(["UmbraDOM","UiModule"],{UmbraApplyStyle:UmbraApplyStyle});
