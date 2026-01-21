//Imports
import { UmbraCoreBrute,UmbraNexusBrute} from "./Core.js";

//Variáveis
export let UmbraListeners = {
Add:AddNewUmbraListener,
Delete:DeleteUmbraListener,
Update:UpdateUmbraListener,

};

export const UmbraVirtualMethods = {
    Click:UmbraVirtualClick,
}
//Funções
function AddNewUmbraListener(ListenerDOM,ListenerBluePrint){
UmbraCoreBrute.UmbraLogic.UmbraListeners[ListenerDOM] = ListenerBluePrint;
}
function DeleteUmbraListener(ListenerDOM){
delete UmbraCoreBrute.UmbraLogic.UmbraListeners[ListenerDOM];
}
function UpdateUmbraListener(ListenerDOM,ListenerBluePrint){
UmbraCoreBrute.UmbraLogic.UmbraListeners[ListenerDOM] = {...UmbraCoreBrute.UmbraLogic.UmbraListeners[ListenerDOM],...ListenerBluePrint} 
}

export function UmbraLogicCore(){
    document.addEventListener('pointerdown',(event)=>{
    let EventTargetId = event.target.id;
    if(UmbraCoreBrute.UmbraLogic.UmbraListeners[EventTargetId]){
       UmbraVirtualDispatcher(EventTargetId);  
    }
    });
    document.addEventListener('mouseover',(event)=>{
     let EventTargetId = event.target.id;
     if(UmbraCoreBrute.UmbraLogic.UmbraListeners[EventTargetId]){
        UmbraMouseEnterDispatcher(EventTargetId);
     }
    });
    document.addEventListener('mouseout',(event)=>{
     let EventTargetId = event.target.id;
     if(UmbraCoreBrute.UmbraLogic.UmbraListeners[EventTargetId]){
        UmbraMouseOutDispatcher(EventTargetId);
     }
    });
}

function UmbraVirtualDispatcher(ListenerId){
let ListenerBluePrint = UmbraCoreBrute.UmbraLogic.UmbraListeners[ListenerId];
if(ListenerBluePrint.UseFn == true){
    if(ListenerBluePrint.Fn){
     if(Array.isArray(ListenerBluePrint.Fn)){
        for(let i = 0;i<ListenerBluePrint.Fn.length;i++){
            if(ListenerBluePrint.FnParams[i]){
             ListenerBluePrint.Fn[i](...ListenerBluePrint.FnParams[i]);
            }else{
                ListenerBluePrint.Fn[i]();
            }
        }
    }else if(typeof ListenerBluePrint.Fn == 'function'){
     if(ListenerBluePrint.FnParams){
        ListenerBluePrint.Fn(...ListenerBluePrint.FnParams);
     }else{
        ListenerBluePrint.Fn();
     }
    }   
    }
}
}

function UmbraVirtualClick(VirtualElementId){
    if(UmbraCoreBrute.UmbraLogic.UmbraListeners[VirtualElementId]){
        UmbraVirtualDispatcher(VirtualElementId);
    }else{
        console.warn("Umbra Warn:",VirtualElementId," Is not a valid listener");
    }

}

function UmbraMouseEnterDispatcher(ElementId){
let ListenerBluePrint = UmbraCoreBrute.UmbraLogic.UmbraListeners[ElementId];
if(ListenerBluePrint.UmbraHover){
    UmbraCoreBrute.UmbraDOM.UiModule.UmbraApplyStyle(ElementId,ListenerBluePrint.UmbraHover.Style,'Overrides');
};

}
function UmbraMouseOutDispatcher(ElementId){
let ListenerBluePrint = UmbraCoreBrute.UmbraLogic.UmbraListeners[ElementId];
if(ListenerBluePrint.UmbraHover){
   UmbraCoreBrute.UmbraDOM.UiModule.UmbraDOM.ClearOverrides(ElementId);
 UmbraCoreBrute.UmbraDOM.UiModule.UmbraApplyStyle(ElementId,UmbraCoreBrute.UmbraDOM.DeclaredStyles[ElementId].Style,'Declared');
   
};

}



UmbraLogicCore();
UmbraNexusBrute.Set(['UmbraLogic','LogicModule'],{UmbraListeners:UmbraListeners,UmbraLogicCore:UmbraLogicCore});