
import {ChronicKidneyDiseasePage, CoronaryHeartDiseasePage, DiabetesMellitusPage, HomePage,LiverCirrhosisPage,MesotheliomaPage} from "../pages";

export const routes = [
    {
        path:'/',
        element:<HomePage />
    },
    {
        path:'/detail/1',
        element:<MesotheliomaPage />
    },
    {
        path:'/detail/2',
        element:<LiverCirrhosisPage />
    },
    {
        path:'/detail/3',
        element:<ChronicKidneyDiseasePage />
    },
    {
        path:'/detail/4',
        element:<CoronaryHeartDiseasePage/>
    },
    {
        path:'/detail/5',
        element:<DiabetesMellitusPage/>
    },
]