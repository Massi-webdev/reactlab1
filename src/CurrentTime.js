import WorkDay from "./WorkDay";

const CurrentTime = () => {
    const day = new Date().getHours();
    let message;
    
    if (day>=6 && day<=18){
        message = "Work day, go to work"
    } else {
        message = "Rest day, chill"
    }
    

    return (
        <h1>{message}</h1>
    )
} 
export default CurrentTime;