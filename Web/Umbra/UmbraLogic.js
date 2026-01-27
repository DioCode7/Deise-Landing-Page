//Imports
import { UmbraCoreBrute,UmbraNexusBrute} from "./Core.js";

//Variáveis
export let UmbraListeners = {
Add:AddNewUmbraListener,
Delete:DeleteUmbraListener,
Update:UpdateUmbraListener,

};

const UmbraViewportObserver = new IntersectionObserver((entries,UmbraViewportObserver) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
        UmbraViewportExecuter(entry.target.id);
       
        UmbraViewportObserver.unobserve(entry.target);
        }
    })
},{
     threshold: 0.2
})

function UmbraViewportExecuter(Id){
    let ListenerObj = UmbraCoreBrute.UmbraLogic.UmbraListeners[Id];
    if(ListenerObj.UmbraViewportLogic.Action){
        if(Array.isArray(ListenerObj.UmbraViewportLogic.Action)){
            for(let i = 0;i<ListenerObj.UmbraViewportLogic.Action.length;i++){
          if(ListenerObj.UmbraViewportLogic.Params[i]){
               ListenerObj.UmbraViewportLogic.Action[i](...ListenerObj.Params[i]);
          }else{
            ListenerObj.UmbraViewportLogic.Action[i]();
          }
        }
        }else{
            if(ListenerObj.UmbraViewportLogic.Params){
             ListenerObj.UmbraViewportLogic.Action(...ListenerObj.UmbraViewportLogic.Params);
            }else{
                ListenerObj.UmbraViewportLogic.Action();
            }
        }
    }
}


export const UmbraVirtualMethods = {
    Click:UmbraVirtualClick,
}
//Funções
function AddNewUmbraListener(ListenerDOM,ListenerBluePrint){
UmbraCoreBrute.UmbraLogic.UmbraListeners[ListenerDOM] = ListenerBluePrint;
if(ListenerBluePrint.UmbraViewportLogic){
    UmbraViewportObserver.observe(document.getElementById(ListenerDOM));
}
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
            if(ListenerBluePrint.FnParams()[i]){
             ListenerBluePrint.Fn[i](...ListenerBluePrint.FnParams()[i]);
            }else{
                ListenerBluePrint.Fn[i]();
            }
        }
    }else if(typeof ListenerBluePrint.Fn == 'function'){
     if(ListenerBluePrint.FnParams){
        ListenerBluePrint.Fn(...ListenerBluePrint.FnParams());
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