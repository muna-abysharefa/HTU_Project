export interface Center  {
    id: number;
    namecenters:string;
    city:string;
    vaccines: string[];
    location: string;
    longitude: number;
    latittude: number;
    firstDose: boolean;
    secondDose: boolean;
    distance: number;
    requirdappointment:boolean;
    
    workingtime:string;
}
