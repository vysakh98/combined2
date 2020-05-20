import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    PB:[],
    ProjectCode:0,
    sosAmount:0,
  },
  getters:{
   Tables: state =>{

     var personalCost=[]
     var personalCost2=[]
     var travel=[]
     var travel2=[]
     var subContracting=[]
     var subContracting2=[]
     var projectSupplies=[]
     var projectSupplies2=[]
     var maWarray=[]
     var maWarray2=[]
     var peMarray=[]
     var peMarray2=[]
     var loCarray=[]
     var loCarray2=[]

     state.PB[0][0].BCs.map(data=>{
        if(data.Type=="TotalCost" && data.CId==1){
        personalCost.push({BCId:data.BCId,ProjectBudjetId:data.ProjectBudjetId,personalCosts:data.JobTitle,Units:data.Units,Total_No_of_Units:data.NoOfUnits,Total_Unit_value:data.UnitValue,Total_Total_cost:data.Total})
        }
        if(data.Type=="Year1"  && data.CId==1){
        personalCost.push({ProjectBudjetId:data.ProjectBudjetId,year1_Units:data.Units,Year1_No_of_Units:data.NoOfUnits,Year1_Unit_value:data.UnitValue,Detailed_Explanation:data.Description,Year1_Total_cost:data.Total,Actions:''})
        }
        if(data.Type=="TotalCost" && data.CId==6){
        travel.push({BCId:data.BCId,ProjectBudjetId:data.ProjectBudjetId,personalCosts:data.JobTitle,Units:data.Units,Total_No_of_Units:data.NoOfUnits,Total_Unit_value:data.UnitValue,Total_Total_cost:data.Total})
        }
         if(data.Type=="Year1" && data.CId==6){
        travel.push({ProjectBudjetId:data.ProjectBudjetId,year1_Units:data.Units,Year1_No_of_Units:data.NoOfUnits,Year1_Unit_value:data.UnitValue,Detailed_Explanation:data.Description,Year1_Total_cost:data.Total,Actions:''})
        }
        if(data.Type=="TotalCost" && data.CId==2){
        subContracting.push({BCId:data.BCId,ProjectBudjetId:data.ProjectBudjetId,personalCosts:data.JobTitle,Units:data.Units,Total_No_of_Units:data.NoOfUnits,Total_Unit_value:data.UnitValue,Total_Total_cost:data.Total})
        }
        if(data.Type=="Year1" && data.CId==2){
        subContracting.push({ProjectBudjetId:data.ProjectBudjetId,year1_Units:data.Units,Year1_No_of_Units:data.NoOfUnits,Year1_Unit_value:data.UnitValue,Detailed_Explanation:data.Description,Year1_Total_cost:data.Total,Actions:''})
        }
        if(data.Type=="TotalCost" && data.CId==4){
        projectSupplies.push({BCId:data.BCId,ProjectBudjetId:data.ProjectBudjetId,personalCosts:data.JobTitle,Units:data.Units,Total_No_of_Units:data.NoOfUnits,Total_Unit_value:data.UnitValue,Total_Total_cost:data.Total})
        }
        if(data.Type=="Year1" && data.CId==4){
        projectSupplies.push({ProjectBudjetId:data.ProjectBudjetId,year1_Units:data.Units,Year1_No_of_Units:data.NoOfUnits,Year1_Unit_value:data.UnitValue,Detailed_Explanation:data.Description,Year1_Total_cost:data.Total,Actions:''})
        }
        if(data.Type=="TotalCost" && data.CId==7){
        maWarray.push({BCId:data.BCId,ProjectBudjetId:data.ProjectBudjetId,personalCosts:data.JobTitle,Units:data.Units,Total_No_of_Units:data.NoOfUnits,Total_Unit_value:data.UnitValue,Total_Total_cost:data.Total})
        }
        if(data.Type=="Year1" && data.CId==7){
        maWarray.push({ProjectBudjetId:data.ProjectBudjetId,year1_Units:data.Units,Year1_No_of_Units:data.NoOfUnits,Year1_Unit_value:data.UnitValue,Detailed_Explanation:data.Description,Year1_Total_cost:data.Total,Actions:''})
        }
         if(data.Type=="TotalCost" && data.CId==5){
        peMarray.push({BCId:data.BCId,ProjectBudjetId:data.ProjectBudjetId,personalCosts:data.JobTitle,Units:data.Units,Total_No_of_Units:data.NoOfUnits,Total_Unit_value:data.UnitValue,Total_Total_cost:data.Total})
        }
         if(data.Type=="Year1" && data.CId==5){
        peMarray.push({ProjectBudjetId:data.ProjectBudjetId,year1_Units:data.Units,Year1_No_of_Units:data.NoOfUnits,Year1_Unit_value:data.UnitValue,Detailed_Explanation:data.Description,Year1_Total_cost:data.Total,Actions:''})
        }
        if(data.Type=="TotalCost" && data.CId==3){
        loCarray.push({BCId:data.BCId,ProjectBudjetId:data.ProjectBudjetId,personalCosts:data.JobTitle,Units:data.Units,Total_No_of_Units:data.NoOfUnits,Total_Unit_value:data.UnitValue,Total_Total_cost:data.Total})
        }
         if(data.Type=="Year1" && data.CId==3){
        loCarray.push({ProjectBudjetId:data.ProjectBudjetId,year1_Units:data.Units,Year1_No_of_Units:data.NoOfUnits,Year1_Unit_value:data.UnitValue,Detailed_Explanation:data.Description,Year1_Total_cost:data.Total,Actions:''})
        }
    })

     for(let i=0; i<(personalCost.length); i += 2){
        personalCost2.push({...personalCost[i],
                     ...personalCost[i+1] })
     }
        
     for(let i=0; i<(travel.length); i += 2){
        travel2.push({...travel[i],
                     ...travel[i+1] })
     }
        
     for(let i=0; i<(subContracting.length); i += 2){
        subContracting2.push({...subContracting[i],
                     ...subContracting[i+1] })
     }
    
     for(let i=0; i<(projectSupplies.length); i += 2){
        projectSupplies2.push({...projectSupplies[i],
                     ...projectSupplies[i+1] })
     }
        
     for(let i=0; i<(maWarray.length); i += 2){
        maWarray2.push({...maWarray[i],
                     ...maWarray[i+1] })
     }
       
     for(let i=0; i<(peMarray.length); i += 2){
        peMarray2.push({...peMarray[i],
                     ...peMarray[i+1] })
     }
     for(let i=0; i<(loCarray.length); i += 2){
        loCarray2.push({...loCarray[i],
                     ...loCarray[i+1] })
     }
     var obj={personalCost2:personalCost2,travel2:travel2,subContracting2:subContracting2,projectSupplies2:projectSupplies2,maWarray2:maWarray2,peMarray2:peMarray2,loCarray2:loCarray2}
     return obj
 },
SOS:state=>{
    return state.sosAmount
}
},
  mutations: {
     ProjectBudjet: (state,payload)=>{
       state.PB=[]
       state.PB.push(payload)
      state.ProjectCode=state.PB[0][0].ProjectBudjetId
    },
    SOSinfo:(state,payload)=>{
        state.sosAmount=payload
    }
  },
  actions: {
    getData:(context,id)=>{
      let getUrl=`http://localhost:3000/PB/data/all/${id}`

      return new Promise((resolve)=>{
        resolve(axios.get(getUrl).then(results=>{
        context.commit('ProjectBudjet',results.data.result)
        }))

    })
  },
  getSos:(context)=>{
    return new Promise((resolve)=>{
        resolve(axios.get('http://localhost:3000/SOS/data').then(results=>{
        context.commit('SOSinfo',results.data.result[0].Amount)
        }))
        
        })

    }
},
  modules: {
  }
})