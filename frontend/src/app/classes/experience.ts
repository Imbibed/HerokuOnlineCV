export class Experience{

    constructor(name: string, dates: string, jobName: string, activities: string){
        this.name = name;
        this.dates = dates;
        this.jobName = jobName;
        this.activities = activities;
    }

    name: string;
    dates: string;  // Format: from(month year) - to(month year)
    jobName: string;
    activities: string;
}