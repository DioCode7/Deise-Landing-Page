//Imports
import { UmbraCoreBrute, UmbraNexusBrute } from "./Core.js";
import { AwaitFlag } from "./UmbraLogic.js";

//Variáveis

let UmbraUI = UmbraCoreBrute.UmbraDOM.UiModule;

//Funções

export let UmbraAnimationsCore = {
    New:UmbraNewAnimation,
    Delete:UmbraDeleteAnimation,
    TurnOff:UmbraTurnOffAnimation,
    Active:UmbraActiveAnimation,
    GroupActive:UmbraGroupAnimationsActive,
}


export let UmbraScenesBrute = {
    New:UmbraNewScene,
    Active:ActiveUmbraScene,
    Verify:VerifyUmbraScene,
    TurnOff:TurnOfUmbraScene,
    Delete:DeleteUmbraScene,
    Transition:TransitionUmbraScene,

};

export let UmbraDOM = {
  Delete:UmbraDeleteComponenent,
  ClearChilds:UmbraClearChilds,
  GetChilds:UmbraGetChilds,
  ClearOverrides:UmbraClearOverrides,
  UpdateActiveDOM:UmbraUpdateActiveDOM,

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
        document.getElementById(Id).remove();
      
    }
}

function UmbraNewScene(SceneID,PageBind = null,ContainerStyle = null){

    UmbraCoreBrute.ScenesNexus[SceneID] = {
        Active:false,
    };

    if(ContainerStyle != null){
        if(!UmbraCoreBrute.UmbraDOM.DeclaredStyles[SceneID+'Container']){
        UmbraCoreBrute.UmbraDOM.DeclaredStyles[SceneID+'Container'] = {};
        }
        UmbraCoreBrute.UmbraDOM.DeclaredStyles[SceneID+'Container'].Style = ContainerStyle;
    }

    if(PageBind != null){
      UmbraCoreBrute.ScenesNexus[SceneID].PageBindBluePrint = PageBind;
    }


    

    

}

async function TransitionUmbraScene(OldSceneId,NewSceneId,TransitionAnimation = null,TransitionElement=null,ContainerStyle = null,EntryAnimations=null){
    if(TransitionAnimation != null){
        if(!UmbraCoreBrute.UmbraDOM.AnimationsNexus[TransitionAnimation.In].AwaitFlag){
       UmbraCoreBrute.UmbraDOM.AnimationsNexus[TransitionAnimation.In].AwaitFlag =  NewSceneId+'AwaitFlagTransitionIn';;
       UmbraCoreBrute.UmbraDOM.AnimationsFlags[TransitionAnimation.In.AwaitFlag] = false;
        }
        if(TransitionElement != null){
            if(!UmbraCoreBrute.UmbraDOM.AnimationsNexus[TransitionElement.OutAnimation].AwaitFlag){
            UmbraCoreBrute.UmbraDOM.AnimationsNexus[TransitionElement.OutAnimation].AwaitFlag =  NewSceneId+'AwaitFlagTransitionOutElement';;
       UmbraCoreBrute.UmbraDOM.AnimationsFlags[TransitionElement.OutAnimation.AwaitFlag] = false;
            }
        }
         if(!UmbraCoreBrute.UmbraDOM.AnimationsNexus[TransitionAnimation.Out].AwaitFlag){
       UmbraCoreBrute.UmbraDOM.AnimationsNexus[TransitionAnimation.Out].AwaitFlag =  OldSceneId+'AwaitFlagTransitionOut';
       UmbraCoreBrute.UmbraDOM.AnimationsFlags[TransitionAnimation.Out.AwaitFlag] = false;
         }
       let InFlag =  UmbraCoreBrute.UmbraDOM.AnimationsNexus[TransitionAnimation.In].AwaitFlag;
       let OutFlag =  UmbraCoreBrute.UmbraDOM.AnimationsNexus[TransitionAnimation.Out].AwaitFlag;
       let ElementOutFlag = UmbraCoreBrute.UmbraDOM.AnimationsNexus[TransitionElement.OutAnimation].AwaitFlag;
       let AnimationTarget = OldSceneId+'Container';
       if(TransitionAnimation.NewElement){
        if(!document.getElementById(TransitionAnimation.NewElement.Id)){
       UmbraMainRender('Document',{'NewElement':TransitionAnimation.NewElement});
        }
       AnimationTarget = TransitionAnimation.NewElement.Id;
       
       }
       if(TransitionElement != null){
        if(!document.getElementById(TransitionElement.Id)){
     UmbraMainRender('Document',{'NewElement':TransitionElement});
        }
          if(TransitionElement.InAnimation){
             UmbraAnimationsCore.Active(TransitionElement.InAnimation,TransitionElement.Id);
          }
       }
       
       UmbraAnimationsCore.Active(TransitionAnimation.Out,AnimationTarget);
       await UmbraCoreBrute.UmbraLogic.LogicModule.UmbraAwaitFlag(()=>UmbraCoreBrute.UmbraDOM.AnimationsFlags[OutFlag]);   
       TurnOfUmbraScene(OldSceneId);

              UmbraCoreBrute.UmbraDOM.AnimationsFlags[TransitionAnimation.Out.AwaitFlag] = false;
        
            if(TransitionElement != null){
          if(TransitionElement.OutAnimation){
             UmbraAnimationsCore.Active(TransitionElement.OutAnimation,TransitionElement.Id);
              await UmbraCoreBrute.UmbraLogic.LogicModule.UmbraAwaitFlag(()=>UmbraCoreBrute.UmbraDOM.AnimationsFlags[ElementOutFlag]);   
            UmbraDOM.Delete(TransitionElement.Id);   

          }else{  
          UmbraDOM.Delete(TransitionElement.Id);
          }
       }
       
        UmbraAnimationsCore.Active(TransitionAnimation.In,AnimationTarget);
         ActiveUmbraScene(NewSceneId,ContainerStyle);
       await UmbraCoreBrute.UmbraLogic.LogicModule.UmbraAwaitFlag(()=>UmbraCoreBrute.UmbraDOM.AnimationsFlags[InFlag]);   
    UmbraCoreBrute.UmbraDOM.AnimationsFlags[TransitionAnimation.In.AwaitFlag] = false;
    if(EntryAnimations != null){
        EntryAnimationsFunction(EntryAnimations);
    }
     if(TransitionAnimation.NewElement){
        UmbraDOM.Delete(TransitionAnimation.NewElement.Id);
       
       }
    }else{
    TurnOfUmbraScene(OldSceneId);
    ActiveUmbraScene(NewSceneId,ContainerStyle);
    }

}

function EntryAnimationsFunction(EntryAnimations){
    
  for(let Group in EntryAnimations){
    UmbraGroupAnimationsActive(EntryAnimations[Group].Animation,EntryAnimations[Group].Elements);
  }
}

function UmbraGroupAnimationsActive(Animation,Group){
  for(let i = 0;i<Group.length;i++){
    UmbraAnimationsCore.Active(Animation,Group[i]);
  }
}



function ActiveUmbraScene(SceneID,ContainerStyle = null){
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
        backgroundColor:'rgba(255, 0, 0, 0)',
    };

    if(ContainerStyle != null){
        SceneContainerStyle = ContainerStyle;
    }

    if(UmbraCoreBrute.UmbraDOM.DeclaredStyles[SceneID + 'Container']?.Style){
        SceneContainerStyle = UmbraCoreBrute.UmbraDOM.DeclaredStyles[SceneID + 'Container'].Style;
    }

    UmbraUI.UmbraApplyStyle(SceneContainer.id,SceneContainerStyle,'Declared');

    if(UmbraCoreBrute.ScenesNexus[SceneID].PageBindBluePrint){
        UmbraPageRender(UmbraCoreBrute.ScenesNexus[SceneID].PageBindBluePrint);
    }




    }else{
        console.warn("Umbra:Active Scene Need use of a Existing Scene!");
    }


};

function TurnOfUmbraScene(SceneID){
     if(UmbraCoreBrute.ScenesNexus[SceneID]){
    UmbraCoreBrute.ScenesNexus[SceneID].Active = false;

    let SceneContainer = document.getElementById(SceneID + 'Container');
    let ActualStyle =  UmbraCoreBrute.UmbraDOM.DeclaredStyles[SceneID + 'Container'].Style;
    UmbraDOM.Delete(SceneContainer.id);
    UmbraCoreBrute.UmbraDOM.DeclaredStyles[SceneID + 'Container'] = {};
    UmbraCoreBrute.UmbraDOM.DeclaredStyles[SceneID + 'Container'].Style = ActualStyle ;




    }else{
        console.warn("Umbra:TurnOf Scene Need use of a Existing Scene!");
    }


}

function DeleteUmbraScene(SceneID){
  delete UmbraCoreBrute.ScenesNexus[SceneID];
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
       if(MainParent == 'Body'){
document.body.appendChild(ChildDOM);
       }
       if(MainParent == 'Document'){
document.documentElement.appendChild(ChildDOM);
       }
       if(MainParent != 'Document' && MainParent != 'Body'){
        document.getElementById(MainParent).appendChild(ChildDOM);
    }
        if(BluePrint[Child].InnerType){
            ChildDOM.type = BluePrint[Child].InnerType;
        }
        if(BluePrint[Child].Src){
            ChildDOM.src = BluePrint[Child].Src;
        }
        if(BluePrint[Child].Text){
            if(typeof BluePrint[Child].Text == 'string'){
        ChildDOM.innerText = BluePrint[Child].Text;
            }
            else if(typeof BluePrint[Child].Text == 'object' && !Array.isArray(BluePrint[Child].Text)){
            ChildDOM.innerText = BluePrint[Child].Text[UmbraCoreBrute.ClientLanguage()];
            }
            else if(typeof BluePrint[Child].Text == 'function'){
           ChildDOM.innerText = BluePrint[Child].Text();
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
   UmbraCoreBrute.UmbraLogic.UmbraBrain[TriggerId].BindingTriggerStats = false;
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

function UmbraClearOverrides(ElementId){
    delete UmbraCoreBrute.UmbraDOM.OverridesStyles[ElementId];
}



function UmbraNewAnimation(Id,AnimationConfig){
    AnimationConfig.Id = Id;
     UmbraCoreBrute.UmbraDOM.AnimationsNexus[Id] = AnimationConfig;
}


let UmbraMetricsAnimations = [
    'left',
    'right',
    'top',
    'bottom',
    'fontSize',
    'height',
    'width',

]

let UmbraNoMetricsAnimations = [
    'opacity',
    'scale',
];

function UmbraAnimationsSpeedCalc(AnimationConfig,Element){
    let DeclaredTime = AnimationConfig.Time;

        for(let Prop in AnimationConfig.Properties){
            if(UmbraMetricsAnimations.includes(Prop) || UmbraNoMetricsAnimations.includes(Prop)){
        let NewSpeed = 0;
        let StartValue = AnimationConfig.Properties[Prop].StartIn;
        let FinalValue = AnimationConfig.Properties[Prop].EndIn;
        if(FinalValue == 'Actual'){
            if(typeof UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop] == 'object'
                 && !Array.isArray(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop])){
                     let ClientPlataform = UmbraCoreBrute.ClientPlataform();
                    if(typeof UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform] == 'object' && 
                        !Array.isArray(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform])
                    ){
                        if(ClientPlataform == 'Mobile'){
                            let Orientation = UmbraCoreBrute.WindowOrientantion();
                            if(Array.isArray(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform][Orientation])){
                        if(ClientTheme == 'Dark'){
                             FinalValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform][Orientation][1]);
                             }
                         if(ClientTheme == 'Light'){
                             FinalValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform][Orientation][0]);
                            }
                            }else{
                                FinalValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform][Orientation]);
                            }
                        }
                    }else{
              
               if(Array.isArray(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform])){
                let ClientTheme = UmbraCoreBrute.ClientTheme();
                if(ClientTheme == 'Dark'){
                    FinalValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform][1]);
                }
                  if(ClientTheme == 'Light'){
                    FinalValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform][0]);
                }
               }else{
                 FinalValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform]);
               
               }
            }}else if(typeof UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop] == 'string'){
            FinalValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop]);
            }else if(Array.isArray(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop])){
                let ClientTheme = UmbraCoreBrute.ClientTheme();
                if(ClientTheme == 'Dark'){
                    FinalValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][1]);
                }
                  if(ClientTheme == 'Light'){
                    FinalValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][0]);
                }
            }
            AnimationConfig.Properties[Prop].EndIn = FinalValue;
        }
         if(StartValue == 'Actual'){
           if(typeof UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop] == 'object'
                 && !Array.isArray(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop])){
               let ClientPlataform = UmbraCoreBrute.ClientPlataform();
               if(Array.isArray(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform])){
                let ClientTheme = UmbraCoreBrute.ClientTheme();
                if(ClientTheme == 'Dark'){
                   StartValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform][1]);
                }
                  if(ClientTheme == 'Light'){
                   StartValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform][0]);
                }
               }else{
                StartValue = UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][ClientPlataform];
               }
            }else if(typeof UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop] == 'string'){
           StartValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop]);
            }else if(Array.isArray(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop])){
                let ClientTheme = UmbraCoreBrute.ClientTheme();
                if(ClientTheme == 'Dark'){
                    StartValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][1]);
                }
                  if(ClientTheme == 'Light'){
                    StartValue = parseFloat(UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element].Style[Prop][0]);
                }
            }
            AnimationConfig.Properties[Prop].EndIn = StartValue;
        }
       
        let ValuesDiff = FinalValue - StartValue;  
      
        AnimationConfig.Properties[Prop].Speed = ValuesDiff;
    }
        }
        return AnimationConfig;
    }

function UmbraActiveAnimation(Id,Element){
 
    UmbraCoreBrute.UmbraDOM.AnimationsNexus[Id].State = 'Active';
        let NewAnimationObj = structuredClone(UmbraCoreBrute.UmbraDOM.AnimationsNexus[Id]);
        NewAnimationObj = UmbraAnimationsSpeedCalc(NewAnimationObj,Element);
        let DeclaredTime = NewAnimationObj.Time;
        let DeclaredFrameRate = NewAnimationObj.FrameRate;
        let DeclaredRepeat = NewAnimationObj.Repeat;

         if(Object.keys(UmbraCoreBrute.UmbraDOM.ElementsAnimations).includes(Element)){
            for(let Animation in UmbraCoreBrute.UmbraDOM.ElementsAnimations[Element]){
              
                delete UmbraCoreBrute.UmbraDOM.ActiveAnimations[UmbraCoreBrute.UmbraDOM.ElementsAnimations[Element][Animation]];
            }
           }
        for(let Prop in NewAnimationObj.Properties){
            NewAnimationObj.Properties[Prop] = {...NewAnimationObj.Properties[Prop],
                'RealStartIn':NewAnimationObj.Properties[Prop].StartIn,
                'FrameRateController':structuredClone(DeclaredFrameRate),
                'Time':DeclaredTime,'Repeat':DeclaredRepeat,'FrameRate':DeclaredFrameRate,'PropertieName':Prop,
            }
            if(UmbraCoreBrute.UmbraDOM.AnimationsNexus[Id].Curve){
                NewAnimationObj.Properties[Prop]['Curve'] = structuredClone(UmbraCoreBrute.UmbraDOM.AnimationsNexus[Id].Curve);
            }
             if(UmbraCoreBrute.UmbraDOM.AnimationsNexus[Id].AwaitFlag){
                  NewAnimationObj.Properties[Prop]['AwaitFlag'] = structuredClone(UmbraCoreBrute.UmbraDOM.AnimationsNexus[Id].AwaitFlag);
            UmbraCoreBrute.UmbraDOM.AnimationsFlags[UmbraCoreBrute.UmbraDOM.AnimationsNexus[Id].AwaitFlag] = false;
          }
           NewAnimationObj.Properties[Prop].StartTime = performance.now();

          

           if(UmbraCoreBrute.UmbraDOM.ElementsAnimations[Element]){
            UmbraCoreBrute.UmbraDOM.ElementsAnimations[Element].push(Id+Element+Prop);
           }else{
            UmbraCoreBrute.UmbraDOM.ElementsAnimations[Element] = [];
               UmbraCoreBrute.UmbraDOM.ElementsAnimations[Element].push(Id+Element+Prop);
           }
           

            UmbraCoreBrute.UmbraDOM.ActiveAnimations[Id+Element+Prop] = {AnimationConfig:NewAnimationObj.Properties[Prop],
                Element:Element,Id:Id};
         
            
        }

        
        


}

function UmbraDeleteAnimation(Id){
     delete UmbraCoreBrute.UmbraDOM.AnimationsNexus[Id];
}

function UmbraTurnOffAnimation(){

}

function UmbraAnimationRender(AnimationConfig,Element,Id){
    
       
    
    if(!document.getElementById(Element)){
    delete UmbraCoreBrute.UmbraDOM.ActiveAnimations[Id + Element + AnimationConfig.PropertieName];
    }
    let FrameRateController = AnimationConfig.FrameRateController;
    let Speed = AnimationConfig.Speed;
    let StartValue = AnimationConfig.StartIn;
    let EndValue = AnimationConfig.EndIn;
    let Now = performance.now();
    let EnlapsedTime = Now - AnimationConfig.StartTime;
    let Time = EnlapsedTime / UmbraCoreBrute.UmbraDOM.AnimationsNexus[Id].Time;
    Time = Math.min(Time,1);
    let Repeat = AnimationConfig.Repeat;
    let FrameRate = AnimationConfig.FrameRate;
    let ActualValue = StartValue;
    let Metric = null;
    let RepeatControler = Repeat;
   // let DeltaFrameRate = UmbraCoreBrute.UmbraTime.DeltaFrameRate;
     
    
    //if(DeltaFrameRate <= 0){
       // console.error( 'reser')
        //  AnimationConfig.FrameRateController = structuredClone(AnimationConfig.FrameRate);
    //}
   // if(AnimationConfig.FrameRateController <= 0){return;};
   //AnimationConfig.FrameRateController -= 1;
       if(UmbraMetricsAnimations.includes(AnimationConfig.PropertieName)){
        Metric = AnimationConfig.Metric;
        }
        if(UmbraNoMetricsAnimations.includes(AnimationConfig.PropertieName)){
         Metric = 'NoMetric';
        }

    if(Metric != null){
        if(AnimationConfig.Curve){       
       ActualValue = UmbraInterpolationEngine(AnimationConfig.RealStartIn,EndValue,Time,AnimationConfig.Curve,);
        }else{
        ActualValue = AnimationConfig.RealStartIn + Speed * Time;
        }
    }

    

    if(Time >= 1){

        if(AnimationConfig.Repeat > 0 || Repeat == 'Infinity'){
            if(Repeat != 'Infinity'){
            AnimationConfig.Repeat -= 1;
            }
            
            ActualValue = AnimationConfig.RealStartIn;
             
        }else{
            ActualValue = EndValue;
            UmbraCoreBrute.UmbraDOM.AnimationsNexus[Id].State = 'Off';
            if(UmbraCoreBrute.UmbraDOM.AnimationsNexus[Id].AwaitFlag){
                
                UmbraCoreBrute.UmbraDOM.AnimationsFlags[UmbraCoreBrute.UmbraDOM.AnimationsNexus[Id].AwaitFlag] = true;
            }
            console.error(UmbraCoreBrute.UmbraDOM.ActiveAnimations[Id + Element + AnimationConfig.PropertieName])
            delete UmbraCoreBrute.UmbraDOM.ActiveAnimations[Id + Element + AnimationConfig.PropertieName];

        }
    }
    if(Metric != null){
        console.warn(ActualValue + Metric,Speed);
        AnimationConfig.StartIn = ActualValue;
    if(Metric == 'NoMetric'){
  UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element]['Style'][AnimationConfig.PropertieName] = String(ActualValue);

    }else{
    UmbraCoreBrute.UmbraDOM.DeclaredStyles[Element]['Style'][AnimationConfig.PropertieName] = ActualValue + Metric;
    }
    UmbraUI.UmbraApplyStyle(Element,{backgroundColor:'red'},'Declared',true);

    }


    
    
 

    


}

function UmbraAnimationLoop(){
    for(let Animation in UmbraCoreBrute.UmbraDOM.ActiveAnimations){
        try{
    UmbraAnimationRender(UmbraCoreBrute.UmbraDOM.ActiveAnimations[Animation].AnimationConfig,
    UmbraCoreBrute.UmbraDOM.ActiveAnimations[Animation].Element,UmbraCoreBrute.UmbraDOM.ActiveAnimations[Animation]?.Id )
    }catch(e){
        console.error(e,UmbraCoreBrute.UmbraDOM.ActiveAnimations[Animation]?.Id);
    }
    }

    requestAnimationFrame(UmbraAnimationLoop);
}
UmbraAnimationLoop();

function UmbraAnimationRenderMetrics(){

}

const UmbraCurves = {
 'Ease-In':UmbraEaseInCurve,
 'Ease-Out':UmbraEaseOutCurve,
  'Ease-Out+':UmbraEaseOutPlusCurve,
    'Ease-Out-Smooth':UmbraEaseOutSmoothCurve,
  'Ease-In-Out':UmbraEaseInOutCurve
};

function UmbraInterpolationEngine(start, end, t, curve) {
    let easedT = curve && UmbraCurves[curve]
        ? UmbraCurves[curve](t)
        : t;

    return start + (end - start) * easedT;
}

function UmbraEaseInCurve(t){

    return t*t; 


}

function UmbraEaseOutCurve(t){

  return 1 - Math.pow(1 - t, 2);

}

function UmbraEaseOutSmoothCurve(t){

  return 1 - Math.pow(1 - t, 5);

}

function UmbraEaseInOutCurve(t) {
    return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function UmbraEaseOutPlusCurve(t){
  const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}


function UmbraUpdateActiveDOM(){

alert('oi');



}

screen.orientation.addEventListener('change',UmbraDOM.UpdateActiveDOM)