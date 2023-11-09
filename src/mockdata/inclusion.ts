export interface InclusionDifference {
    text: string,
    percentage: number,
    
}

export const inclusion: InclusionDifference[] = [{
    percentage: 31,
    text: 'Less isolation'
}, {
    percentage: 41,
    text: 'Lower sick leave'
    }, 
    {
       percentage: 59,
    text: 'Lower staff turnover' 
    },
    {
       percentage: 61,
    text: 'More satisfied employees' 
    },
    
]

export interface BoxText {
    text: string
}

export const boxText:BoxText[] = [
    {
text: 'Anonymous and objective analysis'
    },
     {
text: 'More aware employers'
    },
      {
text: 'Healthier work environment'
}
]