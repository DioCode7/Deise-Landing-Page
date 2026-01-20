//Imports
import { UmbraCoreBrute, UmbraNexusBrute } from "./Core.js";

//Variáveis

let UmbraUI = UmbraCoreBrute.UmbraDOM.UiModule;

//Funções


export let UmbraScenesBrute = {
    New:UmbraNewScene,
    Active:ActiveUmbraScene,
    Verify:VerifyUmbraScene,
    TurnOf:TurnOfUmbraScene,

};

export let UmbraDOM = {
  Delete:UmbraDeleteComponenent,
  ClearChilds:UmbraClearChilds,
  GetChilds:UmbraGetChilds,
};

function UmbraClearChilds(Id){
    let ComponentChilds = UmbraDOM.GetChilds(Id);
    if(ComponentChilds){
     for(let i = 0;i<ComponentChilds.length;i++){
        UmbraDeleteComponenent(ComponentChilds[i]);
     }
    }
}

function UmbraGetChilds(ParentId){
  let ActualTree = UmbraCoreBrute.UmbraDOM.UmbraTree;
  console.error("oiii",UmbraCoreBrute.UmbraDOM.DeclaredStyles[ParentId].ParentTree);
  let ParentTree = UmbraCoreBrute.UmbraDOM.DeclaredStyles[ParentId].ParentTree;
  let DirectChilds = null;
  for(let i = 0;i<ParentTree.length;i++){
    if(ParentTree[i] == ParentId){
    if(ActualTree[ParentId]){
        DirectChilds = Object.keys(ActualTree[ParentId]);
    }
    }else{
     if(ActualTree[ParentTree[i]]){
        ActualTree = ActualTree[ParentTree[i]];
     }
    }
  }
  return DirectChilds;
}

function UmbraDeleteComponenent(Id){

    if(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Id]?.ParentTree){
       let ParentTree = UmbraCoreBrute.UmbraDOM.DeclaredStyles[Id].ParentTree;
       let ActualTree = UmbraCoreBrute.UmbraDOM.UmbraTree;
       for(let i = 0;i<ParentTree.length;i++){
        if(ParentTree[i] == Id){
        if(ActualTree[ParentTree[i]]){
            delete ActualTree[ParentTree[i]];
        }
    }else{
        if(ActualTree[ParentTree[i]]){
            ActualTree = ActualTree[ParentTree[i]];
        }
    }
       }
    }
    
    let ComponentChilds = UmbraDOM.GetChilds(Id);

    if(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Id]){
    delete UmbraCoreBrute.UmbraDOM.DeclaredStyles[Id];
    }
    if(UmbraCoreBrute.UmbraDOM.ComputedStyles[Id]){
    delete UmbraCoreBrute.UmbraDOM.ComputedStyles[Id];
    }
    if(UmbraCoreBrute.UmbraDOM.AbsoluteStyles[Id]){
    delete UmbraCoreBrute.UmbraDOM.AbsoluteStyles[Id];
    }
    if(UmbraCoreBrute.UmbraDOM.OverridesStyles[Id]){
    delete UmbraCoreBrute.UmbraDOM.OverridesStyles[Id];
    }
    if(UmbraCoreBrute.UmbraLogic.UmbraListeners[Id]){
        delete UmbraCoreBrute.UmbraLogic.UmbraListeners[Id];
    }

    if(ComponentChilds){
     for(let i = 0;i<ComponentChilds.length;i++){
        UmbraDeleteComponenent(ComponentChilds[i]);
     }
    }

    if(document.getElementById(Id)){
        document.getElementById(Id).remove;
      
    }
}

function UmbraNewScene(SceneID){

    UmbraCoreBrute.ScenesNexus[SceneID] = {
        Active:false,
    };

    

    

}

function ActiveUmbraScene(SceneID){
    if(UmbraCoreBrute.ScenesNexus[SceneID]){
    UmbraCoreBrute.ScenesNexus[SceneID].Active = true;

    let SceneContainer = document.createElement('div');
    SceneContainer.id = SceneID + 'Container';
    document.body.appendChild(SceneContainer);
    let SceneContainerStyle = {
        position:'absolute',
        width:'100%',
        height:'100%',
        left:'0px',
        top:'0px',
        backgroundColor:'rgba(0,0,0,0)',
    };

    UmbraUI.UmbraApplyStyle(SceneContainer.id,SceneContainerStyle,'Declared');




    }else{
        console.warn("Umbra:Active Scene Need use of a Existing Scene!");
    }


};

function TurnOfUmbraScene(SceneID){

}

function VerifyUmbraScene(SceneID){
    let Bool = false;

    if(Object.keys(UmbraCoreBrute.ScenesNexus).includes(SceneID)){
        Bool = true;
    };

    return Bool;
}

export function ClientTheme(){
    let IsDark = window.matchMedia('(prefers-color-scheme : dark)').matches;
      return IsDark? 'Dark' : 'Light';
}

export function UmbraMainRender(MainParent,BluePrint){
    for(let Child in BluePrint){
        if(BluePrint[Child].Method){
        UmbraRenderMethods[BluePrint[Child].Method.Type](BluePrint[Child].Method.BluePrint);
        }else{
        let ChildDOM = document.createElement(BluePrint[Child].Type);
        ChildDOM.id = BluePrint[Child].Id;

        document.getElementById(MainParent).appendChild(ChildDOM);
        if(BluePrint[Child].InnerType){
            ChildDOM.type = BluePrint[Child].InnerType;
        }
        if(BluePrint[Child].Text){
            if(typeof BluePrint[Child].Text == 'string'){
        ChildDOM.innerText = BluePrint[Child].Text;
            }
            else if(typeof BluePrint[Child].Text == 'object'){
            ChildDOM.innerText = BluePrint[Child].Text[UmbraCoreBrute.ClientLanguage()];
            }
        }
        if(BluePrint[Child].Style){
          UmbraCoreBrute.UmbraDOM.UiModule.UmbraApplyStyle(ChildDOM.id,BluePrint[Child].Style,"Declared");  
        }
        if(BluePrint[Child].Listener){
            UmbraCoreBrute.UmbraLogic.LogicModule.UmbraListeners.Add(BluePrint[Child].Id,BluePrint[Child].Listener);
        }
        if(BluePrint[Child].Childs){
            UmbraMainRender(BluePrint[Child].Id,BluePrint[Child].Childs);
        }
    }
}

}

export function UmbraPageRender(BluePrint){
  let RenderBluePrint = BluePrint.MainContainers;
  let MainParent = BluePrint.MainParent;
  UmbraMainRender(MainParent,RenderBluePrint);
}
UmbraNexusBrute.Update(["UmbraDOM","UiModule"],{
    UmbraScenes:UmbraScenesBrute,
    ClientTheme:ClientTheme,
    UmbraMainRender:UmbraMainRender,
    UmbraPageRender:UmbraPageRender,
    UmbraDOM:UmbraDOM});

let UmbraRenderMethods = {
    'BindingContent':UmbraBindingContentRender,

}

export function UmbraBindingContentRender(BluePrint){
     UmbraMainRender(BluePrint.MainContainer.Parent,{'MainContainer':BluePrint.MainContainer});
     for(let Trigger in BluePrint.BindingTriggers){
        let TriggerBluePrint = BluePrint.BindingTriggers[Trigger];
        TriggerBluePrint['Listener'] = {
            UseFn:true,
            Fn:UmbraBindingContentHandler,
            FnParams:[Trigger,TriggerBluePrint,BluePrint],

        };
        UmbraMainRender(TriggerBluePrint.Parent,{'Trigger':TriggerBluePrint});  
        if(UmbraCoreBrute.UmbraLogic.UmbraBrain[BluePrint.BindingTriggers[Trigger].Id]){
         UmbraCoreBrute.UmbraLogic.UmbraBrain[BluePrint.BindingTriggers[Trigger].Id]['BindingTriggerStats'] = false;
          UmbraCoreBrute.UmbraLogic.UmbraBrain[BluePrint.BindingTriggers[Trigger].Id]['ComponentType'] = 'BindingTrigger';
        }else{
        UmbraCoreBrute.UmbraLogic.UmbraBrain[BluePrint.BindingTriggers[Trigger].Id] = {
            BindingTriggerStats:false,
            ComponentType:'BindingTrigger',
        };
        }
     }
     if(BluePrint.StartBinding){
        console.warn(BluePrint.StartBinding, document.getElementById(BluePrint.StartBinding))
        document.getElementById(BluePrint.StartBinding).click();
     }
     
     
}


function UmbraBindingContentHandler(TriggerName,TriggerBluePrint,BluePrint){
let ActiveBinding = null;
for(let Trigger in BluePrint.BindingTriggers){
    let TriggerId = BluePrint.BindingTriggers[Trigger].Id;
  if(UmbraCoreBrute.UmbraLogic.UmbraBrain[TriggerId].BindingTriggerStats == true){
   UmbraCoreBrute.UmbraLogic.UmbraBrain[TriggerId].BindingTriggerStats == false;
   let BindingContent = BluePrint.BindingTriggers[Trigger].BindingContent;
   for(let Content in BindingContent){
    console.warn('oiii',BindingContent[Content].Id);
    UmbraDOM.Delete(BindingContent[Content].Id);
    console.warn('UmbraCoreee',UmbraCoreBrute);
   }
   
  }
}
let BindingContentRender = TriggerBluePrint.BindingContent;
UmbraMainRender(TriggerBluePrint.Id,BindingContentRender);
UmbraCoreBrute.UmbraLogic.UmbraBrain[TriggerBluePrint.Id].BindingTriggerStats = true;
}